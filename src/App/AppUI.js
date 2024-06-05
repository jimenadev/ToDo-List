import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError'
import { EmptyTodo } from '../EmptyTodo'
import { TodoContext } from '../TodoContext'
import React from 'react';
import { TodoFilters } from './TodoFilters';



function AppUI(){

          const {
                loading,
                error,
                completedTodos,
                totalTodos,
                searchValue,
                filterTodos,
                setFilterTodos,
                searchedTodos,
                completeTodo,
                deleteTodo,
                setSearchValue,
  } = React.useContext(TodoContext)

    return (
        <div className='app'>
                <TodoCounter completed={completedTodos} total={totalTodos} />
                  <div className="container">
                    <TodoForm />
                    <div className="item containerList">
                    <h1 className="titleTask">Your Task</h1>
                    <div>
                    <TodoFilters setFilterTodos={setFilterTodos} filterTodos={filterTodos}/>
                    </div>
                <TodoSearch
                  searchValue={searchValue}
                  setSearchValue={setSearchValue} />

                <TodoList>
                  {loading && <TodosLoading />}
                  {error && <TodosError />}
                  {(!loading && searchedTodos.length === 0) && <EmptyTodo />}


                  {searchedTodos.map(todo => (
                    <TodoItem
                      key={todo.text}
                      text={todo.text}
                      completed={todo.completed}
                      onComplete={() => completeTodo(todo.text)}
                      onDelete={() => deleteTodo(todo.text)} />
                  ))}
                </TodoList>
              </div>
            </div>
          </div>
          );
}


export { AppUI }