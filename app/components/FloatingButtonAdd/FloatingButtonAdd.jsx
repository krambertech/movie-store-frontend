'use strict';

let React = require('react/addons');
let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
let mui = require('material-ui');
let FloatingActionButton = mui.FloatingActionButton;

require('./FloatingButtonAdd.less');

let FloatingButtonAdd = React.createClass({

	onFloatingButtonClick() {
		console.info('floating button click');
	},

	render() {

		return  <FloatingActionButton key={name} className="floating-button-add" iconClassName="muidocs-icon-action-home" onClick={this.props.onClick}>
					<i className="fa fa-plus"></i>
				</FloatingActionButton>;
	}
});

module.exports = FloatingButtonAdd;