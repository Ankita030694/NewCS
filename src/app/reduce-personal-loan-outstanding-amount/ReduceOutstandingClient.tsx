'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function ReduceOutstandingClient() {
    const [activeId, setActiveId] = useState<string>('');
    const [isMobile, setIsMobile] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
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

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const navLinks = [
        { id: 'introduction', label: 'Introduction' },
        { id: 'understanding-components', label: 'Principal vs Interest' },
        { id: 'rbi-guidelines', label: 'RBI Guidelines 2026' },
        { id: 'case-study-1', label: 'Case Study: 45% Reduction' },
        { id: 'legal-methods', label: 'Waiver Methods' },
        { id: 'settlement-process', label: 'Step by Step Process' },
        { id: 'case-study-2', label: 'Case Study: Medical Hardship' },
        { id: 'professional-counsel', label: 'Role of Legal Counsel' },
        { id: 'reviews', label: 'Client Success' },
        { id: 'faqs', label: 'FAQs' }
    ];

    const faqs = [
        {
            question: "Can I legally reduce my personal loan outstanding amount?",
            answer: "Yes, you can legally reduce your personal loan outstanding amount through formal negotiation processes like debt settlement. This involves working with the bank to agree on a compromised amount, which often waives significant portions of the accumulated penal interest and even some of the principal amount if genuine financial hardship is proven."
        },
        {
            question: "Will reducing my loan amount affect my CIBIL score?",
            answer: "Yes, settling your loan for less than the total outstanding amount will reflect on your CIBIL report as 'Settled' rather than 'Closed'. This will temporarily reduce your credit score. However, resolving the defaulted account stops further late fees and legal actions, giving you a clean slate to rebuild your credit over time."
        },
        {
            question: "Can I waive off the entire personal loan interest?",
            answer: "While waiving the entire interest is rare, banks commonly waive 100% of the penal interest, late payment charges, and bounce fees during a settlement. The regular interest accrued might also be partially waived depending on how old the default is and the severity of your financial hardship."
        },
        {
            question: "How long does the loan settlement process take?",
            answer: "A standard debt settlement process typically takes between three to six months. It involves initial documentation, submitting a hardship letter, multiple rounds of negotiation with the bank's recovery department, and finally receiving the official settlement letter."
        },
        {
            question: "Do banks always accept a settlement offer?",
            answer: "No, banks are not legally obligated to accept a settlement offer. They review each case individually based on the borrower's financial situation, job loss proofs, medical emergencies, or other valid reasons. Professional representation often increases the chances of an offer being accepted."
        },
        {
            question: "Can I settle multiple personal loans at the same time?",
            answer: "Yes, if you have multiple personal loans from different banks, you can initiate settlement discussions for all of them simultaneously. However, each bank operates independently, so the waiver percentage and terms will vary for each specific loan account."
        },
        {
            question: "What happens if I stop paying my personal loan EMI to save for a settlement?",
            answer: "Stopping your EMI payments will lead to immediate calls from recovery agents, accumulation of bounce charges, and a drop in your CIBIL score. While you must be in default to qualify for a settlement, intentionally defaulting is risky and should only be done under proper legal guidance."
        },
        {
            question: "Is it mandatory to hire a lawyer to reduce the loan burden?",
            answer: "It is not legally mandatory to hire a lawyer to negotiate your loan. However, professional legal counsel protects you from harassment, ensures that the bank follows all RBI guidelines, and prevents you from falling into common recovery traps. It often results in a much lower settlement amount."
        },
        {
            question: "What is a 'Settlement Letter' and why is it important?",
            answer: "A Settlement Letter is an official document from the bank stating the agreed compromised amount, the payment schedule, and a clause confirming that no further legal action will be taken once the amount is paid. You must never make a settlement payment without receiving this letter on the bank's official letterhead."
        },
        {
            question: "Can a settlement be cancelled if I miss a payment?",
            answer: "Yes. If your settlement involves paying the reduced amount in multiple installments (usually three to six months), missing even one installment can void the entire agreement. The bank will then demand the original outstanding amount along with new penal charges."
        }
    ];

    const reviews = [
        { name: "Vikram Sharma", location: "Bangalore", stars: 5, comment: "I had a massive personal loan burden after losing my job. The CredSettle team helped me negotiate a settlement that waived all the penal interest and significantly reduced the principal. My life is finally back on track." },
        { name: "Anjali Gupta", location: "Hyderabad", stars: 5, comment: "I was terrified of the recovery calls due to my high outstanding amount. Understanding the actual RBI guidelines and getting professional help reduced my stress immediately." },
        { name: "Rohit Verma", location: "Chennai", stars: 4, comment: "The detailed explanation of how banks calculate the outstanding amount helped me realize I was mostly paying unfair penalties. The settlement process was smooth and legally sound." }
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
        'name': 'CredSettle Personal Loan Outstanding Reduction Guide',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '920',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-reduce-outstanding" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-reduce-outstanding" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-300 text-sm font-semibold mb-8 backdrop-blur-md border border-red-500/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        Legal Debt Relief Strategies
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        How to Reduce Your <br />
                        <span className="text-blue-300">Personal Loan Outstanding Amount</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-normal">
                        Struggling with high EMIs? Learn how to legally decrease your loan principal amount and waive off unfair penal interest through RBI-compliant settlement programs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Start Your Free Evaluation
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
                                        Reduce Outstanding Amount
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Outstanding Relief Guide</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Heavy Burden of High Personal Loan Outstanding Amounts</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Millions of Indian borrowers find themselves trapped in a vicious cycle of high-interest personal loans. What starts as a manageable Equated Monthly Installment (EMI) quickly snowballs into an unmanageable financial nightmare due to sudden job losses, unexpected medical emergencies, or severe business downturns. The most frustrating part of this experience is watching your personal loan outstanding amount continue to increase, even after you have made numerous payments over the years.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The psychological toll of receiving constant payment reminders and watching your debt multiply is overwhelming. Borrowers often wonder if there is any legal way out of this trap. They ask: "Is it possible to reduce my personal loan outstanding amount?" and "Can I legally decrease the loan principal amount when I am completely out of funds?" 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The answer is a definitive yes. Through specific legal frameworks and RBI-compliant debt settlement programs, you can significantly reduce your loan burden. This comprehensive guide will explain exactly how the outstanding amount is calculated, how to waive off personal loan interest, and the step-by-step process to legally negotiate a much lower payoff amount with your banking institution. The goal is to provide you with a clear roadmap to reclaim your financial freedom without falling prey to predatory recovery tactics.
                            </p>

                            <h2 id="understanding-components" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Understanding the Components: Principal vs. Interest</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To successfully reduce your personal loan outstanding amount, you must first understand how banks calculate this figure. Your total outstanding balance is not a single, unchangeable number. It is a combination of three distinct components. Understanding these components is the key to knowing exactly what can be negotiated and waived off during a settlement discussion.
                            </p>

                            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-10 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-2xl"></div>
                                <h4 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                                    </svg>
                                    The Anatomy of Your Loan Balance:
                                </h4>
                                <ul className="space-y-3 text-red-800 font-normal list-disc pl-5 m-0 text-sm">
                                    <li><strong>The Principal Amount:</strong> This is the actual money you borrowed from the bank. It represents the core of your debt. While banks are protective of the principal, it is not immune to reduction if severe financial hardship can be legally proven.</li>
                                    <li><strong>The Accrued Interest:</strong> Personal loans carry high interest rates (usually between 14 percent and 24 percent). The accrued interest is the standard cost of borrowing the principal over time.</li>
                                    <li><strong>Penal Interest and Late Fees:</strong> This is where the balance explodes. Once you miss an EMI, banks apply bounce charges, late payment fees, and compounding penal interest on the overdue amount. This component is highly negotiable and is often entirely waived off during a successful settlement.</li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                When you aim to reduce your loan burden, your first target is the complete elimination of penal interest and late fees. These charges artificially inflate your balance. Once those are removed, you can begin negotiating the standard accrued interest and, ultimately, request a decrease in the loan principal amount based on your incapacity to pay.
                            </p>

                            <h2 id="rbi-guidelines" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">RBI Guidelines on Loan Restructuring and Settlement in 2026</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Reserve Bank of India (RBI) provides a clear regulatory framework governing how banks must handle non-performing assets (NPAs) and defaulted loans. Borrowers must understand that negotiating a settlement to reduce the personal loan outstanding amount is a legitimate financial procedure recognized by the central banking authority. It is not an illegal or hidden practice.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Under the latest guidelines, banks are encouraged to find amicable resolutions with borrowers who are facing genuine financial distress. The RBI understands that prolonged litigation is costly and inefficient for both the bank and the borrower. Therefore, banks have internal policies to offer "Compromise Settlements" or "One Time Settlements (OTS)" to recover whatever funds they can from a defaulted account.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                It is critical to note that while the RBI permits debt settlement, it does not mandate a specific waiver percentage. The decision to decrease the loan principal amount or waive off personal loan interest lies entirely with the individual bank. This means the outcome heavily depends on your negotiation strategy, the documentation you provide to prove your hardship, and the legal expertise of the representatives acting on your behalf. If the bank is convinced that you genuinely cannot pay the full amount and that a settlement is their best chance of recovering some capital, they will agree to significantly reduce your loan burden.
                            </p>

                            <h2 id="case-study-1" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Case Study 1: Negotiating a 45 Percent Reduction on a 15 Lakh Personal Loan</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To illustrate how the process works in reality, let us examine the case of Mr. Rajesh Kumar, an IT professional based in Pune. Rajesh had taken an unsecured personal loan of ₹15,00,000 to fund his sister's wedding and consolidate some earlier credit card debts. For two years, he paid his EMIs on time. Unfortunately, his company underwent a massive restructuring, and he lost his job. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For the next eight months, Rajesh could not make any payments. The bank applied continuous bounce charges, late fees, and compounding penal interest. By the time he sought professional help, his personal loan outstanding amount had ballooned to over ₹18,50,000, despite the payments he had made in the first two years. The recovery agents were calling him incessantly, threatening legal action and public humiliation.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10 font-bold bg-blue-50 text-blue-900 p-8 rounded-3xl shadow-md border border-blue-100">
                                The Legal Intervention: Rajesh engaged a specialized debt relief firm. The legal team immediately drafted a formal Cease and Desist notice, halting the aggressive recovery calls by citing RBI harassment guidelines. Following this, they submitted a comprehensive hardship letter to the bank's Nodal Officer. This letter included Rajesh's termination letter, his bank statements showing zero income, and proof of his prolonged unemployment. The negotiation focused on the fact that the ₹3,50,000 increase was purely penal and unjustifiable given his financial collapse. After three months of rigorous negotiation, the bank agreed to a One Time Settlement of ₹10,17,500. This meant the entire penal interest was waived, and they successfully managed to decrease the loan principal amount, resulting in an overall 45 percent reduction of the total outstanding burden.
                            </p>

                            <h2 id="legal-methods" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Legal Methods to Waive Off Penal Interest and Late Fees</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most effective way to drastically reduce your personal loan outstanding amount is to systematically attack the penal charges. Banks rely on the borrower's ignorance regarding how these fees are compounded. When challenged legally, these fees are often the first to be discarded during a negotiation.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:border-blue-200 transition-colors">
                                    <span className="text-blue-600 font-bold mb-2 block text-xs uppercase tracking-wider">Method 1</span>
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0">Demand a Detailed Statement of Account (SOA)</h5>
                                    <p className="text-sm text-gray-600 m-0">Never accept the final figure verbally communicated by a recovery agent. Demand a formal, written SOA. A legal expert will analyze this statement line by line to identify every unjustified late fee and inflated interest charge. Highlighting these discrepancies is the foundation of a strong waiver request.</p>
                                </div>
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:border-blue-200 transition-colors">
                                    <span className="text-blue-600 font-bold mb-2 block text-xs uppercase tracking-wider">Method 2</span>
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0">Submit a Formal Hardship Declaration</h5>
                                    <p className="text-sm text-gray-600 m-0">To waive off personal loan interest, you must legally document your inability to pay. This means providing undeniable proof: termination letters, medical bills, or audited financial statements showing business losses. Banks will only consider massive waivers if the alternative is recovering nothing at all.</p>
                                </div>
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:border-blue-200 transition-colors">
                                    <span className="text-blue-600 font-bold mb-2 block text-xs uppercase tracking-wider">Method 3</span>
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0">Leverage NPA Classification Timelines</h5>
                                    <p className="text-sm text-gray-600 m-0">Once an account becomes a Non-Performing Asset (typically after 90 days of non-payment), the bank must allocate capital provisions against the bad debt. As the loan ages, the bank becomes more desperate to clear it off their books, making them much more willing to decrease the loan principal amount.</p>
                                </div>
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:border-blue-200 transition-colors">
                                    <span className="text-blue-600 font-bold mb-2 block text-xs uppercase tracking-wider">Method 4</span>
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0">Escalate to Senior Management</h5>
                                    <p className="text-sm text-gray-600 m-0">Frontline recovery agents do not have the authority to waive large amounts. They are incentivized to collect the maximum possible. To reduce the loan burden effectively, all legal communication and settlement offers must be directed to the bank's regional heads or specific settlement committees.</p>
                                </div>
                            </div>

                            <h2 id="settlement-process" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">The Debt Settlement Process: Step by Step to Decrease Your Loan Burden</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Approaching a bank for a settlement is a structured legal process. If done incorrectly, you might accidentally acknowledge the entire inflated debt, restarting the limitation period and ruining your chances of securing a discount. Here is the step-by-step methodology to safely reduce your personal loan outstanding amount.
                            </p>

                            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 mb-10 shadow-lg">
                                <h4 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">The Settlement Roadmap</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                            <span className="font-bold text-blue-600 text-sm">1</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mt-0">Phase 1: Legal Protection and Assessment</h5>
                                            <p className="text-sm text-gray-600 m-0">The first step is stopping the harassment. Legal notices must be sent to the bank asserting your rights under RBI guidelines. Simultaneously, your legal team assesses your exact outstanding balance by analyzing the official Statement of Account to isolate the principal from the penal charges.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                            <span className="font-bold text-blue-600 text-sm">2</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mt-0">Phase 2: Drafting the Hardship Proposal</h5>
                                            <p className="text-sm text-gray-600 m-0">A comprehensive legal proposal is drafted. This document details your financial ruin, provides all necessary evidentiary attachments, and makes the initial offer to the bank. The initial offer is always strategically lower than what you can actually afford, allowing room for negotiation.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                            <span className="font-bold text-blue-600 text-sm">3</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mt-0">Phase 3: The Negotiation Battles</h5>
                                            <p className="text-sm text-gray-600 m-0">This is the most critical phase. The bank will reject the first offer. They will counter with demands for full payment or minimal discounts. Professional negotiators will hold the line, legally reiterating your inability to pay and emphasizing the risk of the bank recovering nothing if the matter proceeds to lengthy litigation.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                            <span className="font-bold text-blue-600 text-sm">4</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mt-0">Phase 4: Securing the Settlement Letter</h5>
                                            <p className="text-sm text-gray-600 m-0">Once an agreement is reached to decrease the loan principal amount, the bank must issue a formal Settlement Letter. You must never transfer a single rupee until this letter is received, verified for authenticity, and legally vetted to ensure there are no hidden clauses.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <h2 id="case-study-2" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Case Study 2: How a Medical Emergency Led to a Legal Principal Waiver</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Consider the situation of Mrs. Sunita Rao, a school teacher in Delhi. She had an outstanding personal loan balance of ₹8,00,000. Her husband was diagnosed with a severe illness requiring immediate and expensive medical intervention. Sunita had to exhaust all their savings and take unpaid leave to care for him, leading to inevitable defaults on her EMI payments.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The bank's recovery agents showed no empathy. They constantly harassed her at the hospital, completely ignoring the dire circumstances. The outstanding amount grew to ₹10,50,000 due to aggressive penalty applications. Sunita was on the verge of a mental breakdown, unsure how to reduce her loan burden while fighting for her husband's life.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                She reached out for professional legal assistance. The legal team immediately escalated the harassment issue to the RBI Ombudsman, providing hospital records and call recordings of the abusive agents. The bank was forced to penalize the agency and assign a senior manager to the case. With the medical hardship fully documented and legally presented, the negotiation shifted dramatically. The bank recognized that pushing for full recovery was both legally perilous given the harassment complaint and practically impossible given Sunita's financial state. Ultimately, they agreed to waive off personal loan interest entirely and further decrease the loan principal amount. The final settlement was closed at ₹3,80,000, payable in six manageable installments, providing Sunita the massive relief she desperately needed.
                            </p>

                            <h2 id="professional-counsel" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">The Role of Professional Legal Counsel in Reducing Outstanding Debt</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Attempting to negotiate a massive reduction in your personal loan outstanding amount on your own is incredibly risky. Banks have teams of trained negotiators and legal experts whose sole job is to extract maximum payment from you. When you try to negotiate directly, your emotional distress often leads to critical mistakes, such as making verbal commitments you cannot keep or accepting terrible settlement terms out of desperation.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Professional legal counsel levels the playing field. Debt relief experts understand the intricate banking terminology, the exact limits of RBI recovery guidelines, and the psychological tactics used by collection agencies. They act as a protective barrier between you and the bank. When a bank receives a formal proposal from a recognized legal entity, they instantly change their approach. They know they cannot use bullying tactics and must engage in serious, legally sound negotiations.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Investing in professional assistance is not an expense; it is a strategic decision that usually results in saving lakhs of rupees. A skilled negotiator knows exactly when to push harder to decrease the loan principal amount, how to effectively argue to waive off personal loan interest, and how to secure a legally binding Settlement Letter that guarantees you will never be harassed for that debt again.
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
                                        <p className="text-gray-700 mb-4 leading-relaxed font-normal text-sm m-0">{review.comment}</p>
                                        <div className="flex justify-between items-center text-xs font-bold text-blue-900 mt-4">
                                            <span>{review.name}</span>
                                            <span className="opacity-60">{review.location}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Frequently Asked Questions</h2>
                            <div className="space-y-4 mb-12">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                                        <button 
                                            onClick={() => toggleFaq(index)}
                                            className="w-full text-left p-4 focus:outline-none flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                                        >
                                            <h3 className="font-bold text-lg text-gray-900 pr-4 m-0">{faq.question}</h3>
                                            <svg 
                                                className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        <div 
                                            className={`transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-[500px] opacity-100 p-4 border-t border-gray-100' : 'max-h-0 opacity-0 overflow-hidden px-4'}`}
                                        >
                                            <p className="text-gray-600 leading-relaxed font-normal m-0">{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4 mt-0">Do Not Let Debt Destroy Your Future.</h3>
                                <p className="text-blue-800 mb-6 font-normal">Our expert legal team specializes in aggressively negotiating with banks to legally reduce your personal loan outstanding amount. Stop the harassment today.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg focus:ring-4 focus:ring-blue-300 transform hover:-translate-y-1"
                                >
                                    Get Your Free Legal Assessment
                                </Link>
                            </div>
                        </article>
                    </main>

                    {/* Right Column: Cards */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block">
                        <div className="sticky top-24 self-start space-y-6">
                            {/* Card 1: CTA */}
                            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-center flex flex-col items-center">
                                <h3 className="font-black text-gray-900 text-xl mb-3 mt-2 tracking-tight">Facing Harassment?</h3>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed px-2">
                                    We can send an immediate Legal Notice to stop agents from visiting your house today.
                                </p>
                                <Link
                                    href="/contact"
                                    className="w-full bg-[#1b5df3] hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-md text-center text-sm"
                                >
                                    Stop the Agents
                                </Link>
                                <div className="mt-5 space-y-2 text-xs text-gray-500 w-full text-center font-medium">
                                    <p>&#10003; 24hr Legal Response</p>
                                    <p>&#10003; RBI Compliance Audit</p>
                                    <p>&#10003; Settlement Negotiation</p>
                                    <p>&#10003; FIR Support</p>
                                </div>
                            </div>

                            {/* Card 2: Links */}
                            <div className="bg-gray-50/80 p-5 rounded-2xl border border-gray-100 shadow-sm mt-6">
                                <h4 className="font-black text-gray-900 text-lg border-b border-gray-900 pb-3 mb-6">Related Expertise</h4>
                                <ul className="space-y-4 text-left font-medium">
                                    <li>
                                        <Link href="/are-there-legal-implecations-or-non-payment-during-debt-settlement" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            Personal Loan Relief
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/compare-debt-settlement-fees-and-success-rate" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            Debt Settlement Fees
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/is-loan-settlement-a-good-option-for-borrowers" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            Is Settlement Good?
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-improve-cibil-score" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            Improve CIBIL Score
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}
