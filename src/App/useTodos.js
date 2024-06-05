import React from 'react'
import { useLocalStorage } from './useLocalStorage';

function useTodos(){

    const [searchValue, setSearchValue] = React.useState('');
    const [filterTodos, setFilterTodos] = React.useState('All');
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);

    const completedTodos = todos.filter(todo => !!todo.completed).length;

    const totalTodos = todos.length;
    let searchedTodos = todos;

    if(filterTodos === 'Active'){
      searchedTodos = todos.filter((todo) => !todo.completed)
    }else if(filterTodos === 'Completed'){
      searchedTodos = todos.filter((todo) => todo.completed)
    }else{
      searchedTodos = todos
    }

    searchedTodos = searchedTodos.filter(
      (todo) => {
        const todoText = todo.text.toLowerCase()
        const search = searchValue.toLowerCase()
        return todoText.includes(search)
      }
    )

    const addTodo = (text) => {
      const newTodos = [...todos]
      newTodos.push({
        text,
        completed:false,
      })
      saveTodos(newTodos)
    }

    const completeTodo = (text) => {
      const newTodos = [...todos]
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      )
      newTodos[todoIndex].completed = true
      saveTodos(newTodos)
    }

    const deleteTodo = (text) => {
      const newTodos = [...todos]
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      )
      newTodos.splice(todoIndex, 1)
      saveTodos(newTodos)
    }

  

      
      return {
              loading,
              error,
              completedTodos,
              totalTodos,
              searchValue,
              searchedTodos,
              filterTodos,
              setFilterTodos,
              completeTodo,
              deleteTodo,
              setSearchValue,
              addTodo,
          }
}

export {useTodos}