import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfD7uBCiFm10hoJ81Z656tSKDSjBT9-CM",
  authDomain: "projectworkshops-605f5.firebaseapp.com",
  projectId: "projectworkshops-605f5",
  storageBucket: "projectworkshops-605f5.appspot.com",
  messagingSenderId: "962085139896",
  appId: "1:962085139896:web:55812429589df6fe5e0b4d",
  measurementId: "G-FZMFRR2PMM",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
