import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/login', {
        email,
        password,
      });

      alert(res.data.message);

      // ✅ Guardar el email en localStorage si el login fue exitoso
      if (res.data.message === 'Login correcto') {
        localStorage.setItem('email', email);
        navigate('/inicio');
      }

    } catch (err) {
      alert(err.response?.data?.message || 'Error al iniciar sesión');
    }
  };

  
  return (
    <form onSubmit={handleLogin}>
      <h2>Iniciar Sesión</h2>
      <input
        placeholder="Correo"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Contraseña"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <button type="submit">Ingresar</button>
        <Link to="/register">Registrarse</Link>
      </div>
    </form>
  );
}

export default Login;
