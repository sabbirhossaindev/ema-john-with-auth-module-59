// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXAq1uXCGF1qCaMOiYy0yfNbGXxlycaNc",
  authDomain: "ema-john-simple-auth-6574a.firebaseapp.com",
  projectId: "ema-john-simple-auth-6574a",
  storageBucket: "ema-john-simple-auth-6574a.appspot.com",
  messagingSenderId: "1000975832244",
  appId: "1:1000975832244:web:f3649da97191238b2bf3e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;