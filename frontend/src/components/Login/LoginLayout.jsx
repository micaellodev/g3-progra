import React from 'react';
import LoginInputs from './LoginInputs';
import LoginLinks from './LoginLinks';
import styles from '../../styles/LoginForm.module.css'; 

function LoginLayout({ email, setEmail, password, setPassword, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className={styles.form}> 
      <h2 className={styles.title}>Iniciar Sesión</h2>      
      
      <LoginInputs
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />

      <LoginLinks />

      <div className={styles.actions}> {/* ✅ Asegúrate de que exista esta clase o créala */}
        <button type="submit" className={styles.button}>Ingresar</button>
      </div>
    </form>
  );
}

export default LoginLayout;
