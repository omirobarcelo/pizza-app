import '../node_modules/@clr/ui/clr-ui.min.css';
import '../node_modules/@clr/icons/clr-icons.min.css';
import '../node_modules/@webcomponents/custom-elements/custom-elements.min.js';
import '../node_modules/@clr/icons/clr-icons.min.js';

import App from './App.svelte';

var app = new App({
	target: document.body.querySelector('#app')
});

export default app;