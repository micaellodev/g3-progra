import React, { useState } from 'react';
import { juegos } from '../../constantes/Consts';
import { useCarrito } from '../../hooks/CartContext';
import { Link } from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar';
import Footer from '../../components/Footer/Footer';
import '../../styles/productos-nuevos.css';

export const DetalleProducto = () => {
  const [busqueda, setBusqueda] = useState('');
  const { addToCart } = useCarrito();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando:', busqueda);
  };

  return (
    <>
      <TopBar handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />
      
      <section className="productos-nuevos-section">
        <h2 style={{ margin: '20px 30px' }}>Lista de Productos</h2>
        <div className="contenedor-productos-nuevos">
          {juegos.map((juego) => (
            <div key={juego.id} className="tarjeta-producto-nuevo">
              <Link to={`/producto/${juego.id}`} className="producto-info-link">
                <img src={juego.imagen} alt={juego.nombre} />
                <p>{juego.nombre}</p>
                <p>S/ {juego.precio.toFixed(2)}</p>
              </Link>
              <button onClick={() => addToCart(juego)}>Agregar al carrito</button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DetalleProducto;
