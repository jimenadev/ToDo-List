import "./TodoList.css"

function TodoList(props){
  const renderFunc = props.children || props.render;
    return(
      <section className="containerTodolist">
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
        {(!!props.totalTodos && !props.searchedTodos?.length) && props.onEmptySearchTodos(props.searchValue)}
        <ul className="TodoList">
            {props.searchedTodos.map(renderFunc)}
        </ul>
      </section>
    )
  }

  export { TodoList };