
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX3Z7qgbmF-0FdKJtmRoTmxIpeDyycR30",
  authDomain: "tesina-dev.firebaseapp.com",
  databaseURL: "https://tesina-dev-default-rtdb.firebaseio.com",
  projectId: "tesina-dev",
  storageBucket: "tesina-dev.appspot.com",
  messagingSenderId: "633834383796",
  appId: "1:633834383796:web:e61841827f68c10e4f2ae1",
  measurementId: "G-VHT1T02WJX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
