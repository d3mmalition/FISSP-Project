import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function CarouselComponent() {
    return (
        <Carousel showArrows={true} showThumbs={false}>
            <div>
                <img src="item1.jpg" alt="Item 1" />
                <p className="legend">Item 1</p>
            </div>
            <div>
                <img src="item2.jpg" alt="Item 2" />
                <p className="legend">Item 2</p>
            </div>
            <div>
                <img src="item3.jpg" alt="Item 3" />
                <p className="legend">Item 3</p>
            </div>
            <div>
                <img src="item4.jpg" alt="Item 4" />
                <p className="legend">Item 4</p>
            </div>
            <div>
                <img src="item5.jpg" alt="Item 5" />
                <p className="legend">Item 5</p>
            </div>
            <div>
                <img src="item6.jpg" alt="Item 6" />
                <p className="legend">Item 6</p>
            </div>
        </Carousel>
    );
}

export default CarouselComponent;
