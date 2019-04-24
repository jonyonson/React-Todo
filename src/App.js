import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import './App.css';
import todos from './data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: todos,
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      task: this.state.value,
      id: Date.now(),
      completed: false,
    };
    const data = [...this.state.data];
    data.push(newTodo);
    this.setState({ data, value: '' });
  }

  toggleComplete(id) {
    let item = this.state.data.filter(todo => {
      return todo.id === id;
    });
    item = item[0];
    // toggle completed property
    item.completed = !item.completed ? true : false;
    // get all todo items except the one we are updating
    const todos = this.state.data.filter(todo => {
      return todo.id !== id;
    });
    // add the updated item back
    todos.push(item);
    // sort the array by time stamp, so updated stays in same place
    todos.sort((a, b) => (a.id > b.id ? 1 : -1));

    this.setState({
      data: todos,
    });
  }

  clearCompleted() {
    console.log('clear completed');
  }

  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          clearCompleted={this.clearCompleted}
          value={this.state.value}
        />
        <TodoList data={this.state.data} toggleComplete={this.toggleComplete} />
      </div>
    );
  }
}

export default App;

// TODO
// 2. clear all completed on click of button
