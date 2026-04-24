const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyAJ7rZD96MxIHQ7k4uwQgqaDpJsnKuhhJA",
  authDomain: "credsettlee.firebaseapp.com",
  projectId: "credsettlee",
  storageBucket: "credsettlee.firebasestorage.app",
  messagingSenderId: "161160283985",
  appId: "1:161160283985:web:aac411ccdce55c909c3570",
  measurementId: "G-K488YV2V5N",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function listBlogs() {
  try {
    const blogsRef = collection(db, 'blogs');
    const snapshot = await getDocs(blogsRef);
    console.log(`Found ${snapshot.docs.length} blogs`);
    snapshot.docs.slice(0, 5).forEach(doc => {
      const data = doc.data();
      console.log(`ID: ${doc.id} | Date: ${data.date} | Created: ${JSON.stringify(data.created)}`);
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
  }
  process.exit(0);
}

listBlogs();
