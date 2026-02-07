import React from 'react';
import SectionHeader from './ui/SectionHeader';
import Badge from './ui/Badge';
import { IconImage, IconFileText } from './ui/Icons';

const ExpansionItem = ({ icon: Icon, title, description }) => (
    <div className="glass p-8 rounded-3xl border border-white/40 hover:bg-white/30 transition-all duration-500">
        <div className="w-12 h-12 rounded-xl bg-white/50 flex items-center justify-center text-stone-700 mb-5 shadow-sm">
            <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-2xl text-stone-900 mb-2 font-light">
            <span className="editorial">{title}</span>
        </h3>
        <p className="text-base text-stone-600 leading-relaxed font-light">
            <span className="editorial block w-[117.6%]">
                {description}
            </span>
        </p>
    </div>
);

const Expansion = () => {
    return (
        <section className="py-20 relative z-10">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <Badge className="mb-6">Coming Soon</Badge>
                    <h2 className="text-4xl md:text-5xl text-stone-900 font-light mb-4">
                        <span className="editorial-center">Expanding their memory.</span>
                    </h2>
                    <p className="text-lg text-stone-500 max-w-xl mx-auto font-light">
                        <span className="editorial-center block w-[117.6%] -ml-[8.8%]">
                            Soon, they'll understand images and documents—adding new layers to your shared memory.
                        </span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal" style={{ transitionDelay: '100ms' }}>
                    <ExpansionItem
                        icon={IconImage}
                        title="Visual Context Sharing"
                        description="Show them a photo or image during your conversation. Discuss what you see, get insights, and build visual memories together."
                    />
                    <ExpansionItem
                        icon={IconFileText}
                        title="Document Memory"
                        description="Share text files—your journal entries, notes, wishlists, ideas. They'll remember it all, connecting the threads of your thoughts."
                    />
                </div>
            </div>
        </section>
    );
};

export default Expansion;
