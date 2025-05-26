// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useLogin from '../hooks/useLogin';
// Importa tus demás componentes
import Login            from '../pages/guest/LoginForm';
import Inicio           from '../pages/guest/Inicio';
import Register         from '../pages/guest/RegisterForm';
import Perfil           from '../pages/client/Perfil';
import Carrito          from '../pages/guest/Carrito';
import Nosotros         from '../pages/guest/Nosotros';
import CambioContra     from '../pages/cliente-admin/CambioContra';
import RecuperarContra  from '../pages/cliente-admin/RecuperarContra';
import Dashboard        from '../pages/admin/Dashboard';
import ListaProducto    from '../pages/admin/ListaProducto';
import AgregarProducto  from '../pages/admin/AgregarProducto';
import DetalleProducto  from '../pages/guest/DetalleProducto';
import AdminForm        from '../pages/client/AdminForm';
import AgregarCategoria from '../pages/admin/AgregarCategorias';
import ListaCategoria   from '../pages/admin/ListaCategorias';
import Cambio           from '../pages/client/Cambio';
import Checkout         from '../pages/client/Checkout';
import MetodoDePago     from '../pages/client/MetodoDePago';
import OrdenCompletada  from '../pages/client/OrdenCompletada';
import ListaUsuarios    from '../pages/admin/ListaUsuarios';
import DetalleUsuario   from '../pages/admin/DetalleUsuario';
import ListaOrdenes     from '../pages/admin/ListaOrdenes';
import DetalleOrden     from '../pages/admin/DetalleOrden';
import Categoria        from '../pages/guest/Categorias';

function App() {
  const { currentUser, login, logout } = useLogin();
  return (
    <Router>
      <Routes>
        {/* Invitado */}
        <Route path="/"                   element={<Inicio />} />
        <Route path="/login"              element={<Login />} />
        <Route path="/register"           element={<Register />} />
        <Route path="/nosotros"           element={<Nosotros />} />
        <Route path="/categoria"          element={<Categoria />} />      
        <Route path="/carrito"            element={<Carrito />} />
        <Route path="/detalleproducto"    element={<DetalleProducto />} />
        {/* Administrador y Cliente */}
        <Route path="/cambiocontra"       element={<CambioContra />} />
        <Route path="/recuperarcontra"    element={<RecuperarContra />} />
        <Route path="/cambio"             element={<Cambio handleLogin={login} />} />
        {/* Administrador */}
        <Route path="/dashboard"          element={<Dashboard />} />
        <Route path="/listaproducto"      element={<ListaProducto />} />
        <Route path="/listacategoria"     element={<ListaCategoria />} />
        <Route path="/listaordenes"       element={<ListaOrdenes />} />
        <Route path="/listausuarios"      element={<ListaUsuarios />} />
        <Route path="/agregarproducto"    element={<AgregarProducto />} />
        <Route path="/agregarcategoria"   element={<AgregarCategoria />} />
        {/* Cliente Logeado */}
        <Route path="/perfil"             element={<Perfil />} />
        <Route path="/adminf"             element={<AdminForm />} />
        <Route path="/checkout"           element={<Checkout />} />
        <Route path="/metododepago"       element={<MetodoDePago />} />  
        <Route path="/ordencompletada"    element={<OrdenCompletada />} />
        <Route path="/admin/usuarios/:id" element={<DetalleUsuario />} />
        <Route path="/detalleorden/:id"   element={<DetalleOrden />} />       
      </Routes>
    </Router>
  );
}
export default App;
