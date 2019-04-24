import React from 'react';

const TodoForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" value={props.value} onChange={props.handleChange} />
      <input type="submit" value="Add ToDo" />
      {props.showClear && (
        <input type="button" onClick={props.clearCompleted} value="Clear Completed" />
      )}
    </form>
  );
};

export default TodoForm;
