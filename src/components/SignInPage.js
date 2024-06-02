import React from 'react';
import { useState } from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const SignInPage = () => {
  const [alertMessage, setAlertMessage] = useState(null);

  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        navigate('/home');
      })
      .catch(error => {
        setAlertMessage("Error : " + error.message);
      });
  };


  return (
    <div className="sign-in-page">
      <h1>Welcome to Closetify</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      {alertMessage &&
        <div className="alert">
          <span className="closebtn" onClick={() => setAlertMessage(null)}>&times;</span>
          {alertMessage}
        </div>
      }
    </div>
  );
};

export default SignInPage;