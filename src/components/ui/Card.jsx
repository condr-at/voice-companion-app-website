import React from 'react';

const Card = ({ children, className = '', delay = '0ms', ...props }) => {
    return (
        <div
            className={`glass-card p-10 rounded-[2.5rem] flex flex-col reveal ${className}`}
            style={{ transitionDelay: delay }}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
