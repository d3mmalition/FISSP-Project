import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Homepage from './components/Homepage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

// Import other components as needed

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* Add more routes for different pages */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
