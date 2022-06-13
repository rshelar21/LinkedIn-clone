import firebase from 'firebase/compat/app';
import  { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDJCyeA9DzaXwlBZAf6z-v1bh8KLJVnbZs",
    authDomain: "linkedin-4eebd.firebaseapp.com",
    projectId: "linkedin-4eebd",
    storageBucket: "linkedin-4eebd.appspot.com",
    messagingSenderId: "632080102158",
    appId: "1:632080102158:web:b347eccf067d36d04b1d5f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage();
const provider = new GoogleAuthProvider();




export { storage, auth, provider};
export default db;
