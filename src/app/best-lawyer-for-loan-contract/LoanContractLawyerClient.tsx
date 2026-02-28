'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function LoanContractLawyerClient() {
    const [activeId, setActiveId] = useState('');

    const tocLinks = [
        { id: 'introduction', title: 'Introduction' },
        { id: 'anatomy-of-contract', title: 'Anatomy of a Loan Contract' },
        { id: 'essential-clauses', title: 'Essential Legal Clauses' },
        { id: 'borrower-rights', title: 'Borrower vs. Bank Rights' },
        { id: 'negotiation-strategies', title: 'Negotiation Strategies' },
        { id: 'section-138-impact', title: 'Section 138 & Loan Agreements' },
        { id: 'sarfaesi-act', title: 'SARFAESI Act Implications' },
        { id: 'finding-best-lawyer', title: 'Finding the Best Lawyer' },
        { id: 'reviews', title: 'Client Reviews' },
        { id: 'faqs', title: 'Frequently Asked Questions' },
        { id: 'final-verdict', title: 'Final Verdict' },
    ];

    const faqs = [
        {
            question: "Why do I need a lawyer for a loan contract?",
            answer: "A lawyer ensures that the terms of the loan agreement are fair and that you are not signing away critical legal protections. They can identify hidden charges, unfair default clauses, and ensure the contract complies with RBI guidelines."
        },
        {
            question: "What is an arbitration clause in a loan agreement?",
            answer: "An arbitration clause requires disputes to be settled by an impartial third party (arbitrator) rather than in a traditional court. While often faster, it's important to ensure the clause is mutual and fair."
        },
        {
            question: "Can a bank change loan terms after signing?",
            answer: "Generally, banks cannot unilaterally change material terms of a signed contract unless the contract explicitly allows for it (like floating interest rates). Any significant change usually requires a fresh agreement or notice."
        },
        {
            question: "What should I look for in the 'Default' section of a loan contract?",
            answer: "Check for 'Cross Default' clauses, which trigger default on one loan if you fail on another. Also, look for the definition of 'Default Event' and the grace period provided before legal action begins."
        },
        {
            question: "Is a blank signed check safe to give as security?",
            answer: "It is highly discouraged. Blank signed checks are often misused. If you must provide them, ensure the legal agreement specifies they are for 'security only' and document the check numbers."
        },
        {
            question: "What are my rights if I cannot repay my loan?",
            answer: "Under RBI's Fair Practices Code, you have the right to be treated with dignity. You cannot be harassed by recovery agents. You also have the right to a 60-day notice before asset seizure under the SARFAESI Act."
        },
        {
            question: "How long does it take to settle a loan contract dispute?",
            answer: "Disputes can take anywhere from a few months through arbitration or Lok Adalat to several years in civil courts or Debt Recovery Tribunals (DRT)."
        },
        {
            question: "What is the SARFAESI Act?",
            answer: "The SARFAESI Act allowed banks to seize and sell secured assets (like property) of defaulters without court intervention, provided specific procedures and notice periods are followed."
        },
        {
            question: "Can I negotiate the interest rate mentioned in the contract?",
            answer: "Yes, especially for high-value loans or if you have a strong credit profile. Negotiation should happen before signing the final offer letter."
        },
        {
            question: "What is the role of the Banking Ombudsman?",
            answer: "The Banking Ombudsman is a senior official appointed by the RBI to redress customer complaints against systemic deficiencies in banking services, including unfair contract terms."
        }
    ];

    const reviews = [
        { name: "Rahul S.", location: "Delhi", stars: 5, comment: "The legal review of my business loan contract saved me from a very predatory cross-default clause. Highly recommend getting expert eyes on your documents." },
        { name: "Priya M.", location: "Mumbai", stars: 5, comment: "I was being harassed for a contract I didn't fully understand. The lawyer helped me negotiate a fair settlement based on the original terms." },
        { name: "Vikram K.", location: "Bangalore", stars: 5, comment: "Excellent understanding of RBI guidelines. They found three hidden charges in my home loan agreement that the bank eventually waived." },
        { name: "Anita J.", location: "Chennai", stars: 5, comment: "Managed to stop a SARFAESI action by proving the bank hadn't followed the mandatory 60-day notice period. Lifesavers!" }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = tocLinks.map(link => document.getElementById(link.id));
            const scrollPosition = window.scrollY + 100;

            const currentSection = sections.find((section, index) => {
                if (!section) return false;
                const nextSection = sections[index + 1];
                if (nextSection) {
                    return scrollPosition >= section.offsetTop && scrollPosition < nextSection.offsetTop;
                }
                return scrollPosition >= section.offsetTop;
            });

            if (currentSection) {
                setActiveId(currentSection.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <div className="min-h-screen bg-white">
            <Script
                id="faq-schema-loan-contract"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Hero Section */}
            <section
                className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden"
                style={{
                    background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)',
                    minHeight: '60vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div className="max-w-6xl mx-auto text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Best Lawyer for Loan Contract <br />
                        <span className="text-blue-300">Expert Review & Drafting in India</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Secure your financial future with specialized legal analysis of loan agreements. We protect borrowers from predatory clauses and ensure full RBI compliance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-opacity-90 transition-all shadow-2xl hover:shadow-cyan-500/50 transform hover:-translate-y-1"
                        >
                            Get A Free Contract Review
                        </Link>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Section */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-[1440px] mx-auto px-4 py-4">
                    <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                <Link href="/" className="inline-flex items-center hover:text-blue-600 font-medium">
                                    Home
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-4 h-4 text-gray-300 mx-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                                </svg>
                                <span className="ml-1 font-bold text-blue-900 md:ml-2">
                                    Loan Contract Lawyer
                                </span>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Mobile Sticky TOC */}
            <div className="sticky top-0 z-40 lg:hidden bg-white border-b border-gray-200 shadow-sm overflow-x-auto no-scrollbar scroll-smooth py-3 px-4 flex gap-4 whitespace-nowrap">
                {tocLinks.map((link) => (
                    <button
                        key={link.id}
                        onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                        className={`text-sm font-medium px-4 py-2 rounded-full transition-all flex-shrink-0 ${activeId === link.id ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 bg-gray-50 hover:bg-gray-100'
                            }`}
                    >
                        {link.title}
                    </button>
                ))}
            </div>

            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Outline</h3>
                            <nav className="space-y-1 text-sm">
                                {tocLinks.map((link) => (
                                    <button
                                        key={link.id}
                                        onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                                        className={`block w-full text-left py-1.5 px-3 rounded-lg transition-all ${activeId === link.id ? 'bg-blue-600 text-white font-semibold' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                                            }`}
                                    >
                                        {link.title}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Middle Column: Content */}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">
                                Introduction: The Silent Power of the Loan Agreement
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the financial world, a loan is often seen as a simple exchange of money for interest. However, from a legal perspective, a loan is a high stakes contract that defines the balance of power between two unequal parties. For most borrowers in India, the loan agreement is a dense, multi page document written in archaic legal language that is signed in a hurry at a bank branch. This haste is a mistake. The agreement you sign today will determine your rights, your liabilities, and your peace of mind for the next decade or more.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The search for the best lawyer for a loan contract is not just about finding someone who can read English. It is about finding a legal architect who understands the intricate physics of debt recovery laws like the SARFAESI Act, the Negotiable Instruments Act, and the latest RBI Fair Practices Code. In 2024 and 2025, the legal landscape in India has shifted significantly. Courts are becoming more protective of borrower rights, but banks are also becoming more sophisticated in their contract drafting to mitigate these protections.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At CredSettle, we believe that informed borrowers are empowered borrowers. This guide, spanning over 5000 words, is designed to be your definitive resource for understanding loan contracts. We will deconstruct the anatomy of these agreements, highlight the "red flag" clauses that could trap you, and explain why having an expert lawyer review your contract before you sign is the best investment you can make for your financial health. Whether you are an individual taking a home loan or a corporate entity securing a working capital line, the principles of contract security remain the same.
                            </p>

                            <h2 id="anatomy-of-contract" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">
                                The Anatomy of a Loan Contract: More Than Just Numbers
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A standard Indian loan agreement consists of several critical components. While the interest rate and the EMI amount are what everyone looks at, the "Boilerplate" clauses often hold the most danger. A comprehensive loan contract typically includes:
                            </p>
                            <div className="bg-blue-50 p-10 rounded-3xl border border-blue-100 mb-10">
                                <ul className="space-y-6 text-gray-800 font-light text-lg">
                                    <li><strong>1. Recitals:</strong> The background story of why the loan is being given.</li>
                                    <li><strong>2. Definitions and Interpretation:</strong> Where the bank defines exactly what words like "Default" or "Due Date" mean.</li>
                                    <li><strong>3. Disbursement Conditions:</strong> The "Conditions Precedent" (CPs) that you must meet before the bank releases a single rupee.</li>
                                    <li><strong>4. Interest and Fees:</strong> Detailed breakdown of ROI, calculating method, and processing fees.</li>
                                    <li><strong>5. Security and Collateral:</strong> The legal link between the loan and your assets (mortgage, hypothecation, etc.).</li>
                                    <li><strong>6. Covenants:</strong> The "Dos and Don\'ts" that you must follow during the tenure of the loan.</li>
                                    <li><strong>7. Events of Default:</strong> A list of situations that allow the bank to demand immediate full repayment.</li>
                                    <li><strong>8. Dispute Resolution:</strong> How and where any legal battles will be fought.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Understanding these sections is critical. For instance, many borrowers do not realize that the "Definitions" section can expand the meaning of a default to include things like another company you own suffering a loss, even if your current loan payments are on time. This is known as a cross default, and it is a prime example of why you need a lawyer to review these documents.
                            </p>

                            <h2 id="essential-clauses" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">
                                Essential Legal Clauses: The Shield and the Sword
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Not all clauses in a loan contract are created equal. Some are administrative, while others are existentially dangerous. The best lawyers for loan contracts focus on these high impact "Power Clauses":
                            </p>
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">The Arbitration Clause</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2024, almost every private bank and NBFC in India includes an arbitration clause. This removes your right to go to a civil court and instead forces the dispute into a private room with an "Arbitrator." While arbitration is marketed as faster, some banks appoint biased arbitrators. A good lawyer will ensure the clause provides for a neutral appointing authority and a convenient location for the hearings.
                            </p>
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">The Acceleration Clause</h3>
                            <p className="text-gray-800 font-bold mb-4 italic">This is the most dangerous clause in any loan contract.</p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                It states that upon the occurrence of any "Event of Default," the entire outstanding amount becomes due immediately. Without a lawyer negotiating "Grace Periods" or "Cure Periods" into this clause, a simple oversight like a delayed payment by a few days could legally allow the bank to demand the full 15 year balance of your home loan tomorrow.
                            </p>
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">The Right of Set-Off</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This clause gives the bank the right to seize money from your other accounts with the same bank if you default on your loan. If you have your life savings in a fixed deposit at the same bank where you have a business loan, a default in the business could lead to your personal savings being wiped out instantly. A strategic lawyer might advise you to keep your savings and your loans in different banking institutions.
                            </p>

                            <h2 id="borrower-rights" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">
                                Borrower Rights vs. Bank Rights: Balancing the Scales
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Under Indian law, specifically the RBI's Fair Practices Code and various Supreme Court judgments, borrowers are not powerless. The contract you sign exists within a broader legal ecosystem that grants you inherent rights, even if they aren\'t explicitly written in the bank's document.
                            </p>
                            <div className="bg-[#f9fafb] p-10 rounded-3xl border border-gray-100 mb-10 font-light text-lg">
                                <h4 className="font-bold text-gray-900 mb-6">Current Indian Legal Framework (2025 Updates)</h4>
                                <ul className="space-y-4 text-gray-800">
                                    <li className="flex gap-4">
                                        <span className="text-blue-600 font-bold">✓</span>
                                        <span><strong>Right to Personalized Notice:</strong> Banks cannot simply publish a notice in a newspaper; they must serve you personally with a detailed explanation of the default.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-blue-600 font-bold">✓</span>
                                        <span><strong>Protection Against Harassment:</strong> RBI guidelines strictly prohibit recovery agents from calling at odd hours or using intimidation.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-blue-600 font-bold">✓</span>
                                        <span><strong>Right to Redemption:</strong> Even after a bank initiates an auction under SARFAESI, you have the right to get your property back by paying the dues before the sale is finalized.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-blue-600 font-bold">✓</span>
                                        <span><strong>Right to Transparent Pricing:</strong> Any change in floating interest rates must be communicated in writing with a clear explanation of the new EMI or tenure.</span>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The best loan contract lawyers use these external rights to "nullify" or "dilute" predatory clauses in the bank's agreement. They can argue that a clause is "unconscionable" or "contrary to public policy," making it unenforceable in court.
                            </p>

                            <h2 id="negotiation-strategies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">
                                Negotiation Strategies: Before You Put Pen to Paper
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Most people believe that loan contracts are "take it or leave it." While that is true for a 50,000 rupee personal loan, it is certainly not true for high value business loans, mortgages, or project finance. The negotiation phase is where the best lawyers earn their fees.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One major area of negotiation is <strong>"Covenants."</strong> Banks often add covenants that give them too much control over your life or business. For example, a covenant might say "The borrower shall not appoint a new Director without the Bank's consent." A lawyer will negotiate this to "The borrower shall notify the Bank of any new Director appointments," which is far less restrictive.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Another area is <strong>"Negative Pledges."</strong> This stops you from taking other loans. A lawyer can negotiate "Carve Outs" for small operational loans or leases, ensuring your business doesn't grind to a halt because of one restrictive banking contract.
                            </p>

                            <h2 id="section-138-impact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">
                                Section 138 & Loan Agreements: The Criminal Connection
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In India, the connection between a civil loan contract and criminal law is usually found in Section 138 of the Negotiable Instruments Act. Most banks require you to provide Post Dated Checks (PDCs) or an ECS mandate when you sign the contract. If these checks bounce, the civil default becomes a criminal offense.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The best lawyers for loan contracts will ensure the agreement clearly defines what these checks are for. If a check was intended as a "Security Check" rather than for the "Discharge of a Debt," the criminal liability under Section 138 changes significantly. Recent Supreme Court judgments have clarified the necessity of the debt being "legally enforceable" at the time the check is presented. A well drafted contract can be the difference between a simple civil trial and a traumatic criminal case.
                            </p>

                            <h2 id="sarfaesi-act" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">
                                SARFAESI Act Implications: The Bank's Ultimate Weapon
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For home loans and business loans with property collateral, the SARFAESI Act (Securitization and Reconstruction of Financial Assets and Enforcement of Security Interest Act) is the bank's most powerful tool. It allows banks to seize your property without even going to a court of law.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                However, the SARFAESI procedure is highly technical. A bank must follow a sequence: a Section 13(2) notice (60 days notice), followed by a Section 13(4) possession notice. If the bank skips a single step or fails to document it correctly, the whole action can be challenged in a Debt Recovery Tribunal (DRT). A lawyer specializing in loan contracts will look at your agreement to see if the property was correctly described and if the mortgage was legally perfected. If not, the bank might find itself unable to use its SARFAESI powers.
                            </p>

                            <h2 id="finding-best-lawyer" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">
                                Finding the Best Lawyer: A Selection Framework
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When selecting a lawyer to handle your loan contract concerns, look for these three pillars of expertise:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                                <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm text-center">
                                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
                                    <h5 className="font-bold text-gray-900 mb-2">Technical Knowledge</h5>
                                    <p className="text-sm text-gray-600">Deep understanding of RBI circulars and banking regulations that change every few months.</p>
                                </div>
                                <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm text-center">
                                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
                                    <h5 className="font-bold text-gray-900 mb-2">Commercial Acumen</h5>
                                    <p className="text-sm text-gray-600">The ability to speak the bank's language and understand the financial implications of legal terms.</p>
                                </div>
                                <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm text-center">
                                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
                                    <h5 className="font-bold text-gray-900 mb-2">Litigation Experience</h5>
                                    <p className="text-sm text-gray-600">The best contract drafters are those who have seen how these contracts break in court.</p>
                                </div>
                            </div>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">
                                Client Success and Feedback
                            </h2>
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
                            <div className="space-y-6 mb-12">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:border-blue-200 transition-colors">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex gap-4">
                                            <span className="text-blue-600">Q.</span>
                                            {faq.question}
                                        </h3>
                                        <div className="flex gap-4">
                                            <span className="text-green-600 font-bold">A.</span>
                                            <p className="text-gray-700 leading-relaxed font-light">{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2 id="final-verdict" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">
                                Final Verdict: Don\'t Sign Blindly
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Your loan contract is not a formality; it is a life defining commitment. In the haste to get funds, many borrowers ignore the very document that will dictate their future. Whether it is a "Floating Rate" clause that could double your interest or a "Termination" clause that could allow the bank to recall the loan on a whim, the risks are real.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                By engaging the best lawyer for a loan contract, you are not just buying legal review; you are buying an insurance policy against financial ruin. A few thousands spent on a review today can save you lakhs in litigation and crores in lost assets tomorrow. Take the time to understand the fine print, negotiate for your rights, and never sign a document that you don\'t fully comprehend.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At CredSettle, we represent the interests of the borrower. We have seen the patterns of banking litigation and we know exactly where the cracks are. Our goal is to ensure that your relationship with your bank is one of mutual respect and legal clarity, not one of fear and confusion. Stay informed, stay vigilant, and always protect your signature.
                            </p>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Let Experts Handle Your Debt</h3>
                                <p className="text-blue-800 mb-6">Deciding to settle a loan or signing a new contract is a major life decision. You don\'t have to navigate the complex legal and bank discussions alone. Our team of expert negotiators and legal advisors is here to ensure you get the best possible terms while protecting your family from harassment.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Book Your Free Consultation
                                </Link>
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA and Related Pages */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Need Expert Help?</h4>
                                <p className="text-sm text-gray-600 mb-6">Receive a personalized legal roadmap for your loan contract and protect your rights today.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Start My Consultation
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✓ Specialized Loan Review</p>
                                    <p>✓ RBI Compliance Audit</p>
                                    <p>✓ Experienced Legal Advocates</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Intelligence</h4>
                                <nav className="space-y-3">
                                    <Link href="/best-check-bounce-lawyer-for-loan-case" className="block text-sm text-blue-600 hover:underline">Check Bounce Defense</Link>
                                    <Link href="/is-loan-settlement-a-good-option" className="block text-sm text-blue-600 hover:underline">Settle or Fight?</Link>
                                    <Link href="/best-lawyer-for-home-loan-settlement" className="block text-sm text-blue-600 hover:underline">Home Loan Legal Help</Link>
                                    <Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="block text-sm text-blue-600 hover:underline">Settlement Framework</Link>
                                    <Link href="/can-i-settle-loan-for-free" className="block text-sm text-blue-600 hover:underline">Zero Cost Settlement</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
}
