// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'

const firebaseConfig =  {
    apiKey: "AIzaSyAOWCmZEp5yMQX9-7kQ-ux_5k26sD_2JAY",
    authDomain: "virtual-academy-f4599.firebaseapp.com",
    projectId: "virtual-academy-f4599",
    storageBucket: "virtual-academy-f4599.appspot.com",
    messagingSenderId: "920383507637",
    appId: "1:920383507637:web:0a13e402b282e495ca02fc"
  };


// Initialize Firebase
const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export {
    firebaseApp
}