import React from 'react';
import LoginInputs from './LoginInputs';
import LoginLinks from './LoginLinks';
import styles from '../../styles/LoginForm.module.css'; 

function LoginLayout({ 
  email, 
  setEmail, 
  password, 
  setPassword, 
  handleSubmit, 
  isLoading, 
  error 
}) {
  return (
    <form onSubmit={handleSubmit} className={styles.form}> 
      <h2 className={styles.title}>Iniciar Sesión</h2>      
      
      <LoginInputs
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        isLoading={isLoading}
      />

      {error && <div className={styles.error}>{error}</div>}

      <LoginLinks />

      <div className={styles.actions}>
        <button 
          type="submit" 
          className={styles.button}
          disabled={isLoading}
        >
          {isLoading ? 'Ingresando...' : 'Ingresar'}
        </button>
      </div>
    </form>
  );
}

export default LoginLayout;