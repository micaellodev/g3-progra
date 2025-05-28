import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../hooks/CartContext';
import CarritoItems from '../../components/Carrito/CarritoItems';
import CarritoResumen from '../../components/Carrito/CarritoResumen';
import styles from '../../styles/Carrito.module.css';

export const Carrito = () => {
  const { cart } = useContext(CartContext); // Obtiene el carrito desde el contexto

  return (
    <div className={styles.carritoWrapper}>
      <div className={styles.carritoContenido}>
        <h1>Carrito</h1>
        <CarritoItems juegos={cart} /> {/* Usa el carrito del contexto */}
        <Link to="/" className={styles.botonSeguirComprando}>
          Seguir explorando
        </Link>
      </div>
      <div>
        <CarritoResumen juegos={cart} /> {/* Usa el carrito del contexto */}
        <Link to="/checkout" className={styles.botonSeguirComprando}>
          Continuar
        </Link>
      </div>
    </div>
  );
};

export default Carrito;
