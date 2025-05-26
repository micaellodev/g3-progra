import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/TextInput.module.css';

function RegisterLinks() {
  return (
    <>
      <p className={styles.loginLink}>
        ¿Ya tienes una cuenta? <Link to="/login">Inicia Sesión</Link>
      </p>
      <p className={styles.loginLink}>
        ¿Eres Admin? <Link to="/adminf">Inicia Sesión como admin</Link>
      </p>
    </>
  );
}

export default RegisterLinks;
