// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDQIYqC_Po6W20SIFkvSwt20g1s_raEKdQ",
    authDomain: "netflixgpt-a7158.firebaseapp.com",
    projectId: "netflixgpt-a7158",
    storageBucket: "netflixgpt-a7158.appspot.com",
    messagingSenderId: "392754938470",
    appId: "1:392754938470:web:6004df89557dbe1d9c63a7",
    measurementId: "G-366X1CYTRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();