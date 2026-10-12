'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLock,
  faShieldHalved,
  faScaleBalanced,
  faArrowRight,
  faFileContract,
  faPhoneVolume,
  faCircleQuestion,
  faUserTie,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';

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
      const credential = await signInWithEmailAndPassword(auth, email, password);
      const token = await credential.user.getIdToken();
      const refreshToken = credential.user.refreshToken;

      localStorage.setItem('credsettle:sessionToken', token || '');
      localStorage.setItem('credsettle:refreshToken', refreshToken || '');

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
    <div className="relative min-h-screen flex flex-col bg-[#07130e] text-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at top left, rgba(18, 64, 40, 0.65) 0%, rgba(0, 0, 0, 0.25) 45%), radial-gradient(circle at bottom right, rgba(31, 99, 63, 0.45) 0%, rgba(0, 0, 0, 0.3) 50%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.85)] to-[#07130e]" />
        <div
          className="absolute -top-24 -left-24 w-[360px] h-[360px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'linear-gradient(135deg, rgba(38, 153, 98, 0.55) 0%, rgba(16, 42, 28, 0.4) 100%)',
          }}
        />
        <div
          className="absolute top-1/3 -right-24 w-[420px] h-[420px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'linear-gradient(135deg, rgba(12, 26, 22, 0.6) 0%, rgba(46, 140, 85, 0.45) 100%)',
          }}
        />
      </div>

      {/* Header bar */}
      <header className="w-full border-b border-[rgba(255,255,255,0.08)] bg-[rgba(7,19,14,0.7)] backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2" aria-label="CredSettle Home">
            <span className="text-xl font-bold tracking-tight text-white">
              Cred<span className="text-[#32c27a]">Settle</span>
            </span>
          </Link>
          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <Link
              href="/"
              className="text-[rgba(255,255,255,0.7)] hover:text-white transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/services"
              className="text-[rgba(255,255,255,0.7)] hover:text-white transition-colors hidden sm:inline-block"
            >
              Settlement Services
            </Link>
            <a
              href="tel:8800226635"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[rgba(50,194,122,0.15)] border border-[rgba(50,194,122,0.3)] px-3 py-1.5 text-xs font-semibold text-[#7cf0b0] hover:bg-[rgba(50,194,122,0.25)] transition-colors"
            >
              <FontAwesomeIcon icon={faPhoneVolume} className="w-3 h-3" />
              <span>8800226635</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-16">
        {/* Top Hero Section: Split Portal Intro & Login Form */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Portal Overview & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(50,194,122,0.3)] bg-[rgba(50,194,122,0.12)] px-3.5 py-1 text-xs font-semibold text-[#7cf0b0] uppercase tracking-wider">
              <FontAwesomeIcon icon={faShieldHalved} className="w-3.5 h-3.5" />
              <span>Authorized Access Gateway</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                CredSettle Client &amp; Partner Portal Login
              </h1>
              <p className="text-sm sm:text-base text-[rgba(229,255,244,0.75)] leading-relaxed">
                Welcome to the unified CredSettle portal. Access your centralized legal dashboard to track debt settlement negotiations, inspect lender responses, and collaborate directly with your assigned advocate team.
              </p>
            </div>

            {/* Quick Feature Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="rounded-xl border border-[rgba(50,194,122,0.2)] bg-[rgba(12,32,23,0.7)] p-3.5 backdrop-blur-xs">
                <div className="flex items-center gap-2.5 text-[#7cf0b0] mb-1">
                  <FontAwesomeIcon icon={faChartLine} className="w-4 h-4" />
                  <span className="text-sm font-semibold text-white">Live Milestone Tracking</span>
                </div>
                <p className="text-xs text-[rgba(210,255,231,0.7)] leading-relaxed">
                  Monitor active bank negotiations, concession requests, and OTS approvals in real time.
                </p>
              </div>

              <div className="rounded-xl border border-[rgba(50,194,122,0.2)] bg-[rgba(12,32,23,0.7)] p-3.5 backdrop-blur-xs">
                <div className="flex items-center gap-2.5 text-[#7cf0b0] mb-1">
                  <FontAwesomeIcon icon={faFileContract} className="w-4 h-4" />
                  <span className="text-sm font-semibold text-white">Legal Notice Repository</span>
                </div>
                <p className="text-xs text-[rgba(210,255,231,0.7)] leading-relaxed">
                  Review formal legal replies drafted for Section 138, SARFAESI, and arbitration notices.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Sign-in Form Card */}
          <div className="lg:col-span-6 w-full max-w-lg mx-auto lg:max-w-none">
            <div className="relative">
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-[#32c27a]/30 via-white/10 to-[#32c27a]/20 opacity-80 blur-xl" />
              <div className="relative rounded-[26px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.12)] p-6 sm:p-8 space-y-6 text-[#111111]">
                <header className="space-y-1.5">
                  <h2 className="text-xl sm:text-2xl font-semibold text-[#0d2a1e]">
                    Sign in to Your Authorized CredSettle Portal Account
                  </h2>
                  <p className="text-xs sm:text-sm text-[#0d2a1e]/70">
                    Enter your registered credentials to access your secure case dashboard.
                  </p>
                </header>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs sm:text-sm font-semibold text-[#0d2a1e]">
                      Registered Email Address
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
                        className="w-full rounded-xl border border-[rgba(0,0,0,0.18)] bg-white px-10 py-3 text-sm text-[#000000] outline-none transition focus:border-[rgba(0,0,0,0.55)] focus:ring-2 focus:ring-[rgba(39,192,123,0.12)] placeholder:text-[rgba(17,17,17,0.35)]"
                        placeholder="you@example.com"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="password" className="text-xs sm:text-sm font-semibold text-[#0d2a1e]">
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
                        className="w-full rounded-xl border border-[rgba(0,2,1,0.18)] bg-white px-10 py-3 text-sm text-[#111111] shadow-[0_12px_32px_rgba(0,0,0,0.06)] outline-none transition focus:border-[rgba(39,192,123,0.55)] focus:ring-2 focus:ring-[rgba(39,192,123,0.12)] placeholder:text-[rgba(17,17,17,0.35)]"
                        placeholder="Enter your password"
                        autoComplete="current-password"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitDisabled}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0d2a1e] px-4 py-3 text-sm font-semibold text-[#ffffff] transition hover:bg-[#124028] disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer shadow-md"
                  >
                    {status.type === 'loading' ? 'Signing you in...' : 'Sign in to your account'}
                    {status.type !== 'loading' && <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 text-[#ffffff]" />}
                  </button>
                </form>

                {status.type === 'error' && (
                  <p className="rounded-lg border border-[rgba(247,71,71,0.25)] bg-[rgba(255,240,240,0.95)] px-4 py-3 text-xs sm:text-sm text-[#7a1b1b]">
                    {status.message}
                  </p>
                )}
                {status.type === 'success' && (
                  <p className="rounded-lg border border-[rgba(39,192,123,0.25)] bg-[rgba(232,255,245,0.95)] px-4 py-3 text-xs sm:text-sm text-[#0f442c]">
                    {status.message}
                  </p>
                )}

                <div className="pt-2 text-center text-xs text-[#0d2a1e]/60">
                  <span>Protected by 256-bit SSL encryption. Confidential advocate-client privilege applies.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Comprehensive Legal Case Management Features */}
        <section className="space-y-8 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Comprehensive Legal Case Management Features
            </h2>
            <p className="text-xs sm:text-sm text-[rgba(210,255,231,0.75)]">
              Our digital platform connects clients, legal advocates, and case managers in one secure workspace.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard
              icon={faChartLine}
              title="Real-Time Negotiation Milestones"
              description="Track daily settlement negotiations across banks and NBFCs. Review lender counter-offers and approved payment plans."
            />
            <FeatureCard
              icon={faFileContract}
              title="Legal Notice & Response Vault"
              description="Access certified legal replies drafted by our empanelled advocates to defend against Section 138 and SARFAESI actions."
            />
            <FeatureCard
              icon={faShieldHalved}
              title="Anti-Harassment Incident Desk"
              description="Log unauthorized recovery agent visits or calls. Our compliance team issues formal notices under RBI Fair Practices Code."
            />
            <FeatureCard
              icon={faUserTie}
              title="Direct Advocate Advisory Access"
              description="Connect directly with your dedicated senior legal advocate to review settlement proposals and plan final payment terms."
            />
          </div>
        </section>

        {/* Section 2: Bank-Grade Data Security & Legal Privacy Standards */}
        <section className="space-y-8 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Bank-Grade Data Security &amp; Legal Privacy Standards
            </h2>
            <p className="text-xs sm:text-sm text-[rgba(210,255,231,0.75)]">
              We uphold rigorous confidentiality protocols to protect your personal and financial information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-2xl border border-[rgba(50,194,122,0.2)] bg-[rgba(10,28,19,0.7)] p-5 backdrop-blur-xs space-y-2">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(50,194,122,0.15)] text-[#7cf0b0] mb-1">
                <FontAwesomeIcon icon={faLock} className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-white">256-Bit SSL Data Encryption</h3>
              <p className="text-xs text-[rgba(210,255,231,0.7)] leading-relaxed">
                All uploaded loan statements, KYC records, and settlement agreements are encrypted using industry standard protocols to ensure complete data integrity.
              </p>
            </div>

            <div className="rounded-2xl border border-[rgba(50,194,122,0.2)] bg-[rgba(10,28,19,0.7)] p-5 backdrop-blur-xs space-y-2">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(50,194,122,0.15)] text-[#7cf0b0] mb-1">
                <FontAwesomeIcon icon={faScaleBalanced} className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-white">Advocate-Client Legal Privilege</h3>
              <p className="text-xs text-[rgba(210,255,231,0.7)] leading-relaxed">
                Communications between you and our legal team are protected under professional privilege. Your records are never disclosed to unverified third parties.
              </p>
            </div>

            <div className="rounded-2xl border border-[rgba(50,194,122,0.2)] bg-[rgba(10,28,19,0.7)] p-5 backdrop-blur-xs space-y-2">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(50,194,122,0.15)] text-[#7cf0b0] mb-1">
                <FontAwesomeIcon icon={faShieldHalved} className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-white">RBI Regulatory Compliance</h3>
              <p className="text-xs text-[rgba(210,255,231,0.7)] leading-relaxed">
                Our debt resolution protocols follow Reserve Bank of India Fair Practices guidelines, ensuring all creditor settlements are legitimate and binding.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Frequently Asked Questions About Portal Access */}
        <section className="space-y-8 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Frequently Asked Questions About Portal Access
            </h2>
            <p className="text-xs sm:text-sm text-[rgba(210,255,231,0.75)]">
              Clear answers to common questions regarding client login, document uploads, and case security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-[rgba(50,194,122,0.2)] bg-[rgba(10,28,19,0.7)] p-5 space-y-2">
              <div className="flex items-start gap-3">
                <FontAwesomeIcon icon={faCircleQuestion} className="w-4 h-4 text-[#7cf0b0] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-white">Who can access the CredSettle portal?</h3>
                  <p className="text-xs text-[rgba(210,255,231,0.7)] mt-1 leading-relaxed">
                    The portal is reserved for registered borrowers managing active debt settlement files, accredited channel partners, and assigned legal advocates.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[rgba(50,194,122,0.2)] bg-[rgba(10,28,19,0.7)] p-5 space-y-2">
              <div className="flex items-start gap-3">
                <FontAwesomeIcon icon={faCircleQuestion} className="w-4 h-4 text-[#7cf0b0] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-white">How do I obtain my portal login credentials?</h3>
                  <p className="text-xs text-[rgba(210,255,231,0.7)] mt-1 leading-relaxed">
                    Login credentials are created automatically when your case is onboarded. If you need a password reset, please contact our support desk at 8800226635.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[rgba(50,194,122,0.2)] bg-[rgba(10,28,19,0.7)] p-5 space-y-2">
              <div className="flex items-start gap-3">
                <FontAwesomeIcon icon={faCircleQuestion} className="w-4 h-4 text-[#7cf0b0] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-white">Can I upload bank legal notices in the portal?</h3>
                  <p className="text-xs text-[rgba(210,255,231,0.7)] mt-1 leading-relaxed">
                    Yes. Borrowers can upload demand letters, Section 138 notices, and loan statements directly to their secure digital case file for legal analysis.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[rgba(50,194,122,0.2)] bg-[rgba(10,28,19,0.7)] p-5 space-y-2">
              <div className="flex items-start gap-3">
                <FontAwesomeIcon icon={faCircleQuestion} className="w-4 h-4 text-[#7cf0b0] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-white">Is my financial information shared with third parties?</h3>
                  <p className="text-xs text-[rgba(210,255,231,0.7)] mt-1 leading-relaxed">
                    No. CredSettle enforces strict non-disclosure policies. Your data is used exclusively by your assigned advocate for loan settlement negotiations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Priority Client & Partner Portal Support Helpdesk */}
        <section className="rounded-2xl border border-[rgba(50,194,122,0.3)] bg-gradient-to-r from-[rgba(10,32,22,0.9)] to-[rgba(7,20,14,0.9)] p-6 sm:p-8">
          <div className="sm:flex sm:items-center sm:justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h2 className="text-lg sm:text-xl font-bold text-white">
                Priority Client &amp; Partner Portal Support Helpdesk
              </h2>
              <p className="text-xs sm:text-sm text-[rgba(210,255,231,0.75)]">
                Need immediate help with your account login or active case documentation?
              </p>
              <p className="text-xs text-[#7cf0b0]">
                Available Monday to Saturday, 9:30 AM to 6:30 PM IST.
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex flex-wrap gap-2.5 justify-center sm:justify-end">
              <a
                href="tel:8800226635"
                className="inline-flex items-center gap-2 rounded-xl bg-[#32c27a] px-4 py-2.5 text-xs font-semibold text-[#07130e] hover:bg-[#28a764] transition-colors"
              >
                <FontAwesomeIcon icon={faPhoneVolume} className="w-3.5 h-3.5" />
                Call: 8800226635
              </a>
              <a
                href="mailto:support@credsettle.com"
                className="inline-flex items-center gap-2 rounded-xl border border-[rgba(50,194,122,0.4)] bg-[rgba(50,194,122,0.1)] px-4 py-2.5 text-xs font-semibold text-[#7cf0b0] hover:bg-[rgba(50,194,122,0.2)] transition-colors"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-3.5 h-3.5" />
                Email Support Team
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-[rgba(255,255,255,0.08)] bg-[rgba(5,14,10,0.9)] py-8 text-xs text-[rgba(210,255,231,0.6)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 CredSettle. All rights reserved. Legal debt resolution services in India.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          </div>
        </div>
      </footer>
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
    <div className="rounded-2xl border border-[rgba(50,194,122,0.2)] bg-[rgba(8,24,16,0.85)] p-5 shadow-[0_12px_32px_rgba(0,0,0,0.3)] backdrop-blur-xs flex flex-col justify-between">
      <div>
        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(50,194,122,0.15)] text-[#7cf0b0]">
          <FontAwesomeIcon icon={icon} className="w-4 h-4" />
        </div>
        <p className="text-base font-semibold text-[rgba(229,255,244,0.95)]">{title}</p>
        <p className="mt-2 text-xs text-[rgba(210,255,231,0.7)] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
