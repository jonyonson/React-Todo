import React from 'react';

const TodoForm = props => {
  return (
    <form className="Todo__form" onSubmit={props.addTodo}>
      <input
        type="text"
        value={props.value}
        onChange={props.handleChange}
        placeholder="What do you need to do today?"
      />
      <input type="submit" value="+" />
    </form>
  );
};

export default TodoForm;
