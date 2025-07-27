// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdiqYete17F6NNE1h7bNQi9xKi0WhyZM4",
    authDomain: "fir-practice-projects-f8fd9.firebaseapp.com",
    projectId: "fir-practice-projects-f8fd9",
    storageBucket: "fir-practice-projects-f8fd9.firebasestorage.app",
    messagingSenderId: "96280908191",
    appId: "1:96280908191:web:4e85a7c3deb8962515edaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;