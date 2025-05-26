import React from 'react';
import styles from '../../styles/Perfil.module.css';

function GuardarBoton({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>Guardar</button>
  );
}

export default GuardarBoton;
