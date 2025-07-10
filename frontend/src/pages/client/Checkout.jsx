import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CarritoItems from '../../components/Carrito/CarritoItems';
import CarritoResumen from '../../components/Carrito/CarritoResumen';
import DireccionResumen from '../../components/Direccion/DirecciónResumen';
import TopBar from '../../components/TopBar/TopBar';
import Footer from '../../components/Footer/Footer';
import styles from '../../styles/Carrito.module.css';
import { CartContext } from '../../hooks/CartContext';
import { getDireccionUsuario, updateDireccionUsuario } from '../../services/usarioServices';
import { useLogin } from '../../hooks/LoginContext';

// Formulario simple para agregar/editar dirección
const FormularioDireccion = ({ direccion = {}, onSave }) => {
  const [form, setForm] = useState({
    nombre: direccion.nombre || '',
    apellido: direccion.apellido || '',
    departamento: direccion.departamento || '',
    ciudad: direccion.ciudad || '',
    direccion: direccion.direccion || '',
    codigoPostal: direccion.codigoPostal || '',
    telefono: direccion.telefono || ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" required />
      <input name="apellido" value={form.apellido} onChange={handleChange} placeholder="Apellido" required />
      <input name="departamento" value={form.departamento} onChange={handleChange} placeholder="Departamento" required />
      <input name="ciudad" value={form.ciudad} onChange={handleChange} placeholder="Ciudad" required />
      <input name="direccion" value={form.direccion} onChange={handleChange} placeholder="Dirección" required />
      <input name="codigoPostal" value={form.codigoPostal} onChange={handleChange} placeholder="Código Postal" required />
      <input name="telefono" value={form.telefono} onChange={handleChange} placeholder="Teléfono" required />
      <button type="submit">Guardar dirección</button>
    </form>
  );
};

export const Checkout = () => {
  const { cart } = React.useContext(CartContext);
  const { currentUser } = useLogin();
  const [direccion, setDireccion] = useState(null);
  const [editando, setEditando] = useState(false);
  const [mostrarBotonMetodoPago, setMostrarBotonMetodoPago] = useState(false);
  const [busqueda, setBusqueda] = useState('');
  const [selectedIds, setSelectedIds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentUser?.id_usuario) {
      getDireccionUsuario(currentUser.id_usuario)
        .then(dir => {
          setDireccion(dir);
          setMostrarBotonMetodoPago(!!dir);
          setLoading(false);
        })
        .catch(() => {
          setDireccion(null);
          setMostrarBotonMetodoPago(false);
          setLoading(false);
        });
    }
  }, [currentUser]);

  const handleGuardarDireccion = async (nuevaDireccion) => {
    if (!currentUser?.id_usuario) return;
    await updateDireccionUsuario(currentUser.id_usuario, nuevaDireccion);
    setDireccion(nuevaDireccion);
    setMostrarBotonMetodoPago(true);
    setEditando(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando:', busqueda);
  };

  const handleSelectedItemsChange = (ids) => {
    setSelectedIds(ids);
  };

  const juegosSeleccionados = cart.filter(j => selectedIds.includes(j.id));

  return (
    <>
      <TopBar handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />
      <div className={styles.carritoWrapper} style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
        <div style={{ flex: 2 }}>
          {/* Dirección: muestra resumen o formulario */}
          {loading ? (
            <p>Cargando dirección...</p>
          ) : direccion && !editando ? (
            <>
              <DireccionResumen direccion={direccion} />
              <button onClick={() => setEditando(true)}>Editar dirección</button>
            </>
          ) : (
            <FormularioDireccion direccion={direccion} onSave={handleGuardarDireccion} />
          )}
        </div>
        <div style={{ flex: 1 }}>
          <CarritoResumen juegos={juegosSeleccionados} />
          <br/>
          {/* Solo muestra el botón si hay dirección */}
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