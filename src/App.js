import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import Footer from './components/Footer';
import complete from './images/complete.svg';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  addTodo(e) {
    e.preventDefault();
    const newTodo = {
      task: this.state.value,
      id: Date.now(),
      completed: false,
    };

    this.setState({ data: [...this.state.data, newTodo], value: '' }, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.data));
    });
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

    this.setState({ data: todos }, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.data));
    });
  }

  clearCompleted(e) {
    // get new array with only items not makrked as completed
    const incompleteTodos = this.state.data.filter(todo => {
      return !todo.completed;
    });
    this.setState(
      {
        data: incompleteTodos,
      },
      () => {
        localStorage.setItem('todos', JSON.stringify(this.state.data));
      }
    );
  }

  componentDidMount() {
    if (!!localStorage.getItem('todos')) {
      console.log(typeof localStorage.getItem('todos'));
      this.setState({
        data: JSON.parse(localStorage.getItem('todos')),
      });
    }
  }

  render() {
    const todos = this.state.data;
    const anyMarkedComplete = todos.some(todo => !!todo.completed);
    const allTodosCleared = todos.length === 0;
    const todosPending = todos.filter(todo => !todo.completed).length;
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    return (
      <div className="App">
        <TodoForm
          addTodo={this.addTodo}
          handleChange={this.handleChange}
          value={this.state.value}
        />
        {/* <div>
          {!!todosPending && <p>{todosPending} tasks need to get done.</p>}
          {!todosPending && <p>You have nothing left to do. Go for a walk!</p>}
          {!!completedTodos && <p>{completedTodos} tasks marked as done</p>}
        </div> */}
        <TodoList
          data={this.state.data}
          toggleComplete={this.toggleComplete}
          labelClick={this.labelClick}
        />
        {allTodosCleared && (
          <div className="Todo__all-clear">
            <img className="Todo__all-clear__image" src={complete} alt="" />
          </div>
        )}
        <Footer
          clearCompleted={this.clearCompleted}
          completedTodos={completedTodos}
          showClear={anyMarkedComplete}
          todosPending={todosPending}
        />
      </div>
    );
  }
}

export default App;
