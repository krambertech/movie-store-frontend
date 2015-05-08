'use strict';

let $ = window.$ = require('jquery');

let React       = require('react');
let ReactRouter = require('react-router');
let Fluxxor = require('fluxxor');

let stores = require('./stores/');
let actions = require('./actions/');

let Router = require('./Router.jsx');

let flux = new Fluxxor.Flux(stores, actions);

$(document).ready( () => {
	window.React = React;

	ReactRouter.run(Router, (Handler) => {
		React.render(<Handler flux={flux}/>, document.getElementById('react-wrapper') );
	});
});