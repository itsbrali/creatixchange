// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAagtpFq_PgSTtO51M75k7TqKIJnS0Libo",
  authDomain: "creatixchange-f73ef.firebaseapp.com",
  projectId: "creatixchange-f73ef",
  storageBucket: "creatixchange-f73ef.appspot.com",
  messagingSenderId: "601806289633",
  appId: "1:601806289633:web:b7bc677864567c2e0f55a0",
  measurementId: "G-2Y7MM504XC"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta solo la autenticación
export const auth = getAuth(app);
