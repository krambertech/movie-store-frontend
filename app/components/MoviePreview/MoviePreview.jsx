'use strict';

let React    = require('react');
let mui      = require('material-ui');
let classSet = require('classset');
let Paper    = mui.Paper;

require('./MoviePreview.less');

let MoviePreview = React.createClass({
	render() {
		let movie = this.props.movie;
		let mainClasses = classSet({
			"movie-preview": this.props.state == "small",
			"movie-details": this.props.state == "big",
			"movie-block": true,	
		});
		console.info(mainClasses, this.props.state);
		return  <Paper zDepth={1} className={mainClasses}>
					<h3> {movie.title} </h3>
					<h4> {movie.year} </h4>
					<p> <strong> Format:</strong> {movie.format} </p>
		 		</Paper>;
	}
});

module.exports = MoviePreview;