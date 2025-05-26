import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import { categorias, juegos } from '../../constantes/consts';

export const Categoria = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');

  const juegosFiltrados =
    categoriaSeleccionada === 'Todos'
      ? juegos
      : juegos.filter((juego) => juego.categoria === categoriaSeleccionada);

  return (
    <div>
      <h2>Categorías</h2>
      <p>Selecciona una categoría para ver los juegos disponibles.</p>

      <div style={{ display: 'flex' }}>
        <div style={{ width: '200px', marginRight: '20px' }}>
          <ul>
            <li key="todos">
              <button onClick={() => setCategoriaSeleccionada('Todos')}>
                Todos
              </button>
            </li>
            {categorias.map((cat) => (
              <li key={cat.id}>
                <button onClick={() => setCategoriaSeleccionada(cat.nombre)}>
                  {cat.nombre}
                </button>
              </li>
            ))}
          </ul>
        </div>


        <div style={{ flex: 1 }}>
          <h3>
            {categoriaSeleccionada === 'Todos'
              ? 'Todos los Juegos'
              : `Juegos de ${categoriaSeleccionada}`}
          </h3>

          {juegosFiltrados.length === 0 ? (
            <p>No hay juegos disponibles.</p>
          ) : (
            <ul>
              {juegosFiltrados.map((juego) => (
                <li key={juego.id} style={{ marginBottom: '20px' }}>
                  <img
                    src={juego.imagen}
                    alt={juego.nombre}
                    style={{ width: '150px', height: '150px', objectFit: 'contain' }}
                  />
                  <h4>{juego.nombre}</h4>
                  <p>{juego.descripcion}</p>
                  <p>Precio: S/ {juego.precio}</p>
                  <hr />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Categoria;
