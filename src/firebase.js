// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgjD7zihRIR-u57DE4NsKC9i_C3JQNTt0",
  authDomain: "chat-2a0d6.firebaseapp.com",
  projectId: "chat-2a0d6",
  storageBucket: "chat-2a0d6.appspot.com",
  messagingSenderId: "924243659264",
  appId: "1:924243659264:web:779fb20e0e01f30ef766e5",
  measurementId: "G-FCV84RF6M8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
