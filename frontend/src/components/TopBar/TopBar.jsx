import { Link, useNavigate } from 'react-router-dom';
import styles from './TopBar.module.css';

const TopBar = ({ busqueda, setBusqueda }) => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/resultados?busqueda=${encodeURIComponent(busqueda)}`);
  };

  return (
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

        <div className={styles.linksContainer}>
          <Link to="/perfil" className={styles.iconButton} title="Perfil de usuario">
            👤
          </Link>
          <Link to="/login" className={styles.loginLink}>Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;