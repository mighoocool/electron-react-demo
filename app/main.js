const {app,BrowserWindow} = require('electron');

let mainWindow;

app.on('window-all-closed',()=>{
    app.quit();
});

app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        width:1024,
        height:768,
        backgroundColor:'#ffd800',
        frame:false
    });
    // mainWindow.loadURL(`file://${__dirname}/dist/index.html`)
    mainWindow.loadURL(`http://localhost:8888`)
    mainWindow.on('closed',()=>{
        mainWindow = null;
    })
    mainWindow.webContents.openDevTools()
})