import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    className = '',
    icon: Icon,
    onClick,
    ...props
}) => {
    const baseStyles = "px-6 py-2 rounded-full transition-all active:scale-95 flex items-center justify-center gap-2 font-medium editorial";

    const variants = {
        primary: "bg-stone-900 hover:bg-stone-800 text-stone-50 shadow-lg hover:scale-105",
        glass: "bg-white/40 backdrop-blur-md border border-white/50 text-stone-800 hover:bg-white/60 hover:shadow-lg",
        outline: "bg-transparent border border-stone-700 text-[#F3F2EF] hover:bg-stone-800",
        nav: "bg-stone-900 hover:bg-stone-800 text-stone-50 px-6 py-2 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center gap-2",
        heroPrimary: "group relative px-10 py-5 bg-stone-900 text-stone-50 rounded-full overflow-hidden transition-all hover:scale-105 shadow-xl shadow-stone-900/10",
        heroGlass: "px-10 py-5 bg-white/40 backdrop-blur-md border border-white/50 text-stone-800 rounded-full hover:bg-white/60 transition-all hover:shadow-lg flex items-center gap-3",
        ctaPrimary: "bg-[#F3F2EF] text-stone-900 px-8 py-4 rounded-full text-xl hover:bg-white transition-all shadow-lg flex items-center justify-center gap-3 editorial",
        ctaOutline: "bg-transparent border border-stone-700 text-[#F3F2EF] px-8 py-4 rounded-full text-xl hover:bg-stone-800 transition-all editorial"
    };

    const currentVariant = variants[variant] || variants.primary;

    return (
        <button
            className={`${currentVariant} ${className}`}
            onClick={onClick}
            {...props}
        >
            {variant === 'heroPrimary' && (
                <div className="absolute inset-0 bg-gradient-to-r from-stone-800 to-stone-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            )}
            <span className="relative z-10 flex items-center gap-2">
                {Icon && <Icon className="w-5 h-5" />}
                {children}
            </span>
        </button>
    );
};

export default Button;
