// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDikEmQgcZp1-MSwiiF1iwKlkiZ_Z829xA",
  authDomain: "pjt-website.firebaseapp.com",
  projectId: "pjt-website",
  storageBucket: "pjt-website.appspot.com",
  messagingSenderId: "232337053415",
  appId: "1:232337053415:web:5da7f5c1242777dd847442",
  measurementId: "G-130ZZXW0N6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);