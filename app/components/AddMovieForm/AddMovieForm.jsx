'use strict';

let React = require('react');
let mui = require('material-ui');
let TextField = mui.TextField;
let DropDownMenu = mui.DropDownMenu;
let Paper = mui.Paper;

let FloatingButtonSave = require('./../FloatingButtonSave/FloatingButtonSave.jsx');
let AddActorsBlock = require('./AddActorsBlock/AddActorsBlock.jsx');
let TopBar = require('./../TopBar/TopBar.jsx');

let validator = require('./../../utils/ValidationUtil/');

require('./AddMovieForm.less');

let MovieForm = React.createClass({

	getInitialState() {
		let movie = {
			title: '',
			year: '',
			format: 'DVD',
			actors: []
		};

		return {
			movie: movie,
			message: '',
			status: false,
			yearInputError: '',
			titleInputError: ''
		};
	},

	handleFormSubmit() { 
		console.log('trying to submit', this.state.movie);
		if (validator.isMovieValid(this.state.movie)){
			console.log('trying to submit - valid');
			this.props.onSubmit(this.state.movie);
			this.setState({
				message: 'Form is successfully submitted',
				status: true
			});
			setTimeout(this.clearMovie, 3000);
		} else {
			console.log('trying to submit - not valid');
			this.setState({
				message: 'Some of the fields are invalid, form cannot be submitted',
				status: false
			});
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
			titleInputError: (validator.isTitleValid(movie.title)) ? '' : 'Input is not valid'
		});
	},

	handleMovieYearChange(e) {
		let movie = this.state.movie;
		movie.year = e.target.value;
		this.setState({
			movie: movie,
			yearInputError: (validator.isYearValid(movie.year)) ? '' : 'Input is not valid'
		});
	},

	handleMovieFormatChange(e, selectedIndex, menuItem) {
		let movie = this.state.movie;
		movie.format = menuItem.text;
		this.setState({
			movie: movie
		});
	},

	getLoadMessage() {
		if (this.props.fileLoadMessage !== '') {
			return <p className="load-message"> {this.props.fileLoadMessage} </p>;
		} else {
			return '';
		}
	},

	getFormMessage() {
		if (this.state.message !== '') {
			let classes = (this.state.status) ? 'form-msg msg-success' : 'form-msg msg-error';
			return <p className={classes}> {this.state.message} </p>;
		}
		return <p className='form-msg hidden'> </p>;
	},

	clearMovie() {
		let movie = {
			title: '',
			year: '',
			format: 'DVD',
			actors: []
		};
		this.setState({
			movie: movie,
			yearInputError: '',
			titleInputError: ''
		});

	},

	render() {

		let menuItems = [  //TODO add prechosen format if editing
		   { payload: '1', text: 'DVD' },
		   { payload: '2', text: 'VHS' },
		   { payload: '3', text: 'Blu-Ray' }];

		let loadMessage = this.getLoadMessage();

		let formMessage = this.getFormMessage();

		console.log('formMessage', formMessage);

		return  <Paper zDepth={1} className="add-movie-form-container">
					<TopBar goBack={this.props.goBack} />
					{formMessage}
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

						<p className="file-input">or<i>    </i>    
						<input type="file" 
							   name="inputMovieFile"
							   accept=".txt"
                               ref="fileToImport"
                               onChange={this.props.onFileInput} /> </p>

                        {loadMessage}

						<FloatingButtonSave />

						

					</form>
				</Paper>;
	}
});

module.exports = MovieForm;