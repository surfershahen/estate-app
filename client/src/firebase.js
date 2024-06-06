// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f278c.firebaseapp.com",
  projectId: "mern-estate-f278c",
  storageBucket: "mern-estate-f278c.appspot.com",
  messagingSenderId: "141356240468",
  appId: "1:141356240468:web:2e12e8afde1c3b6a5ca7c1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
