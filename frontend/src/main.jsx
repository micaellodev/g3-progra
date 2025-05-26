import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import { CategoriasProvider } from './hooks/CategoriasContext.jsx';
import './styles/index.module.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CategoriasProvider>
      <App />
    </CategoriasProvider>
  </StrictMode>,
)
