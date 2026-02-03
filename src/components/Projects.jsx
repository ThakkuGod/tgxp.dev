import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
    {
        title: "Advanced Discord Bot Maker",
        description: "A comprehensive ecosystem for building high-performance Discord bots with integrated logging and automated deployment.",
        tech: ["Discord.js", "Node.js", "Express", "MongoDB"],
        fullDescription: "An all-in-one platform for professional bot developers. Features include multi-channel log streaming, dynamic command handling, persistent database integration, and a sleek dashboard for real-time monitoring. Built to handle millions of interactions with zero downtime.",
        image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=600",
        link: "#"
    },
    {
        title: "RPF Converter Online",
        description: "Cloud-based utility for managing and converting RPF archives directly in the browser with high efficiency.",
        tech: ["React", "WebAssembly", "Cloud Services"],
        fullDescription: "A revolutionary web tool that brings native RPF management to the browser. Utilizing WebAssembly for near-native performance, users can extract, analyze, and repack assets without local software. Features instant processing and secure cloud storage integrations.",
        image: "/rpf_banner.jpg",
        link: "https://rpf-converter.onrender.com/"
    },
    {
        title: "Deathlin Nexus",
        description: "The ultimate hub for gaming scripts, bot configurations, and developer tools, featuring a clean and interactive UI.",
        tech: ["FiveM", "Lua", "Next.js", "Firebase"],
        fullDescription: "Deathlin Nexus serves as a centralized marketplace and documentation hub for professional gaming assets. It provides automated license management, real-time update notifications, and a community-driven feedback system for high-end scripts and bots.",
        image: "/dng_logo.png",
        link: "#"
    },
    /*
    {
        title: "FiveM Ultra PvP Server",
        description: "State-of-the-art PvP server environment with custom HUDs, advanced lobby systems, and optimized performance.",
        tech: ["Lua", "React", "Native C++"],
        fullDescription: "A precision-engineered PvP experience for FiveM. Features include a modular lobby system, dynamic match-making, real-time stat tracking on a custom React HUD, and a low-latency network architecture optimized for competitive play. Includes custom weapon handling and movement physics.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600",
        link: "#"
    }
    */
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="projects" className="projects container">
            <div className="section-header reveal">
                <h2 className="section-title">Current <span className="gradient-text">Projects</span></h2>
                <div className="divider"></div>
            </div>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div key={index} className="project-card reveal">
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                            <div className="project-overlay">
                                <button
                                    onClick={() => openModal(project)}
                                    className="view-link-btn"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((t, i) => <span key={i}>{t}</span>)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="close-modal" onClick={closeModal}>&times;</button>
                        <div className="modal-grid">
                            <div className="modal-image">
                                <img src={selectedProject.image} alt={selectedProject.title} />
                            </div>
                            <div className="modal-text">
                                <h2>{selectedProject.title}</h2>
                                <div className="project-tech">
                                    {selectedProject.tech.map((t, i) => <span key={i}>{t}</span>)}
                                </div>
                                <p className="full-desc">{selectedProject.fullDescription}</p>
                                <div className="modal-actions">
                                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="primary-btn">Visit Project</a>
                                    <button onClick={closeModal} className="secondary-btn">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
