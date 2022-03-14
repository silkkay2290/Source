// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'
const firebaseConfig = {
  apiKey: "AIzaSyCVXVVMPeSCQGpGSo5rjz7Su4tLFnJKg30",
  authDomain: "twitterapp-ef463.firebaseapp.com",
  projectId: "twitterapp-ef463",
  storageBucket: "twitterapp-ef463.appspot.com",
  messagingSenderId: "488021949959",
  appId: "1:488021949959:web:5ec71fb200f3b4a0fdb4a2"
};
let app  = initializeApp(firebaseConfig);

let firestore = getFirestore(app)

export default firestore;