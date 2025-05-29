import React from 'react';
import styles from '../../styles/OrdenCompletada.module.css';

const DetallesDireccion = ({ direccion }) => {
  return (
    <div className={styles.direccion}>
      <h2>Dirección de envío</h2>
      {direccion ? (
        <div>
          <p>
            <strong>Nombre:</strong> {direccion.nombre} {direccion.apellido}
          </p>
          <p>
            <strong>Dirección:</strong> {direccion.direccion}, {direccion.ciudad}, {direccion.departamento}
          </p>
          <p>
            <strong>Código Postal:</strong> {direccion.codigoPostal}
          </p>
          <p>
            <strong>Teléfono:</strong> {direccion.telefono}
          </p>
        </div>
      ) : (
        <p>No se especificó una dirección de envío.</p>
      )}
    </div>
  );
};

export default DetallesDireccion;