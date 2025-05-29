import React, { useState } from 'react';
import TopBarAdmin from '../../components/TopBar/TopBarAdmin';
import styles from '../../styles/Dashboard.module.css';
import Footer from '../../components/Footer/Footer'; 
import Resumen from '../../components/Dash/Resumen/Resumen';
import UsuariosTabla from '../../components/Dash/Usuarios/UsuariosTabla';
import UsuariosDetalle from '../../components/Dash/Usuarios/UsuariosDetalle';
import OrdenesTabla from '../../components/Dash/Ordenes/OrdenesTabla';
import { UserDash } from '../../constantes/consts';

export const Dashboard = () => {
  const [busqueda, setBusqueda] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando:', busqueda);
  };
  return (
    <>
      <TopBarAdmin busqueda={busqueda}setBusqueda={setBusqueda}handleSearch={handleSearch}/>
      <main className={styles.dashboard}>
        <Resumen />
        <div className={styles.seccionDoble}>
          <UsuariosTabla />
          <UsuariosDetalle usuario={UserDash} />
        </div>
        <OrdenesTabla />
      </main>
      <Footer />
    </>
  );
};
export default Dashboard;