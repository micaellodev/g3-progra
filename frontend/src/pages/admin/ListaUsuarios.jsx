import React, { useState } from 'react';
import TopBarAdmin from '../../components/TopBar/TopBarAdmin';
import BuscadorUsuario from '../../components/Lista/BuscadorUsuario';
import UsuariosTable from '../../components/Table/UsuariosTable';
import { usuarios } from '../../constantes/Consts'; // importa la lista real

export const ListaUsuarios = () => {
  const [busqueda, setBusqueda] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando usuario:', busqueda);
  };

  // Filtrar usuarios por nombre o correo según busqueda
  const usuariosFiltrados = usuarios.filter(u =>
    u.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    u.correo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
      <TopBarAdmin busqueda={busqueda} setBusqueda={setBusqueda} />
      <h1>Lista de Usuarios</h1>
      <BuscadorUsuario
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        handleSearch={handleSearch}
      />
      <UsuariosTable usuarios={usuariosFiltrados} />
    </>
  );
};

export default ListaUsuarios;
