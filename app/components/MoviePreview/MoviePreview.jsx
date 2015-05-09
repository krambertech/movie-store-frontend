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
		let linkTo = "/movies/"+this.props.movie._id;
		return  <Paper zDepth={1} className="movie-preview" >
					<div className="heading">
						<h3> {this.props.movie.title} </h3>
					</div>
					<h5> {this.props.movie.format} </h5>

					<p onClick={this.onClick}>Discover more</p>
					
					
					<i className="fa fa-times" onClick={this.deleteItem}></i>
		 		</Paper>;
	}
});

module.exports = MoviePreview;