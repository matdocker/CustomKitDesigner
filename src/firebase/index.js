import firebase from "firebase/app";
import { storage } from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC3p0CUvOjYdZtryDwOK7_F2JByH0KOnbI",
  authDomain: "kitdesigner-dba8d.firebaseapp.com",
  databaseURL: "https://kitdesigner-dba8d.firebaseio.com",
  projectId: "kitdesigner-dba8d",
  storageBucket: "kitdesigner-dba8d.appspot.com",
  messagingSenderId: "673026714633"
};
firebase.initializeApp(config);

export default {
  storage,
  firebase
};
