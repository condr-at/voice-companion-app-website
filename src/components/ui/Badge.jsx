import React from 'react';

const Badge = ({ children, className = '', ping = false }) => {
    return (
        <div className={`inline-flex items-center gap-3 px-5 py-2 rounded-full glass border border-white/60 mb-4 reveal ${className}`}>
            {ping && (
                <div className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </div>
            )}
            <span className="text-base tracking-wide text-stone-600 editorial font-semibold">
                {children}
            </span>
        </div>
    );
};

export default Badge;
