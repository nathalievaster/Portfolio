import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import GymTrackerProject from './pages/GymTrackerProject'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/gymtracker" element={<GymTrackerProject />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)