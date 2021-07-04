import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import axios from 'axios';
import './TodoList.css';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos : []
		};
		this.create = this.create.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
		this.update = this.update.bind(this);
		this.toggleCompletion = this.toggleCompletion.bind(this);
	}
	create(newTodo) {
		this.setState({
			todos : [...this.state.todos, newTodo]
		});
	}
	removeTodo(id) {
		this.setState({
			todos : this.state.todos.filter((t) => t.id !== id)
		});
	}
	update(id, updatedTask) {
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, task: updatedTask };
			}
			return todo;
		});
		this.setState({ todos: updatedTodos });
	}
	toggleCompletion(id) {
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		this.setState({ todos: updatedTodos });
	}
	async componentDidMount() {
		let result = await axios.get('https://jsonplaceholder.typicode.com/todos');
		this.setState({ todos: result.data });
	}

	render() {
		const todos = this.state.todos.map((todo) => {
			return (
				<Todo
					key={todo.id}
					id={todo.id}
					task={todo}
					completed={todo.completed}
					removeTodo={this.removeTodo}
					updateTodo={this.update}
					toggleTodo={this.toggleCompletion}
				/>
			);
		});
		return (
			<div className="TodoList">
				<h1>
					Todo List! <span>A Simple Todo List App</span>
				</h1>
				<ul>{todos}</ul>
				<NewTodoForm createTodo={this.create} />
			</div>
		);
	}
}
export default TodoList;
