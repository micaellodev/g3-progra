import React, { useState, useEffect } from 'react';
import TopBarAdmin from '../../components/TopBar/TopBarAdmin';
import BuscadorUsuario from '../../components/Lista/BuscadorUsuario';
import UsuariosTable from '../../components/Table/UsuariosTable';
import { obtenerUsuarios } from '../../services/listaUsuariosService';

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuariosFiltrados, setUsuariosFiltrados] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const data = await obtenerUsuarios();
        setUsuarios(data);
        setUsuariosFiltrados(data);
      } catch (error) {
        console.error('Error al cargar usuarios', error);
      }
    };
    fetchUsuarios();
  }, []);

  const handleSearch = (termino) => {
    const resultado = usuarios.filter((u) =>
      (u.nombre || '').toLowerCase().includes(termino.toLowerCase())
    );
    setUsuariosFiltrados(resultado);
  };

  return (
    <>
      <TopBarAdmin />
      <h1 style={{ margin: '20px 30px' }}>Lista de Usuarios</h1>
      <BuscadorUsuario handleSearch={handleSearch} />
      <UsuariosTable usuarios={usuariosFiltrados} />
    </>
  );
};

export default ListaUsuarios;
