// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA4vRiOcWvv0eOCbYLFEhwaFKUrfuvfbk",
  authDomain: "hym-shop.firebaseapp.com",
  projectId: "hym-shop",
  storageBucket: "hym-shop.appspot.com",
  messagingSenderId: "423174888936",
  appId: "1:423174888936:web:c7158e7c79da93f25f985d",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
