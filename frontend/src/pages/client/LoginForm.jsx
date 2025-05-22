import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../../components/LoginText/TextInput';
import styles from '../../styles/Inicio/TextInput.module.css';


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Iniciando sesión con:', { email, password });
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
