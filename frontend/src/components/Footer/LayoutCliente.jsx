// src/components/LayoutCliente/LayoutCliente.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const LayoutCliente = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column' 
    }}>
      
      
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default LayoutCliente;
