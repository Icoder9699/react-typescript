import React, { FormEvent } from 'react'

interface ITodoAdd {
  addTodo: (title:string) => void,
  allTodos: number,
  completedTodos: number
}

export default function TodoAdd({addTodo, allTodos, completedTodos} : ITodoAdd) {
  const addRef = React.useRef<HTMLInputElement>(null)

  const createTodoHandler = (event : FormEvent) => {
    event.preventDefault()
    if(addRef.current!.value === ''){
      return alert('Пустую полью нельзя добавить!')
    }
    addTodo(addRef.current!.value)
    addRef.current!.value = ''
  }

  return (
    <div>
      <form onSubmit={createTodoHandler}>
        <input 
          placeholder='Добавить новую задачу'
          type='text'
          ref={addRef}
        />
        <button className="btn">Создать</button>
      </form>
      <div className='flex'>
        <p>Количество дел: {allTodos}</p>
        <p>Завершено: {completedTodos}</p>
      </div>
    </div>
  )
}
