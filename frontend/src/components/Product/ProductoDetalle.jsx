// src/pages/ProductoDetalle.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { juegos } from '../../constantes/Consts';
import { useCarrito } from '../../hooks/CartContext';
import TopBar from '../../components/TopBar/TopBar';
import ProductoDetalleCard from '../../components/Table/ProductoDetalleCard';

const ProductoDetalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCarrito();

  const [busqueda, setBusqueda] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando:', busqueda);
  };

  const producto = juegos.find(j => j.id === Number(id));
  if (!producto) return <p style={{ padding: '20px' }}>Producto no encontrado</p>;

  const handleAgregar = () => {
    addToCart(producto);
    navigate('/carrito');
  };

  const handleVolver = () => {
    navigate('/');
  };

  return (
    <>
      <TopBar handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />
      <h1 style={{ margin: '20px 30px' }}>Detalle del Producto</h1>
      <ProductoDetalleCard producto={producto} />
      <div style={{ marginLeft: '30px', marginTop: '20px' }}>
        <button onClick={handleAgregar} style={{ marginRight: '10px' }}>
          Agregar al carrito
        </button>
        <button onClick={handleVolver}>
          Volver al inicio
        </button>
      </div>
    </>
  );
};

export default ProductoDetalle;
