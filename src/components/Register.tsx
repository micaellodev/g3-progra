import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  username: string;
  password: string;
}

interface Props {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

function Register({ users, setUsers }: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    const exists = users.find(user => user.username === username);
    if (exists) {
      alert('El usuario ya existe');
    } else {
      setUsers([...users, { username, password }]);
      navigate('/Page');
    }
  };

  return (
    <>
      <h1>Register</h1>
      <label>User:</label>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      <br /><br />
      <label>Password:</label>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <br /><br />
      <button onClick={handleRegister}>Sign Up</button>
    </>
  );
}

export default Register;