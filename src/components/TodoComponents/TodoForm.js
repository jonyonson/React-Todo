import React from 'react';
import './Todo.css';

const TodoForm = props => {
  return (
    <form className="Todo__form" onSubmit={props.addTodo}>
      <input
        type="text"
        name="value"
        value={props.value}
        onChange={props.handleChange}
        placeholder="What do you need to do today?"
        autoComplete="off"
      />
      <input type="submit" value="+" />
    </form>
  );
};

export default TodoForm;
