// src/components/Footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';  // Puedes personalizar el estilo aquí

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/carrito">Carrito</Link></li>
            <li><Link to="/perfil">Perfil</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Cuenta</h4>
          <ul>
            <li><Link to="/login">Iniciar Sesión</Link></li>
            <li><Link to="/register">Registrarse</Link></li>
            <li><Link to="/cambio">Cambiar Datos</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Ayuda</h4>
          <ul>
            <li><Link to="/cambiocontra">Cambiar Contraseña</Link></li>
            <li><Link to="/recuperarcontra">Recuperar Contraseña</Link></li>
            <li><Link to="/nosotros#contacto">Contacto</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-copy">
        <p>© 2025 PuntoGG. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
