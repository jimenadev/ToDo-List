import React from 'react'
import './TodoFilters.css'

function TodoFilters({
    setFilterTodos,
    filterTodos,
    loading
}){



    return(
        <ul className={`filtros ${!!loading && "filtros--loading"}`}  >
            <li  className={`${(filterTodos) === "All" ? "active": ''}`} onClick={(evet) => {setFilterTodos("All") } }>All</li>
            <li  className={`${(filterTodos) === "Active" ? "active": ''}`} onClick={(evet) => {setFilterTodos("Active") } }>Active</li>
            <li  className={`${(filterTodos) === "Completed" ? "active": ''}`} onClick={(evet) => {setFilterTodos("Completed") } }>Completed</li>
        </ul>
    )
  }

  export { TodoFilters };


