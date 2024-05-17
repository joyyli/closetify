import React from 'react';
import OutfitCard from './OutfitCard';

export default function OutfitFeed(props) {
    const fits = props.outfits;

    const outfitArray = fits.map((outfit) => (
        <OutfitCard
            key={outfit.id}
            outfitName={outfit.outfitName}
            outfitDate={outfit.outfitDate}
            imageUrl={outfit.imageUrl}
        />
    ));

    // button handler
    const onAddOutfit = (event) => {
        // TODO: navigate to StyleOutfitPage
        console.log("nav to style outfit");
    }

    return (
        <main role="main">
            <div className="buttons-desktop feed">
                <a className="cta-button" onClick={onAddOutfit} role="button">
                    <img src="/icon/plus%20hanger.svg" alt="clothes hanger and plus sign" />
                    Add Outfit
                </a>
            </div>
            <section className="outfit-list">
                {outfitArray}
            </section>

            <div className="layer-icon" onClick={onAddOutfit}>
                <a href="styleoutfit.html"><img src="icon/Property 1=add outfit.svg" alt="Add outfit icon" /></a>
            </div>
        </main>
    );
}
