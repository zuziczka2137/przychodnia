// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfmeZmbeUy73trAa8Gp53JV4RWEkLWv9U",
  authDomain: "przychodnia-438e8.firebaseapp.com",
  projectId: "przychodnia-438e8",
  storageBucket: "przychodnia-438e8.appspot.com",
  messagingSenderId: "946237709358",
  appId: "1:946237709358:web:97b07e68b2a8cd3e70d3bf",
  measurementId: "G-8MZBMT5RH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
