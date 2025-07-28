const { app, BrowserWindow, Menu, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');
const isDev = process.argv.includes('--dev');

let mainWindow;

function createWindow() {
  // 创建浏览器窗口
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(app.getAppPath(), 'src', 'preload.js'),
    },
    icon: path.join(__dirname, '../assets/icon.png'),
    show: false,
    titleBarStyle: 'default',
  });

  // 加载应用
  if (isDev) {
    // 开发模式：加载本地开发服务器
    mainWindow.loadURL('http://localhost:3000');
    mainWindow.webContents.openDevTools();
  } else {
    // 生产模式：加载构建后的文件
    mainWindow.loadFile(path.join(__dirname, '../build/index.html'));
  }

  // 当页面加载完成后显示窗口
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // 当窗口被关闭时，这个事件会被触发
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Electron 会在初始化后并准备创建浏览器窗口时，调用这个函数
app.whenReady().then(createWindow);

// 当全部窗口关闭时退出
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// 文件导入处理
ipcMain.handle('import-file', async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ['openFile'],
    filters: [
      { name: '支持的文件', extensions: ['json', 'csv', 'txt', 'xlsx'] },
      { name: 'JSON 文件', extensions: ['json'] },
      { name: 'CSV 文件', extensions: ['csv'] },
      { name: '文本文件', extensions: ['txt'] },
      { name: 'Excel 文件', extensions: ['xlsx'] },
    ],
  });

  if (!result.canceled && result.filePaths.length > 0) {
    const filePath = result.filePaths[0];
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return {
      path: filePath,
      content: fileContent,
      extension: path.extname(filePath),
    };
  }
  return null;
});

// 文件导出处理
ipcMain.handle('export-file', async (event, data, fileName) => {
  const result = await dialog.showSaveDialog(mainWindow, {
    defaultPath: fileName,
    filters: [{ name: 'Excel 文件', extensions: ['xlsx'] }],
  });

  if (!result.canceled) {
    return result.filePath;
  }
  return null;
});
