import React from 'react';

const SectionHeader = ({ title, italicPart, description, className = '', delay = '0ms' }) => {
    return (
        <div className={`mb-20 reveal ${className}`} style={{ transitionDelay: delay }}>
            <h2 className="text-5xl md:text-7xl text-stone-900 mb-8 font-serif">
                {title} {italicPart && <em className="text-stone-500 italic">{italicPart}</em>}
            </h2>
            {description && (
                <p className="text-xl md:text-2xl text-stone-600 max-w-3xl font-light font-sans">
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
