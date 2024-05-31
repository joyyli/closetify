// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from 'firebase/auth';

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

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const emailProvider = new EmailAuthProvider();

export { auth, googleProvider, emailProvider };
