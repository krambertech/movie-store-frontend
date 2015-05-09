'use strict';

let React    = require('react');
let mui      = require('material-ui');
let classSet = require('classset');
let Paper    = mui.Paper;
let FlatButton    = mui.FlatButton;


require('./MoviePreview.less');

let MoviePreview = React.createClass({

	onClick() {
		this.props.onClick(this.props.movie._id);
	},

	displayActors() {
		return this.props.movie.actors.map(actor => {
			return <span>{actor.name} {actor.surname}, </span>;
		})
	},

	deleteItem() {
		console.debug('delete');
		this.props.onDelete(this.props.movie._id);
	},

	render() {
		return  <Paper zDepth={1} className="movie-preview" >
					<h3> {this.props.movie.title} </h3>
					  <small> {this.props.movie.year}</small>
					<p> <strong> Format:</strong> {this.props.movie.format} </p>
					<div className="actors-collapsed hidden"> {this.displayActors()}</div>
					
					<i className="fa fa-times" onClick={this.deleteItem}></i>
		 		</Paper>;
	}
});

module.exports = MoviePreview;