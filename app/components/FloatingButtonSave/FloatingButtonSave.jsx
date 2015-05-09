'use strict';

let React = require('react');
let mui = require('material-ui');
let FloatingActionButton = mui.FloatingActionButton;

require('./FloatingButtonSave.less');

let FloatingButtonSave = React.createClass({

	onFloatingButtonClick() {
		console.info('floating button click');
	},

	render() {

		return  <FloatingActionButton className="floating-button-save" onClick={this.onFloatingButtonClick}>
					<i className="fa fa-save"></i>
				 </FloatingActionButton>;
	}
});

module.exports = FloatingButtonSave;