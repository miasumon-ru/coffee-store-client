
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOJN_Dzmkp464PIv2qZNEHsOteVF6C6uU",
  authDomain: "coffee-store-client-9dffc.firebaseapp.com",
  projectId: "coffee-store-client-9dffc",
  storageBucket: "coffee-store-client-9dffc.appspot.com",
  messagingSenderId: "1051187022960",
  appId: "1:1051187022960:web:65e3219bb96394377cb8b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth