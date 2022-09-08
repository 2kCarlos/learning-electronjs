// const { app, BrowserWindow } = require('electron');

import { app, BrowserWindow } from "electron";
import path from "path";

/**
 * creates a new browser window with a preload script and loads index.html file into this window
 * @returns {void}
 */
function createWindow() : BrowserWindow {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
    });

    // and load the index.html of the app.
    // mainWindow.loadFile(path.join(__dirname, "index.html"));
    mainWindow.loadURL("http://localhost:3000");

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
