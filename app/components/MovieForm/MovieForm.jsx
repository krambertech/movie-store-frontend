'use strict';

let React = require('react');
let mui = require('material-ui');
let TextField = mui.TextField;
let RaisedButton = mui.RaisedButton;
let DropDownMenu = mui.DropDownMenu;

let AddActorsBlock = require('./AddActorsBlock/AddActorsBlock.jsx');

require('./MovieForm.less');

let MovieForm = React.createClass({
	getInitialState() {
		return {
			movie: {
				actors: []
			}
		};
	},

	addActor(actor) {
		var movie = this.state.movie;
		movie.actors.push(actor);
		this.setState({
			movie: movie
		});
	},

	render() {
		var menuItems = [
		   { payload: '1', text: 'DVD' },
		   { payload: '2', text: 'VHS' },
		   { payload: '3', text: 'Blu-Ray' }];
		return  <form id="add-movie-form">
					<label className="form-label">
						Movie details
					</label>


					<TextField
					  hintText="Movie title"
					  className="add-movie-field"/>

					<TextField
					  hintText="Year"
					  className="add-movie-field" />

					<label>
						Format
					</label>

					<DropDownMenu
					  menuItems={menuItems}
					  className="add-movie-field" />

					<AddActorsBlock handleActorAdd={this.addActor} />

					<RaisedButton label="Add" primary={true} />

				</form>;
	}
});

module.exports = MovieForm;