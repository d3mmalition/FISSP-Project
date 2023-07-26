import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

import imgcover1 from "./pictures/imgcover1.jpg";
import imgcover2 from "./pictures/imgcover2.jpg";
import imgcover3 from "./pictures/imgcover3.jpg";

function InfoSection() {
    return (
        <div className="info-section">
            <div className="info-container">
                <Link to="/about">
                    <div className="info-image" id="info-image-1">
                        <div className="imgcover">
                            <img src={imgcover1} alt="Info" />
                        </div>
                    </div>
                </Link>
                <div className="info-content" id="info-content-1">
                    <h2>Info Section Title 1</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        lobortis tellus in velit scelerisque feugiat. Fusce ac massa sit
                        amet purus rhoncus convallis ut vel velit.
                    </p>
                </div>
            </div>

            <div className="info-container info-reverse">
                <Link to="/join">
                    <div className="info-image" id="info-image-2">
                        <div className="imgcover">
                            <img src={imgcover3} alt="Info" />
                        </div>
                    </div>
                </Link>
                <div className="info-content" id="info-content-2">
                    <h2>Info Section Title 2</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        lobortis tellus in velit scelerisque feugiat. Fusce ac massa sit
                        amet purus rhoncus convallis ut vel velit.
                    </p>
                </div>
            </div>

            <div className="info-container">
                <Link to="/support">
                    <div className="info-image" id="info-image-3">
                        <div className="imgcover">
                            <img src={imgcover2} alt="Info" />
                        </div>
                    </div>
                </Link>
                <div className="info-content" id="info-content-3">
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
