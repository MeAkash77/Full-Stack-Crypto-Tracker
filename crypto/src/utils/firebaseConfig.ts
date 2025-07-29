// src/utils/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSa6WbMn7bSjw_ddH_CfN0hi3wQJxXpoI",
  authDomain: "ecommerce77-f06f0.firebaseapp.com",
  projectId: "ecommerce77-f06f0",
  storageBucket: "ecommerce77-f06f0.firebasestorage.app",
  messagingSenderId: "235844479074",
  appId: "1:235844479074:web:33817742087c3d31b6893b",
  measurementId: "G-1PDRJR0SJB"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

// Google Auth provider
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, signOut, db };
