'use strict';

class ValidationUtil {
	
	constructor() {
		this.namePattern = /^[a-zA-Z .]{2,30}$/;
		this.yearPattern = /^(1[8-9]\d\d|20[0-2]\d)$/;
		this.titlePattern = /^[a-zA-Z() :.,!?&$']{2,40}$/;
		this.formatPattern =  /^(VHS|DVD|Blu-ray|bluray|blu ray)$/i;
	}

	isNameValid(value) {
		return this.namePattern.test(value);
	}

	isYearValid(value) {
		return this.yearPattern.test(value);
	}

	isTitleValid(value) {
		return this.titlePattern.test(value);
	}

	isFormatValid(value) {
		return this.formatPattern.test(value);
	}

	isMovieValid(movie) {
		let isValid = true;
		isValid = this.isTitleValid(movie.title) && 
				  this.isYearValid(movie.year) &&
				  this.isFormatValid(movie.format);
		movie.actors.forEach((actor) => {
			isValid = this.isNameValid(actor.name) &&
			       	  this.isNameValid(actor.surname);
		});
		return isValid;
	}

	isActorValid(actor) {
		let isValid = this.isNameValid(actor.name) &&
			       	  this.isNameValid(actor.surname);
		return isValid;
	}

}

module.exports = ValidationUtil;