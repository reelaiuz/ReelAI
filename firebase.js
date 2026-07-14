import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyDyWfrTyrmc43bziK1oa6N53fZzHNA8KIw",
  authDomain: "reelai-95ed3.firebaseapp.com",
  projectId: "reelai-95ed3",
  storageBucket: "reelai-95ed3.firebasestorage.app",
  messagingSenderId: "901714241011",
  appId: "1:901714241011:web:aae7d088d6acf67f1c9e86"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };