'use strict';

let React         = require('react');
let ReactRouter   = require('react-router');
let {RouteHandler} = ReactRouter;
require('./Root.less');

let MenuBar = require('./../../components/Toolbar/Toolbar.jsx');
console.log(require("typeahead.js")); 



let Root = React.createClass({

	render() {
		return <div className="app">
					<MenuBar flux={this.props.flux}/>
					<RouteHandler flux={this.props.flux} />
			   </div>;
	}
});

module.exports = Root;