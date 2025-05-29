import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { useLogin } from '../../hooks/LoginContext';
import { CartContext } from '../../hooks/CartContext';
import { juegos } from '../../constantes/Consts';
import styles from './TopBar.module.css';

const TopBar = ({ busqueda, setBusqueda }) => {
  const navigate = useNavigate();
  const { currentUser, logout, isLoading } = useLogin();
  const { cart, addToCart } = useContext(CartContext);
  const [mensajeError, setMensajeError] = useState('');
  const [resultados, setResultados] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const valor = busqueda.trim();

    if (valor === '') {
      setMensajeError('Por favor, ingrese al menos un carácter para buscar.');
      navigate('/categoria'); // Redirige a Categorías
    } else {
      setMensajeError('');

      // Buscar si hay un juego que coincida con la búsqueda
      const juegoEncontrado = juegos.find(juego => juego.nombre.toLowerCase() === valor.toLowerCase());

      if (juegoEncontrado) {
        // Si el juego es encontrado, redirigir al detalle del producto
        navigate(`/detalleproducto/${juegoEncontrado.id}`);
      } else {
        // Si no se encuentra el juego, redirigir a resultados de búsqueda
        navigate(`/resultados?busqueda=${encodeURIComponent(valor)}`);
      }
    }
  };

  const handleInputChange = (e) => {
    const valor = e.target.value;
    setBusqueda(valor);
    setMensajeError(''); // Ocultar mensaje si el usuario empieza a escribir

    if (valor.trim() === '') {
      setResultados([]);
    } else {
      const filtrados = juegos.filter(j =>
        j.nombre.toLowerCase().includes(valor.toLowerCase())
      );
      setResultados(filtrados);
    }
  };

  const handleAgregar = (producto) => {
    addToCart(producto);
    alert("Producto añadido al carrito");
  };

  const totalItems = cart?.reduce((acc, item) => acc + item.quantity, 0) || 0;

  if (isLoading) {
    return (
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <form onSubmit={handleSearch} className={styles.searchForm}>
            <input
              type="text"
              placeholder="Buscar productos..."
              value={busqueda}
              onChange={handleInputChange}
              className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton}>Buscar</button>
          </form>
          <div className={styles.linksContainer}>
            <Link to="/categoria" className={styles.navLinkButton}>Categoría</Link>
            <Link to="/detalleproducto" className={styles.navLinkButton}>Productos</Link>
            <Link to="/nosotros" className={styles.navLinkButton}>Nosotros</Link>
            <Link to="/carrito" className={styles.navLinkButton}>🛒 Carrito ({totalItems})</Link>
            <span className={styles.loadingText}>Cargando...</span>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <input
            type="text"
            placeholder="Buscar productos..."
            value={busqueda}
            onChange={handleInputChange}
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>Buscar</button>
        </form>

        {mensajeError && <p className={styles.errorText}>{mensajeError}</p>}

        {resultados.length > 0 && (
          <ul className={styles.resultados}>
            {resultados.map(producto => (
              <li key={producto.id} className={styles.resultadoItem}>
                <img src={producto.imagen} alt={producto.nombre} className={styles.resultadoImagen} />
                <div className={styles.resultadoInfo}>
                  <h4>{producto.nombre}</h4>
                  <p>{producto.descripcion}</p>
                  <p><strong>S/. {producto.precio}</strong></p>
                  <button
                    onClick={() => handleAgregar(producto)}
                    className={styles.agregarBtn}
                  >
                    Agregar al carrito
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className={styles.linksContainer}>
          <Link to="/categoria" className={styles.navLinkButton}>Categoría</Link>
          <Link to="/detalleproducto" className={styles.navLinkButton}>Productos</Link>
          <Link to="/nosotros" className={styles.navLinkButton}>Nosotros</Link>
          <Link to="/carrito" className={styles.navLinkButton}>🛒 Carrito ({totalItems})</Link>

          {currentUser ? (
            <>
              <Link to="/perfil" className={styles.iconButton} title={`Perfil de ${currentUser.name || currentUser.email || 'usuario'}`}>👤</Link>
              <button onClick={logout} className={styles.logoutButton}>Cerrar sesión</button>
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
