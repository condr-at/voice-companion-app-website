import React from 'react';
import Card from './ui/Card';
import { IconShield, IconLock, IconBrain } from './ui/Icons';

const Privacy = () => {
    return (
        <section id="privacy" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto">
                <Card className="p-12 md:p-24 relative overflow-hidden" delay="0ms">
                    <div className="absolute inset-0 opacity-40 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-[80px] mix-blend-multiply"></div>
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[80px] mix-blend-multiply"></div>
                    </div>

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-10">
                            <h2 className="text-4xl md:text-5xl text-stone-900 leading-[0.9]">
                                <span className="editorial block">Intimacy demands</span>
                                <span className="editorial block italic text-stone-500">exceptional privacy</span>
                            </h2>
                            <p className="text-xl text-stone-700 font-light leading-relaxed font-sans">
                                Intimate data requires sovereign storage. By executing the inference lifecycle entirely within the secure enclave, we ensure zero leakage of psychological state data.
                            </p>

                            <div className="space-y-4 pt-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center border border-white/60">
                                        <IconShield className="text-stone-800" />
                                    </div>
                                    <span className="text-lg text-stone-800 font-sans font-normal">Zero cloud-side telemetry or logging</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center border border-white/60">
                                        <IconLock className="text-stone-800" />
                                    </div>
                                    <span className="text-lg text-stone-800 font-sans font-normal">End-to-end local vector encryption</span>
                                </div>
                            </div>
                        </div>

                        <div className="aspect-square bg-white/20 rounded-[2.5rem] border border-white/40 flex items-center justify-center relative overflow-hidden backdrop-blur-sm shadow-inner">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-40 h-40 bg-gradient-to-br from-stone-100 to-white rounded-full flex items-center justify-center shadow-2xl relative z-20 border border-white/80">
                                    <IconBrain className="text-stone-800 opacity-80" />
                                </div>
                                <div className="absolute w-64 h-64 border border-stone-800/10 rounded-full animate-spin-slow">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-4 h-4 bg-stone-800 rounded-full"></div>
                                </div>
                                <div className="absolute w-80 h-80 border border-stone-800/10 rounded-full animate-spin-reverse">
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-3 h-3 bg-stone-400 rounded-full"></div>
                                </div>
                            </div>
                            <div className="absolute bottom-10 text-center w-full z-20">
                                <p className="text-sm font-sans font-normal text-stone-500 uppercase tracking-widest">On-Device Sovereign AI</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default Privacy;
