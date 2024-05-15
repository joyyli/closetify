import React, { useState } from 'react';

function FeedToggle({ onToggle }) {
    const [activeView, setActiveView] = useState('mycloset');

    const handleToggle = (view) => {
        setActiveView(view);
        onToggle(view);
    };

    return (
        <div className="feed-toggle">
            <button
                className={activeView === 'mycloset' ? 'active' : ''}
                onClick={() => handleToggle('mycloset')}
            >
                My Closet
            </button>
            <button
                className={activeView === 'outfitFeed' ? 'active' : ''}
                onClick={() => handleToggle('outfitFeed')}
            >
                Outfit Feed
            </button>
            <button
                className={activeView === 'calendar' ? 'active' : ''}
                onClick={() => handleToggle('calendar')}
            >
                Calendar
            </button>
        </div>
    );
}

export default FeedToggle;