'use strict';

let React = require('react');


require('./TopBar.less');

let TopBar = React.createClass({
	render() {
		return  <div className="top-toolbar"> 
					<div className="go-back" onClick={this.props.goBack}><i className="fa fa-angle-left"> </i> Back </div>
				</div>;
	}
});

module.exports = TopBar;