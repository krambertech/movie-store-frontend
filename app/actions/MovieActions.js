'use strict';


let Constants = require('./../Constants.js');

let dataService = require('../utils/');


module.exports = {
	loadMovies() {
		dataService.loadMovies().then((data) => {
			this.dispatch(Constants.SERVER.MOVIE_LIST, data);
		});
	},

	searchMovies(movies) {
		this.dispatch(Constants.SERVER.SEARCH_MOVIES, movies);
	},

	searchMoviesEnd() {
		this.dispatch(Constants.SERVER.SEARCH_END);
	}
};
