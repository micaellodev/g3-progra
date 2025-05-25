import React, { useState } from 'react';
import TopBar from '../../components/TopBar/TopBar';
import ResumenCards from '../../components/Dash/Resumen';
import UsuarioDetalleCard from '../../components/Dash/UsuarioDetalleCard';
import UsuariosTabla from '../../components/Dash/UsuariosTabla';
import OrdenesListado from '../../components/Dash/OrdenesListado';
import { UserDash } from '../../constantes/consts';
import styles from '../../styles/Dashboard.module.css';

export const Dashboard = () => {
  const [busqueda, setBusqueda] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando:', busqueda);
  };
  return (
    <>
      <TopBar handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />
      <main className={styles.dashboard}>
        <ResumenCards />
        <section className={styles.seccionDoble}>
          <UsuariosTabla titulo="Usuarios registrados" />
          <UsuarioDetalleCard usuario={UserDash} titulo="Detalle del usuario" />
        </section>
        <OrdenesListado titulo="Listado de órdenes" />
      </main>
    </>
  );
};

export default Dashboard;
