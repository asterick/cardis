import React from 'react';
import Updater from '../updater';

import {
    Alignment,
    Button,
    Classes,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading
} from "@blueprintjs/core";

export default () => 
    <Navbar style={{ userSelect: "none" }} fixedToTop={true} className="bp3-dark">
        <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>Cardis</NavbarHeading>
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
            <NavbarDivider />
            <Updater />
            <Button small={true} icon="settings" minimal={true} />
        </NavbarGroup>
    </Navbar>
