import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
    );
};

export default Navbar;
