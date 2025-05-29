import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AgregarCategoria from './AgregarCategorias';
import TopBarAdmin from '../../components/TopBar/TopBarAdmin';
import { categorias } from '../../constantes/consts';

function ListaCategorias() {
  const [busqueda, setBusqueda] = useState('');
  const [categoriasLista, setCategorias] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(null);
  const [nombreEditado, setNombreEditado] = useState('');
  const [descripcionEditada, setDescripcionEditada] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    setCategorias(categorias);
  }, []);

  const agregarCategoria = (nueva) => {
    const ids = categoriasLista.map((c) => c.id);
    const nuevoId = Math.max(14, ...ids) + 1; 

    const nuevaCategoria = {
      id: nuevoId,
      ...nueva,
    };

    setCategorias([...categoriasLista, nuevaCategoria]);
    setMostrarFormulario(false);
  };

  const eliminarCategoria = (id) => {
    const confirmado = window.confirm('¿Estás seguro de eliminar esta categoría?');
    if (confirmado) {
      setCategorias(categoriasLista.filter((cat) => cat.id !== id));
    }
  };

  const iniciarEdicion = (cat) => {
    setModoEdicion(cat.id);
    setNombreEditado(cat.nombre);
    setDescripcionEditada(cat.descripcion);
  };

  const guardarEdicion = (id) => {
    const actualizadas = categoriasLista.map((cat) => cat.id === id ? { ...cat, nombre: nombreEditado, descripcion: descripcionEditada }: cat );
    setCategorias(actualizadas);
    setModoEdicion(null);
    setNombreEditado('');
    setDescripcionEditada('');
  };

  return (
    <div>
      <TopBarAdmin />
      <h1>Lista Categorías</h1>
      <input type="text" placeholder="Buscar una categoría..." value={busqueda} onChange={(e) => setBusqueda(e.target.value)}/>
      <button onClick={() => setMostrarFormulario(!mostrarFormulario)}>
        {mostrarFormulario ? 'Cancelar' : 'Agregar Categoría'}
      </button>
      {mostrarFormulario && (<AgregarCategoria onAgregar={agregarCategoria}/>)}
      <table border="1" cellPadding="10" style={{ marginTop: '20px', width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ backgroundColor: '#f2f2f2' }}>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categoriasLista. filter((cat) => cat.nombre.toLowerCase().includes(busqueda.toLowerCase()))
            .map((cat) => (
              <tr key={cat.id}>
                <td>#{String(cat.id).padStart(4, '0')}</td>
                <td>
                  {modoEdicion === cat.id ? (<input value={nombreEditado} onChange={(e) => setNombreEditado(e.target.value)} />
                  ) : (cat.nombre)}
                </td>
                <td>
                  {modoEdicion === cat.id ? (<input value={descripcionEditada} onChange={(e) => setDescripcionEditada(e.target.value)} />
                  ) : (cat.descripcion)}
                </td>
                <td>
                  {modoEdicion === cat.id ? (
                    <button onClick={() => guardarEdicion(cat.id)} title="Guardar" style={{ marginRight: '8px' }}>
                      💾
                    </button>
                  ) : (
                    <button onClick={() => iniciarEdicion(cat)} title="Editar" style={{ marginRight: '8px' }}>
                      🖉
                    </button>
                  )}
                  <button onClick={() => eliminarCategoria(cat.id)} title="Eliminar">
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

