import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="handshake">
                    <path d="M423.544,96.685C403.461,76.6,373.334,69.692,344.92,78.651L256,106.692,167.08,78.651c-28.415-8.961-58.541-2.05-78.624,18.034L29.7,155.436C-.723,185.863.833,236.979,33.174,269.381c35.506,35.574,73.8,73.931,105.725,105.851a33.119,33.119,0,0,0,8.409,31.733l.428.429a32.652,32.652,0,0,0,23.213,9.485,35.006,35.006,0,0,0,8.588-1.08l3.4,3.383a36.5,36.5,0,0,0,18.4,9.937,32.471,32.471,0,0,0,21.7,8.091q.608,0,1.219-.021a36.216,36.216,0,0,0,24.384-10.744L256,419.077l7.368,7.368a36.216,36.216,0,0,0,24.384,10.744c.408.014.813.021,1.218.021a32.5,32.5,0,0,0,21.657-8.06,36.891,36.891,0,0,0,18.439-9.968l3.416-3.4a33.241,33.241,0,0,0,31.785-8.388l.421-.423a33.226,33.226,0,0,0,8.4-31.725c31.632-31.623,69.441-69.495,105.738-105.862,32.341-32.4,33.9-83.518,3.47-113.945Zm-264.491,299.4-.428-.428a16.017,16.017,0,0,1-2.445-3.156l6.041,6.033A15.957,15.957,0,0,1,159.053,396.083Zm78.265,19.049a21.474,21.474,0,0,1-3.286,2.682,32.075,32.075,0,0,0,6.767-13.938l3.888,3.888Zm116.054-19.474-.422.422c-6.856,6.857-18.59,6.279-26.158-1.288L203.931,271.931a8,8,0,1,0-11.313,11.313L299.539,390.165l.054.056a20.268,20.268,0,0,1,6.067,13.62A16.471,16.471,0,0,1,288.3,421.2a20.263,20.263,0,0,1-13.62-6.066l-13.025-13.024h0l-93.95-93.95a8,8,0,1,0-11.314,11.314l63.018,63.018.043.043a20.267,20.267,0,0,1,6.066,13.62,16.672,16.672,0,0,1-4.778,12.537l-.4.4c-6.84,6.838-18.556,6.278-26.118-1.248q-3.308-3.293-6.931-6.9l-.041-.041c-9.428-9.395-20.355-20.306-32.28-32.225a7.947,7.947,0,0,0-2.7-2.7c-32.325-32.314-71.5-71.554-107.773-107.9-26.114-26.163-27.675-67.134-3.48-91.329L99.769,108c15.848-15.847,39.795-21.246,62.5-14.087L229.4,115.08l-37.5,11.826a8,8,0,0,0-5.56,8.371l.915,9.819a44.663,44.663,0,0,0,15.294,32.009,45.373,45.373,0,0,0,34.578,10.767l5.33-.523,7.89,7.9h0l0,0L360.181,305.239c7.556,7.566,8.129,19.3,1.277,26.147l-.042.043c-6.693,6.649-17.991,6.25-25.551-.779C323.4,318.184,309.809,304.6,296.9,291.7c-28.942-28.931-53.938-53.916-56.353-56.348a8,8,0,0,0-11.354,11.273c2.437,2.455,27.442,27.449,56.4,56.391l38.064,38.049q.158.178.329.349c.246.247.5.489.747.728,10.2,10.2,19.651,19.646,27.363,27.358C359.656,377.067,360.231,388.8,353.372,395.658ZM467.5,258.078c-34.924,34.991-71.256,71.384-102.127,102.252-.626-.73-1.276-1.448-1.968-2.14-2.13-2.131-4.393-4.395-6.768-6.769a32.127,32.127,0,0,0,16.129-8.717l.06-.059c13.028-13.092,12.441-34.926-1.326-48.712l-104.2-104.342,7.2-7.215a8,8,0,0,0-6.441-13.615l-32.5,3.187a29.522,29.522,0,0,1-22.522-6.92,28.831,28.831,0,0,1-9.813-20.817c0-.135-.015-.271-.027-.405l-.334-3.583,55.392-17.468.028-.008,91.443-28.836c22.7-7.161,46.65-1.762,62.5,14.087l58.751,58.751C495.177,190.944,493.616,231.915,467.5,258.078Z"></path>
                </svg>
                <h1>Friends of Ichetucknee Springs State Park</h1>
                <div className="header-right">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>

                </div>
            </div>
            <nav>
                <ul className="nav-links">
                    <li className="nav-link">
                        <a href="/">About</a>
                    </li>
                    <li className="nav-link">
                        <a href="/about">Membership</a>
                    </li>
                    <li className="nav-link">
                        <a href="/about">Navigation</a>
                    </li>
                    {/* Add more navigation links as needed */}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
