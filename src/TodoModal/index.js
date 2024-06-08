import { React } from "react";
import "./TodoModal.css";

function TodoModal({ setOpenModal }) {
  const onCancel = () => {
    setOpenModal(false);
  };

  return (
    <div className="todoModal">
      <p>A task with that name already exists</p>
      <button onClick={onCancel} className="TodoForm-button--add">
        Cancel
      </button>
    </div>
  );
}

export { TodoModal };
