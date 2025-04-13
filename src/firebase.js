// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqgtpFq_PgSTtO51M75k7TqKtJnS0Libo",
  authDomain: "creatixchange-f73ef.firebaseapp.com",
  projectId: "creatixchange-f73ef",
  storageBucket: "creatixchange-f73ef.appspot.com",
  messagingSenderId: "601806289633",
  appId: "1:601806289633:web:d345d31aa92927f00f55a0",
  measurementId: "G-X8CWR03BTL"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta solo la autenticación
export const auth = getAuth(app);
