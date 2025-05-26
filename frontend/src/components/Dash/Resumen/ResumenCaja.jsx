import React from 'react';
import styles from './ResumenCaja.module.css';

const ResumenCaja = ({ titulo, valor }) => {
  return (
    <div className={styles.cardResumen}>
      <h4>{titulo}</h4>
      <span>{valor}</span>
    </div>
  );
};
export default  ResumenCaja;