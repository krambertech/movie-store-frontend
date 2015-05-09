'use strict';

class Api {
	constructor() {

	}

	get() {
		console.log('GET');
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

    addNewMovie(movie) {
        console.log('POST', movie);
        let deferred = $.Deferred();
        $.ajax({
            type: 'POST',
            url: "http://127.0.0.1:9125/addmovie",
            data: JSON.stringify(movie),
            success: (e) => {
                deferred.resolve(e);
            },
            error: (e) => {
                deferred.reject(e);
            },
            dataType: 'json',
            contentType: "application/json"
        });

        return deferred.promise();
    }

    getMovieById(id) {
        console.debug('api.getMovieById',id);
        let deferred = $.Deferred();
        $.ajax({
            type: 'GET',
            url: "http://127.0.0.1:9125/getmoviedetails",
            data: {id: id},
            success: (e) => {
                deferred.resolve(e);
            },
            error: (e) => {
                deferred.reject(e);
            },
            dataType: 'json',
            contentType: "application/json"
        });

        return deferred.promise();
    }

    deleteMovie(id) {
        console.log('POST delete', id);
        let deferred = $.Deferred();
        $.ajax({
            type: 'POST',
            url: "http://127.0.0.1:9125/deletemovie",
            data: JSON.stringify({id: id}),
            success: (e) => {
                deferred.resolve(e);
            },
            error: (e) => {
                deferred.reject(e);
            },
            dataType: 'json',
            contentType: "application/json"
        });

        return deferred.promise();
    }
}

module.exports = Api;