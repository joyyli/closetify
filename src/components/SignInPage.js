import React from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup } from "firebase/auth";
import '../index.css';
import { useNavigate } from 'react-router-dom';


const SignInPage = () => {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        console.log(result);
        navigate("/home");
      })
      .catch(error => {
        console.error("Error signing in with Google: ", error);
      });
  };

  return (
    <div className="sign-in-page">
      <h1>Welcome to Closetify</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default SignInPage;