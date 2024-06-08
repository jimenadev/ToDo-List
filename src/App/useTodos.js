import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
  const [searchValue, setSearchValue] = React.useState("");
  const [filterTodos, setFilterTodos] = React.useState("All");
  const [openModal, setOpenModal] = React.useState(false);
  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;

  const totalTodos = todos.length;
  let searchedTodos = [];

  if (filterTodos === "Active") {
    searchedTodos = todos.filter((todo) => !todo.completed);
  } else if (filterTodos === "Completed") {
    searchedTodos = todos.filter((todo) => todo.completed);
  } else {
    searchedTodos = todos;
  }

  searchedTodos = searchedTodos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const search = searchValue.toLowerCase();
    return todoText.includes(search);
  });

  const addTodo = (text) => {
    const newTodos = [...todos];

    let existeTodo = newTodos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const search = text.toLowerCase();
      if (todoText === search) {
        return true;
      }
      return false;
    });

    if (existeTodo.length === 0) {
      newTodos.push({
        text,
        completed: false,
      });
      saveTodos(newTodos);
    } else {
      setOpenModal(true);
    }
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

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
    sincronizeTodos,
    openModal,
    setOpenModal,
  };
}

export { useTodos };
