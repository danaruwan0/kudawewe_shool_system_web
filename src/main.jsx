import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MiniDrawer from './app/MiniDrawer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MiniDrawer />
  </StrictMode>
)