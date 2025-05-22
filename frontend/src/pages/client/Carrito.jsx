import React, { useState } from 'react';
import CarritoItems from '../../components/Carrito/CarritoItems';
import CarritoResumen from '../../components/Carrito/CarritoResumen';
import styles from '../../styles/Carrito/Carrito.module.css';

import { carritoInicial } from '../../constantes/Consts';

export const Carrito = () => {
  const [juegosEnCarrito, setJuegosEnCarrito] = useState(carritoInicial);

  return (
    <div className={styles.carritoWrapper}>
      <div className={styles.carritoContenido}>
        <h1>Carrito</h1>
        <CarritoItems juegos={juegosEnCarrito} />
      </div>
      <CarritoResumen juegos={juegosEnCarrito} />
    </div>
  )
}

export default Carrito;
