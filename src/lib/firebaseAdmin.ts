import { cert, getApps, initializeApp, type AppOptions } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

type ServiceAccountJSON = {
  project_id?: string;
  client_email?: string;
  private_key?: string;
};

const normalizePrivateKey = (value: string): string =>
  value.includes('\\n') ? value.replace(/\\n/g, '\n') : value;

const coercePrivateKey = (raw?: string | null): string | undefined => {
  if (!raw) {
    return undefined;
  }

  const trimmed = raw.trim();
  if (!trimmed) {
    return undefined;
  }

  const normalized = normalizePrivateKey(trimmed);
  if (normalized.includes('BEGIN PRIVATE KEY')) {
    return normalized;
  }

  try {
    const decoded = Buffer.from(trimmed, 'base64').toString('utf-8');
    const decodedNormalized = normalizePrivateKey(decoded);
    if (decodedNormalized.includes('BEGIN PRIVATE KEY')) {
      return decodedNormalized;
    }
  } catch (error) {
    console.warn('Failed to base64 decode FIREBASE_PRIVATE_KEY:', error);
  }

  return normalized;
};

const parseServiceAccount = (raw?: string | null): ServiceAccountJSON | null => {
  if (!raw) {
    return null;
  }
  try {
    return JSON.parse(raw) as ServiceAccountJSON;
  } catch (error) {
    console.warn('Unable to parse FIREBASE_SERVICE_ACCOUNT JSON:', error);
    return null;
  }
};

const serviceAccount = parseServiceAccount(process.env.FIREBASE_SERVICE_ACCOUNT);

const projectId =
  process.env.FIREBASE_PROJECT_ID ?? serviceAccount?.project_id ?? undefined;
const clientEmail =
  process.env.FIREBASE_CLIENT_EMAIL ?? serviceAccount?.client_email ?? undefined;
const privateKey =
  coercePrivateKey(process.env.FIREBASE_PRIVATE_KEY) ??
  coercePrivateKey(serviceAccount?.private_key) ??
  undefined;

if (!projectId || !clientEmail || !privateKey) {
  throw new Error(
    'Missing Firebase Admin credentials. Ensure FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY (or FIREBASE_SERVICE_ACCOUNT) env vars are set correctly.'
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
