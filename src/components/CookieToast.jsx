import React, { useState } from 'react';

const CookieToast = () => {
    const [open, setOpen] = useState(true);

    if (!open) {
        return null;
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 w-[90vw] max-w-sm">
            <div className="rounded-2xl border border-stone-200/70 bg-white/90 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-5">
                <div className="flex items-start gap-4">
                    <div className="flex-1 space-y-2">
                        <p className="text-3xl text-stone-900 font-serif">
                            No cookies for Zuck
                        </p>
                        <p className="text-m text-stone-600 font-sans">
                            We do not collect cookies. Pretty cool, huh?
                        </p>
                    </div>
                </div>
                <div className="mt-4 flex justify-start">
                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-sans text-stone-700 transition hover:border-stone-300 hover:text-stone-900"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieToast;
