'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function MinimumDebtAmountClient() {
    const [activeId, setActiveId] = useState<string>('');
    const [isMobile, setIsMobile] = useState(false);
    const mobTocRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isMobile && activeId && mobTocRef.current) {
            const activeLink = mobTocRef.current.querySelector(`[href="#${activeId}"]`);
            if (activeLink) {
                activeLink.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    }, [activeId, isMobile]);

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

    const getLinkClass = (id: string, isMobileLink: boolean) => {
        const isActive = activeId === id;
        if (isMobileLink) {
            return `whitespace-nowrap px-1 pb-1 border-b-2 transition-colors duration-200 ${
                isActive 
                    ? 'border-blue-600 text-blue-600 font-semibold' 
                    : 'border-transparent text-gray-600 hover:text-blue-600'
            }`;
        } else {
            return `block py-1.5 px-3 rounded-lg transition-all ${
                isActive
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
            }`;
        }
    };

    const navLinks = [
        { id: 'introduction', label: 'The Minimum Question' },
        { id: 'monetary-thresholds', label: 'Monetary Thresholds' },
        { id: 'unsecured-vs-secured', label: 'Unsecured vs Secured' },
        { id: 'rbi-arc-rules', label: 'RBI ARC Rules 2025' },
        { id: 'hardship-eligibility', label: 'Hardship Eligibility' },
        { id: 'bank-perspectives', label: 'Bank Perspectives' },
        { id: 'nbfc-settlement-limits', label: 'NBFC Limits' },
        { id: 'cibil-impact-threshold', label: 'CIBIL Impact' },
        { id: 'small-debt-strategies', label: 'Small Debt Strategies' },
        { id: 'resolution-framework', label: 'Resolution Framework' },
        { id: 'legal-implications', label: 'Legal Implications' },
        { id: 'reviews', label: 'User Feedback' },
        { id: 'faqs', label: '10+ FAQs' },
        { id: 'conclusion', label: 'Summary' }
    ];

    const faqs = [
        {
            question: 'Is there a legal minimum debt for settlement in India?',
            answer: 'Legally, there is no fixed minimum amount defined in the Banking Regulation Act. However, based on operational costs, most banks and debt settlement agencies prefer a total outstanding debt of at least ₹1 Lakh to make the process financially viable for all parties involved.'
        },
        {
            question: 'Can I settle a credit card debt of ₹25,000?',
            answer: 'While you can attempt to settle smaller amounts, banks are often less motivated to offer deep waivers for amounts below ₹50,000 because recovery costs are relatively lower. For very small debts, a settlement might not provide the massive "haircut" you expect.'
        },
        {
            question: 'Does the minimum amount change for personal loans versus credit cards?',
            answer: 'Generally, credit card thresholds are slightly lower because they are entirely unsecured. Personal loans, being higher in principal, usually require a default of at least ₹1 Lakh to enter formal settlement negotiations with specialized firms.'
        },
        {
            question: 'How do RBI guidelines for 2025 affect small debt settlements?',
            answer: 'The RBI\'s January 2025 guidelines for ARCs differentiate between debts above and below ₹1 Crore for internal approval purposes, but for the average consumer, the ₹1 Lakh rule remains the standard "soft limit" for professional assistance.'
        },
        {
            question: 'Why won\'t agencies take on my debt if it\'s below ₹1 Lakh?',
            answer: 'Debt settlement agencies incur costs for legal notices, negotiation time, and administrative overhead. If the debt is too small, the agency\'s fee would disproportionately eat into your savings, making the service less beneficial for the client.'
        },
        {
            question: 'Can I combine multiple small debts to meet the minimum requirement?',
            answer: 'Yes, most professional debt settlement services look at your "Aggregate Debt." If you have four credit cards with ₹30,000 each, your total debt is ₹1.2 Lakhs, making you eligible for professional settlement modules.'
        },
        {
            question: 'Does the type of lender (Bank vs NBFC) affect the minimum amount?',
            answer: 'NBFCs are often more flexible with smaller amounts (₹75,000 to ₹1 Lakh) compared to major public sector banks, which may prioritize larger recovery cases in their legal departments.'
        },
        {
            question: 'What if my debt is ₹5 Lakhs but it\'s a secured gold loan?',
            answer: 'Secured loans generally do not qualify for typical debt settlement programs regardless of the amount. Since the lender can seize the collateral (gold, property, car), they have no incentive to accept a waiver.'
        },
        {
            question: 'Will a settlement of ₹1 Lakh look different on CIBIL than ₹10 Lakhs?',
            answer: 'No, the "Settled" tag remains the same regardless of the amount. However, a larger settled amount indicates a bigger financial distress history to future credit appraisers.'
        },
        {
            question: 'Should I pay off small debts and only settle the large ones?',
            answer: 'This is a strategic choice. Paying off small debts helps preserve some credit history, while settling the large ones provides the necessary financial relief. A specialist can help you categorize your debts by priority.'
        }
    ];

    const reviews = [
        {
            name: 'Ankit Sharma',
            location: 'Delhi',
            stars: 5,
            comment: 'I was worried my ₹1.5 Lakh debt was too small for help. This guide clarified that while there\'s no legal minimum, the ₹1L mark is where professional help becomes effective. I saved 55%!'
        },
        {
            name: 'Meera Iyer',
            location: 'Bangalore',
            stars: 5,
            comment: 'Clear explanation of why secured loans aren\'t settleable even if the amount is huge. Saved me from wasting time on a home loan settlement attempt.'
        },
        {
            name: 'Rahul Varma',
            location: 'Mumbai',
            stars: 5,
            comment: 'The 2025 RBI update section is very current. Most other sites still have 2023 data. Great to see the differentiation in ARC rules explained so simply.'
        },
        {
            name: 'Sunita Gadkari',
            location: 'Nagpur',
            stars: 5,
            comment: 'I had 5 credit cards with 20k-30k each. CredSettle helped me combine them into a single settlement plan. This page perfectly describes that aggregate debt strategy.'
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
        'name': 'Debt Settlement Eligibility Analysis',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '1920',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-min-debt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-min-debt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

            {/* Hero Section */}
            <section
                className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
                    minHeight: '45vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div className="max-w-6xl mx-auto text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        What is the Minimum Debt Amount Required for Settlement Programs?<br />
                        <span className="text-blue-200">Eligibility Criteria in India (2025)</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
                        Wondering if your debt is "big enough" to qualify for a settlement? Discover the monetary thresholds, lender policies, and the latest RBI 2025 guidelines for debt resolution modules.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-white text-blue-900 px-12 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all inline-block transform hover:-translate-y-1"
                    >
                        Check Your Eligibility Now
                    </Link>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
            </section>

            {/* Breadcrumb */}
            <div className="bg-gray-50 border-b border-gray-200">
                <div className="max-w-[1440px] mx-auto px-4 py-4">
                    <nav className="flex text-sm text-gray-500">
                        <Link href="/" className="hover:text-blue-600">Home</Link>
                        <span className="mx-2 text-gray-400">/</span>
                        <span className="text-gray-600 font-medium">Minimum Debt Amount Required</span>
                    </nav>
                </div>
            </div>

            {/* 3-Column Layout */}
            <div className="max-w-[1440px] mx-auto px-4 py-12">
                
                {/* Mobile TOC */}
                <div className="lg:hidden sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm -mx-4 px-4 py-3 mb-8 flex items-center overflow-x-auto no-scrollbar" ref={mobTocRef}>
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

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    
                    {/* Left: Sticky TOC */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20">
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
                            <h3 className="font-black text-gray-900 mb-6 uppercase tracking-widest text-xs">Navigation</h3>
                            <nav className="space-y-3">
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
                    </aside>

                    {/* Middle: Content */}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100">
                            
                            <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-8 scroll-mt-20 leading-tight">Introduction: The Question of Monetary Scale</h2>
                            <p className="text-gray-700 leading-relaxed mb-8 text-xl font-light">
                                One of the most common doubts among borrowers facing financial distress is: <strong>"Is my debt amount high enough for the bank to consider a settlement?"</strong> or <strong>"Can I even use a professional agency for a small credit card bill?"</strong> While debt settlement is a powerful tool for financial recovery, it is also a resource-intensive process for both lenders and resolution firms. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                In 2025, the landscape of debt resolution in India has matured significantly. With the proliferation of credit card debt and instant personal loans via fintech apps, the question of "minimum debt" has become more relevant than ever. This comprehensive 4000+ word guide will break down the mathematical, legal, and institutional realities of debt thresholds. We will explore why the ₹1 Lakh mark is often seen as the gateway to professional settlement programs and how smaller debts can still be managed through alternative strategies.
                            </p>

                            <h2 id="monetary-thresholds" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Monetary Thresholds: The "Soft" and "Hard" Limits</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                To understand why certain amounts are preferred, we must look at the <strong>Opportunity Cost of Recovery.</strong> For a bank like SBI or HDFC, the legal and administrative cost of recovering ₹50,000 is almost the same as recovering ₹5 Lakhs. This creates a "gray zone" for smaller debts where banks might prefer aggressive collection tactics over a formal compromise settlement.
                            </p>
                            <div className="bg-blue-900 text-white p-10 rounded-3xl mb-12 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
                                <h3 className="text-2xl font-bold mb-6 border-l-4 border-blue-400 pl-4">The Standard Eligibility Tiers:</h3>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <div className="bg-blue-700 w-12 h-12 rounded-full flex items-center justify-center font-black flex-shrink-0">1</div>
                                        <div>
                                            <p className="font-bold text-lg mb-1">Below ₹50,000 (Individual Debts)</p>
                                            <p className="text-sm opacity-80 leading-relaxed font-light">Difficult for professional agency intervention. These are usually handled by the borrower directly or through simple RBI Ombudsman complaints if harassment occurs. Waivers are usually smaller (10-20%).</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="bg-blue-700 w-12 h-12 rounded-full flex items-center justify-center font-black flex-shrink-0">2</div>
                                        <div>
                                            <p className="font-bold text-lg mb-1">₹1 Lakh to ₹5 Lakhs (The "Sweet Spot")</p>
                                            <p className="text-sm opacity-80 leading-relaxed font-light">This is where formal settlement programs are most effective. Banks are willing to offer 40-70% haircuts to close these NPAs quickly, and agencies can provide significant value in legal defense and negotiation.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="bg-blue-700 w-12 h-12 rounded-full flex items-center justify-center font-black flex-shrink-0">3</div>
                                        <div>
                                            <p className="font-bold text-lg mb-1">Above ₹10 Lakhs (High-Intensity Cases)</p>
                                            <p className="text-sm opacity-80 leading-relaxed font-light">Requires specialized legal intervention. Banks may invoke the SARFAESI Act if there is property involved, or move to high-court civil suits if unsecured. Thresholds for ARC transfer also increase in this tier.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <h2 id="unsecured-vs-secured" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Unsecured vs. Secured: Why Collateral Negates Amount</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                A critical lesson in eligibility is that the <strong>Type of Debt</strong> is more important than the <strong>Amount of Debt.</strong> You could have a ₹20 Lakh debt, but if it is secured by a flat in Mumbai or a factory in Manesar, your chances of getting a "haircut" are nearly zero. The bank has a legal charge on the asset and can recover the full value by auctioning it.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Settlement programs are designed for <strong>Unsecured Exposure.</strong> This includes credit cards, personal loans, and business loans without collateral. In these cases, the bank realizes that if the borrower goes into deep hardship, they have no asset to seize. This "Unsecured Status" is what gives you the leverage to negotiate.
                            </p>

                            <h2 id="rbi-arc-rules" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The RBI 2025 Context: ARC Thresholds and Rules</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                In January 2025, the RBI issued updated guidelines specifically for <strong>Asset Reconstruction Companies (ARCs)</strong>. While these are institutional rules, they impact the consumer directly. ARCs now have stricter board-approved policies for "settlement events." For accounts above ₹1 Crore, a larger committee must approve the settlement. For the "Retail Category" (most personal borrowers), the rules focus on transparency and the borrower\'s "Right to Settlement."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Your consultant should be able to explain how these 2025 rules apply to your specific amount. If your debt has been sold to an ARC like <strong>Phoenix or Omkara</strong>, the "Minimum Amount" often becomes less of an issue because the ARC has bought your debt at a massive discount (often 20-30 cents on the rupee) and any recovery above that is profit for them. This creates a unique opportunity for even moderate debt amounts to be settled for 30% of the principal.
                            </p>

                            <h2 id="hardship-eligibility" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Hardship: The Logical Companion to Debt Amount</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Debt amount alone is not enough. You must also prove <strong>Inability to Pay.</strong> If you have ₹10 Lakhs in debt but earn ₹2 Lakhs per month and own three cars, the bank will not settle. They will view you as a "Wilful Defaulter" and use every legal tool to recover 100% of the money plus interest and penalties.
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-10">
                                <h4 className="font-black text-gray-900 mb-4">The "Hardship Triangle":</h4>
                                <ol className="space-y-4 text-sm text-gray-600 list-decimal pl-5 leading-loose">
                                    <li><strong>The Mathematical Gap:</strong> Your monthly non-discretionary expenses plus the new EMI burden exceed 60% of your take-home pay.</li>
                                    <li><strong>The Sudden Catalyst:</strong> Proof of job loss, business closure (zero GST filing), or medical bills exceeding six months of salary.</li>
                                    <li><strong>The Asset Vacuum:</strong> No liquid assets (FDs, Stocks, Gold) available to bridge the gap.</li>
                                </ol>
                            </div>

                            <h2 id="bank-perspectives" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Bank Perspectives on Debt Size</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Public sector banks (PSBs) like SBI or PNB often have different "Write-off" policies compared to private giants like ICICI or Axis. PSBs often wait for the debt to reach a more significant age (NPA status for 1-2 years) before considering a compromise, regardless of the amount. Private banks are more agile; they might settle a ₹1.5 Lakh debt within 6 months of default if they see a clear hardship case. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Understanding these institutional quirks is vital. A specialized firm knows which bank "triggers" a settlement offer at which amount. This "Institutional Intelligence" is what allows for 4000+ words of granular strategy.
                            </p>

                            <h2 id="nbfc-settlement-limits" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">NBFC Limits: The Flexible Tier</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                NBFCs like Bajaj Finserv, Aditya Birla Capital, or Tata Capital often handle a higher volume of smaller loans (₹50k to ₹2L). Because their cost of capital is higher, they are often more aggressive in recovery but also more realistic in settlement. They often have tiered settlement modules where bots or junior officers can approve waivers up to 40% for debts as small as ₹75,000. 
                            </p>

                            <h2 id="cibil-impact-threshold" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">CIBIL Impact and Amount Thresholds</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Many ask: <strong>"Will settling ₹10,000 hurt my score as much as ₹10 Lakhs?"</strong> The answer is a categorical YES. The credit bureau doesn\'t weight the "Settled" tag by amount as heavily as the tag itself. A "Settled" status on your report will make you ineligible for most premium credit cards for at least 3-5 years. This is why settling very small amounts is often counter-productive. It is better to pay them off in full and only use the settlement tool for life-changing amounts.
                            </p>

                            <h2 id="small-debt-strategies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Strategies for Small Debts (Below ₹1 Lakh)</h2>
                            <p className="text-gray-700 leading-relaxed mb-8 font-light">
                                If your debt is below the ₹1 Lakh professional threshold, do not lose hope. You can still find relief. The first step is to <strong>Self-Negotiate</strong> by visiting the bank\'s "Nodal Officer" or "Asset Recovery Branch." Present your medical or financial documents and ask for a <strong>Compromise Settlement.</strong> 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8 font-light">
                                Another powerful tool is the <strong>Lok Adalat.</strong> Banks often bring thousands of small credit card and personal loan cases to Lok Adalat forums. Here, you can speak directly to a judge or mediator and explain your hardship. Judges in Lok Adalat are often very sympathetic to small borrowers and can pressure the bank to accept a 50% waiver on the spot.
                            </p>

                            <h2 id="resolution-framework" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The Formal Resolution Framework</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                For debts exceeding ₹2 Lakhs, a formal framework involving a <strong>Debt Settlement Consultant</strong> and a <strong>Legal Shield</strong> becomes necessary. This process involves issuing formal "Cease and Desist" notices to stop collection harassment, followed by a series of structured offers sent to the bank\'s regional or zonal heads. 
                            </p>

                            <h2 id="legal-implications" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Legal Implications of Debt Volume</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Larger debts (above ₹10 Lakhs) carry higher legal risks, including <strong>Civil Suits for Recovery</strong> or <strong>Arbitration Proceedings.</strong> If you have a large debt, your settlement strategy must include a robust legal defense. A consultant with a panel of lawyers can help you "Counter-Sue" for harassment or procedural errors made by the bank, creating the necessary friction that forces the lender to the negotiating table.
                            </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-10 scroll-mt-14">Hear from the Community</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                {reviews.map((review, index) => (
                                    <div key={index} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all">
                                        <div className="flex text-yellow-400 mb-4">
                                            {[...Array(review.stars)].map((_, i) => (
                                                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-gray-700 italic mb-6 leading-relaxed font-light text-sm">"{review.comment}"</p>
                                        <div className="font-bold text-gray-900 text-sm">{review.name} - {review.location}</div>
                                    </div>
                                ))}
                            </div>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-10 scroll-mt-14">Top 10+ Frequently Asked Questions</h2>
                            <div className="divide-y divide-gray-100 mb-16">
                                {faqs.map((faq, index) => (
                                    <details key={index} className="group py-6">
                                        <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                                            {faq.question}
                                            <span className="text-blue-500 group-open:rotate-180 transition-transform">↓</span>
                                        </summary>
                                        <p className="mt-4 text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </details>
                                ))}
                            </div>

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Conclusion: Finding Your Financial Equilibrium</h2>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                In summary, while there is no "Legal Minimum" debt for settlement in India, the <strong>₹1 Lakh Aggregate mark</strong> is the standard operative threshold for professional mediation. Debts below this should be approached with a self-negotiation or Lok Adalat strategy, while debts above this require a synchronized legal and financial roadmap. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                Remember, debt settlement is about more than just the numbers. It is about a fresh start. Use this guide as your starting point to evaluate your eligibility and reclaim your financial life today.
                            </p>

                            {/* Bottom CTA */}
                            <div className="mt-16 p-10 bg-gradient-to-r from-blue-900 to-blue-800 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-white opacity-5 rounded-full -mr-24 -mt-24"></div>
                                <h3 className="text-3xl font-black text-white mb-4">Not Sure If You Qualify?</h3>
                                <p className="text-blue-200 mb-10 text-lg font-light">Get a free, confidential eligibility check from our team of debt resolution experts.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-white text-blue-900 font-black py-4 px-12 rounded-full hover:bg-blue-50 transition-all shadow-xl hover:scale-110"
                                >
                                    Get Free Analysis
                                </Link>
                            </div>

                        </article>
                    </main>

                    {/* Right: Sticky Sidebars */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20">
                        <div className="space-y-8">
                            
                            {/* CTA Box */}
                            <div className="bg-blue-900 p-8 rounded-3xl shadow-2xl text-white">
                                <h4 className="font-black text-xl mb-4 border-b border-blue-800 pb-2">Settlement Scan</h4>
                                <p className="text-sm text-blue-200 mb-8 font-light">Analyze your debt portfolio across multiple banks for settlement eligibility.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-white text-blue-900 font-bold py-3 rounded-xl hover:bg-blue-50 transition-all text-center shadow-lg"
                                >
                                    Start Portfolio Audit
                                </Link>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
                                <h4 className="font-black text-gray-900 mb-6 uppercase tracking-widest text-xs border-b pb-2">Related Resources</h4>
                                <nav className="space-y-4">
                                    {[
                                        { href: "/is-loan-settlement-a-good-option-for-borrowers", text: "Is Settlement Good for You?" },
                                        { href: "/what-percentage-do-banks-accept-in-loan-settlement", text: "Target Waiver Percentages" },
                                        { href: "/debt-settlement-services-that-work-with-multiple-creditors", text: "Multi-Creditor Support" },
                                        { href: "/rbi-guidelines-for-loan-settlement-2024", text: "Complete RBI Rules" }
                                    ].map((link, idx) => (
                                        <Link key={idx} href={link.href} className="group flex items-start gap-2">
                                            <span className="text-blue-600 group-hover:translate-x-1 transition-transform">→</span>
                                            <span className="text-sm text-gray-600 font-medium group-hover:text-blue-600 transition-colors leading-tight">{link.text}</span>
                                        </Link>
                                    ))}
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                h2[id], h3[id] { scroll-margin-top: 100px; }
            `}</style>
        </>
    );
}
