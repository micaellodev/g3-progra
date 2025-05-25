// src/pages/DetalleUsuario.jsx

import React, { useState } from 'react';
import TopBar from '../../components/TopBar/TopBar';
import UsuarioDetalleCard from '../../components/Table/UsuariosDetalleCard';
import { usuarios } from '../../constantes/consts'; // Suponiendo que tienes datos de usuarios

export const DetalleUsuario = () => {
  const [busqueda, setBusqueda] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando usuario:', busqueda);
  };

  const usuario = usuarios[0]; // Solo para ejemplo, tomamos el primer usuario

  return (
    <>
      <TopBar handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />
      <h1 style={{ margin: '20px 30px' }}>Detalle del Usuario</h1>
      <UsuarioDetalleCard usuario={usuario} />
    </>
  );
};

export default DetalleUsuario;
