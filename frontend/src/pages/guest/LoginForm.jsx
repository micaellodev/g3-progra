// src/pages/LoginForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../hooks/LoginContext';
import styles from '../../styles/LoginForm.module.css';

import LoginInputs from '../../components/Login/LoginInputs';
import LoginActions from '../../components/Login/LoginActions';
import LoginLinks from '../../components/Login/LoginLinks';
import Footer from '../../components/Footer/Footer';

function LoginForm() {
  const { login } = useLogin();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const usersRaw = localStorage.getItem('users');
    if (!usersRaw) {
      alert('❌ No hay usuarios registrados.');
      return;
    }

    let foundUser = null;

    try {
      const users = JSON.parse(usersRaw);
      foundUser = users.find(user => user.email === email);
    } catch (error) {
      alert('❌ Error al procesar los usuarios registrados.');
      return;
    }

    if (!foundUser) {
      alert('❌ Usuario no encontrado');
      return;
    }

    if (foundUser.password !== password) {
      alert('❌ Contraseña incorrecta');
      return;
    }

    login(foundUser);
    alert('✅ Login exitoso');
    navigate('/');
  };

  return (
    <div className={styles.pageContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Iniciar Sesión</h2>

        <LoginInputs
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />

        <LoginLinks />
        <LoginActions />
      </form>

      <Footer />
    </div>
  );
}

export default LoginForm;
