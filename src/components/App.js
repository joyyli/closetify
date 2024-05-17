import React, { useState, useEffect } from 'react';
import outfitsData from '../data/outfits.json'
import NavBar from './NavBar';
import OutfitFeed from './home/OutfitFeed';
import MyClosetPage from './MyclosetPage.js';
import ProfilePage from './ProfilePage.js';
import AdditemPage from './AdditemPage.js';

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
            <NavBar />
            
            {/* uncomment components to render pages */}
            <OutfitFeed outfits={outfitsData}/>




            <footer role="contentinfo">
                <p>
                    &copy 2024 Closetify; All rights reserved.
                </p>
            </footer>
        </div>
    );
}
