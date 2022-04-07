// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwsP7UDjq5egIVicT6_DqbyEIByREmoxg",
  authDomain: "fir-curso-591b9.firebaseapp.com",
  projectId: "fir-curso-591b9",
  storageBucket: "fir-curso-591b9.appspot.com",
  messagingSenderId: "193026890596",
  appId: "1:193026890596:web:e233cb850a9f38e605f871",
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);

export const db = getFirestore(fb);
