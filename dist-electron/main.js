'use strict'
const n = require('electron')
let e
const s = () => {
  ;(e = new n.BrowserWindow({ webPreferences: { devTools: !0, contextIsolation: !1, nodeIntegration: !0 } })),
    process.env.VITE_DEV_SERVER_URL ? e.loadURL(process.env.VITE_DEV_SERVER_URL) : e.loadFile('dist/index.html'),
    e.webContents.openDevTools(),
    n.ipcMain.on('sendMsg', (t, o) => {
      console.log('ipcMain value', o)
    }),
    setTimeout(() => {
      e == null || e.webContents.send('mainMsg', 'main的消息')
    }, 2e3)
}
n.app.whenReady().then(s)
