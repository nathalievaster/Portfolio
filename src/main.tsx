import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import About from './components/About'
import MyWork from './components/MyWork'
import Contact from './components/Contact'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <About />
    <MyWork />
    <Contact />
    <Navbar />
  </React.StrictMode>
)