import React, { useState, useEffect } from 'react';
import { IconMenu, IconClose } from './ui/Icons';
import { scrollToSection } from '../utils/scroll';
import Button from './ui/Button';
import JoinBetaLabel from './ui/JoinBetaLabel';
import { BETA_FORM_URL } from '../lib/links';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Research', href: '#research' },
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Manifesto', href: '#privacy_manifesto' },
        { name: 'Coming Soon', href: '#coming-soon' },
        { name: 'FAQ', href: '#faq' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavClick = (href) => {
        setIsOpen(false);
        if (href === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            scrollToSection(href);
        }
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className={`flex justify-between items-center glass px-6 py-3 rounded-full transition-all duration-500 ${scrolled ? 'shadow-lg bg-white/40' : ''}`}>
                    <a
                        href="#"
                        className="flex items-center gap-2 group"
                        onClick={(e) => { e.preventDefault(); handleNavClick('#'); }}
                    >
                        <div className="w-8 h-8 rounded-full border border-stone-400/50 flex items-center justify-center bg-white/20 backdrop-blur-sm transition-transform group-hover:scale-110">
                            <span className="text-lg font-sans text-stone-900 leading-none" aria-label="Logo ampersand">&amp;</span>
                        </div>
                        <span className="text-xl font-semibold tracking-tight text-stone-900 editorial">Voice Companion</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                                className="text-sm font-sans font-normal uppercase tracking-widest text-stone-600 hover:text-stone-900 transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <div className="hidden lg:block">
                        <Button
                            variant="nav"
                            href={BETA_FORM_URL}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <JoinBetaLabel />
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-stone-900 hover:bg-stone-100 rounded-full transition-colors focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <IconClose /> : <IconMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <div
                className={`fixed inset-0 bg-stone-50/95 backdrop-blur-xl z-[-1] lg:hidden transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                            className="text-2xl font-serif text-stone-900 tracking-tight hover:text-stone-600 transition-colors editorial"
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="mt-4 w-full max-w-xs">
                        <Button
                            variant="nav"
                            href={BETA_FORM_URL}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="w-full py-4 text-lg"
                        >
                            <JoinBetaLabel />
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
