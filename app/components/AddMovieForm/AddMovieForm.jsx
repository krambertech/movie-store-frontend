'use strict';

let React = require('react');
let FluxMixin = require('fluxxor').FluxMixin(React);
let mui = require('material-ui');
let TextField = mui.TextField;
let RaisedButton = mui.RaisedButton;
let DropDownMenu = mui.DropDownMenu;
let Paper = mui.Paper;

let FloatingButtonSave = require('./../FloatingButtonSave/FloatingButtonSave.jsx');
let AddActorsBlock = require('./AddActorsBlock/AddActorsBlock.jsx');
let TopBar = require('./../TopBar/TopBar.jsx');

require('./AddMovieForm.less');

let MovieForm = React.createClass({

	getInitialState() {
		let movie = {
			title: '',
			year: '',
			format: 'DVD',
			actors: []
		};
		/*let movieId = 0;
		if (this.props.movieId === undefined) {   //TODO
			movie = {
				title: this.props.movie.title || '',
				year: this.props.movie.title || '',
				format: this.props.movie.title || 'DVD',
				actors: this.props.movie.actors || []
			};

		}*/

		return {
			movie: movie,
			//movieId: movieId,
			yearInputError: '',
			titleInputError: ''
		};
	},


	validateYear(value) {
		if ( !Number.isInteger(+value) ) {
			return 'The field should be numeric';
		}
		if ( +value > 2020 ) {
			return 'The year is too big';
		}

		return '';

	},

	isValid() {
		return (this.state.titleInputError === '') && (this.state.yearInputError === '');
	},

	validateTitle(value) {
		if(/^[a-zA-Z0-9- ]*$/.test(value) === false) {
		    return 'The field cannot contain special characters';
		}
		if (value.length < 2) {
			return 'Too short';
		}
		if (value.length > 30) {
			return 'The title is too long';
		}
		return '';
	},

	handleFormSubmit() { 
		if (this.isValid()){
			this.props.onSubmit(this.state.movie);
		}
	},

	handleActorAdd(actor) {
		let movie = this.state.movie;
		movie.actors.push(actor);
		this.setState({
			movie: movie
		});
	},

	handleMovieTitleChange(e) {
		let movie = this.state.movie;
		movie.title = e.target.value;
		this.setState({
			movie: movie,
			titleInputError: this.validateTitle(movie.title)
		});
	},

	handleMovieYearChange(e) {
		let movie = this.state.movie;
		movie.year = e.target.value;
		this.setState({
			movie: movie,
			yearInputError: this.validateYear(movie.year)
		});
	},

	handleMovieFormatChange(e, selectedIndex, menuItem) {
		let movie = this.state.movie;
		movie.format = menuItem.text;
		this.setState({
			movie: movie
		});
	},




	render() {

		let menuItems = [  //TODO add prechosen format if editing
		   { payload: '1', text: 'DVD' },
		   { payload: '2', text: 'VHS' },
		   { payload: '3', text: 'Blu-Ray' }];


		return  <Paper zDepth={1} className="add-movie-form-container">
					<TopBar goBack={this.props.goBack} />
					<form id="add-movie-form" 
					  onSubmit={this.handleFormSubmit}>
						<label className="form-label">
							Movie details
						</label>

						<div className="form-group">
							<label className="left-label">
								Movie title
							</label>
							<TextField
							  hintText="Movie title"
							  className="add-movie-field"
							  value={this.state.movie.title}
							  onChange={this.handleMovieTitleChange}
							  errorText={this.state.titleInputError}/>
						</div>

						<div className="form-group">
							<label className="left-label">
								Year of release
							</label>
							<TextField
							  hintText="Year"
							  className="add-movie-field" 
							  value={this.state.movie.year}
							  onChange={this.handleMovieYearChange}
							  errorText={this.state.yearInputError}/>
						</div>

						<div className="form-group">
							<label className="left-label">
								Format
							</label>

							<DropDownMenu
							  menuItems={menuItems}
							  className="add-movie-field" 
							  onChange={this.handleMovieFormatChange}/>
						</div>

						<AddActorsBlock 
						  handleActorAdd={this.handleActorAdd} 
						  actors={this.state.movie.actors}/>

						<p className="file-input">or 
						<input type="file" 
							   name="inputMovieFile"
                               ref="fileToImport"
                               onChange={this.props.onFileInput} /> </p>


						<FloatingButtonSave />

						

					</form>
				</Paper>;
	}
});

module.exports = MovieForm;