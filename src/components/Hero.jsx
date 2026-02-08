import React from 'react';
import { scrollToSection } from '../utils/scroll';
import Button from './ui/Button';
import Badge from './ui/Badge';
import { IconUserPlus, IconGraduationCap } from './ui/Icons';
import { BETA_FORM_URL } from '../lib/links';

const Hero = () => {
    return (
        <section className="max-w-6xl mx-auto text-center space-y-12 mb-32 min-h-[70vh] flex flex-col justify-center">
            <div className="flex flex-wrap justify-center gap-3 reveal">
                <Badge ping>Closed beta available</Badge>
                <Badge tag="SOON" pingVariant="yellow">Show photos and images to your companion</Badge>
            </div>


            <h1 className="text-7xl md:text-9xl font-light text-stone-900 leading-[0.85] tracking-tight reveal" style={{ transitionDelay: '100ms' }}>
                I'm here to listen.<br />
                <em className="italic text-stone-500">Always.</em>
            </h1>

            <p className="text-xl md:text-2xl font-light text-stone-600 max-w-2xl mx-auto leading-relaxed mt-8 reveal font-sans" style={{ transitionDelay: '200ms' }}>
                I'm your companion that lives right on your phone. Always here for you. Without any servers and internet. I remember your stories, understand your world, and keep every word strictly between us.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 reveal" style={{ transitionDelay: '400ms' }}>
                <Button
                    variant="heroPrimary"
                    icon={IconUserPlus}
                    href={BETA_FORM_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Join Beta
                </Button>
                <Button
                    variant="heroGlass"
                    icon={IconGraduationCap}
                    onClick={() => scrollToSection('#research')}
                >
                    Read Papers
                </Button>
            </div>
        </section>
    );
};

export default Hero;
