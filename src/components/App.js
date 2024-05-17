import React, { useState, useEffect } from 'react';
import outfitsData from '../data/outfits.json'
import NavBar from './NavBar';
import OutfitFeed from './home/OutfitFeed';
import MyClosetPage from './MyclosetPage.js';
import ProfilePage from './ProfilePage.js';

export default function App(props) {
    const [view, setView] = useState('home');
    const [outfitList, setOutfitList] = useState([]);

    useEffect(() => {
        setOutfitList(outfitsData);
    }, []);

    const addNewOutfit = (newOutfit) => {
        console.log("Adding new outfit:", newOutfit);
    };

    return (
        <div className="app">
            <NavBar onNavigate={setView} />
            {view === 'home' && <OutfitFeed outfits={outfitList} onAddOutfit={() => setView('additem')} />}
            {view === 'mycloset' && <MyClosetPage />}
            {view === 'profile' && <ProfilePage />}
            {view === 'additem' && <AddItemPage addNewOutfit={addNewOutfit} onNavigate={setView} />}
        </div>
    );
}
