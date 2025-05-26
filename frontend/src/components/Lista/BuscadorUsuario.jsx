// src/components/Lista/BuscadorUsuario.jsx

import React from 'react';
import styles from '../../styles/AgregarProducto.module.css';

const BuscadorUsuario = ({ busqueda, setBusqueda, handleSearch }) => {
    return (
        <div className={styles.searchActionsContainer}>
            <form onSubmit={handleSearch} className={styles.searchForm}>
                <input
                    type="text"
                    placeholder="Buscar un usuario..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className={styles.searchInput}
                />
                <button type="submit" className={styles.buscarBtn}>
                    Buscar
                </button>
            </form>

            <div className={styles.actionsGroup}>
                <button type="button" className={styles.categoriasBtn}>
                    Roles
                </button>
                <button type="button" className={styles.agregarBtn}>
                    Agregar usuario
                </button>
            </div>
        </div>
    );
};

export default BuscadorUsuario;
