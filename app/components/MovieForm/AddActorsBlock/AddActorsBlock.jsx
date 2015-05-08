'use strict';

let React = require('react');
let mui = require('material-ui');
let TextField = mui.TextField;
let FlatButton = mui.FlatButton;

require('./AddActorsBlock.less');

let AddActorsBlock = React.createClass({
	
	getInitialState() {
		return {
			actors: this.props.actors || [],
			newActor: {}
		};
	},

	_handleInputNameChange(e) {
		this.state.newActor.name = e.target.value;
	},

	_handleInputSurnameChange(e) {
		this.state.newActor.surname = e.target.value;
	},

	_handleAddActor() {
		this.state.actors.push(this.state.newActor);
		this.refs.actorName.clearValue();
		this.refs.actorSurname.clearValue();
		if (this.props.handleActorAdd) {
			this.props.handleActorAdd(this.state.newActor);
		}
		this.state.newActor = {};
		this.forceUpdate();
	},

	getAllActors() {
		return this.state.actors.map((actor) => {
			return <li> {actor.name} {actor.surname} </li>; 
		});
	},

	render() {
		return  <div className="add-actors-block">
					<label className="form-label"> Actors: </label>
					<ul>
						{this.getAllActors()};
					</ul>
					<TextField
					  ref="actorName"
					  hintText="Actor's name  " 
					  className="add-actor-field"
					  onChange={this._handleInputNameChange}/>
					<TextField
					  ref="actorSurname"
					  hintText=" and surname " 
					  className="add-actor-field"
					  onChange={this._handleInputSurnameChange}/>
					 <FlatButton
					  label="Add"
					  onClick={this._handleAddActor}/> 
				</div>;
	}
});

module.exports = AddActorsBlock;