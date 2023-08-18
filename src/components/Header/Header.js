import React, { useState } from 'react';
import './Header.css';
import 'hamburgers/dist/hamburgers.min.css';
import { Link } from 'react-router-dom';


function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleNavLinkClick = () => {
        setMenuOpen(false);
    }

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

                <Link to="/about" onClick={handleNavLinkClick}>About</Link>
                <Link to="/membership" onClick={handleNavLinkClick}>Join</Link>
                <Link to="/support" onClick={handleNavLinkClick}>Support</Link>
                <Link to="/contact" onClick={handleNavLinkClick}>Contact</Link>
            </div>
            <div className='action-links'>
                <div className='contact-link'>
                    <Link to='/contact'>Contact Us</Link>
                </div>
                <div className='donate-link'>
                    <Link to='/support'>Donate to FISSP</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
