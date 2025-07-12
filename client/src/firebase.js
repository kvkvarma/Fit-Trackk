// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCY0oD5sSXlk3wG_3QwEOIvfSIVb6Yfc7Y",
  authDomain: "fittrack-a0b78.firebaseapp.com",
  projectId: "fittrack-a0b78",
  storageBucket: "fittrack-a0b78.firebasestorage.app",
  messagingSenderId: "931452381802",
  appId: "1:931452381802:web:8f829fdd900ebe7da2b813",
  measurementId: "G-GXFKW7KH2M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth,app}