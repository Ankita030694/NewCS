'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function RBLBankLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [isMobile, setIsMobile] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
        rootMargin: '-100px 0px -35% 0px',
        threshold: 0.1
      }
    );

    const headings = document.querySelectorAll('h2[id], h3[id]');
    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  useEffect(() => {
    if (isMobile && activeId && mobileNavRef.current) {
      const activeLink = mobileNavRef.current.querySelector(`[href="#${activeId}"]`);
      if (activeLink) {
        activeLink.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [activeId, isMobile]);

  const navLinks = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'default-timeline', label: 'Default Timeline 2026' },
    { id: 'supercard-special', label: 'RBL-Bajaj SuperCard Issues' },
    { id: 'ots-process', label: 'The OTS Process' },
    { id: 'arbitration-rbl', label: 'RBL Arbitration Tactics' },
    { id: 'negotiation-tips', label: 'Proven Negotiation Tips' },
    { id: 'consequences', label: 'Consequences of Default' },
    { id: 'faqs', label: 'Detailed FAQs' },
  ];

  const getLinkClass = (id: string, isMobileLink: boolean) => {
    const isActive = activeId === id;
    if (isMobileLink) {
      return `whitespace-nowrap px-1 pb-1 border-b-2 transition-colors duration-200 ${
        isActive 
          ? 'border-blue-600 text-blue-600 font-semibold' 
          : 'border-transparent text-gray-600 hover:text-blue-600'
      }`;
    } else {
      return `block transition-all duration-200 pl-3 border-l-2 ${
        isActive
          ? 'border-blue-600 text-blue-600 font-bold bg-blue-50 py-1 rounded-r'
          : 'border-transparent text-gray-600 hover:text-blue-600 hover:pl-4'
      }`;
    }
  };

  const faqList = [
    {
      question: "Can I settle my RBL Bank Credit Card in EMIs?",
      answer: "Yes, RBL Bank is generally open to splitting the settlement amount into 2-3 installments. However, this depends on the settlement percentage. If you agree to pay a higher percentage (e.g., 60%), they are more likely to offer a 3-month payment plan. For aggressive low-ball settlements (e.g., 30%), they usually demand a single bullet payment."
    },
    {
      question: "I have a Bajaj Finserv RBL SuperCard. Who should I contact for settlement?",
      answer: "This is a common confusion. The 'SuperCard' is a co-branded product, but the credit risk is owned by RBL Bank. Therefore, you must negotiate with RBL Bank’s recovery department, not Bajaj Finserv. However, the collection calls might come from agencies empanelled by either entity."
    },
    {
      question: "Does RBL Bank send legal notices to home?",
      answer: "Yes, sending a legal notice is a standard first step in the recovery escalation matrix. It serves as a warning. While the notice itself doesn’t mean immediate court action, it is a precursor to Arbitration or Conciliation proceedings. Do not ignore it."
    },
    {
      question: "Will settling my RBL loan stop the harassment from recovery agents?",
      answer: "Absolutely. Once the Settlement Letter is generated and the first payment is made, the account status in the bank’s system changes. The allocation to third-party recovery agencies is revoked, and the calls should stop within 48-72 hours."
    },
    {
      question: "Can RBL Bank automatically deduct the dues from my other bank accounts?",
      answer: "RBL Bank can only auto-debit if you have a standing instruction (NACH/ECS) active or if you hold a savings account with them (Right to Set Off). They cannot touch your accounts in HDFC, SBI, or ICICI unless they have a specific court order, which is extremely rare in retail defaults."
    },
    {
      question: "Why is the settlement amount higher than my actual purchase limit?",
      answer: "This happens because of the 'snowball effect' of interest and penalties. RBL Bank typically charges 3.99% per month (approx 48% annually) plus late payment fees and GST. Over 1-2 years of default, a principal of ₹1 Lakh can easily turn into a demand of ₹2.5 Lakhs. We negotiate based on the Principal, not the inflated total."
    },
    {
      question: "Is 'Post-Settlement' written on the No Dues Certificate?",
      answer: "Usually, the No Dues Certificate (NDC) will state that the account is closed under a 'Settlement Scheme' or 'Mutually Agreed Settlement'. It confirms zero outstanding balance but acknowledges that it was not a full repayment. This matches the 'Settled' status reported to CIBIL."
    },
    {
      question: "Can I apply for a new RBL Bank card after settlement?",
      answer: "It is highly unlikely that RBL Bank will issue you a new unsecured product (card/loan) forever. You are effectively blacklisted internally. However, other banks might lend to you after a few years once your score recovers."
    },
    {
      question: "What is Section 138 notice from RBL Bank?",
      answer: "Section 138 of the Negotiable Instruments Act deals with cheque bounce. If you gave security cheques to RBL Bank and they bounced, they can file a criminal case. This is serious. However, in most credit card cases, cheques are not involved unless it was a loan. If you receive a 138 summons, you must attend court or hire a lawyer immediately."
    },
    {
      question: "Does RBL Bank accept 20-25% settlement?",
      answer: "Extremely rare for recent defaults. Such low figures are usually only accepted for 'written-off' accounts that are 3-4 years old or in cases of proven fraud/identity theft. For a standard default of 6-12 months, aim for 40-50%."
    },
    {
      question: "Will my family be liable for my RBL Bank debt?",
      answer: "No. Unsecured debt is the sole liability of the borrower. Unless your family member is a co-applicant or guarantor, they are not legally liable. If recovery agents harass your family, you can file a police complaint."
    },
    {
      question: "How long does the RBL Bank settlement process take?",
      answer: "Once we step in, the process typically takes 3-5 weeks. Week 1 is for document submission and stopping harassment. Weeks 2-3 are for the offer-counteroffer negotiations. Week 4 is for generating the approval letter."
    },
    {
      question: "Can I do a settlement online through the RBL Bank app?",
      answer: "Sometimes, RBL Bank sends automated settlement links via SMS/Email for small amounts. While convenient, these are usually 'standard offers' (e.g., 20% waiver). Professional negotiation can usually achieve a much better waiver (e.g., 50-60%) than the automated bot offer."
    },
    {
      question: "What happens if I miss a settlement installment payment?",
      answer: "The settlement agreement becomes null and void. The bank will forfeit the amount you already paid (adjusting it against interest) and revive the full original claim. Never agree to a payment plan you cannot strictly adhere to."
    },
    {
      question: "Why should I use CredSettle for RBL Bank settlement?",
      answer: "RBL Bank’s recovery team is known to be aggressive. We provide a legal shield. We handle the nasty calls, the arbitration notices, and the negotiation math. We ensure you get a valid, legally binding closure letter, protecting you from future zombie debt claims."
    }
  ];

  return (
    <>
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link href="/loan-settlement" className="ml-1 font-medium text-gray-700 hover:text-blue-600 md:ml-2">
                    loan settlement
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 font-medium text-gray-500 md:ml-2">
                    RBL Bank
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 py-12">
        
        <div className="lg:hidden sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm -mx-4 px-4 py-3 mb-8 flex items-center overflow-x-auto no-scrollbar" ref={mobileNavRef}>
          <nav className="flex gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                className={getLinkClass(link.id, true)}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${link.id}`)?.scrollIntoView({ behavior: 'smooth' });
                  setActiveId(link.id);
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Table of Contents</h3>
                <nav className="space-y-2 text-sm">
                  {navLinks.map((link) => (
                    <a 
                      key={link.id}
                      href={`#${link.id}`} 
                      className={getLinkClass(link.id, false)}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(`#${link.id}`)?.scrollIntoView({ behavior: 'smooth' });
                        setActiveId(link.id);
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
            <article className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Settling RBL Bank Dues: A Comprehensive 2026 Guide</h2>
              <div className="text-gray-700 leading-relaxed mb-8">
                <p className="mb-4">
                  RBL Bank (formerly Ratnakar Bank) has aggressively expanded its retail footprint, largely driven by its partnership with Bajaj Finserv to launch co-branded credit cards. This rapid expansion has also led to a significant number of defaults. If you are reading this, chances are you are facing the heat of collection calls, legal notices, or the anxiety of a mounting debt mountain.
                </p>
                <p className="mb-4">
                  Defaulting on a loan or credit card is not a crime; it is a breach of contract, often caused by unforeseen life events like job loss, medical emergencies, or business failure. Indian banking laws and RBI guidelines provide a structured exit route known as the <strong>One Time Settlement (OTS)</strong> mechanism.
                </p>
                <p className="mb-4">
                  This guide is designed to de-mystify the RBL Bank settlement process. We will look past the threats of the recovery agents and focus on the legal and financial realities of how to close your RBL Bank debt for a fraction of the demand amount.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                  <p className="text-sm text-blue-900 font-medium">
                    <strong>Fact Check:</strong> Despite what recovery agents scream on the phone, RBL Bank cannot "send police" to your house for credit card dues. Civil debt defaults are civil matters, not criminal offenses.
                  </p>
                </div>
              </div>

              <h2 id="default-timeline" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Default Timeline: What to Expect</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Understanding the "lifecycle of a default" gives you the power to predict the bank’s next move. RBL Bank typically follows this escalation matrix:
                </p>
                <div className="space-y-6">
                  <div className="relative border-l-4 border-gray-200 pl-6 ml-2">
                    <span className="absolute -left-3 top-0 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></span>
                    <h4 className="font-bold text-gray-900 text-lg">Days 1-30 (SMA-0)</h4>
                    <p className="text-sm text-gray-600 mt-1">Soft reminders via SMS and automated IVR calls. Late payment fees are added. <span className="text-green-600 font-bold">Settlement Chance: 0%</span></p>
                  </div>
                  <div className="relative border-l-4 border-gray-200 pl-6 ml-2">
                    <span className="absolute -left-3 top-0 w-6 h-6 bg-yellow-400 rounded-full border-4 border-white"></span>
                    <h4 className="font-bold text-gray-900 text-lg">Days 31-89 (SMA-1 & SMA-2)</h4>
                    <p className="text-sm text-gray-600 mt-1">Human collection agents start calling. Intensity increases. They will push for "Minimum Due" payment to regularize the account. <span className="text-yellow-600 font-bold">Settlement Chance: 5% (Only in extreme cases)</span></p>
                  </div>
                  <div className="relative border-l-4 border-gray-200 pl-6 ml-2">
                    <span className="absolute -left-3 top-0 w-6 h-6 bg-red-500 rounded-full border-4 border-white"></span>
                    <h4 className="font-bold text-gray-900 text-lg">Day 90+ (NPA Classification)</h4>
                    <p className="text-sm text-gray-600 mt-1">Your account is marked as <strong>Non-Performing Asset (NPA)</strong>. The full loan amount is recalled. The bank must now "provision" (set aside money) for this loss. <span className="text-red-600 font-bold">Settlement Chance: High</span></p>
                  </div>
                  <div className="relative border-l-4 border-gray-200 pl-6 ml-2">
                    <span className="absolute -left-3 top-0 w-6 h-6 bg-purple-600 rounded-full border-4 border-white"></span>
                    <h4 className="font-bold text-gray-900 text-lg">Day 180+ (Write-Off / Charge-Off)</h4>
                    <p className="text-sm text-gray-600 mt-1">The bank deems the debt "uncollectible" for accounting purposes. It may be sold to an Asset Reconstruction Company (ARC) or assigned to aggressive hard-recovery agencies. <span className="text-purple-600 font-bold">Settlement Chance: Very High (Best Discounts)</span></p>
                  </div>
                </div>
              </div>

              <h2 id="supercard-special" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The RBL-Bajaj SuperCard Complication</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  A significant portion of RBL Bank’s credit card portfolio consists of the "SuperCard," co-branded with Bajaj Finserv. This creates unique confusion for defaulters.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-blue-800 mb-2">Who owns the debt?</h4>
                    <p className="text-sm">Legally, the credit facility is extended by <strong>RBL Bank</strong>. Bajaj Finserv is merely the sourcing partner. Therefore, your settlement agreement (and the NOC) must come from RBL Bank.</p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-blue-800 mb-2">Double Whammy Calls</h4>
                    <p className="text-sm">You might receive calls from agencies representing Bajaj regarding your EMI card and separate agencies for the RBL card. It feels like a coordinated attack, but they are often separate silos. Don’t let the volume of calls intimidate you.</p>
                  </div>
                </div>
              </div>

              <h2 id="ots-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The RBL Bank OTS Process</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  The One Time Settlement (OTS) is a formal financial contract. It is not an informal promise made on WhatsApp. Here is how CredSettle executes an RBL Bank settlement:
                </p>
                <ol className="list-decimal pl-6 space-y-4 mb-6">
                  <li>
                    <strong>Hardship Validation:</strong> We first compile your "Hardship Dossier". RBL Bank is a commercial entity; they need a reason to justify the waiver to their auditors. We document job loss, salary slips, medical reports, or other proof of financial ruin.
                  </li>
                  <li>
                    <strong>Legal Notice Response:</strong> If you have received a demand notice or a Section 138 notice, our legal team replies to it. This shifts the conversation from "harassment" to "legal negotiation".
                  </li>
                  <li>
                    <strong>The Proposal:</strong> We proactively send a settlement proposal to the bank’s central debt recovery unit. We seek to remove all penal interest, late fees, and over-limit charges.
                  </li>
                  <li>
                    <strong>The Approval Letter:</strong> Once the amount is agreed (say, ₹50,000 against a due of ₹1.2 Lakhs), RBL Bank issues a formal <strong>Settlement Letter</strong>. We verify this letter for the "Full and Final" clause before you pay a single rupee.
                  </li>
                </ol>
              </div>

              <h2 id="arbitration-rbl" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">RBL Bank Arbitration Tactics</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  RBL Bank, like Axis Bank and HDFC, includes an arbitration clause in its cardholder agreement. They often invoke this to expedite recovery efficiently.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                  <h5 className="font-bold text-yellow-800 mb-1">Warning: Do Not Ignore Arbitration</h5>
                  <p className="text-sm text-yellow-900">
                     If you ignore the arbitration notice, the arbitrator will pass an <strong>Ex-Parte Award</strong> (judgment in your absence) against you. This award has the power of a court decree. The bank can then file for execution in a civil court to attach your assets.
                  </p>
                </div>
                <p className="mb-4">
                  <strong>The Strategy:</strong> We attend the arbitration proceedings (virtually or physically). We contest the inflated claim amount (hidden charges). Most importantly, we express willingness to settle. Arbitrators are legally bound to encourage settlement (Section 89 of CPC). We often close the best deals <em>during</em> the arbitration process itself.
                </p>
              </div>

              <h2 id="negotiation-tips" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Proven Negotiation Tips for 2026</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 font-bold px-2 py-1 rounded mr-3 text-xs mt-1">TIP 1</span>
                    <div>
                      <strong className="block text-gray-900">Anchor Low:</strong>
                      <p className="text-sm text-gray-600">If the bank demands ₹2 Lakhs, do not offer ₹1.5 Lakhs. Start at ₹40,000 (20%). This gives you room to move up to ₹60,000-₹70,000. If you start high, you will end high.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 font-bold px-2 py-1 rounded mr-3 text-xs mt-1">TIP 2</span>
                    <div>
                      <strong className="block text-gray-900">Leverage "Month-End":</strong>
                      <p className="text-sm text-gray-600">Recovery officers have monthly targets. A strictly average offer made on the 28th of the month has a higher chance of approval than a good offer made on the 5th.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 font-bold px-2 py-1 rounded mr-3 text-xs mt-1">TIP 3</span>
                    <div>
                      <strong className="block text-gray-900">Silence is Power:</strong>
                      <p className="text-sm text-gray-600">If the harassment is unbearable, go silent for 2 weeks. Change your SIM temporarily. When the bank cannot reach you, their anxiety goes up, and their willingness to discount increases.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 id="consequences" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Cost of Settlement: CIBIL Impact</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  We believe in full transparency. Settlement saves you money today but costs you creditworthiness tomorrow.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6 text-center">
                  <div className="p-4 border rounded-xl bg-red-50 border-red-100">
                    <h5 className="font-bold text-red-700 text-2xl mb-1">-90 pts</h5>
                    <p className="text-xs text-gray-600">Average CIBIL Drop</p>
                  </div>
                  <div className="p-4 border rounded-xl bg-orange-50 border-orange-100">
                    <h5 className="font-bold text-orange-700 text-2xl mb-1">7 Years</h5>
                    <p className="text-xs text-gray-600">Remark Retention</p>
                  </div>
                  <div className="p-4 border rounded-xl bg-green-50 border-green-100">
                    <h5 className="font-bold text-green-700 text-2xl mb-1">2 Years</h5>
                    <p className="text-xs text-gray-600">Time to Rebuild</p>
                  </div>
                </div>
                <p>
                  While the "Settled" remark stays for 7 years, its weight decreases over time. You can aggressively rebuild your score using secured cards (FD backed) and Gold Loans. Most of our clients cross the 750 CIBIL mark within 18-24 months post-settlement.
                </p>
              </div>

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqList.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                  </div>
                ))}
              </div>

            </article>
          </div>

          <div className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center transform transition hover:-translate-y-1">
                <h4 className="font-bold text-xl text-gray-900 mb-2">RBL Bank Issues?</h4>
                <p className="text-sm text-gray-600 mb-6">End the stress. Save up to 50%. Get legal protection.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Consult Now
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>v No Fees Upfront</p>
                  <p className="mt-1">v Legal Representation</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Other Banks</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/loan-settlement/axis-bank" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      Axis Bank
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/hdfc" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      HDFC Bank
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/icici" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      ICICI Bank
                    </Link>
                  </li>
                   <li>
                    <Link href="/loan-settlement/yes-bank" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      Yes Bank
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/kotak" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      Kotak Bank
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}
