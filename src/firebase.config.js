// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWrXqdTnMFU8NYfBAjKGehbi1lm3O7Lcg",
  authDomain: "job-portal-361ed.firebaseapp.com",
  projectId: "job-portal-361ed",
  storageBucket: "job-portal-361ed.appspot.com",
  messagingSenderId: "604592637900",
  appId: "1:604592637900:web:e2c5946cfdf8ea0154bf69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};