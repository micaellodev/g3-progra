import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Inicio.css';

function Inicio() {
  const [busqueda, setBusqueda] = useState('');
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMostrarMenu(!mostrarMenu);

  const irPerfil = () => {
    setMostrarMenu(false);
    navigate('/perfil');
  };

  const cerrarSesion = () => {
    localStorage.clear();
    navigate('/login');
  };

  const irCarrito = () => {
    navigate('/carrito');
  };

  return (
    <div>
      <div className="navbar">
        <div className="nav-section nav-left">
          <button className="nav-button">Tienda</button>
          <button className="nav-button">Categorías</button>
          <button className="nav-button">Biblioteca</button>
          <button className="nav-button" onClick={() => navigate('/nosotros')}>Nosotros</button>
        </div>

        <div className="nav-section nav-center">
          <input
            type="text"
            className="nav-search"
            placeholder="Buscar juego"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        <div className="nav-section nav-right" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button className="nav-button" onClick={irCarrito}>🛒 Carro</button>
          <div className="usuario-menu-wrapper">
            <button className="nav-button" onClick={toggleMenu}>👤 Usuario</button>
            {mostrarMenu && (
              <div className="dropdown-menu">
                <button onClick={irPerfil}>Ver mi perfil</button>
                <button onClick={cerrarSesion}>Cerrar sesión</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="main-content" style={{ marginTop: '30px' }}>
        <h2>Categoría de juego</h2>
        <h2 style={{ marginTop: '30px' }}>Juegos más vendidos</h2>
        <div
          style={{
            marginTop: '20px',
            border: '1px solid #ccc',
            height: '300px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px'
          }}
        >
          {/* Contenedor vacío para juegos */}
        </div>
      </div>
    </div>
  );
}

export default Inicio;
