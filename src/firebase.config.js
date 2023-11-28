// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAici6zDA6_jfKD0KNw-GMG0Zm9Pldj27c",
  authDomain: "web-otp-2948b.firebaseapp.com",
  projectId: "web-otp-2948b",
  storageBucket: "web-otp-2948b.appspot.com",
  messagingSenderId: "279919697080",
  appId: "1:279919697080:web:2eac6c4ea8fdd73260e84d",
  measurementId: "G-PPWFWFB1FH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
