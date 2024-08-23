import Footer from "components/shared/Footer";
import Header from "components/shared/Header";
import Todo from "components/todo/Todo";
import "./App.css";
import "./reset.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import LoginWithGoogle from "components/shared/LoginWithGoogle";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:  process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  measurementId:process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const provider = new GoogleAuthProvider();

// const auth = getAuth();



function App() {

  // const auth = getAuth(app);

  // console.log({auth})

  // createUserWithEmailAndPassword(auth, "hidaytraj@gmail.com", "Abc@123")
  // .then((userCredential) => {
  //   // Signed up 
  //   const user = userCredential.user;
  //   console.log({user})
  //   // ...
  // })
  // .catch((error) => {
  //   console.log({error})
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // ..
  // });

  // signInWithPopup(auth, provider)
  // .then((result) => {
  //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   const credential = GoogleAuthProvider.credentialFromResult(result);
  //   const token = credential?.accessToken;
  //   // The signed-in user info.
  //   const user = result.user;
  //   // IdP data available using getAdditionalUserInfo(result)
  //   // ...
  // }).catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // The email of the user's account used.
  //   const email = error.customData.email;
  //   // The AuthCredential type that was used.
  //   const credential = GoogleAuthProvider.credentialFromError(error);
  //   // ...
  // });

  return (
    <div className="App">
      <Header />
    
      <Todo />
      <Footer />
    </div>
  );
}

export default App;
