import { app, BrowserWindow } from "electron";
import path from "path";
import isDev from "electron-is-dev";
const isMacOS = process.platform === 'darwin';

function createWindow() : BrowserWindow {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
    });

    console.log("isDev = " + isDev);
    
    if (isDev)
        mainWindow.loadURL("http://localhost:3000");
    else
        mainWindow.loadFile(path.join(__dirname, "../index.html"));

    // Open the DevTools
    mainWindow.webContents.openDevTools();
    return mainWindow;
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
    createWindow();

    app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
