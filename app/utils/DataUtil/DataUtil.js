'use strict';

class DataUtil {
	
	constructor(api) {
		this.api = api;
	}

	loadMovies() {
		return this.api.get();
	}

	addNewMovie(data) {
		return this.api.addNewMovie(data);
	}

	getMovieById(id) {
		console.debug('dataService.getMovieById',id);
		return this.api.getMovieById(id);
	}

	deleteMovie(id){
		console.debug('dataService.deleteMovie',id);
		return this.api.deleteMovie(id);
	}

}

module.exports = DataUtil;