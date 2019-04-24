import React from 'react';

const TodoForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" value={props.value} onChange={props.handleChange} />
      <input type="submit" value="Add ToDo" />
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
