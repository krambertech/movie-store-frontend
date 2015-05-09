'use strict';

let Fluxxor = require('fluxxor');
let Constants = require('./../Constants.js');

let MovieStore = Fluxxor.createStore({
	initialize() {
		this.movies = [];
		this.searchMovies = null;
		this.movieDetails = {};
		this.movieFullDetails = {};
		this.bindActions(Constants.SERVER.MOVIE_LIST, this.handleMovies,
						 Constants.SERVER.SEARCH_MOVIES, this.handleSearchMovies,
						 Constants.SERVER.SEARCH_END, this.handleSearchEnd,
						 Constants.SERVER.GET_MOVIE, this.handleMovieDetails);
	},

	handleSearchEnd() {
		this.searchMovies = null;
		this.emit('change');
	},

	handleMovies(movies) {
		this.movies = movies;
		this.emit('change');
	},

	handleMovieDetails(movie) {
		this.movieDetails = movie;
		this.emit('change');
	},

	handleSearchMovies(movies) {
		this.searchMovies = movies;
		this.emit('change');
	},

	getMovies() {
		if (this.searchMovies) {
			return this.searchMovies;
		}
		return this.movies;
	},

	getMovieDetails() {
		return this.movieDetails;
	}
	
});

module.exports = MovieStore;