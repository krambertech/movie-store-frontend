'use strict';

let validator = require('./../ValidationUtil/');

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
		let block = [];
		for (let i = 0; i < lines.length; i++) {
			if (/\S/.test(lines[i])) { //if string is not empty or whitespaced
				block.push(lines[i]);
			} else if (block.length !== 0) {
				let movie = this.parseMovie(block);
				if (validator.isMovieValid(movie)) {
					movies.push(movie);
				}
				block = [];
			}
		}
		return movies;
	}
				

	parseMovie(block) {
		let title = '';
		let year = '';
		let format = '';
		let actors = [];

		let keyHash = {
			'title': (val) => {
				title = val;				
			},
			'release year': (val) => {
				year = val;	
			},
			'format': (val) => {
				format = val;
			},
			'stars': (val) => {
				actors = val.split(', ').map(data => {
					let actor = data.split(' ');
					let name = actor[0];
					let surname = actor.slice(1).join(' ');
					return {
						name: name,
						surname: surname
					};
				});	
			}
		}		

		for (var i = 0; i < 4; i++) {
			let value = this.getValue(block[i]);
			let key = this.getKey(block[i]);
			if (keyHash[key.toLowerCase()]) {
				keyHash[key.toLowerCase()](value);
			}
		}

		return {
			title: title,
			year: year,
			format: format,
			actors: actors
		};

	}

	getKey(line) {
		return line.split(': ')[0];
	}

	getValue(line) {
		return line.split(': ').slice(1).join(': ');
	}

}

module.exports = FileParser;