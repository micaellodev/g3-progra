import React from 'react';
import { useParams } from 'react-router-dom';
import { juegos } from '../../constantes/Consts'; // Mismo array de productos

const ProductoDetalle = () => {
  const { id } = useParams(); // Esto captura el id de la URL
  const producto = juegos.find(j => j.id === Number(id)); // Busca el producto por id

  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <div>
      <h1>{producto.nombre}</h1>
      <img src={producto.imagen} alt={producto.nombre} width={200} />
      <p><strong>Descripción:</strong> {producto.descripcion}</p>
      <p><strong>Precio:</strong> S/ {producto.precio.toFixed(2)}</p>
      {/* Aquí más datos si quieres */}
    </div>
  );
};

export default ProductoDetalle;
