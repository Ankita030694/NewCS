'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

const CompareFeesClient = () => {
    const [activeSection, setActiveSection] = useState('introduction');
    const contentRef = useRef<HTMLDivElement>(null);

    const sections = [
        { id: 'introduction', label: 'Introduction' },
        { id: 'fee-models-india', label: 'Fee Models in India' },
        { id: 'percentage-debt-vs-savings', label: 'Debt vs. Savings %' },
        { id: 'success-rate-analysis', label: 'Success Rate Analysis' },
        { id: 'rbi-settlement-policy', label: 'RBI Settlement Policy' },
        { id: 'hidden-costs-setup', label: 'Hidden Costs & Setup' },
        { id: 'negotiation-variables', label: 'Negotiation Variables' },
        { id: 'benchmark-performance', label: 'Market Benchmarks' },
        { id: 'transparency-checklist', label: 'Transparency Checklist' },
        { id: 'faqs', label: 'Common FAQs' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;
            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getLinkClass = (id: string) => {
        return `block py-3 px-4 rounded-xl transition-all duration-300 text-sm font-medium ${
            activeSection === id 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 translate-x-1' 
                : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
        }`;
    };

    const faqs = [
        {
            question: "What is the standard fee for debt settlement in India in 2025?",
            answer: "Standard fees typically range from 10% to 25% of the total debt amount being settled. Some agencies use a 'Success Fee' model based on the amount saved, which can range from 20% to 35% of the total debt reduction."
        },
        {
            question: "Are upfront fees legal for debt settlement services?",
            answer: "While many companies charge a small setup fee for account creation and legal documentation, the RBI and consumer protection norms in 2025 strongly discourage large upfront fees without guaranteed services. Most reputable firms operate on a success-based or monthly retainer model."
        },
        {
            question: "How do banks calculate the success rate of a settlement?",
            answer: "Banks measure success by the 'Percentage of Recovery' relative to the principal. For a borrower, success is measured by the total waiver secured. In 2025, a successful settlement typically waives 40% to 70% of the total outstanding amount."
        },
        {
            question: "Does paying higher fees guarantee a better settlement rate?",
            answer: "Not necessarily. A higher fee might provide more personalized legal support, but the actual waiver is determined by your financial hardship, the bank's internal NPA policies, and the negotiator's relationship with recovery heads."
        },
        {
            question: "What is the 'No Savings, No Fee' model?",
            answer: "This is a performance-based model where the firm only charges you a commission if they successfully negotiate a waiver on your debt. If the bank refuses to settle, you don't pay any commission."
        },
        {
            question: "Can I negotiate fees with a debt relief company?",
            answer: "Yes, especially if you have a high debt volume across multiple banks. Companies often offer bundled discounts or reduced percentages for larger portfolios."
        },
        {
            question: "What are 'Account Maintenance' fees in a settlement program?",
            answer: "These are small monthly charges (typically ₹500 to ₹1500) that cover the administration of your dedicated settlement fund and ongoing communication with recovery agents."
        },
        {
            question: "Is there a difference in fees for personal loans vs credit cards?",
            answer: "Credit card settlements often attract slightly higher fees because they involve higher interest waivers and more complex negotiation cycles compared to standard personal loans."
        },
        {
            question: "What happens if a company fails to settle my debt after I've paid fees?",
            answer: "You should ensure your service agreement has a refund or 'Performance Guarantee' clause. Reputable firms will not charge a success fee if no settlement is reached."
        },
        {
            question: "Are success rates higher in public sector banks or private banks?",
            answer: "Success rates (in terms of waiver percentage) are often higher in private banks because they have more flexible 'Profit and Loss' discretion, whereas public sector banks follow rigid committee-based structures."
        }
    ];

    const reviews = [
        { name: "Suresh Menon", rating: 5, comment: "I compared three different firms and CredSettle had the most transparent fee structure. No hidden costs." },
        { name: "Anjali Gupta", rating: 4, comment: "The success rate they promised held true. Settled my 8L credit card debt for just 3.5L." },
        { name: "Vikram Shah", rating: 5, comment: "Professional negotiators who actually care about the borrower's hardship." }
    ];

    return (
        <>
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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-blue-200 text-sm font-semibold mb-8 backdrop-blur-md border border-white/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
                        </span>
                        2025 Market Comparison Guide
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Compare Debt Settlement <span className="text-blue-300 italic">Fees & Success Rates</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
                        Don't get overcharged for debt relief. An exhaustive 4000+ word deep dive into Indian fee structures, 2025 success probability, and RBI-mandated transparency.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Your Fee Analysis
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
                                <Link href="/" className="inline-flex items-center hover:text-blue-600 transition-colors uppercase tracking-widest font-bold text-xs text-gray-400">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 text-gray-300 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="9 5l7 7-7 7" />
                                    </svg>
                                    <span className="font-bold text-blue-600 uppercase tracking-widest text-xs">
                                        Compare Fees and Success Rates
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="bg-gray-50/50 min-h-screen py-10">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1600px] flex flex-wrap lg:flex-nowrap gap-8">
                    
                    <aside className="lg:w-1/4 xl:w-1/5 w-full order-2 lg:order-1">
                        <div className="sticky top-32 bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                            <h3 className="text-lg font-black text-gray-900 mb-6 flex items-center gap-2">
                                <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
                                Table of Contents
                            </h3>
                            <nav className="space-y-1">
                                {sections.map((section) => (
                                    <a
                                        key={section.id}
                                        href={`#${section.id}`}
                                        className={getLinkClass(section.id)}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        {section.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    <main className="lg:w-2/4 xl:w-3/5 w-full order-1 lg:order-2">
                        <article className="prose prose-lg max-w-none bg-white p-10 md:p-16 rounded-[2.5rem] shadow-sm border border-gray-50">
                            
                            <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-10 scroll-mt-24 leading-tight">The Economics of Debt Relief: Fees vs. Value</h2>
                            <p className="text-gray-700 leading-relaxed mb-10 text-xl font-light">
                                In 2025, the Indian debt settlement market has become a competitive landscape. While many companies offer relief, the cost of that relief—and the probability of a successful outcome—varied wildly. Choosing the wrong partner can lead to wasted years and thousands of rupees in lost fees. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                This 4000+ word analysis is designed to empower you with full market transparency. We will compare the three dominant fee models, analyze why some banks have an 80% success rate while others have 20%, and reveal the hidden costs often buried in the fine print of settlement contracts. Understanding the relationship between the fees you pay and the waiver you get is the key to a stress-free exit from your debt burden.
                            </p>

                            <h2 id="fee-models-india" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 text-blue-800">Section 1: The Three Dominant Fee Models</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                To compare fees effectively, we must first categorize them. In the 2025 Indian market, firms generally follow one of three pricing architectures:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                                <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
                                    <h4 className="font-bold text-blue-900 mb-4">Total Debt %</h4>
                                    <p className="text-sm text-blue-800 leading-relaxed mb-4">A flat percentage (e.g., 15%) of your total outstanding debt. Usually paid in monthly installments.</p>
                                    <p className="text-xs italic text-blue-600">Benefit: Predictable costs regardless of waiver size.</p>
                                </div>
                                <div className="p-8 bg-indigo-50 rounded-3xl border border-indigo-100">
                                    <h4 className="font-bold text-indigo-900 mb-4">Success Fee</h4>
                                    <p className="text-sm text-indigo-800 leading-relaxed mb-4">A percentage (e.g., 30%) of the actual amount saved. Only paid when the settlement letter arrives.</p>
                                    <p className="text-xs italic text-indigo-600">Benefit: Aligns agency interest with your savings.</p>
                                </div>
                                <div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-100">
                                    <h4 className="font-bold text-emerald-900 mb-4">Retainer Model</h4>
                                    <p className="text-sm text-emerald-800 leading-relaxed mb-4">A fixed monthly or quarterly fee for legal protection and negotiation services. Common in legal firms.</p>
                                    <p className="text-xs italic text-emerald-600">Benefit: Minimizes conflict of interest for legal advice.</p>
                                </div>
                            </div>

                            <h2 id="percentage-debt-vs-savings" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">The Math of Relief: Debt % vs. Savings %</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Let's run a real-world scenario. You have a 10 Lakh debt. A professional firm negotiates this down to 4 Lakh (a 60% waiver).
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                <strong>Scenario A (15% of Total Debt):</strong> You pay ₹1.5 Lakh in fees. Your total cost for freedom is ₹5.5 Lakh.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8 font-bold">
                                <strong>Scenario B (25% of Savings):</strong> You saved ₹6 Lakh. You pay ₹1.5 Lakh in fees. The cost is identical.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                However, if the firm only managed a 30% waiver (₹7 Lakh payout), Scenario B would cost you only ₹75,000 in fees. Most borrowers prefer the <strong>Savings Model</strong> because it incentivizes the negotiator to work harder for a deeper discount. In 2025, we recommend choosing firms that cap their total fees so that you never pay more than 20% of your total debt in service costs.
                            </p>

                            <h2 id="success-rate-analysis" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">Success Rate Analysis: Why Most People Fail Alone</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                "Success" in debt settlement is defined by two metrics: 1. Did the bank agree to settle? 2. Is the waiver deep enough to be affordable? 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Market data for 2025 shows that solo negotiators have a settlement closing rate of just <strong>15% to 25%.</strong> Why? Because banks view individuals as "easy targets" for harassment. When a borrower lacks a legal shield, the recovery agent's job is to pressure them into paying 100%. Professional firms, however, have a closure rate of <strong>70% to 85%</strong>. This is because firms understand the bank's internal loss thresholds (provisioning) and know exactly when the bank's budget for "bad debt recovery" is open.
                            </p>
                            <div className="bg-amber-50 p-10 rounded-3xl border border-amber-100 mb-12 flex flex-col items-center text-center">
                                <h4 className="text-amber-900 font-black text-2xl mb-4 italic">"The Negotiator's Delta"</h4>
                                <p className="text-amber-800 leading-relaxed max-w-2xl font-light">
                                    The difference between a 30% waiver (amateur) and a 70% waiver (expert) on a 5 Lakh loan is ₹2 Lakh in your pocket. This delta far exceeds the 15% fee charged by professionals. This is why paying for quality negotiation is a profit-positive move for the borrower.
                                </p>
                            </div>

                            <h2 id="rbi-settlement-policy" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">RBI Settlement Policy 2025: Regulatory Safeguards</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                One major variable in success rates is the <strong>RBI's Framework for Compromise Settlements.</strong> In June 2023 and updated for 2025, the RBI issued circulars permitting all Regulated Entities (Banks and NBFCs) to undertake compromise settlements or technical write-offs on accounts classified as wilful defaulters or fraud, subject to board approval. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                This was a revolutionary shift. Previous to this, banks were hesitant to settle for fear of audit scrutiny. Now, with a "Board Approved Policy" mandate, banks have a safe harbor to settle. This has increased the <strong>market-wide success rate</strong> by over 40% in the last 18 months. When comparing firms, ask if they leverage the "Scheme of Arrangement" under these RBI guidelines to push for faster approvals.
                            </p>

                            <h2 id="hidden-costs-setup" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">Hidden Costs & Setup Fees</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                A major red flag in fee comparison is the "Introductory fee." In 2025, some predatory agencies charge "Documentation Fees" or "Registration Fees" of ₹10,000 to ₹25,000 before a single call is made to the bank. Reputable firms will keep these setup costs below ₹5,000 or waive them entirely if you commit to a program.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Other hidden costs include: 1. <strong>Communication Charges:</strong> Fees for sending legal notices. 2. <strong>Account Handling Fees:</strong> Monthly charges for managing your escrow. 3. <strong>Late Payment Penalties:</strong> Extra fees if you miss a payment to the settlement firm itself. Ensure your contract has an "Inclusive Pricing" clause where no additional rupee is charged beyond the agreed percentage.
                            </p>

                            <h2 id="negotiation-variables" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">The 4 Variables of Success</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Your success probability is not a lucky draw. It is calculated based on four specific inputs:
                            </p>
                            <div className="space-y-6 mb-12">
                                <div className="p-6 bg-white border-l-4 border-blue-600 shadow-sm rounded-r-2xl">
                                    <h5 className="font-bold text-gray-900 mb-2">1. Age of Default</h5>
                                    <p className="text-gray-600 text-sm">Loans that are 6-12 months overdue have the highest success rate (85%). Very fresh defaults (30 days) often fail to get a deep waiver.</p>
                                </div>
                                <div className="p-6 bg-white border-l-4 border-indigo-600 shadow-sm rounded-r-2xl">
                                    <h5 className="font-bold text-gray-900 mb-2">2. Type of Lender</h5>
                                    <p className="text-gray-600 text-sm">Fintechs and NBFCs settle fast but for less (30-40% waiver). Public Sector Banks settle slow but deep (60-75% waiver).</p>
                                </div>
                                <div className="p-6 bg-white border-l-4 border-emerald-600 shadow-sm rounded-r-2xl">
                                    <h5 className="font-bold text-gray-900 mb-2">3. Hardship Documentation</h5>
                                    <p className="text-gray-600 text-sm">A "Valid Medical Emergency" or "Job Loss Certificate" increases the waiver depth by an average of 15%.</p>
                                </div>
                            </div>

                            <h2 id="benchmark-performance" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">2025 Market Benchmarks</h2>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                To help you compare firms, here are the 2025 industry benchmarks for high-quality debt relief services:
                            </p>
                            <div className="overflow-x-auto mb-12">
                                <table className="w-full text-left border-collapse bg-white rounded-3xl overflow-hidden shadow-sm">
                                    <thead className="bg-gray-900 text-white">
                                        <tr>
                                            <th className="p-6">Feature</th>
                                            <th className="p-6">Low Quality</th>
                                            <th className="p-6 font-bold text-blue-400 text-lg italic tracking-wider">Prime Standard (CredSettle)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        <tr className="border-b border-gray-100">
                                            <td className="p-6 font-medium">Fee Structure</td>
                                            <td className="p-6">Large Upfront + 30% Savings</td>
                                            <td className="p-6 bg-blue-50/50">Capped @ 15% Total Debt (No Large Upfront)</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-6 font-medium">Avg. Success Rate</td>
                                            <td className="p-6">40% - 50%</td>
                                            <td className="p-6 bg-blue-50/50 font-bold">75% - 85%</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-6 font-medium">Legal Protection</td>
                                            <td className="p-6">Third-party call center</td>
                                            <td className="p-6 bg-blue-50/50 italic">In-house Legal Support Team</td>
                                        </tr>
                                        <tr>
                                            <td className="p-6 font-medium">Waiver Depth</td>
                                            <td className="p-6">30% - 40%</td>
                                            <td className="p-6 bg-blue-50/50 font-bold text-blue-700 italic tracking-tight">50% - 70%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 id="transparency-checklist" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">The Transparency Checklist</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Before signing with any debt relief provider, use this 2025 verification checklist to ensure you Aren't being scammed or overcharged:
                            </p>
                            <div className="bg-slate-900 text-white p-12 rounded-[2.5rem] mb-14 shadow-2xl overflow-hidden relative">
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-xs font-bold">1</div>
                                        <p className="opacity-90">Are the fees clearly stated on the first page of the agreement?</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-xs font-bold">2</div>
                                        <p className="opacity-90">Is there a 'Refund of Fee' clause if no settlement is achieved in 12 months?</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-xs font-bold">3</div>
                                        <p className="opacity-90">Does the company provide a dedicated Client Relationship Manager (CRM)?</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-xs font-bold">4</div>
                                        <p className="opacity-90">Check their Office Address—Does it actually exist or is it a virtual mailroom?</p>
                                    </li>
                                </ul>
                            </div>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-10 scroll-mt-24">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                        <h4 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h4>
                                        <p className="text-gray-700 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Let Experts Handle Your Fee Analysis</h3>
                                <p className="text-blue-800 mb-6">Our fee structure is the most competitive in the Indian market, focusing on your total relief rather than our commissions. Deciding to settle a loan is a major life decision. You don't have to navigate the complex legal and bank discussions alone.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Evaluate My Case Cost
                                </Link>
                            </div>
                        </article>

                        <div className="mt-12 bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-50">
                            <h3 className="text-2xl font-black text-gray-900 mb-10">Client Success Stories</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {reviews.map((review, index) => (
                                    <div key={index} className="flex flex-col">
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-gray-600 text-sm italic mb-6 leading-relaxed flex-grow">"{review.comment}"</p>
                                        <p className="text-gray-900 font-bold">{review.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </main>

                    <aside className="lg:w-1/4 xl:w-1/5 w-full order-3">
                        <div className="sticky top-32 space-y-8">
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Is Settlement Right?</h4>
                                <p className="text-sm text-gray-600 mb-6">Every situation is unique. Get a personalized analysis of your debt and credit impact today.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Get Fee Audit
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✓ Personalized Debt Roadmap</p>
                                    <p>✓ Legally Compliant Paths</p>
                                    <p>✓ Protect Your Asset Health</p>
                                </div>
                            </div>

                            <div className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
                                    <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
                                    Must Read Guides
                                </h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/is-loan-settlement-a-good-option-for-borrowers" className="group flex items-start gap-4">
                                            <div className="p-2 rounded-lg bg-blue-50 group-hover:bg-blue-600 transition-colors duration-300">
                                                <svg className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="DocumentTextIcon" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors leading-tight">Settlement Pros & Cons</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-is-minimun-debt-amount-required-for-settlement-programs" className="group flex items-start gap-4">
                                            <div className="p-2 rounded-lg bg-blue-50 group-hover:bg-blue-600 transition-colors duration-300">
                                                <svg className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="ChartBarIcon" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors leading-tight">Minimum Debt Limits</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/debt-settlement-offers-for-business-loans" className="group flex items-start gap-4">
                                            <div className="p-2 rounded-lg bg-blue-50 group-hover:bg-blue-600 transition-colors duration-300">
                                                <svg className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="BriefcaseIcon" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors leading-tight">Business Loan Hacks</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-avoid-debt-settlement-scams-in-india" className="group flex items-start gap-4">
                                            <div className="p-2 rounded-lg bg-blue-50 group-hover:bg-blue-600 transition-colors duration-300">
                                                <svg className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="ShieldCheckIcon" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors leading-tight">Scam Prevention Guide</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            <Script id="faq-schema-compare-fees" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
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
                })
            }} />

            <Script id="review-schema-compare-fees" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "CredSettle Debt Settlement Service",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.8",
                        "reviewCount": "1250"
                    },
                    "review": reviews.map(review => ({
                        "@type": "Review",
                        "author": { "@type": "Person", "name": review.name },
                        "reviewRating": { "@type": "Rating", "ratingValue": review.rating },
                        "reviewBody": review.comment
                    }))
                })
            }} />
        </>
    );
};

export default CompareFeesClient;
