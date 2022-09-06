//NOTE: Use this if you want to use the fully qualified names, such as Electron.BrowserWindow, Electron.app, etc.:
// import Electron from "electron";

//NOTE: Use this if you want to use the shorthand names without needing to write
//Electron.BrowserWindow and Electron.app for Browserwindow and app, respectively:
import { app, BrowserWindow } from "electron";
import path from "path";

function createWindow() : BrowserWindow {
    const window : BrowserWindow = new BrowserWindow({
        width: 800,
        height: 600,
        show: false
    });
    
    window.loadFile("public/index.html");
    window.once("ready-to-show", window.show);
    return window;
};

app.whenReady().then(createWindow);
