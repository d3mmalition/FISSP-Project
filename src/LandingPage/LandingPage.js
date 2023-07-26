import React, { useEffect } from 'react';
import ContactForm from './ContactForm';
import Calendar from 'react-calendar';
import './LandingPage.css';
import Hero from './Hero';
import ImageCarousel from './ImageCarousel';


function LandingPage() {
    const currentDate = new Date();
    useEffect(() => {
        // Check if the URL contains the hash "#join-section"
        if (window.location.hash === '#join-section') {
            // Find the "join-section" element by its id
            const joinSectionElement = document.getElementById('join-section');
            if (joinSectionElement) {
                // Scroll to the "join-section" element
                joinSectionElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <div className="landingPage">
            <Hero />
            <div className="divider"></div>
            <div className="image-carousel">
                <ImageCarousel />
                <div className="waves"></div> {/* Add the Waves Content Divider here */}
                <div className="events-container">
                    <h2>Events</h2>
                    <Calendar value={currentDate} />
                    {/* Add upcoming events or event listings */}
                </div>
                <div className='section' id="join-section">
                    <div className="contact-container">
                        <h2>Contact Us</h2>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
