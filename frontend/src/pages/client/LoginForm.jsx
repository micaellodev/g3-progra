import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import TextInput from '../../components/LoginText/TextInput';
import styles from '../../styles/Inicio/TextInput.module.css';
import User from '../../constantes/Consts';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === User.email && password === User.password) {
      console.log('Login exitoso');
      // Redirigir a /inicio
      navigate('/inicio');
    } else {
      alert('Correo o contraseña incorrectos');
    }
  };

  return (
    <form onSubmit={handleLogin} className={styles.form}>
      <h2 className={styles.title}>Iniciar Sesión</h2>

      <TextInput
        placeholder="Correo"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextInput
        placeholder="Contraseña"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className={styles.actions}>
        <button type="submit" className={styles.button}>Ingresar</button>
        <Link to="/register" className={styles.link}>Registrarse</Link>
      </div>
    </form>
  );
}


export default LoginForm;
