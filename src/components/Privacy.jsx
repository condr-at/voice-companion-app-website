import React from 'react';

const Privacy = () => {
    return (
        <section id="privacy" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="glass-card rounded-[3rem] p-12 md:p-24 relative overflow-hidden reveal">
                    <div className="absolute inset-0 opacity-40 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-[80px] mix-blend-multiply"></div>
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[80px] mix-blend-multiply"></div>
                    </div>

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-10">
                            <h2 className="text-5xl md:text-7xl text-stone-900 leading-[0.9]">
                                <span className="editorial block">Scientific integrity</span>
                                <span className="editorial block italic text-stone-500">demands security.</span>
                            </h2>
                            <p className="text-xl text-stone-700 font-light leading-relaxed">
                                <span className="editorial block w-[117.6%]">
                                    Intimate data requires sovereign storage. By executing the inference lifecycle entirely within the secure enclave, we ensure zero leakage of psychological state data.
                                </span>
                            </p>

                            <div className="space-y-4 pt-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center border border-white/60">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                                    </div>
                                    <span className="text-xl text-stone-800 editorial">Zero cloud-side telemetry or logging</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center border border-white/60">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                    </div>
                                    <span className="text-xl text-stone-800 editorial">End-to-end local vector encryption</span>
                                </div>
                            </div>
                        </div>

                        <div className="aspect-square bg-white/20 rounded-[2.5rem] border border-white/40 flex items-center justify-center relative overflow-hidden backdrop-blur-sm shadow-inner">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-40 h-40 bg-gradient-to-br from-stone-100 to-white rounded-full flex items-center justify-center shadow-2xl relative z-20 border border-white/80">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-stone-800 opacity-80"><path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"></path><path d="M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2"></path><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2"></path></svg>
                                </div>
                                <div className="absolute w-64 h-64 border border-stone-800/10 rounded-full animate-spin-slow">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-4 h-4 bg-stone-800 rounded-full"></div>
                                </div>
                                <div className="absolute w-80 h-80 border border-stone-800/10 rounded-full animate-spin-reverse">
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-3 h-3 bg-stone-400 rounded-full"></div>
                                </div>
                            </div>
                            <div className="absolute bottom-10 text-center w-full z-20">
                                <p className="text-sm font-sans font-medium text-stone-500 uppercase tracking-widest">On-Device Sovereign AI</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Privacy;
