import { useState } from 'react';
import { useCategorias } from '../hooks/CategoriasContext.jsx';
import { useProductoForm } from './useProductoForm.jsx';
import { useProductContext } from './ProductContext.jsx';

export const useAgregarProductoPage = () => {
  const [busqueda, setBusqueda] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const { categorias, agregarCategoria } = useCategorias();
  const { producto, setProducto, handleChange, handleStockChange, handleImagenChange, resetForm } = useProductoForm();
  const { addProduct } = useProductContext();

  const handleSearch = e => {
    e.preventDefault();
    console.log('Buscando:', busqueda);
  };

  const handleCrearProducto = () => {
    const { nombre, presentacion, categoria, descripcion, imagen, stock } = producto;
    if (!nombre || !presentacion || !categoria || !descripcion || !imagen) {
      alert('Por favor completa todos los campos.');
      return;
    }
    if (stock < 1) {
      alert('El stock mínimo es 1.');
      return;
    }
    addProduct(producto);
    alert('Producto generado exitosamente');
    resetForm();
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
      handleImagenChange,
    },
    categorias,
    modalVisible,
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
