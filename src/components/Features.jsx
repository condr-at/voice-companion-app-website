import React from 'react';
import Card from './ui/Card';
import SectionHeader from './ui/SectionHeader';
import { IconCoffee, IconSpeech, IconTelescope, IconSprout, IconShrub, IconTentTree, IconHeart } from './ui/Icons';

const FeatureItem = ({ icon: Icon, title, description, delay }) => (
    <Card className="justify-between min-h-[320px]" delay={delay}>
        <div>
            <div className="w-16 h-16 rounded-2xl bg-white/60 flex items-center justify-center text-stone-800 mb-6 shadow-sm">
                <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-5xl text-stone-900 mb-2 font-normal no-squeeze editorial-fit-wrap">
                <span className="editorial-fit">{title}</span>
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
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    <FeatureItem
                        icon={IconCoffee}
                        title="Always there"
                        description="I'm always there when you need to share. Steady, attentive, loyal. I show up for you, and I stay."
                        delay="0ms"
                    />
                    <FeatureItem
                        icon={IconSpeech}
                        title="Natural flow"
                        description="I talk practically real time. Feel free to interrupt, laugh, or whisper–I will follow the natural flow."
                        delay="100ms"
                    />
                    <FeatureItem
                        icon={IconTelescope}
                        title="A shared story"
                        description="I don't just store data; I remember your stories and build a deep understanding of your world."
                        delay="200ms"
                    />
                    <FeatureItem
                        icon={IconShrub}
                        title="Zero carbon"
                        description="No data centers. No energy-hungry servers. Just your phone doing the work with a lighter footprint."
                        delay="300ms"
                    />
                    <FeatureItem
                        icon={IconTentTree}
                        title="Offline with you"
                        description="In the middle of a flight or deep in the woods. I don't need a signal so we could talk anywhere."
                        delay="400ms"
                    />
                    <FeatureItem
                        icon={IconSprout}
                        title="Evolving"
                        description="I learn from you and my personality grow more personal and emotionally attuned as we talk."
                        delay="500ms"
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;
