import React from 'react';
import ContactForm from './Homepage/ContactForm';

function Homepage() {
    return (
        <div className="homepage">
            <div className="hero">
                {/* Add your hero section content here */}
                <h1>Welcome to the CSO Website</h1>
                <p>Discover the beauty of Ichetucknee Springs State Park.</p>
            </div>
            <div className="content">
                <div className="section">
                    <h2>About Us</h2>
                    {/* Add content about the CSO */}
                </div>
                <div className="section">
                    <h2>Events</h2>
                    {/* Add upcoming events or event listings */}
                </div>
                <div className="section">
                    <h2>Contact Us</h2>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default Homepage;
