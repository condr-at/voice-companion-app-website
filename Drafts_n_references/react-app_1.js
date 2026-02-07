import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const customStyles = {
  body: {
    backgroundColor: '#F3F2EF',
    color: '#1A1A1A',
    fontFamily: "'Cormorant Garamond', serif",
  },
  editorialText: {
    fontFamily: "'Cormorant Garamond', serif",
    transform: 'scaleX(0.85)',
    transformOrigin: 'left',
    display: 'inline-block',
  },
  editorialTextCenter: {
    fontFamily: "'Cormorant Garamond', serif",
    transform: 'scaleX(0.85)',
    transformOrigin: 'center',
    display: 'inline-block',
  },
  sansSerif: {
    fontFamily: "'Inter', sans-serif",
  },
};

const EditorialText = ({ children, center = false, className = '' }) => (
  <span 
    style={center ? customStyles.editorialTextCenter : customStyles.editorialText}
    className={className}
  >
    {children}
  </span>
);

const SansText = ({ children, className = '' }) => (
  <span style={customStyles.sansSerif} className={className}>
    {children}
  </span>
);

const Icon = ({ name, className = '' }) => {
  const icons = {
    'mic': (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    'wifi-off': (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
      </svg>
    ),
    'zap': (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    'infinity': (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    'shield-check': (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    'check': (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    'quote': (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  };
  return icons[name] || null;
};

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="antialiased min-h-screen relative selection:bg-[#D4E0E8] selection:text-black" style={customStyles.body}>
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-5 mix-blend-overlay"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
        }}
      />
      
      <div className="fixed top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full opacity-60 z-[-1]"
        style={{
          background: '#E8D5C4',
          filter: 'blur(100px)',
          animation: 'float 20s ease-in-out infinite alternate',
        }}
      />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full opacity-60 z-[-1]"
        style={{
          background: '#D4E0E8',
          filter: 'blur(100px)',
          animation: 'float 20s ease-in-out infinite alternate',
          animationDelay: '-5s',
        }}
      />
      <div className="fixed top-[40%] left-[30%] w-[40vw] h-[40vw] rounded-full opacity-40 z-[-1]"
        style={{
          background: '#E6E1DC',
          filter: 'blur(100px)',
          animation: 'float 20s ease-in-out infinite alternate',
          animationDelay: '-10s',
        }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Inter:wght@300;400;500&display=swap');
        
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(5%, 10%) rotate(5deg); }
          100% { transform: translate(-5%, 5%) rotate(-5deg); }
        }
        
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(0,0,0,0.1);
          border-radius: 3px;
        }
      `}</style>

      <nav className={`fixed top-0 w-full z-50 px-6 py-6 transition-all duration-300 ${isScrolled ? 'bg-white/30 backdrop-blur-md' : ''}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" className="group relative z-50 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-neutral-400/50 flex items-center justify-center bg-white/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-neutral-800 rounded-full"></div>
            </div>
            <span className="text-xl font-medium tracking-wide text-neutral-900">
              <EditorialText>Advanced Voice Assistant</EditorialText>
            </span>
          </a>
          
          <div className="hidden md:flex items-center gap-1 bg-white/30 backdrop-blur-md rounded-full p-1 border border-white/40 shadow-sm">
            <button onClick={() => scrollToSection('manifesto')} className="px-5 py-2 rounded-full text-lg hover:bg-white/50 transition-all text-neutral-700">
              <EditorialText>Manifesto</EditorialText>
            </button>
            <button onClick={() => scrollToSection('features')} className="px-5 py-2 rounded-full text-lg hover:bg-white/50 transition-all text-neutral-700">
              <EditorialText>Features</EditorialText>
            </button>
            <button onClick={() => scrollToSection('privacy')} className="px-5 py-2 rounded-full text-lg hover:bg-white/50 transition-all text-neutral-700">
              <EditorialText>Privacy</EditorialText>
            </button>
          </div>

          <button className="bg-neutral-900 hover:bg-neutral-800 text-[#F3F2EF] px-6 py-2.5 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            <EditorialText>Download Beta</EditorialText>
          </button>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20 px-6">
        <section className="min-h-[85vh] flex flex-col justify-center items-center text-center max-w-5xl mx-auto mb-20">
          <div className="mb-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-md border border-white/60">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-base text-neutral-600 tracking-wide">
                <EditorialText>Running locally on device</EditorialText>
              </span>
            </div>
          </div>

          <h1 className="text-7xl md:text-9xl font-light text-neutral-900 leading-[0.9] tracking-tight mb-8">
            <EditorialText center>The Witness</EditorialText><br />
            <EditorialText center><span className="italic text-neutral-600">to your life.</span></EditorialText>
          </h1>

          <p className="text-2xl md:text-3xl font-light text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-12">
            <EditorialText center>
              A maximally human AI that lives entirely on your device. It remembers everything, connects instantly, and speaks with you in real-time. No servers. No latency. Just you.
            </EditorialText>
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="group relative px-8 py-4 bg-neutral-900 text-[#F3F2EF] rounded-full overflow-hidden transition-all hover:scale-105 shadow-xl shadow-neutral-900/10 w-full sm:w-auto">
              <span className="relative z-10 flex items-center justify-center gap-3 text-xl">
                <Icon name="mic" className="w-5 h-5" />
                <EditorialText>Start Speaking</EditorialText>
              </span>
            </button>
            <button className="px-8 py-4 bg-white/40 backdrop-blur-md border border-white/50 rounded-full text-neutral-800 hover:bg-white/60 transition-all text-xl w-full sm:w-auto">
              <EditorialText>Watch the Film</EditorialText>
            </button>
          </div>

          <div className="mt-20 relative w-full h-40 flex items-center justify-center opacity-80">
            <div className="absolute w-64 h-64 bg-gradient-to-tr from-blue-200 to-orange-100 rounded-full blur-3xl mix-blend-multiply"
              style={{ animation: 'breathe 4s ease-in-out infinite' }}
            />
            <div className="relative z-10 flex items-end gap-1.5 h-16">
              <div className="w-1.5 bg-neutral-800 rounded-full h-8 animate-bounce" style={{ animationDuration: '1s' }}></div>
              <div className="w-1.5 bg-neutral-800 rounded-full h-12 animate-bounce" style={{ animationDuration: '1.2s', animationDelay: '0.1s' }}></div>
              <div className="w-1.5 bg-neutral-800 rounded-full h-6 animate-bounce" style={{ animationDuration: '0.8s', animationDelay: '0.2s' }}></div>
              <div className="w-1.5 bg-neutral-800 rounded-full h-14 animate-bounce" style={{ animationDuration: '1.5s', animationDelay: '0.3s' }}></div>
              <div className="w-1.5 bg-neutral-800 rounded-full h-10 animate-bounce" style={{ animationDuration: '1.1s', animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </section>

        <section id="features" className="max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/40 backdrop-blur-md border border-white/50 p-10 rounded-[2rem] flex flex-col justify-between h-[420px] group transition-all duration-500 hover:-translate-y-2 hover:bg-white/50 hover:border-white/80">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/50 border border-white/60 flex items-center justify-center mb-8 text-neutral-800 shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <Icon name="wifi-off" className="w-7 h-7" />
                </div>
                <h3 className="text-3xl text-neutral-900 mb-4 font-normal">
                  <EditorialText>True Offline</EditorialText>
                </h3>
                <p className="text-xl text-neutral-600 leading-relaxed font-light">
                  <EditorialText>
                    Powered entirely by the Neural Engine on your device. Your data never leaves your phone. It works in the subway, on a flight, or in the deep woods.
                  </EditorialText>
                </p>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-md border border-white/50 p-10 rounded-[2rem] flex flex-col justify-between h-[420px] group transition-all duration-500 hover:-translate-y-2 hover:bg-white/50 hover:border-white/80">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/50 border border-white/60 flex items-center justify-center mb-8 text-neutral-800 shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <Icon name="zap" className="w-7 h-7" />
                </div>
                <h3 className="text-3xl text-neutral-900 mb-4 font-normal">
                  <EditorialText>Real-time Latency</EditorialText>
                </h3>
                <p className="text-xl text-neutral-600 leading-relaxed font-light">
                  <EditorialText>
                    Conversations happen at the speed of thought. No "processing" pauses. Interrupt, laugh, and speak naturally just like you would with a friend.
                  </EditorialText>
                </p>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-md border border-white/50 p-10 rounded-[2rem] flex flex-col justify-between h-[420px] group transition-all duration-500 hover:-translate-y-2 hover:bg-white/50 hover:border-white/80">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/50 border border-white/60 flex items-center justify-center mb-8 text-neutral-800 shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <Icon name="infinity" className="w-7 h-7" />
                </div>
                <h3 className="text-3xl text-neutral-900 mb-4 font-normal">
                  <EditorialText>Infinite Memory</EditorialText>
                </h3>
                <p className="text-xl text-neutral-600 leading-relaxed font-light">
                  <EditorialText>
                    A witness to your life. It remembers every conversation, every detail, and context from months ago, building a deep understanding of who you are.
                  </EditorialText>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto mb-32 px-4">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <section id="privacy" className="max-w-7xl mx-auto mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative shadow-2xl bg-white/40 backdrop-blur-md border border-white/50 p-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8D5C4]/30 to-[#D4E0E8]/30"></div>
              <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop" alt="Abstract Privacy" className="w-full h-full object-cover rounded-[2rem] opacity-90 grayscale-[20%] contrast-[1.1]" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/40 backdrop-blur-xl border border-white/40 p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="shield-check" className="w-5 h-5 text-emerald-700" />
                    <SansText className="text-sm font-bold uppercase tracking-widest text-emerald-800">Secure Enclave</SansText>
                  </div>
                  <p className="text-lg text-neutral-800">
                    <EditorialText>"Intimacy requires privacy. That's why we built an architecture where your voice never leaves your hand."</EditorialText>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-10">
            <h2 className="text-5xl md:text-7xl font-light text-neutral-900 leading-[0.95]">
              <EditorialText>Sovereign Data.</EditorialText><br />
              <EditorialText><span className="italic text-neutral-500">Truly yours.</span></EditorialText>
            </h2>
            <p className="text-2xl text-neutral-600 font-light leading-relaxed">
              <EditorialText>
                By running the Large Language Model directly on your neural processor, we eliminate the need for cloud data transfer. 
              </EditorialText>
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center shrink-0">
                  <Icon name="check" className="w-3.5 h-3.5 text-neutral-700" />
                </div>
                <div>
                  <h4 className="text-xl text-neutral-900 mb-1">
                    <EditorialText><span className="font-semibold">Air-gapped by design</span></EditorialText>
                  </h4>
                  <p className="text-lg text-neutral-500 leading-snug">
                    <EditorialText>Works perfectly in airplane mode. Zero server calls.</EditorialText>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center shrink-0">
                  <Icon name="check" className="w-3.5 h-3.5 text-neutral-700" />
                </div>
                <div>
                  <h4 className="text-xl text-neutral-900 mb-1">
                    <EditorialText><span className="font-semibold">Local Vector Store</span></EditorialText>
                  </h4>
                  <p className="text-lg text-neutral-500 leading-snug">
                    <EditorialText>Your memories are stored in an encrypted database on-device.</EditorialText>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center shrink-0">
                  <Icon name="check" className="w-3.5 h-3.5 text-neutral-700" />
                </div>
                <div>
                  <h4 className="text-xl text-neutral-900 mb-1">
                    <EditorialText><span className="font-semibold">Optimized for Silicon</span></EditorialText>
                  </h4>
                  <p className="text-lg text-neutral-500 leading-snug">
                    <EditorialText>Built specifically for Apple Neural Engine & Android NPUs.</EditorialText>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="manifesto" className="max-w-5xl mx-auto mb-32 text-center">
          <div className="bg-white/40 backdrop-blur-md border border-white/50 p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/40 to-transparent"></div>
            
            <div className="relative z-10">
              <Icon name="quote" className="w-10 h-10 mx-auto text-neutral-400 mb-8 opacity-50" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-neutral-800 leading-tight mb-10">
                <EditorialText center>"It doesn't feel like a tool. It feels like a presence. We sat by the river, I spoke about my fears, and it just... listened. It remembered context from three weeks ago."</EditorialText>
              </h2>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/50">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <div className="text-lg font-medium text-neutral-900">
                    <EditorialText>Elena R.</EditorialText>
                  </div>
                  <div className="text-base text-neutral-500">
                    <EditorialText>Beta Explorer</EditorialText>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto mb-20">
          <div className="bg-neutral-900 rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-6xl md:text-8xl font-light text-[#F3F2EF] mb-8 tracking-tight">
                <EditorialText center>Ready to meet<br />your companion?</EditorialText>
              </h2>
              <p className="text-2xl text-neutral-400 mb-12 font-light">
                <EditorialText center>
                  Experience the calm of a technology that works for you, stays with you, and never sells you out.
                </EditorialText>
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="bg-[#F3F2EF] text-neutral-900 px-8 py-4 rounded-full text-xl hover:bg-white transition-all shadow-lg flex items-center justify-center gap-3">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.98 1.07-3.11-1.04.05-2.29.69-3.02 1.55-.67.78-1.26 2.05-1.11 3.17 1.16.09 2.34-.78 3.06-1.61z"></path>
                  </svg>
                  <EditorialText>Download for iOS</EditorialText>
                </button>
                <button className="bg-transparent border border-neutral-700 text-[#F3F2EF] px-8 py-4 rounded-full text-xl hover:bg-neutral-800 transition-all">
                  <EditorialText>Read Research Paper</EditorialText>
                </button>
              </div>
              
              <div className="mt-12 flex justify-center items-center gap-8 opacity-50">
                <SansText className="text-sm text-neutral-400 uppercase tracking-widest">v1.0.4 Stable</SansText>
                <div className="w-1 h-1 bg-neutral-600 rounded-full"></div>
                <SansText className="text-sm text-neutral-400 uppercase tracking-widest">Requires iOS 17+</SansText>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white/30 backdrop-blur-md border-t border-neutral-200/50 pt-16 pb-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-sm">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded-full bg-neutral-900 flex items-center justify-center text-white text-xs">A</div>
                <span className="text-xl font-medium text-neutral-900">
                  <EditorialText>Advanced Voice Assistant</EditorialText>
                </span>
              </div>
              <p className="text-lg text-neutral-600">
                <EditorialText>The offline companion for the modern mind. Tranquil, private, and always present.</EditorialText>
              </p>
            </div>
            
            <div className="flex gap-16">
              <div className="flex flex-col gap-4">
                <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest">
                  <SansText>Product</SansText>
                </h4>
                <a href="#" className="text-lg text-neutral-600 hover:text-neutral-900">
                  <EditorialText>Download</EditorialText>
                </a>
                <a href="#" className="text-lg text-neutral-600 hover:text-neutral-900">
                  <EditorialText>Changelog</EditorialText>
                </a>
                <a href="#" className="text-lg text-neutral-600 hover:text-neutral-900">
                  <EditorialText>Waitlist</EditorialText>
                </a>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest">
                  <SansText>Company</SansText>
                </h4>
                <a href="#" className="text-lg text-neutral-600 hover:text-neutral-900">
                  <EditorialText>Manifesto</EditorialText>
                </a>
                <a href="#" className="text-lg text-neutral-600 hover:text-neutral-900">
                  <EditorialText>Twitter</EditorialText>
                </a>
                <a href="#" className="text-lg text-neutral-600 hover:text-neutral-900">
                  <EditorialText>Contact</EditorialText>
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-200/50">
            <p className="text-neutral-500 text-lg">
              <EditorialText>© 2024 Advanced Voice Assistant Inc.</EditorialText>
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-neutral-500 hover:text-neutral-900 text-lg">
                <EditorialText>Privacy Policy</EditorialText>
              </a>
              <a href="#" className="text-neutral-500 hover:text-neutral-900 text-lg">
                <EditorialText>Terms of Service</EditorialText>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;