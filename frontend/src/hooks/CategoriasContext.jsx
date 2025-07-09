// src/context/CategoriasContext.jsx
import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  getCategorias as apiGet,
  postCategoria as apiPost,
  putCategoria  as apiPut,
  deleteCategoria as apiDelete
} from '../services/CategoriaService';

const CategoriasContext = createContext();
export const useCategorias = () => useContext(CategoriasContext);

export const CategoriasProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading]       = useState(true);
  const [error, setError]           = useState(null);

  // 1️⃣ Carga inicial
  useEffect(() => {
    apiGet()
      .then(data => setCategorias(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  // 2️⃣ Agregar
  const agregarCategoria = useCallback(async nueva => {
    const creada = await apiPost(nueva);
    setCategorias(prev => [...prev, creada]);
  }, []);

  // 3️⃣ Editar
  const editarCategoria = useCallback(async (id, cambios) => {
    const updated = await apiPut(id, cambios);
    setCategorias(prev =>
      prev.map(c => c.id_categoria === id ? updated : c)
    );
  }, []);

  // 4️⃣ Eliminar
  const eliminarCategoria = useCallback(async id => {
    await apiDelete(id);
    setCategorias(prev => prev.filter(c => c.id_categoria !== id));
  }, []);

  return (
    <CategoriasContext.Provider value={{
      categorias,
      loading,
      error,
      agregarCategoria,
      editarCategoria,
      eliminarCategoria
    }}>
      {children}
    </CategoriasContext.Provider>
  );
};
