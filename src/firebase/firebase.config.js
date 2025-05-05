// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-JQ70G78DVMFRB_JT2MPiQklZpaRXPxk",
    authDomain: "dragon-news-sopon.firebaseapp.com",
    projectId: "dragon-news-sopon",
    storageBucket: "dragon-news-sopon.firebasestorage.app",
    messagingSenderId: "417291481607",
    appId: "1:417291481607:web:8be385cccc96190b92b0a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;   