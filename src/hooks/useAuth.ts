import { firebaseApp } from 'config/firebase.config';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react'

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export default function useAuth() {
	// Initialize Firebase Authentication and get a reference to the service
	const auth = getAuth(firebaseApp);

	const [user, setUser] = useState<any>(null);
	// check current user
	// const currentUser = auth.currentUser;
	// console.log({currentUser})

	useEffect(() => {
		// it checks the session of the loggin state of the current user
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user
				const uid = user.uid;

				console.log('currentUser', user);
				setUser(user)
				// ...
			} else {
				// User is signed out
				// ...
				console.log('signed out');
				// doLogin();
				setUser(null)
			}
		});
	}, [auth])



	const doLogin = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				// const credential = GoogleAuthProvider.credentialFromResult(result);
				// const token = credential?.accessToken;
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
				// const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});

	}


	const doSignOut = () => {
		// To sign out a user, call signOut:
		signOut(auth).then(() => {
			// Sign-out successful.
		}).catch((error) => {
			// An error happened.
		});

	}

	return {
		doLogin,
		doSignOut,
		user
	}
}
