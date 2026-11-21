'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import {
  ChevronDown,
  Scale,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileText,
  HelpCircle,
  TrendingUp,
  BookOpen,
  DollarSign,
  Check,
  Lock,
  Phone,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  Landmark,
  Trash2,
  CreditCard,
  Ban,
  ShieldAlert,
  Smartphone,
  Layers
} from 'lucide-react';

export default function RbiCardTokenizationStopMerchantChargesClient() {
  const [activeId, setActiveId] = useState<string>('quick-crux');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -40% 0px',
        threshold: 0.05
      }
    );

    const headings = document.querySelectorAll('section[id], div[id].scroll-target');
    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const navLinks = [
    { id: 'quick-crux', label: 'Executive Brief & Legal Crux' },
    { id: 'executive-summary', label: '1. Executive Summary: Halt Recurring Debits' },
    { id: 'statutory-framework', label: '2. RBI CoFT Statutory Framework' },
    { id: 'token-vs-mandate', label: '3. Token Deletion vs E-Mandates' },
    { id: 'issuer-portal', label: '4. Card Issuer Token Management' },
    { id: 'overdue-debt-trap', label: '5. Stopping Debits on Overdue Cards' },
    { id: 'comparison-matrix', label: '6. Token Deletion vs Standing Instructions' },
    { id: 'step-by-step-guide', label: '7. Step-by-Step Practical SOP' },
    { id: 'borrower-rights', label: '8. Legal Rights Against Merchant Pulls' },
    { id: 'common-mistakes', label: '9. Common Pitfalls to Avoid' },
    { id: 'escalation-hierarchy', label: '10. Bank PNO & RBI Ombudsman SOP' },
    { id: 'faqs', label: '11. Frequently Asked Questions' }
  ];

  const faqs = [
    {
      q: 'What is RBI Card-on-File Tokenisation (CoFT)?',
      a: 'RBI Card-on-File Tokenisation replaces actual 16-digit card numbers, CVVs, and expiry dates with a unique surrogate cryptographic token. Under RBI mandates, e-commerce merchants cannot store raw card details, and cardholders have the right to view, modify, and delete tokens via their card issuer portal.'
    },
    {
      q: 'Does deleting a saved card on a merchant app stop recurring auto-debits?',
      a: 'Not always. Deleting a card on a merchant app removes the card-on-file token for future manual checkout, but if a recurring e-mandate was registered on standing instruction hubs (like SIHub or MandateHQ), recurring auto-debits may continue until you revoke the mandate via your card issuer netbanking or mobile app.'
    },
    {
      q: 'Can I delete all merchant tokens directly through my bank app?',
      a: 'Yes. Under RBI guidelines (including circular RBI/2023-24/92), card-issuing banks must provide a dedicated card token management portal where cardholders can view all merchants possessing an active token and delete or suspend any token without needing the merchant approval.'
    },
    {
      q: 'How do recurring auto-debits worsen credit card debt on an overdue account?',
      a: 'When a credit card is maxed out or overdue, recurring auto-debits from OTT subscriptions, apps, or fintech platforms either trigger overlimit charges (usually Rs 500 + 18% GST) or fail and incur mandate bounce charges. These fees compound monthly at 42% to 48% APR, pushing cardholders into a severe debt trap.'
    },
    {
      q: 'What is the RBI pre-debit notification requirement?',
      a: 'Under RBI recurring transaction frameworks, card issuers must send an SMS or email notification to the cardholder at least 24 hours prior to the auto-debit. The notification must mention the merchant name, amount, date of debit, and provide a direct link to opt out or cancel that specific payment.'
    },
    {
      q: 'Can a bank refuse to cancel an e-mandate if I have unpaid card dues?',
      a: 'No. While you remain legally responsible for genuine accumulated debt, a bank cannot force your card to accept new recurring third-party merchant debits. Cardholders retain the statutory right under RBI regulations to stop future standing instructions and revoke merchant tokens at any time.'
    },
    {
      q: 'What should I do if a merchant continues billing after I deleted the token?',
      a: 'If a merchant debits your card after token deletion or mandate revocation, immediately raise a billing dispute with your card issuer. If the bank fails to reverse the unauthorized charge within 30 days, escalate the complaint to the RBI Integrated Ombudsman for full refund and deficiency compensation.'
    },
    {
      q: 'How can CredSettle help resolve credit card debt traps from auto-debits?',
      a: 'CredSettle assists distressed borrowers by revoking predatory merchant mandates, halting compounding late fees and overlimit charges, handling recovery agent harassment legally, and negotiating structured One-Time Settlements (OTS) with substantial legal waivers.'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Background) */}
      <section
        className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-semibold mb-3">
            <Landmark className="w-3.5 h-3.5" />
            <span>RBI CoFT Master Direction &amp; Consumer Protection</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Use RBI Card Tokenization Rules to Halt Recurring Bills
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Stop predatory merchant auto-debits from inflating your credit card debt. Learn how to delete tokenized cards, revoke e-mandates via your bank portal, and claim statutory relief under RBI rules.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Stop Unfair Auto-Debits Today</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP COMPONENT */}
      <StatsStrip />

      {/* 3. WIDESCREEN 3-COLUMN LAYOUT */}
      <div className="w-full max-w-[1720px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* ================= LEFT COLUMN: STICKY TOC ================= */}
          <aside className="sticky top-6 hidden lg:block">
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 overflow-hidden">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span className="text-xs font-black uppercase tracking-wider text-slate-800">
                  Table of Contents
                </span>
              </div>
              <nav className="space-y-1 max-h-[calc(100vh-140px)] overflow-y-auto pr-1 text-xs">
                {navLinks.map((link) => {
                  const isActive = activeId === link.id;
                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      className={`block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug ${
                        isActive
                          ? 'bg-blue-50 text-[#1886ff] font-bold border-l-3 border-[#1886ff] pl-2'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-4 pt-3 border-t border-slate-100 bg-blue-50/50 -mx-4 -mb-4 p-3 rounded-b-2xl">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>RBI Token Security Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Circulars CO.DPSS.POLC.No.S-516 and Section 10(2) PSS Act 2007.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* EXECUTIVE SUMMARY BOX (#F4F8FE Box) */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: RBI TOKENIZATION &amp; AUTO-DEBIT RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Raw Card Storage Mandate:</strong> Under RBI Card-on-File Tokenisation (CoFT) rules effective October 2022, no merchant, payment aggregator, or app may store 16-digit card numbers, expiration dates, or CVVs. All card credentials exist solely as encrypted tokens issued through card networks.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Issuer-Level Unilateral Revocation:</strong> You do not need a merchant approval to stop auto-debits. Under RBI circular RBI/2023-24/92, card issuers must furnish a self-service management dashboard enabling cardholders to view, suspend, or delete tokens across all merchants instantly.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Token Deletion vs E-Mandate Distinction:</strong> Deleting a token on a merchant site stops future manual checkouts, but recurring automatic charges registered on NPCI SIHub or MandateHQ continue until revoked directly inside the card issuer e-mandate interface.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Stopping Debt Compounding on Overdue Cards:</strong> Maxed-out cards face devastating Rs 500 overlimit penalties, failure fees, and 48% APR compounding from unmonitored subscription renewals. Killing tokens immediately freezes unauthorized card bleed.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>24-Hour Pre-Debit Alert Requirement:</strong> RBI mandates that card issuers send SMS and email alerts at least 24 hours prior to every recurring debit, including a direct link allowing the borrower to opt out of the payment at zero cost.
                  </span>
                </li>
              </ul>

              <div className="pt-2 border-t border-blue-200/60 flex flex-wrap items-center justify-between gap-3 text-xs text-blue-900 font-semibold">
                <span>Governing Authority: Reserve Bank of India (DPSS &amp; DoR)</span>
                <span>Statutory Law: Payment and Settlement Systems Act, 2007</span>
              </div>
            </div>

            {/* SECTION 1: Executive Summary */}
            <section id="executive-summary" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Regulatory Overview</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Executive Summary: Halt Recurring Debits via Tokenization
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When credit card balances spiral out of control, one of the most insidious catalysts is the relentless drain of automated recurring charges. Unmonitored gym memberships, streaming subscriptions, enterprise SaaS platforms, and recurring fintech loan repayments repeatedly hit an already exhausted credit line. Each failed or forced transaction triggers overlimit fees, late charges, GST penalties, and interest compounding up to 48% per annum.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many consumers believe they must plead with merchants, navigate complex cancellation ticket systems, or wait out multi-week cancellation notice periods. This is incorrect. Under the Reserve Bank of India regulatory regime, consumers hold the absolute statutory power to revoke authorization directly at the card issuer level. By utilizing RBI Card-on-File Tokenisation (CoFT) management tools, you can sever merchant connections, block recurring payment attempts, and regain financial sovereignty.
              </p>
            </section>

            {/* SECTION 2: Statutory Framework */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Foundations</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                RBI Card-on-File Tokenization Framework: Statutory Law
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The modern payment landscape in India is governed strictly by the Reserve Bank of India under powers conferred by Section 10(2) read with Section 18 of the Payment and Settlement Systems Act, 2007 (Act 51 of 2007). In response to systemic data security breaches and predatory subscription models, the central bank completely overhauled how digital card credentials operate:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                    <span>RBI Circular DPSS.CO.PD.No.1228 (2019)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Introduced permissioned tokenisation for card transactions via authorised card networks, establishing that tokens replace the 16-digit Primary Account Number (PAN) with unique cryptographic substitutes.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Lock className="w-4 h-4 text-[#1886ff]" />
                    <span>RBI CoFT Circular No. S-516 (2021)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Prohibited all merchants, payment gateways, and aggregators from storing actual card numbers after September 30, 2022. Only card-issuing banks and authorised card payment networks may hold raw card data.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Smartphone className="w-4 h-4 text-[#1886ff]" />
                    <span>RBI Issuer-Level CoFT (RBI/2023-24/92)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Mandated that card issuers provide an explicit, unified portal on mobile apps and internet banking where cardholders can view, modify, and delete all merchant tokens directly without merchant involvement.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Layers className="w-4 h-4 text-[#1886ff]" />
                    <span>RBI E-Mandate Framework (DPSS 2019–2023)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Established the requirement of Additional Factor of Authentication (AFA) during registration, pre-debit notifications 24 hours prior to debit, and unconditional cardholder opt-out mechanisms.
                  </p>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Together, these regulations establish an unambiguous legal principle: <strong>the cardholder is the sole master of payment authorization</strong>. No merchant holds an irrevocable entitlement to draw funds or credit from a cardholder against their expressed revocation.
              </p>
            </section>

            {/* SECTION 3: Token Deletion vs E-Mandate Revocation */}
            <section id="token-vs-mandate" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Layers className="w-4 h-4 text-[#1886ff]" />
                <span>Technical Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Token Deletion vs E-Mandate Revocation: Crucial Difference
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A catastrophic error made by many credit card holders in financial distress is confusing <em>deleting a saved card on an app</em> with <em>cancelling a recurring e-mandate</em>. Understanding this technical distinction is vital to prevent unauthorized auto-debits:
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-[#1886ff]" />
                    What Happens When You Delete a Card-on-File Token?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    A Card-on-File (CoF) token is a surrogate string generated for convenient checkout on websites like Amazon, Flipkart, Swiggy, or MakeMyTrip. When you delete this token (either on the merchant platform or via your bank portal), the merchant loses your card identity. Any subsequent manual transaction will require you to re-enter your complete 16-digit card number, CVV, and authenticate with OTP. However, standalone one-click tokens do not possess standing debit authorization.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <RefreshCw className="w-5 h-5 text-amber-600" />
                    What Happens During an Active E-Mandate / Standing Instruction?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    An e-mandate (governed under RBI recurring payment rules and processed through NPCI SIHub or Razorpay MandateHQ) is a legal standing instruction. It binds your credit card issuer to honor recurring debits up to an approved limit (e.g., Rs 15,000) without requiring an OTP each cycle. If you merely delete your card from the merchant profile screen, the underlying banking mandate registered on SIHub often remains active! The merchant backend can trigger recurring debits despite the card icon disappearing from your profile.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    The Golden Rule of Complete Protection
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    To guarantee that recurring debits permanently stop, you must execute a dual action: <strong>delete the token</strong> to invalidate card credentials AND <strong>revoke the recurring standing instruction / e-mandate</strong> inside your card issuer netbanking or mobile app.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 4: Issuer Management Portal */}
            <section id="issuer-portal" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Smartphone className="w-4 h-4 text-[#1886ff]" />
                <span>Centralized Control</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Card Issuer Management Portal: Delete All Stored Tokens
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Prior to December 2023, deleting tokens required logging into dozens of individual merchant websites, many of which deliberately concealed deletion buttons. Recognizing this anti-consumer pattern, the RBI issued circular <strong>RBI/2023-24/92</strong>, compelling all card-issuing banks (HDFC, SBI Card, ICICI, Axis, Kotak, RBL, etc.) to launch a unified Card-on-File Token Management portal.
              </p>

              <div className="bg-blue-50/60 p-5 sm:p-6 rounded-2xl border border-blue-100 space-y-3">
                <h3 className="font-bold text-blue-900 text-base flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1886ff]" />
                  What You Can Do Inside Your Bank Token Dashboard
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Full Merchant Audit:</strong> View every single merchant, aggregator, and digital platform that currently holds an active token tied to your card.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Instant De-Registration:</strong> Delete any individual merchant token or execute a bulk purge of all tokens with a single secure OTP verification.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Real-Time Token Invalidation:</strong> Deletion takes effect instantly across Visa, Mastercard, and RuPay payment networks. The merchant cannot resurrect the token.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Zero Fee or Penalty:</strong> Banks cannot charge any service fee, administrative charge, or cancellation levy for token de-registration.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* SECTION 5: Overdue Cards & Debt Traps */}
            <section id="overdue-debt-trap" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Financial Distress Safeguards</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Stopping Auto-Debits on Overdue Cards to Prevent Debt Trap
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When borrowers experience liquidity shocks, job loss, or medical emergencies, credit cards frequently enter overdue status. If recurring auto-debits remain connected to these cards, a catastrophic financial spiral unfolds:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-red-100 shadow-xs space-y-2">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Overlimit Fee Explosion</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If an auto-debit forces the card balance beyond the sanctioned credit limit, banks assess an overlimit fee (generally 2.5% of the excess or Rs 500 minimum) plus 18% GST per billing cycle.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-amber-100 shadow-xs space-y-2">
                  <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Mandate Return Penalties</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the bank rejects the recurring debit due to insufficient available limit, both the card issuer and the merchant often levy auto-debit bounce fees ranging from Rs 300 to Rs 750 per failure.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-blue-100 shadow-xs space-y-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Compounding APR Trap</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Every rupee billed via automated recurring debit loses the interest-free grace period instantly, accruing financing charges between 3.5% and 4.0% per month (42% to 48% APR) from day one.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Borrower Protection Note:</strong> Even if your credit card account is overdue, past due, or placed in collection, card issuers are legally prohibited from restricting your right to revoke third-party merchant mandates. Stopping recurring charges is your statutory entitlement to curb uncontrolled liability growth.
                </div>
              </div>
            </section>

            {/* SECTION 6: Comparison Table */}
            <section id="comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Feature Analysis</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Comparison: Card Token Deletion vs Standing Instructions
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Review this technical matrix to confirm which mechanism must be executed depending on the nature of recurring debits hitting your credit card:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 shadow-xs bg-white">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-800 border-b border-slate-200">
                      <th className="p-3.5 sm:p-4 font-bold">Parameter</th>
                      <th className="p-3.5 sm:p-4 font-bold">Card Token Deletion (CoFT)</th>
                      <th className="p-3.5 sm:p-4 font-bold">E-Mandate / SIHub Revocation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Governing RBI Direction</td>
                      <td className="p-3.5 sm:p-4">CO.DPSS.POLC.No.S-516 &amp; Circular 92 (2023)</td>
                      <td className="p-3.5 sm:p-4">DPSS.CO.PD.No.447/02.14.003/2019-20</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Primary Objective</td>
                      <td className="p-3.5 sm:p-4">Erases saved card credentials for manual checkout</td>
                      <td className="p-3.5 sm:p-4">Cancels automated recurring billing authorizations</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Execution Portal</td>
                      <td className="p-3.5 sm:p-4">Card Issuer Mobile App / Netbanking Token Manager</td>
                      <td className="p-3.5 sm:p-4">Bank E-Mandate Dashboard / NPCI SIHub / MandateHQ</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Pre-Debit Alert Protection</td>
                      <td className="p-3.5 sm:p-4">Not applicable (manual checkout requires OTP)</td>
                      <td className="p-3.5 sm:p-4">Mandatory 24-hr SMS alert with opt-out link</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Effect on Future Debits</td>
                      <td className="p-3.5 sm:p-4">Merchant cannot pull transactions without raw PAN</td>
                      <td className="p-3.5 sm:p-4">Bank blocks recurring clearing file automatically</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Impact on Existing Dues</td>
                      <td className="p-3.5 sm:p-4">Zero impact on legitimate past purchases</td>
                      <td className="p-3.5 sm:p-4">Does not erase contractual liability, stops future pull</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 7: Step-by-Step SOP */}
            <section id="step-by-step-guide" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Step-by-Step Procedure to Delete Tokens and Stop Debits
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow this comprehensive six-stage protocol to purge saved card tokens, terminate recurring mandates, and dispute unauthorized debit attempts:
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Access Card Issuer Token Management
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Log into your card issuer mobile app or online banking (e.g., MyCards for HDFC, SBI Card App, iMobile for ICICI). Navigate to <em>Services &gt; Card Controls &gt; Token Management</em> or <em>Manage Tokenised Cards</em>.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: De-Register and Delete Unwanted Tokens
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Review the directory of merchants with stored tokens. Select the platforms causing unwanted debits (or tap <em>Select All</em> to wipe all stored cards). Confirm deletion via OTP. Save the deletion acknowledgement reference number.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Terminate Recurring Mandates on SIHub / Bank Portal
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Open the <em>E-Mandate / Standing Instruction (SI)</em> section of your bank portal, or access the central SIHub/MandateHQ portal linked by your card issuer. Locate each active recurring subscription and click <em>Cancel / Revoke Mandate</em>.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Lock Online and International Card Controls
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under card security settings, toggle <strong>OFF</strong> <em>E-Commerce (Online) Transactions</em> and <em>International Transactions</em>. If an aggressive overseas merchant attempts a recurring pull, the transaction is rejected instantly at the network gate.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Exercise Pre-Debit Alert Opt-Out
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    When you receive the mandatory RBI pre-debit SMS 24 to 48 hours before an auto-debit, immediately click the embedded link to reject that specific transaction if the mandate cancellation is still processing.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Dispute Unauthorized Post-Revocation Debits
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If an auto-debit clears after token deletion, raise an immediate chargeback dispute with your card issuer. Attach your token deletion receipt and demand reversal of the transaction and related finance charges under RBI rules.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Borrower Legal Rights */}
            <section id="borrower-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Legal Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Borrower Legal Rights Against Unauthorized Merchant Pulls
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian law protects consumers vigorously against unauthorized electronic payments and unfair banking practices. If a lender or bank permits third-party charges following your revocation, you are armed with potent legal remedies:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Gavel className="w-4 h-4 text-[#1886ff]" />
                    <span>Customer Protection Circular (2017)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18 establishes that where unauthorized transactions occur due to bank deficiency or third-party breach without customer negligence, the cardholder enjoys <strong>zero liability</strong> when notified within 3 working days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <span>Consumer Protection Act, 2019</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Failing to honor a consumer cancellation request or deducting unauthorized subscription charges constitutes a severe <em>deficiency in service</em> under Section 2(11) and an <em>unfair trade practice</em> under Section 2(47).
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Ban className="w-4 h-4 text-[#1886ff]" />
                    <span>No Coercive Cross-Selling</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under RBI Master Directions on Credit Cards (2022), issuers cannot bundle third-party recurring insurance, credit protection plans, or wellness memberships without explicit standalone consent.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Clock className="w-4 h-4 text-[#1886ff]" />
                    <span>Statutory Chargeback Turnaround</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Card networks mandate shadow credits or temporary chargeback credits within 7 to 10 working days of disputing recurring billing violations, safeguarding your credit limit during investigation.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Common Mistakes */}
            <section id="common-mistakes" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Risk Mitigation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Common Mistakes When Cancelling Recurring Card Payments
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Avoid these frequent errors that leave cardholders exposed to unexpected debits and mounting credit card debt:
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white border border-red-200/80 shadow-xs flex items-start gap-3">
                  <Ban className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Mistake 1: Relying Exclusively on Merchant Cancellation</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Merchants frequently delay cancellations, maintain hidden clause requirements, or continue billing due to synchronization delays. Always execute token deletion and mandate revocation directly on your banking platform.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-red-200/80 shadow-xs flex items-start gap-3">
                  <Ban className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Mistake 2: Assuming Blocking Card Erases Recurring Mandates</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Simply blocking or hotlisting a credit card without explicitly cancelling e-mandates may result in recurring debits failing and generating continuous failure charges, or the bank migrating the mandate to your replacement card!
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-red-200/80 shadow-xs flex items-start gap-3">
                  <Ban className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Mistake 3: Ignoring Pre-Debit SMS Notifications</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Pre-debit SMS alerts are not junk marketing; they are your regulatory window to cancel a debit before money is cleared. If you see an unexpected alert, use the opt-out link immediately.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-red-200/80 shadow-xs flex items-start gap-3">
                  <Ban className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Mistake 4: Failing to Preserve Cancellation Records</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Always take screenshots and record transaction reference IDs when revoking tokens or mandates. This documentation is indispensable when escalating disputes to the RBI Ombudsman.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 10: Escalation Matrix */}
            <section id="escalation-hierarchy" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Grievance Escalation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Escalation Matrix: Bank PNO, Sachet and RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your card issuer fails to delete tokens, permits unauthorized debits, or refuses to refund erroneous charges, follow this statutory escalation hierarchy:
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Level 1: Branch Manager &amp; Card Customer Support Desk
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Submit a formal written complaint via your registered email or official netbanking dispute portal. Clearly state the unauthorized debit amount, merchant token details, and demand reversal under RBI CoFT guidelines. Standard turnaround: 7 working days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Level 2: Grievance Redressal Officer (GRO) &amp; Principal Nodal Officer (PNO)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If unresolved after 7 days, escalate the ticket to the card issuer Principal Nodal Officer. Under RBI Internal Ombudsman guidelines, PNOs must investigate electronic transaction grievances objectively. Standard turnaround: 14 to 30 days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Level 3: RBI Integrated Ombudsman Scheme (RB-IOS 2021)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the bank fails to resolve your grievance within 30 days, or issues an unsatisfactory rejection, file an online complaint at <strong>cms.rbi.org.in</strong>. The RBI Ombudsman possesses statutory authority to order 100% fee reversal, compensation for mental harassment up to Rs 1,00,000, and correction of damaged credit scores.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: FAQ Accordion */}
            <section id="faqs" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Knowledge Base</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions on Token Deletion &amp; Mandates
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, definitive legal answers to the most common questions regarding RBI tokenization, recurring merchant debits, and credit card debt settlement:
              </p>

              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200/80 bg-white shadow-xs overflow-hidden transition-all duration-200"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        className="w-full py-4 px-5 text-left font-bold text-slate-900 hover:text-[#1886ff] flex items-center justify-between gap-4 transition-colors"
                      >
                        <span className="text-sm md:text-base leading-snug">{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                            isOpen ? 'rotate-180 text-[#1886ff]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* CredSettle CTA Banner */}
            <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#1886ff] to-blue-800 text-white shadow-xl relative overflow-hidden space-y-4">
              <div className="relative z-10 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Comprehensive Debt Resolution &amp; Settlement</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">
                  Trapped in Compounding Credit Card Debt?
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-blue-100 max-w-2xl leading-relaxed">
                  Deleting tokens is step one. If accumulated credit card debt, overlimit penalties, and aggressive collection agents have become unmanageable, CredSettle offers expert legal defense and formal One-Time Settlement (OTS) negotiations to resolve your debt with legal finality.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="px-6 py-3 rounded-full bg-white text-blue-900 font-extrabold text-sm hover:bg-blue-50 transition-all text-center inline-flex items-center justify-center gap-2 shadow-md"
                  >
                    <span>Schedule Free Legal Evaluation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/how-to-settle-loan"
                    className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all text-center inline-flex items-center justify-center gap-2"
                  >
                    <span>Explore Loan Settlement Process</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="space-y-5 sticky top-6">
            
            {/* Card 1: Author Bio Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <div className="flex items-center gap-3">
                <Link
                  href="/author/ashish-jhangra"
                  className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-extrabold text-sm hover:bg-blue-200 transition-colors flex-shrink-0"
                  title="View Ashish Jhangra Profile"
                >
                  AJ
                </Link>
                <div>
                  <Link
                    href="/author/ashish-jhangra"
                    className="text-sm font-bold text-slate-900 hover:text-[#1886ff] transition-colors block"
                  >
                    Ashish Jhangra
                  </Link>
                  <p className="text-[11px] font-semibold text-[#1886ff]">
                    Legal &amp; Debt Resolution Professional
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specializing in RBI banking compliance, credit card disputes, tokenization consumer rights, and structured debt resolution.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Updated: November 2026</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Verified
                </span>
              </div>
            </div>

            {/* Card 2: Immediate Debt Help CTA */}
            <div className="bg-white rounded-3xl border border-blue-200 shadow-xs p-5 space-y-4 bg-gradient-to-b from-blue-50/40 to-white">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Phone className="w-3.5 h-3.5" />
                <span>Need Urgent Legal Guidance?</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 leading-snug">
                Stop Collection Harassment &amp; Resolve Card Dues
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect with our senior banking advocates to protect your rights, revoke unauthorized debits, and negotiate legal debt relief.
              </p>
              <Link
                href="/contact"
                className="w-full py-2.5 px-4 rounded-xl bg-[#1886ff] hover:bg-blue-600 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm text-center"
              >
                <span>Request Case Callback</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 3: Regulatory Highlights */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <Landmark className="w-3.5 h-3.5 text-[#1886ff]" />
                <span>Governing RBI Directives</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <strong className="text-slate-800 block">CO.DPSS.POLC.No.S-516</strong>
                  Card-on-File Tokenisation Mandate
                </li>
                <li className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <strong className="text-slate-800 block">RBI/2023-24/92</strong>
                  Issuer-Level Token Management Portal
                </li>
                <li className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <strong className="text-slate-800 block">DPSS.CO.PD.No.447</strong>
                  E-Mandate Recurring Debit Framework
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Related Credit Card Guides</span>
              </h4>
              <div className="space-y-2 text-xs">
                <Link
                  href="/cancel-recurring-standing-instruction-sihub-credit-card"
                  className="block p-2 rounded-lg hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors font-medium border border-transparent hover:border-blue-100"
                >
                  Cancel SIHub Recurring Standing Instructions
                </Link>
                <Link
                  href="/unactivated-credit-card-charges-rbi-500-day-penalty"
                  className="block p-2 rounded-lg hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors font-medium border border-transparent hover:border-blue-100"
                >
                  Unactivated Credit Card Charges: RBI 500/Day Penalty
                </Link>
                <Link
                  href="/credit-card-overlimit-fee-without-consent-rbi-refund"
                  className="block p-2 rounded-lg hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors font-medium border border-transparent hover:border-blue-100"
                >
                  Credit Card Overlimit Fee Without Consent: Refund
                </Link>
                <Link
                  href="/blocking-hotlisting-credit-card-does-not-stop-fees"
                  className="block p-2 rounded-lg hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors font-medium border border-transparent hover:border-blue-100"
                >
                  Blocking Credit Card Does Not Stop Annual Fees
                </Link>
              </div>
            </div>

          </aside>

        </div>
      </div>

      {/* 4. COMPANY SECTION COMPONENT */}
      <CompanySection />
    </main>
  );
}
