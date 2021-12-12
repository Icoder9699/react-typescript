import React from 'react';
import { Link } from 'react-router-dom';
import TodoAdd from '../components/TodoAdd';
import TodoList from '../components/TodoList';
import ITodo from '../interfaces/TodoInterface';

function HomePage() {
  const [todos, setTodos] = React.useState<ITodo[]>([])
  const completedTodos = todos.filter(todo => todo.completed === true).length;
  
  const addTodoHandler = (title: string) => {
    const todoObj:ITodo = {
      id: Date.now(),
      title,
      completed: false
    }
    setTodos(prev => [todoObj, ...prev])
  }

  const checkTodoHandler = (id: number) => {
    const updatedTodos = todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const removeTodoHandler = (id: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodos)
  }

  return (
    <div className="container">
      <h2 className="center">Hello React-Typescript!</h2>
      <Link to="/about">About Page</Link> 
        <TodoAdd 
          addTodo={addTodoHandler}
          allTodos={todos.length}
          completedTodos={completedTodos}
        />
        <TodoList
          todos={todos}
          checkTodo={checkTodoHandler}
          removeTodo={removeTodoHandler}
        /> 
    </div>
  );
}

export default HomePage;
