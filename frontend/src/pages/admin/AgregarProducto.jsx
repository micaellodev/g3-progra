import React from 'react';
import TopBarAdmin from '../../components/TopBar/TopBarAdmin';
import ProductoForm from '../../components/Form/ProductoForm';
import ModalNuevaCategoria from '../../components/Form/ModalNuevaCategoria';
import { useAgregarProductoPage } from '../../hooks/useAgregarProductoPage.jsx';
import Footer from '../../components/Footer/Footer.jsx';

export const AgregarProducto = () => {
  const {
    busqueda,
    setBusqueda,
    productoProps,
    categorias,
    modalVisible,
    handlers: {
      handleSearch,
      handleCrearProducto,
      handleAgregarCategoria,
      handleCrearCategoria,
      closeModal,
    },
  } = useAgregarProductoPage();

  return (
    <>
      <TopBarAdmin
        handleSearch={handleSearch}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />

      <ProductoForm
        {...productoProps}
        categorias={categorias}
        handleCrearProducto={handleCrearProducto}
        handleAgregarCategoria={handleAgregarCategoria}
      />

      <ModalNuevaCategoria
        visible={modalVisible}
        onClose={closeModal}
        onCreate={handleCrearCategoria}
      />
      <Footer />
    </>
  );
};

export default AgregarProducto;
