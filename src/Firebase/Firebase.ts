// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBe1lMAhFFqDfzEy9gh5ReGKql_8lhnjh8",
  authDomain: "to-do-typescript.firebaseapp.com",
  projectId: "to-do-typescript",
  storageBucket: "to-do-typescript.appspot.com",
  messagingSenderId: "317721027958",
  appId: "1:317721027958:web:f7138bf4ec8e864f814657",
  measurementId: "G-FMWXV4PMSB",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
