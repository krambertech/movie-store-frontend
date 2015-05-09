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
		return this.api.getMovieById(id);
	}

	deleteMovie(id){
		return this.api.deleteMovie(id);
	}

}

module.exports = DataUtil;