import React from 'react';

const Footer = props => {
  const { pendingCount, completedCount, clearCompleted } = props;
  return (
    <footer className="App__footer">
      {!!pendingCount && (
        <div className="App__footer__pending">{props.pendingCount} Pending</div>
      )}
      {!!props.completedCount && (
        <div onClick={clearCompleted} className="App__footer__clear">
          Clear {completedCount} Completed
        </div>
      )}
    </footer>
  );
};

export default Footer;
