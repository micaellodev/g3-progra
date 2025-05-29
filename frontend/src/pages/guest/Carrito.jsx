import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../hooks/CartContext';
import CarritoItems from '../../components/Carrito/CarritoItems';
import CarritoResumen from '../../components/Carrito/CarritoResumen';
import TopBar from '../../components/TopBar/TopBar'; // Importa el TopBar
import Footer from '../../components/Footer/Footer'; // Importa el Footer
import styles from '../../styles/Carrito.module.css';

export const Carrito = () => {
  const { cart } = useContext(CartContext); // Obtiene el carrito desde el contexto
  const [selectedItems, setSelectedItems] = useState([]);
  const [busqueda, setBusqueda] = useState(''); // Estado para la barra de búsqueda

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando:', busqueda);
  };

  const handleSelectedItemsChange = (selectedIds) => {
    const selectedProducts = cart.filter((item) => selectedIds.includes(item.id));
    setSelectedItems(selectedProducts); // Actualiza los productos seleccionados
  };

  return (
    <>
      <TopBar handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />
      <div className={styles.carritoWrapper}>
        <div className={styles.carritoContenido}>
          {cart.length === 0 ? (
            <p>El carrito está vacío.</p>
          ) : (
            <>
              <h1>Carrito</h1>
              <CarritoItems juegos={cart} onSelectedItemsChange={handleSelectedItemsChange} />
              <Link to="/" className={styles.botonSeguirComprando}>
                Seguir explorando
              </Link>
            </>
          )}
        </div>
        
        <div>
          <CarritoResumen juegos={selectedItems} />
          {selectedItems.length === 0 ? (
            <p className={styles.mensajeNoSeleccionados}> 
              No hay ningún producto seleccionado para la compra.
            </p>
          ) : (
            <Link to="/checkout" className={styles.botonSeguirComprando}>
              Continuar
            </Link>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Carrito;
