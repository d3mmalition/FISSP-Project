import React, { useEffect, useState } from 'react';
import './Support.css';
import CarouselComponent from './Carousel';
import axios from 'axios';

function Support() {
    const [supportData, setSupportData] = useState({});

    useEffect(() => {
        // Make the API request when the component mounts
        axios.get('/api/support')
            .then(response => {
                setSupportData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="support">
            <h1>Support Us</h1>
            <CarouselComponent />
        </div>
    );
}

export default Support;
