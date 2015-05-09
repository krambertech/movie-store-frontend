'use strict';

let React = require('react');
let mui = require('material-ui');
let TextField = mui.TextField;

require('./AddActorsBlock.less');

let AddActorsBlock = React.createClass({
	
	getInitialState() {
		return {
			newActor: {},
			nameInputError: '',
			surnameInputError: ''
		};
	},

	_handleInputNameChange(e) {
		this.state.newActor.name = e.target.value;
		this.setState({
			nameInputError: this.validateName(this.state.newActor.name)
		});
	},

	_handleInputSurnameChange(e) {
		this.state.newActor.surname = e.target.value;
		this.setState({
			surnameInputError: this.validateName(this.state.newActor.surname)
		});
	},

	isValid() {

		return (this.state.nameInputError === '') && (this.state.surnameInputError === '');
	},

	_handleAddActor() {	
		if(this.isValid()) {
			this.props.handleActorAdd(this.state.newActor);
			this.setState({
				newActor: {}
			});
			this.clearInputs();
		}
	},

	validateName(value) {
		if(/^[a-zA-Z0-9- ]*$/.test(value) === false) {
		    return 'Special characters forbidden';
		}
		if (value.length < 2) {
			return 'Too short';
		}
		if (value.length > 30) {
			return 'Too long';
		}
		return '';
	},

	clearInputs() {
		this.refs.actorName.clearValue();
		this.refs.actorSurname.clearValue();
	},

	getAllActors() {
		return this.props.actors.map((actor) => {
			return <li> {actor.name} {actor.surname} </li>; 
		});
	},

	render() {
		console.log(this.state.nameInputError, this.state.surnameInputError);
		return  <div className="add-actors-block">
					<label className="form-label"> Actors: </label>
					<ul>
						{this.getAllActors()}
					</ul>
					<TextField
					  ref="actorName"
					  hintText="Actor's name  " 
					  className="add-actor-field"
					  onChange={this._handleInputNameChange}
					  errorText={this.state.nameInputError}/>
					<TextField
					  ref="actorSurname"
					  hintText=" and surname " 
					  className="add-actor-field"
					  onChange={this._handleInputSurnameChange}
					  errorText={this.state.surnameInputError}/>
					<i className="fa fa-plus" onClick={this._handleAddActor}> </i>
					 
				</div>;
	}
});

module.exports = AddActorsBlock;