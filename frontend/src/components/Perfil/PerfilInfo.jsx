import React from 'react';
import styles from '../../styles/Inicio/Perfil.module.css';

function PerfilInfo({ usuario }) {
  return (
    <div className={styles.infoGroup}>
      <p><strong>Nombre de usuario:</strong> {usuario.username}</p>
      <p><strong>Correo:</strong> {usuario.email}</p>
      <p><strong>Nombre:</strong> {usuario.firstname}</p>
      <p><strong>Apellido:</strong> {usuario.lastname}</p>
      <p><strong>País:</strong> {usuario.country}</p>
    </div>
  );
}

export default PerfilInfo;
