// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDulUiVF_ePQYNyTBy6ulewCYU9YdVSLL4",
  authDomain: "book-my-room-b2eac.firebaseapp.com",
  projectId: "book-my-room-b2eac",
  storageBucket: "book-my-room-b2eac.appspot.com",
  messagingSenderId: "844505512217",
  appId: "1:844505512217:web:2abe305b480c06eecc6d88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);