import React, { useState } from 'react';
import CarritoResumen from '../../components/Carrito/CarritoResumen';
import DireccionEnvioForm from '../../components/Form/DireccionEnvioForm';
import styles from '../../styles/Carrito.module.css';
import { carritoInicial } from '../../constantes/Consts';

export const Checkout = () => {
  const [juegosEnCarrito] = useState(carritoInicial);
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    ciudad: '',
    departamento: '',
    direccion: '',
    codigoPostal: '',
    telefono: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.carritoWrapper} style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
      <div style={{ flex: 2 }}>
        <DireccionEnvioForm form={form} onChange={handleChange} />
      </div>
      <div style={{ flex: 1 }}>
        <CarritoResumen juegos={juegosEnCarrito} />
      </div>
    </div>
  );
};

export default Checkout;
