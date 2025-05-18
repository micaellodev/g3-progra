import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Inicio from './Inicio';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/login">Iniciar Sesión</Link> |
        <Link to="/register">Registrarse</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/inicio" element={<Inicio />} />
      </Routes>
    </Router>
  );
}

export default App;
