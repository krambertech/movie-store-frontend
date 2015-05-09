'use strict';

let React = require('react');

require('./Footer.less');

let Footer = React.createClass({

	render() {

		return  <footer className="footer">
					<p> Made with <i className="fa fa-heart"></i> by <a href="https://github.com/krambertech">krambertech</a></p>
				</footer>;
	}
});

module.exports = Footer;