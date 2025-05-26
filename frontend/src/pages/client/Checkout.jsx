import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CarritoResumen from '../../components/Carrito/CarritoResumen';
import DireccionEnvioForm from '../../components/Form/DireccionEnvioForm';
import DireccionResumen from '../../components/Direccion/DirecciónResumen';
import { DireccionProvider } from '../../hooks/DireccionContext';
import styles from '../../styles/Carrito.module.css';
import { carritoInicial } from '../../constantes/consts';

export const Checkout = () => {
  const [juegosEnCarrito] = useState(carritoInicial);

  return (
    <DireccionProvider>
      <div className={styles.carritoWrapper} style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
        <div style={{ flex: 2 }}>
          <DireccionEnvioForm />
        </div>
        <div style={{ flex: 1 }}>
          <CarritoResumen juegos={juegosEnCarrito} />
          <DireccionResumen />
          <Link to="/MetodoDePago" className={styles.botonSeguirComprando}>
            Agregar Metodo De Pago
          </Link>
        </div>
      </div>
    </DireccionProvider>
  );
};

export default Checkout;