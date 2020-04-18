import firebase from 'firebase'
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAV94yzg_BNgrwr9i17-y7PXGIuNqcboi4",
    authDomain: "tabuacosite.firebaseapp.com",
    databaseURL: "https://tabuacosite.firebaseio.com",
    projectId: "tabuacosite",
    storageBucket: "tabuacosite.appspot.com",
    messagingSenderId: "678722576367",
    appId: "1:678722576367:web:f0977e01c5ec143a59201a",
    measurementId: "G-9TJ29LN180"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const storage = firebase.storage();

  export {
    storage, firebase as default
  }