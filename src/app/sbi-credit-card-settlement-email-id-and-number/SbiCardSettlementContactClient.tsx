'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import InteractiveLeadFunnel from '@/components/InteractiveLeadFunnel';
import CompanySection from '@/components/CompanySection';
import {
  CheckCircle2,
  BookOpen,
  Bookmark,
  ArrowRight,
  ChevronDown,
  Phone,
  Mail,
  ShieldCheck,
  ExternalLink,
} from 'lucide-react';

export default function SbiCardSettlementContactClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const navLinks = [
    { id: 'verified-notice', label: 'Verification & Source Notice' },
    { id: 'official-sbi-channels', label: '1. Official sbicard.com Channels' },
    { id: 'nodal-escalation-matrix', label: '2. 3-Tier Nodal Email Matrix' },
    { id: 'spot-fake-ots-emails', label: '3. How to Spot Fake OTS Emails' },
    { id: 'how-to-request-ots', label: '4. Submitting a Hardship OTS Request' },
    { id: 'sbicard-contact-faqs', label: '5. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      q: 'Does SBI Card publish a separate public settlement email ID on sbicard.com?',
      a: 'SBI Card (SBICPSL) routes cardholder requests through its official support email customercare@sbicard.com, the logged-in sbicard.com web mailbox, and its three-level grievance escalation matrix.',
    },
    {
      q: 'What are the official SBI Card customer care helpline numbers?',
      a: 'Per sbicard.com (checked 11 November 2026), official SBI Card helplines are 1800 180 1290 (toll-free), 1860 500 1290, 1860 180 1290, and (STD Code) 39 02 02 02, plus grievance line 1860 180 7777.',
    },
    {
      q: 'How do I check if an SBI Card settlement letter sent on WhatsApp is genuine?',
      a: 'Never rely on WhatsApp PDFs or emails from @gmail.com or @yahoo.com. Genuine SBI Card OTS letters originate from @sbicard.com and can be verified by calling 1800 180 1290 or checking your SBI Card app.',
    },
    {
      q: 'What are the official SBICPSL Nodal Officer email IDs for unresolved disputes?',
      a: 'Per sbicard.com (checked 11 November 2026), Level 1 is CustomerServiceHead@sbicard.com, Level 2 is nodalofficer@sbicard.com, and Level 3 is PrincipalNodalOfficer@sbicard.com.',
    },
    {
      q: 'Should I email State Bank of India (@sbi.co.in) for SBI credit card settlement?',
      a: 'No. Retail bank @sbi.co.in desks handle State Bank of India savings and loan accounts. Credit cards are managed by SBI Cards and Payment Services Limited at @sbicard.com.',
    },
    {
      q: 'Where should I make payment after verifying my SBI Card settlement letter?',
      a: 'Pay only into your 16-digit SBI Card number using official SBI Card PayNet, BBPS, NEFT, or the SBI Card mobile app. Never pay personal UPI IDs or third-party bank accounts.',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section
        className="relative text-white pt-28 pb-12 md:pt-32 md:pb-14 px-4 md:px-8 text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-blue-100 text-xs font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-blue-200" />
            <span>Verified from sbicard.com • Checked 11 Nov 2026</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Official SBI Credit Card Settlement Email ID &amp; Helpline
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-white/95 leading-relaxed">
            Use only official SBI Cards and Payment Services Limited (SBICPSL) channels to request
            or verify a credit card One-Time Settlement. Avoid fake collection emails and unverified
            numbers.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href="#lead-funnel"
              className="px-7 py-3 rounded-full bg-white text-blue-900 hover:bg-slate-100 font-extrabold text-sm shadow-lg inline-flex items-center gap-2"
            >
              <span>Get Help With ₹3L+ Card &amp; Loan Debt</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/sbi-credit-card-blocked-due-to-non-payment"
              className="px-6 py-3 rounded-full bg-blue-800/70 border border-white/25 text-white hover:bg-blue-800 font-bold text-sm"
            >
              <span>SBI Card Blocked Guide</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-3">
          <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-slate-600">
            <ol className="flex flex-wrap items-center gap-1.5 md:gap-2">
              <li>
                <Link href="/" className="hover:text-[#1886ff]">
                  Home
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li>
                <Link
                  href="/sbi-credit-card-blocked-due-to-non-payment"
                  className="hover:text-[#1886ff]"
                >
                  SBI Credit Card Blocked
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li className="font-semibold text-slate-900">
                SBI Card Settlement Email ID &amp; Number
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="bg-slate-50 border-b border-slate-200/80 pt-6">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-1.5">
          <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-blue-800 bg-blue-100 px-3 py-1 rounded-full">
            Combined Debt Check (₹3,00,000+ Minimum Floor)
          </span>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Need professional negotiation across your SBI Card and other credit cards, personal
            loans, or app loans totaling <strong>₹3 Lakh or above</strong>? Check eligibility below.
          </p>
        </div>
        <InteractiveLeadFunnel className="!pt-4 !pb-8" />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_minmax(0,1fr)_290px] gap-6 items-start">
          <aside className="sticky top-6 hidden lg:block">
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span className="text-xs font-black uppercase tracking-wider text-slate-800">
                  Table of Contents
                </span>
              </div>
              <nav className="space-y-1 text-xs">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className="block py-1.5 px-2.5 rounded-lg text-slate-600 hover:text-[#1886ff] hover:bg-blue-50/60 font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="space-y-8 min-w-0">
            <div
              id="verified-notice"
              className="rounded-2xl bg-[#F4F8FE] border border-blue-100 border-l-4 border-l-[#1886ff] p-5 sm:p-6 space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4" />
                <span>Official Source Notice (Checked: 11 November 2026)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Every helpline number, email ID, and postal address on this page is sourced strictly
                from the official <strong>SBI Card (SBICPSL)</strong> website at{' '}
                <a
                  href="https://www.sbicard.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-[#1886ff] font-semibold hover:underline"
                >
                  sbicard.com
                </a>{' '}
                (verified 11 November 2026). Always cross-check numbers on the back of your physical
                SBI Card or inside the official SBI Card mobile app before sharing account details.
              </p>
            </div>

            <section id="official-sbi-channels" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                1. Official SBI Card Helpline Numbers &amp; Support Email
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                SBI Card (SBICPSL) does not run a separate phone line just for OTS deals. Every
                settlement request, hardship note, and letter check starts on the official lines
                below.
              </p>
              <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-3.5">Official Channel</th>
                      <th className="p-3.5">Verified Contact (sbicard.com)</th>
                      <th className="p-3.5">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Toll-Free Helpline</td>
                      <td className="p-3.5 font-semibold">1800 180 1290</td>
                      <td className="p-3.5">Main care line and OTS letter check.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">All-India Helplines</td>
                      <td className="p-3.5 font-semibold">
                        1860 500 1290 / 1860 180 1290 / (STD) 39 02 02 02
                      </td>
                      <td className="p-3.5">Mon to Sat, 8:00 AM to 8:00 PM care.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Support Email</td>
                      <td className="p-3.5 font-semibold">customercare@sbicard.com</td>
                      <td className="p-3.5">Send hardship proof and OTS request.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Logged-In Web Mail</td>
                      <td className="p-3.5 font-semibold">sbicard.com &rarr; Email Us</td>
                      <td className="p-3.5">Gives you a tracked ticket ID.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Conduct Line</td>
                      <td className="p-3.5 font-semibold">080-39356050</td>
                      <td className="p-3.5">Report mis-selling or rude calls.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="nodal-escalation-matrix" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                2. Official 3-Tier SBICPSL Grievance &amp; Nodal Escalation Matrix
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Did basic care fail to solve your OTS query, NOC delay, or agent issue? Move up
                step by step using your ticket ID (checked on sbicard.com on 11 November 2026).
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700 list-disc pl-5">
                <li>
                  <strong>Level 1:</strong> Write to <code>CustomerServiceHead@sbicard.com</code> or
                  call <strong>1860 180 7777</strong>.
                </li>
                <li>
                  <strong>Level 2:</strong> Write to <code>nodalofficer@sbicard.com</code> or post
                  to Nodal Officer, SBI Cards &amp; Payment Services Ltd., PO Bag 28 - GPO, New
                  Delhi - 110001.
                </li>
                <li>
                  <strong>Level 3:</strong> Write to <code>PrincipalNodalOfficer@sbicard.com</code>{' '}
                  or post to DLF Infinity Towers, Tower C, 10th-12th Floor, Block 2, Building 3, DLF
                  Cyber City, Gurugram - 122002, Haryana.
                </li>
                <li>
                  <strong>RBI Ombudsman:</strong> If not solved in 30 days, file a free case on{' '}
                  <code>cms.rbi.org.in</code>.
                </li>
              </ul>
            </section>

            <section id="spot-fake-ots-emails" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                3. How to Spot Fake SBI Card Settlement Letters and Scams
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Scam callers often send fake PDF letters on WhatsApp. They claim an &quot;80% cut
                if you pay in 2 hours.&quot; Run these four simple checks before you pay a rupee.
              </p>
              <ul className="space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>
                  <strong>Check Email Domain:</strong> Real SBI Card mails end in{' '}
                  <code>@sbicard.com</code>. Reject mails from Gmail, Yahoo, or odd look-alike names.
                </li>
                <li>
                  <strong>Call 1800 180 1290 Yourself:</strong> Ask the care desk to confirm your
                  OTS code, exact sum, and due date in their live system.
                </li>
                <li>
                  <strong>Check SBI Card App:</strong> Real OTS plans often show up inside the
                  Services tab when you log in.
                </li>
                <li>
                  <strong>Pay Only Your 16-Digit Card:</strong> Never send cash to a private UPI ID
                  or bank account. Read our{' '}
                  <Link
                    href="/verify-loan-settlement-letter"
                    className="text-[#1886ff] hover:underline font-semibold"
                  >
                    settlement letter verification checklist
                  </Link>
                  .
                </li>
              </ul>
            </section>

            <section id="how-to-request-ots" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                4. How to Submit a Written Hardship Request to SBI Card
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once your card is 90+ days late, send an email from your linked ID to{' '}
                <code>customercare@sbicard.com</code>. State the last 4 digits of your card and
                attach proof of job loss, pay cut, or hospital bills. Ask for a written OTS plan
                under the June 8, 2023 RBI circular.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Do you owe ₹3,00,000 or more across your SBI Card and other loans? Test your dues
                in our{' '}
                <Link
                  href="/tools/credit-card-minimum-due-calculator"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  credit card minimum due and settlement calculator
                </Link>{' '}
                first.
              </p>
            </section>

            <CompanySection />

            <section id="sbicard-contact-faqs" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. Frequently Asked Questions on SBI Card Settlement Contacts
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const open = openFaq === idx;
                  return (
                    <div key={idx} className="rounded-xl border border-slate-200 bg-slate-50/60">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(open ? null : idx)}
                        className="w-full flex items-center justify-between gap-4 p-4 text-left font-bold text-slate-900 text-sm sm:text-base cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${
                            open ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {open && (
                        <div className="px-4 pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                <a
                  href="https://www.sbicard.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] font-semibold border border-blue-200 inline-flex items-center gap-1"
                >
                  <span>sbicard.com (Official Contact Us)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] font-semibold border border-blue-200 inline-flex items-center gap-1"
                >
                  <span>cms.rbi.org.in (RBI Ombudsman)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </section>
          </div>

          <aside className="space-y-5 sticky top-6">
            <div className="bg-white rounded-3xl border border-slate-200 p-5 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <Link
                  href="/author/ashish-jhangra"
                  className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-extrabold text-sm shrink-0"
                >
                  AJ
                </Link>
                <div>
                  <Link
                    href="/author/ashish-jhangra"
                    className="text-sm font-bold text-slate-900 hover:text-[#1886ff] block"
                  >
                    Ashish Jhangra
                  </Link>
                  <p className="text-[11px] font-semibold text-[#1886ff]">
                    SBICPSL Compliance &amp; OTS Specialist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Verifies official card issuer nodal channels and protects borrowers from forged OTS
                settlement scams.
              </p>
            </div>

            <div
              className="rounded-3xl p-6 text-white text-center space-y-3 shadow-md"
              style={{ backgroundColor: '#2452ae' }}
            >
              <span className="text-[11px] font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block">
                ₹3 Lakh+ Total Debt Floor
              </span>
              <p className="text-lg font-bold text-white leading-snug">
                Need Advocate-Led OTS Help?
              </p>
              <p className="text-blue-100 text-xs leading-relaxed">
                Let our panel handle SBI Card and multi-bank OTS negotiations with verified letters
                when total debt is ₹3L+.
              </p>
              <a
                href="#lead-funnel"
                className="block w-full bg-white text-blue-900 py-2.5 px-4 rounded-full font-bold text-xs sm:text-sm hover:bg-slate-50"
              >
                Start Debt Check
              </a>
              <div className="pt-1 text-[11px] text-blue-200 flex items-center justify-center gap-1">
                <Phone className="w-3 h-3" />
                <a href="tel:+918800226635" className="font-bold text-white hover:underline">
                  +91-8800226635
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-5 space-y-2.5 text-xs shadow-xs">
              <p className="font-bold text-slate-900 text-sm">Related SBI Card Guides</p>
              <Link
                href="/sbi-credit-card-blocked-due-to-non-payment"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                SBI Card Blocked for Non-Payment &rarr;
              </Link>
              <Link
                href="/verify-loan-settlement-letter"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                Verify Any Settlement Letter &rarr;
              </Link>
              <Link
                href="/get-noc-after-loan-settlement"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                Get NOC After Settlement &rarr;
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
