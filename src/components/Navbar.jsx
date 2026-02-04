import React, { useState, useEffect } from 'react';
import './Navbar.css';
import ContactModal from './ContactModal';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking outside or on a link
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMobileMenuOpen]);

    const handleContactClick = (e) => {
        e.preventDefault();
        setIsContactModalOpen(true);
        setIsMobileMenuOpen(false);
    };

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="container nav-content">
                    <div className="logo">
                        <img src="/user_logo.png" alt="Logo" className="nav-logo-img" />
                        <span className="gradient-text">TGXP</span>.DEV
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="nav-links desktop-nav">
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

                    {/* Mobile Hamburger Button */}
                    <button
                        className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <ul className="mobile-nav-links">
                    <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
                    <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
                    <li><a href="#upcoming" onClick={handleLinkClick}>Upcoming</a></li>
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

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </>
    );
};

export default Navbar;
