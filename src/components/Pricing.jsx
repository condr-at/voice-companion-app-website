import React from 'react';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';
import Button from './ui/Button';
import { scrollToSection } from '../utils/scroll';

const Pricing = () => {
    return (
        <section id="pricing" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-start">
                    <SectionHeader
                        title="Simple pricing."
                        italicPart="Free in beta."
                        description="We’re shaping the companion together with early users. Beta access costs nothing, and you keep full privacy."
                    />
                </div>

                <Card className="p-10 md:p-16 relative overflow-hidden" delay="0ms">
                    <div className="absolute inset-0 opacity-40 pointer-events-none">
                        <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-emerald-100 rounded-full blur-[90px] mix-blend-multiply"></div>
                        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-amber-100 rounded-full blur-[90px] mix-blend-multiply"></div>
                    </div>

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
                        <div className="space-y-8">
                            <h3 className="text-5xl md:text-6xl text-stone-900 leading-[1.05]">
                                Beta access,
                                {' '}
                                <em className="text-stone-500 italic">on us.</em>
                            </h3>
                            <p className="text-xl text-stone-700 font-light leading-relaxed font-sans">
                                No credit card. No hidden tiers. Just companion on your phone while we refine the experience together.
                            </p>
                        </div>

                        <div className="bg-white/60 border border-white/70 rounded-[2rem] p-10 text-center shadow-lg">
                            <div className="text-sm uppercase tracking-widest text-stone-500 font-sans">Beta</div>
                            <div className="text-6xl md:text-7xl text-stone-900 mt-4 mb-2 editorial-fit-center">Free</div>
                            <div className="text-base text-stone-500 font-sans mb-8">for early access</div>
                            <Button className="mx-auto" variant="heroPrimary" onClick={() => scrollToSection('#cta')}>
                                Join Beta (Android)
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default Pricing;
