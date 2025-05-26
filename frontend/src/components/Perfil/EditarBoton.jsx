import React from 'react';
import styles from '../../styles/Perfil.module.css';

function EditarBoton({ onClick }) {
  return (
    <button className={styles.iconButton} onClick={onClick}>🖉 Editar</button>
  );
}

export default EditarBoton;
