import React from "react";
import videoSource from "../LandingPage/hd0047.mov.crdownload";

function Hero() {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>The Friends of Ichetucknee Spring State Park</h1>
                <p>The CSO group of Ichetucknee Spring State Park</p>
                <div className="hero-links">
                    <a href="/donate">Donate to FISSP</a>
                    <a href="/join">Join the FISSP</a>
                </div>
                <div className="hero-address">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                    </svg> <p>12087 Southwest, US-27, Fort White, FL 32038</p>
                </div>
            </div>
            <div className="hero-video">
                <video
                    width="100%"
                    height="auto"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={videoSource}
                    type="video/mp4"
                ></video>
            </div>
        </div>
    );
}

export default Hero;
