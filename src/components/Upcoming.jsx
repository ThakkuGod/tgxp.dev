import React from 'react';
import './Upcoming.css';

const Upcoming = () => {
    const roadmap = [
        {
            quarter: "Q1 2026",
            title: "Neural Engine Integration",
            desc: "Deep learning models running directly in-browser for real-time data processing.",
            status: "In Development"
        },
        {
            quarter: "Q2 2026",
            title: "HoloCloud Platform",
            desc: "A decentralized storage solution with a focus on privacy and massive scalability.",
            status: "Planning"
        },
        {
            quarter: "Q3 2026",
            title: "Project Phoenix",
            desc: "Top secret open-source initiative to revolutionize how we build web apps.",
            status: "Research"
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
