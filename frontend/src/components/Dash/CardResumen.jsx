import React from 'react';
import styles from './CardResumen.module.css';

const CardResumen = ({ titulo, valor }) => {
  return (
    <div className={styles.cardResumen}>
      <h4>{titulo}</h4>
      <span>{valor}</span>
    </div>
  );
};

export default CardResumen;
