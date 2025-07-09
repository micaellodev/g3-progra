import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TopBarAdmin from '../../components/TopBar/TopBarAdmin';
import UsuariosDetalleCard from '../../components/Table/UsuariosDetalleCard';
import { obtenerUsuarioPorId } from '../../services/listaUsuariosService';

const DetalleUsuario = () => {
  const { id } = useParams();
  const [busqueda, setBusqueda] = useState('');
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const fetchUsuario = async () => {
      const data = await getUsuarioById(id);
      setUsuario(data);
    };
    fetchUsuario();
  }, [id]);

  const handleSearch = (e) => {
    e.preventDefault();
  };

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
