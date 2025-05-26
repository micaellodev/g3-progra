import React from 'react';
import styles from '../../styles/Perfil.module.css';

function AtrasBoton({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick} style={{ marginTop: '20px' }}>
      Atrás
    </button>
  );
}

export default AtrasBoton;
