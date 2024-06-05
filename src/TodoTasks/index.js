import React from 'react';

function TodoTasks({ children }) {
  return (
    <div className="item containerList">
        <h1 className="titleTask">Your Task</h1>
        {children}
    </div>
  );
}

export { TodoTasks };