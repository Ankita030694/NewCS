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
  FileText,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';

const SAMPLE_REQUEST_LETTER = `Subject: Hardship Request for One-Time Settlement - RBL Credit Card Ending XXXX

To,
The Credit Card Grievance / Settlement Desk,
RBL Bank Limited

Dear Sir / Madam,

I hold RBL Bank Credit Card No. XXXX-XXXX-XXXX-1234 registered under Mobile No. +91-XXXXXXXXXX.

Due to documented financial hardship [mention job loss / medical emergency / business closure with dates], my income has dropped sharply and I am unable to pay the inflated statement balance of Rs. [Total Bill Amount], which includes compounding finance fees and late charges.

I request RBL Bank to foreclose any unbilled EMIs into one account balance and consider a compassionate One-Time Settlement (OTS) under the RBI Compromise Settlement Framework. Please share a formal OTS sanction letter from an official @rblbank.com email ID stating full and final closure upon payment.

Enclosed:
1. Hardship Proof [Termination Letter / Medical Hospital Bills / Bank Statement]
2. Self-attested PAN / KYC Copy

Sincerely,
[Your Full Name]
[Registered Email & Mobile Number]`;

export default function RblSettlementLetterClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const navLinks = [
    { id: 'rbl-letter-summary', label: 'Key Checkpoints Before Paying RBL' },
    { id: 'request-letter-template', label: '1. Cardholder OTS Request Format' },
    { id: 'bank-sanction-clauses', label: '2. 7 Mandatory RBL Sanction Clauses' },
    { id: 'supercard-co-brand-note', label: '3. Bajaj SuperCard & Zomato Edition' },
    { id: 'fake-rbl-letter-flags', label: '4. Red Flags in Fake OTS Letters' },
    { id: 'rbl-letter-faqs', label: '5. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      q: 'What are the two types of RBL credit card settlement letters?',
      a: 'First is the hardship settlement request letter you send to RBL Bank explaining why you cannot pay in full. Second is the official OTS sanction letter RBL Bank issues to you before you pay the agreed settlement sum.',
    },
    {
      q: 'Who issues the settlement letter for a Bajaj Finserv RBL Bank SuperCard?',
      a: 'Even on co-branded Bajaj Finserv RBL SuperCards, RBL Bank Limited is the licensed card issuer. Your official OTS sanction letter and No Dues Certificate must come from RBL Bank.',
    },
    {
      q: 'What mandatory clauses must appear on a genuine RBL Bank OTS letter?',
      a: 'A valid RBL OTS letter must show an RBL reference number, masked 16-digit card number, total outstanding including unbilled EMIs, exact settlement amount, tranche due dates, full waiver of remaining dues, and NDC issuance timeline.',
    },
    {
      q: 'What happens if I miss one instalment date in a 3-part RBL settlement letter?',
      a: 'RBL OTS letters carry a strict null-and-void clause. Missing even one tranche deadline cancels the entire waiver and adjusts what you already paid against interest and fees.',
    },
    {
      q: 'How do I verify an RBL credit card settlement letter before paying?',
      a: 'Check that the email arrived from an official @rblbank.com address and confirm the reference number directly with RBL Bank card customer service before paying into your 16-digit RBL card account.',
    },
    {
      q: 'How will RBL Bank report my credit card to CIBIL after settlement?',
      a: 'Once all tranches in the RBL OTS letter are paid, RBL Bank closes the card with zero balance due and reports the status as Settled to CIBIL and other credit bureaus.',
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(SAMPLE_REQUEST_LETTER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section
        className="relative text-white pt-28 pb-12 md:pt-32 md:pb-14 px-4 md:px-8 text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-blue-100 text-xs font-bold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5 text-blue-200" />
            <span>RBL Bank Card OTS Documentation Guide</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            RBL Credit Card Settlement Letter Format &amp; Verification
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-white/95 leading-relaxed">
            Copy our ready-to-use hardship request format for RBL Bank credit cards, and check the
            7 mandatory clauses every official RBL OTS sanction letter must contain before you pay.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href="#request-letter-template"
              className="px-7 py-3 rounded-full bg-white text-blue-900 hover:bg-slate-100 font-extrabold text-sm shadow-lg inline-flex items-center gap-2"
            >
              <span>Copy Request Letter Format</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#lead-funnel"
              className="px-6 py-3 rounded-full bg-blue-800/70 border border-white/25 text-white hover:bg-blue-800 font-bold text-sm"
            >
              <span>Settle ₹3L+ RBL &amp; Card Debt</span>
            </a>
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
                <Link href="/loan-settlement/rbl-bank" className="hover:text-[#1886ff]">
                  RBL Bank Settlement
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li className="font-semibold text-slate-900">
                RBL Credit Card Settlement Letter Format
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="bg-slate-50 border-b border-slate-200/80 pt-6">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-1.5">
          <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-blue-800 bg-blue-100 px-3 py-1 rounded-full">
            Combined Debt Check (₹3,00,000+ Floor)
          </span>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Hold an overdue RBL card alongside other credit cards, personal loans, or app loans
            totaling <strong>₹3 Lakh or above</strong>? Check your legal settlement plan below.
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
              id="rbl-letter-summary"
              className="rounded-2xl bg-[#F4F8FE] border border-blue-100 border-l-4 border-l-[#1886ff] p-5 sm:p-6 space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4" />
                <span>Golden Rules for RBL Credit Card Settlement Letters</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Payment Without Sanction Letter:</strong> Never transfer settlement
                    money based on a phone call or SMS link alone.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Verify @rblbank.com Domain:</strong> Genuine RBL OTS sanction letters
                    arrive from official <code>@rblbank.com</code> servers.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Check Unbilled SuperCard EMIs:</strong> Confirm all Dial-for-Cash or
                    Split-N-Pay plans are merged into the settled figure.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Collect NDC Within 30-45 Days:</strong> Keep payment receipts and obtain
                    your RBL No Dues Certificate after final tranche clearance.
                  </span>
                </li>
              </ul>
            </div>

            <section id="request-letter-template" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  1. Sample Hardship Request Letter Format to RBL Bank
                </h2>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-3.5 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold inline-flex items-center gap-1.5 hover:bg-blue-100 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied Template' : 'Copy Letter'}</span>
                </button>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Use this polite, factual template when writing from your registered email ID once
                your RBL card is in genuine hardship default:
              </p>
              <pre className="p-4 rounded-2xl bg-slate-900 text-slate-100 text-xs leading-relaxed overflow-x-auto whitespace-pre-wrap font-mono">
                {SAMPLE_REQUEST_LETTER}
              </pre>
            </section>

            <section id="bank-sanction-clauses" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                2. Seven Mandatory Clauses in an Official RBL OTS Letter
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When RBL Bank approves your One-Time Settlement, audit the sanction PDF against
                these seven mandatory items before sending rupee one:
              </p>
              <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-3.5">Clause</th>
                      <th className="p-3.5">What Must Appear on RBL Letterhead</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">1. OTS Reference ID</td>
                      <td className="p-3.5">Unique system-generated RBL settlement reference code and date.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">2. Card &amp; Customer ID</td>
                      <td className="p-3.5">Your full name and masked 16-digit RBL credit card number.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">3. Total Ledger Dues</td>
                      <td className="p-3.5">Full total outstanding including foreclosed unbilled EMIs.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">4. Agreed OTS Sum</td>
                      <td className="p-3.5">Exact payable amount in figures and words.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">5. Tranche Schedule</td>
                      <td className="p-3.5">Exact calendar deadline for single shot or 2 to 3 instalments.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">6. Full Discharge Line</td>
                      <td className="p-3.5">Clear statement waiving remaining balance upon timely payment.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">7. CIBIL &amp; NDC Clause</td>
                      <td className="p-3.5">Note on No Dues Certificate issuance and Settled bureau status.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="supercard-co-brand-note" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                3. Special Note on Bajaj Finserv RBL SuperCard &amp; Co-Brands
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Many users hold the co-branded <strong>Bajaj Finserv RBL Bank SuperCard</strong> or
                older Zomato and ShopRite RBL cards. Bajaj sits on the front of the card, yet{' '}
                <strong>RBL Bank Limited</strong> is the actual bank issuer on your CIBIL report.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Thus, your OTS letter and No Dues Certificate must come from RBL Bank Limited. Pay
                only into your 16-digit RBL card number via NEFT, the RBL MyCard app, or BillDesk.
                Also see our guide on{' '}
                <Link
                  href="/rbl-bank-harrasement-home-visit"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  RBL recovery visit rules and borrower rights
                </Link>
                .
              </p>
            </section>

            <section id="fake-rbl-letter-flags" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                4. Red Flags That Expose Forged Settlement Letters
              </h2>
              <ul className="space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>
                  Blurry bank logos, typos, or no RBL system code on the page.
                </li>
                <li>
                  Mails sent from free Gmail or Yahoo accounts instead of <code>@rblbank.com</code>.
                </li>
                <li>
                  Notes asking you to pay an agent QR code or bank account instead of your 16-digit
                  RBL card number.
                </li>
                <li>
                  False claims that paying 30% will mark CIBIL as &quot;Closed&quot; right away.
                  Read how real CIBIL updates work in{' '}
                  <Link
                    href="/convert-settled-status-to-closed"
                    className="text-[#1886ff] hover:underline font-semibold"
                  >
                    converting Settled status to Closed
                  </Link>
                  .
                </li>
              </ul>
            </section>

            <CompanySection />

            <section id="rbl-letter-faqs" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. Frequently Asked Questions on RBL Settlement Letters
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
                  href="https://www.rblbank.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] font-semibold border border-blue-200 inline-flex items-center gap-1"
                >
                  <span>rblbank.com (Official Portal)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] font-semibold border border-blue-200 inline-flex items-center gap-1"
                >
                  <span>rbi.org.in (Compromise Framework)</span>
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
                    RBL &amp; Card Documentation Specialist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Audits RBL Bank SuperCard settlement letters, unbilled EMI closures, and NDC
                releases.
              </p>
            </div>

            <div
              className="rounded-3xl p-6 text-white text-center space-y-3 shadow-md"
              style={{ backgroundColor: '#2452ae' }}
            >
              <span className="text-[11px] font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block">
                ₹3 Lakh+ Combined Debt
              </span>
              <p className="text-lg font-bold text-white leading-snug">
                Need Verified RBL OTS Help?
              </p>
              <p className="text-blue-100 text-xs leading-relaxed">
                Resolve your RBL SuperCard alongside all other credit cards and unsecured loans
                above ₹3 Lakh.
              </p>
              <a
                href="#lead-funnel"
                className="block w-full bg-white text-blue-900 py-2.5 px-4 rounded-full font-bold text-xs sm:text-sm hover:bg-slate-50"
              >
                Check Eligibility
              </a>
              <div className="pt-1 text-[11px] text-blue-200 flex items-center justify-center gap-1">
                <Phone className="w-3 h-3" />
                <a href="tel:+918800226635" className="font-bold text-white hover:underline">
                  +91-8800226635
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-5 space-y-2.5 text-xs shadow-xs">
              <p className="font-bold text-slate-900 text-sm">Related RBL &amp; Letter Guides</p>
              <Link
                href="/loan-settlement/rbl-bank"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                RBL Bank Settlement Hub &rarr;
              </Link>
              <Link
                href="/verify-loan-settlement-letter"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                Verify Settlement Sanction Letter &rarr;
              </Link>
              <Link
                href="/loan-settlement-letter-format-noc-format"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                Settlement &amp; NOC Format Guide &rarr;
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
