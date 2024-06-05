import React from 'react';
import { TodoCounter } from '../TodoCounter'
import { TodoHeader } from '../TodoHeader'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError'
import { EmptyTodo } from '../EmptyTodo'
import { useTodos } from './useTodos'
import { TodoFilters } from '../TodoFilters';
import { TodoContainer } from '../TodoContainer';
import { TodoTasks } from '../TodoTasks';
import './App.css';



function App(){
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
                addTodo
  } = useTodos();

    return (
        <div className='app'>
            <TodoHeader> 
                <TodoCounter completed={completedTodos} total={totalTodos} />
            </TodoHeader>
            <TodoContainer >  
              
              <TodoForm addTodo={addTodo}/>

              <TodoTasks>
                    <TodoFilters setFilterTodos={setFilterTodos} filterTodos={filterTodos}/>
                    
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
              </TodoTasks>
              
            </TodoContainer>  
      </div>
      );
}


export  { App }