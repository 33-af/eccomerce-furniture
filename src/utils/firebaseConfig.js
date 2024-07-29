import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAyRmIG5kZ_Vg6R5ZlidPTciLrAL6fVTsc",
    authDomain: "aaaa-b6d28.firebaseapp.com",
    projectId: "aaaa-b6d28",
    storageBucket: "aaaa-b6d28.appspot.com",
    messagingSenderId: "122172294983",
    appId: "1:122172294983:web:e229ef77aaabc293a12e62"
  };
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;