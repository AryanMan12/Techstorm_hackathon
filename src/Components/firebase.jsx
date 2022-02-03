// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClDIpsmTld53kL74KtCKNv_Eq0n8pR_io",
  authDomain: "learnhub-124b8.firebaseapp.com",
  projectId: "learnhub-124b8",
  storageBucket: "learnhub-124b8.appspot.com",
  messagingSenderId: "66955039949",
  appId: "1:66955039949:web:a1ac4ed1f5dd8c84138584"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;