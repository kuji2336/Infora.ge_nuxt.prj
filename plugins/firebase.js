import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/firestore'
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDDm_CmmRFXQ6iEOVLRetqvBjwfwNi0Ur0",
    authDomain: "inforage-a5be3.firebaseapp.com",
    projectId: "inforage-a5be3",
    storageBucket: "inforage-a5be3.appspot.com",
    messagingSenderId: "100132651387",
    appId: "1:100132651387:web:de27aa92a9df6110d3bdde",
    measurementId: "G-Z3KF702SX0"
  };
 
 let app = null;

 if(!firebase.apps.length){
     app = firebase.initializeApp(firebaseConfig);
 }


 export const storage = firebase.storage();
 export const db = firebase.firestore();