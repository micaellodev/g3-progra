import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchProductos, createProducto, updateProducto, deleteProducto } from '../services/ProductoService.js';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [initialized, setInitialized] = useState(false);

  // Cargar productos desde la base de datos
  const loadProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const productos = await fetchProductos();
      setProducts(productos);
      setInitialized(true);
    } catch (err) {
      console.error('Error loading products:', err);
      setError(err.message);
      // No lanzar error, solo mostrar en consola
      setInitialized(true);
    } finally {
      setLoading(false);
    }
  };

  // Solo cargar productos cuando se llame explícitamente
  useEffect(() => {
    // No cargar automáticamente para evitar errores de conexión
    setInitialized(true);
  }, []);

  const addProduct = async (product) => {
    try {
      setLoading(true);
      setError(null);
      const newProduct = await createProducto(product);
      setProducts(prev => [...prev, newProduct]);
      return newProduct;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    try {
      setLoading(true);
      setError(null);
      const updated = await updateProducto(id, updatedProduct);
      setProducts(prev => {
        const updatedList = [...prev];
        const index = updatedList.findIndex(p => p.id_producto === id);
        if (index !== -1) {
          updatedList[index] = updated;
        }
        return updatedList;
      });
      return updated;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const removeProduct = async (id) => {
    try {
      setLoading(true);
      setError(null);
      await deleteProducto(id);
      setProducts(prev => prev.filter(p => p.id_producto !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductContext.Provider value={{
      products,
      loading,
      error,
      initialized,
      addProduct,
      updateProduct,
      deleteProduct: removeProduct,
      refreshProducts: loadProducts
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
