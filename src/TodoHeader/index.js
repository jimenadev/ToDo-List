import React from "react";
import "./TodoHeader.css"

function TodoHeader({ children }) {
  return <header className="header">{children}</header>;
}

export { TodoHeader };
