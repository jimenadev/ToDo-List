import "./TodoList.css"

function TodoList(props){
    return(
      <div className="containerTodolist">
        <ul className="TodoList">
          {props.children}
        </ul>
      </div>
    )
  }

  export { TodoList };