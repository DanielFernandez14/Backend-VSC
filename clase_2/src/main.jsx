import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Personajes } from './components/Personajes/Personajes.jsx'
import { Products } from './components/Products/Products.jsx';
import './components/Products/Products.css'
import './components/Personajes/Personajes.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Products />
  </StrictMode>,
)
