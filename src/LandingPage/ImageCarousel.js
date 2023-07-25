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
import image11 from "./pictures/image11.jpg";
import image12 from "./pictures/image12.jpg";
import image13 from "./pictures/image13.jpg";
import image14 from "./pictures/image14.jpg";
import image15 from "./pictures/image15.jpg";
import image16 from "./pictures/image16.jpg";
import image17 from "./pictures/image17.jpg";

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
        image11,
        image12,
        image13,
        image14,
        image15,
        image16,
        image17,
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
