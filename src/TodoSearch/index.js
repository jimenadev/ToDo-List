import React from 'react'
import "./TodoSearch.css"

function TodoSearch({
  searchValue,
  setSearchValue,
}){

    return(
      <div className="containerSearch">
        <input className="TodoSearch" placeholder="Search" value={searchValue}
          onChange={ (event) => {
            setSearchValue(event.target.value)
          } } />
      </div>
    )
  }

  export { TodoSearch };