import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Inicio from './Inicio';
import Perfil from './Perfil';
import ModUsuario from './ModUsuario';
import Carrito from './carrito'; // C mayúscula
import Nosotros from './Nosotros'; // ⬅️ Importar componente

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta por defecto: redirige al login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Rutas principales */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/inicio" element={<Inicio />} />

        {/* Nuevas rutas */}
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/modusuario" element={<ModUsuario />} />
        <Route path="/carrito" element={<Carrito />} />  {/* <-- Aquí agregas la ruta */}
        <Route path="/nosotros" element={<Nosotros />} /> {/* ⬅️ Nueva ruta */}

      </Routes>
    </Router>
  );
}

export default App;
