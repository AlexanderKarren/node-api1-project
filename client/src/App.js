import React, { useState, useEffect } from 'react';
import UserList from './components/UserList'
import UserForm from './components/UserForm'
import axios from 'axios'
import './App.css';

function App() {
  const [users, updateUsers] = useState([]);

  useEffect(() => {
      axios.get("http://localhost:5000/api/users/").then(response => {
          console.log(response);
          updateUsers(response.data);
      })
      .catch(error => {
          console.log("error:", error);
      })
  }, [])
  return (
    <div className="App">
      <h1>Users</h1>
      <UserList users={users} updateUsers={updateUsers} />
      <UserForm users={users} updateUsers={updateUsers} />
    </div>
  );
}

export default App;
