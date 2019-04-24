import React from 'react';

const Footer = props => {
  return (
    <footer className="App__footer">
      {props.showClear && (
        <div onClick={props.clearCompleted} className="App__footer__clear">
          Clear Completed
        </div>
      )}
    </footer>
  );
};

export default Footer;
