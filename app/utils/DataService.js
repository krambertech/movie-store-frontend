'use strict';

class DataService {
	
	constructor(api) {
		this.api = api;
	}

	loadMovies() {
		return this.api.get();
	}
}

module.exports = DataService;