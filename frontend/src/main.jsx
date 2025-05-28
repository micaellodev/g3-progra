import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'

// Contexts
import { CategoriasProvider } from './hooks/CategoriasContext.jsx';
import { DireccionProvider } from './hooks/DireccionContext.jsx';
import { CartProvider } from './hooks/CartContext.jsx';
import { LoginProvider } from './hooks/LoginContext.jsx'; // ⚠️ Asegúrate de importar esto
import './styles/index.module.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CategoriasProvider>
      <CartProvider>
        <DireccionProvider>
          <LoginProvider>   
            <App />
          </LoginProvider>
        </DireccionProvider>
      </CartProvider>
    </CategoriasProvider>
  </StrictMode>
)
