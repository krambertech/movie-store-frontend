'use strict';

let React = require('react');
let mui = require('material-ui');
let TextField = mui.TextField;

let validator = require('./../../../utils/ValidationUtil/');

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
			nameInputError: (validator.isNameValid(this.state.newActor.name)) ? '' : 'Field is not valid'
		});
	},

	_handleInputSurnameChange(e) {
		this.state.newActor.surname = e.target.value;
		this.setState({
			surnameInputError: (validator.isNameValid(this.state.newActor.surname)) ? '' : 'Field is not valid'
		});
	},

	_handleAddActor() {	
		if(validator.isActorValid(this.state.newActor)) {
			this.props.handleActorAdd(this.state.newActor);
			this.setState({
				newActor: {}
			});
			this.clearInputs();
		}
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