import React from 'react';
import Button from './ui/Button';

const AppleIcon = () => (
    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.98 1.07-3.11-1.04.05-2.29.69-3.02 1.55-.67.78-1.26 2.05-1.11 3.17 1.16.09 2.34-.78 3.06-1.61z"></path>
    </svg>
);

const CallToAction = () => {
    return (
        <section id="cta" className="max-w-7xl mx-auto mb-20 reveal">
            <div className="bg-stone-900 rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">

                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3"></div>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-6xl md:text-8xl font-light text-[#F3F2EF] mb-8 tracking-tight">
                        <span className="editorial-center">Ready to meet<br />your companion?</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-stone-400 mb-12 font-light font-sans">
                        Experience the calm of a technology that works for you, stays with you, and never sells you out.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Button variant="ctaPrimary">
                            Join Beta
                        </Button>
                        {/* <Button variant="ctaOutline">
                            Read Research Paper
                        </Button> */}
                    </div>

                    <div className="mt-12 flex justify-center items-center gap-8 opacity-50">
                        <span className="text-sm text-stone-400 font-sans uppercase tracking-widest">v1.0.4 Stable</span>
                        <div className="w-1 h-1 bg-stone-600 rounded-full"></div>
                        <span className="text-sm text-stone-400 font-sans uppercase tracking-widest">Requires iOS 17+</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
