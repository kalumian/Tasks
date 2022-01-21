"use strict";
exports.__esModule = true;
// Import the functions you need from the SDKs you need
var app_1 = require("firebase/app");
var analytics_1 = require("firebase/analytics");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBe1lMAhFFqDfzEy9gh5ReGKql_8lhnjh8",
    authDomain: "to-do-typescript.firebaseapp.com",
    projectId: "to-do-typescript",
    storageBucket: "to-do-typescript.appspot.com",
    messagingSenderId: "317721027958",
    appId: "1:317721027958:web:f7138bf4ec8e864f814657",
    measurementId: "G-FMWXV4PMSB"
};
// Initialize Firebase
var app = app_1.initializeApp(firebaseConfig);
var analytics = analytics_1.getAnalytics(app);
