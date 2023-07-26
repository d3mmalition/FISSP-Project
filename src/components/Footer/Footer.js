import React from 'react';
import './Footer.css';
import { Email, Facebook, Instagram } from '@material-ui/icons';

function Footer() {
    return (
        <footer className="footer">
            {/* <div className="footer-left">
                <div className="newsletter">
                    <h3>Subscribe to our Newsletter</h3>
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </div>
            </div> */}
            <div className="footer-right">
                <div className="social-icons">
                    <a href="https://www.facebook.com/profile.php?id=100057315104982">
                        <Facebook fontSize="large" />
                    </a>
                    <a href="https://www.instagram.com">
                        <Instagram fontSize="large" />
                    </a>
                    <a href="mailto:friendsofichetucknee@gmail.com">
                        <Email fontSize="large" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
