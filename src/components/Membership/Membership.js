import React from 'react';
import './Membership.css'; // Import your custom CSS for styling

function Membership() {
    return (
        <div className="membership-container">
            <h1>Membership Tiers</h1>
            <div className="membership-tier">
                <h2>Individual Membership</h2>
                <h3>$15/year</h3>
                <hr></hr>
                <p><b>Individual</b> members get access to the following benefits:</p>
                <ul>
                    <li>12 Park Passes for one person</li>
                    <li>Email Newsletter</li>
                    <li>Volunteer Updates</li>
                </ul>
                <button>Join</button>
            </div>
            <div className="membership-tier">
                <h2>Family - $25/year</h2>
                <ul>
                    <li>All Individual benefits</li>
                    <li>12 Park Passes for up to 8 family members</li>
                </ul>
                <button>Join "Family" Membership</button>
            </div>
            <div className="membership-tier">
                <h2>Benefactor - $100/year</h2>
                <ul>
                    <li>All Family benefits</li>
                    <li>?</li>
                    <li>?</li>
                </ul>
                <button>Join "Benefactor Membership"</button>
            </div>
            <div className="membership-tier">
                <h2>Lifetime Member - $500</h2>
                <ul>
                    <li>?</li>
                    <li>?</li>
                    <li>?</li>
                </ul>
                <button>Join "Lifetime Membership"</button>
            </div>
        </div>
    );
}

export default Membership;
