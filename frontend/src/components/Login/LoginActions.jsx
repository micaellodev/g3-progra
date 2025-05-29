import React from 'react';
import styles from '../../styles/LoginForm.module.css';

function LoginActions() {
  return (
    <div className={styles.actions}>
      <button type="submit" className={styles.button}>
        Ingresar
      </button>
    </div>
  );
}

export default LoginActions;