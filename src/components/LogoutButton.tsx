'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import { auth } from '@/lib/firebase';

export default function LogoutButton() {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLogout = async () => {
    if (isLoggingOut) {
      return;
    }

    setIsLoggingOut(true);
    setErrorMessage(null);

    try {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('credsettle:sessionToken');
        localStorage.removeItem('credsettle:refreshToken');
      }

      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error('Error during logout:', error);
      setErrorMessage('We could not log you out. Please try again.');
      setIsLoggingOut(false);
    }
  };

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={handleLogout}
        disabled={isLoggingOut}
        className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <FontAwesomeIcon icon={faArrowRightFromBracket} className="h-4 w-4" />
        {isLoggingOut ? 'Logging out…' : 'Log out'}
      </button>
      {errorMessage && (
        <p className="text-xs font-medium text-red-200">{errorMessage}</p>
      )}
    </div>
  );
}

