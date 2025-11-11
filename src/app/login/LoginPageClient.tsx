'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
        message: 'You are logged in. Redirecting to the dashboard...',
      });

      setTimeout(() => {
        router.push('/');
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
    <div className="relative min-h-screen flex flex-col bg-white">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(circle at top left, rgba(15, 138, 95, 0.15) 0%, rgba(255, 255, 255, 0) 45%), radial-gradient(circle at top right, rgba(245, 215, 66, 0.28) 0%, rgba(255, 255, 255, 0) 52%), linear-gradient(180deg, rgba(12, 39, 86, 0.08) 0%, rgba(12, 39, 86, 0) 50%)',
        }}
      />

      <Navbar />

      <main className="flex-1 w-full">
        <section className="relative w-full">
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute -top-24 -left-24 w-[260px] h-[260px] rounded-full opacity-25 blur-3xl"
              style={{
                background: 'linear-gradient(135deg, rgba(15,138,95,0.55) 0%, rgba(245,215,66,0.35) 100%)',
              }}
            />
            <div
              className="absolute bottom-0 right-[-60px] w-[340px] h-[340px] rounded-full opacity-20 blur-3xl"
              style={{
                background: 'linear-gradient(135deg, rgba(12,39,86,0.35) 0%, rgba(15,138,95,0.45) 100%)',
              }}
            />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(12,39,86,0.12)] bg-white/80 px-4 py-2 shadow-[0_8px_32px_rgba(12,39,86,0.08)] backdrop-blur">
                  <FontAwesomeIcon icon={faShieldHalved} className="text-[#0F8A5F] w-4 h-4" />
                  <span className="text-xs sm:text-sm font-medium uppercase tracking-wide text-[#0C2756]">
                    Secure Client Access
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-[#0C2756]">
                  Log in to continue your<br className="hidden sm:block" />
                  debt-free journey
                </h1>

                <p className="max-w-xl text-sm sm:text-base text-[rgba(12,39,86,0.72)] leading-relaxed">
                  Access your personalized dashboard to track settlements, review RBI-compliant documentation,
                  and connect instantly with our legal negotiators. We keep your data encrypted and secured at every step.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FeatureCard
                    icon={faHandsHelping}
                    title="Legal guidance"
                    description="Stay connected with our experts for case updates and next steps."
                  />
                  <FeatureCard
                    icon={faScaleBalanced}
                    title="Compliance first"
                    description="Access RBI-compliant settlement letters and documentation anytime."
                  />
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-[#0F8A5F] via-[#0F8A5F] to-[#F5D742] opacity-80 blur-xl" />
                <div className="relative rounded-[26px] bg-white shadow-[0_24px_60px_rgba(12,39,86,0.12)] border border-[rgba(12,39,86,0.08)] p-6 sm:p-8 space-y-6">
                  <header className="space-y-2">
                    <h2 className="text-2xl font-semibold text-[#0C2756]">Welcome back</h2>
                    <p className="text-sm text-[rgba(12,39,86,0.6)]">
                      Enter your registered email address and password to access your CredSettle dashboard.
                    </p>
                  </header>

                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-[#0C2756]">
                        Email address
                      </label>
                      <div className="relative">
                        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#0F8A5F]">
                          <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                        </span>
                        <input
                          id="email"
                          type="email"
                          required
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          className="w-full rounded-xl border border-[rgba(12,39,86,0.15)] bg-white/90 px-11 py-3 text-sm text-[#0C2756] shadow-[0_8px_24px_rgba(12,39,86,0.06)] outline-none transition focus:border-[#0F8A5F] focus:ring-2 focus:ring-[#0F8A5F]/30"
                          placeholder="you@example.com"
                          autoComplete="email"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="password" className="text-sm font-semibold text-[#0C2756]">
                        Password
                      </label>
                      <div className="relative">
                        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#0F8A5F]">
                          <FontAwesomeIcon icon={faLock} className="w-4 h-4" />
                        </span>
                        <input
                          id="password"
                          type="password"
                          required
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                          className="w-full rounded-xl border border-[rgba(12,39,86,0.15)] bg-white/90 px-11 py-3 text-sm text-[#0C2756] shadow-[0_8px_24px_rgba(12,39,86,0.06)] outline-none transition focus:border-[#0F8A5F] focus:ring-2 focus:ring-[#0F8A5F]/30"
                          placeholder="Enter your password"
                          autoComplete="current-password"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <Link
                        href="/contact"
                        className="text-xs font-semibold uppercase tracking-wide text-[#0C2756] hover:text-[#0F8A5F] transition"
                      >
                        Need help? Talk to us
                      </Link>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitDisabled}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0F8A5F] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(15,138,95,0.28)] transition disabled:cursor-not-allowed disabled:opacity-70 hover:bg-[#0d6b4c]"
                    >
                      {status.type === 'loading' ? 'Signing you in…' : 'Sign in to your account'}
                      {status.type !== 'loading' && <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />}
                    </button>
                  </form>

                  {status.type === 'error' && (
                    <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      {status.message}
                    </p>
                  )}
                  {status.type === 'success' && (
                    <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                      {status.message}
                    </p>
                  )}

                  <div className="rounded-lg bg-[rgba(12,39,86,0.05)] px-4 py-3 text-xs text-[rgba(12,39,86,0.62)] leading-relaxed">
                    By continuing, you agree to our{' '}
                    <Link href="/terms-and-conditions" className="font-semibold text-[#0C2756] underline underline-offset-2">
                      Terms & Conditions
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy-policy" className="font-semibold text-[#0C2756] underline underline-offset-2">
                      Privacy Policy
                    </Link>
                    . CredSettle ensures your data remains protected within RBI-compliant frameworks.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
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
    <div className="rounded-2xl border border-[rgba(12,39,86,0.1)] bg-white/80 p-5 shadow-[0_16px_40px_rgba(12,39,86,0.08)] backdrop-blur">
      <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F8A5F]/10 text-[#0F8A5F]">
        <FontAwesomeIcon icon={icon} className="w-5 h-5" />
      </div>
      <h3 className="text-lg font-semibold text-[#0C2756]">{title}</h3>
      <p className="mt-2 text-sm text-[rgba(12,39,86,0.68)] leading-relaxed">{description}</p>
    </div>
  );
}


