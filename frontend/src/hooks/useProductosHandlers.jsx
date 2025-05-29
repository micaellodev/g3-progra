import { useState } from 'react';
import { useProductContext } from './ProductContext';

export const useProductosHandlers = () => {
  const { products, updateProduct, deleteProduct } = useProductContext();
  const [editIndex, setEditIndex] = useState(null);
  const [editedProduct, setEditedProduct] = useState({});

  const startEdit = (index, product) => {
    setEditIndex(index);
    setEditedProduct({ ...product });
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEditedProduct({});
  };

  const saveEdit = () => {
    if (editIndex === null) return;

    const original = products[editIndex];

    // Validar si hay cambios reales
    if (!original || JSON.stringify(original) === JSON.stringify(editedProduct)) {
      cancelEdit();
      return;
    }

    updateProduct(editIndex, editedProduct);
    cancelEdit();
  };

  const handleDelete = (index) => {
    deleteProduct(index);
    cancelEdit(); // por si se está editando
  };

  const handleChange = (e) => {
    setEditedProduct((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return {
    editIndex,
    editedProduct,
    startEdit,
    cancelEdit,
    saveEdit,
    handleDelete,
    handleChange,
  };
};
