import React, { createContext, useContext, useEffect, useState } from 'react';

const DatabaseContext = createContext();

export const useDatabase = () => {
  const context = useContext(DatabaseContext);
  if (!context) {
    throw new Error('useDatabase must be used within a DatabaseProvider');
  }
  return context;
};

// IndexedDB 数据库管理类
class DatabaseManager {
  constructor() {
    this.dbName = 'TypingPracticeDB';
    this.dbVersion = 1;
    this.db = null;
  }

  async init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.dbVersion);

      request.onerror = () => {
        reject(new Error('数据库打开失败'));
      };

      request.onsuccess = (event) => {
        this.db = event.target.result;
        resolve(this.db);
      };

      request.onupgradeneeded = (event) => {
        const db = event.target.result;

        // 创建词库表
        if (!db.objectStoreNames.contains('libraries')) {
          const libraryStore = db.createObjectStore('libraries', {
            keyPath: 'id',
            autoIncrement: true,
          });
          libraryStore.createIndex('name', 'name', { unique: false });
          libraryStore.createIndex('level', 'level', { unique: false });
          libraryStore.createIndex('type', 'type', { unique: false });
        }

        // 创建练习记录表
        if (!db.objectStoreNames.contains('practiceRecords')) {
          const recordStore = db.createObjectStore('practiceRecords', {
            keyPath: 'id',
            autoIncrement: true,
          });
          recordStore.createIndex('date', 'date', { unique: false });
          recordStore.createIndex('libraryId', 'libraryId', { unique: false });
        }

        // 创建设置表
        if (!db.objectStoreNames.contains('settings')) {
          const settingsStore = db.createObjectStore('settings', {
            keyPath: 'key',
          });
        }
      };
    });
  }

  async getLibraries() {
    if (!this.db) throw new Error('数据库未初始化');

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['libraries'], 'readonly');
      const store = transaction.objectStore('libraries');
      const request = store.getAll();

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(new Error('获取词库失败'));
    });
  }

  async addLibrary(library) {
    if (!this.db) throw new Error('数据库未初始化');

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['libraries'], 'readwrite');
      const store = transaction.objectStore('libraries');
      const request = store.add(library);

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(new Error('添加词库失败'));
    });
  }

  async updateLibrary(library) {
    if (!this.db) throw new Error('数据库未初始化');

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['libraries'], 'readwrite');
      const store = transaction.objectStore('libraries');
      const request = store.put(library);

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(new Error('更新词库失败'));
    });
  }

  async deleteLibrary(id) {
    if (!this.db) throw new Error('数据库未初始化');

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['libraries'], 'readwrite');
      const store = transaction.objectStore('libraries');
      const request = store.delete(id);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(new Error('删除词库失败'));
    });
  }

  async addPracticeRecord(record) {
    if (!this.db) throw new Error('数据库未初始化');

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['practiceRecords'], 'readwrite');
      const store = transaction.objectStore('practiceRecords');
      const request = store.add(record);

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(new Error('添加练习记录失败'));
    });
  }

  async getPracticeRecords(limit = 100) {
    if (!this.db) throw new Error('数据库未初始化');

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['practiceRecords'], 'readonly');
      const store = transaction.objectStore('practiceRecords');
      const index = store.index('date');
      const request = index.openCursor(null, 'prev');

      const records = [];
      let count = 0;

      request.onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor && count < limit) {
          records.push(cursor.value);
          count++;
          cursor.continue();
        } else {
          resolve(records);
        }
      };

      request.onerror = () => reject(new Error('获取练习记录失败'));
    });
  }

  async getSetting(key) {
    if (!this.db) throw new Error('数据库未初始化');

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['settings'], 'readonly');
      const store = transaction.objectStore('settings');
      const request = store.get(key);

      request.onsuccess = () => resolve(request.result?.value);
      request.onerror = () => reject(new Error('获取设置失败'));
    });
  }

  async setSetting(key, value) {
    if (!this.db) throw new Error('数据库未初始化');

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['settings'], 'readwrite');
      const store = transaction.objectStore('settings');
      const request = store.put({ key, value });

      request.onsuccess = () => resolve();
      request.onerror = () => reject(new Error('保存设置失败'));
    });
  }
}

export function DatabaseProvider({ children }) {
  const [db, setDb] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initDatabase = async () => {
      try {
        const dbManager = new DatabaseManager();
        await dbManager.init();
        setDb(dbManager);
        setIsInitialized(true);
        console.log('数据库初始化完成');
      } catch (err) {
        console.error('数据库初始化失败:', err);
        setError(err.message);
      }
    };

    initDatabase();
  }, []);

  const value = {
    db,
    isInitialized,
    error,
  };

  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
}
