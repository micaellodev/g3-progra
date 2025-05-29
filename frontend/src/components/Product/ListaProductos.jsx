import React from 'react';
import { Link } from 'react-router-dom';
import { juegos } from '../constantes/Consts';

export default function ListaProductos() {
  return (
    <div>
      <h2>Lista de productos</h2>
      {juegos.map(juego => (
        <div key={juego.id} style={{ border: '1px solid gray', margin: 10, padding: 10 }}>
          <h3>{juego.nombre}</h3>
          <p>Categoría: {juego.categoria}</p>
          <Link to={`/producto/${juego.id}`}>Ver detalle</Link>
        </div>
      ))}
    </div>
  );
}
