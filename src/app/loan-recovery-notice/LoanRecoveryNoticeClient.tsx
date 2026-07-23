'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function LoanRecoveryNoticeClient() {
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
        { id: 'introduction', label: 'Panic vs. Process' },
        { id: 'notice-vs-summons', label: 'Notice vs Summons' },
        { id: 'anatomy-of-notice', label: 'Anatomy of Notice' },
        { id: 'response-strategy', label: 'Response Strategy' },
        { id: 'reply-format', label: 'Reply Format' },
        { id: 'settlement-negotiation', label: 'Negotiation' },
        { id: 'reviews', label: 'Client Success' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Final Verdict' },
    ];

    const faqs = [
        {
            question: "Is a loan recovery notice the same as a court summons?",
            answer: "No. A loan recovery notice is simply a formal demand letter from the bank or a collection agency asking you to clear your dues. A court summons is issued by a judge and requires your presence or a lawyer's presence in a court of law."
        },
        {
            question: "What happens if I ignore a legal notice for bank loan default?",
            answer: "Ignoring the notice gives the bank a clear path to initiate further legal action, such as filing a civil recovery suit, declaring the account an NPA, or in the case of secured loans, initiating SARFAESI proceedings. A timely, well-drafted reply can stall these actions."
        },
        {
            question: "How many days do I have to reply to a loan recovery letter?",
            answer: "Typically, the notice itself will stipulate a timeframe, usually 7, 14, or 30 days. For specific statutory notices like a Section 13(2) SARFAESI notice, you have exactly 60 days to respond or clear the dues, but replying within 30 days is highly recommended."
        },
        {
            question: "Can I use the recovery notice as an opportunity to settle the loan?",
            answer: "Yes, absolutely. Receiving a notice often means the bank is ready to escalate, but they would still prefer to recover money without court fees. Replying with a valid hardship explanation and a structured settlement offer is a very effective strategy."
        },
        {
            question: "Do I need a lawyer to reply to a bank recovery notice?",
            answer: "While you can draft a reply yourself, it is highly recommended to have a lawyer review it. A poorly worded reply might accidentally admit to liabilities you could otherwise negotiate or waive off. A lawyer ensures your rights are protected."
        }
    ];

    const reviews = [
        {
            name: 'Rakesh Verma',
            location: 'Mumbai',
            stars: 5,
            comment: 'I panicked when I received a notice for my credit card default. The CredSettle team explained it was just a demand letter, not a court order. They helped me draft a reply and we eventually settled the debt for 40% of the original amount.'
        },
        {
            name: 'Priya N.',
            location: 'Delhi',
            stars: 5,
            comment: 'The template they provided was exactly what I needed. When my business failed, the bank sent a very aggressive legal notice for bank loan default. CredSettle guided me on how to reply to loan recovery letter effectively and stopped the harassment.'
        }
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
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Loan Recovery Notice Received:<br />
                        <span className="text-blue-300">What It Means and How to Respond</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Borrowers often panic and mistake a standard demand letter for a legal summons. Learn how to de-escalate the fear, protect your rights, and secure a favorable outcome.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Professional Help Now
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
                                        Loan Recovery Notice Guide
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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Defense Manual</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 1: Panic vs. Process</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Receiving a physical document in the mail wrapped in legal terminology is an inherently stressful experience. When a borrower receives a formal notice from a bank, their immediate reaction is often pure panic. They envision police arriving at their door, courts freezing their accounts, and immediate social humiliation. The reality of the Indian legal system is vastly different.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A loan recovery notice is generally the first formal step a financial institution takes after informal communication methods have failed. It is essential to understand that this document is not a verdict; it is an invitation to respond. The bank is formally stating their claim, and you have every legal right to state yours. Understanding this distinction is the first step in regaining control of your financial narrative.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                To protect yourself properly, you must learn the difference between various types of notices and exactly <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-blue-600 font-semibold hover:underline">what to do when the bank sends a legal notice</Link>. Taking a deep breath and analyzing the document objectively is your strongest defense.
                            </p>

                            <h2 id="notice-vs-summons" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 2: Standard Notice vs. Court Summons</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most common mistake borrowers make is confusing a demand letter drafted by a bank's lawyer with a summons issued by a judge. Knowing the difference dictates your entire strategy.
                            </p>

                            {/* VISUAL ELEMENT 1: Comparison Table */}
                            <div className="overflow-x-auto mb-10 rounded-xl border border-gray-200 shadow-sm">
                                <table className="min-w-full bg-white text-left text-sm">
                                    <thead className="bg-blue-50 text-blue-900">
                                        <tr>
                                            <th className="px-6 py-4 font-bold border-b border-gray-200">Characteristic</th>
                                            <th className="px-6 py-4 font-bold border-b border-gray-200 border-l border-white">Demand Letter (Recovery Notice)</th>
                                            <th className="px-6 py-4 font-bold border-b border-gray-200 border-l border-white">Court Summons</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        <tr className="hover:bg-gray-50">
                                            <td className="px-6 py-4 font-medium border-b border-gray-100">Issuer</td>
                                            <td className="px-6 py-4 border-b border-gray-100 border-l border-gray-100">Bank, NBFC, or their appointed Advocate</td>
                                            <td className="px-6 py-4 border-b border-gray-100 border-l border-gray-100 text-red-600 font-semibold">Civil or Criminal Court Judge</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="px-6 py-4 font-medium border-b border-gray-100">Purpose</td>
                                            <td className="px-6 py-4 border-b border-gray-100 border-l border-gray-100">Intimidation, formal request for payment, setting up future legal action</td>
                                            <td className="px-6 py-4 border-b border-gray-100 border-l border-gray-100">Order to appear before the court to answer formal charges or claims</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="px-6 py-4 font-medium border-b border-gray-100">Format</td>
                                            <td className="px-6 py-4 border-b border-gray-100 border-l border-gray-100">Usually on lawyer letterhead, states "Under Instructions from my client"</td>
                                            <td className="px-6 py-4 border-b border-gray-100 border-l border-gray-100">Bears the official seal of the court, court case number, and judge signature</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="px-6 py-4 font-medium border-b border-gray-100">Required Action</td>
                                            <td className="px-6 py-4 border-b border-gray-100 border-l border-gray-100">Send a written reply within the stipulated time frame (usually 7 to 15 days)</td>
                                            <td className="px-6 py-4 border-b border-gray-100 border-l border-gray-100">Mandatory physical or legal representation in court on the specified date</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="px-6 py-4 font-medium">Penalty for Ignoring</td>
                                            <td className="px-6 py-4 border-l border-gray-100">Bank assumes you have no defense and proceeds to file an actual court case</td>
                                            <td className="px-6 py-4 border-l border-gray-100 text-red-600 font-semibold">Contempt of court, issuance of a bailable or non-bailable warrant</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-10">
                                A standard legal notice for bank loan default is a tool used to pressure you into paying. It is not an order from the government. You do not need to pack your bags and prepare for jail. You simply need to draft a competent reply.
                            </p>

                            <h2 id="anatomy-of-notice" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 3: Anatomy of a Loan Recovery Notice</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Before you decide how to reply to a loan recovery letter, you must dissect it. Every notice has specific components that dictate its severity and legal standing.
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-4 text-gray-700 font-light">
                                <li><strong>The Sender:</strong> Is it directly from the bank's internal legal department, or is it from an external collection agency masquerading as a law firm? External agencies often use aggressive language that has little legal backing.</li>
                                <li><strong>The Loan Details:</strong> Check the principal amount, the stated interest, and the penal charges. Banks often inflate penal charges in the notice. If the math is wrong, that is a primary defense point in your reply.</li>
                                <li><strong>The Section of Law:</strong> Does the notice mention specific acts? A simple demand letter might just mention the Indian Contract Act. A notice regarding a bounced cheque will mention Section 138 of the Negotiable Instruments Act. A notice for a home loan default will mention Section 13(2) of the SARFAESI Act.</li>
                                <li><strong>The Deadline:</strong> Notice periods are usually 7, 14, or 30 days. This is the window you have to formulate your response strategy.</li>
                            </ul>

                            {/* VISUAL ELEMENT 2: Alert Banner */}
                            <div className="bg-red-50 border-l-8 border-red-600 p-6 rounded-r-xl mb-10 shadow-md">
                                <div className="flex items-start">
                                    <svg className="w-8 h-8 text-red-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                    <div>
                                        <h4 className="text-xl font-bold text-red-900 mb-2">Critical Warning: SARFAESI Act Notices</h4>
                                        <p className="text-red-800 text-sm font-medium">
                                            If your notice explicitly mentions Section 13(2) of the SARFAESI Act (applicable only for secured loans like home or property loans), you must respond within the strict statutory period. The bank is legally required to reply to your objections within 15 days under Section 13(3A). Failing to object formally gives the bank the right to proceed with symbolic or physical possession of your asset.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h2 id="response-strategy" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 4: Step-by-Step Response Strategy</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When deciding how to reply to a loan recovery letter, the worst strategy is avoidance. The second worst strategy is writing an emotional letter begging for time while admitting fault to everything the bank claims. A legal reply must be calculated, objective, and protective of your rights.
                            </p>
                            
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Step 1: Do Not Acknowledge the Debt Blindly</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If the bank claims you owe them 10 Lakhs, and you blindly reply saying "I am sorry I cannot pay 10 Lakhs right now," you have just legally validated their math. Your first step should be to ask for a complete, certified statement of accounts. State that you dispute the penal charges and compounding interest applied during the default period.
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Step 2: Document the Hardship</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A default does not happen in a vacuum. Detail the exact nature of your financial hardship: loss of employment, severe medical emergencies, or catastrophic business failure. The RBI mandates that banks must treat borrowers facing genuine difficulties with empathy. Documenting this in your reply sets up a defense if the matter goes to court or to the banking ombudsman.
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Step 3: Highlight Any Harassment</h3>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                If recovery agents have been calling you at odd hours, visiting your workplace, or abusing you, this must be stated explicitly in your reply. Mention that such actions violate RBI guidelines on fair practice codes. This puts the bank on the defensive and often forces them to halt aggressive recovery tactics to avoid a counter-complaint. To learn more about securing appropriate counsel, visit our <Link href="/best-lawyer-for-notice-for-loan-default" className="text-blue-600 font-semibold hover:underline">guide on finding the best lawyer for default notices</Link>.
                            </p>

                            <h2 id="reply-format" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 5: Loan Recovery Notice Format (Template)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Below is a generalized loan recovery notice format for a reply. This structure is designed to acknowledge receipt of the bank's letter while firmly defending the borrower's rights and requesting a structured resolution. Please note this is for educational purposes and should ideally be sent on a lawyer's letterhead.
                            </p>

                            {/* VISUAL ELEMENT 3: Negotiation Script / Template Block */}
                            <div className="bg-gray-900 text-gray-100 p-8 rounded-2xl mb-10 font-mono text-sm shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full"></div>
                                <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
                                    <h4 className="text-xl font-bold text-blue-400 font-sans tracking-wide">Reply Template</h4>
                                    <span className="text-xs uppercase tracking-widest bg-gray-800 px-3 py-1 rounded-full text-gray-400">Copy Format</span>
                                </div>
                                <div className="space-y-4">
                                    <p>To,</p>
                                    <p>[Name of the Bank / Advocate who sent the notice]<br/>[Address of the Bank / Advocate]</p>
                                    <p><strong>Subject: Reply to the Notice dated [Date of Notice] regarding Loan Account No. [Your Account Number]</strong></p>
                                    <p>Dear Sir/Madam,</p>
                                    <p>I am in receipt of your notice dated [Date of Notice] on [Date you received it]. I am writing to strongly deny the allegations and the exaggerated financial claims made in the said notice.</p>
                                    <p>1. I have been a loyal customer of your bank. However, due to unforeseen and extreme financial hardships, specifically [Briefly state reason: e.g., severe medical emergency / job loss], I have experienced a temporary disruption in my cash flow.</p>
                                    <p>2. I dispute the total outstanding amount of [Amount claimed by bank] mentioned in your notice. I request you to provide a duly certified, detailed statement of account showing the principal, interest, and exact penal charges applied over the last [number] months. It appears arbitrary penal interest has been added in violation of RBI guidelines.</p>
                                    <p>3. Furthermore, I must place on record that agents acting on behalf of your bank have engaged in continuous harassment [mention if they called family or visited inappropriately]. I expect these illegal recovery methods to cease immediately, failing which I reserve the right to file a complaint with the Banking Ombudsman and the local police station.</p>
                                    <p>4. I am not absconding and have every intention to resolve this matter amicably. I request the bank to consider restructuring the loan or offering a One-Time Settlement (OTS) that aligns with my current financial capacity.</p>
                                    <p>I look forward to a positive and reasonable response within 15 days.</p>
                                    <p>Yours faithfully,<br/>[Your Name]<br/>[Your Contact Information]</p>
                                </div>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-10">
                                This template serves as a strong foundation. However, every case is unique. The exact legal notice for bank loan default that you receive might require specific counter-arguments based on the clauses of your loan agreement.
                            </p>

                            <h2 id="settlement-negotiation" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 6: Negotiating a Settlement After the Notice</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Replying to the notice is only half the battle. The ultimate goal is financial freedom. The notice actually opens a formal channel of communication that can lead to a highly favorable <Link href="/loan-settlement" className="text-blue-600 font-semibold hover:underline">loan settlement</Link>.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Once the bank realizes you are legally aware and represented by competent counsel, their strategy shifts. They know that filing a civil suit will take years and cost them significant legal fees. A well-crafted reply demonstrates that you will not be easily intimidated. This is the moment to propose a One-Time Settlement (OTS).
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                In an OTS, you offer to pay a lump sum that is significantly lower than the total outstanding amount. Depending on the age of the default and your proven financial hardship, banks are often willing to waive 100% of the penal charges and a substantial portion of the principal. The key is to negotiate this formally, ensuring you receive a proper No Dues Certificate (NDC) at the end of the process.
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

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-14">Final Verdict</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Receiving a loan recovery notice is not the end of the world; it is the beginning of a negotiation. By understanding the difference between a standard demand letter and a court summons, and by replying strategically, you can protect your rights and set the stage for a viable settlement.
                            </p>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Don't Let the Notice Intimidate You.</h3>
                                <p className="text-blue-800 mb-6">Our expert legal team specializes in drafting powerful replies to bank notices that stop harassment and force banks to the settlement table.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Expert Legal Help Now
                                </Link>
                            </div>

                            <div className="mt-12 text-[0.65rem] text-gray-400 uppercase tracking-widest text-center opacity-60">
                                Educational Disclaimer: This content is for general awareness only. Legal outcomes vary based on individual loan contracts and the nature of the default. Always seek formal legal counsel.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Got a Notice?</h4>
                                <p className="text-sm text-gray-600 mb-6">We can draft a legally binding reply within 24 hours to protect your assets.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Draft My Reply
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v 24hr Turnaround</p>
                                    <p>v Stop Harassment</p>
                                    <p>v Legally Binding Format</p>
                                </div>
                            </div>

                            {/* Related Expertise */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Expertise</h4>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-notice-for-loan-default" className="block text-sm text-blue-600 hover:underline">Notice for Loan Default</Link>
                                    <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="block text-sm text-blue-600 hover:underline">Bank Legal Notice Help</Link>
                                    <Link href="/best-lawyer-for-bank-loan-recovery-defence" className="block text-sm text-blue-600 hover:underline">Loan Recovery Defence</Link>
                                    <Link href="/loan-settlement" className="block text-sm text-blue-600 hover:underline">Loan Settlement Process</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
