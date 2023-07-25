import React from "react";
import "./LandingPage.css"; // Import the shared CSS file

import image1 from "./pictures/image1.jpg";
import image2 from "./pictures/image2.jpg";
import image3 from "./pictures/image3.jpg";
import image4 from "./pictures/image4.jpg";
import image5 from "./pictures/image5.jpg";
import image6 from "./pictures/image6.jpg";
import image7 from "./pictures/image7.jpg";
import image8 from "./pictures/image8.jpg";
import image9 from "./pictures/image9.jpg";
import image10 from "./pictures/image10.jpg";

function ImageCarousel() {
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
    ];

    // Duplicate the images to create a continuous loop
    const imagesLoop = [...images, ...images, ...images];

    return (
        <div className="carousel">
            {imagesLoop.map((image, index) => (
                <div key={index} className="carousel-container">
                    <img src={image} alt={`Description ${index + 1}`} />
                </div>
            ))}
        </div>
    );
}

export default ImageCarousel;
