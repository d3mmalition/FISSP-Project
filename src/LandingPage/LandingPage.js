import React, { useEffect } from 'react';
import './LandingPage.css';
import './InfoSection.css'
import Hero from './Hero';
import ImageCarousel from './ImageCarousel';
import InfoSection from './InfoSection'
import Mission from './Mission'



function LandingPage() {
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
                <div className="waves"></div>
                <div className="events-container">
                    <h2>What is the FISSP?</h2>
                    <InfoSection />
                </div>
                <div className='section' id="join-section">
                    <div className="contact-container">
                        {/* <h2>Contact Us</h2> */}
                        <Mission />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
