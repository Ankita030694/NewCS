'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import AnalyticsClient from './AnalyticsClient';

export const dynamic = 'force-dynamic';

export default function AnalyticsPage() {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    if (typeof window === 'undefined') {
      return;
    }

    const hasSessionToken = !!localStorage.getItem('credsettle:sessionToken');
    if (hasSessionToken) {
      setIsAuthorized(true);
      setIsChecking(false);
      return;
    }

    unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthorized(true);
      } else {
        router.replace('/nullify');
      }
      setIsChecking(false);
    });

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [router]);

  if (isChecking) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <span className="text-sm font-medium text-[#0C2756]/70">Checking your access...</span>
      </div>
    );
  }

  if (!isAuthorized) {
    return null;
  }

  return <AnalyticsClient />;
}
