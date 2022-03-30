// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbnpOL8wD-bkajt5QG6xztYJakU0SLS7U",
  authDomain: "ecommercecastino.firebaseapp.com",
  projectId: "ecommercecastino",
  storageBucket: "ecommercecastino.appspot.com",
  messagingSenderId: "1000629707526",
  appId: "1:1000629707526:web:8111629779518c19f47487"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
  return app   
}