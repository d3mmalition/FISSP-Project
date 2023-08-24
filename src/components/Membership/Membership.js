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
                <h2>Family Membership</h2>
                <h3>$25/year</h3>
                <hr></hr>
                <p><b>Family</b> members get access to the following benefits:</p>
                <ul>
                    <li>All Individual benefits</li>
                    <li>12 Park Passes for up to 8 family members</li>
                </ul>
                <button>Join</button>
            </div>
            <div className="membership-tier">
                <h2>Benefactor Membership</h2>
                <h3>$100/year</h3>
                <hr></hr>
                <p><b>Benefactor</b> members get access to the following benefits:</p>
                <ul>
                    <li>All Family benefits</li>
                    <li>Additional benefits...</li>
                </ul>
                <button>Join</button>
            </div>
            <div className="membership-tier">
                <h2>Lifetime Membership</h2>
                <h3>$500 (one-time payment)</h3>
                <hr></hr>
                <p><b>Lifetime</b> members get access to the following benefits:</p>
                <ul>
                    <li>Additional benefits...</li>
                </ul>
                <button>Join</button>
            </div>
        </div>
    );
}

export default Membership;
