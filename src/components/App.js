import React, { useState } from 'react';
import ClothesList from '../data/clothes.json';
import MyclosetPage from './MyclosetPage';
import OutfitFeed from './home/OutfitFeed';
import NavBar from './NavBar';
import ProfilePage from './ProfilePage';
import AdditemPage from './AdditemPage';

const outfits = [
    { id: 1, image: 'path/to/image1.jpg', name: 'Outfit 1', description: 'A nice casual outfit' },
    { id: 2, image: 'path/to/image2.jpg', name: 'Outfit 2', description: 'A formal outfit' }
];

export default function App(props) {
    const [view, setView] = useState('home'); // Default view is 'mycloset'
    const [outfitList, setOutfitList] = useState(outfits);

    const handleToggle = (newView) => {
        setView(newView);
    };

    const addNewOutfit = (newOutfit) => {
        setOutfitList([...outfitList, newOutfit]);
    };

    return (
        <div className="app">
            <NavBar onNavigate={setView} />
            {view === 'home' && <OutfitFeed outfits={outfitList} />}
            {view === 'mycloset' && <MyclosetPage ClothesList={ClothesList} />}
            {view === 'profile' && <ProfilePage />}
            {view === 'additem' && <AdditemPage addNewOutfit={addNewOutfit} />}
        </div>
    );
}