'use strict';

let React = require('react');


require('./MoviesToolbar.less');

let MoviesToolbar = React.createClass({

	sortIconClick() {
		$('.fa').toggleClass('hidden');
		this.props.onSortAZ();
	},

	render() {
		return  <div className="movies-toolbar">
					<i className="fa fa-sort-alpha-asc" onClick={this.sortIconClick}></i>
					<i className="fa fa-sort-alpha-desc hidden" onClick={this.sortIconClick}></i>
				</div>;
	}
});

module.exports = MoviesToolbar;