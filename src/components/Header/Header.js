import React, { useState } from 'react';
import './Header.css';
import 'hamburgers/dist/hamburgers.min.css';

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

                <a href="/about">About</a>
                <a href="#join-section">Join</a>
                <a href="/support">Support</a>
                <a href="/careers">Contact</a>
            </div>
            <div className='action-links'>
                <div className='contact-link'>
                    <a href='#join-section'>Contact Us</a>
                </div>
                <div className='donate-link'>
                    <a href='/support'>Donate to FISSP</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
