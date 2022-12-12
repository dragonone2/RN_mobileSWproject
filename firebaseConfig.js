import { initializeFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBYwMjh8RAttDUvhzdKFZ5MAXRNNSBvC6o",
  authDomain: "testproject2213.firebaseapp.com",
  projectId: "testproject2213",
  storageBucket: "testproject2213.appspot.com",
  messagingSenderId: "603705999918",
  appId: "1:603705999918:web:389ba4ebc12c7241ff15bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export { db }
