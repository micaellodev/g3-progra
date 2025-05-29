import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/LoginForm.module.css';

function LoginLinks() {
  return (
    <div className={styles.links}>
      <Link to="/register" className={styles.link}>
        Registrarse
      </Link>
      <span> | </span>
      <Link to="/recuperarcontra" className={styles.link}>
        ¿Olvidaste tu contraseña?
      </Link>
    </div>
  );
}

export default LoginLinks;