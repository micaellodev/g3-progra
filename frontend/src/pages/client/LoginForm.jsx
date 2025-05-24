// LoginForm.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextInput from '../../components/Text/TextInput';
import styles from '../../styles/TextInput.module.css';
<<<<<<< HEAD
import User from '../../constantes/consts';
=======
>>>>>>> b18c9d8 (commit Marcelo)

// Asegúrate de que LoginForm reciba 'handleLogin' como prop
function LoginForm({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtener la información del usuario MÁS RECIENTE de localStorage
    const savedUser = JSON.parse(localStorage.getItem('registeredUser'));

    // Verificar si el usuario existe y si el email y la contraseña coinciden
    if (savedUser && email === savedUser.email && password === savedUser.password) {
      console.log('Login exitoso');
      // Llama a la función handleLogin del App.jsx con los datos del usuario completo
      handleLogin(savedUser); 
      navigate('/inicio');
    } else {
      alert('Correo o contraseña incorrectos');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
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
        <span> | </span>
        <Link to="/recuperarcontra" className={styles.link}>¿Olvidaste tu contraseña?</Link>
      </div>
    </form>
  );
}

export default LoginForm;