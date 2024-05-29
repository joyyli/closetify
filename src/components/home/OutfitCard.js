import React from 'react';

export default function OutfitCard({ outfitDate, imageUrl }) {
    return (
        <div className="card">
            <div className="card-header">
                <h1>{outfitDate}</h1>
            </div>
            <div className="card-content glass">
                <div className="card-img">
                    <img src={imageUrl} alt={outfitDate} />
                </div>
            </div>
        </div>
    );
}