// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a0b9a.firebaseapp.com",
  projectId: "mern-estate-a0b9a",
  storageBucket: "mern-estate-a0b9a.firebasestorage.app",
  messagingSenderId: "943343032133",
  appId: "1:943343032133:web:224ada507ec966cdc6902c",
  measurementId: "G-GJNGS223YT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
