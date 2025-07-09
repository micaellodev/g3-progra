import React from 'react';
import styles from '../../styles/LoginForm.module.css';

function LoginActions({ isLoading }) {
  return (
    <div className={styles.actions}>
      <button 
        type="submit" 
        className={styles.button}
        disabled={isLoading}
      >
        {isLoading ? 'Ingresando...' : 'Ingresar'}
      </button>
    </div>
  );
}

export default LoginActions;