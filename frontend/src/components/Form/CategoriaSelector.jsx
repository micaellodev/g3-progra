import React from 'react';
import styles from '../../styles/AgregarProducto.module.css';
import { categorias } from '../../constantes/Consts'; // ajusta la ruta según tu estructura

const CategoriaSelector = ({ value, onChange, onAgregarCategoria }) => {
  return (
    <div className={styles.categoriaGroup}>
      <label>Categoría</label>
      <div className={styles.categoriaRow}>
        <select
          name="categoria"
          value={value}
          onChange={onChange}
          className={styles.select}
        >
          <option value="">Selecciona la categoría del producto</option>
          {categorias.map((cat) => (
            <option key={cat.id} value={cat.nombre}>
              {cat.nombre} — {cat.descripcion}
            </option>
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
