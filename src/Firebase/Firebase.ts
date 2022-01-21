// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe1lMAhFFqDfzEy9gh5ReGKql_8lhnjh8",
  authDomain: "to-do-typescript.firebaseapp.com",
  projectId: "to-do-typescript",
  storageBucket: "to-do-typescript.appspot.com",
  messagingSenderId: "317721027958",
  appId: "1:317721027958:web:f7138bf4ec8e864f814657",
  measurementId: "G-FMWXV4PMSB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
