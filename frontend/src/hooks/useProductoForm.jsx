import { useState } from 'react';

export const useProductoForm = () => {
  const [producto, setProducto] = useState({
    nombre: '',
    presentacion: '',
    id_categoria: '',
    descripcion: '',
    stock: 1,
    precio: 0,
    imagen: '',
    imagenFile: null,
    imagenPreview: null, // Para la vista previa
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto((prev) => ({ ...prev, [name]: value }));
  };

  const handleStockChange = (e) => {
    setProducto((prev) => ({ ...prev, stock: parseInt(e.target.value) }));
  };

  const handleImagenChange = (file) => {
    // Libera la URL anterior si existe
    if (producto.imagenPreview) {
      URL.revokeObjectURL(producto.imagenPreview);
    }
    setProducto(prev => ({
      ...prev,
      imagenFile: file,
      imagen: file.name,
      imagenPreview: URL.createObjectURL(file)
    }));
  };

  const resetForm = () => {
    if (producto.imagenPreview) {
      URL.revokeObjectURL(producto.imagenPreview);
    }
    setProducto({
      nombre: '',
      presentacion: '',
      id_categoria: '',
      descripcion: '',
      stock: 1,
      precio: 0,
      imagen: '',
      imagenFile: null,
      imagenPreview: null,
    });
  };

  return {
    producto,
    setProducto,
    handleChange,
    handleStockChange,
    handleImagenChange,
    resetForm,
  };
};
