import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ImageCarousel() {
    return (
        <div className="carousel">
            <Carousel showThumbs={false} showStatus={false} showIndicators={false} autoPlay infiniteLoop interval={3000}>
                <div>
                    <img src="path_to_image1.jpg" alt="Description 1" />
                </div>
                <div>
                    <img src="path_to_image2.jpg" alt="Description 2" />
                </div>
                {/* Add more images as needed */}
            </Carousel>
        </div>
    );
}

export default ImageCarousel;
