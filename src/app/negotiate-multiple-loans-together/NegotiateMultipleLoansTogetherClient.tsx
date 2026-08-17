'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { companyStats } from '@/data/companyStats';
import { testimonials } from '@/data/testimonials';

export default function NegotiateMultipleLoansTogetherClient() {
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
        { id: 'quick-answer', label: 'Quick Answer' },
        { id: 'introduction', label: 'The Core Challenge' },
        { id: 'legal-strategy', label: 'Consolidated Strategy' },
        { id: 'timeline-sync', label: 'Syncing Timelines' },
        { id: 'case-study-one', label: 'Case Study: 30 Lakh' },
        { id: 'financial-impact', label: 'Financial Impact' },
        { id: 'verification-process', label: 'Verification Process' },
        { id: 'harassment-defense', label: 'Harassment Defense' },
        { id: 'reviews', label: 'Client Success' },
        { id: 'faqs', label: 'FAQs' }
    ];

    const faqs = [
        {
            question: "Can I combine multiple personal loans into a single settlement payment?",
            answer: "No, you cannot combine payments. Each bank requires its own settlement agreement and its own direct payment. However, a legal team can coordinate the negotiations so all agreements mature at roughly the same time."
        },
        {
            question: "Will settling multiple loans ruin my CIBIL score permanently?",
            answer: "Settling any loan will drop your score temporarily and mark the account as 'Settled'. However, resolving all defaults simultaneously stops ongoing negative reporting. Your score can begin recovering much faster than if you left the accounts in default."
        },
        {
            question: "How long does it take to settle three or more loans together?",
            answer: "The timeline typically spans three to six months. Different banks have different internal policies regarding when an account becomes eligible for maximum waivers. Patience is required to align these varying timelines."
        },
        {
            question: "Do I have to pay the settlement agency a portion of each loan?",
            answer: "Legitimate agencies charge based on the complexity of the case or a flat retainer fee, not a percentage of the debt upfront. Avoid any firm demanding a huge percentage before delivering official bank settlement letters."
        },
        {
            question: "Can one legal team handle banks, NBFCs, and credit card companies at once?",
            answer: "Yes. An experienced legal team acts as your authorized representative across all financial institutions. This ensures a unified communication strategy and prevents one aggressive lender from derailing your overall financial recovery."
        },
        {
            question: "What if one bank agrees to settle but another refuses?",
            answer: "This is common in the early stages. The team secures the favorable settlement first, then uses that closed file to demonstrate your limited capacity to the remaining holdout banks. Eventually, most lenders recognize the reality of your financial hardship."
        },
        {
            question: "Should I take a new loan to pay off these multiple settlements?",
            answer: "No. Taking new debt to pay off old debt is exactly how borrowers fall into severe financial traps. Settlements must be funded from your savings, liquidation of non-essential assets, or family support."
        },
        {
            question: "Are recovery agents allowed to visit my workplace if I have multiple defaults?",
            answer: "Recovery agents are strictly bound by RBI regulations regardless of how many loans you have. They cannot harass you at your workplace or contact your employer to discuss your debt."
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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-300 text-sm font-semibold mb-8 backdrop-blur-md border border-red-500/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        Unified Negotiation Shield
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        How to Negotiate and Settle <br />
                        <span className="text-blue-300">Multiple Personal Loans</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-6 max-w-3xl mx-auto font-normal">
                        Overwhelmed by multiple personal loans? Learn how our legal experts can negotiate with all your lenders simultaneously for a massive debt reduction.
                    </p>
                    
                    {/* Byline Block removed from hero section */}

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Settle Multiple Loans with One Legal Team
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
                                        Negotiate Multiple Loans Together
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

            {/* Stats Strip */}
            <div className="bg-[#f4f8fc] py-10 border-b border-gray-100">
                <div className="max-w-[1440px] mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 divide-x divide-gray-200">
                        <div className="flex flex-col items-center justify-center px-4">
                            <div className="flex items-center gap-2 mb-2">
                                <svg viewBox="0 0 24 24" className="w-8 h-8"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                                <span className="text-3xl font-bold text-[#004b87]">{companyStats.googleRating}/5</span>
                            </div>
                            <div className="text-sm text-gray-500">{companyStats.reviewCount}+ Reviews</div>
                        </div>
                        {companyStats.metrics.map((metric, idx) => (
                            <div key={idx} className="flex flex-col items-center justify-center px-4">
                                <div className="text-3xl font-bold text-[#004b87] mb-2">{metric.value}</div>
                                <div className="text-sm text-gray-500">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Negotiation Guide</h3>
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
                        <article className="prose max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">

                            {/* Quick Answer Block */}
                            <div id="quick-answer" className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-10 shadow-sm scroll-mt-24">
                                <h2 className="text-xl font-bold text-blue-900 mt-0 mb-3">Quick Answer</h2>
                                <p className="text-blue-900 m-0 font-normal leading-relaxed">
                                    Yes, you can absolutely negotiate multiple personal loans together by appointing a single legal representative to handle all your lenders simultaneously. This consolidated approach allows your representative to present a unified picture of your financial hardship across all institutions. As a result, you prevent one aggressive lender from taking all your available funds, ensuring that settlements are reached at highly reduced amounts across the board.
                                </p>
                            </div>

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Section 1: The Multi-Lender Challenge</h2>
                            <p className="text-gray-700 leading-relaxed mb-6 font-bold">
                                Dealing with one loan default is stressful, but dealing with three or more creates a chaotic environment where lenders race to recover their money first.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a borrower defaults on multiple personal loans, they face a barrage of phone calls, legal notices, and recovery agents from several different institutions. Each bank operates in a silo. Bank A does not care that you owe money to Bank B. They only care about securing their own repayment. This creates a predatory race where the most aggressive lender tries to intimidate the borrower into handing over whatever little savings they have left. By using a consolidated strategy, borrowers can regain control of this chaotic situation.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Attempting to negotiate with multiple banks on your own is incredibly difficult. You must keep track of different policies, varying escalation matrixes, and conflicting legal threats. A unified strategy changes the dynamic. It forces all lenders to recognize that they are dealing with a borrower experiencing genuine, provable financial distress, and that aggressive tactics will not yield better results. We have seen borrowers successfully reduce their total debt burden by focusing on a synchronized settlement approach.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                This comprehensive guide breaks down the precise mechanics of consolidating your loan negotiations. We cover everything from syncing settlement timelines to defending against simultaneous harassment from multiple agencies. Whether you have three loans or ten, the core principles of strategic debt resolution remain exactly the same.
                            </p>

                            <h2 id="legal-strategy" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 2: The Strategy for Consolidated Settlement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6 font-bold">
                                A consolidated settlement strategy involves appointing one central legal authority to intercept communications and negotiate uniformly across all your defaulted accounts.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The first step in this process involves a detailed assessment of your total liabilities versus your actual paying capacity. Your legal team must calculate exactly how much liquidity you can arrange over the next six months. This total pool of funds is what will be used to negotiate the settlements. Lenders are then informed that they are part of a broader financial distress situation. They realize that if they push too hard, they might push the borrower into insolvency, resulting in zero recovery.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Communication redirection is vital here. When multiple recovery agencies are calling, the borrower usually suffers from severe mental fatigue. By redirecting all collection calls to a designated legal representative, the borrower is shielded from daily intimidation. The legal team calmly explains the financial reality to the bank officers, backed by documentary evidence of job loss, medical emergencies, or business failure. This professional mediation completely removes emotional manipulation from the equation.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                According to RBI guidelines for fair practices code, lenders are encouraged to offer Compromise Settlement Schemes to borrowers facing genuine hardship [1]. When an authorized representative applies for these schemes across multiple accounts simultaneously, the banks are legally obligated to review the hardship evidence fairly. They cannot summarily reject a settlement proposal without basic due diligence.
                            </p>

                            {/* Infographic Section */}
                            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 mb-10 shadow-lg flex flex-col items-center justify-center">
                                <h4 className="text-2xl font-bold text-gray-900 mb-6 w-full text-left border-b pb-4">The Synchronized Negotiation Process</h4>
                                <div className="w-full bg-blue-50 border border-blue-200 rounded-xl p-8 text-center flex flex-col items-center justify-center min-h-[300px]">
                                    <svg className="w-24 h-24 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                    <h5 className="font-bold text-blue-900 text-xl mb-2">Centralized Command Center</h5>
                                    <p className="text-blue-800 text-sm max-w-md">1. Halt all direct communication with banks.<br/>2. Deploy uniform financial hardship evidence.<br/>3. Secure concurrent settlement approvals.<br/>4. Execute final bank transfers securely.</p>
                                </div>
                                <p className="text-xs text-gray-500 mt-4 text-center">Visual representation of how a single legal team channels multiple lender communications into one streamlined process.</p>
                            </div>

                            <h2 id="timeline-sync" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 3: Syncing Timelines Across Lenders</h2>
                            <p className="text-gray-700 leading-relaxed mb-6 font-bold">
                                Because every bank has different policies for classifying a loan as a Non-Performing Asset, timelines must be carefully managed so that one settlement does not expire before another begins.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Generally, a bank will not offer maximum settlement waivers until an account is at least 90 to 180 days past due. If you have three loans, they might all be at different stages of delinquency. Bank A might be 120 days past due, while Bank C is only 30 days past due. A skilled negotiation team knows how to delay proceedings with Bank A legally, ensuring they do not escalate to court action while waiting for Bank C to reach the optimal settlement window.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                This syncing is crucial. If you settle with Bank A too early using all your available funds, Bank B and Bank C will still pursue you relentlessly, and you will have no liquidity left to offer them. The goal is to reach a global resolution where all settlement letters are secured within a specific timeframe, allowing you to pay them off systematically based on your arranged funds.
                            </p>

                            <h2 id="case-study-one" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 4: Case Study on Negotiating 30 Lakh in Multiple Loans</h2>
                            <p className="text-gray-700 leading-relaxed mb-6 font-bold">
                                Examining real scenarios helps illustrate how a synchronized legal approach forces aggressive lenders to accept highly reduced settlements.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Consider a borrower who lost his job and defaulted on four personal loans totaling thirty lakh rupees. For the first two months, he tried to manage the situation himself. He took calls daily, made small partial payments, and exhausted his emergency savings just trying to keep the recovery agents away. The calls only intensified because the banks realized he was willing to pay under pressure.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Once he engaged a dedicated resolution team, the dynamic shifted. The team formally notified all four lenders that the borrower was legally represented and submitted verified proof of job loss. The team halted all partial payments, explaining that the borrower had zero income. Over the next five months, the team negotiated with the nodal officers of each bank. Because the banks recognized the involvement of legal professionals, they bypassed the aggressive third party collection agencies.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Ultimately, the team secured settlements for all four loans at roughly thirty five percent of the principal outstanding. The borrower arranged ten point five lakh rupees through family assistance and closed all accounts within a six week window. This outcome was only possible because the negotiation was handled concurrently, preventing any single bank from intimidating the borrower into a disproportionate payout.
                            </p>

                            <h2 id="financial-impact" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 5: The Financial Impact and CIBIL Recovery</h2>
                            <p className="text-gray-700 leading-relaxed mb-6 font-bold">
                                Settling multiple loans will significantly impact your credit score initially, but a coordinated settlement provides the fastest path to long term financial recovery.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Borrowers often worry about the damage to their CIBIL score when settling. It is true that a settled account carries a negative weight compared to a closed account. However, when you have multiple defaults, your score is already severely damaged and continues to drop every month the accounts remain unpaid. Settling all these accounts puts an immediate hard stop to the ongoing negative reporting. The status changes to "Settled," which formally concludes the default cycle.
                            </p>
                            
                            {/* AI-Crawlable Data Table */}
                            <div className="overflow-x-auto mb-10 border border-gray-200 rounded-xl shadow-sm">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">Action Route</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">Short Term Impact</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">Long Term CIBIL Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 text-sm">
                                        <tr>
                                            <td className="px-6 py-4 font-medium text-gray-900">Ignoring Multiple Defaults</td>
                                            <td className="px-6 py-4 text-gray-700">Extreme harassment, rising penalties.</td>
                                            <td className="px-6 py-4 text-gray-700">Continuous score drop, legal risks.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-medium text-gray-900">Paying One, Ignoring Others</td>
                                            <td className="px-6 py-4 text-gray-700">Lost savings, continued harassment.</td>
                                            <td className="px-6 py-4 text-gray-700">Score remains ruined by ignored accounts.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-medium text-gray-900">Synchronized Settlement</td>
                                            <td className="px-6 py-4 text-gray-700">Controlled negotiation period.</td>
                                            <td className="px-6 py-4 text-gray-700">Reporting stops, recovery phase begins.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-10">
                                Once all accounts reflect as settled, the borrower can focus purely on credit rebuilding strategies, such as utilizing a secured credit card. This structured recovery is far superior to living in permanent fear of litigation while your debt compounds endlessly due to late fees and default interest rates.
                            </p>

                            <h2 id="verification-process" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 6: The Strict Verification Process</h2>
                            <p className="text-gray-700 leading-relaxed mb-6 font-bold">
                                You must thoroughly verify any agency claiming they can settle multiple loans for you to avoid falling victim to upfront fee scams.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The debt relief market has attracted fraudulent operators who prey on desperate borrowers. These scammers promise unrealistic ninety percent waivers across all your loans, demanding a massive upfront enrollment fee. Once paid, they disappear, leaving you to face the angry banks alone. Legitimate firms operate with total transparency regarding their service agreements and legal limitations.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 bg-blue-50 text-blue-900 p-8 rounded-3xl shadow-md border border-blue-100 font-medium">
                                A verified agency will never ask you to transfer the actual settlement funds into their corporate account. The settlement money must always be paid directly to the bank via official channels, referencing your specific loan account number. The agency's role is strictly to procure the official bank offer letter.
                            </p>

                            <h2 id="harassment-defense" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 7: Defending Against Harassment</h2>
                            <p className="text-gray-700 leading-relaxed mb-6 font-bold">
                                Multiple loan defaults usually trigger an avalanche of abusive recovery tactics, but strong legal representation provides an immediate shield against these illegal practices.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                According to stringent guidelines issued by the RBI, banks and their appointed agents are strictly prohibited from using intimidation, verbal abuse, or public humiliation to recover debts [2]. When you have five loans, the chances of encountering a rogue agent multiply rapidly. A dedicated legal team handles this by issuing formal cease and desist notices to the banks nodal officers the moment harassment occurs.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                When a bank realizes that a borrower is aware of their legal rights and has documented the harassment violations, they quickly reign in their agents. Banks face severe regulatory penalties if they are caught turning a blind eye to abusive recovery tactics. This legal leverage is essential for maintaining your peace of mind during the months required to finalize the synchronized settlements.
                            </p>

                            {/* Client Reviews */}
                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Verified Client Success</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {testimonials.slice(0, 4).map((review, index) => (
                                    <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                        <div className="flex items-center mb-3">
                                            <div className="flex text-yellow-400 mr-2">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-gray-700 mb-4 leading-relaxed font-normal text-sm m-0">"{review.text}"</p>
                                        <div className="flex justify-between items-center text-xs font-bold text-blue-900 mt-4">
                                            <span>{review.authorName}</span>
                                            <span className="opacity-60">{review.source}</span>
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

                            {/* Share Article Section */}
                            <div className="mt-12 mb-8 pt-8 border-t border-gray-100">
                                <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Share this Guide</h4>
                                <div className="flex gap-3">
                                    <a 
                                        href={`https://api.whatsapp.com/send?text=How%20to%20Negotiate%20Multiple%20Loans%20Together%20-%20https://www.credsettle.com/negotiate-multiple-loans-together`} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20bd5a] transition-colors shadow-sm"
                                        aria-label="Share on WhatsApp"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                        </svg>
                                    </a>
                                    <a 
                                        href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.credsettle.com/negotiate-multiple-loans-together`} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="w-10 h-10 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:bg-[#005e93] transition-colors shadow-sm"
                                        aria-label="Share on LinkedIn"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                        </svg>
                                    </a>
                                    <a 
                                        href={`https://twitter.com/intent/tweet?text=How%20to%20Negotiate%20Multiple%20Loans%20Together&url=https://www.credsettle.com/negotiate-multiple-loans-together`} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors shadow-sm"
                                        aria-label="Share on X"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Evidence Sources */}
                            <div className="mt-8 pt-8 border-t border-gray-200 text-xs text-gray-500">
                                <h4 className="font-bold text-gray-700 mb-2">Sources & References</h4>
                                <ol className="list-decimal pl-4 space-y-1">
                                    <li>
                                        <a href="https://rbi.org.in/Scripts/BS_ViewMasCirculardetails.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                            Reserve Bank of India. Guidelines on Fair Practices Code for Lenders. Regulatory circular regarding compromise settlements.
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://rbi.org.in/Scripts/NotificationUser.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                            Reserve Bank of India. Outsourcing of Financial Services and Recovery Agent Conduct Guidelines.
                                        </a>
                                    </li>
                                </ol>
                            </div>

                        </article>
                    </main>

                    {/* Right Column: Cards */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14 self-start h-fit">
                        <div className="space-y-6">
                            
                            {/* Author Card */}
                            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg flex-shrink-0">
                                    AS
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 mb-0.5 uppercase tracking-wide font-bold">Written by</p>
                                    <h4 className="font-bold text-gray-900 m-0 text-base">Ashish</h4>
                                    <div className="flex items-center gap-2 mt-0.5">
                                        <Link href="/authors/ashish" className="text-blue-600 text-xs hover:underline font-medium">Legal Professional</Link>
                                        <a href="https://www.linkedin.com/in/ashish-jhangra-ab1a54127/" target="_blank" rel="noopener noreferrer" className="text-[#0077b5] hover:text-[#005e93] transition-colors" aria-label="LinkedIn Profile">
                                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Card 1: CTA */}
                            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-center flex flex-col items-center">
                                <h3 className="font-black text-gray-900 text-xl mb-3 mt-2 tracking-tight">Facing Harassment?</h3>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed px-1">
                                    Our team can consolidate your negotiations and send legal notices to stop agent visits immediately.
                                </p>
                                <Link
                                    href="/contact"
                                    className="w-full bg-[#1b5df3] hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-md text-center text-sm"
                                >
                                    Stop the Agents
                                </Link>
                                <div className="mt-5 space-y-2 text-xs text-gray-500 w-full text-center font-medium">
                                    <p>&#10003; Consolidate Negotiations</p>
                                    <p>&#10003; RBI Compliance Audit</p>
                                    <p>&#10003; FIR Support</p>
                                </div>
                            </div>

                            {/* Card 2: Related Articles */}
                            <div className="bg-gray-50/80 p-5 rounded-2xl border border-gray-100 shadow-sm mt-6">
                                <h4 className="font-black text-gray-900 text-lg border-b border-gray-200 pb-3 mb-4">Related Articles</h4>
                                <ul className="space-y-4 text-left font-medium text-sm">
                                    <li>
                                        <Link href="/loan-settlement" className="text-blue-600 hover:text-blue-800 transition-colors">
                                            Understanding Loan Settlement
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-blue-600 hover:text-blue-800 transition-colors">
                                            Handling Bank Legal Notices
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/rbi-rules-for-recovery-agents" className="text-blue-600 hover:text-blue-800 transition-colors">
                                            RBI Rules for Recovery Agents
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="text-blue-600 hover:text-blue-800 transition-colors">
                                            CIBIL After Settlement
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
