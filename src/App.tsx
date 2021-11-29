import axios from 'axios';
import React from 'react';
import './App.css';
import { Card, CardVariant } from './components/Card';
import List from './components/List';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import { UserList } from './components/UserList';
import { ITodo, IUser } from './types/types';


const App = () => {
  const [users, setUsers] = React.useState<IUser[]>([
    {id: 1, name: 'Azizbek', username: 'Azizbek', email: 'azizbek@mail.com', address:{street: 'Xirmontepa', city: "Tashkent"}},
    {id: 2, name: 'Lazizbek', username: 'Lazizbek', email: 'Lazizbek@mail.com', address:{street: 'Xirmontepa', city: "Tashkent"}}
  ])
  const [todos, setTodos] = React.useState<ITodo[]>([])

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users?_limit=10')
      .then(resp => resp.json())
      .then(users => setUsers(users))
  }

  const fetchTodos = async () => {
    const {data} = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
    console.log(data)
    setTodos(data)
  }  

  React.useEffect(() => {
    fetchUsers()
    fetchTodos()
  }, [])

  return (
    <div className="app">
      <Card 
        width="200px"
        height="200px" 
        variant={CardVariant.primary}
        onClick={(num) => console.log(num)}
      >
        Hello firts Card!
      </Card>

      <hr/>

      {/* <UserList 
        users={users}
      /> */}

      {/* universal LIST */}
      {/* <List 
        items={users}
        renderItems={(user: IUser) => <UserItem  user={user} key={user.id}/>}
      /> */}

      <List
        items={todos}
        renderItems={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
      

    </div>
  );
}

export default App;
