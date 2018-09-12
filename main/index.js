// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron');
const { autoUpdater } = require("electron-updater");

const isDev = require('electron-is-dev');
const nodegit = require('nodegit');

app.on('ready', () => {
    // Create the browser window.
    let mainWindow = new BrowserWindow({
        width: 800, 
        height: 600,
        show: false
    });

    // and load the index.html of the app.
    mainWindow.loadFile('./assets/index.html');
    mainWindow.on('ready-to-show', () => mainWindow.show());
    mainWindow.on('closed', () => app.quit());
});
