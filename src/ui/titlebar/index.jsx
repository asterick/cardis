import React from 'react';
import style from './titlebar.css';

const platform = require('electron-platform');

// This is the platform specific titlebar
const className = platform.isDarwin ? "titlebar mac" : "titlebar";

export default () => 
    <div className={className}>Cardis</div>
