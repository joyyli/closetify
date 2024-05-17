import React, { useState, useEffect } from 'react';

// data
import outfitsData from '../data/outfits.json';
import clothes from '../data/clothes.json';

// components
import NavBar from './NavBar';
import OutfitFeed from './home/OutfitFeed';
import MyClosetPage from './MyclosetPage.js';
import ProfilePage from './ProfilePage.js';
import AdditemPage from './AdditemPage.js';
import StyleOutfit from './StyleOutfitPage.js';
import ItemForm from './additem/additemForm.js';

export default function App(props) {
    const [outfitList, setOutfitList] = useState([]);
    const addNewOutfit = (newOutfit) => {
        setOutfitList([...outfitList, newOutfit]);
    };

    return (
        <div className="app">
            <NavBar />

            {/* uncomment components to render pages */}

            <OutfitFeed outfits={outfitsData} />
            {/* <MyClosetPage ClothesList={clothes} /> */}
            {/* <ProfilePage /> */}
            {/* <StyleOutfit ClothesList={clothes} /> */}
            {/* <AdditemPage /> */}

            <footer role="contentinfo">
                <p>
                    &copy; 2024 Closetify; All rights reserved.
                </p>
            </footer>
        </div>
    );
}
