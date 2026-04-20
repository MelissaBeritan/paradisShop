import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ShopApp from './ShopApp.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ShopApp />
    </BrowserRouter>  
  </StrictMode>,
)
