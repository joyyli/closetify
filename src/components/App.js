import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// data
import outfitsData from '../data/outfits.json';
import clothes from '../data/clothes.json';

// components
import NavBar from './NavBar';
import OutfitFeed from './home/OutfitFeed';
import MyClosetPage from './closet/MyclosetPage.js';
import ProfilePage from './profile/ProfilePage.js';
import AdditemPage from './additem/AdditemPage.js';
import StyleOutfitPage from './styleoutfit/StyleOutfitPage.js';
import additemForm from './additem/additemForm.js';

export default function App(props) {
    const [outfitList, setOutfitList] = useState([]);
    const addNewOutfit = (newOutfit) => {
        setOutfitList([...outfitList, newOutfit]);
    };

    return (
        <div className="app">
            <NavBar />
            <Routes>
                <Route path="/home" element={<OutfitFeed outfits={outfitsData} />} />
                <Route path="/closet" element={<MyClosetPage ClothesList={clothes} />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/additem" element={<AdditemPage />}>
                    <Route path="form" element={<additemForm />} />
                </Route>
                <Route path="/styleoutfit" element={<StyleOutfitPage ClothesList={clothes} />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>

            <footer role="contentinfo">
                <p>
                    &copy; 2024 Closetify; All rights reserved.
                </p>
            </footer>
        </div>
    );
}
