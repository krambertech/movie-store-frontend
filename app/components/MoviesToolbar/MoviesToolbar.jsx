'use strict';

let React = require('react');


require('./MoviesToolbar.less');

let MoviesToolbar = React.createClass({
	render() {
		return  <div className="movies-toolbar">
					<i className="fa fa-sort-alpha-asc" onClick={this.props.onSortAZ}></i>
				</div>;
	}
});

module.exports = MoviesToolbar;