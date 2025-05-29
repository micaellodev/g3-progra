import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CarritoItems from '../../components/Carrito/CarritoItems';
import CarritoResumen from '../../components/Carrito/CarritoResumen';
import DireccionEnvioForm from '../../components/Form/DireccionEnvioForm';
import DireccionResumen from '../../components/Direccion/DirecciónResumen';
import TopBar from '../../components/TopBar/TopBar';
import Footer from '../../components/Footer/Footer';
import styles from '../../styles/Carrito.module.css';
import { CartContext } from '../../hooks/CartContext'; // Importa el contexto

export const Checkout = () => {
  const { cart } = useContext(CartContext); // Obtiene el carrito del contexto
  const [mostrarBotonMetodoPago, setMostrarBotonMetodoPago] = useState(false);
  const [busqueda, setBusqueda] = useState(''); // Estado para la barra de búsqueda
  const [selectedIds, setSelectedIds] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando:', busqueda);
  };

  // Esta función se pasa a CarritoItems y se llama cada vez que seleccionas/deseleccionas un producto
  const handleSelectedItemsChange = (ids) => {
    setSelectedIds(ids);
  };

  // Siempre filtra los seleccionados desde el contexto actualizado
  const juegosSeleccionados = cart.filter(j => selectedIds.includes(j.id));

  return (
    <>
      <TopBar handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />
      <div className={styles.carritoWrapper} style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
        <div style={{ flex: 2 }}>
          <DireccionEnvioForm onSubmitSuccess={() => setMostrarBotonMetodoPago(true)} />
        </div>
        <div style={{ flex: 1 }}>
          <CarritoResumen juegos={juegosSeleccionados} />
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