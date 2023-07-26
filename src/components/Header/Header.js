import React, { useState } from 'react';
import './Header.css';
import 'hamburgers/dist/hamburgers.min.css';
import { Link } from 'react-router-dom';


function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={`header-container ${menuOpen ? 'menu-open' : ''}`}>
            <div className='hamburger-menu'>
                <button
                    className={`hamburger hamburger--collapse ${menuOpen ? 'is-active' : ''}`}
                    type="button"
                    onClick={handleMenuToggle}
                >
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </div>
            <a className="landing-name" href="/">
                <h1>FISSP</h1>
            </a>
            <div className={`nav-links ${menuOpen ? 'show' : ''}`}>

                <Link to="/about">About</Link>
                <Link to="#join-section">Join</Link>
                <Link to="/support">Support</Link>
                <Link to="/careers">Contact</Link>
            </div>
            <div className='action-links'>
                <div className='contact-link'>
                    <Link to='#join-section'>Contact Us</Link>
                </div>
                <div className='donate-link'>
                    <Link to='/support'>Donate to FISSP</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
