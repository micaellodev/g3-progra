import React, { useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { juegos } from '../../constantes/consts';

const Resultados = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const [busqueda, setBusqueda] = useState(queryParams.get('busqueda') || '');
  const [orden, setOrden] = useState('nombre');
  const [categoriaFiltro, setCategoriaFiltro] = useState('Todos');

  // Obtener categorías únicas
  const categorias = useMemo(() => ['Todos', ...new Set(juegos.map(j => j.categoria))], []);

  // Filtrar y ordenar resultados
  const resultados = useMemo(() => {
    const term = busqueda.toLowerCase();

    let filtrados = juegos.filter(({ nombre, presentacion, categoria }) =>
      [nombre, presentacion, categoria].some((campo) =>
        campo.toLowerCase().includes(term)
      )
    );

    if (categoriaFiltro !== 'Todos') {
      filtrados = filtrados.filter(j => j.categoria === categoriaFiltro);
    }

    return filtrados.sort((a, b) =>
      orden === 'precio' ? a.precio - b.precio : a.nombre.localeCompare(b.nombre)
    );
  }, [busqueda, orden, categoriaFiltro]);

  // Enviar búsqueda
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/resultados?busqueda=${encodeURIComponent(busqueda)}`);
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Filtro lateral */}
      <aside style={{ width: '200px', padding: '10px' }}>
        <h3>Categorías</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {categorias.map(cat => (
            <li key={cat}>
              <button
                onClick={() => setCategoriaFiltro(cat)}
                style={{
                  backgroundColor: cat === categoriaFiltro ? '#ccc' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '5px 10px',
                  width: '100%',
                  textAlign: 'left'
                }}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>

        <h3>Ordenar por:</h3>
        <select
          value={orden}
          onChange={e => setOrden(e.target.value)}
          style={{ width: '100%', padding: '5px' }}
        >
          <option value="nombre">Nombre</option>
          <option value="precio">Precio</option>
        </select>
      </aside>

      {/* Resultados */}
      <section style={{ flex: 1, padding: '10px' }}>
        {/* Barra de búsqueda */}
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar juegos..."
            style={{ padding: '5px', width: '250px' }}
          />
          <button type="submit" style={{ padding: '5px 10px', marginLeft: '10px' }}>
            Buscar
          </button>
        </form>

        <h2>Resultados para: "{busqueda}"</h2>
        {resultados.length === 0 ? (
          <p>No se encontraron resultados.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {resultados.map(({ id, nombre, presentacion, descripcion, precio, stock, imagen }) => (
              <li
                key={id}
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  marginBottom: '10px',
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <img src={imagen} alt={nombre} width="80" />
                <div>
                  <h3>{nombre}</h3>
                  <p>{presentacion}</p>
                  <p>{descripcion}</p>
                  <p>Precio: ${precio.toFixed(2)}</p>
                  <p>Stock: {stock > 0 ? stock : 'Agotado'}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Resultados;
