import React, { useState } from 'react';
import TopBarAdmin from '../../components/TopBar/TopBarAdmin';
import BuscadorUsuario from '../../components/Lista/BuscadorUsuario';
import UsuariosTable from '../../components/Table/UsuariosTable';
import { usuarios } from '../../constantes/consts';

const ListaUsuarios = () => {
  const [usuariosFiltrados, setUsuariosFiltrados] = useState(usuarios);

  const handleSearch = (termino) => {
    const resultado = usuarios.filter((u) =>
      u.nombre.toLowerCase().includes(termino.toLowerCase())
    );
    setUsuariosFiltrados(resultado);
  };

  return (
    <>
      <TopBarAdmin />
      <h1>Lista de Usuarios</h1>
      <BuscadorUsuario handleSearch={handleSearch} />
      <UsuariosTable usuarios={usuariosFiltrados} />
    </>
  );
};

export default ListaUsuarios;
