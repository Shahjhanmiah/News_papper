import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATECVAcLDVlsjlFF4i3XQiieYgCz0DFpA",
  authDomain: "newspapper-c2598.firebaseapp.com",
  projectId: "newspapper-c2598",
  storageBucket: "newspapper-c2598.appspot.com",
  messagingSenderId: "1074631460744",
  appId: "1:1074631460744:web:48f904c282436231641c3d",
  measurementId: "G-40FNB5WEHN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app  ;
