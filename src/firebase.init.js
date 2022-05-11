// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx3aPdcgLAjDR_euqI3E1uGQ9ttqG6i74",
  authDomain: "doctors-portal-21ce7.firebaseapp.com",
  projectId: "doctors-portal-21ce7",
  storageBucket: "doctors-portal-21ce7.appspot.com",
  messagingSenderId: "157779418030",
  appId: "1:157779418030:web:598ae75d2596b3f1e7063f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
