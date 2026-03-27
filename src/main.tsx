import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import About from './components/About'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <About />
    <Navbar />
  </React.StrictMode>
)