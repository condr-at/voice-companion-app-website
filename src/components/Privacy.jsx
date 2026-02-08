import React from 'react';
import Card from './ui/Card';
import { IconSmartphone, IconEyeOff, IconShield } from './ui/Icons';

const Privacy = () => {
    return (
        <section id="privacy_manifesto" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto">
                <Card className="p-10 md:p-20 relative overflow-hidden" delay="0ms">
                    <div className="absolute inset-0 opacity-40 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-[80px] mix-blend-multiply"></div>
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[80px] mix-blend-multiply"></div>
                    </div>

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
                        <div className="space-y-10">
                            <h2 className="text-5xl md:text-6xl text-stone-900 leading-[1.1]">
                                Safe to be{' '}
                                <em className="text-stone-500 italic">vulnerable</em>
                            </h2>
                            <p className="text-xl text-stone-700 font-light leading-relaxed font-sans">
                                To truly speak your mind, you need to know you're alone. Every word, every reflection, and every secret stays locked inside your device. Not because it’s "secure", but because it’s yours.
                            </p>

                            <div className="space-y-4 pt-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center border border-white/60">
                                        <IconSmartphone className="text-stone-800" />
                                    </div>
                                    <span className="text-lg text-stone-800 font-sans font-normal">Nothing ever leaves your phone</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center border border-white/60">
                                        <IconEyeOff className="text-stone-800" />
                                    </div>
                                    <span className="text-lg text-stone-800 font-sans font-normal">Your thoughts are for your eyes only</span>
                                </div>
                            </div>
                        </div>

                        <div className="aspect-square bg-white/20 rounded-[2.5rem] border border-white/40 flex items-center justify-center relative overflow-hidden backdrop-blur-sm shadow-inner">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-40 h-40 bg-gradient-to-br from-stone-100 to-white rounded-full flex items-center justify-center shadow-2xl relative z-20 border border-white/80">
                                    <IconShield size={64} className="text-stone-800 opacity-80" />
                                </div>
                                <div className="absolute w-64 h-64 border border-stone-800/10 rounded-full animate-spin-slow">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-4 h-4 bg-stone-800 rounded-full"></div>
                                </div>
                                <div className="absolute w-80 h-80 border border-stone-800/10 rounded-full animate-spin-reverse">
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-3 h-3 bg-stone-400 rounded-full"></div>
                                </div>
                            </div>
                            <div className="absolute bottom-10 text-center w-full z-20">
                                <p className="text-sm font-sans text-stone-500 uppercase tracking-widest flex items-center justify-center gap-2">
                                    <span>PRIVATE & OFFLINE BY DESIGN</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default Privacy;
