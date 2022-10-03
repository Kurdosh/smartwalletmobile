import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBapqVBMWk004pLEcU_jG3K21SkmRnCwNA",
  authDomain: "smartwalletmobile.firebaseapp.com",
  projectId: "smartwalletmobile",
  storageBucket: "smartwalletmobile.appspot.com",
  messagingSenderId: "131122107188",
  appId: "1:131122107188:web:bbe71f0b854019597dcb61",
  measurementId: "G-D17YT3K7H3",
};

const fireabaseApp = initializeApp(firebaseConfig);
export const db = fireabaseApp.firestore();
