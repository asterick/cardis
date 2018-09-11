// Modules to control application life and create native browser window
import { app, BrowserWindow } from 'electron';
import { autoUpdater } from "electron-updater";

const isDev = require('electron-is-dev');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

app.on('ready', () => {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 800, 
        height: 600,
        show: false,
        frame: false,
        titleBarStyle: 'hidden'
    });

    // and load the index.html of the app.
    mainWindow.loadFile('./assets/index.html');
    mainWindow.on('ready-to-show', () => mainWindow.show());
    mainWindow.on('closed', () => app.quit());
});
