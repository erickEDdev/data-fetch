import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppTwo from './AppTwo.jsx'
import AppTree from './components/AppTree.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <AppTwo /> */}
    <AppTree />
  </StrictMode>,
)
