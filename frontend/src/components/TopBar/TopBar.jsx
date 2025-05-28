import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useLogin } from '../../hooks/LoginContext'; // Usar el hook personalizado
import { CartContext } from "../../hooks/CartContext";
import styles from './TopBar.module.css';

const TopBar = ({ busqueda, setBusqueda }) => {
  const navigate = useNavigate();
  
  // Usa el hook personalizado useLogin
  const { currentUser, logout } = useLogin();
  const { cart } = useContext(CartContext);

  const handleSearch = (e) => {
    e.preventDefault();
    if (busqueda.trim()) {
      navigate(`/resultados?busqueda=${encodeURIComponent(busqueda.trim())}`);
    }
  };

  const totalItems = cart?.reduce((acc, item) => acc + item.quantity, 0) || 0;

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
          <Link to="/carrito" className={styles.navLinkButton}>
            🛒 Carrito ({totalItems})
          </Link>
          
          {currentUser ? (
            <>
              <Link to="/perfil" className={styles.iconButton} title="Perfil de usuario">
                👤
              </Link>
              <button onClick={logout} className={styles.logoutButton}>
                Cerrar sesión
              </button>
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