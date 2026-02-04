import React from 'react';
import './NotFound.css';

const NotFound = () => {
    const handleBackHome = (e) => {
        e.preventDefault();
        // Clear hash and reload to home
        window.location.href = window.location.pathname;
    };

    const handleViewProjects = (e) => {
        e.preventDefault();
        // Go to home first, then scroll to projects
        window.location.hash = '';
        setTimeout(() => {
            window.location.hash = 'projects';
        }, 100);
    };

    return (
        <div className="notfound-container">
            <div className="notfound-content">
                <div className="error-code">
                    <span className="gradient-text">4</span>
                    <div className="glitch-wrapper">
                        <div className="glitch" data-text="0">0</div>
                    </div>
                    <span className="gradient-text">4</span>
                </div>

                <h1 className="error-title">Page Not Found</h1>
                <p className="error-description">
                    Oops! The page you're looking for seems to have vanished into the digital void.
                </p>

                <div className="error-actions">
                    <button onClick={handleBackHome} className="primary-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        Back to Home
                    </button>
                    <button onClick={handleViewProjects} className="secondary-btn">
                        View Projects
                    </button>
                </div>

                {/* Floating Logo Background */}
                <div className="floating-logos">
                    <img src="/user_logo.png" alt="" className="floating-logo logo-1" />
                    <img src="/user_logo.png" alt="" className="floating-logo logo-2" />
                    <img src="/user_logo.png" alt="" className="floating-logo logo-3" />
                    <img src="/user_logo.png" alt="" className="floating-logo logo-4" />
                    <img src="/user_logo.png" alt="" className="floating-logo logo-5" />
                </div>

                {/* Animated Background Elements */}
                <div className="floating-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
