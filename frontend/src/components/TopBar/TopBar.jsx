import { Link, useNavigate } from 'react-router-dom';
import styles from './TopBar.module.css';
import useLogin from '../../hooks/useLogin';

const TopBar = ({ busqueda, setBusqueda }) => {
  const navigate = useNavigate();
  const { currentUser, logout } = useLogin();

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
          <button type="submit" className={styles.searchButton}>Buscar</button>
        </form>

        <div className={styles.linksContainer}>
          <Link to="/categoria" className={styles.navLinkButton}>Categoría</Link>
          <Link to="/detalleproducto" className={styles.navLinkButton}>Productos</Link>
          <Link to="/nosotros" className={styles.navLinkButton}>Nosotros</Link>

          {currentUser ? (
            <>
              <Link to="/perfil" className={styles.iconButton} title="Perfil de usuario">👤</Link>
              <button onClick={logout} className={styles.loginLink}>Cerrar sesión</button>
            </>
          ) : (
            <Link to="/login" className={styles.loginLink}>Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
