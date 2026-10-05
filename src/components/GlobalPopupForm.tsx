'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import {
  getNuanceForPath,
  DEBT_BRACKETS,
  normalizePhoneNumber,
  type PageNuance,
} from './InteractiveLeadFunnel';

const UTILITY_EXCLUDED_PATHS = [
  '/contact',
  '/thank-you',
  '/privacy-policy',
  '/terms-and-conditions',
  '/delete-your-app-account',
  '/login',
  '/authority',
  '/nullify',
  '/success',
  '/authors',
  '/author',
];

export default function GlobalPopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const isSubmittingRef = useRef(false);
  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const pathname = usePathname();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [legalIssue, setLegalIssue] = useState('');
  const [debtBracket, setDebtBracket] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  const nuance: PageNuance = getNuanceForPath(pathname || '');

  // Check if current page is in utility exclusions
  const isExcluded = UTILITY_EXCLUDED_PATHS.some(
    (prefix) => pathname === prefix || pathname?.startsWith(prefix + '/')
  );

  // Close when an inline funnel on the page becomes active
  useEffect(() => {
    const handleFunnelActive = () => {
      setIsOpen(false);
    };

    const handleOpenModal = () => {
      if (!isExcluded) {
        setIsOpen(true);
      }
    };

    window.addEventListener('credsettle:funnel_active', handleFunnelActive);
    window.addEventListener('credsettle:open_modal', handleOpenModal);

    return () => {
      window.removeEventListener('credsettle:funnel_active', handleFunnelActive);
      window.removeEventListener('credsettle:open_modal', handleOpenModal);
    };
  }, [isExcluded]);

  // Modal opens only on explicit programmatic trigger (e.g. CTA click event) and never automatically pops up
  useEffect(() => {
    if (isExcluded) {
      setIsOpen(false);
    }
  }, [pathname, isExcluded]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('credsettle:modal_dismissed', 'true');
    }
  };

  const handleSelectIssue = (issue: string) => {
    setLegalIssue(issue);
    setErrors((prev) => ({ ...prev, legalIssue: '' }));
    setTimeout(() => {
      setStep(2);
    }, 180);
  };

  const handleSelectBracket = (bracket: string) => {
    setDebtBracket(bracket);
    setErrors((prev) => ({ ...prev, debtBracket: '' }));
    setTimeout(() => {
      setStep(3);
    }, 180);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleaned = normalizePhoneNumber(e.target.value);
    setNumber(cleaned);
    setPhoneError('');
    if (errors.number) setErrors((prev) => ({ ...prev, number: '' }));
  };

  const handlePhonePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteText = e.clipboardData.getData('text');
    const cleaned = normalizePhoneNumber(pasteText);
    setNumber(cleaned);
    setPhoneError('');
    if (errors.number) setErrors((prev) => ({ ...prev, number: '' }));
  };

  const validateStep3 = () => {
    const errs: Record<string, string> = {};

    if (!name.trim()) {
      errs.name = 'Please enter your full name';
    }

    if (!number.trim()) {
      errs.number = 'Please enter your mobile number';
    } else if (number.length !== 10) {
      errs.number = 'Please enter a valid 10-digit mobile number';
    } else if (number.startsWith('0')) {
      errs.number = 'Mobile number cannot start with 0';
    }

    if (!email.trim()) {
      errs.email = 'Please enter your email address';
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        errs.email = 'Please enter a valid email address';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmittingRef.current || loading) return;
    if (!validateStep3()) return;

    isSubmittingRef.current = true;
    setLoading(true);

    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, '0')}-${String(
      today.getMonth() + 1
    ).padStart(2, '0')}-${today.getFullYear()}`;

    let captchaToken = '';
    if (executeRecaptcha) {
      try {
        captchaToken = await executeRecaptcha('global_popup_submit');
      } catch (err) {
        console.error('reCAPTCHA execution error:', err);
      }
    }

    const compiledMessage = `[Interactive Assessment Modal] Issue: ${legalIssue || 'Not Specified'} | Debt Bracket: ${debtBracket || 'Not Specified'}`;

    const payload = {
      name: name.trim(),
      number: number.trim(),
      phone: number.trim(),
      email: email.trim().toLowerCase(),
      state: 'India',
      city: 'India',
      message: compiledMessage,
      queries: compiledMessage,
      employmentStatus: '',
      monthlyIncome: '',
      harassment: legalIssue || '',
      creditCardDues: '',
      personalLoanDues: '',
      canPay: debtBracket || '',
      created: Date.now(),
      date: formattedDate,
      captchaToken,
      submissionUrl: typeof window !== 'undefined' ? window.location.href : '',
      utmParams:
        typeof window !== 'undefined'
          ? Object.fromEntries(new URLSearchParams(window.location.search))
          : {},
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit your details. Please try again.');
      }

      // Meta Pixel advanced matching parameters
      if (typeof window !== 'undefined') {
        localStorage.setItem('credsettle:user_email', email.trim().toLowerCase());
        localStorage.setItem('credsettle:user_phone', number.trim());
        localStorage.setItem('credsettle:last_submission_date', formattedDate);
        sessionStorage.setItem('credsettle:modal_dismissed', 'true');
      }

      setIsOpen(false);
      window.location.href = '/thank-you';
    } catch (err: any) {
      isSubmittingRef.current = false;
      setLoading(false);
      console.error('Modal submission error:', err);
      alert(err.message || 'Something went wrong while submitting. Please try again.');
    }
  };

  // If excluded page or modal not open, return null
  if (isExcluded || !isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-funnel-heading"
    >
      <div className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-2xl p-5 sm:p-7 md:p-8 max-h-[92vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
          aria-label="Close Assessment Modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header with Dynamic Nuance */}
        <div className="mb-5 pr-8">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide bg-blue-50 text-blue-700 border border-blue-100 mb-2">
            {nuance.badge}
          </span>
          <p id="modal-funnel-heading" className="text-lg sm:text-2xl font-bold text-gray-900 leading-tight">
            {nuance.title}
          </p>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            {nuance.subtitle}
          </p>
        </div>

        {/* Step Progress Tracker */}
        <div className="mb-5">
          <div className="flex items-center justify-between text-xs font-semibold text-gray-600 mb-1.5">
            <span>Step {step} of 3</span>
            <span className="text-blue-600 font-medium">
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
              <legend className="text-xs sm:text-sm font-semibold text-gray-900 mb-2.5 block">
                {nuance.question1}
              </legend>

              <div className="space-y-2">
                {nuance.options1.map((issue) => {
                  const isSelected = legalIssue === issue;
                  return (
                    <label
                      key={issue}
                      onClick={() => handleSelectIssue(issue)}
                      className={`flex items-center gap-3 p-3 sm:p-3.5 rounded-xl border cursor-pointer transition-colors min-h-[46px] select-none ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50/60 text-gray-900'
                          : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-800'
                      }`}
                    >
                      <input
                        type="radio"
                        name="modalLegalIssue"
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

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  if (!legalIssue) {
                    setErrors((prev) => ({
                      ...prev,
                      legalIssue: 'Please select an option to continue',
                    }));
                    return;
                  }
                  setStep(2);
                }}
                disabled={!legalIssue}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Debt Liability Bracket */}
        {step === 2 && (
          <div className="space-y-4">
            <fieldset>
              <legend className="text-xs sm:text-sm font-semibold text-gray-900 mb-2.5 block">
                2. What is your approximate total debt or loan amount?
              </legend>

              <div className="space-y-2">
                {DEBT_BRACKETS.map((bracket) => {
                  const isSelected = debtBracket === bracket;
                  return (
                    <label
                      key={bracket}
                      onClick={() => handleSelectBracket(bracket)}
                      className={`flex items-center gap-3 p-3 sm:p-3.5 rounded-xl border cursor-pointer transition-colors min-h-[46px] select-none ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50/60 text-gray-900'
                          : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-800'
                      }`}
                    >
                      <input
                        type="radio"
                        name="modalDebtBracket"
                        value={bracket}
                        checked={isSelected}
                        onChange={() => handleSelectBracket(bracket)}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 flex-shrink-0 cursor-pointer"
                      />
                      <span className="text-xs sm:text-sm font-medium leading-relaxed">
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

            <div className="pt-2 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => {
                  if (!debtBracket) {
                    setErrors((prev) => ({
                      ...prev,
                      debtBracket: 'Please select an option to continue',
                    }));
                    return;
                  }
                  setStep(3);
                }}
                disabled={!debtBracket}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Consumer-First Contact Details */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-gray-900 mb-1">
                Let us help you resolve your loan issue
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Share your contact details so our legal team can connect with you, explain your relief options, and help protect you from harassment.
              </p>
            </div>

            <div className="space-y-3 pt-1">
              {/* Full Name */}
              <div>
                <label htmlFor="modal-name" className="block text-xs font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                  }}
                  placeholder="Enter your full name"
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-xs sm:text-sm text-gray-900 bg-white"
                />
                {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
              </div>

              {/* Mobile Number */}
              <div>
                <label htmlFor="modal-phone" className="block text-xs font-medium text-gray-700 mb-1">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3 text-xs text-gray-500 select-none border-r border-gray-300 pr-2">
                    +91
                  </span>
                  <input
                    type="tel"
                    inputMode="tel"
                    id="modal-phone"
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
                <label htmlFor="modal-email" className="block text-xs font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  inputMode="email"
                  id="modal-email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                  }}
                  placeholder="name@example.com"
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-xs sm:text-sm text-gray-900 bg-white"
                />
                {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
              </div>
            </div>

            <p className="text-[10px] text-gray-500 leading-snug pt-1">
              By submitting, you agree to receive a confidential evaluation from CredSettle regarding your loan settlement options under advocate-client privilege.
            </p>

            <div className="pt-2 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold text-xs sm:text-sm transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Get Confidential Assessment</span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
