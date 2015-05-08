'use strict';

let React = require('react');
let mui = require('material-ui');
let TextField = mui.TextField;
let FlatButton = mui.FlatButton;

require('./AddActorsBlock.less');

let AddActorsBlockController = React.createClass({

	getInitialState() {
		return {
			film: {}
		}
	},

	addNewActor() {
		this.getFlux().actions.bla.addNewActor(film);
	}




	render() {
		return  <AddActorsBlock />;
	}
});

module.exports = AddActorsBlockController;