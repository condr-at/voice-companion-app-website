import React from 'react';
import { scrollToSection } from '../utils/scroll';

const Navigation = () => {
    return (
        <nav className="fixed top-0 w-full z-40 px-6 py-6 transition-all duration-300">
            <div className="max-w-7xl mx-auto flex justify-between items-center glass px-6 py-3 rounded-full">
                <a href="#" className="flex items-center gap-2 group" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                    <div className="w-8 h-8 rounded-full border border-stone-400/50 flex items-center justify-center bg-white/20 backdrop-blur-sm transition-transform group-hover:scale-110">
                        <div className="w-2 h-2 bg-stone-900 rounded-full"></div>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-stone-900 editorial">Voice Companion App</span>
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
    );
};

export default Navigation;
