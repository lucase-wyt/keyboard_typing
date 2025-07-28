import React, { createContext, useContext, useEffect, useState } from 'react';
import { useDatabase } from './database';

const SettingsContext = createContext();

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

const defaultSettings = {
  theme: 'default',
  soundEnabled: true,
  showKeyboard: true,
  showProgress: true,
  difficulty: 'normal',
  practiceTime: 300, // 5分钟
  language: 'zh-CN',
  fontSize: 16,
  autoNext: false,
  showHints: true,
};

export function SettingsProvider({ children }) {
  const { db, isInitialized } = useDatabase();
  const [settings, setSettings] = useState(defaultSettings);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadSettings = async () => {
      if (!isInitialized || !db) return;

      try {
        const savedSettings = {};

        // 加载所有设置
        for (const key of Object.keys(defaultSettings)) {
          const value = await db.getSetting(key);
          if (value !== undefined) {
            savedSettings[key] = value;
          }
        }

        setSettings((prev) => ({ ...prev, ...savedSettings }));
        setIsLoading(false);
        console.log('设置加载完成:', savedSettings);
      } catch (error) {
        console.error('加载设置失败:', error);
        setIsLoading(false);
      }
    };

    loadSettings();
  }, [isInitialized, db]);

  const updateSetting = async (key, value) => {
    if (!db) return;

    try {
      await db.setSetting(key, value);
      setSettings((prev) => ({ ...prev, [key]: value }));
      console.log(`设置已更新: ${key} = ${value}`);
    } catch (error) {
      console.error('更新设置失败:', error);
      throw error;
    }
  };

  const resetSettings = async () => {
    if (!db) return;

    try {
      for (const [key, value] of Object.entries(defaultSettings)) {
        await db.setSetting(key, value);
      }
      setSettings(defaultSettings);
      console.log('设置已重置为默认值');
    } catch (error) {
      console.error('重置设置失败:', error);
      throw error;
    }
  };

  const value = {
    settings,
    isLoading,
    updateSetting,
    resetSettings,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}
