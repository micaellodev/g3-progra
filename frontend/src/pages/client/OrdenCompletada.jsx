import React, { useState, useContext, useEffect } from 'react';
import TopBar from '../../components/TopBar/TopBar';
import { DireccionContext } from '../../hooks/DireccionContext';
import { CartContext } from '../../hooks/CartContext';
import DetallesProductos from '../../components/Orden/DetallesProductos';
import DetallesDireccion from '../../components/Orden/DetallesDireccion';
import styles from '../../styles/OrdenCompletada.module.css';

export const OrdenCompletada = () => {
  const [busqueda, setBusqueda] = useState('');
  const { direccionEnvio } = useContext(DireccionContext); // Obtiene la dirección del contexto
  const { cart, clearCart } = useContext(CartContext); // Obtiene los productos del carrito y la función para limpiarlo

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando:', busqueda);
  };

  const calcularTotal = () => {
    return cart.reduce((total, producto) => total + producto.precio * producto.quantity, 0);
  };



  return (
    <>
      <TopBar handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />
      <div className={styles.ordenCompletadaWrapper}>
        <h1>¡Orden completada con éxito! 🎉</h1>
        <p>Gracias por tu compra, compare.</p>

        {/* Renderiza los detalles de los productos */}
        <DetallesProductos productos={cart} calcularTotal={calcularTotal} />

        {/* Renderiza los detalles de la dirección */}
        <DetallesDireccion direccion={direccionEnvio} />
      </div>
    </>
  );
};

export default OrdenCompletada;