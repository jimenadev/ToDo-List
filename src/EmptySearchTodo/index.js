import React from 'react'
import "./EmptySearchTodo.css"

function EmptySearchTodo(props){
  console.log(props.searchValue)
    return(
      <p className='message'>There are no results for the text "{props.searchValue}"</p>
    )
  }

  export { EmptySearchTodo };