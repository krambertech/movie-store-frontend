'use strict';

let validator = require('./../ValidationUtil/')

class FileParser {
	
	constructor() {
		
	}

	parseFile(file) {
		let deferred = $.Deferred();
		this.getTextFromFile(file).then(text => {
			let result = this.parse(text);
			deferred.resolve(result);
		});
		return deferred.promise();
	}

	getTextFromFile(file) {
		let deferred = $.Deferred();
		let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = ( e => {
            deferred.resolve(e.target.result);
        });
        return deferred.promise();
	}

	parse(text) {
		let lines = text.split(/\n/);
		let movies = [];
		let movie = {};
		for (var i = 0; i < lines.length; i++) {
			if(lines[i] !== '') {
				var line = lines[i].split(': ');
				let value = line.slice(1).join(': ');
				let key = line[0];
				var keyHash = {
					'Title': () => {
						movie.title = value;
					},
					'Release Year': () => {
						movie.year = value;
					},
					'Stars': () => {
						movie.actors = value.split(', ').map(data => {
							let actor = data.split(' ');
							return {
								name: actor[0],
								surname: actor[1]
							};
						});	
					}
				}
				if (keyHash[key]) {
					keyHash[key]();
				}
			} else {
				if (movie.title !== undefined) {
					movies.push(movie);
					movie = {};
				}
				
			}
			
		}
		return movies;
	}

	parseKeyValue(line) {

	}

	

}

module.exports = FileParser;