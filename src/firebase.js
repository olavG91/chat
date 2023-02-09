import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBV5blioBjzkEWO-F8GG_U_nO4R-V8pJCU",
  authDomain: "chat-fabf4.firebaseapp.com",
  projectId: "chat-fabf4",
  storageBucket: "chat-fabf4.appspot.com",
  messagingSenderId: "461169552825",
  appId: "1:461169552825:web:dba6a7cb06020533941a68"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
