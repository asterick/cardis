// Import our global styles
import style from "./style.scss";

import React from 'react';
import Editor from "./editor";
import TitleBar from "./titlebar";

export default () =>
	<div>
		<TitleBar />
	    <Editor />
	</div>
