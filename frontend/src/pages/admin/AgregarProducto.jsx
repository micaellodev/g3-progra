// src/pages/AgregarProducto.jsx

import React, { useState } from 'react';
import TopBar from '../../components/TopBar/TopBar';
import ProductoForm from '../../components/Form/ProductoForm';
import ModalNuevaCategoria from '../../components/Form/ModalNuevaCategoria';

export const AgregarProducto = () => {
  const [categorias, setCategorias] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [producto, setProducto] = useState({
    nombre: '',
    presentacion: '',
    categoria: '',
    descripcion: '',
    stock: 0,
    imagen: null,
  });

  const [modalVisible, setModalVisible] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando:', busqueda);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleStockChange = (e) => {
    setProducto({ ...producto, stock: parseInt(e.target.value) });
  };

  const handleImagenChange = (e) => {
    setProducto({ ...producto, imagen: e.target.files[0] });
  };

  const handleCrearProducto = () => {
    console.log('Producto creado:', producto);
  };

  const handleAgregarCategoria = () => {
    setModalVisible(true);
  };

  const handleCrearCategoria = (nuevaCategoria) => {
    setCategorias((prev) => [...prev, nuevaCategoria]);
    setProducto((prev) => ({ ...prev, categoria: nuevaCategoria.nombre }));
  };

  return (
    <>
      <TopBar
        handleSearch={handleSearch}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />
      <h1>Agregar un producto</h1>
      <ProductoForm
        producto={producto}
        handleChange={handleChange}
        handleStockChange={handleStockChange}
        handleImagenChange={handleImagenChange}
        handleCrearProducto={handleCrearProducto}
        categorias={categorias} // ✅ Está bien
        handleAgregarCategoria={handleAgregarCategoria} // ✅ También
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
