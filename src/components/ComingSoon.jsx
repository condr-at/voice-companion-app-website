import React from 'react';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';
import Badge from './ui/Badge';
import { IconImage, IconFileText } from './ui/Icons';

const ComingSoonItem = ({ icon: Icon, title, description, delay }) => (
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

const ComingSoon = () => {
    return (
        <section id="coming-soon" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-start">
                    <Badge className="mb-6">Coming Soon</Badge>
                    <SectionHeader
                        title="Expanding my"
                        italicPart="knowledge of you."
                        description="Soon, I'll understand images and documents—adding new layers to our shared story."
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ComingSoonItem
                        icon={IconImage}
                        title="Your world visually"
                        description="Show me a photo or image during our conversation. I'll understand it and we'll discuss it together."
                        delay="100ms"
                    />
                    <ComingSoonItem
                        icon={IconFileText}
                        title="Your life story"
                        description="Share text files—your journal entries, notes, wishlists, ideas. I'll remember it all."
                        delay="200ms"
                    />
                </div>
            </div>
        </section>
    );
};

export default ComingSoon;
