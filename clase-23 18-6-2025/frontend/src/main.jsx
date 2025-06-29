import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { Home } from './views/Home.jsx'
// import { Dashboard } from './views/Dashboard.jsx'
// import { Login } from './views/Login.jsx'
// import { Register } from './views/Register.jsx'
// import { Layout } from './components/Layout.jsx'
import { RouterApp } from './router/RouterApp.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterApp />
  </StrictMode>,
)
