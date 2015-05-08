'use strict';

let React = require('react');

let MoviePreview = require("./../../components/MoviePreview/MoviePreview.jsx");
let AddMovieBlock = require("./../../components/AddMovieBlock/AddMovieBlock.jsx");
let AddMovieForm = require("./../../components/AddMovieForm/AddMovieForm.jsx");

let FluxMixin = require('fluxxor').FluxMixin(React);
let StoreWatchMixin = require('fluxxor').StoreWatchMixin;
let ReactRouter = require('react-router');
let {RouteHandler} = ReactRouter;


require('./Movies.less');

let Movies = React.createClass({

	mixins: [FluxMixin, 
		     StoreWatchMixin('movieStore'), ReactRouter.State],

	getStateFromFlux() {
		return {
			movies: this.getFlux().store('movieStore').getMovies()
		};
	},

	componentDidMount() {
		this.getFlux().actions.movieActions.loadMovies();
	},

	getMovies() {
		if (this.state.movies.length === 0) {
			return <p className="no-movies-found"> There are no movies found </p>;
		}

		return this.state.movies.map( (movie) => {
			let param = "small";
			if (this.getParams().id === movie._id) {
				param = "big";
			}
			console.log(movie._id);
			return <MoviePreview movie={movie} state={param} />;
		});
	},

	showAddMovieForm() {
		
	},

	getMovieFormComponent() {


		let formHash = {
			"addMovie": <RouteHandler flux={this.props.flux} />
		};
		if (formHash[this.getParams().params]) {
			return formHash[this.getParams().params];
		} else {
			return <AddMovieBlock onClick={this.showAddMovieForm}/>;
		}
	},

	render() {
		let movies = this.getMovies();
		let addMovie = this.getMovieFormComponent();
		return <div className="movies">	
					<AddMovieForm movie={false}/>		
					{movies}
					
					<div className="clearfix"></div>
					{addMovie}	
			   </div>;
	}
});

module.exports = Movies;