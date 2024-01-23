import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = { 
  apiKey: "AIzaSyBb7hHJvh8-cxzYvi-r5kIFSGhompMo9LQ",
  authDomain: "webproje-4e70a.firebaseapp.com",
  projectId: "webproje-4e70a",
  storageBucket: "webproje-4e70a.appspot.com",
  messagingSenderId: "70137638783",
  appId: "1:70137638783:web:2b5fa91bfbfe2dfecbf44a",
  measurementId: "G-SGQ36F1NPF"
 };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
  