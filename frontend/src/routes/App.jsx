import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login  from '../pages/client/Login';
import Inicio from '../pages/client/Inicio'; // Asegúrate de que sea exactamente como el nombre del archivo

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"      element={<Inicio />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;