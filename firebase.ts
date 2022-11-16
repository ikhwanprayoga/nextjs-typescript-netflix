// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCEVJnxd9vxwMHzJju7dwG4unMjRJoBrI",
  authDomain: "nextjs-typescript-netflix.firebaseapp.com",
  projectId: "nextjs-typescript-netflix",
  storageBucket: "nextjs-typescript-netflix.appspot.com",
  messagingSenderId: "320476745216",
  appId: "1:320476745216:web:9e3349d7f649c4a9a3d2e5"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app
export { auth, db }