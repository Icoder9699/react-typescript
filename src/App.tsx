import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import { List } from './components/List';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import { ITodo } from './types/types';


const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    {id: 1, title: 'React-typescript', completed: false},
    {id: 2, title: 'Vue-typescript', completed: true},
    {id: 3, title: 'typescript', completed: false}
  ])

  const addTodoHandler = (title: string): void => {
    const todo = {
      id: Date.now(),
      title,
      completed: false
    }

    setTodos([...todos, todo])

  }

  const removeTodoHandler = (id: number): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const checkTodoHandler = (id: number): void => {
    const updatedTodos = todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })

    setTodos(updatedTodos)
  }

  const fetchTodos = async () => {
    const {data} = await axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos?_limit=10")
    setTodos(data)
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div className="app">
      <h1>Typescript Todo</h1>
      <AddTodo
        addTodo={addTodoHandler}
      />
      <TodoList
        todos={todos}
        removeTodo={removeTodoHandler}
        checkTodo={checkTodoHandler}
      /> 
    </div>
  );
}

export default App;
