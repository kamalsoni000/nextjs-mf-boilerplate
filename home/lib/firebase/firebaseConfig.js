// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH5pOgWy_S9KTB7PA-DRumchyhssHxjp4",
  authDomain: "kmlimage.firebaseapp.com",
  projectId: "kmlimage",
  storageBucket: "kmlimage.appspot.com",
  messagingSenderId: "746017121076",
  appId: "1:746017121076:web:e30eea1c8f5abb00d93b61",
  measurementId: "G-EX9RN19PJV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Firebase storage reference
const storage = getStorage(app);
export default storage;
