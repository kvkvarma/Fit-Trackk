import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MacroProvider } from './context/MacroContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MacroProvider>
    <App />
    </MacroProvider>
  </StrictMode>,
)
