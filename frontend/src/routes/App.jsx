import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login  from '../pages/client/LoginForm';
import Inicio from '../pages/client/inicio';
import Register from '../pages/client/RegisterForm';
import Perfil from '../pages/client/Perfil';
import Carrito from '../pages/client/carrito';
import Nosotros from '../pages/client/Nosotros';
import CambioContra from '../pages/cliente-admin/CambioContra';
import RecuperarContra from '../pages/cliente-admin/RecuperarContra';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"                 element={<Inicio  />}/>
        <Route path="/login"            element={<Login   />}/>
        <Route path="/register"         element={<Register/>}/>
        <Route path="/perfil"           element={<Perfil  />}/>
        <Route path="/inicio"           element={<Inicio  />}/>
        <Route path="/nosotros"         element={<Nosotros/>}/>
        <Route path="/carrito"          element={<Carrito  />}/>
        <Route path="/cambiocontra"    element={<CambioContra  />}/>
        <Route path="/recuperarcontra" element={<RecuperarContra  />}/>
        
      </Routes>
    </Router>
  );
}

export default App;