import React from 'react';
import complete from '../images/complete.svg';
import './TodoComponents/Todo.css';

function AllClear(props) {
  return !props.isEmpty ? null : (
    <div className="Todo__all-clear">
      <img src={complete} alt="All Clear" />
    </div>
  );
}

export default AllClear;
