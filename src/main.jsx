import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import WebRouter from "./Router.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WebRouter />
  </StrictMode>,
)
