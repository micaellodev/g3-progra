import React, { createContext, useContext, useState, useEffect } from 'react';
import { juegos } from '../constantes/consts';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Cargar `juegos` solo una vez al inicio
  useEffect(() => {
    setProducts(juegos);
  }, []);

  const addProduct = (product) => {
    setProducts(prev => [...prev, product]);
  };

  const updateProduct = (index, updatedProduct) => {
    setProducts(prev => {
      const updated = [...prev];
      updated[index] = updatedProduct;
      return updated;
    });
  };

  const deleteProduct = (index) => {
    setProducts(prev => {
      const updated = [...prev];
      updated.splice(index, 1);
      return updated;
    });
  };

  return (
    <ProductContext.Provider value={{
      products,
      addProduct,
      updateProduct,
      deleteProduct
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};
