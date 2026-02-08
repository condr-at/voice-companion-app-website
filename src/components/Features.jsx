import React from 'react';
import Card from './ui/Card';
import SectionHeader from './ui/SectionHeader';
import { IconOffline, IconFlow, IconStories } from './ui/Icons';

const FeatureItem = ({ icon: Icon, title, description, delay }) => (
    <Card className="justify-between min-h-[320px]" delay={delay}>
        <div>
            <div className="w-16 h-16 rounded-2xl bg-white/60 flex items-center justify-center text-stone-800 mb-6 shadow-sm">
                <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-4xl text-stone-900 mb-2 font-normal">
                <span className="editorial">{title}</span>
            </h3>
        </div>
        <p className="text-lg text-stone-600 leading-relaxed font-light font-sans">
            {description}
        </p>
    </Card>
);

const Features = () => {
    return (
        <section id="features" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Always by your side."
                    italicPart="Built for trust."
                    description="Talk freely, whenever you need. Every word stays local, every memory stays yours. No clouds, no servers, just genuine connection."
                />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <FeatureItem
                        icon={IconOffline}
                        title="Always there"
                        description="In the middle of a flight or deep in the woods—your companion never needs a signal. It’s always there when you need to talk."
                        delay="0ms"
                    />
                    <FeatureItem
                        icon={IconFlow}
                        title="Natural flow"
                        description="Zero lag, zero processing pauses. Interrupt, laugh, or whisper—it follows the natural flow of your thoughts, not the speed of your internet."
                        delay="100ms"
                    />
                    <FeatureItem
                        icon={IconStories}
                        title="A shared history"
                        description="It doesn't just store data; it remembers your stories. It builds a deep understanding of your world, evolving with you through every conversation."
                        delay="200ms"
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;
