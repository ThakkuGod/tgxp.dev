import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container footer-content reveal">
                <div className="footer-main">
                    <div className="logo footer-logo">
                        <img src="/user_logo.png" alt="Logo" className="nav-logo-img" />
                        <span className="gradient-text">TGXP</span>.DEV
                    </div>
                    <p>Let's build something extraordinary together.</p>
                    <div className="social-links">
                        <a href="#">GitHub</a>
                        <a href="#">Twitter</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Discord</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 TGXP.DEV - Handcrafted with Passion</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
