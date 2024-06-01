import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider, emailProvider } from '../firebase.js';

import StyledFirebaseAuth from './StyledFirebaseAuth';

const firebaseUIConfig = {
  signInOptions: [
    googleProvider.providerId,
    {
      provider: emailProvider.providerId,
      requireDisplayName: true,
    },
  ],
  signInFlow: 'redirect',
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: () => {
      return false; // Don't redirect after authentication
    },
  },
};

const SignInPage = () => {
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