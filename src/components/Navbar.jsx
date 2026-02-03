import React, { useState, useEffect } from 'react';
import './Navbar.css';
<<<<<<< HEAD
import ContactModal from './ContactModal';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
=======

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
>>>>>>> 07e53ef32938342e2901b1557879a921315b2313

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

<<<<<<< HEAD
    const handleContactClick = (e) => {
        e.preventDefault();
        setIsContactModalOpen(true);
    };

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="container nav-content">
                    <div className="logo">
                        <img src="/user_logo.png" alt="Logo" className="nav-logo-img" />
                        <span className="gradient-text">TGXP</span>.DEV
                    </div>
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#upcoming">Upcoming</a></li>
                        <li>
                            <a
                                href="#contact"
                                className="contact-btn"
                                onClick={handleContactClick}
                            >
                                Get in Touch
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </>
=======
    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <div className="logo">
                    <img src="/user_logo.png" alt="Logo" className="nav-logo-img" />
                    <span className="gradient-text">TGXP</span>.DEV
                </div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#upcoming">Upcoming</a></li>
                    <li><a href="#contact" className="contact-btn">Get in Touch</a></li>
                </ul>
            </div>
        </nav>
>>>>>>> 07e53ef32938342e2901b1557879a921315b2313
    );
};

export default Navbar;
