import React from 'react'
import ITodo from '../interfaces/TodoInterface'
import TodoItem from './TodoItem'

export interface ListProps {
  todos: ITodo[],
  checkTodo: (id: number) => void,
  removeTodo: (id: number) => void
}

export default function TodoList({todos, checkTodo, removeTodo}: ListProps){
  return (
    <div className={todos.length ? 'collection' : ''}>
      {
        todos.length 
        ? todos.map(todo => {
            return (
            <TodoItem 
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              checkTodo={checkTodo}
              removeTodo={removeTodo}
            />)
          })
        : <h5 className='center'>Список дел пустой</h5>
      }
    </div>
  )
}
