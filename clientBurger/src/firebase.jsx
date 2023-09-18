import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
const firebaseConfig = { 
  apiKey : "AIzaSyDZDTeRPcCZskBUwUNN7AHJFK808AbbZao" , 
  authDomain : "test-db9ef.firebaseapp.com" , 
  databaseURL : "https://test-db9ef-default-rtdb.firebaseio.com" , 
  projectId : "test-db9ef" , 
  storageBucket : "test-db9ef.appspot.com" , 
  messagingSenderId : "437752993390" , 
  appId : "1:437752993390:web:20fcb223c971c46350f87f" , 
  measurementId : "G-ERN1LX6DMG" 
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
export const dbr = getDatabase();
