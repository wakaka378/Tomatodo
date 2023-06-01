import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'path'
//app 控制应用程序的事件生命周期。
//BrowserWindow 创建并控制浏览器窗口。

let win: BrowserWindow | null
//定义全局变量获取 窗口实例

const createWindow = () => {
  win = new BrowserWindow({
    // 网页功能设置
    webPreferences: {
      devTools: true,
      contextIsolation: false,
      nodeIntegration: true,
      //允许html页面上的javascipt代码访问nodejs 环境api代码的能力（与node集成的意思）
    },
  })

  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
  } else {
    // Load your file
    win.loadFile('dist/index.html')
  }

  win.webContents.openDevTools()

  ipcMain.on('sendMsg', (_, value) => {
    console.log('ipcMain value', value)
  })

  setTimeout(() => {
    win?.webContents.send('mainMsg', 'main的消息')
  }, 2000)
}

//在Electron完成初始化时被触发
app.whenReady().then(createWindow)
