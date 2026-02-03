import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Upcoming from './components/Upcoming';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [scrollReady, setScrollReady] = useState(false);

  useEffect(() => {
    setScrollReady(true);
    
    // Smooth scroll reveal logic
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`app-wrapper ${scrollReady ? 'ready' : ''}`}>
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Upcoming />
      </main>
      <Footer />
    </div>
  );
}

export default App;
