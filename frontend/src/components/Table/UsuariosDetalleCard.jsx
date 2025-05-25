// src/components/UsuariosDetalleCard.jsx

import React from 'react';
import styles from './UsuariosDetalleCard.module.css';

const UsuariosDetalleCard = ({ usuario }) => {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h2>{usuario.nombre}</h2>
        <hr />
        <p><strong>Email:</strong> {usuario.email}</p>
        <p><strong>Rol:</strong> {usuario.rol}</p>
        <p><strong>Estado:</strong> {usuario.estado ? 'Activo' : 'Inactivo'}</p>
      </div>
    </div>
  );
};

export default UsuariosDetalleCard;
