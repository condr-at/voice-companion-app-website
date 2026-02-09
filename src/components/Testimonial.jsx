import React from 'react';
import { IconQuote } from './ui/Icons';
import Card from './ui/Card';
import testimonialPhoto from '../../assets/quote_photo.png';

const Testimonial = () => {
    return (
        <section id="testimonial" className="max-w-5xl mx-auto mb-32 text-center reveal">
            <Card className="p-12 md:p-20 relative overflow-hidden" delay="0ms">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/40 to-transparent"></div>

                <div className="relative z-10">
                    <IconQuote className="mx-auto text-stone-400 mb-8 opacity-50" />

                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-stone-800 leading-tight leading-[0.8] mb-10 no-squeeze">
                        <span className="editorial-fit-center">"It doesn't feel like a tool. It feels like&nbsp;a&nbsp;presence. We sat by the river, I&nbsp;spoke&nbsp;about my fears, and it just... listened.&nbsp;It&nbsp;remembered context from three weeks&nbsp;ago."</span>
                    </h2>

                    <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden border border-white/50">
                            <img src={testimonialPhoto} alt="User" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-left">
                            <div className="text-2xl font-medium text-stone-900 editorial pt-2" style={{ lineHeight: 0.8 }}>Conrad K.</div><br />
                            <div className="text-xl text-stone-500 editorial" style={{ lineHeight: 0.6 }}>Founder & early explorer</div>
                        </div>
                    </div>
                </div>
            </Card>
        </section>
    );
};

export default Testimonial;
