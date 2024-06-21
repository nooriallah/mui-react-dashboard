// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsHdjsuXV63YLEMF4-V6yWdWnez7XgBD4",
    authDomain: "simpledashboard-b4ad7.firebaseapp.com",
    projectId: "simpledashboard-b4ad7",
    storageBucket: "simpledashboard-b4ad7.appspot.com",
    messagingSenderId: "764489673890",
    appId: "1:764489673890:web:23c2f72a09b71d01213bfb",
    measurementId: "G-KQ8F2LRXTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db =  getFirestore("products")