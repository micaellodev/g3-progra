import React from 'react';
import styles from '../../styles/BuscadorOrdenes.module.css'; 

const BuscadorOrdenes = ({ busqueda, setBusqueda, handleSearch }) => {
  return (
    <div className={styles.searchActionsContainer}>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          placeholder="Buscar una orden..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.buscarBtn}>
          Buscar
        </button>
      </form>
    </div>
  );
};

export default BuscadorOrdenes;
