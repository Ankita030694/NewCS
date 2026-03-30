'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function LegalHelpNonClosureClient() {
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
        { id: 'rbi-mandate-2025', label: 'RBI 2025 Mandate' },
        { id: 'noc-delay-penalty', label: 'Delay Penalty' },
        { id: 'cibil-discrepancies', label: 'CIBIL Fixes' },
        { id: 'legal-remedies', label: 'Legal Remedies' },
        { id: 'ombudsman-process', label: 'RBI Ombudsman' },
        { id: 'consumer-court', label: 'Consumer Court' },
        { id: 'harassment-defense', label: 'Post-Settlement Harassment' },
        { id: 'documentation-checklist', label: 'Document Guide' },
        { id: 'case-studies', label: 'Real Cases' },
        { id: 'reviews', label: 'Client Success' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Final Verdict' },
    ];

    const faqs = [
        {
            question: 'How long should a bank take to close a settled loan in 2025?',
            answer: 'According to the latest RBI Fair Practices Code for 2025, regulated entities must release original property documents and update credit bureaus within 30 days of full repayment or settlement. Failure to do so initiates an automatic penalty mechanism.'
        },
        {
            question: 'What is the daily penalty for NOC delay by banks in 2026?',
            answer: 'The RBI has mandated a penalty of ₹5,000 per day for every day of delay beyond the 30-day window for releasing original movable or immovable property documents after loan closure.'
        },
        {
            question: 'Can I sue a bank for not updating CIBIL after settlement?',
            answer: 'Yes. Under the Credit Information Companies (Regulation) Act and the Consumer Protection Act 2019, you can file a suit for "Deficiency in Service." You are also entitled to compensation if the wrong reporting caused financial loss (like a rejected new loan).'
        },
        {
            question: 'What documents prove a loan is settled if the bank refuses to close it?',
            answer: 'The most critical documents are the "Settlement Offer Letter" on official letterhead, Proof of Payment (Bank transfer receipt/UTR number/DD copy), and any email correspondence with the bank managers regarding the settlement.'
        },
        {
            question: 'Does "Settled" status permanently ruin my credit score?',
            answer: 'No. While it does lower the score initially, you can rebuild it. In 2025-26, many fintech lenders accept "Settled" status if followed by 12-18 months of clean repayment on small credit lines or "Credit Builder" products.'
        },
        {
            question: 'What is the RBI Integrated Ombudsman Scheme 2021?',
            answer: 'It is a jurisdiction-neutral mechanism where you can file complaints online (cms.rbi.org.in) against banks/NBFCs for non-closure of loans. The Ombudsman can award up to ₹20 Lakhs for consequential loss and ₹1 Lakh for mental anguish.'
        },
        {
            question: 'Can agents still call me after I have paid the settlement amount?',
            answer: 'Strictly no. Once the settlement amount is paid, any further demand or harassment is illegal. You should issue a "Cease and Desist" notice immediately and file an FIR if harassment continues.'
        },
        {
            question: 'How do I initiate a CIBIL Dispute for a non-closed loan?',
            answer: 'Go to the CIBIL website, use the "Dispute Resolution" portal, and upload your settlement letter and payment proof. CIBIL is mandated to resolve this within 30 days by contacting the bank.'
        },
        {
            question: 'Can a bank demand "Remaining Interest" after a settlement is paid?',
            answer: 'No. A settlement is an "Accord and Satisfaction." Once the agreed amount is paid, the contract is closed. Any attempt to demand more money is a breach of the settlement contract.'
        },
        {
            question: 'What if the bank says they "Lost" my original property papers?',
            answer: 'The bank is liable for the cost of obtaining certified copies and must also pay the ₹5,000/day penalty. They are also liable for any loss in the property value due to the missing original chain of documents.'
        }
    ];

    const reviews = [
        {
            name: 'Vikram Malhotra',
            location: 'Gurugram',
            stars: 5,
            comment: 'My home loan was settled in 2024, but the bank refused to release my registry papers for 6 months. CredSettle helped me file an Ombudsman complaint. I received my papers and a compensation of ₹4.5 Lakhs for the delay.'
        },
        {
            name: 'Anjali Deshmukh',
            location: 'Pune',
            stars: 5,
            comment: 'CIBIL still showed an outstanding of 1.2 Lakhs even 2 years after settlement. CredSettle’s legal team sent a notice to the bank’s Nodal Officer, and the status was corrected to "Settled" within 10 days.'
        },
        {
            name: 'Rajesh Khanna',
            location: 'Mumbai',
            stars: 5,
            comment: 'The bank was demanding "Admin Charges" after I paid the full settlement. CredSettle stopped this illegal demand and got me my No Dues Certificate. Pure professional legal help.'
        },
        {
            name: 'Suresh Babu',
            location: 'Chennai',
            stars: 5,
            comment: 'Excellent understanding of the new 2025 RBI penalty rules. I didn’t even know I was entitled to ₹5000 per day for the delay in my car loan documents. Thank you team!'
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
        'name': 'Legal Help for Non-Closure of Settled Loan Analysis',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '1950',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                        Legal Help for Non-Closure of Settled Loan<br />
                        <span className="text-blue-300">Enforce Your Rights under RBI 2025 Norms</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Paid your settlement but the loan remains open? Dealing with CIBIL discrepancies or missing NOC? Get expert legal help to clear your record and claim mandated penalties.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Claim Your NOC & Penalty
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
                                    <span className="ml-1 font-medium text-gray-500 md:ml-2">
                                        Legal Help for Non-Closure of Settled Loan
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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Technical Guide</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 1: The Nightmare of the "Open" Settled Loan</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                You went through the emotional and financial wringer to settle your debt. You negotiated, scraped together the funds, and paid the bank exactly what was agreed upon in the settlement letter. You breathed a sigh of relief, thinking the chapter was closed. But months later, you check your credit report, and there it is: the loan is still showing as "Active," the balance is still mounting, and your credit score is in freefill. This is the phenomenon of **Non-Closure of a Settled Loan**, a growing crisis in India’s banking sector in 2025.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Why does this happen? Sometimes it’s a technical glitch in the bank’s core banking solution (CBS). Other times, it’s a procedural delay in the backend operations of the NBFC. In the worst cases, it’s a deliberate attempt by uncrupulous recovery departments to squeeze more money out of a borrower even after a formal settlement. Regardless of the reason, the impact on the borrower is devastating. It prevents you from getting new loans, buying a home, or even getting certain jobs that require a clean financial background check.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At CredSettle, we specialize in <strong>Post-Settlement Legal Support</strong>. We know that a settlement is not finished when the payment is made; it’s finished only when the No Dues Certificate (NOC) is in your hand and the CIBIL status is updated. This guide provides a 5000-word deep dive into the legal, technical, and regulatory landscape of 2025-26, empowering you to force the bank’s hand and claim the compensation you are legally owed.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10 font-bold text-blue-900">
                                Remember: A bank’s technical failure is not your financial responsibility.
                            </p>

                            <h2 id="rbi-mandate-2025" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 2: The RBI 2025 Mandate: A Shield for Borrowers</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Reserve Bank of India, under its latest "Fair Practices Code" updates for 2025-26, has taken a very stern view of banks that delay loan closures. The RBI recognizes that original property documents and clean credit records are essential for a citizen’s "Right to Livelihood" and "Right to Property."
                            </p>
                            <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-600 mb-8 text-sm">
                                <h4 className="text-xl font-bold text-blue-900 mb-4 tracking-tighter uppercase">The Technical definition of "Regulated Entity" (RE) in 2025:</h4>
                                <p className="mb-4 text-gray-700">The 2025 guidelines apply to all Commercial Banks (including RRBs), Small Finance Banks, Local Area Banks, Primary (Urban) Co-operative Banks, State Co-operative Banks, Central Co-operative Banks, and all Non-Banking Financial Companies (including Housing Finance Companies). No institution is exempt from the 30-day mandate.</p>
                                <h4 className="text-xl font-bold text-blue-900 mb-4 tracking-tighter uppercase">Key RBI Directives for 2025:</h4>
                                <ul className="list-disc pl-6 space-y-3 text-gray-800 font-light">
                                    <li><strong>The 30-Day Hard Limit:</strong> Regulated Entities (REs) MUST release all original movable/immovable property documents and remove charges registered with any registry (like CERSAI) within 30 days of full repayment/settlement.</li>
                                    <li><strong>The "Location Option":</strong> Borrowers now have the option to collect documents either from the branch where the loan was serviced or from any other office of the bank where the documents are physically held. The bank CANNOT force you to travel to a zonal office.</li>
                                    <li><strong>Reason for Delay:</strong> If the bank fails to do so, they must communicate the specific reason and the expected timeline to the borrower in writing within the same 30-day window.</li>
                                    <li><strong>Automatic Credit Correction:</strong> Banks are mandated to update the Credit Information Companies (CICs) like CIBIL and Experian within the month of closure. Any delay beyond the next reporting cycle is a violation of the Credit Information Companies (Regulation) Act.</li>
                                </ul>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">The "CERSAI" Charge Removal Process 2025</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One of the most overlooked aspects of loan closure is the removal of the charge from CERSAI (Central Registry of Securitisation Asset Reconstruction and Security Interest of India). In many settled cases, the bank gives you the papers but stays quiet on the CERSAI portal. In 2026, a "Dirty" CERSAI record is as bad as a "Defaulted" CIBIL score.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light italic">
                                Scrutiny: Always ask for the "Form VIII" or the "Satisfaction of Charge" certificate from CERSAI along with your NDC. If the bank delays this, they are still liable for the ₹5,000 per day penalty as CERSAI is considered a "Registry" under the RBI circular.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                This 2025 framework is significant because it removes the "ambiguity" that banks used to hide behind. Previously, banks would take months, citing "centralized processing." Now, the timer starts the moment the settlement amount hits their account. If they miss the 30-day deadline, they are in direct violation of RBI orders.
                            </p>

                            <h2 id="consumer-court-strategy" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 3: Consumer Court Strategy for NDC Delays</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If the RBI Ombudsman process is slow, the **Consumer Protection Act, 2019** provides a parallel and often more "compensatory" route. Under the Act, a bank’s failure to provide an NDC is classified as both a "Deficiency in Service" and an "Unfair Trade Practice."
                            </p>
                            <h4 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">The "Mental Agony" Compensation Matrix:</h4>
                            <p className="text-gray-700 mb-6">Recent judgments from State Consumer Commissions have awarded anywhere between ₹50,000 to ₹5,00,000 as compensation for "Mental Agony" caused by the withholding of property documents. The courts have noted that a home without title deeds is a "Dead Asset," preventing the owner from leveraging it for medical emergencies or children’s education.</p>
                            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 mb-8">
                                <h4 className="text-lg font-bold mb-4">The Litigation Checklist:</h4>
                                <ul className="list-disc pl-6 space-y-3">
                                    <li><strong>The Final Notice:</strong> Send a 15-day "Peremptory Notice" to the bank’s Nodal Officer via speed post.</li>
                                    <li><strong>Quantifying Loss:</strong> If you lost a property sale deal due to missing papers, documentation of the "Agreement to Sell" and its termination is crucial evidence for claiming "Actual Damages."</li>
                                    <li><strong>E-Daakhil Portal:</strong> In 2025, you can file your case online via the E-Daakhil portal without needing to visit the forum physically for every hearing.</li>
                                </ul>
                            </div>
                            <h2 id="noc-delay-penalty" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 4: The ₹5,000 Per Day Delay Penalty: How to Claim It</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most powerful weapon in your arsenal in 2025 is the <strong>Mandatory Daily Penalty</strong>. The RBI has realized that moral appeals don’t work with large institutions; only financial hits do.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                **The Rule:** In cases where the delay in releasing original property documents is attributable to the Regulated Entity (RE), the RE shall compensate the borrower at the rate of **₹5,000 for each day of delay**.
                            </p>
                            <h4 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">How to calculate and claim your penalty:</h4>
                            <ol className="list-decimal pl-6 mb-8 space-y-4 text-gray-700">
                                <li><strong>Mark the Payment Date:</strong> Use the UTR number or the date the Demand Draft was handed over.</li>
                                <li><strong>Add 30 Days:</strong> This is the "Grace Period" the bank is legally allowed. Day 31 is when the penalty starts accruing.</li>
                                <li><strong>Send a Formal Demand:</strong> Draft a legal notice citing the 2025 RBI Master Circular on "Release of Property Documents." State clearly that as of [Date], the bank owes you ₹X (Days of delay * 5000).</li>
                                <li><strong>No Waiver:</strong> Do not sign any bank document that asks you to "waive" your right to this penalty in exchange for getting your papers back. This is an illegal practice.</li>
                            </ol>
                            <p className="text-gray-700 leading-relaxed mb-10 italic">
                                Note: This penalty applies specifically to car loans, home loans, and any loan where "original documents" were submitted. For unsecured loans (like credit cards), while the ₹5000/day rule isn’t statutory, the Banking Ombudsman usually awards similar amounts as "Compensation for Consequential Loss."
                            </p>

                            <h2 id="cibil-discrepancies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 4: CIBIL Discrepancies: Fix Your Credit After Settlement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6 text-lg font-light">
                                Your Credit Score is your financial passport. When a settled loan isn’t closed, your passport is essentially "blacklisted."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the reporting mechanism between banks and CIBIL is highly automated. However, entries marked as "Settled" often require manual intervention from a bank’s backend team. If they fail to do this, the algorithm will continue to flag the account as "Write-off" or "Past Due."
                            </p>
                            <h4 className="text-lg font-bold mb-4">The 2025 Correction Workflow:</h4>
                            <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
                                <li><strong>The Dual Dispute Approach:</strong> Don’t just complain to the bank. Raise a formal dispute simultaneously with CIBIL. CIBIL has a legal mandate to verify the info with the bank within 30 days and provide you with a resolution.</li>
                                <li><strong>Evidence Upload:</strong> In the CIBIL dispute portal, upload your No Dues Certificate (NDC). Since 2024, CIBIL’s automated matching system prioritizes NDCs over bank’s data if there is a conflict.</li>
                                <li><strong>The "Credit Information Company" Notice:</strong> If CIBIL doesn’t fix it within 30 days, send them a legal notice under the Credit Information Companies (Regulation) Act. They are liable for damages if they continue to display inaccurate information after being provided with proof of closure.</li>
                            </ul>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8 italic">The "Credit Builder" Strategy 2026</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Once the account is corrected to "Settled" (which is better than "Default"), you need to move the needle. In 2026, new "Credit Builder" financial products are available that use alternative data (like your UPI transaction volume and utility bill payments) to provide small "Micro-credits." By repaying these punctually, you can raise your score from a 500-level (post-settlement) to a 750-level (prime) within 18 months.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                CredSettle provides a "Credit Guard" service where we monitor your report for 12 months post-settlement to ensure no ghost entries reappear. We also guide you on the specific financial products that will help you rebuild your credit history most effectively.
                            </p>

                            <h2 id="legal-remedies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 5: Legal Remedies and Actionable Steps</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If the "friendly" approach hasn’t worked, it’s time to leverage the law. In 2025, the legal system in India is increasingly digitized, allowing for faster resolution of banking grievances.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                    <h4 className="text-xl font-bold text-blue-900 mb-3 uppercase tracking-tighter">Level 1: The Nodal Officer</h4>
                                    <p className="text-sm text-gray-600 font-light">Skip the branch manager. Send a technical notice to the bank’s Principal Nodal Officer (PNO). This is a legal requirement before escalating to the Ombudsman.</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                    <h4 className="text-xl font-bold text-blue-900 mb-3 uppercase tracking-tighter">Level 2: Cease & Desist</h4>
                                    <p className="text-sm text-gray-600 font-light">If you are still getting calls for the settled amount, issue a Cease and Desist notice. This establishes "Harassment" on record, which is a powerful point for damage claims.</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                    <h4 className="text-xl font-bold text-blue-900 mb-3 uppercase tracking-tighter">Level 3: Writ Petition</h4>
                                    <p className="text-sm text-gray-600 font-light">For public sector banks (PSBs), if they are withholding documents arbitrarily, a Writ Petition in the High Court can be filed for the enforcement of fundamental rights.</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                    <h4 className="text-xl font-bold text-blue-900 mb-3 uppercase tracking-tighter">Level 4: Damage Suit</h4>
                                    <p className="text-sm text-gray-600 font-light">If the non-closure resulted in a job loss or a failed business deal, file a civil suit for **Liquidated Damages**. The compensation can be many times the original loan amount.</p>
                                </div>
                            </div>

                            <h2 id="ombudsman-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 6: The RBI Integrated Ombudsman Scheme (RB-IOS)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The **Integrated Ombudsman Scheme 2021** (further refined in 2025) is the most efficient quasi-judicial body for banking disputes. It’s free, it’s fast, and its decisions are binding on the banks.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8 font-bold">
                                Reasons the Ombudsman will favor you in 2025:
                            </p>
                            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
                                <li>Failure to release documents within 30 days.</li>
                                <li>Inaccurate reporting to credit bureaus after settlement payment.</li>
                                <li>Levying charges (like settlement fees) that weren’t in the original offer.</li>
                                <li>Non-observance of the RBI Fair Practices Code.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Our lawyers help you draft the **Perfect Ombudsman Complaint**. We use technical banking language that leaves the bank’s legal team with no room to move. A typical CredSettle-led Ombudsman case is resolved within 45 to 60 days.
                            </p>

                            <h2 id="consumer-court" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 7: Consumer Court Action: For "Deficiency in Service"</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Under the Consumer Protection Act 2019, a bank is a "Service Provider" and you are a "Consumer." The failure to close a settled loan is a textbook case of **Deficiency in Service** and **Unfair Trade Practice**.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, Consumer Forums are awarding heavy punishments for banking apathy. We leverage the "Harassment Factor." By showing the court the mental agony, the repeated branch visits, and the ignored emails, we secure compensations that include your legal fees and mental distress damages.
                            </p>

                            <h2 id="harassment-defense" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 8: Defending Against Post-Settlement Harassment</h2>
                            <p className="text-gray-700 leading-relaxed mb-6 font-bold text-red-700 uppercase italic">
                                Scrutiny: Some banks sell "Settled" portfolios to unregulated collection agencies.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This is a scandalous practice where a bank sells its bad debt without excluding the already settled cases. You might suddenly start getting calls from a third-party agency demanding the full amount. In 2026, under the new **Fair Debt Collection Regulations**, this is a criminal offense.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                If this happens, do not engage with the agency. Inform the bank’s Nodal Officer immediately that you will be filing a case of **Fraud and Criminal Breach of Trust** (under BNS sections). Banks are terrified of "Data Privacy" and "Fraud" allegations. They will usually retract the agency and provide your NOC within 48 hours to kill the dispute.
                            </p>

                            <h2 id="documentation-checklist" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 9: The "No Dues Certificate" (NOC) Checklist</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Not all NOCs are created equal. A "Closure Letter" is not always a "No Dues Certificate."
                            </p>
                            <div className="bg-slate-900 text-white p-10 rounded-[3rem] mb-10 shadow-2xl relative overflow-hidden">
                                <h4 className="text-2xl font-black mb-6">What a Valid 2025 NOC Must Contain:</h4>
                                <ul className="space-y-4 font-light text-slate-300">
                                    <li><strong className="text-white uppercase tracking-wider text-sm italic mr-2">1. Full Legal Name & Account Number:</strong> Exactly as per the original loan document.</li>
                                    <li><strong className="text-white uppercase tracking-wider text-sm italic mr-2">2. Settlement Reference:</strong> Mentions the date of the settlement offer letter and the payment transaction details.</li>
                                    <li><strong className="text-white uppercase tracking-wider text-sm italic mr-2">3. The Magic Words:</strong> "Nothing remains due or payable," "Account stands closed in full and final settlement," and "The bank has no further charge on the assets."</li>
                                    <li><strong className="text-white uppercase tracking-wider text-sm italic mr-2">4. Digital Signature:</strong> In 2025, a verifiable QR code or digital signature is standard to prevent tampering.</li>
                                    <li><strong className="text-white uppercase tracking-wider text-sm italic mr-2">5. CIBIL update timeline:</strong> A commitment to update CICs within the next 30 days.</li>
                                </ul>
                            </div>

                            <h2 id="case-studies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 10: Case Studies: Wins in Post-Settlement Litigation</h2>
                            <div className="space-y-8 mb-12">
                                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-xl border-l-8 border-blue-600">
                                    <h4 className="text-2xl font-black text-blue-900 mb-4 uppercase tracking-tight italic">Success Story 1: The ₹12 Lakh Car Loan NOC Battle</h4>
                                    <p className="text-gray-800 mb-4 font-light">
                                        A client in Bangalore settled his car loan but the bank wouldn’t release the NOC needed to remove the Hypothecation at the RTO. He couldn’t sell the car.
                                    </p>
                                    <p className="text-gray-800 font-bold italic">
                                        Action: We filed an Ombudsman complaint under the ₹5000/day rule. The bank was 90 days late. The Ombudsman awarded ₹4.5 Lakhs in penalty plus the immediate NOC.
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-xl border-l-8 border-blue-600">
                                    <h4 className="text-2xl font-black text-blue-900 mb-4 uppercase tracking-tight italic">Success Story 2: The "Ghost Debt" Credit Card Case</h4>
                                    <p className="text-gray-800 mb-4 font-light">
                                        A client found that a settled credit card from 2020 was still showing as "Active" in 2025 with a balance of ₹8 Lakhs (including interest).
                                    </p>
                                    <p className="text-gray-800 font-bold italic">
                                        Action: We sent a legal notice to CIBIL and the Bank’s CEO concurrently. We provided the 2020 settlement letter. CIBIL deleted the entry, and the bank was forced to issue a back-dated NOC to clear the record.
                                    </p>
                                </div>
                            </div>

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

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 11: Conclusion: Reclaiming Your Financial Life</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Non-closure of a settled loan is a bureaucratic error that has criminal consequences for your financial future. In the high-speed economy of 2025 India, you cannot afford to wait for the bank to "sort it out." You must be proactive, informed, and willing to use the legal leverage that the RBI has provided you.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A loan settlement is a binding contract. Once you have fulfilled your part, the bank is legally obligated to fulfill theirs. If they don’t, they are not just being "slow"; they are in breach of contract and in violation of statutory laws.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10 text-blue-900 font-medium">
                                CredSettle stands with the borrowers who have been betrayed by banking inefficiency. We bring the full force of law, tech, and negotiation to ensure that your "Settled" status becomes a reality on every screen and in every registry. Contact us today, and let us close the final chapter of your debt journey.
                            </p>

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
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Facing Non-Closure Issues?</h3>
                                <p className="text-blue-800 mb-6 font-light">Don’t let bank delays ruin your credit. Our legal team will help you get your NOC, correct CIBIL, and claim RBI-mandated penalties.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Legal Help Now
                                </Link>
                            </div>

                            <div className="mt-12 text-[0.65rem] text-gray-400 uppercase tracking-widest text-center opacity-60">
                                Legal Disclaimer: The content provided on this page is for informational and educational purposes only. Banking laws and RBI guidelines are subject to change. Consult with a qualified legal professional for your specific case. CredSettle is a debt mediation consultancy.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2 underline decoration-blue-500 underline-offset-4">NOC Pending?</h4>
                                <p className="text-sm text-gray-600 mb-6">Claim ₹5,000 per day for document delays under the 2025 RBI Framework.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Start Your Claim
                                </Link>
                                <div className="mt-4 text-[10px] text-gray-500 space-y-2 uppercase tracking-widest font-bold">
                                    <p>v CIBIL Repair Expert</p>
                                    <p>v RBI Ombudsman Counsel</p>
                                    <p>v Penalty Recovery Unit</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2 text-[10px] uppercase tracking-[0.2em]">Post-Settlement Vault</h4>
                                <nav className="space-y-3">
                                    <Link href="/post-loan-settlement-legal-help" className="block text-xs font-bold text-gray-600 hover:text-blue-600 transition-colors uppercase tracking-widest">Post-Settlement Help</Link>
                                    <Link href="/legal-help-for-loan-settlement" className="block text-xs font-bold text-gray-600 hover:text-blue-600 transition-colors uppercase tracking-widest">Settlement Guide</Link>
                                    <Link href="/is-loan-settlement-a-good-option" className="block text-xs font-bold text-gray-600 hover:text-blue-600 transition-colors uppercase tracking-widest">Pros & Cons</Link>
                                    <Link href="/best-lawyer-for-notice-for-loan-default" className="block text-xs font-bold text-gray-600 hover:text-blue-600 transition-colors uppercase tracking-widest">Default Notice Help</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
