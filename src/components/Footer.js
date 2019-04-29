import React from 'react';

const Footer = props => {
  return (
    <footer className="App__footer">
      {!!props.todosPending && (
        <div className="App__footer__pending">{props.todosPending} Pending</div>
      )}
      {props.showClear && (
        <div onClick={props.clearCompleted} className="App__footer__clear">
          Clear {props.completedTodos} Completed
        </div>
      )}
    </footer>
  );
};

export default Footer;
