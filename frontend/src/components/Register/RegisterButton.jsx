import React from 'react';
import styles from '../../styles/RegisterForm.module.css';

function RegisterButton() {
  return (
    <button type="submit" className={styles.button}>
      Registrarse
    </button>
  );
}

export default RegisterButton;