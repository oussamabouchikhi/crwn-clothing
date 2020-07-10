import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCxic9TLkuQV2lGOtPKD6iI24y7sG1WhHw",
    authDomain: "crwn-db-f1000.firebaseapp.com",
    databaseURL: "https://crwn-db-f1000.firebaseio.com",
    projectId: "crwn-db-f1000",
    storageBucket: "crwn-db-f1000.appspot.com",
    messagingSenderId: "647451076837",
    appId: "1:647451076837:web:3ab3e4c82a7881d7d4cc0c"
};
// Initiallize Firebase
firebase.initializeApp(firebaseConfig);

// Use Firebase authentication & firestore
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Add sign-in with Google account
const provider = new firebase.auth.GoogleAuthProvider();

// Propmt user to choose a Google account when signing-in with Google
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;