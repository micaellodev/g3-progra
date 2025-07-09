import { useState } from 'react';
import { useCategorias } from '../hooks/CategoriasContext.jsx';
import { useProductoForm } from './useProductoForm.jsx';
import { useProductContext } from './ProductContext.jsx';

export const useAgregarProductoPage = () => {
  const [busqueda, setBusqueda] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { categorias, agregarCategoria } = useCategorias();
  const { producto, setProducto, handleChange, handleStockChange, resetForm } = useProductoForm();
  const { addProduct, error: productError } = useProductContext();

  const handleSearch = e => {
    e.preventDefault();
    console.log('Buscando:', busqueda);
  };

  const handleCrearProducto = async () => {
    const { nombre, presentacion, categoria, descripcion, imagen, stock } = producto;
    
    // Validaciones
    if (!nombre || !presentacion || !descripcion) {
      alert('Por favor completa todos los campos requeridos.');
      return;
    }
    
    if (stock < 1) {
      alert('El stock mínimo es 1.');
      return;
    }

    // Agregar precio por defecto si no existe
    const productoConPrecio = {
      ...producto,
      precio: producto.precio || 0
    };

    try {
      setIsSubmitting(true);
      await addProduct(productoConPrecio);
      alert('Producto creado exitosamente');
      resetForm();
    } catch (error) {
      console.error('Error al crear producto:', error);
      alert(`Error al crear producto: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAgregarCategoria = () => {
    setModalVisible(true);
  };

  const handleCrearCategoria = nuevaCategoria => {
    agregarCategoria(nuevaCategoria);
    setProducto(prev => ({ ...prev, categoria: nuevaCategoria.nombre }));
    setModalVisible(false);
  };

  const closeModal = () => setModalVisible(false);

  return {
    busqueda,
    setBusqueda,
    productoProps: {
      producto,
      handleChange,
      handleStockChange,
    },
    categorias,
    modalVisible,
    isSubmitting,
    productError,
    handlers: {
      handleSearch,
      handleCrearProducto,
      handleAgregarCategoria,
      handleCrearCategoria,
      closeModal,
    },
  };
};

export default useAgregarProductoPage;
