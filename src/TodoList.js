import React, { Component } from 'react';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = { todos: [] };
	}
	render() {
		return (
			<div>
				<h1>Todo List</h1>
				<ul>
					<li>Todo 1</li>
					<li>Todo 2</li>
					<li>Todo 3</li>
				</ul>
			</div>
		);
	}
}
export default TodoList;