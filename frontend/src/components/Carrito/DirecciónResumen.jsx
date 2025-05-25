import React, { useState } from 'react';
import DireccionEnvioForm from '../Form/DireccionEnvioForm';
import styles from '../../styles/Carrito.module.css';

function CarritoResumen({ direccion }) {
  return (
    <div className={styles.resumenBox}>
      {direccion && (
        <div>
          <h4>Dirección de Envío</h4>
          <p><strong>Nombre:</strong> {direccion.nombre}</p>
          <p><strong>Dirección:</strong> {direccion.direccion}</p>
          <p><strong>Teléfono:</strong> {direccion.telefono}</p>
        </div>
      )}
    </div>
  );
}

const ComponentePadre = ({ juegos }) => {
  const [direccion, setDireccion] = useState(null);

  const handleDireccionSubmit = (data) => {
    setDireccion(data);
  };

  return (
    <div>
      <DireccionEnvioForm onSubmit={handleDireccionSubmit} />
      <CarritoResumen direccion={direccion} />
    </div>
  );
};

export default ComponentePadre;