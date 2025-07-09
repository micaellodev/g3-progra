import React from 'react';
import TextInput from '../Text/TextInput';
import styles from '../../styles/LoginForm.module.css';

function LoginFields({ email, setEmail, password, setPassword, isLoading }) {
  return (
    <>
      <TextInput
        placeholder="Correo"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
        required
      />
      <TextInput
        placeholder="Contraseña"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
        required
      />
    </>
  );
}

export default LoginFields;