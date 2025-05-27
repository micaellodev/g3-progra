import React, { useState } from 'react';
import TopBarAdmin from '../../components/TopBar/TopBarAdmin';
import ProductoForm from '../../components/Form/ProductoForm';
import ModalNuevaCategoria from '../../components/Form/ModalNuevaCategoria';
import { useCategorias } from '../../hooks/CategoriasContext.jsx';
import { useProductoForm } from '../../hooks/useProductoForm.jsx';

export const AgregarProducto = () => {
  const { categorias, agregarCategoria } = useCategorias();
  const {
    producto,
    setProducto,
    handleChange,
    handleStockChange,
    handleImagenChange,
  } = useProductoForm();

  const [busqueda, setBusqueda] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando:', busqueda);
  };

  const handleCrearProducto = () => {
    console.log('Producto creado:', producto);
  };

  const handleAgregarCategoria = () => {
    setModalVisible(true);
  };

  const handleCrearCategoria = (nuevaCategoria) => {
    agregarCategoria(nuevaCategoria);
    setProducto((prev) => ({ ...prev, categoria: nuevaCategoria.nombre }));
  };

  return (
    <>
      <TopBarAdmin handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />

      <ProductoForm
        producto={producto}
        handleChange={handleChange}
        handleStockChange={handleStockChange}
        handleImagenChange={handleImagenChange}
        handleCrearProducto={handleCrearProducto}
        categorias={categorias}
        handleAgregarCategoria={handleAgregarCategoria}
      />
      <ModalNuevaCategoria
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onCreate={handleCrearCategoria}
      />
    </>
  );
};

export default AgregarProducto;
