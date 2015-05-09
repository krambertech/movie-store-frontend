'use strict';

let React         = require('react');
let FluxMixin = require('fluxxor').FluxMixin(React);

let AddMovieForm = require('./../../components/AddMovieForm/AddMovieForm.jsx');

require('./AddMovie.less');

let AddMovie = React.createClass({

	mixins: [FluxMixin],

	handleFormSubmit(movie) {
		this.getFlux().actions.movieActions.addNewMovie(movie);
	},

	handleImportFromFile(e) {
		this.getFlux().actions.movieActions.loadMoviesFromFile(e.target.files[0]);
	},

	render() {
		return <div className="add-movie">
					<AddMovieForm 
						movie={{}}
						editing={false} 
						onSubmit={this.handleFormSubmit}
						onFileInput={this.handleImportFromFile}/>
					
			   </div>;
	}
});

module.exports = AddMovie;