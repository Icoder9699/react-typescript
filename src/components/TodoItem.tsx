import React, { FC } from 'react'
import { ITodo } from '../types/types'

interface TodoProps {
    todo: ITodo,
    index: number,
    removeTodo: (id: number) => void,
    checkTodo:  (id: number) => void
}

const TodoItem:FC<TodoProps> = ({todo, index, removeTodo, checkTodo}) => {
    return (
        <div style={{display: "flex", alignItems: "center", padding: 10, border: "1px solid #ccc", margin: 10, justifyContent: "space-between"}}>
            <input 
                type="checkbox" 
                checked={todo.completed} 
                style={{marginRight: 10}}
                onChange={() => checkTodo(todo.id)}
            />
            <p style={{textDecoration: todo.completed === true ? "line-through" : ""}}>
                <strong>{index + 1}.&nbsp;</strong>{todo.title}
            </p>
            <button onClick={() => removeTodo(todo.id)}>&times;</button>
        </div>
    )
}

export default TodoItem