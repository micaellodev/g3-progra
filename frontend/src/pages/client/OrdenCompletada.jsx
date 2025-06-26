import React, { useState, useContext, useEffect } from 'react';
import TopBar from '../../components/TopBar/TopBar';
import { DireccionContext } from '../../hooks/DireccionContext';
import { CartContext } from '../../hooks/CartContext';
import DetallesProductos from '../../components/Orden/DetallesProductos';
import DetallesDireccion from '../../components/Orden/DetallesDireccion';
import styles from '../../styles/OrdenCompletada.module.css';

export const OrdenCompletada = () => {
  const [busqueda, setBusqueda] = useState('');
  const { direccionEnvio } = useContext(DireccionContext);
  const { cart, selectedIds, removeFromCart } = useContext(CartContext);

  // Mostrar productos comprados
  const productosSeleccionados = cart.filter(producto => selectedIds.includes(producto.id));

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando:', busqueda);
  };

  const calcularTotal = () => {
    return productosSeleccionados.reduce(
      (total, producto) => total + producto.precio * producto.quantity, 0
    );
  };

  // Limpiar el carrito al completar la orden (pero lo borra del contexto antes de que se renderise la orden)
  /* useEffect(() => {
    productosSeleccionados.forEach(producto => {
       removeFromCart(producto.id);
    });
   }, []);*/

  return (
    <>
      <TopBar handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />
      <div className={styles.ordenCompletadaWrapper}>
        <h1>¡Orden completada con éxito! 🎉</h1>
        <p>Gracias por tu compra.</p>

        <DetallesProductos productos={productosSeleccionados} calcularTotal={calcularTotal} />

        <DetallesDireccion direccion={direccionEnvio} />
      </div>
    </>
  );


};

export default OrdenCompletada;