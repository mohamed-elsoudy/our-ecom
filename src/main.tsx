import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// routing
import AppRouter from '@routes/AppRouter'
// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
)
