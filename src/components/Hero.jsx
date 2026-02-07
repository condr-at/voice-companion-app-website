import React from 'react';
import { scrollToSection } from '../utils/scroll';

const Hero = () => {
    return (
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
    );
};

export default Hero;
