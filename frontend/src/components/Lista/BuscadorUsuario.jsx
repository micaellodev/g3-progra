import React, { useState } from 'react';
import styles from '../../styles/BuscarUsuario.module.css';

const BuscadorUsuario = ({ handleSearch }) => {
  const [localBusqueda, setLocalBusqueda] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch(localBusqueda); 
  };

  return (
    <div className={styles.searchActionsContainer}>
      <form onSubmit={onSubmit} className={styles.searchForm}>
        <input
          type="text"
          placeholder="Buscar un usuario..."
          value={localBusqueda}
          onChange={(e) => setLocalBusqueda(e.target.value)}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.buscarBtn}>
          Buscar
        </button>
      </form>
    </div>
  );
};

export default BuscadorUsuario;
