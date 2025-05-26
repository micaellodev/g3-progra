import { Link, useNavigate } from 'react-router-dom';
import styles from './TopBar.module.css';
import useLogin from '../../hooks/useLogin';

const TopBarAdmin = ({ busqueda, setBusqueda }) => {
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
            placeholder="Buscar productos o categorías..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>Buscar</button>
        </form>

        <div className={styles.linksContainer}>
          <Link to="/dashboard" className={styles.navLinkButton}>Dashboard</Link>
          <Link to="/listaproducto" className={styles.navLinkButton}>Lista Productos</Link>
          <Link to="/listaordenes" className={styles.navLinkButton}>Lista Ordenes</Link>
          <Link to="/listausuarios" className={styles.navLinkButton}>Lista Usuarios</Link>
          <Link to="/listacategoria" className={styles.navLinkButton}>Lista Categorías</Link>
          <Link to="/agregarproducto" className={styles.navLinkButton}>Agregar Producto</Link>
          <Link to="/perfil" className={styles.iconButton} title="Perfil de usuario">👤</Link>
          <button onClick={logout} className={styles.loginLink}>Cerrar sesión</button>
        </div>
      </div>
    </nav>
  );
};

export default TopBarAdmin;
