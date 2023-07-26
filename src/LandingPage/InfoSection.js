import React from "react";
import './LandingPage.css';

import infoimage1 from './pictures/infoimage1.jpg'
import infoimage2 from './pictures/infoimage2.jpg'
import infoimage3 from './pictures/infoimage3.jpg'



function InfoSection() {
    return (
        <div className="info-section">
            <div className="info-container">
                <div className="info-image">
                    <img src={infoimage1} alt="Info" />
                </div>
                <div className="info-content">
                    <h2>Info Section Title 1</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        lobortis tellus in velit scelerisque feugiat. Fusce ac massa sit
                        amet purus rhoncus convallis ut vel velit.
                    </p>
                </div>
            </div>

            <div className="info-container info-reverse">
                <div className="info-image">
                    <img src={infoimage3} alt="Info" />
                </div>
                <div className="info-content">
                    <h2>Info Section Title 2</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        lobortis tellus in velit scelerisque feugiat. Fusce ac massa sit
                        amet purus rhoncus convallis ut vel velit.
                    </p>
                </div>
            </div>

            <div className="info-container">
                <div className="info-image">
                    <img src={infoimage2} alt="Info" />
                </div>
                <div className="info-content">
                    <h2>Info Section Title 3</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        lobortis tellus in velit scelerisque feugiat. Fusce ac massa sit
                        amet purus rhoncus convallis ut vel velit.
                    </p>
                </div>
            </div>
        </div>

    );
}

export default InfoSection;