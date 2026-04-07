import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const GraphPage = lazy(() => import('./GraphPage.jsx'))
const isGraph = window.location.pathname === '/graph'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isGraph
      ? <Suspense><GraphPage /></Suspense>
      : <App />}
  </StrictMode>,
)
