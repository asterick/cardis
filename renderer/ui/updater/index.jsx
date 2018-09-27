import React from 'react';

import {
    Button,
    Tooltip,
    Position,
    Spinner
} from "@blueprintjs/core";

export default () =>     
	<Tooltip content="Update available" position="auto">
        <Button minimal={true} icon="download" />
        <Spinner />
    </Tooltip>

