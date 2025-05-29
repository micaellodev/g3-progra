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
    
    // Buscar usuario registrado - puede estar guardado de diferentes formas
    let savedUser = null;
    
    // Intentar diferentes claves que podrías estar usando
    const possibleKeys = ['registeredUser', 'currentUser', 'userData', 'users'];
    
    for (let key of possibleKeys) {
      const userData = localStorage.getItem(key);
      if (userData) {
        try {
          const parsedData = JSON.parse(userData);
          // Si es un array de usuarios
          if (Array.isArray(parsedData)) {
            savedUser = parsedData.find(user => user.email === email);
          } 
          // Si es un solo usuario
          else if (parsedData.email === email) {
            savedUser = parsedData;
          }
          if (savedUser) break;
        } catch (error) {
          console.error(`Error parsing ${key}:`, error);
        }
      }
    }

    if (savedUser && password === savedUser.password) {
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