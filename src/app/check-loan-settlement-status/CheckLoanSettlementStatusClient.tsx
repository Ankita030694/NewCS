'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function CheckLoanSettlementStatusClient() {
    const [activeId, setActiveId] = useState<string>('');
    const [isMobile, setIsMobile] = useState(false);
    const mobTocRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (activeId && mobTocRef.current) {
            const activeElement = document.getElementById(`mob-toc-${activeId}`);
            if (activeElement) {
                activeElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    }, [activeId]);

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

    const navLinks = [
        { id: 'introduction', label: 'Overview' },
        { id: 'why-status-tracking-matters', label: 'Why Tracking Matters' },
        { id: 'alert-fake-portals', label: 'Fake Portals Alert' },
        { id: 'internal-bank-status', label: 'Internal Status' },
        { id: 'cibil-status-updates', label: 'CIBIL Updates' },
        { id: 'comparison-bank-vs-cibil', label: 'Bank vs CIBIL' },
        { id: 'noc-tracking-checklist', label: 'NOC Checklist' },
        { id: 'common-delays', label: 'Common Delays' },
        { id: 'escalation-process', label: 'Escalation' },
        { id: 'reviews', label: 'Client Success' },
        { id: 'faqs', label: 'FAQs' },
    ];

    const faqs = [
        {
            question: 'How long does it take for CIBIL to update after loan settlement?',
            answer: 'It typically takes 30 to 45 days for CIBIL and other credit bureaus to update your status to "Settled" after the final payment is cleared by the bank.'
        },
        {
            question: 'Why is my loan still showing as active after I paid the settlement amount?',
            answer: 'Banks update their internal systems in batches. If you recently paid, the system might not reflect the closure immediately. Always secure a written settlement letter before making any payments.'
        },
        {
            question: 'When will I receive my No Objection Certificate (NOC)?',
            answer: 'The NOC is usually dispatched within 15 to 21 working days after the final settlement payment is realized. Ensure your mailing address is updated with the bank.'
        },
        {
            question: 'Can I check my settlement status without calling the recovery agent?',
            answer: 'Yes, you can log into your bank’s official net banking portal or mobile app to check the outstanding balance and loan status directly. Avoid relying solely on verbal confirmations from agents.'
        },
        {
            question: 'What should I do if the bank refuses to issue an NOC after settlement?',
            answer: 'If you have fulfilled all conditions of the formal settlement letter and the bank delays the NOC, you must escalate the issue to the Banking Ombudsman or the bank’s Nodal Officer.'
        }
    ];

    const reviews = [
        {
            name: 'Anjali M.',
            location: 'Pune',
            stars: 5,
            comment: 'I had paid my settlement but was stressed because the loan still showed active. CredSettle guided me on how to track the internal bank status and successfully get my NOC.'
        },
        {
            name: 'Vikram S.',
            location: 'Delhi',
            stars: 5,
            comment: 'The step by step checklist provided here was a lifesaver. I realized I was checking the wrong CIBIL section. Found out my settlement was indeed updated properly.'
        }
    ];

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs.map(faq => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.answer
            }
        }))
    };

    const reviewSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Loan Settlement Status Tracking Guide',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '2',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-status" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-status" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

            {/* Hero Section */}
            <section
                className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden"
                style={{
                    background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)',
                    minHeight: '50vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div className="max-w-6xl mx-auto text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Check Loan Settlement Status Online<br />
                        <span className="text-blue-300">Track Your NOC with Confidence</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Do not let recovery agents keep you in the dark. Learn the exact steps to verify your loan closure internally with the bank and on your CIBIL report.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Settlement Help
                        </Link>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Section */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-[1440px] mx-auto px-4 py-4 font-sans">
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
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <Link href="/loan-settlement" className="ml-1 font-medium text-gray-500 hover:text-blue-600 md:ml-2">Loan Settlement</Link>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="ml-1 font-medium text-gray-500 md:ml-2">
                                        Check Settlement Status
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* 3-Column Layout */}
            {/* Mobile Sticky TOC */}
            <div
                ref={mobTocRef}
                className="sticky top-0 z-40 lg:hidden bg-white border-b border-gray-200 shadow-sm overflow-x-auto no-scrollbar scroll-smooth py-3 px-4 flex gap-4 whitespace-nowrap"
            >
                {navLinks.map((link) => (
                    <a
                        key={link.id}
                        id={`mob-toc-${link.id}`}
                        href={`#${link.id}`}
                        className={`text-sm font-bold px-4 py-2 rounded-lg transition-all flex-shrink-0 ${activeId === link.id
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'text-gray-600 bg-gray-50 hover:bg-gray-100'
                            }`}
                        onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById(link.id);
                            if (element) {
                                const offset = 80;
                                const bodyRect = document.body.getBoundingClientRect().top;
                                const elementRect = element.getBoundingClientRect().top;
                                const elementPosition = elementRect - bodyRect;
                                const offsetPosition = elementPosition - offset;

                                window.scrollTo({
                                    top: offsetPosition,
                                    behavior: 'smooth'
                                });
                            }
                            setActiveId(link.id);
                        }}
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Tracking Manual</h3>
                            <nav className="space-y-1 text-sm">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        className={`block py-1.5 px-3 rounded-lg transition-all ${activeId === link.id
                                            ? 'bg-blue-600 text-white font-semibold'
                                            : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                                            }`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const element = document.getElementById(link.id);
                                            if (element) {
                                                const offset = 100;
                                                const bodyRect = document.body.getBoundingClientRect().top;
                                                const elementRect = element.getBoundingClientRect().top;
                                                const elementPosition = elementRect - bodyRect;
                                                const offsetPosition = elementPosition - offset;

                                                window.scrollTo({
                                                    top: offsetPosition,
                                                    behavior: 'smooth'
                                                });
                                            }
                                            setActiveId(link.id);
                                        }}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Middle Column: Main Content */}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 1: Introduction to Status Tracking</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Navigating the loan settlement process is challenging. Borrowers who negotiate settlements often pay the lump sum but remain entirely in the dark about whether the bank actually updated their systems. Paying the money is only half the battle. The other half is ensuring your financial records reflect that payment accurately and permanently.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are wondering <Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="text-blue-600 underline font-medium">what is loan settlement and how does it work in india</Link>, you must understand that the process does not end when the money leaves your account. It ends when you receive the final No Objection Certificate and your CIBIL report reflects the agreed upon status.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-bold text-green-900 uppercase tracking-tighter border-y border-green-100 py-4">
                                Checking your status correctly prevents future legal disputes.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Many borrowers face severe anxiety during this waiting period. They receive automated SMS reminders for EMIs that they thought were settled. They check their net banking only to see the full outstanding balance staring back at them. This guide is designed to eliminate that confusion. We will provide you with the exact methods to check your loan settlement status online, verify internal bank updates, and track the final closure through credit bureaus.
                            </p>

                            <h2 id="why-status-tracking-matters" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 2: Why Tracking Your Status Matters</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A settlement agreement is a legal contract. You agree to pay a specific amount, and the bank agrees to waive the remaining balance and close the account. However, administrative delays and miscommunications are incredibly common in large financial institutions. The recovery agent who negotiated your deal might move on to the next case the moment your payment clears, leaving you without guidance.
                            </p>
                            <div className="bg-gray-900 text-white p-10 rounded-[3rem] mb-10 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 blur-3xl rounded-full"></div>
                                <h4 className="text-2xl font-black mb-6 flex items-center gap-3">
                                    <span className="w-3 h-10 bg-green-500 inline-block rounded-full"></span>
                                    Core Reasons to Track:
                                </h4>
                                <ul className="space-y-5 font-light text-gray-300">
                                    <li><strong className="text-white uppercase tracking-wider italic text-sm">1. Confirm Payment Allocation:</strong> It ensures that your payment was actually credited to your loan account and not lost in a suspense account.</li>
                                    <li><strong className="text-white uppercase tracking-wider italic text-sm">2. Enforce Timelines:</strong> It holds the bank accountable to the timelines mentioned in your settlement letter.</li>
                                    <li><strong className="text-white uppercase tracking-wider italic text-sm">3. Prevent Agency Harassment:</strong> If a bank fails to update your status, a different recovery agency might be assigned to your case six months later, demanding the waived amount.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-10 font-medium">
                                By monitoring the updates, you can catch administrative errors early and escalate them before they damage your financial future further. Do not rely entirely on the bank to notify you. Take charge of verifying the closure yourself.
                            </p>

                            <h2 id="alert-fake-portals" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 3: Warning: Beware of Fake Status Portals</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                During the vulnerable period after paying a settlement, borrowers are prime targets for cyber fraud. Scammers create sophisticated websites that look identical to bank portals or CIBIL interfaces.
                            </p>
                            <div className="bg-white p-8 rounded-3xl border border-red-200 shadow-xl mb-10 relative">
                                <div className="absolute -top-4 -right-4 bg-red-700 text-white px-6 py-2 rounded-full font-bold text-xs uppercase tracking-[0.2em] shadow-lg animate-pulse">Critical Alert</div>
                                <h4 className="text-xl font-bold mb-3 text-red-800 tracking-tight uppercase">Protect Your Data</h4>
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong className="text-red-800">Unverified Links:</strong> They send SMS links claiming your "Settlement NOC is ready for download." Do not click these.</li>
                                    <li><strong className="text-red-800">Processing Fees:</strong> Legitimate banks will never ask you to pay a "processing fee" or "NOC generation fee" on a third party website after the settlement amount is paid.</li>
                                    <li><strong className="text-red-800">Direct Verification:</strong> Always type your bank’s official website URL directly into your browser or use the official mobile banking application to check any updates.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-10 font-light">
                                If you receive suspicious messages asking for OTPs to check your NOC status, report them immediately. Banks will process the NOC automatically once internal checks are passed.
                            </p>

                            <h2 id="internal-bank-status" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 4: How to Check Internal Bank Status</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The first system that needs to be updated is the bank’s internal ledger. This happens before any information is sent to CIBIL. You do not need to rely on the recovery agent to confirm this for you. You have the right and the ability to verify it yourself through official digital channels.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Log into your official net banking portal using your desktop or the bank’s verified mobile application. Navigate to the "Loans" or "Cards" section. Locate the specific account number mentioned in your settlement letter. Immediately after your payment clears, you might still see the full outstanding amount. This is normal due to batch processing delays.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Within three to five working days, the status should change. The outstanding balance should drop to zero. The account status should shift from "Active" or "NPA" to "Settled" or "Closed." If you see a zero balance, take a screenshot immediately. This digital record proves the bank has accepted the funds against that specific account.
                            </p>

                            <h2 id="cibil-status-updates" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 5: Tracking CIBIL Status Updates</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Once the bank’s internal systems reflect the settlement, they must report this new status to the credit bureaus. This is the most crucial step for your future financial health. Understanding <Link href="/does-loan-settlement-affect-cibil" className="text-blue-600 underline font-medium">does loan settlement affect cibil</Link> is essential, as the status of "Settled" carries very different weight than "Closed."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Banks do not report to CIBIL every single day. They usually submit data in monthly batches. Therefore, it is entirely normal to wait 30 to 45 days after your final payment before the CIBIL report updates. Checking your CIBIL score every day during this period will only cause unnecessary stress.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10 font-medium">
                                To check the status, obtain a fresh credit report directly from the official CIBIL website or other authorized bureaus like Experian or Equifax. Look at the specific account line item. The "Account Status" field must explicitly say "Settled." The "Amount Overdue" field must be exactly zero. The "Current Balance" must also be zero. If it still shows overdue amounts after 45 days, you must initiate a dispute.
                            </p>

                            <h2 id="comparison-bank-vs-cibil" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 6: Comparison: Bank Status vs CIBIL Status</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Borrowers frequently get confused by the different terminology used by the bank’s internal portal and the credit bureaus. A status might look resolved on your banking app but remain highly negative on your credit report. The following comparison clarifies these differences and timelines.
                            </p>
                            <div className="overflow-x-auto my-10 bg-white rounded-3xl shadow-xl border border-gray-200">
                                <table className="min-w-full divide-y divide-gray-200 text-left text-lg">
                                    <thead className="bg-blue-900 text-white">
                                        <tr>
                                            <th scope="col" className="px-6 py-5 font-bold uppercase tracking-wider w-1/3">Metric</th>
                                            <th scope="col" className="px-6 py-5 font-bold uppercase tracking-wider w-1/3 border-l border-blue-800">Bank Portal</th>
                                            <th scope="col" className="px-6 py-5 font-bold uppercase tracking-wider w-1/3 border-l border-blue-800">CIBIL Report</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-5 font-medium text-gray-900 bg-gray-50">Timeline to Update</td>
                                            <td className="px-6 py-5 text-gray-700 border-l border-gray-200">3 to 7 working days after final payment realization.</td>
                                            <td className="px-6 py-5 text-gray-700 border-l border-gray-200">30 to 45 calendar days after final payment realization.</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-5 font-medium text-gray-900 bg-gray-50">Terminology Used</td>
                                            <td className="px-6 py-5 text-gray-700 border-l border-gray-200">Often shows as "Closed" or "Zero Balance".</td>
                                            <td className="px-6 py-5 text-gray-700 border-l border-gray-200">Strictly shows as "Settled" with a specific flag.</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-5 font-medium text-gray-900 bg-gray-50">Waiver Visibility</td>
                                            <td className="px-6 py-5 text-gray-700 border-l border-gray-200">Visible in detailed statement as an adjustment entry.</td>
                                            <td className="px-6 py-5 text-gray-700 border-l border-gray-200">Not explicitly shown as a waiver, just categorized as Settled.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 id="noc-tracking-checklist" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 7: Step by Step NOC Tracking Checklist</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The No Objection Certificate is your ultimate shield. It is a formal, legally binding document from the bank stating that you owe them absolutely nothing on that specific account. You must be proactive in securing this document.
                            </p>
                            <div className="bg-green-50 p-10 rounded-[3rem] border border-green-100 shadow-xl border-l-8 border-green-700 mb-10">
                                <h4 className="text-2xl font-black text-green-900 mb-4 uppercase tracking-tight italic">NOC Procurement Timeline</h4>
                                <ul className="space-y-4 text-gray-800 font-light">
                                    <li><strong>Day 1:</strong> Ensure your settlement payment has been debited from your account and save the transaction reference number (UTR).</li>
                                    <li><strong>Day 5:</strong> Log into net banking and confirm the loan account balance is zero. Take a screenshot for your records.</li>
                                    <li><strong>Day 10:</strong> Send an email to the bank branch or nodal officer referencing your settlement letter, attaching the payment UTR, and requesting the digital NOC.</li>
                                    <li><strong>Day 21:</strong> If the digital NOC has not arrived via email, call customer care to raise a formal service request ticket for NOC dispatch.</li>
                                    <li><strong>Day 45:</strong> Download a fresh CIBIL report to verify the account is marked "Settled" with zero outstanding balance.</li>
                                </ul>
                            </div>

                            <h2 id="common-delays" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 8: Understanding Common Administrative Delays</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Even when you follow every step perfectly, delays can occur. Do not panic immediately. The banking system in India handles millions of transactions daily, and manual interventions are sometimes required to close settled accounts.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One common reason for delay is unmatched payments. If you made the payment via NEFT or RTGS but failed to include your loan account number in the remarks section, the money might sit in the bank’s suspense account. The recovery agent must manually link that payment to your loan profile. This is why keeping the UTR number and sending an email confirmation on Day 10 is critical.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10 font-light">
                                Another delay occurs when there are lingering penal charges. Sometimes, a tiny fraction of interest or a minor late fee gets generated between the time the settlement letter was issued and the time your payment cleared. The automated system sees a balance of 50 rupees and refuses to generate the NOC. A bank official has to manually waive that residual amount.
                            </p>

                            <h2 id="escalation-process" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 9: Escalation Process for Missing Updates</h2>
                            <p className="text-gray-700 leading-relaxed mb-6 font-bold text-green-800">
                                When the Bank Fails to Comply:
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6 font-light">
                                If 30 days have passed and your internal bank status still shows the loan as active, or if the bank refuses to issue the NOC despite you fulfilling all the settlement terms, you must escalate the matter formally. The first escalation step is writing to the Grievance Redressal Officer (GRO) of the bank. Every bank has a designated email address for the GRO listed on their official website.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-10">
                                If the GRO does not resolve the issue within 30 days, you have the right to escalate to the Banking Ombudsman through the Reserve Bank of India portal. Banks face strict penalties for failing to issue an NOC or update credit bureaus after a settlement has been fully executed. Filing a complaint is a free and completely online process. If you require professional assistance dealing with these specific administrative roadblocks, reading about <Link href="/post-loan-settlement-legal-help" className="text-blue-600 underline font-medium">post loan settlement legal help</Link> can provide strategies for forcing the bank to finalize the closure.
                            </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Client Success and Feedback</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {reviews.map((review, index) => (
                                    <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                        <div className="flex items-center mb-3">
                                            <div className="flex text-yellow-400 mr-2">
                                                {[...Array(review.stars)].map((_, i) => (
                                                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-gray-700 italic mb-4 leading-relaxed font-light text-sm">"{review.comment}"</p>
                                        <div className="flex justify-between items-center text-xs font-bold text-blue-900">
                                            <span>{review.name}</span>
                                            <span className="opacity-60">{review.location}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Stop Doing This Alone.</h3>
                                <p className="text-blue-800 mb-6">Our expert lawyers specialize in helping borrowers secure their NOCs and update their CIBIL scores after settlement.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Legal Protection Now
                                </Link>
                            </div>

                            <div className="mt-12 text-[0.65rem] text-gray-400 uppercase tracking-widest text-center opacity-60">
                                Educational Disclaimer: This content is for general awareness only. Legal outcomes vary based on individual loan contracts and the nature of the default. Always seek formal legal counsel. CredSettle is a social-fintech mediation service.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Need NOC Help?</h4>
                                <p className="text-sm text-gray-600 mb-6">We can send an immediate Legal Notice to force the bank to issue your NOC.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Secure Your NOC
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v 24hr Legal Response</p>
                                    <p>v RBI Compliance Audit</p>
                                    <p>v CIBIL Update Support</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Expertise</h4>
                                <nav className="space-y-3">
                                    <Link href="/post-loan-settlement-legal-help" className="block text-sm text-blue-600 hover:underline">Post Settlement Legal Help</Link>
                                    <Link href="/does-loan-settlement-affect-cibil" className="block text-sm text-blue-600 hover:underline">Impact on CIBIL</Link>
                                    <Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="block text-sm text-blue-600 hover:underline">How Settlement Works</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
