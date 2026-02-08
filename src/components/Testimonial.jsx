import React from 'react';
import { Quote } from 'lucide-react';
import Card from './ui/Card';

const Testimonial = () => {
    return (
        <section id="testimonial" className="max-w-5xl mx-auto mb-32 text-center reveal">
            <Card className="p-12 md:p-20 relative overflow-hidden" delay="0ms">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/40 to-transparent"></div>

                <div className="relative z-10">
                    <Quote className="mx-auto text-stone-400 mb-8 opacity-50 w-10 h-10" />

                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-stone-800 leading-tight leading-[0.8] mb-10">
                        <span className="editorial-center">"It doesn't feel like a tool. It feels like a presence. We sat by the river, I spoke about my fears, and it just... listened. It remembered context from three weeks ago."</span>
                    </h2>

                    <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden border border-white/50">
                            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-left">
                            <div className="text-lg font-medium text-stone-900 editorial">Elena R.</div>
                            <div className="text-base text-stone-500 editorial">Beta Explorer</div>
                        </div>
                    </div>
                </div>
            </Card>
        </section>
    );
};

export default Testimonial;
