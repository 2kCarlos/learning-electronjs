//NOTE: Use this if you want to use the fully qualified names, such as Electron.BrowserWindow, Electron.app, etc.:
// import Electron from "electron";

//NOTE: Use this if you want to use the shorthand names without needing to write
//Electron.BrowserWindow and Electron.app for Browserwindow and app, rsepectively:
import { app, BrowserWindow } from "electron";

function createWindow() : BrowserWindow {
    const window : BrowserWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    window.loadFile("src/index.html");
    return window;
};

app.whenReady().then(createWindow);
