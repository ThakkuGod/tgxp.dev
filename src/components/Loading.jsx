import React from 'react';
import './Loading.css';

const Loading = () => {
    return (
        <div className="loading-screen">
            <div className="loading-content">
                <div className="logo-container">
                    <img src="/user_logo.png" alt="TGXP Logo" className="loading-logo" />
                    <h1 className="loading-title">
                        <span className="gradient-text">TGXP</span>.DEV
                    </h1>
                </div>

                <div className="loading-spinner">
                    <div className="spinner-ring"></div>
                    <div className="spinner-ring"></div>
                    <div className="spinner-ring"></div>
                </div>

                <p className="loading-text">Loading Experience...</p>
            </div>

            {/* Animated Grid Background */}
            <div className="grid-background">
                <div className="grid-line"></div>
                <div className="grid-line"></div>
                <div className="grid-line"></div>
                <div className="grid-line"></div>
            </div>
        </div>
    );
};

export default Loading;
