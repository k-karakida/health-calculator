import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import BMICalculator from './components/BMICalculator'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BMICalculator />
  </StrictMode>,
)
