import { createContext, useContext, useState } from 'react';

const CategoriasContext = createContext();

export const useCategorias = () => useContext(CategoriasContext);

export const CategoriasProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);

  const agregarCategoria = (nuevaCategoria) => {
    setCategorias((prev) => [...prev, nuevaCategoria]);
  };

  return (
    <CategoriasContext.Provider value={{ categorias, agregarCategoria }}>
      {children}
    </CategoriasContext.Provider>
  );
};
