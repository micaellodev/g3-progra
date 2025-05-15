import { useState } from 'react';

interface Producto {
  id: number;
  nombre: string;
}

interface Categoria {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  productos: Producto[];
}

const productosDisponibles: Producto[] = [
  { id: 1, nombre: 'Elden Ring' },
  { id: 2, nombre: 'Call of Duty' },
  { id: 3, nombre: 'Zelda: Breath of the Wild' },
];

const Lista = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [filtro, setFiltro] = useState('');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [editandoId, setEditandoId] = useState<number | null>(null);

  const [nuevaCategoria, setNuevaCategoria] = useState({
    nombre: '',
    descripcion: '',
    imagen: '',
    productos: [] as Producto[],
  });

  const handleGuardar = (e: React.FormEvent) => {
    e.preventDefault();

    if (editandoId !== null) {
      // Editar existente
      setCategorias((prev) =>
        prev.map((cat) =>
          cat.id === editandoId ? { ...cat, ...nuevaCategoria } : cat
        )
      );
    } else {
      // Agregar nueva
      const nueva: Categoria = {
        id: categorias.length + 1,
        ...nuevaCategoria,
      };
      setCategorias([...categorias, nueva]);
    }

    setNuevaCategoria({ nombre: '', descripcion: '', imagen: '', productos: [] });
    setEditandoId(null);
    setMostrarFormulario(false);
  };

  const handleModificar = (cat: Categoria) => {
    setEditandoId(cat.id);
    setNuevaCategoria({
      nombre: cat.nombre,
      descripcion: cat.descripcion,
      imagen: cat.imagen,
      productos: cat.productos,
    });
    setMostrarFormulario(true);
  };

  const toggleProducto = (producto: Producto) => {
    const existe = nuevaCategoria.productos.find((p) => p.id === producto.id);
    const nuevosProductos = existe
      ? nuevaCategoria.productos.filter((p) => p.id !== producto.id)
      : [...nuevaCategoria.productos, producto];
    setNuevaCategoria({ ...nuevaCategoria, productos: nuevosProductos });
  };

  const categoriasFiltradas = categorias.filter((cat) =>
    cat.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
    cat.descripcion.toLowerCase().includes(filtro.toLowerCase()) ||
    cat.id.toString().includes(filtro)
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Listado de Categorías</h1>

      <div className="flex mb-4 gap-4 items-center">
        <input
          type="text"
          placeholder="Buscar por ID, nombre o descripción"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="p-2 border rounded w-full max-w-md"
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => {
            setMostrarFormulario(true);
            setEditandoId(null);
            setNuevaCategoria({ nombre: '', descripcion: '', imagen: '', productos: [] });
          }}
        >
          + Agregar Categoría
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-white shadow-md">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="border border-white px-4 py-2">ID</th>
              <th className="border border-white px-4 py-2">Nombre</th>
              <th className="border border-white px-4 py-2">Descripción</th>
              <th className="border border-white px-4 py-2">Imagen</th>
              <th className="border border-white px-4 py-2">Productos</th>
              <th className="border border-white px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categoriasFiltradas.length > 0 ? (
              categoriasFiltradas.map((cat) => (
                <tr key={cat.id} className="bg-white">
                  <td className="border border-white px-4 py-2">{cat.id}</td>
                  <td className="border border-white px-4 py-2">{cat.nombre}</td>
                  <td className="border border-white px-4 py-2">{cat.descripcion}</td>
                  <td className="border border-white px-4 py-2">
                    {cat.imagen && (
                      <img
                        src={cat.imagen}
                        alt="img"
                        className="w-16 h-16 object-cover rounded"
                      />
                    )}
                  </td>
                  <td className="border border-white px-4 py-2">
                    {cat.productos.map((p) => p.nombre).join(', ')}
                  </td>
                  <td className="border border-white px-4 py-2">
                    <button
                      className="text-blue-600 hover:underline"
                      onClick={() => handleModificar(cat)}
                    >
                      Modificar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center p-4 text-gray-500 bg-white">
                  No se encontraron categorías.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {mostrarFormulario && (
        <form onSubmit={handleGuardar} className="mt-6 p-4 bg-gray-100 rounded shadow space-y-3">
          <h2 className="text-lg font-bold">
            {editandoId !== null ? 'Modificar Categoría' : 'Agregar Categoría'}
          </h2>

          <input
            type="text"
            placeholder="Nombre"
            className="p-2 border rounded w-full"
            value={nuevaCategoria.nombre}
            onChange={(e) => setNuevaCategoria({ ...nuevaCategoria, nombre: e.target.value })}
            required
          />

          <textarea
            placeholder="Descripción"
            className="p-2 border rounded w-full"
            value={nuevaCategoria.descripcion}
            onChange={(e) =>
              setNuevaCategoria({ ...nuevaCategoria, descripcion: e.target.value })
            }
            required
          />

          <input
            type="text"
            placeholder="URL de imagen"
            className="p-2 border rounded w-full"
            value={nuevaCategoria.imagen}
            onChange={(e) => setNuevaCategoria({ ...nuevaCategoria, imagen: e.target.value })}
          />

          <button
            type="button"
            className="bg-gray-700 text-white px-3 py-1 rounded"
            onClick={() => setMostrarModal(true)}
          >
            Seleccionar Productos
          </button>

          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Guardar
            </button>
            <button
              type="button"
              className="text-red-600 hover:underline"
              onClick={() => {
                setMostrarFormulario(false);
                setEditandoId(null);
              }}
            >
              Cancelar
            </button>
          </div>
        </form>
      )}

      {mostrarModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Seleccionar Productos</h3>
            <ul className="space-y-2">
              {productosDisponibles.map((prod) => (
                <li key={prod.id}>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={nuevaCategoria.productos.some((p) => p.id === prod.id)}
                      onChange={() => toggleProducto(prod)}
                    />
                    <span>{prod.nombre}</span>
                  </label>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setMostrarModal(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Hecho
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lista;


