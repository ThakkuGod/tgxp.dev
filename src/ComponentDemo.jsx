import React, { useState } from 'react';
import Loading from './components/Loading';
import NotFound from './components/NotFound';
import './App.css';

/**
 * COMPONENT DEMO - Test your new features!
 * 
 * This file lets you preview:
 * 1. Loading Component
 * 2. 404 Not Found Page
 * 
 * TO USE:
 * 1. Temporarily rename src/App.jsx to src/App.backup.jsx
 * 2. Rename this file to src/App.jsx
 * 3. View in browser
 * 4. Revert changes when done testing
 */

function ComponentDemo() {
    const [activeDemo, setActiveDemo] = useState('menu');

    const renderDemo = () => {
        switch (activeDemo) {
            case 'loading':
                return <Loading />;
            case '404':
                return <NotFound />;
            case 'menu':
            default:
                return (
                    <div style={{
                        minHeight: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '2rem',
                        background: '#000',
                        color: '#fff',
                        padding: '2rem'
                    }}>
                        <h1 style={{
                            fontSize: '2.5rem',
                            marginBottom: '1rem',
                            background: 'linear-gradient(90deg, #00f2fe, #00ff88)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            Component Demo Menu
                        </h1>
                        <p style={{ color: '#888', marginBottom: '2rem', textAlign: 'center' }}>
                            Select a component to preview:
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <button
                                onClick={() => setActiveDemo('loading')}
                                style={{
                                    padding: '1rem 2rem',
                                    background: 'linear-gradient(90deg, #00f2fe, #00ff88)',
                                    color: '#000',
                                    border: 'none',
                                    borderRadius: '50px',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 15px rgba(0, 242, 254, 0.3)'
                                }}
                            >
                                View Loading Screen
                            </button>

                            <button
                                onClick={() => setActiveDemo('404')}
                                style={{
                                    padding: '1rem 2rem',
                                    background: 'linear-gradient(90deg, #00f2fe, #00ff88)',
                                    color: '#000',
                                    border: 'none',
                                    borderRadius: '50px',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 15px rgba(0, 242, 254, 0.3)'
                                }}
                            >
                                View 404 Page
                            </button>
                        </div>

                        {activeDemo !== 'menu' && (
                            <button
                                onClick={() => setActiveDemo('menu')}
                                style={{
                                    padding: '0.8rem 1.5rem',
                                    background: 'transparent',
                                    color: '#fff',
                                    border: '2px solid #333',
                                    borderRadius: '50px',
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    marginTop: '1rem'
                                }}
                            >
                                Back to Menu
                            </button>
                        )}

                        <div style={{
                            marginTop: '3rem',
                            padding: '1.5rem',
                            background: 'rgba(255,255,255,0.05)',
                            borderRadius: '10px',
                            maxWidth: '600px'
                        }}>
                            <h3 style={{ color: '#00f2fe', marginBottom: '1rem' }}>✅ New Features Added:</h3>
                            <ul style={{ color: '#aaa', lineHeight: '2' }}>
                                <li>🍔 Mobile Hamburger Menu (responsive navbar)</li>
                                <li>⏳ Loading Screen with animations</li>
                                <li>❌ 404 Error Page with glitch effects</li>
                                <li>📱 Fully responsive across all devices</li>
                            </ul>

                            <h3 style={{ color: '#00ff88', marginTop: '2rem', marginBottom: '1rem' }}>
                                📝 How to Restore:
                            </h3>
                            <ol style={{ color: '#aaa', lineHeight: '1.8', fontSize: '0.9rem' }}>
                                <li>Rename this file back to ComponentDemo.jsx</li>
                                <li>Rename App.backup.jsx back to App.jsx</li>
                                <li>Refresh your browser</li>
                            </ol>
                        </div>
                    </div>
                );
        }
    };

    return renderDemo();
}

export default ComponentDemo;
