'use strict';

let Fluxxor = require('fluxxor');
let Constants = require('./../Constants.js');

let MovieStore = Fluxxor.createStore({
	initialize() {
		this.movies = [];
		this.searchMovies = null;
		this.bindActions(Constants.SERVER.MOVIE_LIST, this.handleMovies,
						 Constants.SERVER.SEARCH_MOVIES, this.handleSearchMovies,
						 Constants.SERVER.SEARCH_END, this.handleSearchEnd);
	},

	handleSearchEnd() {
		this.searchMovies = null;
		this.emit('change');
	},

	handleMovies(movies) {
		console.log(movies);
		this.movies = movies;
		this.emit('change');
	},

	handleSearchMovies(movies) {
		this.searchMovies = movies;
		this.emit('change');
	},

	getMovies() {
		console.log("get", this.movies);
		if (this.searchMovies) {
			return this.searchMovies;
		}
		return this.movies;
	}
});

module.exports = MovieStore;