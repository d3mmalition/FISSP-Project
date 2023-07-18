import React from 'react';
import ContactForm from './ContactForm';
import Calendar from 'react-calendar';
import './LandingPage.css';
import Hero from './Hero';
import ImageCarousel from './ImageCarousel';

function LandingPage() {
    const currentDate = new Date();

    return (
        <div className="landingPage">
            <Hero />
            <hr className="section-divider" />
            <div className="image-carousel">
                <ImageCarousel />
                <hr className="section-divider" />

                <div className="section">
                    <h2>Events</h2>
                    <Calendar value={currentDate} />
                    {/* Add upcoming events or event listings */}
                </div>
                <section id="join-section">
                    <div className="section">
                        <h2>Contact Us</h2>
                        <ContactForm />
                    </div>
                </section>
            </div>
        </div>
    );
}
export default LandingPage;
