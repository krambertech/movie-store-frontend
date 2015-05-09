'use strict';


let Constants = require('./../Constants.js');

let dataUtil = require('../utils/DataUtil/');

let fileParser = require('../utils/FileParserUtil/');

module.exports = {
	loadMovies() {
		console.debug('loading');
		dataUtil.loadMovies().then((data) => {
			this.dispatch(Constants.SERVER.MOVIE_LIST, data);
		});
	},

	searchMovies(movies) {
		this.dispatch(Constants.SERVER.SEARCH_MOVIES, movies);
	},

	searchMoviesEnd() {
		this.dispatch(Constants.SERVER.SEARCH_END);
	},

	loadMovieById(id) {
		dataUtil.getMovieById(id).then(data => {
			this.dispatch(Constants.SERVER.GET_MOVIE, data);
		});
	},

	addNewMovie(movie) {
		dataUtil.addNewMovie(movie).then((data) => {
			console.log('actions', data);
			this.flux.actions.movieActions.loadMovies();
		});
	},

	deleteMovie(id) {
		dataUtil.deleteMovie(id).then((data) => {
			console.log('actions', data);
			this.flux.actions.movieActions.loadMovies();
		});
	},

	loadMoviesFromFile(data) {
		fileParser.parseFile(data).then(data => {
			data.forEach(movie => {
				this.flux.actions.movieActions.addNewMovie(movie);
			});
		});
	}
};
