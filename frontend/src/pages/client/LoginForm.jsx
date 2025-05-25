// LoginForm.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextInput from '../../components/Text/TextInput';
import styles from '../../styles/TextInput.module.css';
import User from '../../constantes/consts';
import Footer from '../../components/Footer/Footer';


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (user) => {
    console.log('Usuario autenticado:', user);
    // Guardar sesión
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    // Puedes actualizar estado global o contexto aquí si lo estás usando
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (savedUser && email === savedUser.email && password === savedUser.password) {
      console.log('Login exitoso');
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
        <Footer />
      </div>
    </form>
  );
}

export default LoginForm;
