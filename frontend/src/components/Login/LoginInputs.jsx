import React from 'react';
import styles from '../../styles/LoginForm.module.css';

function LoginInputs({ email, setEmail, password, setPassword, isLoading }) {
  return (
    <>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.input}
        disabled={isLoading}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.input}
        disabled={isLoading}
        required
      />
    </>
  );
}

export default LoginInputs;