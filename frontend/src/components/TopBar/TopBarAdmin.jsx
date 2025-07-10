import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLogin } from '../../hooks/LoginContext';
import { getCategorias } from '../../services/CategoriaService';
import { fetchProductos } from '../../services/ProductoService';
import styles from './TopBar.module.css';

const TopBarAdmin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, logout } = useLogin();

  // Cargar categorías al montar el componente
  useEffect(() => {
    const cargarCategorias = async () => {
      try {
        const data = await getCategorias();
        setCategorias(data);
      } catch (error) {
        console.error('Error al cargar categorías:', error);
      }
    };

    cargarCategorias();
  }, []);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [showCategorias, setShowCategorias] = useState(false);

  // Obtener el término de búsqueda de la URL si existe
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('busqueda');
    if (searchQuery) {
      setSearchTerm(searchQuery);
    }
  }, [location]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    
    try {
      const response = await fetchProductos(searchTerm);
      setSearchResults(response);
      setShowDropdown(true);
    } catch (error) {
      console.error('Error en la búsqueda:', error);
      setSearchResults([]);
    }
  };

  const handleResultClick = (productId) => {
    navigate(`/producto/${productId}`);
    setShowDropdown(false);
    setSearchTerm('');
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <div className={styles.searchWrapper}>
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => searchResults.length > 0 && setShowDropdown(true)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
              className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton}>
              Buscar
            </button>
            {showDropdown && searchResults.length > 0 && (
              <div className={styles.searchDropdown}>
                {searchResults.map((product) => (
                  <div
                    key={product.id}
                    className={styles.dropdownItem}
                    onClick={() => handleResultClick(product.id)}
                  >
                    <img 
                      src={product.imagen} 
                      alt={product.nombre} 
                      className={styles.dropdownImage}
                    />
                    <div className={styles.dropdownText}>
                      <div className={styles.dropdownTitle}>{product.nombre}</div>
                      <div className={styles.dropdownPrice}>${product.precio}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </form>

        <div className={styles.linksContainer}>
          <Link to="/dashboard" className={styles.navLink}>
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </Link>
          <Link to="/listaproducto" className={styles.navLink}>
            <i className="fas fa-box"></i> Productos
          </Link>
          <div className={styles.dropdown}>
            <button 
              className={styles.navLink}
              onMouseEnter={() => setShowCategorias(true)}
              onMouseLeave={() => setShowCategorias(false)}
            >
              <i className="fas fa-tags"></i> Categorías <i className="fas fa-chevron-down"></i>
            </button>
            {showCategorias && (
              <div 
                className={styles.dropdownContent}
                onMouseEnter={() => setShowCategorias(true)}
                onMouseLeave={() => setShowCategorias(false)}
              >
                {categorias.map((categoria) => (
                  <Link 
                    key={categoria.id_categoria} 
                    to={`/categoria/${categoria.id_categoria}`}
                    className={styles.dropdownItem}
                  >
                    {categoria.nombre}
                  </Link>
                ))}
                <div className={styles.dropdownDivider}></div>
                <Link to="/listacategoria" className={styles.dropdownItem}>
                  <i className="fas fa-cog"></i> Administrar categorías
                </Link>
              </div>
            )}
          </div>
          <Link to="/listaordenes" className={styles.navLink}>
            <i className="fas fa-shopping-cart"></i> Órdenes
          </Link>
          <Link to="/listausuarios" className={styles.navLink}>
            <i className="fas fa-users"></i> Usuarios
          </Link>
          <div className={styles.userMenu}>
            <button className={styles.userButton}>
              <i className="fas fa-user-circle"></i>
              {currentUser?.nombre || 'Admin'}
            </button>
            <div className={styles.userDropdown}>
              <Link to="/perfil" className={styles.dropdownLink}>
                <i className="fas fa-user"></i> Perfil
              </Link>
              <button onClick={handleLogout} className={styles.dropdownLink}>
                <i className="fas fa-sign-out-alt"></i> Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBarAdmin;
