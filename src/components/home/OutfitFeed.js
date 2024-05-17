import React, { useEffect, useState } from 'react';
import OutfitCard from './OutfitCard';
import outfitsData from '../../data/outfits.json';

export default function OutfitFeed({ onAddOutfit }) {
    const [outfits, setOutfits] = useState([]);

    useEffect(() => {
        setOutfits(outfitsData);
    }, []);

    return (
        <main role="main">
            <div className="buttons-desktop feed">
                <a className="cta-button" onClick={onAddOutfit} role="button">
                    <img src="/icon/plus%20hanger.svg" alt="clothes hanger and plus sign" />
                    Add Outfit
                </a>

                <div className="feed-toggle">
                    <nav className="icon-feed">
                        <a href="index.html">
                            <svg className="icon-svg" width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="icon / feed">
                                    <path id="Vector 1" d="M0 4V0H20V4H0Z" fill="#2F3F77" />
                                    <path id="Vector 3" d="M0 24V19H20V24H0Z" fill="#2F3F77" />
                                    <path id="Vector 2" d="M0 17V6H20V17H0Z" fill="#2F3F77" />
                                </g>
                            </svg>
                        </a>
                    </nav>
                </div>
            </div>

            <section className="outfit-list">
                {outfits.map(outfit => (
                    <OutfitCard
                        key={outfit.id}
                        outfitName={outfit.outfitName}
                        outfitDate={outfit.outfitDate}
                        imageUrl={outfit.imageUrl}
                    />
                ))}
            </section>
        </main>
    );
}
