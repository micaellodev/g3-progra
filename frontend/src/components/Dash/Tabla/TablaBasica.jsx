import React from 'react';
import styles from './TablaBasica.module.css';

const TablaBasica = ({ columnas, datos, renderFila }) => {
  return (
    <table className={styles.tabla}>
      <thead>
        <tr>
          {columnas.map((col, idx) => (
            <th key={idx}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {datos.map(renderFila)}
      </tbody>
    </table>
  );
};

export default TablaBasica;
