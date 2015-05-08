'use strict';

let React = require('react');

let MoviePreview = require("./../../components/MoviePreview/MoviePreview.jsx");


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
			return <p> There are no movies  </p>;
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

	getMovieFormComponent() {
		var formHahs = {
			"addMovie": <RouteHandler flux={this.props.flux} />
		};
		if (formHahs[this.getParams().params]) {
			return formHahs[this.getParams().params];
		} else {
			return <div />;
		}
	},

	render() {
		let movies = this.getMovies();
		let addMovie = this.getMovieFormComponent();
		return <div className="movies">
					{addMovie}
					{movies}
					<div className="clearfix"></div>	
			   </div>;
	}
});

module.exports = Movies;