const firebase = require('firebase/compat/app')
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
const { getFirestore } = require('firebase/firestore')
// import { getFirestore } from 'firebase/firestore';
// import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword } from 'firebase/auth'; 
// import { getFireStore } from 'firebase/compat/fires';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnykWpefaNd0JFGPyu1W01bmtqAKSHBHM",
  authDomain: "english-learning-platfor-fd54e.firebaseapp.com",
  projectId: "english-learning-platfor-fd54e",
  storageBucket: "english-learning-platfor-fd54e.appspot.com",
  messagingSenderId: "369167184775",
  appId: "1:369167184775:web:30af7fda3cec332de5d922",
  measurementId: "G-PC0Y6416T9"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const auth = getAuth(firebaseApp);

const database = getFirestore(firebaseApp);