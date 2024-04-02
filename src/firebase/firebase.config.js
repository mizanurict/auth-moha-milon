// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9MYHDw3uqlFhsetb5FJ1KGay-3Y4mxOY",
  authDomain: "auth-moha-milon-820a0.firebaseapp.com",
  projectId: "auth-moha-milon-820a0",
  storageBucket: "auth-moha-milon-820a0.appspot.com",
  messagingSenderId: "236719157808",
  appId: "1:236719157808:web:ee7a56c7a0b8f42bc873f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;