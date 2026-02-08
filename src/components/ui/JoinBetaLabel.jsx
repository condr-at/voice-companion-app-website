import React from 'react';

const JoinBetaLabel = ({ className = '', align = 'center' }) => {
    const alignment = align === 'start' ? 'items-start text-left' : 'items-center text-center';

    return (
        <span className={`inline-flex flex-col ${alignment} leading-none ${className}`}>
            <span>Join Beta</span>
            <span className="mt-1 text-[0.65em] tracking-[0.18em] text-stone-400 normal-case">Android</span>
        </span>
    );
};

export default JoinBetaLabel;
