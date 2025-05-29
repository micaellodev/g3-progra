import React from 'react';
import AtrasBoton from './AtrasBoton';
import styles from '../../styles/Perfil.module.css';

function PerfilBotones({ onVolver, onCambiarContrasena }) {
  return (
    <div className={styles.botonesContainer}>
      <button
        className={styles.cambiarContrasenaBtn}
        onClick={onCambiarContrasena}
      >
        Cambiar Contraseña
      </button>
      <AtrasBoton onClick={onVolver} />
    </div>
  );
}

export default PerfilBotones;
