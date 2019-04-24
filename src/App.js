import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import Footer from './components/Footer';

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
    this.addTodo = this.addTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  addTodo(e) {
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
        <TodoForm
          addTodo={this.addTodo}
          handleChange={this.handleChange}
          value={this.state.value}
        />
        <TodoList data={this.state.data} toggleComplete={this.toggleComplete} />
        <Footer
          clearCompleted={this.clearCompleted}
          showClear={anyMarkedComplete}
        />
      </div>
    );
  }
}

export default App;

// TODO
// 1. empty field creates blank todo
