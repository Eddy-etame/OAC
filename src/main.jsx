import React from 'react'
import ReactDOM from 'react-dom/client'
import OxfordAcademicComplex from './components/OxfordAcademicComplex.jsx'
import { Analytics } from '@vercel/analytics/react'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <OxfordAcademicComplex />
    <Analytics />
  </React.StrictMode>,
)
