import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import OutfitCard from './OutfitCard';
import { getDatabase, ref, onValue } from 'firebase/database';

export default function OutfitFeed(props) {
    const [fits, setFits] = useState([]);

    const db = getDatabase();
    const outfitsRef = ref(db, "outfits");

    useEffect(() => {

        const offFunction = onValue(outfitsRef, function (snapshot) {
            const outfitObj = snapshot.val();
            const objKeys = Object.keys(outfitObj);

            const objArray = objKeys.map((keyString) => {
                outfitObj[keyString].key = keyString;
                return outfitObj[keyString];
            }).filter(item => item.userId == 'default' || item.userId == props.currentUser.userId);


            setFits(objArray); //update state and re-render

            function cleanup() {
                console.log("Component is being removed")
                offFunction();
            }
            return cleanup;
        })
    }, []);

    // sort in ascending order
    const sortedFits = fits.sort((a, b) => b.timestamp - a.timestamp);

    const outfitArray = sortedFits.map((outfit) => (
        <OutfitCard
            key={outfit.timestamp}
            outfitDate={outfit.outfitDate}
            imageUrl={outfit.imageUrl}
        />
    ));

    return (
        <main role="main">
            <div className="buttons-desktop feed">
                <NavLink className="cta-button" to="/styleoutfit" role="button">
                    <img src="/icon/plus%20hanger.svg" alt="clothes hanger and plus sign" />
                    Add Outfit
                </NavLink>
            </div>
            <section className="outfit-list">
                {outfitArray}
            </section>
            <div className="layer-icon">
                <NavLink to="/styleoutfit"><img src="icon/Property 1=add outfit.svg" alt="Add outfit icon" /></NavLink>
            </div>
        </main>
    );
}
