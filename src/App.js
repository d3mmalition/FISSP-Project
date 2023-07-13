import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Hero from './components/Hero';
import Header from './components/Header/Header';
// Import other components as needed

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<Hero />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* Add more routes for different pages */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
