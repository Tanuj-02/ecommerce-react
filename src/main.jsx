import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ItemsContext from './context/ItemsContext.jsx'
import App from './App.jsx'
import Itemsdata from './context/Itemsdata.jsx'

createRoot(document.getElementById('root')).render(
  <Itemsdata>
    <App />
  </Itemsdata>,
)
