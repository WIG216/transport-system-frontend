// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'

const firebaseConfig =  {
    apiKey: "AIzaSyCq6ZeK-MAk1CuwznA0s4350SKKU1eTem8",
    authDomain: "transport-system-5d80e.firebaseapp.com",
    projectId: "transport-system-5d80e",
    storageBucket: "transport-system-5d80e.appspot.com",
    messagingSenderId: "398518234498",
    appId: "1:398518234498:web:42dcd9a94ec93eae90739b"
  };


// Initialize Firebase
const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export {
    firebaseApp
}