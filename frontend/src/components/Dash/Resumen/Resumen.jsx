import React from 'react';
import styles from './Resumen.module.css';
import ResumenCaja from './ResumenCaja';

const Resumen = () => {
  return (
    <>
      <h1 className={styles.titulo}>Dashboard</h1>
      <div className={styles.cardsContainer}>
        <ResumenCaja titulo="Órdenes" valor="68" />
        <ResumenCaja titulo="Usuarios registrados" valor="12" />
        <ResumenCaja titulo="Ingresos totales" valor="S/2348.00" />
      </div>
    </>
  );
};

export default Resumen;
