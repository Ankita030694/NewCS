'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQWithSchema from '@/components/FAQWithSchema';
import VerticalTableOfContents from '@/components/VerticalTableOfContents';
import CTAButton from '@/components/CTAButton';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function FreedAlternativePageClient() {
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  const headings = [
    { id: 'introduction', text: 'How to Get Freed from Debt', level: 2 },
    { id: 'debt-trap-anatomy', text: 'Anatomy of the Debt Trap', level: 2 },
    { id: 'why-legal', text: 'Why Legal Intervention is Key', level: 2 },
    { id: 'rbi-guidelines', text: 'Your Legal Rights (RBI)', level: 2 },
    { id: 'step-by-step', text: 'The "Get Freed" Process', level: 2 },
    { id: 'comparison-criteria', text: 'DIY vs Agency vs Lawyer', level: 2 },
    { id: 'bank-specific-processes', text: 'Bank Specific Guides', level: 2 },
    { id: 'impact-analysis', text: 'Impact on Future', level: 2 },
    { id: 'success-stories', text: 'Stories of Being Freed', level: 2 },
    { id: 'faqs', text: 'Frequently Asked Questions', level: 2 }
  ];

  const faqs = [
    {
      question: 'How do I get freed from debt legally in India?',
      answer: 'The most effective way to be freed from overwhelming debt is through a structured settlement process, also known as One-Time Settlement (OTS). This is not a "hack" but a legitimate banking provision. It involves negotiating with your lenders to pay a reduced lump sum (often 30-50% of the outstanding) to legally close the loan account. The key is to do this through a legal channel to ensure the bank issues a valid "No Dues Certificate" and updates your CIBIL status correctly.'
    },
    {
      question: 'Do I need a lawyer to be freed from harassment?',
      answer: 'Yes, a lawyer is crucial. While basic call blocker apps can filter spam, they cannot stop the root cause. Recovery agents operate on fear. When a lawyer steps in and issues a legal Cease & Desist notice citing specific RBI circulars on fair practices, the dynamic changes. The bank is legally compelled to stop harassment. CredSettle sends formal notices to recovery agencies, ensuring you are freed from their abusive tactics immediately and all communication is routed through us.'
    },
    {
      question: 'What is the fastest way to get freed from credit card debt?',
      answer: 'A structured One-Time Settlement (OTS) is the fastest route to exit a debt trap. If you pay minimum dues (MAD), you will be in debt for decades due to 40%+ interest rates. By stopping the cycle, facing the temporary heat (shielded by lawyers), and negotiating a substantial waiver (often 50-70% for credit cards), you can clear the dues in one go and get the NOC, effectively being freed from the debt trap instantly.'
    },
    {
      question: 'Can I be freed from debt without affecting my CIBIL?',
      answer: 'Technically, any settlement will reflect on your CIBIL as "Settled" for a period of time, which does lower your score initially. However, staying in a "debt trap" with continuous late payments or defaulting without settlement does far more damage. Being freed from the debt burden stops the monthly overdue reporting. Once the account is closed, we help you use "Credit Builder" products (like secured cards or gold loans) to rebuild your score to 750+ within 12-18 months. It is a small step back for a giant leap forward.'
    },
    {
      question: 'What if I have multiple loans? Can I be freed from all?',
      answer: 'Yes. We handle consolidated cases. Most valid settlement cases involve a mix of personal loans and credit cards. If you are trapped by multiple lenders, we create a "debt cascade" strategy. We prioritize settling the most aggressive or high-interest lenders first while legally holding off the others. This allows you to accumulate funds and get freed from financial stress step-by-step, rather than drowning in all of them simultaneously.'
    },
    {
      question: 'Is it safe to use debt relief apps?',
      answer: 'Apps offer convenience and UI, but debt is a legal contract, not a software bug. For true legal protection, human expertise is non-negotiable. Automated systems might miss legal notices sent to your old address or fail to attend arbitration hearings. To be truly freed from legal risks like Section 138 (cheque bounce) or Section 25 (PSS Act), rely on a team of practicing advocates who can physically represent you in court if needed.'
    }
  ];

  return (
    <div className="relative min-h-screen bg-white mt-6">
       {/* Background Circle Effect */}
       {!isFirefox && (
        <div
          className="absolute top-0 left-0"
          style={{
            width: '757px',
            height: '757px',
            borderRadius: '757px',
            background: '#007AFF',
            filter: 'blur(400px)',
            WebkitFilter: 'blur(400px)',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
            opacity: 0.6,
            willChange: 'filter',
            backfaceVisibility: 'hidden'
          }}
        />
      )}
      {isFirefox && (
        <div
            className="absolute top-0 left-0"
            style={{
            width: '757px',
            height: '757px',
            borderRadius: '757px',
            background:
                'radial-gradient(circle, rgba(0, 122, 255, 0.4) 0%, rgba(0, 122, 255, 0.2) 30%, rgba(0, 122, 255, 0.1) 60%, transparent 100%)',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
            opacity: 0.9
            }}
        />
       )}

      <Navbar />

      <div className="relative z-10 pt-20 lg:pt-24">
         <section className="w-full mx-auto px-4 md:px-6 lg:px-4 max-w-[1280px] mb-8">
            <Breadcrumbs
                items={[
                    { name: 'Home', url: '/' },
                    { name: 'Resources', url: '/resources' },
                    { name: 'Get Freed From Debt', url: '/how-to-get-freed-from-debt' }
                ]}
            />
         </section>

        {/* Hero Section */}
        <section className="w-full mx-auto px-4 md:px-6 lg:px-4 max-w-[1280px] mb-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-1 space-y-6">
              <h1 className="text-3xl lg:text-[42px] font-bold leading-tight text-[#0C2756]">
                How to Get <span className="text-[#007AFF]">Freed from Debt</span> Legally and Safely
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed font-poppins">
                Searching for ways to be <strong>freed from debt</strong> burden? Stop relying on temporary fixes or generic apps. Discover comprehensive, lawyer-backed solutions to settle your loans, stop harassment, and regain your financial independence permanently.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <CTAButton>
                    Start Your Journey to Freedom
                </CTAButton>
              </div>
            </div>
            
             <div className="flex-1 w-full max-w-[500px] bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border border-blue-100 shadow-xl">
                <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                        <span className="font-semibold text-gray-500">Debt Trap</span>
                        <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs"> High Stress</span>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">→</div>
                    </div>
                     <div className="flex items-center justify-between p-4 bg-[#007AFF] rounded-xl shadow-lg transform scale-105">
                        <span className="font-bold text-white">Freed from Debt</span>
                        <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs"> Legal Relief</span>
                    </div>
                     <p className="text-center text-sm text-gray-500 mt-4">
                        Don't just manage debt. Get <span className="text-[#007AFF] font-bold">Freed</span> from it.
                    </p>
                </div>
            </div>
          </div>
        </section>

        {/* 3-Column Layout */}
        <section className="w-full max-w-[1600px] mx-auto px-4 md:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Vertical TOC (2 cols) */}
            <div className="lg:col-span-2 hidden lg:block sticky top-24">
              <VerticalTableOfContents headings={headings} />
            </div>

            {/* Middle Column: Main Content (7 cols) */}
            <div className="lg:col-span-7 w-full min-h-screen">
                {/* Introduction */}
                <section id="introduction" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0C2756] mb-6">How to Get Freed from Debt: The Honest Truth</h2>
                    <div className="prose prose-lg text-gray-700 font-poppins text-base leading-7">
                        <p className="mb-4">
                            Being trapped in a cycle of EMI defaults and relentless recovery agent calls is terrifying. It affects your sleep, your job, and your family relations. Many borrowers constantly search for "<strong>how to get freed from debt</strong>" or "<strong>freed reviews</strong>" of services that promise instant relief. The truth is, there is no magic app that dissolves debt overnight. Debt is a legal obligation, and it must be dissolved legally.
                        </p>
                        <p className="mb-4">
                            However, there is a proven path. To be truly <strong>freed from loans</strong>, you need a strategy that involves stopping the harassment, negotiating legally with the bank, and settling for an affordable amount. This guide explains how you can achieve this freedom safely, separating marketing fluff from legal reality.
                        </p>
                        <p>
                            Whether you are looking for generic solutions or specific advice on <strong>how to stop recovery agents</strong>, the answer lies in professional legal representation. You don't need a "debt counselor" who judges you; you need a lawyer who defends you.
                        </p>
                    </div>
                </section>

                {/* Anatomy of Debt Trap */}
                <section id="debt-trap-anatomy" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0C2756] mb-6">Anatomy of the Debt Trap</h2>
                    <div className="prose prose-lg text-gray-700 font-poppins text-base leading-7">
                        <p className="mb-4">
                            Before you can get <strong>freed</strong>, you must understand how you got trapped. The Indian credit system is designed to keep you paying interest forever.
                        </p>
                        <h3 className="text-xl font-bold text-[#0C2756] mt-4 mb-2">1. The Minimum Due Trap</h3>
                        <p className="mb-4">
                            Credit card companies encourage you to pay only the "Minimum Amount Due" (MAD). This is usually just 5% of your total outstanding. The remaining 95% attracts an interest rate of 3.5% to 4% per month (42-48% annually). If you only pay the minimum, it can take over 20 years to clear a simple ₹1 Lakh debt, and you would have paid ₹5 Lakhs in interest. This is modern-day slavery.
                        </p>
                        <h3 className="text-xl font-bold text-[#0C2756] mt-4 mb-2">2. The Loan-to-Pay-Loan Cycle</h3>
                        <p className="mb-4">
                            Many borrowers take a personal loan to pay off a credit card, then use the card again for expenses. Then they take a "fintech loan" (from apps like Navi, KreditBee, Kissht) to pay the personal loan EMI. Soon, nearly 100% of your salary goes into EMIs. You are technically insolvent but still struggling to pay.
                        </p>
                         <h3 className="text-xl font-bold text-[#0C2756] mt-4 mb-2">3. The Over-Leverage Trap</h3>
                        <p className="mb-4">
                            Banks often give loans up to 60-70% of your net income. One medical emergency or job loss topples this precarious balance. Once you miss one EMI, the late fees, cheque bounce charges, and penal interest pile up so fast that the debt grows even if you stop spending.
                        </p>
                    </div>
                </section>

                {/* Why Legal */}
                <section id="why-legal" className="mb-12 scroll-mt-24">
                     <h2 className="text-2xl lg:text-3xl font-bold text-[#0C2756] mb-6">Why Legal Intervention is Key</h2>
                     <div className="space-y-6 text-gray-700 font-poppins text-base leading-7">
                        <p>
                            Many apps promise to help you get <strong>freed</strong> from your dues. But when a bank sends a <strong>legal notice for loan default</strong>, an app cannot represent you. This is where the difference between a "tech" solution and a "legal" solution becomes life-saving.
                        </p>
                        <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-[#007AFF]">
                            <h3 className="text-xl font-bold text-[#007AFF] mb-2">Protection from Harassment</h3>
                            <p className="mb-2">
                                To be truly <strong>freed from harassment</strong>, you need a lawyer to send a Cease & Desist notice. This legally compels the agents to back off.
                            </p>
                            <p>
                                If they persist, we help you file a <strong>police complaint against recovery agent</strong>. Recovery agents know they can bully individuals, but they fear lawyers because we know the law (IPC 504, IPC 506) better than they do.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="text-xl font-bold text-[#0C2756] mb-2">Negotiation Power</h3>
                            <p>
                                Banks take lawyers seriously. When you call customer care, you are a "defaulter." When a lawyer writes to the collections head, you are a "legal liability." We present your financial hardship case, verified by legal documents (affidavits of insolvency, job loss proof), which increases the chances of getting a high-value settlement (OTS), ensuring you are <strong>freed from the debt trap</strong> faster and cheaper.
                            </p>
                        </div>
                     </div>
                </section>

                {/* RBI Guidelines */}
                <section id="rbi-guidelines" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0C2756] mb-6">Your Legal Rights (RBI)</h2>
                    <div className="prose prose-lg text-gray-700 font-poppins text-base leading-7">
                        <p className="mb-4">
                            You are not a criminal if you cannot pay a loan. The Reserve Bank of India (RBI) has laid down specific rights for borrowers which banks often ignore, but we enforce.
                        </p>
                         <ul className="list-disc pl-6 space-y-4">
                            <li>
                                <strong>Right to Respectful Recovery:</strong> Agents cannot call before 8 AM or after 7 PM. They cannot use abusive language or threaten physical harm. (RBI Circular on Fair Practices Code).
                            </li>
                            <li>
                                <strong>Right to Privacy:</strong> Agents cannot call your relatives, friends, or office colleagues to shame you. Doing so is a violation of data privacy laws and grounds for huge compensation.
                            </li>
                            <li>
                                <strong>Right to Notice:</strong> The bank must give you proper notice before enforcing security (under SARFAESI) or filing a case. You have the right to reply and be heard.
                            </li>
                            <li>
                                <strong>Right to Settlement:</strong> Every borrower has the right to approach the bank for a compromise settlement if they have genuine hardship. Banks cannot arbitrarily deny OTS without reason.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Step by Step Process */}
                <section id="step-by-step" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0C2756] mb-6">The "Get Freed" Process: Step-by-Step</h2>
                    <div className="space-y-6 text-gray-700 font-poppins text-base leading-7">
                        <p>
                            This is the roadmap we follow at CredSettle to get you from "Drowning" to "Freed".
                        </p>
                        
                        <div className="relative border-l-4 border-gray-200 ml-4 pl-8 space-y-10">
                            <div className="relative">
                                <div className="absolute -left-[41px] bg-[#007AFF] h-5 w-5 rounded-full border-4 border-white"></div>
                                <h3 className="text-xl font-bold text-[#0C2756]">Step 1: The Stop & Shield (Month 1)</h3>
                                <p className="mt-2">
                                    We advise you to stop paying random amounts that barely cover interest. Instead, save that money. Concurrently, we issue legal notices to all your lenders informing them of your representation. This acts as your "Shield". We activate call forwarding to our legal desk.
                                </p>
                            </div>
                             <div className="relative">
                                <div className="absolute -left-[41px] bg-[#007AFF] h-5 w-5 rounded-full border-4 border-white"></div>
                                <h3 className="text-xl font-bold text-[#0C2756]">Step 2: The Hardship Filing (Month 2-3)</h3>
                                <p className="mt-2">
                                    We collate your financial data to prove "Inability to Pay" vs "Willful Default". This distinction is critical. We draft a detailed hardship petition and submit it to the bank's central settlement unit, bypassing the local recovery agents who have no authority.
                                </p>
                            </div>
                             <div className="relative">
                                <div className="absolute -left-[41px] bg-[#007AFF] h-5 w-5 rounded-full border-4 border-white"></div>
                                <h3 className="text-xl font-bold text-[#0C2756]">Step 3: The Negotiation (Month 4-6)</h3>
                                <p className="mt-2">
                                    This is a game of patience. Banks will first threaten, then offer small discounts. We reject bad offers. We wait until the account moves to a specific "bucket" where the bank is desperate to clean its books. Our lawyers negotiate hard for a maximum waiver (upto 50-60%).
                                </p>
                            </div>
                             <div className="relative">
                                <div className="absolute -left-[41px] bg-[#007AFF] h-5 w-5 rounded-full border-4 border-white"></div>
                                <h3 className="text-xl font-bold text-[#0C2756]">Step 4: The Settlement (NPA Stage)</h3>
                                <p className="mt-2">
                                    Once the bank agrees to our terms, we verify the <strong>One Time Settlement (OTS) letter</strong>. We ensure it is genuine and contains clauses that fully extinguish your liability. You pay the agreed amount directly to the bank.
                                </p>
                            </div>
                             <div className="relative">
                                <div className="absolute -left-[41px] bg-green-500 h-5 w-5 rounded-full border-4 border-white"></div>
                                <h3 className="text-xl font-bold text-green-700">Step 5: Freedom (NOC)</h3>
                                <p className="mt-2">
                                    The bank issues a No Dues Certificate. Your CIBIL is updated. You are legally, financially, and mentally <strong>Freed</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison Criteria */}
                <section id="comparison-criteria" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0C2756] mb-6">DIY vs Agency vs Lawyer</h2>
                    <div className="prose prose-lg text-gray-700 font-poppins text-base leading-7">
                        <p className="mb-4">
                            You have options. Here is why legal representation is the superior choice for getting <strong>freed</strong>.
                        </p>
                        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-6">
                            <table className="w-full text-left bg-white">
                                <thead className="bg-[#0C2756] text-white">
                                    <tr>
                                        <th className="p-4 uppercase text-sm">Feature</th>
                                        <th className="p-4 uppercase text-sm">DIY (Self)</th>
                                        <th className="p-4 uppercase text-sm">Settlement App/Agency</th>
                                        <th className="p-4 uppercase text-sm bg-blue-900">CredSettle (Legal)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr>
                                        <td className="p-4 font-semibold">Harassment Protection</td>
                                        <td className="p-4 text-red-600">None. You face it alone.</td>
                                        <td className="p-4 text-yellow-600">Call blocker app.</td>
                                        <td className="p-4 text-green-600 font-bold">Legal Notices + Police Support.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold">Legal Defense</td>
                                        <td className="p-4 text-red-600">None. High risk of jail in Sec 138.</td>
                                        <td className="p-4 text-red-600">None. They are just mediators.</td>
                                        <td className="p-4 text-green-600 font-bold">Full representation in court.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold">Negotiation Leverage</td>
                                        <td className="p-4 text-yellow-600">Low. Emotional pleading.</td>
                                        <td className="p-4 text-yellow-600">Medium. Bulk negotiation.</td>
                                        <td className="p-4 text-green-600 font-bold">High. Based on legal merits.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold">Data Privacy</td>
                                        <td className="p-4 text-green-600">High.</td>
                                        <td className="p-4 text-red-600">Low. Data often sold for leads.</td>
                                        <td className="p-4 text-green-600 font-bold">Protected by Attorney-Client Privilege.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                         <p>
                            Many clients come to us after trying "<strong>freed alternative</strong>" apps that failed when the legal notices started arriving. They realize that professional legal intervention is the only reliable way to deal with aggressive banks like HDFC, SBI, or ICICI.
                        </p>
                    </div>
                </section>

                {/* Bank Specific Processes */}
                <section id="bank-specific-processes" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0C2756] mb-6">Bank Specific Guides</h2>
                    <div className="space-y-8 text-gray-700 font-poppins text-base leading-7">
                        <p>To be <strong>freed</strong> from specific lenders, you need tailored strategies. Generic emails don't work.</p>
                        
                        <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-[#0C2756] mb-2">HDFC Bank Personal Loan Settlement</h3>
                            <p className="mb-4">
                                HDFC is aggressive. They often file arbitration cases in Chennai or Delhi very quickly.
                                <br/><strong>Our Strategy:</strong> We immediately challenge the arbitration venue if it's far from your residence (as per recent court rulings). We present specific medical or job-loss evidence to their "Central Settlement Team" in Mumbai, bypassing local collection agencies.
                            </p>
                        </div>

                        <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-[#0C2756] mb-2">SBI Credit Card Settlement</h3>
                            <p className="mb-4">
                                SBI Cards & Payment Services Ltd is a separate entity from the bank. They are relentless with legal notices.
                                <br/><strong>Our Strategy:</strong> We focus on the "Principle Outstanding." SBI often adds massive late fees. We audit the statement, strip away the illegal penal charges, and offer a settlement based on the actual principle, often saving clients 60%+.
                            </p>
                        </div>

                        <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-[#0C2756] mb-2">Bajaj Finserv & NBFC Settlement</h3>
                            <p className="mb-4">
                                NBFCs like Bajaj use arbitration clauses heavily. They appoint their own arbitrators.
                                <br/><strong>Our Strategy:</strong> We attend these arbitration proceedings online or challenge the appointment of the biased arbitrator. This shows them you are not helpless, forcing them to the settlement table.
                            </p>
                        </div>

                         <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-[#0C2756] mb-2">Loan Apps (Kissht, KreditBee, Navi)</h3>
                            <p className="mb-4">
                                These apps rely on cyber-harassment (accessing contacts).
                                <br/><strong>Our Strategy:</strong> We file immediate cyber-crime complaints if they access your contacts. We copy the RBI Ombudsman. We force them to close the loan at principal value just to avoid the regulatory scrutiny we bring.
                            </p>
                        </div>
                    </div>
                </section>

                  {/* Impact Analysis */}
                  <section id="impact-analysis" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0C2756] mb-6">Impact on Future: Life After Settlement</h2>
                    <div className="prose prose-lg text-gray-700 font-poppins text-base leading-7">
                        <p className="mb-4">
                            A common fear prevents people from getting <strong>freed</strong>: "Will I ever get a loan again?"
                        </p>
                        <p className="mb-4">
                           Let's look at the reality. If you don't settle, you are a "Defaulter" / "Written Off". Your score drops to 500-600. You won't get a loan anyway, and the interest keeps growing.
                        </p>
                        <p className="mb-4">
                           If you settle, your status becomes "Settled". Your score drops initially. BUT, the debt stops growing. The harassment stops. You are <strong>freed</strong>.
                        </p>
                         <h3 className="text-xl font-bold text-[#0C2756] mt-6 mb-2">Rebuilding Pathway (The 2-Year Plan)</h3>
                         <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Month 0:</strong> Settlement Complete. NOC received.</li>
                            <li><strong>Month 3:</strong> Check CIBIL. Ensure status is "Settled" (Zero Balance), not "Written Off".</li>
                            <li><strong>Month 6:</strong> Open a Fixed Deposit (FD) backed Credit Card (e.g., IDFC First WOW, Kotak 811). Use only 30% limit. Pay in full in 24 hours.</li>
                            <li><strong>Month 12:</strong> Taking a small Consumer Durable Loan (for a phone or appliance). Pay perfectly.</li>
                            <li><strong>Month 24:</strong> Your score will likely cross 750. You are now eligible for unsecured loans again.</li>
                         </ul>
                         <p className="mt-4 font-semibold text-[#007AFF]">
                             Being "Settled" is a temporary scar. Being "Defaulted" is a permanent wound. Choose the scar. It heals.
                         </p>
                    </div>
                </section>

                {/* Success Stories */}
                <section id="success-stories" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0C2756] mb-6">Stories of Being Freed</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 border border-gray-100 rounded-xl shadow-sm bg-white">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="text-yellow-400">★★★★★</div>
                                <span className="text-sm text-gray-500 font-medium">Rajesh K., IT Professional, Delhi</span>
                            </div>
                            <p className="text-gray-700 italic mb-4">"I had 5 credit cards and a personal loan. Total debt ₹18 Lakhs. My salary stopped due to layoffs. I was suicidal due to calls. CredSettle legal team stepped in. They consolidated communication. It took 8 months, but they settled it all for ₹6.5 Lakhs. I finally sleep at night. I am truly freed."</p>
                        </div>
                         <div className="p-6 border border-gray-100 rounded-xl shadow-sm bg-white">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="text-yellow-400">★★★★★</div>
                                <span className="text-sm text-gray-500 font-medium">Anita S., Teacher, Mumbai</span>
                            </div>
                            <p className="text-gray-700 italic mb-4">"I searched for 'how to get freed from debt' and found many apps. But CredSettle was different. They assigned a real lawyer. When Bajaj sent an arbitration notice, the lawyer replied legally. Bajaj immediately offered a settlement. Best decision of my life."</p>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section id="faqs" className="mb-12 scroll-mt-24">
                   <FAQWithSchema faqs={faqs} title="Frequently Asked Questions" />
                </section>

            </div>

             {/* Right Column: Sticky Sidebar (3 cols) */}
             <div className="lg:col-span-3 hidden lg:block sticky top-24 space-y-6">
                 {/* Consultation Card */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
                    <h3 className="text-xl font-bold text-[#0C2756] mb-2">Get Freed Today</h3>
                    <p className="text-sm text-gray-600 mb-4">Speak to a lawyer. Start your journey to being debt-free.</p>
                    <CTAButton>
                        Book Free Call
                    </CTAButton>
                    <p className="text-xs text-center text-gray-400 mt-2">No upfront fees. 100% Confidential.</p>
                </div>

                {/* Quick Links */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                     <h3 className="text-lg font-bold text-[#0C2756] mb-4">Popular Guides</h3>
                     <ul className="space-y-3 text-sm font-medium text-gray-600">
                         <li><Link href="/how-to-settle-loan" className="hover:text-[#007AFF] transition-colors">How to Settle Loan</Link></li>
                         <li><Link href="/services/loan-settlement/hdfc-bank" className="hover:text-[#007AFF] transition-colors">HDFC Settlement</Link></li>
                         <li><Link href="/services/loan-settlement/sbi-card" className="hover:text-[#007AFF] transition-colors">SBI Card Settlement</Link></li>
                         <li><Link href="/services/credit-card-settlement" className="hover:text-[#007AFF] transition-colors">Credit Card Review</Link></li>
                     </ul>
                </div>
                 
                 {/* Trust Badge */}
                 <div className="bg-blue-600 p-6 rounded-2xl text-white text-center">
                    <h3 className="text-xl font-bold mb-2">12,500+</h3>
                    <p className="text-sm opacity-90">Clients Freed from Debt</p>
                 </div>
            </div>
          </div>
        </section>

        {/* Mobile Sticky CTA */}
        <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white p-4 border-t border-gray-200 shadow-[0_-5px_15px_rgba(0,0,0,0.1)] z-50">
           <CTAButton>
                Get Expert Advice
           </CTAButton>
        </div>
      </div>

      <Footer />
    </div>
  );
}
