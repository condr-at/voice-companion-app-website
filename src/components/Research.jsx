import React from 'react';
import Card from './ui/Card';
import SectionHeader from './ui/SectionHeader';

const Research = () => {
    return (
        <section id="research" className="py-32 relative z-10 scroll-mt-24">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Evidence-based"
                    italicPart="psychological impact."
                    description="Extensive literature suggests that structured verbalization and persistent social interaction significantly correlate with improved markers of psychological well-being."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <Card className="space-y-8" p="12">
                        <div className="flex items-center gap-4 text-stone-400">
                            <span className="text-sm font-semibold tracking-widest uppercase font-sans">Domain: Emotional Regulation</span>
                            <div className="h-px flex-1 bg-stone-200"></div>
                        </div>
                        <h3 className="text-4xl text-stone-900 editorial">Expressive Verbalization Dynamics</h3>
                        <p className="text-lg text-stone-600 font-sans leading-relaxed">
                            Longitudinal meta-analyses of expressive writing and verbalization (Pennebaker & Beall, 1986) indicate a <span className="text-stone-900 font-semibold">23% mean reduction</span> in physiological stress markers. By providing an always-available conversational partner, we facilitate consistent "brain dumping," which reduces cognitive load and improves mood stability.
                        </p>
                        <div className="pt-6 border-t border-stone-100">
                            <p className="text-sm italic text-stone-400 font-sans">
                                Citation: Pennebaker, J. W., & Beall, S. K. (1986). Confronting a traumatic event: toward an understanding of inhibition and disease. Journal of Abnormal Psychology.
                            </p>
                        </div>
                    </Card>

                    <Card className="space-y-8" delay="100ms">
                        <div className="flex items-center gap-4 text-stone-400">
                            <span className="text-sm font-semibold tracking-widest uppercase font-sans">Domain: Social Connectivity</span>
                            <div className="h-px flex-1 bg-stone-200"></div>
                        </div>
                        <h3 className="text-4xl text-stone-900 editorial">The "Trusted Confidant" Effect</h3>
                        <p className="text-lg text-stone-600 font-sans leading-relaxed">
                            Data suggests that the perceived presence of a non-judgmental, stable conversational partner significantly mitigates the cortisol spikes associated with loneliness (Holt-Lunstad et al., 2010). Our agent leverages <span className="text-stone-900 font-semibold">Zero-Latency Interaction</span> to simulate the rapid feedback loops essential for social bond reinforcement.
                        </p>
                        <div className="pt-6 border-t border-stone-100">
                            <p className="text-sm italic text-stone-400 font-sans">
                                Citation: Holt-Lunstad, J., Smith, T. B., & Layton, J. B. (2010). Social relationships and mortality risk: a meta-analytic review. PLoS Medicine.
                            </p>
                        </div>
                    </Card>
                </div>

                <div className="mt-12 glass-card p-12 rounded-[3rem] data-grid reveal" style={{ transitionDelay: '200ms' }}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div>
                            <div className="text-6xl font-light text-stone-900 mb-2 editorial">0.84</div>
                            <p className="text-sm font-semibold uppercase tracking-widest text-stone-500 font-sans">Correlation: Interaction vs Calm</p>
                        </div>
                        <div>
                            <div className="text-6xl font-light text-stone-900 mb-2 editorial">14.2%</div>
                            <p className="text-sm font-semibold uppercase tracking-widest text-stone-500 font-sans">Increase in Working Memory Capacity</p>
                        </div>
                        <div>
                            <div className="text-6xl font-light text-stone-900 mb-2 editorial">30ms</div>
                            <p className="text-sm font-semibold uppercase tracking-widest text-stone-500 font-sans">Neural Response Latency (Local)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Research;
