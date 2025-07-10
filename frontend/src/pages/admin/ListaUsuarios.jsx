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
      const data = await obtenerUsuarios();

      const usuariosConFecha = data.map(u => ({
        ...u,
        fechaRegistro: new Date().toLocaleDateString('es-PE'),
      }));

      setUsuarios(usuariosConFecha);
      setUsuariosFiltrados(usuariosConFecha);
    };
    fetchUsuarios();
  }, []);

  const handleSearch = (termino) => {
    const resultado = usuarios.filter((u) =>
      u.nombre.toLowerCase().includes(termino.toLowerCase())
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
