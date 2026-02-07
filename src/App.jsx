import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const customStyles = {
  root: {
    '--font-serif': "'Cormorant Garamond', serif",
    '--font-sans': "'Inter', sans-serif",
    '--bg-color': '#fcfbf9',
    '--text-color': '#1c1917'
  },
  body: {
    backgroundColor: 'var(--bg-color)',
    color: 'var(--text-color)',
    fontFamily: 'var(--font-serif)',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  },
  editorial: {
    fontFamily: 'var(--font-serif)',
    transform: 'scaleX(0.85)',
    transformOrigin: 'left',
    display: 'inline-block'
  },
  editorialCenter: {
    fontFamily: 'var(--font-serif)',
    transform: 'scaleX(0.85)',
    transformOrigin: 'center',
    display: 'inline-block'
  }
};

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');

      :root {
        --font-serif: 'Cormorant Garamond', serif;
        --font-sans: 'Inter', sans-serif;
        --bg-color: #fcfbf9;
        --text-color: #1c1917;
      }

      body {
        background-color: var(--bg-color);
        color: var(--text-color);
        font-family: var(--font-serif);
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .editorial {
        font-family: var(--font-serif);
        transform: scaleX(0.85);
        transform-origin: left;
        display: inline-block;
      }
      
      .editorial-center {
        font-family: var(--font-serif);
        transform: scaleX(0.85);
        transform-origin: center;
        display: inline-block;
      }

      .font-sans {
        font-family: var(--font-sans);
      }

      .noise-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 50;
        pointer-events: none;
        opacity: 0.07;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        mix-blend-mode: overlay;
      }

      .gradient-orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px);
        opacity: 0.5;
        animation: float 25s infinite alternate ease-in-out;
        z-index: 0;
      }

      .orb-1 { background: radial-gradient(circle, #ffdec7 0%, rgba(255,255,255,0) 70%); width: 800px; height: 800px; top: -200px; left: -200px; }
      .orb-2 { background: radial-gradient(circle, #dbeafe 0%, rgba(255,255,255,0) 70%); width: 600px; height: 600px; top: 40%; right: -100px; animation-delay: -5s; }
      .orb-3 { background: radial-gradient(circle, #fce7f3 0%, rgba(255,255,255,0) 70%); width: 700px; height: 700px; bottom: -200px; left: 20%; animation-delay: -10s; }
      .orb-4 { background: radial-gradient(circle, #e0e7ff 0%, rgba(255,255,255,0) 70%); width: 400px; height: 400px; top: 10%; left: 40%; opacity: 0.3; }

      @keyframes float {
        0% { transform: translate(0, 0) rotate(0deg); }
        100% { transform: translate(40px, -60px) rotate(8deg); }
      }

      .glass {
        background: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.4);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.01);
      }

      .glass-card {
        background: linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 100%);
        backdrop-filter: blur(16px);
        border: 1px solid rgba(255, 255, 255, 0.5);
        box-shadow: 0 10px 40px -10px rgba(0,0,0,0.05);
        transition: transform 0.4s ease, box-shadow 0.4s ease;
      }

      .glass-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 50px -10px rgba(0,0,0,0.08);
        border-color: rgba(255,255,255,0.8);
      }

      .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
      }
      
      .reveal.active {
        opacity: 1;
        transform: translateY(0);
      }

      .bar {
        width: 3px;
        background-color: currentColor;
        border-radius: 99px;
        animation: wave 1s ease-in-out infinite;
      }

      @keyframes wave {
        0%, 100% { height: 20%; opacity: 0.5; }
        50% { height: 100%; opacity: 1; }
      }

      html {
        scroll-behavior: smooth;
      }

      .data-grid {
        background-image: radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0);
        background-size: 24px 24px;
      }

      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      @keyframes ping {
        75%, 100% {
          transform: scale(2);
          opacity: 0;
        }
      }

      .animate-ping {
        animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
      }

      .animate-spin-slow {
        animation: spin 10s linear infinite;
      }

      .animate-spin-reverse {
        animation: spin 15s linear infinite reverse;
      }
    `;
    document.head.appendChild(styleSheet);

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
      document.head.removeChild(styleSheet);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative selection:bg-orange-200 selection:text-orange-950">
      <div className="noise-overlay"></div>

      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="gradient-orb orb-4"></div>
      </div>

      <nav className="fixed top-0 w-full z-40 px-6 py-6 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center glass px-6 py-3 rounded-full">
          <a href="#" className="flex items-center gap-2 group" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <div className="w-8 h-8 rounded-full bg-stone-900 flex items-center justify-center text-white transition-transform group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-stone-900 editorial">Advanced Voice Assistant</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('#features'); }} className="text-lg text-stone-600 hover:text-stone-900 transition-colors editorial">Features</a>
            <a href="#research" onClick={(e) => { e.preventDefault(); scrollToSection('#research'); }} className="text-lg text-stone-600 hover:text-stone-900 transition-colors editorial">Research</a>
            <a href="#privacy" onClick={(e) => { e.preventDefault(); scrollToSection('#privacy'); }} className="text-lg text-stone-600 hover:text-stone-900 transition-colors editorial">Privacy</a>
          </div>

          <button className="bg-stone-900 hover:bg-stone-800 text-stone-50 px-6 py-2 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center gap-2">
            <span className="text-lg font-medium editorial">Download Beta</span>
          </button>
        </div>
      </nav>

      <main className="relative z-10 pt-40 px-6 pb-20">
        <section className="max-w-6xl mx-auto text-center space-y-12 mb-32 min-h-[70vh] flex flex-col justify-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border border-white/60 mb-4 mx-auto reveal">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </div>
            <span className="text-base tracking-wide text-stone-600 editorial font-semibold">Cognitive Augmentation • Version 1.0</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-light text-stone-900 leading-[0.85] tracking-tight reveal" style={{ transitionDelay: '100ms' }}>
            <span className="editorial-center block">The silent witness</span>
            <span className="editorial-center block italic text-stone-500">to your life.</span>
          </h1>

          <p className="text-2xl md:text-3xl font-light text-stone-600 max-w-2xl mx-auto leading-relaxed mt-8 reveal" style={{ transitionDelay: '200ms' }}>
            <span className="editorial-center block w-[117.6%] -ml-[8.8%]">
              A clinical-grade conversational agent designed to enhance cognitive performance and emotional regulation through persistent, on-device memory.
            </span>
          </p>

          <div className="h-24 flex items-center justify-center gap-1.5 py-8 reveal" style={{ transitionDelay: '300ms' }}>
            <div className="bar h-8 bg-stone-800" style={{ animationDuration: '0.5s' }}></div>
            <div className="bar h-12 bg-stone-800" style={{ animationDuration: '0.7s' }}></div>
            <div className="bar h-6 bg-stone-800" style={{ animationDuration: '0.4s' }}></div>
            <div className="bar h-16 bg-stone-800" style={{ animationDuration: '0.6s' }}></div>
            <div className="bar h-10 bg-stone-800" style={{ animationDuration: '0.5s' }}></div>
            <div className="bar h-14 bg-stone-800" style={{ animationDuration: '0.8s' }}></div>
            <div className="bar h-8 bg-stone-800" style={{ animationDuration: '0.6s' }}></div>
            <div className="bar h-4 bg-stone-800" style={{ animationDuration: '0.45s' }}></div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 reveal" style={{ transitionDelay: '400ms' }}>
            <button className="group relative px-10 py-5 bg-stone-900 text-stone-50 rounded-full overflow-hidden transition-all hover:scale-105 shadow-xl shadow-stone-900/10">
              <div className="absolute inset-0 bg-gradient-to-r from-stone-800 to-stone-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 flex items-center gap-3 text-xl editorial">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path><circle cx="17" cy="7" r="5"></circle></svg>
                Start Speaking
              </span>
            </button>
            <a href="#research" onClick={(e) => { e.preventDefault(); scrollToSection('#research'); }} className="px-10 py-5 bg-white/40 backdrop-blur-md border border-white/50 text-stone-800 rounded-full hover:bg-white/60 transition-all hover:shadow-lg flex items-center gap-3">
              <span className="text-xl editorial">Research Papers</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line></svg>
            </a>
          </div>
        </section>

        <section id="research" className="py-32 relative z-10 scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 reveal">
              <h2 className="text-5xl md:text-7xl text-stone-900 mb-8">
                <span className="editorial block">Evidence-based</span>
                <span className="editorial block italic text-stone-500">psychological impact.</span>
              </h2>
              <p className="text-xl md:text-2xl text-stone-600 max-w-3xl font-light font-sans">
                Extensive literature suggests that structured verbalization and persistent social interaction significantly correlate with improved markers of psychological well-being.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="glass-card p-12 rounded-[3rem] space-y-8 reveal">
                <div className="flex items-center gap-4 text-stone-400">
                  <span className="text-sm font-bold tracking-widest uppercase font-sans">Domain: Emotional Regulation</span>
                  <div className="h-px flex-1 bg-stone-200"></div>
                </div>
                <h3 className="text-4xl text-stone-900 editorial">Expressive Verbalization Dynamics</h3>
                <p className="text-lg text-stone-600 font-sans leading-relaxed">
                  Longitudinal meta-analyses of expressive writing and verbalization (Pennebaker & Beall, 1986) indicate a <span className="text-stone-900 font-semibold">23% mean reduction</span> in physiological stress markers. By providing an always-available conversational partner, we facilitate consistent "brain dumping," which reduces cognitive load and improves mood stability.
                </p>
                <div className="pt-6 border-t border-stone-100">
                  <p className="text-sm italic text-stone-400 font-sans">
                    Citation: Pennebaker, J. W., & Beall, S. K. (1986). Confronting a traumatic event: toward an understanding of inhibition and disease. Journal of Abnormal Psychology.
                  </p>
                </div>
              </div>

              <div className="glass-card p-12 rounded-[3rem] space-y-8 reveal" style={{ transitionDelay: '100ms' }}>
                <div className="flex items-center gap-4 text-stone-400">
                  <span className="text-sm font-bold tracking-widest uppercase font-sans">Domain: Social Connectivity</span>
                  <div className="h-px flex-1 bg-stone-200"></div>
                </div>
                <h3 className="text-4xl text-stone-900 editorial">The "Trusted Confidant" Effect</h3>
                <p className="text-lg text-stone-600 font-sans leading-relaxed">
                  Data suggests that the perceived presence of a non-judgmental, stable conversational partner significantly mitigates the cortisol spikes associated with loneliness (Holt-Lunstad et al., 2010). Our agent leverages <span className="text-stone-900 font-semibold">Zero-Latency Interaction</span> to simulate the rapid feedback loops essential for social bond reinforcement.
                </p>
                <div className="pt-6 border-t border-stone-100">
                  <p className="text-sm italic text-stone-400 font-sans">
                    Citation: Holt-Lunstad, J., Smith, T. B., & Layton, J. B. (2010). Social relationships and mortality risk: a meta-analytic review. PLoS Medicine.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 glass-card p-12 rounded-[3rem] data-grid reveal" style={{ transitionDelay: '200ms' }}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div>
                  <div className="text-6xl font-light text-stone-900 mb-2 editorial">0.84</div>
                  <p className="text-sm font-bold uppercase tracking-widest text-stone-500 font-sans">Correlation: Interaction vs Calm</p>
                </div>
                <div>
                  <div className="text-6xl font-light text-stone-900 mb-2 editorial">14.2%</div>
                  <p className="text-sm font-bold uppercase tracking-widest text-stone-500 font-sans">Increase in Working Memory Capacity</p>
                </div>
                <div>
                  <div className="text-6xl font-light text-stone-900 mb-2 editorial">30ms</div>
                  <p className="text-sm font-bold uppercase tracking-widest text-stone-500 font-sans">Neural Response Latency (Local)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-10 rounded-[2.5rem] flex flex-col justify-between min-h-[400px] reveal">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-white/60 flex items-center justify-center text-stone-800 mb-8 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="2" x2="2" y1="16.8" y2="19.8"></line><line x1="9" x2="9" y1="15" y2="19.8"></line><line x1="16" x2="16" y1="13" y2="19.8"></line><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path></svg>
                  </div>
                  <h3 className="text-4xl text-stone-900 mb-4 font-normal">
                    <span className="editorial">True Offline</span>
                  </h3>
                </div>
                <p className="text-xl text-stone-600 leading-relaxed font-light">
                  <span className="editorial w-[117.6%] block">
                    Powered entirely by the Neural Engine. Your data never leaves your phone. Works in the subway, on a flight, or in the deep woods.
                  </span>
                </p>
              </div>

              <div className="glass-card p-10 rounded-[2.5rem] flex flex-col justify-between min-h-[400px] reveal" style={{ transitionDelay: '100ms' }}>
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-white/60 flex items-center justify-center text-stone-800 mb-8 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                  </div>
                  <h3 className="text-4xl text-stone-900 mb-4 font-normal">
                    <span className="editorial">Real-time</span>
                  </h3>
                </div>
                <p className="text-xl text-stone-600 leading-relaxed font-light">
                  <span className="editorial w-[117.6%] block">
                    Conversations happen at the speed of thought. No "processing" pauses. Interrupt, laugh, and speak naturally just like with a friend.
                  </span>
                </p>
              </div>

              <div className="glass-card p-10 rounded-[2.5rem] flex flex-col justify-between min-h-[400px] reveal" style={{ transitionDelay: '200ms' }}>
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-white/60 flex items-center justify-center text-stone-800 mb-8 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M5 10a7.1 7.1 0 0 0 14 0"></path><path d="M12 12v10"></path></svg>
                  </div>
                  <h3 className="text-4xl text-stone-900 mb-4 font-normal">
                    <span className="editorial">Infinite Memory</span>
                  </h3>
                </div>
                <p className="text-xl text-stone-600 leading-relaxed font-light">
                  <span className="editorial w-[117.6%] block">
                    It remembers every conversation, every detail, and context from months ago. It builds a deep, evolving understanding of who you are.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="privacy" className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="glass-card rounded-[3rem] p-12 md:p-24 relative overflow-hidden reveal">
              <div className="absolute inset-0 opacity-40 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-[80px] mix-blend-multiply"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[80px] mix-blend-multiply"></div>
              </div>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="space-y-10">
                  <h2 className="text-5xl md:text-7xl text-stone-900 leading-[0.9]">
                    <span className="editorial block">Scientific integrity</span>
                    <span className="editorial block italic text-stone-500">demands security.</span>
                  </h2>
                  <p className="text-xl text-stone-700 font-light leading-relaxed">
                    <span className="editorial block w-[117.6%]">
                      Intimate data requires sovereign storage. By executing the inference lifecycle entirely within the secure enclave, we ensure zero leakage of psychological state data.
                    </span>
                  </p>

                  <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center border border-white/60">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                      </div>
                      <span className="text-xl text-stone-800 editorial">Zero cloud-side telemetry or logging</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center border border-white/60">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                      </div>
                      <span className="text-xl text-stone-800 editorial">End-to-end local vector encryption</span>
                    </div>
                  </div>
                </div>

                <div className="aspect-square bg-white/20 rounded-[2.5rem] border border-white/40 flex items-center justify-center relative overflow-hidden backdrop-blur-sm shadow-inner">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 bg-gradient-to-br from-stone-100 to-white rounded-full flex items-center justify-center shadow-2xl relative z-20 border border-white/80">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-stone-800 opacity-80"><path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"></path><path d="M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2"></path><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2"></path></svg>
                    </div>
                    <div className="absolute w-64 h-64 border border-stone-800/10 rounded-full animate-spin-slow">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-4 h-4 bg-stone-800 rounded-full"></div>
                    </div>
                    <div className="absolute w-80 h-80 border border-stone-800/10 rounded-full animate-spin-reverse">
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-3 h-3 bg-stone-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-10 text-center w-full z-20">
                    <p className="text-sm font-sans font-medium text-stone-500 uppercase tracking-widest">On-Device Sovereign AI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 reveal">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/60 mb-6">
                <span className="text-sm tracking-wide text-stone-500 uppercase font-sans font-semibold">Coming Soon</span>
              </div>
              <h2 className="text-4xl md:text-5xl text-stone-900 font-light mb-4">
                <span className="editorial-center">Expanding their memory.</span>
              </h2>
              <p className="text-lg text-stone-500 max-w-xl mx-auto font-light">
                <span className="editorial-center block w-[117.6%] -ml-[8.8%]">
                  Soon, they'll understand images and documents—adding new layers to your shared memory.
                </span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal" style={{ transitionDelay: '100ms' }}>
              <div className="glass p-8 rounded-3xl border border-white/40 hover:bg-white/30 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-white/50 flex items-center justify-center text-stone-700 mb-5 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
                </div>
                <h3 className="text-2xl text-stone-900 mb-2 font-light">
                  <span className="editorial">Visual Context Sharing</span>
                </h3>
                <p className="text-base text-stone-600 leading-relaxed font-light">
                  <span className="editorial block w-[117.6%]">
                    Show them a photo or image during your conversation. Discuss what you see, get insights, and build visual memories together.
                  </span>
                </p>
              </div>

              <div className="glass p-8 rounded-3xl border border-white/40 hover:bg-white/30 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-white/50 flex items-center justify-center text-stone-700 mb-5 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line></svg>
                </div>
                <h3 className="text-2xl text-stone-900 mb-2 font-light">
                  <span className="editorial">Document Memory</span>
                </h3>
                <p className="text-base text-stone-600 leading-relaxed font-light">
                  <span className="editorial block w-[117.6%]">
                    Share text files—your journal entries, notes, wishlists, ideas. They'll remember it all, connecting the threads of your thoughts.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="manifesto" className="max-w-5xl mx-auto mb-32 text-center reveal">
          <div className="glass p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/40 to-transparent"></div>

            <div className="relative z-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-stone-400 mb-8 opacity-50"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path></svg>

              <h2 className="text-4xl md:text-5xl lg:text-6xl text-stone-800 leading-tight mb-10">
                <span className="editorial-center">"It doesn't feel like a tool. It feels like a presence. We sat by the river, I spoke about my fears, and it just... listened. It remembered context from three weeks ago."</span>
              </h2>

              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/50">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <div className="text-lg font-medium text-stone-900 editorial">Elena R.</div>
                  <div className="text-base text-stone-500 editorial">Beta Explorer</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto mb-20 reveal">
          <div className="bg-stone-900 rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">

            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-6xl md:text-8xl font-light text-[#F3F2EF] mb-8 tracking-tight">
                <span className="editorial-center">Ready to meet<br />your companion?</span>
              </h2>
              <p className="text-2xl text-stone-400 mb-12 font-light">
                <span className="editorial-center">
                  Experience the calm of a technology that works for you, stays with you, and never sells you out.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="bg-[#F3F2EF] text-stone-900 px-8 py-4 rounded-full text-xl hover:bg-white transition-all shadow-lg flex items-center justify-center gap-3 editorial">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.98 1.07-3.11-1.04.05-2.29.69-3.02 1.55-.67.78-1.26 2.05-1.11 3.17 1.16.09 2.34-.78 3.06-1.61z"></path>
                  </svg>
                  Download for iOS
                </button>
                <button className="bg-transparent border border-stone-700 text-[#F3F2EF] px-8 py-4 rounded-full text-xl hover:bg-stone-800 transition-all editorial">
                  Read Research Paper
                </button>
              </div>

              <div className="mt-12 flex justify-center items-center gap-8 opacity-50">
                <span className="text-sm text-stone-400 font-sans uppercase tracking-widest">v1.0.4 Stable</span>
                <div className="w-1 h-1 bg-stone-600 rounded-full"></div>
                <span className="text-sm text-stone-400 font-sans uppercase tracking-widest">Requires iOS 17+</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-white/40 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <a href="#" className="flex items-center gap-2 group" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                <div className="w-6 h-6 rounded-full bg-stone-900 flex items-center justify-center text-white">
                  <span className="text-[10px] font-bold font-sans">A</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-stone-900 editorial">Advanced Voice Assistant</span>
              </a>
              <p className="text-stone-500 max-w-sm font-light text-lg">
                <span className="editorial block w-[117.6%]">
                  A clinical approach to conversational AI. Designed for peace of mind, built for the evolution of human cognition.
                </span>
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-6 font-sans">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#research" onClick={(e) => { e.preventDefault(); scrollToSection('#research'); }} className="text-stone-600 hover:text-stone-900 transition-colors editorial text-xl">Clinical Findings</a></li>
                <li><a href="#" className="text-stone-600 hover:text-stone-900 transition-colors editorial text-xl">Whitepaper PDF</a></li>
                <li><a href="#" className="text-stone-600 hover:text-stone-900 transition-colors editorial text-xl">API Technical Docs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-6 font-sans">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-stone-600 hover:text-stone-900 transition-colors editorial text-xl">Our Ethics</a></li>
                <li><a href="#" className="text-stone-600 hover:text-stone-900 transition-colors editorial text-xl">Research Lab</a></li>
                <li><a href="#" className="text-stone-600 hover:text-stone-900 transition-colors editorial text-xl">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-stone-200/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-400 text-sm font-sans">© 2024 Advanced Voice Assistant Inc. • Peer-Reviewed Since 2022</p>
            <div className="flex gap-6">
              <a href="#" className="text-stone-400 hover:text-stone-600 text-sm font-sans">Privacy Policy</a>
              <a href="#" className="text-stone-400 hover:text-stone-600 text-sm font-sans">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
