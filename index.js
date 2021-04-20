const {app, BrowserWindow} = require('electron');
const path = require('path');

function createWindow()
{
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: path.join(__dirname, 'minecraft.ico'),
        frame: false,
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    });
    win.loadFile(path.join(app.getAppPath(), 'app/index.html'));
}

app.whenReady().then(()=>{
    createWindow();
    app.on('activate', ()=>{
        if(BrowserWindow.getAllWindows().length === 0)
        {
            createWindow();
        }
    });
});