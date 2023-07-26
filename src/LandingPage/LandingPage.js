import React, { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import Calendar from 'react-calendar';
import './LandingPage.css';
import Hero from './Hero';
import ImageCarousel from './ImageCarousel';
import axios from 'axios';


function LandingPage() {
    const currentDate = new Date();
    const [landingData, setLandingData] = useState({});

    useEffect(() => {
        // Make the API request when the component mounts
        axios.get('/api/landing')
            .then(response => {
                setLandingData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
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
                <section id="join-section">
                    <div className="contact-container">
                        <h2>Contact Us</h2>
                        <ContactForm />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default LandingPage;
