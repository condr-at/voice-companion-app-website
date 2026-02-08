import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Research from './components/Research';
import Features from './components/Features';
import Privacy from './components/Privacy';
import ComingSoon from './components/ComingSoon';
import Testimonial from './components/Testimonial';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Background from './components/Background';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    const observerOptions = { threshold: 0.1, rootMargin: "0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => { observer.observe(el); });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-orange-200 selection:text-orange-950">
      <Background />
      <Navigation />

      <main className="relative z-10 pt-40 px-6 pb-20">
        <Hero />
        <Research />
        <Features />
        <Privacy />
        <ComingSoon />
        <Testimonial />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default App;
