import { cert, getApps, initializeApp, type AppOptions } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

if (!projectId || !clientEmail || !privateKey) {
  throw new Error(
    'Missing Firebase Admin credentials. Set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY env vars.'
  );
}

const appOptions: AppOptions = {
  credential: cert({
    projectId,
    clientEmail,
    privateKey,
  }),
};

const app = getApps().length > 0 ? getApps()[0] : initializeApp(appOptions);

export const adminDb = getFirestore(app);



