'use strict';

class ValidationUtil {
	
	constructor() {
		this.namePattern = /^[a-zA-Z ]{2,30}$/;
		this.yearPattern = /^(1[8-9]\d\d|20[0-2]\d)$/;
		this.titlePattern = /^[a-zA-Z() :.,!?&$']{2,40}$/;
		this.formatPattern =  /^(VHS|DVD|Blu-ray|bluray|blu ray)$/i;
	}

	isNameValid(value) {
		return this.namePattern.test(value);
	}

	isYearValid(year) {
		return this.yearPattern.test(value);
	}

	isTitleValid(value) {
		return this.tirlePattern.test(value);
	}

	isFormatValid(value) {
		return this.formatPattern.test(value);
	}

}

module.exports = ValidationUtil;