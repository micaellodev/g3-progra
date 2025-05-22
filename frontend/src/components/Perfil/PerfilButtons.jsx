import React from 'react';
import styles from '../../styles/Inicio/Perfil.module.css';

function PerfilButtons({ navigate }) {
  return (
    <div className={styles.buttonGroup}>
      <button onClick={() => navigate('/modusuario')}>Modificar perfil</button>
      <button onClick={() => navigate('/inicio')}>Volver a Inicio</button>
    </div>
  );
}

export default PerfilButtons;
