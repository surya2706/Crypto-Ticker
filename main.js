const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow() {

    //create browser window
    win = new BrowserWindow({width: 320, height: 800});

    //load index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    //open devtools
    // win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}

//Run createWindow function
app.on('ready', createWindow);

//Quit when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'win32') {
        app.quit();
    }
})