// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwt0MzOzZ3-DMvzYOCQAO_V-W9P40N24M",
  authDomain: "whatsappweb-6b5ef.firebaseapp.com",
  projectId: "whatsappweb-6b5ef",
  storageBucket: "whatsappweb-6b5ef.appspot.com",
  messagingSenderId: "852734061487",
  appId: "1:852734061487:web:39dd0a3fe25059b71e1d5a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;