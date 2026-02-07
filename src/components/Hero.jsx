import React from 'react';
import { scrollToSection } from '../utils/scroll';
import Button from './ui/Button';
import Badge from './ui/Badge';
import { IconMagic, IconFileText } from './ui/Icons';

const Hero = () => {
    return (
        <section className="max-w-6xl mx-auto text-center space-y-12 mb-32 min-h-[70vh] flex flex-col justify-center">
            <Badge ping>Cognitive Augmentation • Version 1.0</Badge>

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
                <Button variant="heroPrimary" icon={IconMagic}>
                    Start Speaking
                </Button>
                <Button
                    variant="heroGlass"
                    icon={IconFileText}
                    onClick={() => scrollToSection('#research')}
                >
                    Research Papers
                </Button>
            </div>
        </section>
    );
};

export default Hero;
