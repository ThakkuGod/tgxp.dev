import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Upcoming from './components/Upcoming';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import Loading from './components/Loading';
import NotFound from './components/NotFound';

function App() {
  const [scrollReady, setScrollReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [show404, setShow404] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      setScrollReady(true);
    }, 2000); // 2 seconds loading

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Check if URL hash is #404 to show 404 page
    const checkHash = () => {
      setShow404(window.location.hash === '#404');
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);

    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  useEffect(() => {
    if (!isLoading && !show404) {
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

      // Small timeout to ensure DOM is ready
      setTimeout(() => {
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
      }, 100);

      return () => observer.disconnect();
    }
  }, [isLoading, show404]);

  if (isLoading) {
    return <Loading />;
  }

  // Show 404 page if hash is #404
  if (show404) {
    return <NotFound onClose={() => setShow404(false)} />;
  }

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

