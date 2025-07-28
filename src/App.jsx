import React, { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { DatabaseProvider } from './contexts/database';
import { SettingsProvider } from './contexts/setting';
import { ThemeProvider } from './contexts/theme';
import GlobalStyles from './styles/global';
import LoadingScreen from './components/LoadingScreen';

import AppInitializer from './components/AppInitializer';

import Router from './router';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 初始化应用程序
    const initApp = async () => {
      try {
        console.log('正在初始化 React 应用程序...');

        // 等待一小段时间模拟初始化过程
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setIsLoading(false);
        console.log('React 应用程序初始化完成');
      } catch (err) {
        console.error('应用程序初始化失败:', err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    initApp();
  }, []);

  if (error) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          fontSize: '18px',
        }}
      >
        应用程序初始化失败: {error}
      </div>
    );
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider>
      <DatabaseProvider>
        <SettingsProvider>
          <AppInitializer>
            <GlobalStyles />
            <RouterProvider router={Router} />
          </AppInitializer>
        </SettingsProvider>
      </DatabaseProvider>
    </ThemeProvider>
  );
}

export default App;
