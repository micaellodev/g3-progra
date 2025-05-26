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
          <Link to="/listacategoria" className={styles.navLink}>Lista Categorías</Link>
          <Link to="/listaproducto" className={styles.navLink}>Lista Productos</Link>
          <Link to="/listausuarios" className={styles.navLink}>Lista Usuarios</Link>
          <Link to="/agregarproducto" className={styles.navLink}>Agregar Producto</Link>
          <Link to="/agregarcategoria" className={styles.navLink}>Agregar Categoría</Link>

          <Link to="/perfil" className={styles.iconButton} title="Perfil de usuario">👤</Link>
          <button onClick={logout} className={styles.loginLink}>Cerrar sesión</button>
        </div>
      </div>
    </nav>
  );
};

export default TopBarAdmin;
