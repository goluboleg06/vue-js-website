// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyB7ceCxYMhFLUkZHZBuIo8ygKGOggXiF74",
  authDomain: "carstore-vue.firebaseapp.com",
  projectId: "carstore-vue",
  storageBucket: "carstore-vue.firebasestorage.app",
  messagingSenderId: "321232708098",
  appId: "1:321232708098:web:1a5302253f374d6a003d1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
