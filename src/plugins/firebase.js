//firebaseインポート
import firebase from "firebase";
  var config = {
    apiKey: "AIzaSyDWPMX70-CUHjJ5SUtphl1SVx5I9c1qTLk",
    authDomain: "portfolio-b4a70.firebaseapp.com",
    databaseURL: "https://portfolio-b4a70.firebaseio.com",
    projectId: "portfolio-b4a70",
    storageBucket: "portfolio-b4a70.appspot.com",
    messagingSenderId: "512809071907",
    appId: "1:512809071907:web:e67b82c1dba9c38fcc8896",
    measurementId: "G-17EQXH0Q89"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  export const functions = firebase.functions();