'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faShieldHalved, faHandsHelping, faScaleBalanced, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type StatusState =
  | { type: 'idle' }
  | { type: 'loading' }
  | { type: 'success'; message: string }
  | { type: 'error'; message: string };

export default function LoginPageClient() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<StatusState>({ type: 'idle' });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status.type === 'loading') return;

    setStatus({ type: 'loading' });

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || 'Unable to login. Please try again.');
      }

      localStorage.setItem('credsettle:sessionToken', data?.token || '');
      localStorage.setItem('credsettle:refreshToken', data?.refreshToken || '');

      setStatus({
        type: 'success',
        message: 'You are logged in. Redirecting to the leads dashboard...',
      });

      setTimeout(() => {
        router.push('/authority/leads');
      }, 1500);
    } catch (error: any) {
      setStatus({
        type: 'error',
        message: error.message || 'Unable to login. Please try again.',
      });
    }
  };

  const isSubmitDisabled = !email.trim() || !password.trim() || status.type === 'loading';

  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at top left, rgba(18, 64, 40, 0.65) 0%, rgba(0, 0, 0, 0.15) 42%), radial-gradient(circle at bottom right, rgba(31, 99, 63, 0.55) 0%, rgba(0, 0, 0, 0.1) 48%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.85)] to-black" />
      </div>

      <main className="flex-1 w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <section className="relative w-full max-w-xl">
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute -top-24 -left-24 w-[260px] h-[260px] rounded-full opacity-25 blur-3xl"
              style={{
                background: 'linear-gradient(135deg, rgba(38, 153, 98, 0.55) 0%, rgba(16, 42, 28, 0.4) 100%)',
              }}
            />
            <div
              className="absolute bottom-0 right-[-60px] w-[340px] h-[340px] rounded-full opacity-25 blur-3xl"
              style={{
                background: 'linear-gradient(135deg, rgba(12, 26, 22, 0.6) 0%, rgba(46, 140, 85, 0.45) 100%)',
              }}
            />
          </div>

          <div className="relative z-10 w-full">
            <div className="relative">
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-[#ffffff] via-[#ffffff] to-[#ffffff] opacity-80 blur-xl" />
              <div className="relative rounded-[26px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] border border-[rgba(17,17,17,0.08)] p-6 sm:p-8 space-y-6">
                <header className="space-y-2">
                  <h2 className="text-2xl font-semibold text-[#0d2a1e]">Welcome back</h2>
                 
                </header>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-[#0d2a1e]">
                      Email address
                    </label>
                    <div className="relative">
                      <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#20945a]">
                        <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-[#000000]" />
                      </span>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="w-full rounded-xl border border-[rgba(0, 0, 0, 0.18)] bg-white px-11 py-3 text-sm text-[#000000] outline-none transition focus:border-[rgba(0, 0, 0, 0.55)] focus:ring-2 focus:ring-[rgba(39,192,123,0.12)] placeholder:text-[rgba(17,17,17,0.35)]"
                        placeholder="you@example.com"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-semibold text-[#0d2a1e]">
                      Password
                    </label>
                    <div className="relative">
                      <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#20945a]">
                        <FontAwesomeIcon icon={faLock} className="w-4 h-4 text-[#000000]" />
                      </span>
                      <input
                        id="password"
                        type="password"
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="w-full rounded-xl border border-[rgba(0, 2, 1, 0.18)] bg-white px-11 py-3 text-sm text-[#111111] shadow-[0_12px_32px_rgba(0,0,0,0.12)] outline-none transition focus:border-[rgba(39,192,123,0.55)] focus:ring-2 focus:ring-[rgba(39,192,123,0.12)] placeholder:text-[rgba(17,17,17,0.35)]"
                        placeholder="Enter your password"
                        autoComplete="current-password"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                 
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitDisabled}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#000000] px-4 py-3 text-sm font-semibold text-[#ffffff] transition disabled:cursor-not-allowed cursor-pointer"
                  >
                    {status.type === 'loading' ? 'Signing you in…' : 'Sign in to your account'}
                    {status.type !== 'loading' && <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 text-[#ffffff]" />}
                  </button>
                </form>

                {status.type === 'error' && (
                  <p className="rounded-lg border border-[rgba(247,71,71,0.25)] bg-[rgba(255,240,240,0.95)] px-4 py-3 text-sm text-[#7a1b1b]">
                    {status.message}
                  </p>
                )}
                {status.type === 'success' && (
                  <p className="rounded-lg border border-[rgba(39,192,123,0.25)] bg-[rgba(232,255,245,0.95)] px-4 py-3 text-sm text-[#0f442c]">
                    {status.message}
                  </p>
                )}

               
                </div>
              </div>

          </div>
        </section>
      </main>
    </div>
  );
}

type FeatureCardProps = {
  icon: IconDefinition;
  title: string;
  description: string;
};

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-[rgba(50,194,122,0.28)] bg-[rgba(8,24,16,0.92)] p-5 shadow-[0_20px_48px_rgba(0,0,0,0.4)] backdrop-blur">
      <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(50,194,122,0.15)] text-[#7cf0b0]">
        <FontAwesomeIcon icon={icon} className="w-5 h-5" />
      </div>
      <h3 className="text-lg font-semibold text-[rgba(229,255,244,0.95)]">{title}</h3>
      <p className="mt-2 text-sm text-[rgba(210,255,231,0.72)] leading-relaxed">{description}</p>
    </div>
  );
}


