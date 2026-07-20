import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore"; // Import Firestore methods
import { getDatabase } from "firebase/database";
import { getStorage } from 'firebase/storage';
// Firebase configuration object
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
  throw new Error("Missing NEXT_PUBLIC_FIREBASE_API_KEY. Ensure environment variables are set correctly.");
}

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Export necessary Firebase services
const auth = getAuth(app);   // Export authentication
const db = getFirestore(app);  // Export Firestore
const database = getDatabase(app); // Export Realtime Database
const storage = getStorage(app);

// Export collection method to use it in your app
export { auth, db, database, storage, app, getFirestore, collection };