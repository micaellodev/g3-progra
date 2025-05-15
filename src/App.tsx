import { useState } from 'react'



import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Page from './components/Page';

import {Link, Route, Routes} from "react-router-dom";

import './App.css'

interface User {
  username: string;
  password: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  return (
    <>
      

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/Login">Login</Link> |{" "}
        <Link to="/Register">Register</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login users={users} />} />
        <Route path="/Register" element={<Register users={users} setUsers={setUsers} />} />
        <Route path="/Page" element={<Page />} />
      </Routes>
      
    </>
  )
}

export default App
