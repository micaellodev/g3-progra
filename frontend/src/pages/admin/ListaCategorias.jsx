import React, { useState, useEffect } from 'react';
import {
  getCategorias,
  postCategoria,
  deleteCategoria,
  putCategoria
} from '../../services/CategoriaService';
import AgregarCategoria from './AgregarCategorias';
import TopBarAdmin from '../../components/TopBar/TopBarAdmin';

function ListaCategorias() {
  const [busqueda, setBusqueda] = useState('');
  const [categoriasLista, setCategorias] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(null);
  const [nombreEditado, setNombreEditado] = useState('');
  const [descripcionEditada, setDescripcionEditada] = useState('');

  // 1️⃣ Carga inicial de categorías
  useEffect(() => {
    (async () => {
      try {
        const data = await getCategorias();
        setCategorias(data);
      } catch (err) {
        console.error('Error al cargar categorías:', err);
      }
    })();
  }, []);

  // 2️⃣ Crear nueva categoría
  const agregarCategoria = async (nueva) => {
    try {
      const categoriaCreada = await postCategoria(nueva);
      setCategorias(prev => [...prev, categoriaCreada]);
      setMostrarFormulario(false);
    } catch (error) {
      console.error('Error al agregar categoría:', error);
    }
  };

  // 3️⃣ Eliminar categoría
  const eliminar = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar esta categoría?')) return;
    try {
      await deleteCategoria(id);
      setCategorias(prev => prev.filter(cat => cat.id_categoria !== id));
    } catch (error) {
      console.error('Error al eliminar categoría:', error);
    }
  };

  // 4️⃣ Iniciar edición
  const iniciarEdicion = (cat) => {
    setModoEdicion(cat.id_categoria);
    setNombreEditado(cat.nombre);
    setDescripcionEditada(cat.descripcion);
  };

  // 5️⃣ Guardar edición
  const guardarEdicion = async (id) => {
    try {
      const payload = { nombre: nombreEditado, descripcion: descripcionEditada };
      const categoriaActualizada = await putCategoria(id, payload);
      setCategorias(prev =>
        prev.map(cat =>
          cat.id_categoria === id ? categoriaActualizada : cat
        )
      );
      setModoEdicion(null);
      setNombreEditado('');
      setDescripcionEditada('');
    } catch (error) {
      console.error('Error al actualizar categoría:', error);
    }
  };

  return (
    <div>
      <TopBarAdmin />
      <h1>Lista de Categorías</h1>

      <div style={{ marginBottom: '16px' }}>
        <input
          type="text"
          placeholder="Buscar una categoría..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
          style={{ padding: '8px', width: '60%' }}
        />
        <button
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
          style={{ marginLeft: '12px', padding: '8px 16px' }}
        >
          {mostrarFormulario ? 'Cancelar' : 'Agregar Categoría'}
        </button>
      </div>

      {mostrarFormulario && (
        <div style={{ marginBottom: '24px' }}>
          <AgregarCategoria onAgregar={agregarCategoria} />
        </div>
      )}

      <table
        border="1"
        cellPadding="10"
        style={{ width: '100%', borderCollapse: 'collapse' }}
      >
        <thead style={{ backgroundColor: '#f2f2f2' }}>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categoriasLista
            .filter(cat =>
              cat.nombre.toLowerCase().includes(busqueda.toLowerCase())
            )
            .map(cat => (
              <tr key={cat.id_categoria}>
                <td>#{String(cat.id_categoria).padStart(4, '0')}</td>
                <td>
                  {modoEdicion === cat.id_categoria ? (
                    <input
                      value={nombreEditado}
                      onChange={e => setNombreEditado(e.target.value)}
                    />
                  ) : (
                    cat.nombre
                  )}
                </td>
                <td>
                  {modoEdicion === cat.id_categoria ? (
                    <input
                      value={descripcionEditada}
                      onChange={e => setDescripcionEditada(e.target.value)}
                    />
                  ) : (
                    cat.descripcion
                  )}
                </td>
                <td>
                  {modoEdicion === cat.id_categoria ? (
                    <button
                      onClick={() => guardarEdicion(cat.id_categoria)}
                      title="Guardar"
                      style={{ marginRight: '8px' }}
                    >
                      💾
                    </button>
                  ) : (
                    <button
                      onClick={() => iniciarEdicion(cat)}
                      title="Editar"
                      style={{ marginRight: '8px' }}
                    >
                      🖉
                    </button>
                  )}
                  <button
                    onClick={() => eliminar(cat.id_categoria)}
                    title="Eliminar"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaCategorias;
