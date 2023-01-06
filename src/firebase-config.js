import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDVxwYI2HCfrMScYruyLbp7Qf4eGCmwykE",
  authDomain: "fir-jf-2.firebaseapp.com",
  projectId: "fir-jf-2",
  storageBucket: "fir-jf-2.appspot.com",
  messagingSenderId: "188343009725",
  appId: "1:188343009725:web:779ab4cfd5452f86a292d4",
  measurementId: "G-1L4C4F3YME",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
