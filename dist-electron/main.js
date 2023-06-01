'use strict'
const n = require('electron')
let e
const o = () => {
  ;(e = new n.BrowserWindow({ webPreferences: { devTools: !0, contextIsolation: !1, nodeIntegration: !0 } })),
    process.env.VITE_DEV_SERVER_URL ? e.loadURL(process.env.VITE_DEV_SERVER_URL) : e.loadFile('dist/index.html'),
    e.webContents.openDevTools()
}
n.app.whenReady().then(o)
