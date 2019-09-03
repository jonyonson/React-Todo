import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import Footer from './components/Footer';
import AllClear from './components/AllClear';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { todos: [] };
  }

  addTodo = task => {
    const newTodo = { task, id: Date.now(), completed: false };
    const todos = [...this.state.todos, newTodo];
    localStorage.setItem('todos', JSON.stringify(todos));
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  toggleComplete = id => {
    const todos = this.state.todos.map(todo => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });
    localStorage.setItem('todos', JSON.stringify([...todos]));
    this.setState({ todos: todos });
  };

  clearCompleted = e => {
    const incompleteTodos = this.state.todos.filter(todo => !todo.completed);
    localStorage.setItem('todos', JSON.stringify([...incompleteTodos]));
    this.setState({ todos: incompleteTodos });
  };

  componentDidMount() {
    if (!!localStorage.getItem('todos')) {
      this.setState({ todos: JSON.parse(localStorage.getItem('todos')) });
    }
  }

  render() {
    const todos = this.state.todos;
    const isEmpty = todos.length === 0;
    const todosPending = todos.filter(todo => !todo.completed).length;
    const completedCount = todos.filter(todo => todo.completed).length;

    return (
      <div className="App">
        <TodoForm addTodo={this.addTodo} />

        <TodoList
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
        />

        <AllClear isEmpty={isEmpty} />

        <Footer
          clearCompleted={this.clearCompleted}
          completedCount={completedCount}
          pendingCount={todosPending}
        />
      </div>
    );
  }
}

export default App;
