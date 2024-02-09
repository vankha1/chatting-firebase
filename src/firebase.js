// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK4Tq_Kcp57r_P2E1qRtlyTnuvgWVM-cE",
  authDomain: "chatting-firebase-23dcd.firebaseapp.com",
  projectId: "chatting-firebase-23dcd",
  storageBucket: "chatting-firebase-23dcd.appspot.com",
  messagingSenderId: "681366269357",
  appId: "1:681366269357:web:dc5e3c76aeff7083280524",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
