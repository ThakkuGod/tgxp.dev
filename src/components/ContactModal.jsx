import React, { useState } from 'react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
    const [copied, setCopied] = useState(false);

    const discordUsername = "TGXP";
    const discordTag = "thakkugod";
    const email = "thakkugod@gmail.com";

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (!isOpen) return null;

    return (
        <div className="contact-modal-overlay" onClick={onClose}>
            <div className="contact-modal-card" onClick={e => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>×</button>

                <div className="profile-banner"></div>

                <div className="profile-content">
                    <div className="profile-avatar">
                        <img src="/avatar.png" alt="TGXP" />
                        <div className="status-indicator"></div>
                    </div>

                    <div className="profile-info">
                        <div className="username-section">
                            <h2 className="display-name">TGXP</h2>
                            <span className="username">{discordUsername}</span>
                        </div>

                        <div className="divider-line"></div>

                        <div className="info-section">
                            <h3>Discord</h3>
                            <div className="info-item" onClick={() => copyToClipboard(discordTag)}>
                                <span className="info-label">Username</span>
                                <span className="info-value">
                                    {discordTag}
                                    <svg className="copy-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M8 4v12a2 2 0 002 2h8a2 2 0 002-2V7.242a2 2 0 00-.602-1.43L16.083 2.57A2 2 0 0014.685 2H10a2 2 0 00-2 2z" stroke="currentColor" strokeWidth="2" />
                                        <path d="M16 18v2a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h2" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className="info-section">
                            <h3>Email</h3>
                            <div className="info-item" onClick={() => copyToClipboard(email)}>
                                <span className="info-label">Address</span>
                                <span className="info-value">
                                    {email}
                                    <svg className="copy-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M8 4v12a2 2 0 002 2h8a2 2 0 002-2V7.242a2 2 0 00-.602-1.43L16.083 2.57A2 2 0 0014.685 2H10a2 2 0 00-2 2z" stroke="currentColor" strokeWidth="2" />
                                        <path d="M16 18v2a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h2" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className="note-section">
                            <h3>About Me</h3>
                            <p>Professional developer specializing in high-performance web applications and modern software solutions. Let's build something extraordinary together! 🚀</p>
                        </div>
                    </div>
                </div>

                {copied && (
                    <div className="copied-notification">
                        Copied to clipboard!
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactModal;
