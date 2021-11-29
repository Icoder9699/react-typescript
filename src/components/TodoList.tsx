import React, { FC } from 'react'
import { ITodo } from '../types/types'
import TodoItem from './TodoItem'

interface TodoListProps {
    todos: ITodo[],
    removeTodo: (id: number) => void,
    checkTodo: (id: number) => void
}

const TodoList:FC<TodoListProps> = ({todos, removeTodo, checkTodo}) => {
    return (
        <div style={{margin: 30}}>
            {
                todos.map((todo, index) => <TodoItem 
                    todo={todo} 
                    key={todo.id} 
                    index={index}
                    removeTodo={removeTodo}
                    checkTodo={checkTodo}
                />)
            }
        </div>
    )
}

export default TodoList