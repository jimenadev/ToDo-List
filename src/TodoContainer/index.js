import React from "react";
import "./TodoContainer.css"

function TodoContainer({ children }) {
  return <section className="container">{children}</section>;
}

export { TodoContainer };
