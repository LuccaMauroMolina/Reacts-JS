// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa3DeZqsc44aiBck3b2p57xgE6heNmiHY",
  authDomain: "tienda-pc-deba3.firebaseapp.com",
  projectId: "tienda-pc-deba3",
  storageBucket: "tienda-pc-deba3.appspot.com",
  messagingSenderId: "226846999040",
  appId: "1:226846999040:web:8f2cd68dea97b14c150ee5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);