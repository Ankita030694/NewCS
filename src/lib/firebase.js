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

/** @type {any} */
let app;
/** @type {any} */
let auth;
/** @type {any} */
let db;
/** @type {any} */
let database;
/** @type {any} */
let storage;

if (process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
  // Initialize Firebase app
  app = initializeApp(firebaseConfig);

  // Export necessary Firebase services
  auth = getAuth(app);   // Export authentication
  db = getFirestore(app);  // Export Firestore
  database = getDatabase(app); // Export Realtime Database
  storage = getStorage(app);
} else {
  console.warn("Missing NEXT_PUBLIC_FIREBASE_API_KEY. Running Firebase in fallback mode.");
  app = {};
  auth = {};
  db = {};
  database = {};
  storage = {};
}

// Export collection method to use it in your app
export { auth, db, database, storage, app, getFirestore, collection };