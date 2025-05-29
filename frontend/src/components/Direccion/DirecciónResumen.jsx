import React, { useContext } from 'react';
import { DireccionContext } from '../../hooks/DireccionContext';
import styles from '../../styles/Carrito.module.css';

const DireccionResumen = () => {
  const { direccionEnvio } = useContext(DireccionContext);

  if (!direccionEnvio) return <p>No hay dirección registrada.</p>;

  return (
    <div className={styles.resumenBox}>
      <h2>Dirección de Envío</h2>
      <p><strong>Nombre:</strong> {direccionEnvio.nombre}</p>
      <p><strong>Dirección:</strong> {direccionEnvio.direccion}</p>
      <p><strong>Teléfono:</strong> {direccionEnvio.telefono}</p>
    </div>
  );
};

export default DireccionResumen;