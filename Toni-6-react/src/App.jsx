import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from 'components/UserList/UserList';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/users.json').then(res => setUsers(res.data));
  }, []);

  return (
    <div className="app">
      <UserList users={users} />
    </div>
  );
}

export default App;