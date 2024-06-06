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
import { EmptySearchTodo } from '../EmptySearchTodo';



function App(){
          const {
                loading,
                error,
                completedTodos,
                totalTodos,
                searchedTodos,
                searchValue,
                filterTodos,
                setFilterTodos,
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


                    <TodoList
                      error={error}
                      loading={loading} 
                      searchedTodos={searchedTodos}
                      totalTodos={totalTodos}
                      searchValue={searchValue}
                      onError={() => <TodosError />}
                      onLoading={() => <TodosLoading />}
                      onEmptyTodos={() => <EmptyTodo />}
                      onEmptySearchTodos={(searchValue) => <EmptySearchTodo searchValue={searchValue} />}
                      render={ todo => (
                        <TodoItem
                          key={todo.text}
                          text={todo.text}
                          completed={todo.completed}
                          onComplete={() => completeTodo(todo.text)}
                          onDelete={() => deleteTodo(todo.text)}
                        />
                      )}
                    />
              </TodoTasks>
              
            </TodoContainer>  
      </div>
      );
}


export  { App }