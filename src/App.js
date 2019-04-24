import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: true,
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: todos,
      value: '',
      todo: { leted: false },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
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
    this.setState({
      data,
      value: '',
    });
  }

  toggleComplete(id) {
    console.log(id);
    // this.setState({})
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          value={this.state.value}
        />
        <TodoList data={this.state.data} toggleComplete={this.toggleComplete} />
      </div>
    );
  }
}

export default App;
