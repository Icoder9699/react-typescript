import React from 'react'
import { ITodo } from '../types/types'

interface TodoProps{
    todo: ITodo,
}
const TodoItem: React.FC<TodoProps> = ({todo}) => {
    return (
        <div 
            style={{
                margin: "10px", 
                padding: '10px', 
                border: '1px solid #ccc',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <input 
                type="checkbox" 
                checked={todo.completed}
                style={{marginRight: 5}}
            />
            <p style={{textDecoration: todo.completed === true ? "line-throught" : ""}} >{todo.id} {todo.title}</p>
        </div>
    )
}

export default TodoItem