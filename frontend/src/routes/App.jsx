// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa tus demás componentes
import Login from '../pages/client/LoginForm';
import Inicio from '../pages/client/inicio'; // Asegúrate de que esta ruta sea correcta
import Register from '../pages/client/RegisterForm';
import Perfil from '../pages/client/Perfil';
import Carrito from '../pages/client/Carrito';
import Nosotros from '../pages/client/Nosotros';
import CambioContra from '../pages/cliente-admin/CambioContra';
import RecuperarContra from '../pages/cliente-admin/RecuperarContra';
import Dashboard from '../pages/admin/Dashboard';
import ListaProducto from '../pages/admin/ListaProducto';
import AgregarProducto from '../pages/admin/AgregarProducto';
import DetalleProducto from '../pages/admin/DetalleProducto';
import AdminForm from '../pages/client/AdminForm';
import AgregarCategoria from '../pages/admin/AgregarCategorias';
import ListaCategoria from '../pages/admin/ListaCategorias';
import Cambio from '../pages/client/Cambio';
import Checkout from '../pages/client/Checkout';
import MetodoDePago from '../pages/client/MetodoDePago';
import OrdenCompletada from '../pages/client/OrdenCompletada';
import Resultados from '../components/Resultados/Resultados';
import ListaUsuarios from '../pages/admin/ListaUsuarios';
import DetalleUsuario from '../pages/admin/DetalleUsuario';
import ListaOrdenes from '../pages/admin/ListaOrdenes';
import DetalleOrden from '../pages/admin/DetalleOrden';


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Error al cargar el usuario de localStorage:", error);
      localStorage.removeItem('currentUser');
    }
  }, []);
  
  const handleLogin = (userData) => {
    setCurrentUser(userData);
    localStorage.setItem('currentUser', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  };

  return (
    <Router>
      <Routes>
        <Route path="/"                element={<Inicio   />}/>
        <Route path="/login"           element={<Login    />}/>
        <Route path="/register"        element={<Register />}/>
        <Route path="/perfil"          element={<Perfil currentUser={currentUser} />} />
        <Route path="/inicio"          element={<Inicio   />}/>
        <Route path="/nosotros"        element={<Nosotros />}/>
        <Route path="/carrito"         element={<Carrito  />}/>
        <Route path="/cambiocontra"    element={<CambioContra/>}/>
        <Route path="/recuperarcontra" element={<RecuperarContra/>}/>
        <Route path="/dashboard"       element={<Dashboard/>}/>
        <Route path="/listaproducto"   element={<ListaProducto/>}/>
        <Route path="/agregarproducto" element={<AgregarProducto/>}/>
        <Route path="/detalleproducto" element={<DetalleProducto/>}/>
        <Route path="/adminf"          element={<AdminForm />} />
        <Route path="/agregarcategoria"element={<AgregarCategoria />}/>
        <Route path="/listacategoria"  element={<ListaCategoria />} />
        <Route path="/cambio"          element={<Cambio handleLogin={handleLogin} />} />
        <Route path="/checkout"        element={<Checkout />} />
        <Route path="/metododepago"    element={<MetodoDePago />} />  
        <Route path="/ordencompletada" element={<OrdenCompletada />} />
        <Route path="/resultados"      element={<Resultados />} />
        <Route path="/listausuarios" element={<ListaUsuarios />} />
        <Route path="/detalleusuario/:id" element={<DetalleUsuario />} />
        <Route path="/listaordenes" element={<ListaOrdenes />} />
        <Route path="/detalleorden/:id" element={<DetalleOrden />} />
      </Routes>
    </Router>
  );
}

export default App;