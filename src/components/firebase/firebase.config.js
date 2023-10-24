// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfhPQzpu_RyCPZfLtLcKgTKE0ZqbllGfA",
    authDomain: "coffee-store-authentication.firebaseapp.com",
    projectId: "coffee-store-authentication",
    storageBucket: "coffee-store-authentication.appspot.com",
    messagingSenderId: "487437949905",
    appId: "1:487437949905:web:ded563a7d0a0d3d2ebdef0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;