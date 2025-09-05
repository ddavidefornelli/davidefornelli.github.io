import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/next'

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <SpeedInsights/>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
