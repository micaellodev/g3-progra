import React from 'react';
import styles from './Resumen.module.css';
import CardResumen from './CardResumen';

const Resumen = () => {
  return (
    <>
      <h1 className={styles.titulo}>Dashboard</h1>
      <div className={styles.cardsContainer}>
        <CardResumen titulo="Órdenes" valor="68" />
        <CardResumen titulo="Usuarios registrados" valor="12" />
        <CardResumen titulo="Ingresos totales" valor="S/2348.00" />
      </div>
    </>
  );
};

export default Resumen;
