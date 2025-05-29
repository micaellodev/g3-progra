import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { juegos } from '../../constantes/Consts';
import { useCarrito } from '../../hooks/CartContext';
//import './DetalleProducto.css';

const ProductoDetalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCarrito();  

  const producto = juegos.find(j => j.id === Number(id));

  if (!producto) return <p>Producto no encontrado</p>;

  const handleAgregar = () => {
    addToCart(producto);  
    navigate('/carrito');
  };

  const handleVolver = () => {
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>{producto.nombre}</h1>
      <img src={producto.imagen} alt={producto.nombre} width={250} />
      <p><strong>Descripción:</strong> {producto.descripcion}</p>
      <p><strong>Categoría:</strong> {producto.categoria}</p>
      <p><strong>Precio:</strong> S/ {producto.precio.toFixed(2)}</p>
      <p><strong>Stock:</strong> {producto.stock}</p>
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleAgregar} style={{ marginRight: '10px' }}>
          Agregar al carrito
        </button>
        <button onClick={handleVolver}>
          Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default ProductoDetalle;