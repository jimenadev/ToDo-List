import React from "react";
import "./TodoTasks.css"

function TodoTasks({ children }) {
  return (
    <div className="item containerList">
      <h1 className="titleTask">Your Task</h1>
      {children}
    </div>
  );
}

export { TodoTasks };
