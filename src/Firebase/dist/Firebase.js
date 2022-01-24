"use strict";
exports.__esModule = true;
exports.db = void 0;
// Import the functions you need from the SDKs you need
var app_1 = require("firebase/app");
var firestore_1 = require("firebase/firestore");
var firebaseConfig = {
    apiKey: "AIzaSyBe1lMAhFFqDfzEy9gh5ReGKql_8lhnjh8",
    authDomain: "to-do-typescript.firebaseapp.com",
    projectId: "to-do-typescript",
    storageBucket: "to-do-typescript.appspot.com",
    messagingSenderId: "317721027958",
    appId: "1:317721027958:web:f7138bf4ec8e864f814657",
    measurementId: "G-FMWXV4PMSB"
};
var app = app_1.initializeApp(firebaseConfig);
exports.db = firestore_1.getFirestore();
