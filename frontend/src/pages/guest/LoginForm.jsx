// src/pages/LoginForm.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../hooks/LoginContext';
import LoginFields from '../../components/Login/LoginFields';
import LoginActions from '../../components/Login/LoginActions';
import styles from '../../styles/TextInput.module.css';

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
      <LoginFields
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <LoginActions />
    </form>
  );
}

export default LoginForm;
