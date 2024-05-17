import React from 'react';
import AddOutfitButton from './AddOutfitButton';

export default function OutfitFeed({ outfits, onAddOutfit }) {
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

            <section class="outfit-list">
            <div class="card">
                <div class="card-header">
                    <h1>Saturday, April 13</h1>
                </div>
                <div class="card-content glass">
                    <p>Outfit name</p>
                    <div class="card-img"> <img src="img/bc9bad3ed5a4c7222ae84a8294815f5a.jpg"
                            alt="sample of a styled outfit" />
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h1>Friday, April 12</h1>
                </div>
                <div class="card-content glass">
                    <p>Outfit name</p>
                    <div class="card-img"> <img src="img/5398cde0292f3bde92c83d182da9766f.jpg"
                            alt="sample of a styled outfit" />
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h1>Thursday, April 11</h1>
                </div>
                <div class="card-content glass">
                    <p>Outfit name</p>
                    <div class="card-img"> <img src="img/eb2a27115c028c5f79b9e820e12c01ce.jpg"
                            alt="sample of a styled outfit" />
                    </div>
                </div>
            </div>
            <div class="layer-icon">
                <a href="styleoutfit.html"><img src="icon/Property 1=add outfit.svg" alt="Add outfit icon" /></a>

            </div>
        </section>
        </main>
    );
}