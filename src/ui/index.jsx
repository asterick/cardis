// Setup our styles
import css from 'normalize.css/normalize';
import icons from '@blueprintjs/core/lib/css/blueprint';
import blueprint_css from '@blueprintjs/icons/lib/css/blueprint-icons';

import { Button } from "@blueprintjs/core";

import React from 'react';
import Editor from "./editor";
import TitleBar from "./titlebar";

export default () =>
	<div style={{ left: "0", right: "0", top: "0", bottom: "0", position: "fixed" }}>
		<TitleBar />
	    <Button icon="refresh">blerp</Button>
	    <Editor />
	</div>;
