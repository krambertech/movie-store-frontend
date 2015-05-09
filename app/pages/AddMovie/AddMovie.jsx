'use strict';

let React         = require('react');
let ReactRouter = require('react-router');
let FluxMixin = require('fluxxor').FluxMixin(React);
let StoreWatchMixin = require('fluxxor').StoreWatchMixin;

let AddMovieForm = require('./../../components/AddMovieForm/AddMovieForm.jsx');


require('./AddMovie.less');

let AddMovie = React.createClass({

	mixins: [FluxMixin,
			 ReactRouter.Navigation,
			 StoreWatchMixin('movieStore')],

	getStateFromFlux(){
		return {
			loadMessage: this.getFlux().store('movieStore').getLoadMessage()
		};
	},

	handleFormSubmit(movie) {
		this.getFlux().actions.movieActions.addNewMovie(movie);
	},

	handleImportFromFile(e) {
		this.getFlux().actions.movieActions.loadMoviesFromFile(e.target.files[0]);
	},

	goToMoviesPage() {
		this.context.router.transitionTo('movies');
	},

	render() {
		return <div className="add-movie">					
					<AddMovieForm 
						goBack={this.goToMoviesPage}
						movie={{}}
						editing={false} 
						onSubmit={this.handleFormSubmit}
						onFileInput={this.handleImportFromFile}
						fileLoadMessage={this.state.loadMessage}/>					
			   </div>;
	}
});

module.exports = AddMovie;