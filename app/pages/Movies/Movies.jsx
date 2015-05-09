'use strict';

let React = require('react');

let MoviePreview = require("./../../components/MoviePreview/MoviePreview.jsx");
let AddMovieBlock = require("./../../components/AddMovieBlock/AddMovieBlock.jsx");
let AddMovieForm = require("./../../components/AddMovieForm/AddMovieForm.jsx");
let FloatingButtonAdd = require('./../../components/FloatingButtonAdd/FloatingButtonAdd.jsx');

let FluxMixin = require('fluxxor').FluxMixin(React);
let StoreWatchMixin = require('fluxxor').StoreWatchMixin;
let ReactRouter = require('react-router');
let {RouteHandler} = ReactRouter;


require('./Movies.less');

let Movies = React.createClass({

	mixins: [FluxMixin, 
		     StoreWatchMixin('movieStore'), 
		     ReactRouter.State,
		     ReactRouter.Navigation],

	getStateFromFlux() {
		return {
			movies: this.getFlux().store('movieStore').getMovies()
		};
	},

	componentDidMount() {
		this.getFlux().actions.movieActions.loadMovies();
	},

	handleMoviePreviewClick(id) {
		this.context.router.transitionTo('movieDetails',{id: id});
	},

	handleMovieDelete(id) {
		this.getFlux().actions.movieActions.deleteMovie(id);
	},

	handleAddMovieClick(){
		this.context.router.transitionTo('addMovie');
	},

	getMovies() {
		if (this.state.movies.length === 0) {
			return <p className="no-movies-found"> There are no movies found </p>;
		}

		return this.state.movies.map( (movie, i) => {
			let param = "small";
			if (this.getParams().id === movie._id) {
				param = "big";
			}
			return <MoviePreview 
					 key={i} 
					 movie={movie} 
					 state={param} 
					 onClick={this.handleMoviePreviewClick} 
					 onDelete={this.handleMovieDelete}/>;
		});
	},

	render() {
		let movies = this.getMovies();
		return <div className="movies">	
						{movies}
					<FloatingButtonAdd onClick={this.handleAddMovieClick}/>
			   </div>;
	}
});

module.exports = Movies;