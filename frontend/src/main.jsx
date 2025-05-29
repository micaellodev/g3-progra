import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './routes/App.jsx';

// Contextos
import { CategoriasProvider } from './hooks/CategoriasContext.jsx';
import { DireccionProvider } from './hooks/DireccionContext.jsx';
import { CartProvider } from './hooks/CartContext.jsx';
import { LoginProvider } from './hooks/LoginContext.jsx'; // ← ESTE ES EL CLAVE
import './styles/index.module.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginProvider> {/* Este debe envolver todo */}
      <CategoriasProvider>
        <CartProvider>
          <DireccionProvider>
            <App />
          </DireccionProvider>
        </CartProvider>
      </CategoriasProvider>
    </LoginProvider>
  </StrictMode>
);
