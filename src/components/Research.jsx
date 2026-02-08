import React from 'react';
import Card from './ui/Card';
import SectionHeader from './ui/SectionHeader';

const Research = () => {
    return (
        <section id="research" className="py-32 relative z-10 scroll-mt-24">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Scientifically"
                    italicPart="validated support."
                    description="Recent meta-analyses of clinical trials confirm that AI-based conversational agents significantly reduce distress, depression, and anxiety across diverse populations."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    <Card className="space-y-8" delay="0ms">
                        <div className="flex items-center gap-4 text-stone-400">
                            <span className="text-sm font-semibold tracking-widest uppercase font-sans">Domain: Generative AI Support</span>
                            <div className="h-px flex-1 bg-stone-200"></div>
                        </div>
                        <h3 className="text-5xl text-stone-900 no-squeeze editorial-fit-wrap"><span className="editorial-fit">Socially-Oriented Interaction</span></h3>
                        <p className="text-lg text-stone-600 font-sans leading-relaxed">
                            Large-scale analysis of 6,314 participants confirms that GenAI chatbots significantly mitigate negative affective states <span className="text-stone-900 font-semibold">(ES = 0.30)</span>. Socially-oriented bots for emotional support outperformed task-oriented systems.
                        </p>
                        <div className="mt-auto pt-6 border-t border-stone-100">
                            <p className="text-sm italic text-stone-400 font-sans leading-snug">
                                Citation: <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12707440/" target="_blank" rel="noopener noreferrer" className="hover:text-stone-600 underline decoration-stone-200 underline-offset-4 transition-colors">Zhang et al. (2025). The efficacy of generative AI chatbots on mental health outcomes. PMC12707440.</a>
                            </p>
                        </div>
                    </Card>

                    <Card className="space-y-8" delay="100ms">
                        <div className="flex items-center gap-4 text-stone-400">
                            <span className="text-sm font-semibold tracking-widest uppercase font-sans">Domain: Adolescent Psychology</span>
                            <div className="h-px flex-1 bg-stone-200"></div>
                        </div>
                        <h3 className="text-5xl text-stone-900 no-squeeze editorial-fit-wrap"><span className="editorial-fit">Youth Distress Mitigation</span></h3>
                        <p className="text-lg text-stone-600 font-sans leading-relaxed">
                            A systematic study of 29,637 participants shows a consistent reduction in <span className="text-stone-900 font-semibold">psychological distress (SMD = -0.35)</span> among youth. Generative AI models were highlighted as a particularly promising frontier for engagement.
                        </p>
                        <div className="mt-auto pt-6 border-t border-stone-100">
                            <p className="text-sm italic text-stone-400 font-sans leading-snug">
                                Citation: <a href="https://pubmed.ncbi.nlm.nih.gov/41313175/" target="_blank" rel="noopener noreferrer" className="hover:text-stone-600 underline decoration-stone-200 underline-offset-4 transition-colors">Lyu et al. (2025). Digital conversational agents for psychological distress in youth. PubMed 41313175.</a>
                            </p>
                        </div>
                    </Card>
                </div>

                <div className="mt-12 glass-card p-12 rounded-[3rem] data-grid reveal" style={{ transitionDelay: '300ms' }}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <div className="text-6xl font-light text-stone-900 mb-2 editorial">Evidence Based</div>
                        </div>
                        <div>
                            <div className="text-6xl font-light text-stone-900 mb-2 editorial">35,951 Participants</div>
                        </div>
                        <div>
                            <div className="text-6xl font-light text-stone-900 mb-2 editorial">30%<br />Less Stress</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Research;
