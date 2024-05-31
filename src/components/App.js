import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

// authentication
import { auth } from '../firebase.js';
import SignInPage from './SignInPage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

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

//import DEFAULT_USERS from '../data/user.json';


export default function App(props) {

    // /* ----- TEMP AUTHENTIFICAION -------- */

    // const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0]) //default to null user

    // const navigateTo = useNavigate(); //navigation hook

    // //effect to run when the component first loads
    // useEffect(() => {
    //     //log in a default user
    //     loginUser(DEFAULT_USERS[1])

    // }, []) //array is list of variables that will cause this to rerun if changed

    // const loginUser = (userObj) => {
    //     console.log("logging in as", userObj.userName);
    //     setCurrentUser(userObj);
    //     if (userObj.userId !== null) {
    //         navigateTo('/home'); //go to chat after login
    //     }
    // }

    // /* --------------------- */

    const [user, setUser] = useState(null);
    const [outfitList, setOutfitList] = useState([]);
    const navigate = useNavigate();
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, userAuth => {
          if (userAuth) {
            setUser(userAuth);
          } else {
            setUser(null);
            navigate('/signin');
          }
        });
    
        return () => unsubscribe();
      }, [auth, navigate]);
    
      const addNewOutfit = (newOutfit) => {
        setOutfitList([...outfitList, newOutfit]);
      };

      return (
        <div className="app">
          <NavBar user={user} />
          <Routes>
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/home" element={user ? <OutfitFeed outfits={outfitsData} currentUser={user} /> : <Navigate to="/signin" />} />
            <Route path="/closet" element={user ? <MyClosetPage currentUser={user} /> : <Navigate to="/signin" />} />
            <Route path="/profile" element={user ? <ProfilePage currentUser={user} /> : <Navigate to="/signin" />} />
            <Route path="/additem" element={user ? <AdditemPage currentUser={user} /> : <Navigate to="/signin" />}>
              <Route path="form" element={<additemForm currentUser={user} />} />
            </Route>
            <Route path="/styleoutfit" element={user ? <StyleOutfitPage ClothesList={clothes} /> : <Navigate to="/signin" />} />
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