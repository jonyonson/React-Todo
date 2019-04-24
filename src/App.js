import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import './App.css';
import todos from './fake-data';

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
    const todos = this.state.data.map(todo => {
      if (todo.id === id) {
        return {
          task: todo.task,
          id: todo.id,
          completed: !todo.completed,
        };
      } else {
        return {
          task: todo.task,
          id: todo.id,
          completed: todo.completed,
        };
      }
    });
    this.setState({ data: todos });
  }

  clearCompleted(e) {
    e.preventDefault();
    // get new array with only items not makrked as completed
    const incompleteTodos = this.state.data.filter(todo => {
      return !todo.completed;
    });
    this.setState({ data: incompleteTodos });
  }

  render() {
    const anyMarkedComplete = this.state.data.some(todo => !!todo.completed);
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          clearCompleted={this.clearCompleted}
          showClear={anyMarkedComplete}
          value={this.state.value}
        />
        <TodoList data={this.state.data} toggleComplete={this.toggleComplete} />
      </div>
    );
  }
}

export default App;

// TODO
// 1. empty field creates blank todo
