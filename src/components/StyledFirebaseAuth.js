import React, { useEffect } from 'react';
import * as firebaseui from 'firebaseui';
import { getAuth } from 'firebase/auth';
import 'firebaseui/dist/firebaseui.css';

const StyledFirebaseAuth = ({ uiConfig }) => {
  useEffect(() => {
    const auth = getAuth();
    const ui = new firebaseui.auth.AuthUI(auth);

    ui.start('#firebaseui-auth-container', uiConfig);

    return () => {
      ui.reset();
    };
  }, [uiConfig]);

  return <div id="firebaseui-auth-container"></div>;
};

export default StyledFirebaseAuth;