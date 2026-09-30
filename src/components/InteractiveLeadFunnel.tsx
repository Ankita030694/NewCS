'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

interface FunnelDraft {
  legalIssue: string;
  debtBracket: string;
  name: string;
  number: string;
  email: string;
  step: number;
}

interface PageNuance {
  badge: string;
  title: string;
  subtitle: string;
  question1: string;
  options1: string[];
}

const LENDER_MAP: Record<string, string> = {
  'true-balance': 'True Balance',
  'muthoot-finance': 'Muthoot Finance',
  'muthoot': 'Muthoot Finance',
  'mpokket': 'mPokket',
  'sbi': 'State Bank of India (SBI)',
  'axis-bank': 'Axis Bank',
  'axis': 'Axis Bank',
  'hdfc': 'HDFC Bank',
  'union-bank': 'Union Bank of India',
  'ram-fincorp': 'RAM Fincorp',
  'dmi-finance': 'DMI Finance',
  'slice': 'Slice',
  'bajaj-finserv': 'Bajaj Finserv',
  'bajaj': 'Bajaj Finserv',
  'shriram-finance': 'Shriram Finance',
  'shriram': 'Shriram Finance',
  'bank-of-baroda': 'Bank of Baroda',
  'snapmint': 'Snapmint',
  'kreditbee': 'KreditBee',
  'icici': 'ICICI Bank',
  'navi': 'Navi',
  'kissht': 'Kissht',
  'stashfin': 'Stashfin',
  'rbl-bank': 'RBL Bank',
  'rbl': 'RBL Bank',
  'piramal-finance': 'Piramal Finance',
  'piramal': 'Piramal Finance',
  'yes-bank': 'Yes Bank',
  'idfc': 'IDFC FIRST Bank',
  'poonawalla': 'Poonawalla Fincorp',
  'cholamandalam': 'Cholamandalam',
  'fibe': 'Fibe',
  'kotak': 'Kotak Mahindra Bank',
  'rupee-112': 'Rupee112',
  'tata-capital': 'Tata Capital',
  'paytm': 'Paytm Loans',
  'indusind': 'IndusInd Bank',
  'payu-finance': 'PayU Finance',
  'payu': 'PayU Finance',
  'mobikwik': 'MobiKwik',
  'federal-bank': 'Federal Bank',
  'incred': 'InCred',
  'canara-bank': 'Canara Bank',
  'punjab-national-bank': 'Punjab National Bank',
  'pnb': 'Punjab National Bank',
  'standard-chartered': 'Standard Chartered',
  'hero-fincorp': 'Hero FinCorp',
  'aditya-birla': 'Aditya Birla Capital',
  'iifl': 'IIFL Finance',
  'money-view': 'Money View',
  'faircent': 'Faircent',
  'ring': 'Ring App',
  'cashe': 'CASHe',
  'citibank': 'Citibank',
  'citi': 'Citibank',
  'krazybee': 'KrazyBee',
  'smfg-india-credit': 'SMFG India Credit',
  'smfg': 'SMFG India Credit',
  'au-small-finance-bank': 'AU Small Finance Bank',
  'au-bank': 'AU Small Finance Bank',
};

const DEBT_BRACKETS = [
  '₹3 Lakhs - ₹15 Lakhs',
  '₹15 Lakhs - ₹30 Lakhs',
  '₹30 Lakhs - ₹50 Lakhs',
  'Above ₹50 Lakhs',
];

function getNuanceForPath(pathname: string): PageNuance {
  const p = (pathname || '').toLowerCase();

  // 0. City specific routes (e.g. /loan-settlement-by-city/delhi)
  if (p.includes('/loan-settlement-by-city/')) {
    const rawCity = p.split('/loan-settlement-by-city/')[1]?.split('/')[0]?.replace(/-/g, ' ');
    if (rawCity) {
      const cityName = rawCity.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      return {
        badge: `${cityName} Loan Settlement`,
        title: `${cityName} Loan Settlement Assessment`,
        subtitle: `Answer 2 simple questions to check your legal settlement eligibility in ${cityName}.`,
        question1: `1. What loan or debt challenge are you facing in ${cityName}?`,
        options1: [
          `Recovery agent harassment & threatening calls in ${cityName}`,
          'Unable to pay multiple loan or credit card EMIs',
          'Payday loans or instant app loan default',
          `Received legal notice, Section 138, or court summons in ${cityName}`,
          'Looking for an RBI-compliant One-Time Settlement (OTS)',
        ],
      };
    }
  }

  // 1. Specific bank or NBFC
  for (const [slug, name] of Object.entries(LENDER_MAP)) {
    if (p.includes(slug)) {
      return {
        badge: `${name} Settlement`,
        title: `${name} Loan Settlement Assessment`,
        subtitle: `Answer 2 simple questions to check your settlement eligibility with ${name}.`,
        question1: `1. What issue are you facing with your ${name} loan?`,
        options1: [
          `Recovery agent harassment & threatening calls from ${name}`,
          `Unable to pay ${name} loan EMIs or dues`,
          `Payday loans or instant app loan default`,
          `Received legal notice, Section 138, or arbitration from ${name}`,
          `Looking for a one-time settlement (OTS) with ${name}`,
        ],
      };
    }
  }

  // 2. Legal notice / court / 138 / arbitration
  if (['legal-notice', '138', 'cheque', 'court', 'fir', 'arbitration', 'jail', 'drt', 'sarfaesi', 'warrant', 'police'].some(k => p.includes(k))) {
    return {
      badge: 'Legal Defense',
      title: 'Legal Notice & Court Defense Assessment',
      subtitle: 'Answer 2 simple questions to understand your advocate defence and settlement options.',
      question1: '1. What legal notice or action has been initiated against you?',
      options1: [
        'Received bank advocate legal notice / demand letter',
        'Section 138 NI Act (cheque bounce) court summons',
        'Payday loans or recovery agent legal threats',
        'Arbitration notice or Lok Adalat hearing notice',
        'Threatened with police complaint or bailable warrant',
      ],
    };
  }

  // 3. Harassment & Recovery Agents
  if (['harass', 'recovery', 'home-visit', 'calling-family', 'calling-after-7pm', 'rules-for-recovery'].some(k => p.includes(k))) {
    return {
      badge: 'Anti-Harassment Protection',
      title: 'Anti-Harassment & Legal Protection Assessment',
      subtitle: 'Answer 2 simple questions to get immediate legal protection against recovery harassment.',
      question1: '1. What recovery agent issue are you currently experiencing?',
      options1: [
        'Recovery agents illegally visiting home or workplace',
        'Threatening calls to family, relatives, or reference contacts',
        'Payday loans or instant loan app extortion',
        'Abusive, non-stop calls or calls after 7 PM',
        'Bank threatening arrest or fake legal actions',
      ],
    };
  }

  // 4. App Loans / 7-Day Loans
  if (['7-day', 'app-loan', 'loan-app', 'instant-loan', 'fintech'].some(k => p.includes(k))) {
    return {
      badge: 'Instant App Loan Relief',
      title: 'Loan App Harassment & Settlement Assessment',
      subtitle: 'Answer 2 simple questions to stop instant loan app harassment and close debts legally.',
      question1: '1. What loan app challenge are you facing?',
      options1: [
        'Harassment and abusive threats from instant lending apps',
        'Threats to contact phone contacts or share morphed photos',
        'Payday loans or multiple digital app defaults',
        'Relentless automated calls & abusive WhatsApp messages',
        'Want legal closure and protection from illegal loan apps',
      ],
    };
  }

  // 5. Credit Card Settlement
  if (['credit-card', 'card'].some(k => p.includes(k))) {
    return {
      badge: 'Credit Card Settlement',
      title: 'Credit Card Settlement & Relief Assessment',
      subtitle: 'Answer 2 simple questions to eliminate interest traps and settle your credit card debt.',
      question1: '1. What credit card issue are you looking to resolve?',
      options1: [
        'Trapped in minimum amount due & unmanageable interest rates',
        'Credit card recovery agent harassment & threats',
        'Payday loans or multiple digital credit card defaults',
        'Received legal notice or arbitration for credit card dues',
        'Need legal help for one-time settlement (OTS) with bank',
      ],
    };
  }

  // 6. CIBIL Score & Restoration
  if (['cibil', 'score'].some(k => p.includes(k))) {
    return {
      badge: 'CIBIL & Debt Settlement',
      title: 'CIBIL & Loan Settlement Assessment',
      subtitle: 'Answer 2 simple questions to explore your settlement & credit restoration options.',
      question1: '1. What is your primary concern regarding your loan settlement?',
      options1: [
        'Want to settle unpaid dues and stop legal action',
        'Concerned about CIBIL score drop after settlement',
        'Payday loans or unmanageable multiple EMIs',
        'Need advice on obtaining bank NOC and closing accounts',
        'Recovery agent harassment affecting peace of mind',
      ],
    };
  }

  // Default: General Loan Settlement
  return {
    badge: 'Loan Settlement',
    title: 'Loan Settlement Assessment',
    subtitle: 'Answer 2 simple questions to check your settlement eligibility.',
    question1: '1. What issue are you facing with your loan?',
    options1: [
      'Bank or recovery agent harassment & threatening calls',
      'Unable to pay multiple loan or credit card EMIs',
      'Payday loans or instant loan apps',
      'Received legal notice, Section 138 (cheque bounce), or arbitration',
      'Looking for a one-time settlement (OTS) with bank',
    ],
  };
}

/**
 * Mobile autofill resilient phone normalizer.
 * Detects and strips +91, 91, or leading 0, spaces, dashes down to 10 digits.
 */
function normalizePhoneNumber(raw: string): string {
  let digits = raw.replace(/\D/g, '');

  if (digits.startsWith('91') && digits.length > 10) {
    digits = digits.slice(2);
  }

  while (digits.startsWith('0')) {
    digits = digits.slice(1);
  }

  if (digits.length > 10) {
    digits = digits.slice(0, 10);
  }

  return digits;
}

interface InteractiveLeadFunnelProps {
  className?: string;
  isFooterPlacement?: boolean;
}

export default function InteractiveLeadFunnel({
  className = '',
  isFooterPlacement = false,
}: InteractiveLeadFunnelProps = {}) {
  const pathname = usePathname();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const isSubmittingRef = useRef(false);

  // Exclude thank-you, success, and administrative paths
  const excludedPaths = [
    '/thank-you',
    '/thank-you/',
    '/success',
    '/login',
    '/authority',
    '/nullify',
    '/contact',
    '/contact/',
  ];
  const isExcluded =
    excludedPaths.some(p => pathname?.startsWith(p)) ||
    (isFooterPlacement && (pathname === '/' || pathname?.startsWith('/resources/') || pathname?.startsWith('/loan-settlement-by-city/')));

  const nuance = getNuanceForPath(pathname || '');

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [legalIssue, setLegalIssue] = useState('');
  const [debtBracket, setDebtBracket] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [draftLoaded, setDraftLoaded] = useState(false);

  const storageKey = typeof window !== 'undefined'
    ? `credsettle:funnel_draft:${window.location.pathname}`
    : 'credsettle:funnel_draft:default';

  // Restore draft on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed: Partial<FunnelDraft> = JSON.parse(saved);
        if (parsed.legalIssue) setLegalIssue(parsed.legalIssue);
        if (parsed.debtBracket) setDebtBracket(parsed.debtBracket);
        if (parsed.name) setName(parsed.name);
        if (parsed.number) setNumber(parsed.number);
        if (parsed.email) setEmail(parsed.email);
        if (parsed.step && (parsed.step === 1 || parsed.step === 2 || parsed.step === 3)) {
          setStep(parsed.step as 1 | 2 | 3);
        }
      }
    } catch {
      // Ignore storage errors
    } finally {
      setDraftLoaded(true);
    }
  }, [storageKey]);

  const notifyFunnelActive = () => {
    if (typeof window !== 'undefined') {
      (window as any).__credsettle_funnel_active = true;
      window.dispatchEvent(new CustomEvent('credsettle:funnel_active'));
    }
  };

  // If user has restored draft or entered data, notify global popup to not interrupt
  useEffect(() => {
    if (legalIssue || debtBracket || name || number || email || step > 1) {
      notifyFunnelActive();
    }
  }, [legalIssue, debtBracket, name, number, email, step]);

  // Persist draft on state changes
  useEffect(() => {
    if (!draftLoaded) return;
    try {
      const draft: FunnelDraft = {
        legalIssue,
        debtBracket,
        name,
        number,
        email,
        step,
      };
      localStorage.setItem(storageKey, JSON.stringify(draft));
    } catch {
      // Ignore quota errors
    }
  }, [legalIssue, debtBracket, name, number, email, step, draftLoaded, storageKey]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleaned = normalizePhoneNumber(e.target.value);
    setNumber(cleaned);
    setPhoneError('');
    if (errors.number) setErrors(prev => ({ ...prev, number: '' }));
  };

  const handlePhonePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text');
    const cleaned = normalizePhoneNumber(pasted);
    setNumber(cleaned);
    setPhoneError('');
    if (errors.number) setErrors(prev => ({ ...prev, number: '' }));
  };

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = 'Please enter your full name';
    }

    if (!number) {
      newErrors.number = 'Mobile number is required';
    } else if (number.length !== 10) {
      setPhoneError('Please enter a valid 10-digit mobile number');
      return false;
    } else if (['0', '1', '2', '3', '4', '5'].includes(number[0])) {
      setPhoneError('Mobile number should start with 6, 7, 8, or 9');
      return false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmittingRef.current || loading) return;

    if (!legalIssue) {
      setStep(1);
      return;
    }

    if (!debtBracket) {
      setStep(2);
      return;
    }

    if (!validateStep3()) {
      return;
    }

    isSubmittingRef.current = true;
    setLoading(true);
    setPhoneError('');

    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, '0')}-${String(
      today.getMonth() + 1
    ).padStart(2, '0')}-${today.getFullYear()}`;

    let captchaToken = '';
    if (executeRecaptcha) {
      try {
        captchaToken = await executeRecaptcha('interactive_funnel_submit');
      } catch (err) {
        console.warn('reCAPTCHA error:', err);
      }
    }

    const bundledMessage = `[Assessment Funnel - ${nuance.badge}] Issue: ${legalIssue} | Total Debt: ${debtBracket}`;

    const payload = {
      name: name.trim(),
      number: number.trim(),
      phone: number.trim(),
      email: email.trim().toLowerCase(),
      state: 'India',
      city: 'India',
      message: bundledMessage,
      queries: bundledMessage,
      employmentStatus: '',
      monthlyIncome: '',
      harassment: (legalIssue.toLowerCase().includes('harass') || legalIssue.toLowerCase().includes('payday')) ? 'Yes' : '',
      creditCardDues: '',
      personalLoanDues: '',
      canPay: '',
      created: Date.now(),
      date: formattedDate,
      captchaToken,
      submissionUrl: typeof window !== 'undefined' ? window.location.href : '',
      utmParams: typeof window !== 'undefined'
        ? (new URLSearchParams(window.location.search).toString()
            ? Object.fromEntries(new URLSearchParams(window.location.search))
            : {})
        : {},
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit details');
      }

      try {
        localStorage.removeItem(storageKey);
      } catch {
        // Ignore
      }

      try {
        localStorage.setItem('credsettle:user_email', email.trim().toLowerCase());
        localStorage.setItem('credsettle:user_phone', number.trim());
        localStorage.setItem('credsettle:last_submission_date', formattedDate);
      } catch {
        // Ignore
      }

      window.location.href = '/thank-you';
    } catch (err: any) {
      isSubmittingRef.current = false;
      setLoading(false);
      console.error('Submission error:', err);
      alert(err.message || 'Submission failed. Please try again.');
    }
  };

  const handleSelectIssue = (issue: string) => {
    setLegalIssue(issue);
    setErrors(prev => ({ ...prev, legalIssue: '' }));
    notifyFunnelActive();
    setTimeout(() => {
      setStep(2);
    }, 180);
  };

  const handleSelectBracket = (bracket: string) => {
    setDebtBracket(bracket);
    setErrors(prev => ({ ...prev, debtBracket: '' }));
    notifyFunnelActive();
    setTimeout(() => {
      setStep(3);
    }, 180);
  };

  // If excluded page, do not render
  if (isExcluded) return null;

  return (
    <section
      className={`w-full py-8 md:py-12 pb-20 sm:pb-12 px-4 bg-slate-50 ${className}`}
      onClickCapture={notifyFunnelActive}
      onFocusCapture={notifyFunnelActive}
    >
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-7 md:p-8 shadow-sm">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
              {nuance.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              {nuance.subtitle}
            </p>
          </div>

          {/* Step Progress Tracker */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-xs font-semibold text-gray-600 mb-2">
              <span>Step {step} of 3</span>
              <span className="text-blue-600">
                {step === 1 ? 'Question 1' : step === 2 ? 'Question 2' : 'Final Step'}
              </span>
            </div>
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
              <div
                className="bg-blue-600 h-full transition-all duration-300 rounded-full"
                style={{ width: step === 1 ? '33.33%' : step === 2 ? '66.66%' : '100%' }}
              />
            </div>
          </div>

          {/* STEP 1: Nuance-Matched Issue */}
          {step === 1 && (
            <div className="space-y-4">
              <fieldset>
                <legend className="text-sm sm:text-base font-semibold text-gray-900 mb-3 block">
                  {nuance.question1}
                </legend>

                <div className="space-y-2.5">
                  {nuance.options1.map((issue) => {
                    const isSelected = legalIssue === issue;
                    return (
                      <label
                        key={issue}
                        onClick={() => handleSelectIssue(issue)}
                        className={`flex items-center gap-3 p-3.5 sm:p-4 rounded-xl border cursor-pointer transition-colors min-h-[48px] select-none ${
                          isSelected
                            ? 'border-blue-600 bg-blue-50/50 text-gray-900'
                            : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-800'
                        }`}
                      >
                        <input
                          type="radio"
                          name="legalIssue"
                          value={issue}
                          checked={isSelected}
                          onChange={() => handleSelectIssue(issue)}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 flex-shrink-0 cursor-pointer"
                        />
                        <span className="text-xs sm:text-sm font-medium leading-relaxed">
                          {issue}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              {errors.legalIssue && (
                <p className="text-xs text-red-600 font-medium">{errors.legalIssue}</p>
              )}

              <div className="pt-3 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    if (!legalIssue) {
                      setErrors(prev => ({ ...prev, legalIssue: 'Please select an option to continue' }));
                      return;
                    }
                    setStep(2);
                  }}
                  disabled={!legalIssue}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium text-sm transition-colors cursor-pointer"
                >
                  Next Question
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Total Debt Liability Bracket */}
          {step === 2 && (
            <div className="space-y-4">
              <fieldset>
                <legend className="text-sm sm:text-base font-semibold text-gray-900 mb-3 block">
                  2. What is your total outstanding loan / credit card amount?
                </legend>

                <div className="space-y-2.5">
                  {DEBT_BRACKETS.map((bracket) => {
                    const isSelected = debtBracket === bracket;
                    return (
                      <label
                        key={bracket}
                        onClick={() => handleSelectBracket(bracket)}
                        className={`flex items-center gap-3 p-3.5 sm:p-4 rounded-xl border cursor-pointer transition-colors min-h-[48px] select-none ${
                          isSelected
                            ? 'border-blue-600 bg-blue-50/50 text-gray-900'
                            : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-800'
                        }`}
                      >
                        <input
                          type="radio"
                          name="debtBracket"
                          value={bracket}
                          checked={isSelected}
                          onChange={() => handleSelectBracket(bracket)}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 flex-shrink-0 cursor-pointer"
                        />
                        <span className="text-xs sm:text-sm font-medium">
                          {bracket}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              {errors.debtBracket && (
                <p className="text-xs text-red-600 font-medium">{errors.debtBracket}</p>
              )}

              <div className="pt-3 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (!debtBracket) {
                      setErrors(prev => ({ ...prev, debtBracket: 'Please select an option to continue' }));
                      return;
                    }
                    setStep(3);
                  }}
                  disabled={!debtBracket}
                  className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium text-sm transition-colors cursor-pointer"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Contact Details */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                  Let us help you resolve your loan issue
                </h3>
                <p className="text-xs text-gray-600">
                  Share your contact details so our legal team can connect with you, explain your relief options, and help protect you from harassment.
                </p>
              </div>

              <div className="space-y-3.5 pt-1">
                {/* Name */}
                <div>
                  <label htmlFor="funnel-name" className="block text-xs font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="funnel-name"
                    name="name"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                    }}
                    placeholder="Enter your name"
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-xs sm:text-sm text-gray-900 bg-white"
                  />
                  {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Mobile Number with +91 prefix & autofill handling */}
                  <div>
                    <label htmlFor="funnel-phone" className="block text-xs font-medium text-gray-700 mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-3 text-xs text-gray-500 select-none border-r border-gray-300 pr-2">
                        +91
                      </span>
                      <input
                        type="tel"
                        inputMode="tel"
                        id="funnel-phone"
                        name="number"
                        autoComplete="tel"
                        value={number}
                        onChange={handlePhoneChange}
                        onPaste={handlePhonePaste}
                        placeholder="10-digit number"
                        maxLength={10}
                        className="w-full pl-12 pr-3 py-2.5 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-xs sm:text-sm text-gray-900 bg-white font-medium"
                      />
                    </div>
                    {errors.number && <p className="text-[11px] text-red-600 mt-1">{errors.number}</p>}
                    {phoneError && <p className="text-[11px] text-red-600 mt-1">{phoneError}</p>}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="funnel-email" className="block text-xs font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      inputMode="email"
                      id="funnel-email"
                      name="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                      }}
                      placeholder="name@example.com"
                      className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-xs sm:text-sm text-gray-900 bg-white"
                    />
                    {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-gray-500 text-center pt-1">
                * We do not provide loans. We only provide legal assistance in loan settlement.
              </p>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  Back
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium text-sm transition-colors cursor-pointer"
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
