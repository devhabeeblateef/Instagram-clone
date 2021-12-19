  // Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFireStore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnQuC_kBC_Ou38lxnwshlxyOpPKHfYatY",
  authDomain: "instagram-clone-d7d7f.firebaseapp.com",
  projectId: "instagram-clone-d7d7f",
  storageBucket: "instagram-clone-d7d7f.appspot.com",
  messagingSenderId: "47383437396",
  appId: "1:47383437396:web:2c2a8e8e6bb692c188cdc1"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFireStore();
const storage = getStorage(); 

export {app, db, stprage };