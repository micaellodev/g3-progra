import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './routes/App.jsx';

// Estilos globales
import './index.css';

// Contextos
import { CategoriasProvider } from './hooks/CategoriasContext.jsx';
import { DireccionProvider } from './hooks/DireccionContext.jsx';
import { CartProvider } from './hooks/CartContext.jsx';
import { LoginProvider } from './hooks/LoginContext.jsx'; 
import { ProductProvider } from './hooks/ProductContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginProvider> 
      <CategoriasProvider>
        <CartProvider>
          <DireccionProvider>
            <ProductProvider>
                        <App />
            </ProductProvider>
          </DireccionProvider>
        </CartProvider>
      </CategoriasProvider>
    </LoginProvider>
  </StrictMode>
);
