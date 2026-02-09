import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { IconClose } from './ui/Icons';
import { scrollToSection } from '../utils/scroll';
import { BETA_FORM_URL } from '../lib/links';

const Footer = () => {
    const [privacyOpen, setPrivacyOpen] = useState(false);

    useEffect(() => {
        if (!privacyOpen) {
            return;
        }

        const handleKeydown = (event) => {
            if (event.key === 'Escape') {
                setPrivacyOpen(false);
            }
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleKeydown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', handleKeydown);
        };
    }, [privacyOpen]);

    const handleSectionLink = (event, sectionId) => {
        event.preventDefault();
        scrollToSection(sectionId);
    };

    return (
        <footer className="border-t border-stone-200 bg-white/40 backdrop-blur-md relative z-10">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <a
                            href="#"
                            className="flex items-center gap-2 group"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        >
                            <div className="w-6 h-6 rounded-full border border-stone-400/50 flex items-center justify-center bg-white/20 backdrop-blur-sm transition-transform group-hover:scale-110">
                                <span className="text-sm font-sans text-stone-900 leading-none" aria-label="Logo ampersand">&amp;</span>
                            </div>
                            <span className="text-3xl md:text-2xl font-semibold tracking-tight text-stone-900 editorial">Voice Companion App</span>
                        </a>
                        <p className="text-stone-500 max-w-sm font-light text-2xl md:text-xl">
                            <span className="editorial block">
                                A personal approach to conversational AI. Designed for peace of mind, built for the evolution of human connection.
                            </span>
                        </p>
                    </div>

                    <div>
                        <h4 className="text-base md:text-sm font-semibold uppercase tracking-widest text-stone-400 mb-6 font-sans">Resources</h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#research"
                                    onClick={(event) => handleSectionLink(event, '#research')}
                                    className="text-stone-600 hover:text-stone-900 transition-colors editorial text-3xl md:text-2xl"
                                >
                                    Research Findings
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#privacy_manifesto"
                                    onClick={(event) => handleSectionLink(event, '#privacy_manifesto')}
                                    className="text-stone-600 hover:text-stone-900 transition-colors editorial text-3xl md:text-2xl"
                                >
                                    Privacy Manifesto
                                </a>
                            </li>
                            <li>
                                <a
                                    href={BETA_FORM_URL}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="text-stone-600 hover:text-stone-900 transition-colors editorial text-3xl md:text-2xl"
                                >
                                    Join Beta
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-base md:text-sm font-semibold uppercase tracking-widest text-stone-400 mb-6 font-sans">Company</h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#features"
                                    onClick={(event) => handleSectionLink(event, '#features')}
                                    className="text-stone-600 hover:text-stone-900 transition-colors editorial text-3xl md:text-2xl"
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#pricing"
                                    onClick={(event) => handleSectionLink(event, '#pricing')}
                                    className="text-stone-600 hover:text-stone-900 transition-colors editorial text-3xl md:text-2xl"
                                >
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#faq"
                                    onClick={(event) => handleSectionLink(event, '#faq')}
                                    className="text-stone-600 hover:text-stone-900 transition-colors editorial text-3xl md:text-2xl"
                                >
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-stone-200/50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-stone-400 text-sm font-sans">© 2026 Voice Companion App. • Peer-Reviewed Since 2025</p>
                    <div className="flex gap-6">
                        <button
                            type="button"
                            onClick={() => setPrivacyOpen(true)}
                            className="text-stone-400 hover:text-stone-600 text-sm font-sans"
                        >
                            Privacy Policy
                        </button>

                    </div>
                </div>
            </div>

            {privacyOpen && typeof document !== 'undefined' && createPortal(
                <div className="fixed inset-0 z-[60] flex items-center justify-center px-2 sm:px-4 py-8">
                    <button
                        type="button"
                        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
                        aria-label="Close privacy policy"
                        onClick={() => setPrivacyOpen(false)}
                    />
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="privacy-policy-title"
                        className="relative w-full max-w-2xl rounded-3xl bg-white shadow-2xl border border-stone-200/70"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="flex items-center justify-between px-3 sm:px-6 py-5 border-b border-stone-200/80">
                            <div className="flex flex-col">
                                <h3 id="privacy-policy-title" className="text-2xl text-stone-900 font-sans">
                                    Privacy Policy
                                </h3>
                                <span className="text-xs uppercase tracking-widest text-stone-400 font-sans">
                                    Last updated: February 8, 2026
                                </span>
                            </div>
                            <button
                                type="button"
                                onClick={() => setPrivacyOpen(false)}
                                className="rounded-full p-2 text-stone-500 hover:text-stone-700 hover:bg-stone-100 transition"
                                aria-label="Close privacy policy"
                            >
                                <IconClose />
                            </button>
                        </div>
                        <div className="px-3 sm:px-6 py-6 max-h-[70vh] overflow-y-auto text-stone-700 font-sans space-y-4">
                            <p>
                                This site is intentionally simple. We do not use cookies, analytics, or tracking pixels, and we do not collect
                                personal data directly on this website.
                            </p>
                            <p>
                                If you choose to join the beta, you will be redirected to a Google Form. The information you submit there (such as
                                your email and optional responses) is handled by Google and shared with us as the form owner. Google may collect
                                standard log data like IP address and device details.
                            </p>
                            <p>
                                We load fonts from Google Fonts so the site looks consistent across devices. This means your browser connects to
                                Google's servers to fetch font files.
                            </p>
                            <p>
                                We may update this policy if the product changes. If you have questions, use the beta form linked here:{' '}
                                <a
                                    href={BETA_FORM_URL}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="underline decoration-stone-300 underline-offset-4"
                                >
                                    Join Beta
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </footer>
    );
};

export default Footer;
