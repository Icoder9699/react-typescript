import React from 'react'

interface ITodoItem {
  id: number,
  title: string,
  completed: boolean,
  checkTodo: (id: number) => void,
  removeTodo: (id: number) => void
}

export default function TodoItem({id,title, completed, checkTodo, removeTodo} : ITodoItem) {
  return (
   <li className='collection-item'>
      <p className='flex'>
        <label>
          <input 
            type="checkbox" 
            checked={completed} 
            onChange={checkTodo.bind(null, id)}
          />
          <span>{title}</span>
        </label>
      </p>
      <button 
        className='btn-remove'
        onClick={() => removeTodo(id)}
      >
        &times;
      </button>
   </li>
   
  )
}
