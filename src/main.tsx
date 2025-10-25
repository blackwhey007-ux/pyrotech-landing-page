import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { suppressConsoleWarnings } from './utils/consoleSuppression'

// Suppress common development warnings
suppressConsoleWarnings()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
