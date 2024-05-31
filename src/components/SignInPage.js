import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider, emailProvider } from '../firebase.js';

//import { getAuth, GoogleAuthProvider, EmailAuthProvider } from 'firebase/auth';
import StyledFirebaseAuth from './StyledFirebaseAuth';

const firebaseUIConfig = {
  signInOptions: [
    googleProvider.providerId,
    {
      provider: emailProvider.providerId, //EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true,
    },
  ],
  signInFlow: 'popup',
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: () => {
      return false; // Don't redirect after authentication
    },
  },
};

const SignInPage = () => {
  //const auth = getAuth(); // Access the authenticator

  const navigate = useNavigate();

  firebaseUIConfig.callbacks.signInSuccessWithAuthResult = () => {
    navigate("/home");
  };


  return (
    <div className="sign-in-page">
      <h1>Welcome to Closetify</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
    </div>
  );
};

export default SignInPage;
