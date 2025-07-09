import React from 'react';
import styles from '../../styles/RegisterForm.module.css';

function RegisterButton({ isLoading }) {
  return (
    <button 
      type="submit" 
      className={styles.button}
      disabled={isLoading}
    >
      {isLoading ? 'Registrando...' : 'Registrarse'}
    </button>
  );
}

export default RegisterButton;