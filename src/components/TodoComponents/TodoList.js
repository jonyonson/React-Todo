import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = ({ data, toggleComplete }) => {
  const todoNode = data.map(todo => (
    <Todo
      todo={todo}
      key={todo.id}
      toggleComplete={toggleComplete}
      className={
        todo.completed ? 'Todo__item Todo__item--completed' : 'Todo__item'
      }
    />
  ));

  return <ul className="Todo__list">{todoNode}</ul>;
};

export default TodoList;
