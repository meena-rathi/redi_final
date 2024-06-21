import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyClUS3iXB1v8WAE1OcM6k-JRbxLPfme1Io",
  authDomain: "reservation-96a81.firebaseapp.com",
  projectId: "reservation-96a81",
  storageBucket: "reservation-96a81.appspot.com",
  messagingSenderId: "960738339529",
  appId: "1:960738339529:web:e947b2f48f69f73be77b18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);