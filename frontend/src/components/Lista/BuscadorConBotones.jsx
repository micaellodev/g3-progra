import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from '../Lista/BuscadorConBotones.module.css'; 

const BuscadorConBotones = ({ busqueda, setBusqueda, handleSearch }) => {
    return (
        <div className={styles.searchActionsContainer}>
            <form onSubmit={handleSearch} className={styles.searchForm}>
                <input
                    type="text"
                    placeholder="Buscar un producto..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className={styles.searchInput}
                />
                <button type="submit" className={styles.buscarBtn}>
                    Buscar
                </button>
            </form>

            <div className={styles.actionsGroup}>
                <Link to="/listacategoria" className={styles.categoriasBtn}>
                    Categorías
                </Link>
                <Link to="/agregarproducto" className={styles.agregarBtn}>
                    Agregar producto
                </Link>
            </div>
        </div>
    );
};

export default BuscadorConBotones;
