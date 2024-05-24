import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import ClothesList from './data/clothes.json';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9qj2IMDi-ZiHvQ3zDFeIfLdsOlqBcrzE",
  authDomain: "closetify-361f8.firebaseapp.com",
  databaseURL: "https://closetify-361f8-default-rtdb.firebaseio.com",
  projectId: "closetify-361f8",
  storageBucket: "closetify-361f8.appspot.com",
  messagingSenderId: "573886521226",
  appId: "1:573886521226:web:1d03aebb1d8ccdbeb77273"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App ClothesList={ClothesList} />
  </BrowserRouter>
);