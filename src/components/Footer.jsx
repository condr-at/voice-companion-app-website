import React from 'react';
import { scrollToSection } from '../utils/scroll';

const Footer = () => {
    return (
        <footer className="border-t border-stone-200 bg-white/40 backdrop-blur-md relative z-10">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <a href="#" className="flex items-center gap-2 group" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                            <div className="w-6 h-6 rounded-full border border-stone-400/50 flex items-center justify-center bg-white/20 backdrop-blur-sm transition-transform group-hover:scale-110">
                                <div className="w-1.5 h-1.5 bg-stone-900 rounded-full"></div>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-stone-900 editorial">Voice Companion App</span>
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
                    <p className="text-stone-400 text-sm font-sans">© 2024 Voice Companion App Inc. • Peer-Reviewed Since 2022</p>
                    <div className="flex gap-6">
                        <a href="#" className="text-stone-400 hover:text-stone-600 text-sm font-sans">Privacy Policy</a>
                        <a href="#" className="text-stone-400 hover:text-stone-600 text-sm font-sans">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
