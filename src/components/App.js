import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

// authentication
import SignInPage from './SignInPage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// components
import NavBar from './NavBar';
import OutfitFeed from './home/OutfitFeed';
import MyClosetPage from './closet/MyclosetPage.js';
import ProfilePage from './profile/ProfilePage.js';
import AdditemPage from './additem/AdditemPage.js';
import StyleOutfitPage from './styleoutfit/StyleOutfitPage.js';


export default function App(props) {

  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        userAuth.userId = userAuth.uid;
        userAuth.userName = userAuth.displayName;
        userAuth.userImg = userAuth.photoURL;
        setUser(userAuth);
      } else {
        setUser(null);
        navigate('/signin');
      }
    });

    return () => unsubscribe();
  }, [navigate]);


  return (
    <div className="app">
      <NavBar user={user} />
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/home" element={user ? <OutfitFeed currentUser={user} /> : <Navigate to="/signin" />} />
        <Route path="/closet" element={user ? <MyClosetPage currentUser={user} showButton={true} /> : <Navigate to="/signin" />} />
        <Route path="/profile" element={user ? <ProfilePage currentUser={user} /> : <Navigate to="/signin" />} />
        <Route path="/additem" element={user ? <AdditemPage currentUser={user} /> : <Navigate to="/signin" />}>
          <Route path="form" element={<additemForm currentUser={user} />} />
        </Route>
        <Route path="/styleoutfit" element={user ? <StyleOutfitPage currentUser={user} /> : <Navigate to="/signin" />} />
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