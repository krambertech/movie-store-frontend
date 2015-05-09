'use strict';

let React = require('react/addons');
let mui = require('material-ui');
let FloatingActionButton = mui.FloatingActionButton;

require('./FloatingButtonAdd.less');

let FloatingButtonAdd = React.createClass({

	onFloatingButtonClick() {
		console.info('floating button click');
	},

	render() {

		return  <FloatingActionButton key={name} className="floating-button-add" onClick={this.props.onClick}>
					<i className="fa fa-plus"></i>
				</FloatingActionButton>;
	}
});

module.exports = FloatingButtonAdd;