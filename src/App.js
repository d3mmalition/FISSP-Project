import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Import global app styles first
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Support from './components/Support/Support';
import LandingPage from './LandingPage/LandingPage';




function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />

            {/* Add more routes for different pages */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
