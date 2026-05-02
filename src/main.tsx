import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import GymTrackerProject from './pages/GymTrackerProject'
import TravelBuddyProject from './pages/TravelbuddyProject'
import Navbar from './components/Navbar'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/gymtracker" element={<GymTrackerProject />} />
        <Route path="/projects/travelbuddy" element={<TravelBuddyProject />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)