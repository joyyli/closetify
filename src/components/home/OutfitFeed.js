import React from 'react';

function OutfitFeed({ outfits }) {
    return (
        <div className="outfit-feed">
            {outfits.map(outfit => (
                <div className="outfit-item" key={outfit.id}>
                    <img src={outfit.image} alt={outfit.name} />
                    <div className="outfit-details">
                        <h3>{outfit.name}</h3>
                        <p>{outfit.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default OutfitFeed;