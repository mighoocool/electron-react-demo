const {app,Menu,Tray} = require('electron');
const path = require('path');

const creatTray = (win) =>{
    let tray = null;
    const iconPath = path.resolve(__dirname,'../resoures/icon.png')
    tray = new Tray(iconPath);
    const contextMenu = Menu.buildFromTemplate([
        {label:'显示主界面',click:()=>{win.show()}},
        {label:'退出',click:()=>{app.quit()}},
    ])
    tray.setToolTip('托盘');
    tray.setContextMenu(contextMenu)
}

module.exports = creatTray