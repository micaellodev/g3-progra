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
      try {
        const data = await obtenerUsuarioPorId(id);
        const usuarioConFecha = {
          ...data,
          fechaRegistro: new Date().toLocaleDateString('es-PE'),
        };
        setUsuario(usuarioConFecha);
      } catch (err) {
        console.error('Error al obtener usuario', err);
      }
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
      <TopBarAdmin busqueda={busqueda} setBusqueda={setBusqueda} handleSearch={handleSearch} />
      <h1 style={{ margin: '20px 30px' }}>Detalle del Usuario</h1>
      <UsuariosDetalleCard usuario={usuario} />
    </>
  );
};

export default DetalleUsuario;
