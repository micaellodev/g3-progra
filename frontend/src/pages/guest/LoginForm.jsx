// src/pages/LoginForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../hooks/LoginContext';

import LoginInputs from '../../components/Login/LoginInputs';
import LoginLinks from '../../components/Login/LoginLinks';

function LoginForm() {
  const { login } = useLogin();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const keys = ['registeredUser', 'currentUser', 'userData', 'users'];
    let foundUser = null;

    for (const key of keys) {
      const dataRaw = localStorage.getItem(key);
      if (!dataRaw) continue;

      try {
        const data = JSON.parse(dataRaw);
        if (Array.isArray(data)) {
          foundUser = data.find(user => user.email === email);
        } else if (data?.email === email) {
          foundUser = data;
        }
        if (foundUser) break;
      } catch {
        // ignore parse errors
      }
    }

    if (!foundUser) return alert('Usuario no encontrado');
    if (foundUser.password !== password) return alert('Contraseña incorrecta');

    login(foundUser);
    alert('Login exitoso');
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      <LoginInputs email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
      <LoginLinks />
      <button type="submit">Ingresar</button>
    </form>
  );
}

export default LoginForm;
