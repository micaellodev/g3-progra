import React, { useState, useEffect } from 'react';
import TopBarAdmin from '../../components/TopBar/TopBarAdmin';
import BuscadorConBotones from '../../components/Lista/BuscadorConBotones';
import {
  getCategorias,
  postCategoria,
  deleteCategoria,
  putCategoria
} from '../../services/CategoriaService';
import AgregarCategoria from './AgregarCategorias';

export const ListaProducto = () => {
  const [busquedaTopbar, setBusquedaTopbar] = useState('');
  const [busquedaTabla, setBusquedaTabla] = useState('');
  const [categoriasLista, setCategorias] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(null);
  const [nombreEditado, setNombreEditado] = useState('');
  const [descripcionEditada, setDescripcionEditada] = useState('');

  // Carga inicial de categorías
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

  const handleSearchTopbar = (e) => {
    e.preventDefault();
    console.log('Buscando desde topbar:', busquedaTopbar);
  };

  const handleSearchTabla = (e) => {
    e.preventDefault();
    console.log('Buscando en categorías:', busquedaTabla);
  };

  // Crear nueva categoría
  const agregarCategoria = async (nueva) => {
    try {
      const categoriaCreada = await postCategoria(nueva);
      setCategorias(prev => [...prev, categoriaCreada]);
      setMostrarFormulario(false);
    } catch (error) {
      console.error('Error al agregar categoría:', error);
    }
  };

  // Eliminar categoría
  const eliminar = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar esta categoría?')) return;
    try {
      await deleteCategoria(id);
      setCategorias(prev => prev.filter(cat => cat.id_categoria !== id));
    } catch (error) {
      console.error('Error al eliminar categoría:', error);
    }
  };

  // Iniciar edición
  const iniciarEdicion = (cat) => {
    setModoEdicion(cat.id_categoria);
    setNombreEditado(cat.nombre);
    setDescripcionEditada(cat.descripcion);
  };

  // Guardar edición
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

  const categoriasFiltradas = categoriasLista.filter(cat =>
    cat.nombre.toLowerCase().includes(busquedaTabla.toLowerCase())
  );

  return (
    <>
      <TopBarAdmin
        handleSearch={handleSearchTopbar}
        busqueda={busquedaTopbar}
        setBusqueda={setBusquedaTopbar}
      />

      <h1>Lista de Categorías</h1>

      <div style={{ marginBottom: '16px' }}>
        <BuscadorConBotones
          busqueda={busquedaTabla}
          setBusqueda={setBusquedaTabla}
          handleSearch={handleSearchTabla}
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

      <div style={{ overflowX: 'auto' }}>
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
            {categoriasFiltradas.length === 0 ? (
              <tr>
                <td colSpan="4" style={{ textAlign: 'center' }}>
                  No hay categorías para mostrar.
                </td>
              </tr>
            ) : (
              categoriasFiltradas.map(cat => (
                <tr key={cat.id_categoria}>
                  <td>#{String(cat.id_categoria).padStart(4, '0')}</td>
                  <td>
                    {modoEdicion === cat.id_categoria ? (
                      <input
                        value={nombreEditado}
                        onChange={e => setNombreEditado(e.target.value)}
                        style={{ width: '100%', padding: '4px' }}
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
                        style={{ width: '100%', padding: '4px' }}
                      />
                    ) : (
                      cat.descripcion
                    )}
                  </td>
                  <td>
                    {modoEdicion === cat.id_categoria ? (
                      <>
                        <button
                          onClick={() => guardarEdicion(cat.id_categoria)}
                          title="Guardar"
                          style={{ marginRight: '8px', padding: '4px 8px' }}
                        >
                          💾
                        </button>
                        <button
                          onClick={() => {
                            setModoEdicion(null);
                            setNombreEditado('');
                            setDescripcionEditada('');
                          }}
                          title="Cancelar"
                          style={{ padding: '4px 8px' }}
                        >
                          ❌
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => iniciarEdicion(cat)}
                          title="Editar"
                          style={{ marginRight: '8px', padding: '4px 8px' }}
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() => eliminar(cat.id_categoria)}
                          title="Eliminar"
                          style={{ padding: '4px 8px' }}
                        >
                          🗑️
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListaProducto;
