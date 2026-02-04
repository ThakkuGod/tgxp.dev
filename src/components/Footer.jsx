import React, { useState } from 'react';
import './Footer.css';
import ContactModal from './ContactModal';

const Footer = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const handleDiscordClick = (e) => {
        e.preventDefault();
        setIsContactModalOpen(true);
    };

    return (
        <>
            <footer id="contact" className="footer">
                <div className="container footer-content reveal">
                    <div className="footer-main">
                        <div className="logo footer-logo">
                            <img src="/user_logo.png" alt="Logo" className="nav-logo-img" />
                            <span className="gradient-text">TGXP</span>.DEV
                        </div>
                        <p>Let's build something extraordinary together.</p>
                        <div className="social-links">
                            <a href="https://github.com/ThakkuGod?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>

                            <a href="#" onClick={handleDiscordClick}>Discord</a>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2026 TGXP.DEV - Handcrafted with Passion</p>
                    </div>
                </div>
            </footer>

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </>
    );
};

export default Footer;
