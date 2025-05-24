// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa tus demás componentes
import Login from '../pages/client/LoginForm';
import Inicio from '../pages/client/inicio'; // Asegúrate de que esta ruta sea correcta
import Register from '../pages/client/RegisterForm';
import Perfil from '../pages/client/Perfil';
import Carrito from '../pages/client/carrito';
import Nosotros from '../pages/client/Nosotros';
import CambioContra from '../pages/cliente-admin/CambioContra';
import RecuperarContra from '../pages/cliente-admin/RecuperarContra';
import Dashboard from '../pages/admin/Dashboard';
import ListaProducto from '../pages/admin/ListaProducto';
import AgregarProducto from '../pages/admin/AgregarProducto';
<<<<<<< HEAD
import DetalleProducto from '../pages/admin/DetalleProducto';
=======
import AdminForm from '../pages/client/AdminForm';

// ¡ELIMINA O COMENTA ESTA LÍNEA DE IMPORTACIÓN!
// import TopBar from './components/TopBar'; // <-- ¡Esta es la línea que está causando el error!
>>>>>>> b18c9d8 (commit Marcelo)

DetalleProducto
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  // 'busqueda' y 'handleSearch' ya no son necesarios en App.jsx
  // si TopBar solo se usa en Inicio.jsx
  // const [busqueda, setBusqueda] = useState('');
  // const handleSearch = (e) => { /* ... */ };

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

  // Puedes mantener handleLogout si lo usas en algún otro lugar
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  };

  return (
    <Router>
<<<<<<< HEAD
      <Routes>
        <Route path="/"                element={<Inicio   />}/>
        <Route path="/login"           element={<Login    />}/>
        <Route path="/register"        element={<Register />}/>
        <Route path="/perfil"          element={<Perfil   />}/>
        <Route path="/inicio"          element={<Inicio   />}/>
        <Route path="/nosotros"        element={<Nosotros />}/>
        <Route path="/carrito"         element={<Carrito  />}/>
        <Route path="/cambiocontra"    element={<CambioContra/>}/>
        <Route path="/recuperarcontra" element={<RecuperarContra/>}/>
        <Route path="/dashboard"       element={<Dashboard/>}/>
        <Route path="/listaproducto"       element={<ListaProducto/>}/>
        <Route path="/agregarproducto"       element={<AgregarProducto/>}/>
        <Route path="/detalleproducto"       element={<DetalleProducto/>}/>
=======
      {/* ¡ASEGÚRATE DE QUE NO HAYA UN <TopBar /> AQUÍ TAMPOCO! */}

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/perfil" element={<Perfil currentUser={currentUser} />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/cambiocontra" element={<CambioContra />} />
        <Route path="/recuperarcontra" element={<RecuperarContra />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/listaproducto" element={<ListaProducto />} />
        <Route path="/agregarproducto" element={<AgregarProducto />} />
        <Route path="/adminf" element={<AdminForm />} />
>>>>>>> b18c9d8 (commit Marcelo)
      </Routes>
    </Router>
  );
}

export default App;