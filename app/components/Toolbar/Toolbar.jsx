'use strict';

let React = require('react');

let SearchBox = require("./../SearchBox/SearchBox.jsx");

let ReactRouter   = require('react-router');

require('./Toolbar.less');

let Toolbar = React.createClass({

	mixins: [ReactRouter.Navigation],

	goToMainPage() {
		this.transitionTo('movies');
	},

	render() {

		return  <div className="menubar">
					<div className="app-name" onClick={this.goToMainPage}> Movie Store </div>
					<SearchBox flux={this.props.flux}/>
				</div>;
	}
});

module.exports = Toolbar;