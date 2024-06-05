import "./TodoForm.css"
import { MdAddTask } from "react-icons/md"
import imagen from './../assets/img/Learning-amico.svg'
import React from "react"

function TodoForm({addTodo}){

  const [newTodoValue, setNewTodoValue] = React.useState()

  const onSubmit = (event) => {
    event.preventDefault();
    if(newTodoValue.trim() !== ''){
      addTodo(newTodoValue)
    }
  }

  const onChange = (event) => {
      setNewTodoValue(event.target.value)
  }

    return(
      <div className="item containerCreate">
        <div className="addTask">
          <h1 className="titleCreateTask">Create new Task</h1>
          <form >
            <div><textarea type="text" placeholder="New item" className="addItem"  value={newTodoValue} onChange={onChange} /></div>
            <div><button onClick={ onSubmit } type="submit" title="Add new Task" className="TodoForm-button" ><MdAddTask className="addTodo" size={40}  /></button></div>
          </form>
        </div>
        <div className="imgTask">
          <img src={imagen} alt="" />
        </div>
      </div>
    )
  }


  export { TodoForm };