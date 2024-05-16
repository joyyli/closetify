import React, { useState } from 'react';
import MyclosetPage from './MyclosetPage';
//import AddOutfitButton from './home/AddOutfitButton';
import FeedToggle from './home/FeedToggle';
import OutfitFeed from './home/OutfitFeed';


const outfits = [
    { id: 1, image: 'path/to/image1.jpg', name: 'Outfit 1', description: 'A nice casual outfit' },
    { id: 2, image: 'path/to/image2.jpg', name: 'Outfit 2', description: 'A formal outfit' }
];

export default function App(props) {
    const [view, setView] = useState('mycloset'); // Default view is 'mycloset'

    const handleToggle = (newView) => {
        setView(newView);
    };

    return (
        <div className="app">
            {/* {<AddOutfitButton />} */}
            <FeedToggle onToggle={handleToggle} />

            {view === 'mycloset' && <MyclosetPage clothesList={props.clothesList} />}
            {view === 'outfitFeed' && <OutfitFeed outfits={outfits} />}
        </div>
    );
}