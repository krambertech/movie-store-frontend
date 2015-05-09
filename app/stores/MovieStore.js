'use strict';

let Fluxxor = require('fluxxor');
let Constants = require('./../Constants.js');

let MovieStore = Fluxxor.createStore({
	initialize() {
		this.movies = [];
		this.searchMovies = null;
		this.loadMessage = '';
		this.movieDetails = {};
		this.movieFullDetails = {};
		this.bindActions(Constants.SERVER.MOVIE_LIST, this.handleMovies,
						 Constants.SERVER.SEARCH_MOVIES, this.handleSearchMovies,
						 Constants.SERVER.SEARCH_END, this.handleSearchEnd,
						 Constants.SERVER.GET_MOVIE, this.handleMovieDetails,
						 Constants.SERVER.LOAD_MSG, this.handleLoadMsg);
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

	handleLoadMsg(msg) {
		this.loadMessage = msg;
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
	},

	getLoadMessage() {
		return this.loadMessage;
	},

	_comparatorAZ(a, b) {
		return (a.title > b.title);
	},

	sortMoviesAlpha() {
		console.log('sort1', this.movies);
		if (this.searchMovies) {
			this.searchMovies.sort(this._comparatorAZ);
			return this.searchMovies;
		} else {
			this.movies.sort(this._comparatorAZ);
			console.log('sort2', this.movies);
			return this.movies;
		}
		console.log('sort2', this.movies);
	}
	
});

module.exports = MovieStore;