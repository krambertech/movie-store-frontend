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
						 Constants.UI.LOAD_MSG, this.handleLoadMsg,
						 Constants.UI.SORT_MOVIES, this.handleSortMovies);
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
		if(a.title < b.title) return -1;
        if(a.title > b.title) return 1;
        return 0;
	},

	_comparatorZA(a, b) {
        if(a.title > b.title) return -1;
        if(a.title < b.title) return 1;
        return 0;
    },

	handleSortMovies(inverse) {
        let compare = inverse ? this._comparatorZA : this._comparatorAZ;
        if (this.searchMovies) {
            this.searchMovies.sort(compare);
        } else {
            this.movies.sort(compare);
        }
        this.emit('change');
    }
	
});

module.exports = MovieStore;