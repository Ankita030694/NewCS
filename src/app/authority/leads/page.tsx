'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp, faMessage, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { onAuthStateChanged } from 'firebase/auth';
import LeadsTable from './LeadsTable';
import { auth } from '@/lib/firebase';

export const dynamic = 'force-dynamic';

export default function LeadsPage() {
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
        <span className="text-sm font-medium text-[#0C2756]/70">Checking your access…</span>
      </div>
    );
  }

  if (!isAuthorized) {
    return null;
  }

  return (
    <div className="space-y-8">
      <section className="grid gap-4 lg:grid-cols-[minmax(0,_1fr)_340px]">
      </section>

      <section className="space-y-4">
        <header className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-[#0C2756]">Lead queue</h2>
          
        </header>
        <LeadsTable />
      </section>
    </div>
  );
}

type HighlightCardProps = {
  icon: IconDefinition;
  title: string;
  value: string;
};

const HighlightCard = ({ icon, title, value }: HighlightCardProps) => {
  return (
    <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white/90 backdrop-blur">
      <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-white/70">
        <FontAwesomeIcon icon={icon} className="h-3.5 w-3.5" />
        <span>{title}</span>
      </div>
      <p className="mt-2 text-lg font-semibold text-white">{value}</p>
    </div>
  );
};

