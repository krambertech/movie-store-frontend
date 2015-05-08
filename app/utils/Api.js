'use strict';

class Api {
	constructor() {

	}

	get() {
		console.log('hello');
		let deferred = $.Deferred();
		$.ajax({
            type: 'GET',
            url: "http://127.0.0.1:9125/movies",
            success: (e) => {
            	deferred.resolve(e);
            },
            error: (e) => {
            	deferred.reject(e);
            }
        });

		return deferred.promise();
	}
}

module.exports = Api;