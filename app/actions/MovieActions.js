'use strict';


let Constants = require('./../Constants.js');

let dataUtil = require('../utils/DataUtil/');

let fileParser = require('../utils/FileParserUtil/');

module.exports = {
	loadMovies() {
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
		dataUtil.addNewMovie(movie).then(() => {
			this.flux.actions.movieActions.loadMovies();
		});
	},

	deleteMovie(id) {
		dataUtil.deleteMovie(id).then(() => {
			this.flux.actions.movieActions.loadMovies();
		});
	},

	loadMoviesFromFile(data) {
		fileParser.parseFile(data).then(data => {
			let counter = 0;
			data.result.forEach(movie => {
				if (movie.title) {
					counter++;
					this.flux.actions.movieActions.addNewMovie(movie);
				}			
			});

			this.dispatch(Constants.UI.LOAD_MSG, counter + " movies were added");

		}, (msg) => {
			this.dispatch(Constants.UI.LOAD_MSG, msg);
		});
	},

    sortMoviesAZ(inverse) {
        this.dispatch(Constants.UI.SORT_MOVIES, inverse);
    }
};
