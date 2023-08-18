import React from 'react';
import './Membership.css'; // Import your custom CSS for styling

function Membership() {
    return (
        <div className="membership-container">
            <h1>Membership Tiers</h1>
            <div className="membership-tier">
                <h2>Basic</h2>
                <ul>
                    <li>Access to our online community</li>
                    <li>Monthly newsletter</li>
                </ul>
                <button>Join Basic</button>
            </div>
            <div className="membership-tier">
                <h2>Premium</h2>
                <ul>
                    <li>All Basic benefits</li>
                    <li>Exclusive webinars and workshops</li>
                    <li>Early access to new content</li>
                </ul>
                <button>Join Premium</button>
            </div>
            <div className="membership-tier">
                <h2>Pro</h2>
                <ul>
                    <li>All Premium benefits</li>
                    <li>Personalized coaching sessions</li>
                    <li>Access to premium resources</li>
                </ul>
                <button>Join Pro</button>
            </div>
        </div>
    );
}

export default Membership;
