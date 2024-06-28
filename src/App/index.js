import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoHeader } from "../TodoHeader";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodo } from "../EmptyTodo";
import { useTodos } from "./useTodos";
import { TodoFilters } from "../TodoFilters";
import { TodoContainer } from "../TodoContainer";
import { TodoTasks } from "../TodoTasks";
import { EmptySearchTodo } from "../EmptySearchTodo";
import { ChangeAlert } from "../ChangeAlert";
import { Modal } from "../Modal";

import "./App.css";
import { TodoModal } from "../TodoModal";

function App() {
  const { states, stateUpdaters } = useTodos();

  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    filterTodos,
    openModal,
  } = states;

  const {
    setFilterTodos,
    completeTodo,
    deleteTodo,
    setSearchValue,
    addTodo,
    sincronizeTodos,
    setOpenModal,
  } = stateUpdaters

  return (
    <div className="app">
      <TodoHeader>
        <TodoCounter
          completed={completedTodos}
          total={totalTodos}
          loading={loading}
        />
      </TodoHeader>
      <TodoContainer>
        <TodoForm addTodo={addTodo} loading={loading} />

        <TodoTasks>
          <TodoFilters
            setFilterTodos={setFilterTodos}
            filterTodos={filterTodos}
            loading={loading}
          />

          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            loading={loading}
          />

          <TodoList
            error={error}
            loading={loading}
            searchedTodos={searchedTodos}
            totalTodos={totalTodos}
            searchValue={searchValue}
            onError={() => <TodosError />}
            onLoading={() => <TodosLoading />}
            onEmptyTodos={() => <EmptyTodo />}
            onEmptySearchTodos={(searchValue) => (
              <EmptySearchTodo searchValue={searchValue} />
            )}
          >
            {(todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            )}
          </TodoList>
        </TodoTasks>

        {!!openModal && (
          <Modal>
            <TodoModal setOpenModal={setOpenModal} />
          </Modal>
        )}

        <ChangeAlert sincronize={sincronizeTodos} />
      </TodoContainer>
    </div>
  );
}

export { App };
