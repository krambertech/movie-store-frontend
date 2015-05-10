'use strict';

let React    = require('react');
let mui      = require('material-ui');
let Paper    = mui.Paper;


require('./MoviePreview.less');

let MoviePreview = React.createClass({

	getInitialState() {
		return {
			classes: 'movie-preview'
		};
	},

	onClick() {
		this.props.onClick(this.props.movie._id);
	},

	displayActors() {
		return this.props.movie.actors.map(actor => {
			return <span>{actor.name} {actor.surname}, </span>;
		});
	},

	deleteItem() {
		this.setState({
			classes: 'movie-preview movie-deleted'
		});
		setTimeout(() => {
			this.setState({
				classes: 'movie-preview movie-deleted hidden'
			});
			this.props.onDelete(this.props.movie._id);
		}, 1000);
		
	},

	render() {

		return  <Paper zDepth={1} className={this.state.classes} >
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