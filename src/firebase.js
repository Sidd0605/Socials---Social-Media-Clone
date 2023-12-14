import firebase from "firebase/compat/app"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';



const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAzZvlk4gLPh-1d_Ce_f3i2bc9k7qpzacw",
  authDomain: "ntsocial-app.firebaseapp.com",
  projectId: "ntsocial-app",
  storageBucket: "ntsocial-app.appspot.com",
  messagingSenderId: "1083789799118",
  appId: "1:1083789799118:web:4520a69747ba7a7a69ea9f"
});

const storage = firebaseApp.storage();
const auth = firebase.auth();
const db = firebase.firestore();

export {db,auth,storage};
