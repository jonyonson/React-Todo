import React from 'react';

class TodoForm extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { value: '' };

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleChange(e) {
  //   this.setState({ value: e.target.value });
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(this.state.value);
  // }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" value={this.props.value} onChange={this.props.handleChange} />
        <input type="submit" value="Add ToDo" />
        <button onClick={this.props.clearCompleted}>Clear Completed</button>
      </form>
    );
  }
}
export default TodoForm;
