import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import About from './components/About'
import MyWork from './components/MyWork'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <About />
    <MyWork />
    <Navbar />
  </React.StrictMode>
)