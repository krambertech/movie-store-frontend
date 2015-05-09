'use strict';

let React = require('react');
let mui = require('material-ui');
let Paper = mui.Paper;


require('./AddMovieBlock.less');

let AddMovieBlock = React.createClass({
	render() {
		return  <Paper zDepth={1} circle={true} className="add-movie-block" onClick={this.props.onClick} />;
	}
});

module.exports = AddMovieBlock;