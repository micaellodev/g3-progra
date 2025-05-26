import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AgregarCategoria from './AgregarCategorias';
import TopBarAdmin from '../../components/TopBar/TopBarAdmin';

function ListaCategorias() {
  const [busqueda, setBusqueda] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(null);
  const [nombreEditado, setNombreEditado] = useState('');
  const [descripcionEditada, setDescripcionEditada] = useState('');
  
  const navigate = useNavigate();
  
  const agregarCategoria = (nueva) => {
    setCategorias([...categorias, nueva]);
    setMostrarFormulario(false);
  };

  const eliminarCategoria = (id) => {
    const confirmado = window.confirm('¿Estás seguro de eliminar esta categoría?');
    if (confirmado) {
      setCategorias(categorias.filter((cat) => cat.id !== id));
    }
  };

  const iniciarEdicion = (categoria) => {
    setModoEdicion(categoria.id);
    setNombreEditado(categoria.nombre);
    setDescripcionEditada(categoria.descripcion);
  };

  const guardarEdicion = (id) => {
    setCategorias(
      categorias.map((cat) =>
        cat.id === id
          ? { ...cat, nombre: nombreEditado, descripcion: descripcionEditada }
          : cat
      )
    );
    cancelarEdicion();
  };

  const cancelarEdicion = () => {
    setModoEdicion(null);
    setNombreEditado('');
    setDescripcionEditada('');
  };
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando:', busqueda);
  };

  return (
    
    <div className="p-6">
      <TopBarAdmin handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda}/>
      <button
        onClick={() => navigate('/adminf')}
        className="mb-4 bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
      >
        ⬅️ Volver
      </button>

      <h2 className="text-2xl font-bold mb-4">Listado de categorías</h2>

      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Buscar categoría..."
          className="border px-4 py-2 rounded w-1/2"
        />
        <button
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          ➕ Agregar categoría
        </button>
      </div>

      {mostrarFormulario && (
        <div className="mb-6">
          <AgregarCategoria onAgregar={agregarCategoria} />
        </div>
      )}

      {categorias.length === 0 ? (
        <p>No hay categorías registradas.</p>
      ) : (
        <table className="w-full border-collapse mt-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Nombre</th>
              <th className="border px-4 py-2">Descripción</th>
              <th className="border px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((cat) => (
              <tr key={cat.id}>
                <td className="border px-4 py-2">{cat.id}</td>
                <td className="border px-4 py-2">
                  {modoEdicion === cat.id ? (
                    <input
                      type="text"
                      value={nombreEditado}
                      onChange={(e) => setNombreEditado(e.target.value)}
                      className="border px-2 py-1 rounded w-full"
                    />
                  ) : (
                    cat.nombre
                  )}
                </td>
                <td className="border px-4 py-2">
                  {modoEdicion === cat.id ? (
                    <textarea
                      value={descripcionEditada}
                      onChange={(e) => setDescripcionEditada(e.target.value)}
                      className="border px-2 py-1 rounded w-full"
                    />
                  ) : (
                    cat.descripcion
                  )}
                </td>
                <td className="border px-4 py-2 space-x-2">
                  {modoEdicion === cat.id ? (
                    <>
                      <button
                        onClick={() => guardarEdicion(cat.id)}
                        className="bg-green-600 text-white px-2 py-1 rounded"
                      >
                        💾 Guardar
                      </button>
                      <button
                        onClick={cancelarEdicion}
                        className="bg-gray-400 text-white px-2 py-1 rounded"
                      >
                        ❌ Cancelar
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => iniciarEdicion(cat)}
                        className="text-blue-600 hover:underline"
                      >
                        ✏️ Editar
                      </button>
                      <button
                        onClick={() => eliminarCategoria(cat.id)}
                        className="text-red-600 hover:underline ml-2"
                      >
                        🗑️ Eliminar
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ListaCategorias;
