import React from 'react';

const Features = () => {
    return (
        <section id="features" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="glass-card p-10 rounded-[2.5rem] flex flex-col justify-between min-h-[400px] reveal">
                        <div>
                            <div className="w-16 h-16 rounded-2xl bg-white/60 flex items-center justify-center text-stone-800 mb-8 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="2" x2="2" y1="16.8" y2="19.8"></line><line x1="9" x2="9" y1="15" y2="19.8"></line><line x1="16" x2="16" y1="13" y2="19.8"></line><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path></svg>
                            </div>
                            <h3 className="text-4xl text-stone-900 mb-4 font-normal">
                                <span className="editorial">True Offline</span>
                            </h3>
                        </div>
                        <p className="text-xl text-stone-600 leading-relaxed font-light">
                            <span className="editorial w-[117.6%] block">
                                Powered entirely by the Neural Engine. Your data never leaves your phone. Works in the subway, on a flight, or in the deep woods.
                            </span>
                        </p>
                    </div>

                    <div className="glass-card p-10 rounded-[2.5rem] flex flex-col justify-between min-h-[400px] reveal" style={{ transitionDelay: '100ms' }}>
                        <div>
                            <div className="w-16 h-16 rounded-2xl bg-white/60 flex items-center justify-center text-stone-800 mb-8 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                            </div>
                            <h3 className="text-4xl text-stone-900 mb-4 font-normal">
                                <span className="editorial">Real-time</span>
                            </h3>
                        </div>
                        <p className="text-xl text-stone-600 leading-relaxed font-light">
                            <span className="editorial w-[117.6%] block">
                                Conversations happen at the speed of thought. No "processing" pauses. Interrupt, laugh, and speak naturally just like with a friend.
                            </span>
                        </p>
                    </div>

                    <div className="glass-card p-10 rounded-[2.5rem] flex flex-col justify-between min-h-[400px] reveal" style={{ transitionDelay: '200ms' }}>
                        <div>
                            <div className="w-16 h-16 rounded-2xl bg-white/60 flex items-center justify-center text-stone-800 mb-8 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M5 10a7.1 7.1 0 0 0 14 0"></path><path d="M12 12v10"></path></svg>
                            </div>
                            <h3 className="text-4xl text-stone-900 mb-4 font-normal">
                                <span className="editorial">Infinite Memory</span>
                            </h3>
                        </div>
                        <p className="text-xl text-stone-600 leading-relaxed font-light">
                            <span className="editorial w-[117.6%] block">
                                It remembers every conversation, every detail, and context from months ago. It builds a deep, evolving understanding of who you are.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
