import React from 'react';
import './Todo.css';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({ todo: '' });
  };

  render() {
    return (
      <form className="Todo__form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="todo"
          value={this.state.todo}
          onChange={this.handleChange}
          placeholder="What do you need to do today?"
          autoComplete="off"
        />
        <input type="submit" value="+" disabled={!this.state.todo.length} />
      </form>
    );
  }
}

export default TodoForm;
