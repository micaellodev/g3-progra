import React from 'react';
import Footer from './Footer/Footer';

const LayoutCliente = ({ children }) => {
  return (
    <>
      {/* Aquí otros componentes comunes (header, topbar, etc.) */}
      {children}
      <Footer />
    </>
  );
};

export default LayoutCliente;
