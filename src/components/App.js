import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';


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

import DEFAULT_USERS from '../data/user.json';


export default function App(props) {

    /* ----- TEMP AUTHENTIFICAION -------- */

    const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0]) //default to null user

    const navigateTo = useNavigate(); //navigation hook

    //effect to run when the component first loads
    useEffect(() => {
        //log in a default user
        loginUser(DEFAULT_USERS[1])

    }, []) //array is list of variables that will cause this to rerun if changed

    const loginUser = (userObj) => {
        console.log("logging in as", userObj.userName);
        setCurrentUser(userObj);
        if (userObj.userId !== null) {
            navigateTo('/home'); //go to chat after login
        }
    }

    /* --------------------- */


    const [outfitList, setOutfitList] = useState([]);
    const addNewOutfit = (newOutfit) => {
        setOutfitList([...outfitList, newOutfit]);
    };

    return (
        <div className="app">
            <NavBar />
            <Routes>
                {/* TODO Make sign in page */}
                <Route path="/home" element={<OutfitFeed outfits={outfitsData} currentUser={currentUser} />} />
                <Route path="/closet" element={<MyClosetPage currentUser={currentUser} />} />
                <Route path="/profile" element={<ProfilePage currentUser={currentUser} />} />
                <Route path="/additem" element={<AdditemPage currentUser={currentUser} />}>
                    <Route path="form" element={<additemForm currentUser={currentUser} />} />
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
