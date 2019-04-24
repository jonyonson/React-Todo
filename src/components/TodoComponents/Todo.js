import React from 'react';
import './Todo.css';

const Todo = ({ todo, className, toggleComplete }) => {
  return (
    <li
      key={todo.id}
      className={className}
      onClick={() => {
        toggleComplete(todo.id);
      }}
    >
      {todo.task}
    </li>
  );
};

export default Todo;
