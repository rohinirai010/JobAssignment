import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css'
import Home from './pages/Home'
import About from './pages/About'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
