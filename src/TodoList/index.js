import "./TodoList.css"

function TodoList(props){
    return(
      <section className="containerTodolist">
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {(!props.loading && !props.searchedTodos?.length) && props.onEmptyTodos()}
        <ul className="TodoList">
            {props.searchedTodos.map(props.render)}
        </ul>
      </section>
    )
  }

  export { TodoList };