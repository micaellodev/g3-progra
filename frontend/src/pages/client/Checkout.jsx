import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CarritoResumen from '../../components/Carrito/CarritoResumen';
import DireccionEnvioForm from '../../components/Form/DireccionEnvioForm';
import DireccionResumen from '../../components/Direccion/DirecciónResumen';
import TopBar from '../../components/TopBar/TopBar'; // Importa el TopBar
import Footer from '../../components/Footer/Footer'; // Importa el Footer
import styles from '../../styles/Carrito.module.css';
import { carritoInicial } from '../../constantes/consts';

export const Checkout = () => {
  const [juegosEnCarrito] = useState(carritoInicial);
  const [mostrarBotonMetodoPago, setMostrarBotonMetodoPago] = useState(false);
  const [busqueda, setBusqueda] = useState(''); // Estado para la barra de búsqueda

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando:', busqueda);
  };

  return (
    <>
      <TopBar handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />
      <div className={styles.carritoWrapper} style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
        <div style={{ flex: 2 }}>
          <DireccionEnvioForm onSubmitSuccess={() => setMostrarBotonMetodoPago(true)} />
        </div>
        <div style={{ flex: 1 }}>
          <CarritoResumen juegos={juegosEnCarrito} />
          <br/>
          <DireccionResumen />
          {mostrarBotonMetodoPago && (
            <Link to="/MetodoDePago" className={styles.botonSeguirComprando}>
              Agregar Metodo De Pago
            </Link>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;