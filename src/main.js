const {app, BrowserWindow, Menu} = require('electron')


let browserWindow

const createBrowserWindow = () => {
    browserWindow = new BrowserWindow({
        width: 800,
        height: 600
    })

    Menu.setApplicationMenu(
        Menu.buildFromTemplate([
            {
                label: app.name,
                submenu: [
                    {
                        label: 'Exit',
                        click: () => app.quit()
                    }
                ]
            }
        ])
    )

    browserWindow.loadFile('index.html')

    browserWindow.on('closed', () => browserWindow = null)

    browserWindow.webContents.openDevTools()
}

app.on('ready', createBrowserWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
    if (browserWindow === null) createBrowserWindow()
}) 
