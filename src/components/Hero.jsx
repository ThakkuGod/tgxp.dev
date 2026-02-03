import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero container">
            <div className="hero-content reveal">
                <h2 className="subtitle">Hello, I'm a Developer</h2>
                <h1 className="title">
                    Building Digital <br />
                    <span className="gradient-text">Experiences</span> that Matter.
                </h1>
                <p className="description">
                    Specializing in high-performance web applications, interactive interfaces,
                    and modern software solutions. Explore my latest work and upcoming innovations.
                </p>
                <div className="hero-btns">
                    <a href="#projects" className="primary-btn">View Projects</a>
                    <a href="#about" className="secondary-btn">Learn More</a>
                </div>
            </div>
            <div className="hero-visual reveal">
                <div className="blob"></div>
                <div className="banner-wrapper">
                    <img src="/user_logo.png" alt="Official Logo" className="hero-banner-img" />
                    <div className="code-card mini-card">
                        <div className="code-header">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <pre>
                            <code>{`const developer = {
  name: 'TGXP',
  status: 'Building 🔥'
};`}</code>
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
