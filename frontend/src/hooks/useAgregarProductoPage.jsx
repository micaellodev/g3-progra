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
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setProducto(prev => ({
        ...prev,
        imagenFile: file,
        imagen: file.name,
        imagenPreview: imageUrl
      }));
    }
  };

  const handleCrearProducto = async () => {
    try {
      // Validación básica
      if (!producto.nombre || !producto.presentacion || !producto.precio || !producto.id_categoria || !producto.descripcion || !producto.stock) {
        alert('Por favor, completa todos los campos requeridos');
        return;
      }

      if (producto.precio <= 0) {
        alert('El precio debe ser mayor a 0');
        return;
      }

      if (producto.stock <= 0) {
        alert('El stock debe ser mayor a 0');
        return;
      }

      setIsSubmitting(true);
      let imageUrl = '';
      if (producto.imagenFile) {
        imageUrl = await uploadImageToSupabase(producto.imagenFile);
      }

      const nuevoProducto = {
        nombre: producto.nombre,
        presentacion: producto.presentacion,
        descripcion: producto.descripcion,
        stock: Number(producto.stock),
        precio: Number(producto.precio),
        imagen: imageUrl,
        id_categoria: Number(producto.id_categoria)
      };
      await addProduct(nuevoProducto);

      // Limpiar la vista previa de la imagen
      if (producto.imagenPreview) {
        URL.revokeObjectURL(producto.imagenPreview);
      }

      // Resetear el formulario
      resetForm();
      alert('Producto creado exitosamente');
    } catch (error) {
      alert('Error al crear producto: ' + error.message);
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
      handleFileChange,
    },
  };
};

export default useAgregarProductoPage;
