import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css';

class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { title: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}
	handleSubmit(evt) {
		evt.preventDefault();
		this.props.createTodo({ ...this.state, id: uuidv4(), completed: false });
		this.setState({ title: '' });
	}
	render() {
		return (
			<form className="NewTodoForm" onSubmit={this.handleSubmit}>
				<label htmlFor="title">New Todo </label>
				<input
					type="text"
					placeholder="New Todo"
					id="title"
					name="title"
					value={this.state.title}
					onChange={this.handleChange}
				/>
				<button>Add Todo</button>
			</form>
		);
	}
}
export default NewTodoForm;
