import { Link } from 'react-router-dom';
import styles from '../../styles/TopBar.module.css';

const TopBar = ({ handleSearch, busqueda, setBusqueda }) => (
    <nav className={styles.navbar}>
        <div className={styles.navContainer}>
            <form onSubmit={handleSearch} className={styles.searchForm}>
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className={styles.searchInput}
                />
                <button type="submit" className={styles.searchButton}>
                    Buscar
                </button>
            </form>
            <Link to="/login" className={styles.loginLink}>Login</Link>
        </div>
    </nav>
);

export default TopBar;
