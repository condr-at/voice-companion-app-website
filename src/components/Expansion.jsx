import React from 'react';

const Expansion = () => {
    return (
        <section className="py-20 relative z-10">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12 reveal">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/60 mb-6">
                        <span className="text-sm tracking-wide text-stone-500 uppercase font-sans font-semibold">Coming Soon</span>
                    </div>
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
                    <div className="glass p-8 rounded-3xl border border-white/40 hover:bg-white/30 transition-all duration-500">
                        <div className="w-12 h-12 rounded-xl bg-white/50 flex items-center justify-center text-stone-700 mb-5 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
                        </div>
                        <h3 className="text-2xl text-stone-900 mb-2 font-light">
                            <span className="editorial">Visual Context Sharing</span>
                        </h3>
                        <p className="text-base text-stone-600 leading-relaxed font-light">
                            <span className="editorial block w-[117.6%]">
                                Show them a photo or image during your conversation. Discuss what you see, get insights, and build visual memories together.
                            </span>
                        </p>
                    </div>

                    <div className="glass p-8 rounded-3xl border border-white/40 hover:bg-white/30 transition-all duration-500">
                        <div className="w-12 h-12 rounded-xl bg-white/50 flex items-center justify-center text-stone-700 mb-5 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line></svg>
                        </div>
                        <h3 className="text-2xl text-stone-900 mb-2 font-light">
                            <span className="editorial">Document Memory</span>
                        </h3>
                        <p className="text-base text-stone-600 leading-relaxed font-light">
                            <span className="editorial block w-[117.6%]">
                                Share text files—your journal entries, notes, wishlists, ideas. They'll remember it all, connecting the threads of your thoughts.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expansion;
