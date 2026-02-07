import React from 'react';
import Card from './ui/Card';
import { IconPulse, IconBolt, IconMic } from './ui/Icons';

const FeatureItem = ({ icon: Icon, title, description, delay }) => (
    <Card className="justify-between min-h-[400px]" delay={delay}>
        <div>
            <div className="w-16 h-16 rounded-2xl bg-white/60 flex items-center justify-center text-stone-800 mb-8 shadow-sm">
                <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-4xl text-stone-900 mb-4 font-normal">
                <span className="editorial">{title}</span>
            </h3>
        </div>
        <p className="text-xl text-stone-600 leading-relaxed font-light">
            <span className="editorial w-[117.6%] block">
                {description}
            </span>
        </p>
    </Card>
);

const Features = () => {
    return (
        <section id="features" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureItem
                        icon={IconPulse}
                        title="True Offline"
                        description="Powered entirely by the Neural Engine. Your data never leaves your phone. Works in the subway, on a flight, or in the deep woods."
                        delay="0ms"
                    />
                    <FeatureItem
                        icon={IconBolt}
                        title="Real-time"
                        description="Conversations happen at the speed of thought. No 'processing' pauses. Interrupt, laugh, and speak naturally just like with a friend."
                        delay="100ms"
                    />
                    <FeatureItem
                        icon={IconMic}
                        title="Infinite Memory"
                        description="It remembers every conversation, every detail, and context from months ago. It builds a deep, evolving understanding of who you are."
                        delay="200ms"
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;
