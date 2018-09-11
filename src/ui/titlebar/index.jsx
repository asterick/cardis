import React from 'react';

import {
    Alignment,
    Button,
    Classes,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading
} from "@blueprintjs/core";

const platform = require('electron-platform');

export default () => 
    <Navbar fixedToTop={true} style={{ 
            paddingLeft: "70px", 
            userSelect: "none",
            WebkitAppRegion: "drag"
        }}>
        <NavbarGroup align={platform.isDarwin ? Alignment.RIGHT : Alignment.LEFT}>
            <NavbarHeading>Cardis</NavbarHeading>
        </NavbarGroup>
        {
            !platform.isDarwin &&
            <NavbarGroup align={Alignment.RIGHT}>
                <NavbarDivider />
                <Button small={true} className={Classes.MINIMAL} icon="minus" />
                <Button small={true} className={Classes.MINIMAL} icon="square" />
                <Button small={true} className={Classes.MINIMAL} icon="cross" />
            </NavbarGroup>
        }
    </Navbar>
