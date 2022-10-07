import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW3CBdI-NZvPHGu7b_k2KJyRhcWZDVtcI",
  authDomain: "learnea-5005a.firebaseapp.com",
  projectId: "learnea-5005a",
  storageBucket: "learnea-5005a.appspot.com",
  messagingSenderId: "500095098695",
  appId: "1:500095098695:web:d8d87b271d8d39e14e7662",
  measurementId: "G-TY6L3Z0JKT"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth()

export { db, auth };