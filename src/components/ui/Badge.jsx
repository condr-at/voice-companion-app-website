import React from 'react';

const Badge = ({ children, className = '', ping = false, pingVariant = 'green', tag = '' }) => {
    const variantClasses = {
        green: {
            ping: 'bg-emerald-400',
            dot: 'bg-emerald-500',
            tag: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20'
        },
        yellow: {
            ping: 'bg-amber-400',
            dot: 'bg-amber-500',
            tag: 'bg-amber-500/10 text-amber-600 border-amber-500/20'
        }
    };

    const colors = variantClasses[pingVariant] || variantClasses.green;

    return (
        <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass border border-white/60 reveal ${className}`}>
            {tag ? (
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md border ${colors.tag} leading-none tracking-wider font-sans uppercase`}>
                    {tag}
                </span>
            ) : ping && (
                <div className="relative flex h-2 w-2">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${colors.ping} opacity-75`}></span>
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${colors.dot}`}></span>
                </div>
            )}
            <span className="text-sm tracking-wide text-stone-600 font-sans font-normal">
                {children}
            </span>
        </div>
    );
};

export default Badge;
