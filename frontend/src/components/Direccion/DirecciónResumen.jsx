import React from 'react';
import styles from '../../styles/Carrito.module.css';

const DireccionResumen = ({ direccion }) => {
  if (!direccion) return <p>No hay dirección registrada.</p>;

  return (
    <div className={styles.resumenBox}>
      <h2>Dirección de Envío</h2>
      <p><strong>Nombre:</strong> {direccion.nombre} {direccion.apellido}</p>
      <p><strong>Departamento:</strong> {direccion.departamento}</p>
      <p><strong>Ciudad:</strong> {direccion.ciudad}</p>
      <p><strong>Dirección:</strong> {direccion.direccion}</p>
      <p><strong>Código Postal:</strong> {direccion.codigoPostal}</p>
      <p><strong>Teléfono:</strong> {direccion.telefono}</p>
    </div>
  );
};

export default DireccionResumen;