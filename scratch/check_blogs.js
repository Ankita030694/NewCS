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

// Mock slug functions (copied from src/lib/slug.ts logic)
const slugify = (value) => {
  if (!value) return '';
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-+|-+$/g, '');
};

const normalisePathSegment = (segment) => {
  if (!segment) return '';
  let value = segment.trim().replace(/^[\/]+/, '').replace(/[\/]+/g, '/');
  if (value.toLowerCase().startsWith('resources/')) value = value.slice(10);
  return decodeURIComponent(value);
};

const getPathnameFromInput = (input) => {
  const value = input.trim();
  if (!value) return '';
  try {
    const url = new URL(value);
    return url.pathname || '';
  } catch {
    if (value.includes('.')) {
      try {
        const url = new URL(`https://${value}`);
        return url.pathname || '';
      } catch { return value; }
    }
    return value;
  }
};

const canonicaliseSlug = (rawValue) => {
  if (!rawValue) return '';
  const pathname = getPathnameFromInput(rawValue);
  const cleaned = normalisePathSegment(pathname);
  return slugify(cleaned);
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function listBlogs() {
  try {
    const blogsRef = collection(db, 'blogs');
    const snapshot = await getDocs(blogsRef);
    console.log(`Found ${snapshot.docs.length} blogs`);
    snapshot.docs.slice(0, 10).forEach(doc => {
      const data = doc.data();
      const rawSlug = data.slug || '';
      const title = data.title || '';
      const canonSlug = canonicaliseSlug(rawSlug || title || doc.id);
      console.log(`ID: ${doc.id} | Title: ${title.slice(0, 30)}... | RawSlug: ${rawSlug} | Canon: ${canonSlug}`);
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
  }
  process.exit(0);
}

listBlogs();
