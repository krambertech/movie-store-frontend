'use strict';

let React = require('react');

let SearchBox = require("./../SearchBox/SearchBox.jsx");


require('./Toolbar.less');

let Toolbar = React.createClass({
	render() {
		return  <div className="menubar">
					<div className="app-name"> Movie Store </div>
					<SearchBox flux={this.props.flux}/>
				</div>;
	}
});

module.exports = Toolbar;