import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import styles from '../../styles/TextInput.module.css';

function LoginActions() {
  return (
    <div className={styles.actions}>
      <button type="submit" className={styles.button}>Ingresar</button>
      <Link to="/register" className={styles.link}>Registrarse</Link>
      <span> | </span>
      <Link to="/recuperarcontra" className={styles.link}>¿Olvidaste tu contraseña?</Link>
      <Footer />
    </div>
  );
}

export default LoginActions;
