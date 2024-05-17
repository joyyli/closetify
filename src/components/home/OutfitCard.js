import React from 'react';

export default function OutfitCard({ outfitName, outfitDate, imageUrl }) {
    return (
        <div className="card">
            <div className="card-header">
                <h1>{outfitDate}</h1>
            </div>
            <div className="card-content glass">
            <p>{outfitName}</p>
                <div className="card-img">
                    <img src={imageUrl} alt={outfitDate} />
                </div>
            </div>
        </div>
    );
}