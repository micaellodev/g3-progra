import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextInput from '../../components/Text/TextInput';
import styles from '../../styles/TextInput.module.css';
import Footer from '../../components/Footer/Footer';
import useLogin from '../../hooks/useLogin';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (savedUser && email === savedUser.email && password === savedUser.password) {
      login(savedUser);
      alert('Login exitoso');
      navigate('/');
    } else {
      alert('Correo o contraseña incorrectos');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Iniciar Sesión</h2>

      <TextInput placeholder="Correo" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextInput placeholder="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

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
