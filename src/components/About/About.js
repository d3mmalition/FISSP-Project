import React from 'react';
import './About.css';

function About() {

    return (
        <div className="about-container">
            <h2>About Ichetucknee State Park</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam neque eu ligula elementum, sit amet malesuada odio posuere. Sed scelerisque tempus nisi, vitae posuere odio consectetur et.</p>

            <h2>About Friends of Ichetucknee State Park (FISSP)</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula massa quis tempor feugiat. Sed pharetra, justo et aliquet posuere, augue lacus auctor purus, a tempus ligula lorem vel nunc.</p>

            <h2>Board Members</h2>
            <div className="board-members">
                <div className="member">
                    <img src="member1.jpg" alt="Board Member 1" />
                    <h3>John Doe</h3>
                    <p>Position: President</p>
                </div>
                <div className="member">
                    <img src="member2.jpg" alt="Board Member 2" />
                    <h3>Jane Smith</h3>
                    <p>Position: Vice President</p>
                </div>
                {/* Add more board members  */}
            </div>

            <h2>Join Friends of Ichetucknee State Park (FISSP)</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet felis id pharetra fringilla. Nulla scelerisque eros mi, at laoreet velit iaculis non. Vestibulum imperdiet enim ac nisi semper efficitur.</p>
        </div>
    );
}

export default About;
