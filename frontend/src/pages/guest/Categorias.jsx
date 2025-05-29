import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import TopBar from '../../components/TopBar/TopBar';
import { categorias, juegos } from '../../constantes/Consts';

export const Categoria = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');
  const [busqueda, setBusqueda] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando:', busqueda);
    // Aquí podrías redirigir a /resultados si quieres:
    // navigate(`/resultados?busqueda=${busqueda}`);
  };

  const juegosFiltrados =
    categoriaSeleccionada === 'Todos'
      ? juegos
      : juegos.filter((juego) => juego.categoria === categoriaSeleccionada);

  return (
    <div>

      <TopBar handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />

      <div style={{ padding: '20px' }}>
        <h2>Categorías</h2>
        <p>Selecciona una categoría para ver los juegos disponibles.</p>

        <div style={{ display: 'flex' }}>
          <div style={{ width: '200px', marginRight: '20px' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
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
              <ul style={{ listStyle: 'none', padding: 0 }}>
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
      </div>

      <Footer />
    </div>
  );
};

export default Categoria;
