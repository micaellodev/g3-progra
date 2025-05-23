// src/components/Form/CategoriaSelector.jsx

import React from 'react';
import styles from '../../styles/AgregarProducto.module.css';

const CategoriaSelector = ({ value, onChange, categorias = [], onAgregarCategoria }) => {
  return (
    <div className={styles.categoriaGroup}>
      <label>Categoría</label>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <select
          name="categoria"
          value={value}
          onChange={onChange}
          className={styles.select}
        >
          <option value="">Selecciona la categoría del producto</option>
          {categorias.map((cat, idx) => (
            <option key={idx} value={cat.nombre}>{cat.nombre}</option>
          ))}
        </select>
        <button
          type="button"
          className={styles.agregarBtn}
          onClick={onAgregarCategoria}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CategoriaSelector;
