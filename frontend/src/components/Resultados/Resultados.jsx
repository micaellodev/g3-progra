import React, { useState, useEffect } from 'react';
import { juegos } from '../../constantes/consts'; // Asegúrate de que la ruta sea correcta
import { useLocation, useNavigate } from 'react-router-dom';

const Resultados = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const [busqueda, setBusqueda] = useState(queryParams.get('busqueda') || '');

  const [resultados, setResultados] = useState([]);
  const [orden, setOrden] = useState('nombre');
  const [categoriaFiltro, setCategoriaFiltro] = useState('Todos');

  const categorias = ['Todos', ...new Set(juegos.map(j => j.categoria))];

  useEffect(() => {
    let filtrados = juegos.filter(juego => {
      const term = busqueda.toLowerCase();
      return (
        juego.nombre.toLowerCase().includes(term) ||
        juego.presentacion.toLowerCase().includes(term) ||
        juego.categoria.toLowerCase().includes(term)
      );
    });

    if (categoriaFiltro !== 'Todos') {
      filtrados = filtrados.filter(j => j.categoria === categoriaFiltro);
    }

    if (orden === 'precio') {
      filtrados.sort((a, b) => a.precio - b.precio);
    } else {
      filtrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }

    setResultados(filtrados);
  }, [busqueda, orden, categoriaFiltro]);

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
                  textAlign: 'left',
                  width: '100%',
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
        {/* 🔍 Barra de búsqueda */}
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
        {resultados.length === 0 && <p>No se encontraron resultados.</p>}
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {resultados.map(j => (
            <li
              key={j.id}
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
              <img src={j.imagen} alt={j.nombre} width="80" />
              <div>
                <h3>{j.nombre}</h3>
                <p>{j.presentacion}</p>
                <p>{j.descripcion}</p>
                <p>Precio: ${j.precio.toFixed(2)}</p>
                <p>Stock: {j.stock > 0 ? j.stock : 'Agotado'}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Resultados;
