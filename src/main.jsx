import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Sectionone from './sectionone.jsx'
import Sectiontwo from './Sectiontwo.jsx'
import Sectionthree from './Sectionthree.jsx'
import Sectionfour from './Sectionfour.jsx'
import Sectionfive from './Sectionfive.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Sectionone/>
    <Sectiontwo/>
    <Sectionthree/>
    <Sectionfour/>
    <Sectionfive/>
  </StrictMode>,
)
