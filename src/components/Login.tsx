import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  username: string;
  password: string;
}

interface Props {
  users: User[];
}

function Login({ users }: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
 
  const handleLogin = () => {
    const match = users.find(user => user.username === username && user.password === password);
    if (match) {
      navigate('/admin/lista');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <>
      <h1>Login</h1>
      <label>User:</label>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      <br /><br />
      <label>Password:</label>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <br /><br />
      <button onClick={handleLogin}>Sign In</button>
    </>
  );
}

export default Login;