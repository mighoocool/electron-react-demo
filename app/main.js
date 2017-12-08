const {app,BrowserWindow,ipcMain} = require('electron');
const creatTray = require('./main/tray')
const config = require('./config/config.dev')

let mainWindow;
const winUrl = process.env.NODE_ENV === 'development'? `http://localhost:${config.port}` : ''
app.on('window-all-closed',()=>{
    // app.quit();
});

app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        width:1324,
        height:768,
        backgroundColor:'#ffd800',
        // frame:false,
        x:20,
        y:440,
    });
    // mainWindow.loadURL(`file://${__dirname}/dist/index.html`)
    mainWindow.loadURL(`http://localhost:${config.port}`)
    mainWindow.on('closed',()=>{
        mainWindow = null;
    })
    creatTray(mainWindow)
    mainWindow.webContents.openDevTools()
    console.log(process.resourcesPath)
})

ipcMain.on('hide-window',()=>{
    mainWindow.hide()
})