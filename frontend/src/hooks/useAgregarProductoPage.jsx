import { useState } from 'react';
import { useCategorias } from '../hooks/CategoriasContext.jsx';
import { useProductoForm } from './useProductoForm.jsx';
import { useProductContext } from './ProductContext.jsx';
import { uploadImageToSupabase } from '../services/uploadImage';

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

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProducto(prev => ({
        ...prev,
        imagenFile: e.target.files[0],
        imagen: e.target.files[0].name
      }));
    }
  };

  const handleCrearProducto = async () => {
    try {
      let imageUrl = '';
      if (producto.imagenFile) {
        imageUrl = await uploadImageToSupabase(producto.imagenFile);
      }

      const nuevoProducto = {
        ...producto,
        imagen: imageUrl,
      };
      delete nuevoProducto.imagenFile;

      await addProduct(nuevoProducto);

      alert('Producto creado exitosamente');
    } catch (error) {
      alert('Error al crear producto: ' + error.message);
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
      handleFileChange,
    },
  };
};

export default useAgregarProductoPage;
