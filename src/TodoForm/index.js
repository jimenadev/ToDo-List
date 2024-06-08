import React from "react";
import "./TodoForm.css";
import { MdAddTask } from "react-icons/md";
import loadingImg from "./../assets/img/loading.svg";

function TodoForm({ addTodo, loading }) {
  const [newTodoValue, setNewTodoValue] = React.useState();

  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue.trim() !== "") {
      addTodo(newTodoValue);
    }
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <div className="item containerCreate">
      <div className="addTask">
        <h1 className="titleCreateTask">Create new Task</h1>
        <form>
          <div>
            <textarea
              disabled={loading}
              type="text"
              placeholder="New item"
              className="addItem"
              value={newTodoValue}
              onChange={onChange}
            />
          </div>
          <div>
            <button
              disabled={loading}
              onClick={onSubmit}
              type="submit"
              title="Add new Task"
              className="TodoForm-button"
            >
              Add Task <MdAddTask className="addTodo" size={30} />
            </button>
          </div>
        </form>
      </div>
      <div className="imgTask">
        <img src={loadingImg} alt="" />
      </div>
    </div>
  );
}

export { TodoForm };
