import React from 'react';

const Background = () => {
    return (
        <>
            <div className="noise-overlay"></div>
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
                <div className="gradient-orb orb-4"></div>
            </div>
        </>
    );
};

export default Background;
