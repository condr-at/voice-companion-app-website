import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    className = '',
    icon: Icon,
    onClick,
    href,
    target,
    rel,
    type = 'button',
    ...props
}) => {
    const baseStyles = "px-6 py-2 rounded-full transition-all active:scale-95 flex items-center justify-center gap-2 font-medium cursor-pointer";

    const variants = {
        primary: "bg-stone-900 hover:bg-stone-800 text-stone-50 shadow-lg hover:scale-[1.02]",
        glass: "bg-white/40 backdrop-blur-md border border-white/50 text-stone-800 hover:bg-white/60 hover:shadow-lg hover:scale-[1.02]",
        outline: "bg-transparent border border-stone-700 text-[#F3F2EF] hover:bg-stone-800 hover:scale-[1.02]",
        nav: "bg-stone-900 hover:bg-stone-800 text-stone-50 px-6 shadow-lg hover:scale-[1.02]",
        heroPrimary: "group relative px-10 py-5 bg-stone-900 text-stone-50 overflow-hidden shadow-xl shadow-stone-900/10 hover:scale-[1.02]",
        heroGlass: "px-10 py-5 bg-white/40 backdrop-blur-md border border-white/50 text-stone-800 hover:bg-white/60 hover:shadow-lg hover:scale-[1.02]",
        ctaPrimary: "bg-[#F3F2EF] text-stone-900 px-8 py-4 text-xl hover:bg-white shadow-lg hover:scale-[1.02]",
        ctaOutline: "bg-transparent border border-stone-700 text-[#F3F2EF] px-8 py-4 text-xl hover:bg-stone-800 hover:scale-[1.02]"
    };

    const currentVariant = variants[variant] || variants.primary;
    const Component = href ? 'a' : 'button';
    const componentProps = href
        ? { href, target, rel }
        : { type };

    return (
        <Component
            className={`${baseStyles} ${currentVariant} ${className} origin-center`}
            onClick={onClick}
            {...componentProps}
            {...props}
        >
            {variant === 'heroPrimary' && (
                <div className="absolute inset-0 bg-gradient-to-r from-stone-800 to-stone-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            )}
            <span className="relative z-10 flex items-center gap-2">
                {Icon && <Icon className="w-5 h-5" />}
                <span className="font-sans font-normal uppercase tracking-wider">{children}</span>
            </span>
        </Component>
    );
};

export default Button;
