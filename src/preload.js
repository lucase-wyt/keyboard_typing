const { contextBridge, ipcRenderer } = require('electron');

// 暴露安全的 API 给渲染进程
contextBridge.exposeInMainWorld('electronAPI', {
  // 文件操作
  importFile: () => ipcRenderer.invoke('import-file'),
  exportFile: (data, fileName) =>
    ipcRenderer.invoke('export-file', data, fileName),

  // 应用信息
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),

  // 通知系统
  showNotification: (title, body) =>
    ipcRenderer.invoke('show-notification', title, body),

  // 文件系统操作
  selectDirectory: () => ipcRenderer.invoke('select-directory'),

  // 事件监听
  onAppUpdate: (callback) => {
    const subscription = (event, ...args) => callback(...args);
    ipcRenderer.on('app-update', subscription);
    return () => ipcRenderer.removeListener('app-update', subscription);
  },

  onAppClose: (callback) => {
    const subscription = (event, ...args) => callback(...args);
    ipcRenderer.on('app-close', subscription);
    return () => ipcRenderer.removeListener('app-close', subscription);
  },
});

// 暴露开发模式标识
contextBridge.exposeInMainWorld('isDev', process.argv.includes('--dev'));
