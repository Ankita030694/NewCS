'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function LoanAuctionNoticeClient() {
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
        { id: 'sarfaesi-timeline', label: 'Auction Timeline' },
        { id: 'clearing-arrears', label: 'Section 13(8) Rights' },
        { id: 'private-treaty', label: 'Private Treaty Sale' },
        { id: 'drt-stay-order', label: 'DRT Stay Order' },
        { id: 'one-time-settlement', label: 'Negotiating OTS' },
        { id: 'procedural-lapses', label: 'Notice Checklist' },
        { id: 'auction-failure', label: 'Failed Auctions' },
        { id: 'reviews', label: 'Client Success' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Final Verdict' },
    ];

    const faqs = [
        {
            question: 'Can I stop the bank auction of my property after the date is published in the newspaper?',
            answer: 'Yes. Under Section 13(8) of the SARFAESI Act, you can stop the bank auction of property by clearing all dues, along with the bank’s expenses, at any time before the bank transfers the property to the buyer or signs a sale agreement.'
        },
        {
            question: 'How do I postpone a SARFAESI auction if I need more time to gather funds?',
            answer: 'To postpone a SARFAESI auction, you must file a Securitisation Application (SA) in the Debt Recovery Tribunal (DRT). If you prove procedural errors in the bank’s notice, or if you deposit a significant portion of the dues upfront, the DRT may grant a temporary stay.'
        },
        {
            question: 'Is it possible to cancel a loan property auction through a Private Treaty Sale?',
            answer: 'Absolutely. A Private Treaty Sale allows you to find your own buyer who is willing to pay more than the bank’s reserve price. If the bank agrees, this can effectively cancel the loan property auction and ensure you recover some equity from your asset.'
        },
        {
            question: 'What happens if no one bids in the bank auction?',
            answer: 'If the auction fails due to zero bids, the bank cannot take over your property immediately. They must issue a fresh 15-day notice and conduct a second auction. This gap gives you a crucial window to negotiate a One-Time Settlement (OTS).'
        },
        {
            question: 'Will the bank return my excess money if the property sells for more than my loan balance?',
            answer: 'Yes. By law, the bank is only entitled to recover the outstanding loan amount plus legal and auction expenses. Any surplus amount generated from the auction must be refunded to the borrower.'
        }
    ];

    const reviews = [
        {
            name: 'Rajesh Sharma',
            location: 'Delhi',
            stars: 5,
            comment: 'My house was scheduled for auction in just 12 days. The team helped me spot a critical valuation error in the bank’s notice. We filed in the DRT and managed to completely stop bank auction of property. I am now repaying through a restructured EMI.'
        },
        {
            name: 'Anita Verma',
            location: 'Mumbai',
            stars: 5,
            comment: 'I thought everything was lost when the auction date was set. But we used a Private Treaty Sale to bring in a buyer who paid 20% more than the bank’s reserve price. We were able to cancel loan property auction and walk away with some savings.'
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
        'name': 'Property Auction Defense Legal Services',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '1450',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-auction" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-auction" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                        Stop, Postpone, or Cancel a Property Auction<br />
                        <span className="text-blue-300">Your Last-Minute Legal Guide</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Received a SARFAESI Auction Notice? You still have options. Discover the powerful legal maneuvers to protect your home and secure your financial future.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Urgent Legal Help
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
                                        Loan Auction Notice Options
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

            {/* Main Content Layout */}
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 1: The Gap in Knowledge: Can You Still Save Your Property?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The psychological impact of receiving an auction notice is devastating. Most borrowers assume that once the bank publishes the property details and an auction date in a national newspaper, the game is completely over. This is a common misconception, heavily fueled by banks seeking swift and uncontested recoveries. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The reality is far more complex and significantly more hopeful. Even after an auction date is officially set, borrowers possess a powerful toolkit of legal maneuvers to either halt, delay, or completely void the process. Whether your goal is to permanently <strong>stop bank auction of property</strong>, temporarily <strong>postpone SARFAESI auction</strong> procedures, or fully <strong>cancel loan property auction</strong> proceedings, the law provides specific, albeit time-sensitive, mechanisms to protect your interests.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-bold text-green-900 uppercase tracking-tighter border-y border-green-100 py-4">
                                An auction notice is a legal deadline, not an absolute final verdict.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                This comprehensive guide breaks down the exact steps you can take in the final hours before an auction. We will explore your rights under Section 13(8) of the SARFAESI Act, the strategic brilliance of a Private Treaty Sale, and the aggressive defensive posture of filing in the Debt Recovery Tribunal (DRT). If you are facing the loss of your home or commercial space, reading and acting upon this manual is your most critical next step.
                            </p>

                            <h2 id="sarfaesi-timeline" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 2: The SARFAESI Auction Timeline Explained</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To successfully defend your property, you must intimately understand the bank’s timeline. Under the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, the bank must follow a rigid procedural sequence before they can auction a secured asset.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The process typically unfolds as follows:
                            </p>
                            <ul className="list-decimal pl-6 mb-8 space-y-4 text-gray-700 font-light">
                                <li><strong>The 60-Day Notice (Section 13(2)):</strong> After your loan account is classified as a Non-Performing Asset (NPA), the bank serves a demand notice giving you 60 days to clear the entire outstanding balance. You can read more about resolving <Link href="/how-to-regularise-overdue-loan-account-npa-to-standard" className="text-blue-600 hover:underline">NPA loan accounts here</Link>.</li>
                                <li><strong>Symbolic Possession (Section 13(4)):</strong> If you fail to pay within 60 days, the bank takes "symbolic possession" of the property and publishes a possession notice in two leading newspapers.</li>
                                <li><strong>Valuation and Reserve Price:</strong> The bank hires an approved valuer to determine the market value of your property and sets a "Reserve Price." This is the absolute minimum amount for which the property can be auctioned.</li>
                                <li><strong>The 30-Day Auction Notice:</strong> Finally, the bank issues a 30-day notice of sale (Rule 8(6) and Rule 9(1) of the Security Interest Rules, 2002). This notice is served to you and published in the newspapers, detailing the auction date, time, and terms.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Your absolute final window to take action is during this 30-day notice period. The clock is ticking, and immediate legal consultation is imperative.
                            </p>

                            <h2 id="clearing-arrears" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 3: Maneuver 1: Clearing Arrears Before the Date (Section 13(8))</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One of the most misunderstood provisions of the SARFAESI Act is Section 13(8). Many borrowers assume that once the auction is published, the only way to save the property is to win a complex court battle. The law, however, provides a straightforward, guaranteed exit route if you have access to capital.
                            </p>
                            
                            {/* Visual Type 1: Alert Banner */}
                            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-8 shadow-md">
                                <div className="flex items-center mb-3">
                                    <svg className="w-6 h-6 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    <h4 className="text-xl font-bold text-red-900 uppercase">Critical Deadline Alert</h4>
                                </div>
                                <p className="text-red-800 text-sm md:text-base leading-relaxed">
                                    <strong>The Section 13(8) Cutoff:</strong> You have the absolute right to redeem your property by paying the total dues, plus all costs and expenses incurred by the bank, <strong>at any time before the bank transfers the property or executes a sale agreement</strong>. If you pay this amount even one day before the auction, the bank is legally obligated to stop bank auction of property proceedings immediately.
                                </p>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-10">
                                The challenge here is liquidity. You must arrange the entire outstanding amount (not just the EMIs in default). This is where family loans, bridging finance, or selling a smaller secondary asset becomes crucial. The moment the funds hit the bank account, the auction is dead.
                            </p>

                            <h2 id="private-treaty" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 4: Maneuver 2: Executing a Private Treaty Sale</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Bank auctions are notorious for selling properties at exactly the "Reserve Price," which is often 20% to 30% below the actual market value. The bank only cares about recovering its debt; they have no incentive to maximize your profit.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you know the property will be lost, your strategy should shift from saving the asset to protecting your equity. This is achieved through a "Private Treaty Sale." You find an independent buyer willing to pay closer to the true market value. You then approach the bank with this buyer. The buyer pays the bank’s outstanding dues directly, and the remaining surplus goes directly to you. This maneuver allows you to effectively cancel loan property auction procedures while salvaging your financial dignity.
                            </p>

                            {/* Visual Type 2: Comparison Table */}
                            <div className="overflow-x-auto mb-10 shadow-lg rounded-2xl border border-gray-200">
                                <table className="min-w-full bg-white">
                                    <thead className="bg-blue-900 text-white">
                                        <tr>
                                            <th className="py-4 px-6 text-left font-bold text-sm uppercase tracking-wider">Metric</th>
                                            <th className="py-4 px-6 text-left font-bold text-sm uppercase tracking-wider border-l border-blue-800">Bank Auction</th>
                                            <th className="py-4 px-6 text-left font-bold text-sm uppercase tracking-wider border-l border-blue-800 bg-blue-800">Private Treaty Sale</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700 divide-y divide-gray-200">
                                        <tr className="hover:bg-gray-50">
                                            <td className="py-4 px-6 font-semibold">Sale Price Control</td>
                                            <td className="py-4 px-6 border-l border-gray-200 text-red-600 font-medium">Bank controls the reserve price (often undervalued).</td>
                                            <td className="py-4 px-6 border-l border-gray-200 bg-blue-50/30 text-green-700 font-bold">Borrower negotiates for maximum market value.</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="py-4 px-6 font-semibold">Surplus Equity</td>
                                            <td className="py-4 px-6 border-l border-gray-200">Usually zero; property sells for just enough to clear debt.</td>
                                            <td className="py-4 px-6 border-l border-gray-200 bg-blue-50/30 font-medium">High probability of retaining significant cash surplus.</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="py-4 px-6 font-semibold">Public Shaming</td>
                                            <td className="py-4 px-6 border-l border-gray-200 text-red-600">High (published in local newspapers).</td>
                                            <td className="py-4 px-6 border-l border-gray-200 bg-blue-50/30 text-green-700">Low (handled discreetly between buyer and bank).</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="py-4 px-6 font-semibold">Bank Approval</td>
                                            <td className="py-4 px-6 border-l border-gray-200">Automatic.</td>
                                            <td className="py-4 px-6 border-l border-gray-200 bg-blue-50/30">Requires formal tripartite agreement and bank consent.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 id="drt-stay-order" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 5: Maneuver 3: Securing a Stay Order from the DRT</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When liquidity is unavailable and a private buyer cannot be found in time, the battlefield shifts to the courtroom. The Debt Recovery Tribunal (DRT) is the designated authority to hear grievances related to SARFAESI actions.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To postpone SARFAESI auction proceedings, you must file a Securitisation Application (SA) under Section 17 of the Act. However, simply stating that you face financial hardship is rarely enough to secure a stay order. The DRT requires substantive legal grounds.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                The most effective strategy is a two-pronged attack: highlight procedural violations by the bank (discussed in Section 7) and demonstrate bona fide intent by offering a significant upfront deposit. Tribunals are much more likely to halt an auction if the borrower deposits 15% to 25% of the demanded amount immediately, proving they are serious about resolving the debt. This action alone can pause the auction for several months, providing breathing room to arrange alternative financing or negotiate a settlement.
                            </p>

                            <h2 id="one-time-settlement" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 6: Maneuver 4: Proposing a One-Time Settlement (OTS)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Even with an auction looming, banks are fundamentally financial institutions, not real estate management companies. Auctions are messy, prone to litigation, and often fail on the first attempt due to lack of bidders or unrealistically high reserve prices.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                This creates a window for a One-Time Settlement (OTS). An OTS is a proposal where you offer to pay a lump sum that is less than the total outstanding balance but is guaranteed immediate cash for the bank. If your property is difficult to sell, has encroachment issues, or is located in a slow real estate market, the bank might prefer the certainty of an OTS over the gamble of an auction. Navigating the intricacies of a <Link href="/personal-loan-settlement-process-consequences" className="text-blue-600 hover:underline">loan settlement process</Link> requires expert negotiation skills, especially when leveraged against the threat of a looming auction.
                            </p>

                            <h2 id="procedural-lapses" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 7: Spotting Procedural Lapses in the Bank Notice</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The SARFAESI Act gives immense power to the banks, but it also demands strict procedural compliance. A single misstep by the bank can render the entire auction notice invalid. If you can prove a procedural lapse in the DRT, the tribunal will quash the notice, forcing the bank to start the 30-day clock all over again.
                            </p>

                            {/* Visual Type 3: Checklist */}
                            <div className="bg-gray-900 text-white p-8 md:p-10 rounded-[2rem] mb-10 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full"></div>
                                <h4 className="text-2xl font-black mb-6 flex items-center gap-3">
                                    <span className="w-3 h-10 bg-blue-500 inline-block rounded-full"></span>
                                    Pre-Auction Defense Checklist:
                                </h4>
                                <p className="text-gray-300 mb-6 font-light italic">Cross-verify your bank notice against these mandatory legal requirements. A single "NO" is grounds for a DRT challenge.</p>
                                
                                <div className="space-y-4 font-medium">
                                    <div className="flex items-start gap-4 bg-gray-800/50 p-4 rounded-xl">
                                        <div className="mt-1 flex-shrink-0 text-blue-400">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        </div>
                                        <div>
                                            <span className="text-white">Clear 30-Day Window:</span>
                                            <p className="text-sm text-gray-400 font-light mt-1">Is there a clear, uninterrupted gap of 30 days between the date the notice was served/published and the actual date of the auction?</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start gap-4 bg-gray-800/50 p-4 rounded-xl">
                                        <div className="mt-1 flex-shrink-0 text-blue-400">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        </div>
                                        <div>
                                            <span className="text-white">Dual Newspaper Publication:</span>
                                            <p className="text-sm text-gray-400 font-light mt-1">Was the auction notice published in two leading newspapers, and is at least one of them in the local vernacular language of the district?</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start gap-4 bg-gray-800/50 p-4 rounded-xl">
                                        <div className="mt-1 flex-shrink-0 text-blue-400">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        </div>
                                        <div>
                                            <span className="text-white">Accurate Valuation:</span>
                                            <p className="text-sm text-gray-400 font-light mt-1">Does the "Reserve Price" reflect the true market value, or has the bank relied on an outdated or deliberately suppressed valuation report?</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 bg-gray-800/50 p-4 rounded-xl">
                                        <div className="mt-1 flex-shrink-0 text-blue-400">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        </div>
                                        <div>
                                            <span className="text-white">Proper Description of Property:</span>
                                            <p className="text-sm text-gray-400 font-light mt-1">Are the boundaries, dimensions, and known encumbrances of the property listed with absolute precision in the public notice?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Discovering these errors requires a trained legal eye. Often, banks rush the paperwork to meet recovery targets, leaving blatant loopholes that can be exploited in the DRT.
                            </p>

                            <h2 id="auction-failure" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 8: What Happens if the Auction Fails?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Not all auctions succeed on the first try. In fact, a significant percentage of properties fail to attract bids due to high reserve prices, ongoing litigation, or poor market conditions. If nobody bids on your property, the bank cannot simply take ownership by default.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                They are required to conduct a subsequent auction. For the second auction, the notice period is reduced to 15 days instead of 30. During this phase, the bank will almost certainly lower the reserve price to attract buyers. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                A failed first auction is a tremendous psychological victory for the borrower. It demonstrates to the bank that the asset is illiquid. This is the optimal moment to strike back with an aggressive One-Time Settlement offer, often resulting in a far more favorable resolution than what was possible before the auction date. Should you need broader context on dealing with the aftermath of severe defaults, reviewing guidelines for <Link href="/best-lawyer-for-notice-for-loan-default" className="text-blue-600 hover:underline">loan default notices</Link> is highly advisable.
                            </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Client Success: Auctions Stopped</h2>
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

                            <h2 id="conclusion" className="text-4xl font-black text-gray-900 mt-12 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Conclusion: Taking Immediate Action</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                An auction notice is a severe escalation by the bank, but it is not an invincible legal order. Whether through Section 13(8) redemption, a strategic Private Treaty Sale, or aggressive litigation in the DRT, you have viable pathways to protect your property. The deciding factor between losing your home and saving it is almost always speed.
                            </p>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Time is Running Out.</h3>
                                <p className="text-blue-800 mb-6">If your property is scheduled for auction within the next 30 days, every hour counts. Our expert legal team specializes in SARFAESI defense and DRT stays. Let us review your notice today for fatal flaws.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Consult a Property Legal Expert
                                </Link>
                            </div>

                            <div className="mt-12 text-[0.65rem] text-gray-400 uppercase tracking-widest text-center opacity-60">
                                Educational Disclaimer: This content is for general awareness and does not constitute formal legal counsel. SARFAESI proceedings require immediate, highly specialized legal intervention based on specific case facts.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Auction Looms?</h4>
                                <p className="text-sm text-gray-600 mb-6">Our experts can file an immediate DRT stay application if we find procedural flaws in your notice.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Get Immediate Help
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v DRT Stay Order Specialists</p>
                                    <p>v Notice Flaw Detection</p>
                                    <p>v Private Treaty Assistance</p>
                                    <p>v OTS Negotiation Focus</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Expertise</h4>
                                <nav className="space-y-3">
                                    <Link href="/how-to-regularise-overdue-loan-account-npa-to-standard" className="block text-sm text-blue-600 hover:underline">Fixing NPA Accounts</Link>
                                    <Link href="/personal-loan-settlement-process-consequences" className="block text-sm text-blue-600 hover:underline">Settlement Process Overview</Link>
                                    <Link href="/best-lawyer-for-notice-for-loan-default" className="block text-sm text-blue-600 hover:underline">Loan Default Notices</Link>
                                    <Link href="/best-lawyer-for-bank-loan-recovery-defence" className="block text-sm text-blue-600 hover:underline">Bank Recovery Defense</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
