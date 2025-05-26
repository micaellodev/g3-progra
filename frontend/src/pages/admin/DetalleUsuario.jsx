import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import TopBarAdmin from '../../components/TopBar/TopBarAdmin';
import UsuariosDetalleCard from '../../components/Table/UsuariosDetalleCard';
import { usuarios } from '../../constantes/Consts'; // verifica que el archivo tenga los datos

const DetalleUsuario = () => {
  const { id } = useParams();
  const [busqueda, setBusqueda] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando usuario:', busqueda);
  };

  const usuario = usuarios.find(u => u.id.toString() === id);

  if (!usuario) {
    return <p>Usuario no encontrado</p>;
  }

  return (
    <>
      <TopBarAdmin busqueda={busqueda} setBusqueda={setBusqueda} />
      <h1 style={{ margin: '20px 30px' }}>Detalle del Usuario</h1>
      <UsuariosDetalleCard usuario={usuario} />
    </>
  );
};

export default DetalleUsuario;
