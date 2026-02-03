import React from 'react';
import './Upcoming.css';

const Upcoming = () => {
    const roadmap = [
        {
            quarter: "Q1 2026",
            title: "Advanced Music Bot",
            desc: "Next-generation Discord music bot with Spotify and YouTube integration, advanced queue management, and crystal-clear audio quality.",
            status: "In Development"
        }
    ];

    return (
        <section id="upcoming" className="upcoming container">
            <div className="section-header reveal">
                <h2 className="section-title">Upcoming Projects</h2>
                <div className="divider"></div>
            </div>
            <div className="roadmap-container">
                {roadmap.map((item, index) => (
                    <div key={index} className="roadmap-item reveal">
                        <div className="roadmap-quarter">{item.quarter}</div>
                        <div className="roadmap-content">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <span className={`status ${item.status.toLowerCase().replace(' ', '-')}`}>
                                {item.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Upcoming;
