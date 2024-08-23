import React, { useState } from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

// auth.languageCode = 'it';
// // To apply the default browser preference instead of explicitly setting it.
// // auth.useDeviceLanguage();

function LoginWithGoogle() {

  const [user, setUser] = useState<any>(null);

  const auth = getAuth();

  const doLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;

        setUser(user)

        console.log({ user })
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        console.log({ error })
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

  }

  return (

    user ?
      <div> Hi {user?.displayName}

        <br />

      </div> : <button onClick={doLogin}>Login</button>
  )
}

export default LoginWithGoogle