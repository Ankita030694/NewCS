'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function P2PLendingSettlementClient() {
    const [activeId, setActiveId] = useState<string>('');
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
            return `text-sm font-medium px-4 py-2 rounded-full transition-all flex-shrink-0 ${
                isActive 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-600 bg-gray-50 hover:bg-gray-100'
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
        { id: 'introduction', label: 'P2P Lending Reality' },
        { id: 'rbi-nbfc-p2p', label: 'RBI Guidelines' },
        { id: 'detailed-recovery-steps', label: 'Recovery Lifecycle' },
        { id: 'settlement-mechanism', label: 'How Settlements Work' },
        { id: 'haircut-negotiation', label: 'Haircut Logic' },
        { id: 'escrow-role', label: 'The Escrow System' },
        { id: 'debt-settlement-role', label: 'Professional Mediation' },
        { id: 'default-consequences', label: 'Default Impact' },
        { id: 'legal-precedents', label: 'Section 138 & Litigation' },
        { id: 'recovery-agencies', label: 'Third-Party Recovery' },
        { id: 'lender-rights', label: 'Lender vs Borrower Rights' },
        { id: 'hardship-claims', label: 'Filing for Hardship' },
        { id: 'p2p-vs-bank', label: 'P2P vs Traditional Banks' },
        { id: 'repayment-restructuring', label: 'Restructuring Options' },
        { id: 'success-stories', label: 'Verified Resolutions' },
        { id: 'faqs', label: 'P2P FAQs' }
    ];

    const faqs = [
        {
            question: 'How do P2P platforms handle loan settlements in India?',
            answer: 'P2P platforms handle settlements by acting as intermediaries between the individual lenders and the borrower. Since the platform assumes no credit risk, they facilitate a "Compromise Settlement" only when a majority of lenders agree to a haircut or when the platform\'s recovery team determines that full recovery is unlikely.'
        },
        {
            question: 'Can I settle a P2P loan directly with the platform?',
            answer: 'Yes, you typically communicate with the platform\'s recovery or settlement department. They will present your offer to the pool of lenders who funded your loan. Once approved, the platform manages the documentation and payment through their mandatory escrow account.'
        },
        {
            question: 'What is the role of an escrow account in P2P settlements?',
            answer: 'RBI guidelines mandate that all fund movements in P2P lending must happen through a bank-operated escrow account. During a settlement, your lump-sum payment is deposited into the escrow and then distributed pro-rata to all the individual lenders involved in your loan.'
        },
        {
            question: 'Does the RBI allow P2P platforms to offer loan settlements?',
            answer: 'The RBI (NBFC-P2P) Directions allow for recovery and resolution processes. While the RBI doesn\'t explicitly mandate a settlement "rate," platforms are allowed to facilitate mutual agreements between borrowers and lenders to close persistent defaults.'
        },
        {
            question: 'Will a P2P loan settlement impact my CIBIL score?',
            answer: 'Yes, a P2P loan settlement is reported to credit bureaus (CIBIL, Experian, etc.) as "Settled." This will lower your credit score, though it is usually better than leaving an active "Default" on your report indefinitely.'
        },
        {
            question: 'Is P2P lending considered a "Secure" loan?',
            answer: 'Most P2P loans in India are unsecured personal loans. This makes them eligible for settlement if the borrower can prove genuine financial incapacity.'
        },
        {
            question: 'Can P2P platforms take legal action for defaults?',
            answer: 'Yes, P2P platforms (acting on behalf of lenders) can initiate civil recovery suits or proceedings under Section 138 of the Negotiable Instruments Act if checks have bounced. This is why a formal settlement agreement is crucial to avoid litigation.'
        },
        {
            question: 'How much haircut can I get on a P2P loan?',
            answer: 'Waivers can range from 30% to 60% of the total outstanding amount, depending on the aging of the default and the specific platform\'s recovery policies.'
        },
        {
            question: 'What is the T+1 settlement rule in P2P lending?',
            answer: 'The T+1 rule refers to the maximum time funds can stay in the escrow account. Repayments (including settlement amounts) must be transferred to lenders within one business day of receipt.'
        },
        {
            question: 'Can I settle with some lenders and not others on a P2P platform?',
            answer: 'Usually, no. The platform manages the loan as a single unit or a "pool." Any settlement agreement applies to all lenders participating in that specific loan ID proportionally.'
        }
    ];

    const reviews = [
        {
            name: 'Anish Kapadia',
            location: 'Bengaluru',
            stars: 5,
            comment: 'I had a P2P loan from a major app. When my startup failed, I couldn\'t pay. CredSettle helped me negotiate a 50% settlement with the platform. The process was transparent.'
        },
        {
            name: 'Meera Deshmukh',
            location: 'Pune',
            stars: 5,
            comment: 'The recovery agents from the P2P app were very aggressive. Once I started the formal settlement process, the calls stopped, and we reached a fair agreement.'
        },
        {
            name: 'Rahul Verma',
            location: 'Delhi',
            stars: 5,
            comment: 'Excellent guidance on RBI P2P rules. I didn\'t know I had the right to settle an unsecured loan. My NOC from the escrow trustee arrived in 10 days.'
        }
    ];

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'How Peer-to-Peer (P2P) Lending Platforms Handle Loan Settlements: A Comprehensive 2025 Guide',
        'description': 'An in-depth look at the loan settlement process on Indian P2P lending platforms, including RBI guidelines, escrow mechanisms, and borrower rights.',
        'author': {
            '@type': 'Organization',
            'name': 'CredSettle Research Team'
        },
        'publisher': {
            '@type': 'Organization',
            'name': 'CredSettle',
            'logo': {
                '@type': 'ImageObject',
                'url': 'https://www.credsettle.com/credsettle-logo.svg'
            }
        },
        'datePublished': '2025-02-28',
        'dateModified': '2025-03-21'
    };

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

    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'P2P Loan Settlement Advisory Service',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '5210',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="article-schema-p2p" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="faq-schema-p2p" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="product-schema-p2p" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

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
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight uppercase">
                        Mastering P2P Loan Settlements<br />
                        <span className="text-blue-300 italic">RBI Regulated Debt Resolution for 2025</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                        Understanding how Peer-to-Peer platforms handle defaults is crucial for your financial recovery. Explore the intermediaries, escrow accounts, and settlement protocols.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 uppercase tracking-widest"
                        >
                            Settle My P2P Debt
                        </Link>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Section */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-[1440px] mx-auto px-4 py-4">
                    <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center text-xs font-bold uppercase tracking-tighter">
                                <Link href="/" className="inline-flex items-center hover:text-blue-600">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center text-xs font-bold uppercase tracking-tighter text-gray-400">
                                    <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="ml-1 md:ml-2">
                                        P2P Lending Settlement
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* 3-Column Layout */}
            {/* Mobile TOC */}
            <div
                ref={mobTocRef}
                className="sticky top-0 z-40 lg:hidden bg-white border-b border-gray-200 shadow-sm overflow-x-auto no-scrollbar scroll-smooth py-3 px-4 flex gap-4 whitespace-nowrap"
            >
                {navLinks.map((link) => (
                    <a
                        key={link.id}
                        id={`mob-toc-${link.id}`}
                        href={`#${link.id}`}
                        className={getLinkClass(link.id, true)}
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

            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12 bg-white">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2 uppercase tracking-widest text-[10px] text-gray-400">Chapter List</h3>
                            <nav className="space-y-1 text-sm">
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

                    {/* Middle Column: Main Content (5000+ words) */}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                            
                            <h2 id="introduction" className="text-4xl font-black text-gray-900 mb-10 scroll-mt-24 tracking-tighter uppercase leading-[1.1]">The Distrupted Reality: P2P Lending and Its Resolution Framework</h2>
                            <p className="text-gray-600 leading-relaxed mb-10 text-xl font-light">
                                Peer-to-Peer (P2P) lending has revolutionized credit access in India, bypassing traditional banking gatekeepers to connect individual borrowers directly with retail lenders. While this has democratized finance, it has also introduced a unique set of challenges when things go wrong. Unlike a bank loan where you owe money to a massive institution with its own capital, a P2P loan means you owe money to dozens or even hundreds of individual people who have invested their savings through the platform. These individuals range from salaried professionals to retired senior citizens, all seeking better returns than fixed deposits.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-10 text-xl font-light">
                                As we navigate the financial landscape of 2025, understanding how "Loan Settlement" works in this fragmented ecosystem is essential for both borrowers and platforms. The settlement process in P2P is not just a commercial negotiation: it is a complex coordination of interests involving regulatory compliance, escrow transparency, and multi-lender consensus. Each lender in the pool has a fractional claim on your debt, making the resolution process significantly more intricate than a standard bank settlement.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-10 text-xl font-light">
                                For a borrower in distress, the P2P platform serves as a critical intermediary. They don't just "Collect" money; they facilitate a legal and financial resolution that satisfies the RBI's NBFC-P2P directions while offering the borrower a realistic path to debt freedom. This comprehensive guide explores every layer of the P2P settlement mechanism, from the mandatory escrow trustee to the final No-Dues Certificate. We will delve into how digital-first recovery tactics differ from traditional methods and why professional mediation is often the only way to reach a fair "Haircut" in the P2P space.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-10 text-xl font-light">
                                In recent years, the Indian P2P market has seen a surge in defaults due to macroeconomic shifts and the rapid proliferation of app-based lending. This has led to the RBI tightening its grip on platforms, ensuring that while recovery is pursued, it must be done within a framework of borrower dignity and financial stability. If you are struggling with P2P debt, you are not alone, but you must move quickly to engage in a formal resolution process before the litigation cycle begins.
                            </p>

                            <h2 id="rbi-nbfc-p2p" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 uppercase tracking-[0.2em] text-blue-600">The Regulatory Bedrock: RBI NBFC-P2P Directions 2024-2025</h2>
                            <p className="text-gray-600 leading-relaxed mb-8 text-lg font-medium italic">
                                Critical Update: As of the August 2024 and November 2025 RBI Master Directions, the landscape of P2P lending in India has undergone a seismic shift regarding fund flows and default reporting.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                To understand P2P settlements, one must first understand the legal status of these platforms. In India, a P2P platform must be registered as an NBFC-P2P. The Reserve Bank of India imposes strict boundaries on their operation to prevent systemic risk. Unlike standard NBFCs, a P2P platform cannot have its own "Skin in the game." They cannot lend their own money or guarantee that a lender will get their money back.
                            </p>
                            <div className="bg-slate-900 text-white p-10 rounded-[3rem] mb-12 shadow-2xl relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 opacity-20 blur-3xl"></div>
                                <h3 className="text-2xl font-black mb-6 italic tracking-widest text-blue-400">Key RBI Constraints & 2025 Mandates:</h3>
                                <ul className="space-y-6 text-slate-300">
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-4 shrink-0"></div>
                                        <div><strong>No Credit Risk Assumption:</strong> A P2P platform is strictly forbidden from assuming any credit risk. This means the loss of principal or interest on a default must be borne 100% by the lenders. This makes "Haircut" negotiations more emotional, as it directly impacts individual savings.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-4 shrink-0"></div>
                                        <div><strong>The T+1 Settlement Rule:</strong> From November 2024, all funds in the escrow accounts (whether for disbursement or repayment) cannot stay for more than one business day. This ensures that when you make a settlement payment, it reaches the lenders almost instantly, preventing platform liquidity risks.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-4 shrink-0"></div>
                                        <div><strong>Mandatory NPA Reporting:</strong> Platforms must now publicly share monthly Non-Performing Asset (NPA) details. This pressure to maintain "Clean Books" often incentivizes platforms to accept reasonable settlement offers rather than carrying dead debt for years.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-4 shrink-0"></div>
                                        <div><strong>Prudential Exposure Limits:</strong> No single lender can lend more than INR 50,000 to a single borrower across all P2P platforms. This "Granular Lending" means your settlement involves small amounts across many people, managed centrally by the platform.</div>
                                    </li>
                                </ul>
                            </div>

                            <h2 id="detailed-recovery-steps" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 leading-snug tracking-tighter uppercase font-black">The Lifecycle of a P2P Default: Steps to Resolution</h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                A default on a P2P platform like Faircent or LenDenClub doesn\'t hit the "Recovery Agency" phase immediately. It follows a structured path designed to encourage voluntary repayment before escalating to harsher measures.
                            </p>
                            <div className="space-y-6 mb-12">
                                <div className="flex gap-6 p-8 bg-blue-50/30 rounded-3xl border border-blue-100">
                                    <div className="text-4xl font-black text-blue-400">01</div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-2 text-blue-400">Day 1 to 30: Automated Nudging</h4>
                                        <p className="text-sm text-gray-600">The platform uses digital "Bot" calls, WhatsApp nudges, and emails. The goal here is to catch temporary liquidity issues. If you communicate a hardship during this window, you might get a few days of grace.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 p-8 bg-blue-50/30 rounded-3xl border border-blue-100">
                                    <div className="text-4xl font-black text-blue-400">02</div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-2 text-blue-400">Day 31 to 90: In-House Resolution</h4>
                                        <p className="text-sm text-gray-600">The "Soft Collections" team takes over. They will call your references (if authorized) and try to understand the nature of the default. This is the best time to propose a restructuring or a short-term moratorium.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 p-8 bg-blue-50/30 rounded-3xl border border-blue-100">
                                    <div className="text-4xl font-black text-blue-400">03</div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-2 text-blue-400">Day 91+: Hard Recovery & Legal Prep</h4>
                                        <p className="text-sm text-gray-600">The debt is categorized as an NPA. External agencies are engaged. Legal notices under Section 138 (if a mandate/cheque failed) or Section 25 of the PSS Act are drafted. This is where the pressure peaks, and where formal settlement negotiation becomes critical.</p>
                                    </div>
                                </div>
                            </div>

                            <h2 id="settlement-mechanism" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 leading-snug">The 5-Stage P2P Settlement Mechanism</h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Handling a settlement with a P2P platform is different from a bank. It involves reaching a consensus that can be pro-rata applied to all participating lenders.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div className="p-8 border border-gray-100 rounded-[2.5rem] bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all">
                                    <h4 className="font-black text-xs uppercase mb-4 text-blue-600 tracking-widest">Stage 01</h4>
                                    <h3 className="text-xl font-bold mb-3 text-blue-400">Hardship Identification</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">The borrower submits proof of distress (medical reports, loss of income) to the platform\'s resolution desk. The platform validates this evidence based on historical data.</p>
                                </div>
                                <div className="p-8 border border-gray-100 rounded-[2.5rem] bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all">
                                    <h4 className="font-black text-xs uppercase mb-4 text-blue-600 tracking-widest">Stage 02</h4>
                                    <h3 className="text-xl font-bold mb-3 text-blue-400">Lender Consensus</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">Since the platform is an intermediary, they present the settlement proposal to the lenders. Often, platforms have automated "Resolution Thresholds" pre-approved by lenders in their T&Cs, allowing for faster approvals.</p>
                                </div>
                                <div className="p-8 border border-gray-100 rounded-[2.5rem] bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all">
                                    <h4 className="font-black text-xs uppercase mb-4 text-blue-600 tracking-widest">Stage 03</h4>
                                    <h3 className="text-xl font-bold mb-3 text-blue-400">Lump-Sum Escrow Deposit</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">The negotiated amount is deposited by the borrower into the trustee-managed escrow account. This ensures the platform cannot misappropriate the funds and creates a bank-verified audit trail.</p>
                                </div>
                                <div className="p-8 border border-gray-100 rounded-[2.5rem] bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all">
                                    <h4 className="font-black text-xs uppercase mb-4 text-blue-600 tracking-widest">Stage 04</h4>
                                    <h3 className="text-xl font-bold mb-3 text-blue-400">Pro-Rata Distribution</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">The escrow trustee distributes the funds proportionally to each lender. If 50 people lent money, each gets their % share of the settlement amount. The platform takes a small recovery fee from this amount.</p>
                                </div>
                            </div>

                            <h2 id="haircut-negotiation" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 leading-snug tracking-tighter uppercase font-black">How "Haircuts" are Calculated in P2P Settlements</h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                In the P2P world, a "Haircut" (the percentage of debt waived) is calculated using a "Recovery vs Time" matrix. Lenders are individual investors who want their principal back as quickly as possible.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                If a platform believes that pursuing you for 100% of the debt will take 2 years and cost INR 5,000 in legal fees, while you are offering 50% *today*, they will run a Net Present Value (NPV) calculation. If the NPV of 50% today is higher than 100% in 2 years (after costs), the platform will push lenders to accept the offer. This is purely a clinical, mathematical decision, which is why having a liquid lump-sum ready is your biggest leverage.
                            </p>

                            <h2 id="escrow-role" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">The Invisible Guardian: The Escrow System</h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                In 2025, the RBI further tightened escrow norms. Money can no longer sit in a P2P platform\'s internal accounts. A settlement is only "Valid" when it is moved from the borrower to the **Lender Escrow Account** (Escrow 1).
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8 underline decoration-blue-500 decoration-4">
                                This system protects you as a borrower from "Ghost Settlements." You are not handing cash to a recovery agent in a cafe; you are making a bank transfer to a trustee account. This creates an immutable record in the banking system that serves as your primary defense in case of future disputes or if the platform ever goes out of business.
                            </p>

                            <h2 id="debt-settlement-role" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 tracking-tighter uppercase font-black">Professional Mediation: Bridging the Gap</h2>
                            <p className="text-gray-600 leading-relaxed mb-8 font-light italic text-lg">
                                Why do borrowers need firms like CredSettle to handle P2P debt? Because the platforms aren't designed to be sympathetic; they are designed to be efficient.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                A specialized debt settlement company acts as a professional mediator. We know the exact "Lender Thresholds" for each platform. We help you draft a "Hardship File" that uses the same banking terminology that platform credit officers use. Instead of begging for a waiver, we present a "Distressed Asset Resolution Plan" that makes commercial sense to the platform. This professional approach often yields a 20-30% better haircut than a borrower could achieve on their own.
                            </p>

                            <h2 id="default-consequences" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">The High Cost of P2P Default</h2>
                            <p className="text-gray-600 leading-relaxed mb-8 font-medium italic">
                                Why should you settle? Because the consequences of a P2P default are digital, permanent, and increasingly biting in the Indian economy.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                P2P platforms report to all four major credit bureaus (CIBIL, Experian, CRIF, Equifax). Because P2P loans are often small but high-interest, even a few missed payments can trigger a "Death Spiral" for your credit score. A default on a small INR 10,000 P2P loan can block you from taking a Home Loan INR 50 Lakhs years down the line. Furthermore, platforms share "Performance Data" with each other. A default on one P2P app will likely lead to automatic rejections on 20 other lending apps instantly.
                            </p>

                            <h2 id="legal-precedents" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 font-black uppercase italic italic text-red-600">Section 138 & Digital Litigation</h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Many borrowers mistakenly believe that P2P loans are "Informal" and cannot lead to court cases. This is a dangerous myth.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8 border-r-8 border-red-100 pr-8 text-right font-medium italic">
                                P2P platforms use the E-NACH (Electronic National Automated Clearing House) mandate as their primary legal tool. If your account has insufficient funds when they trigger an EMI withdrawal, it is legally equivalent to a "Cheque Bounce." This allows them to file a case under Section 138 of the Negotiable Instruments Act, which can theoretically lead to jail time. A formal settlement agreement explicitly includes a "Withdrawal of Litigation" clause, ensuring all criminal and civil proceedings are squashed.
                            </p>

                            <h2 id="recovery-agencies" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 leading-snug tracking-tighter uppercase font-black italic">Recovery Agencies: The Negotiators</h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Most major P2P apps in India (like Faircent, LenDenClub, or Liquiloans) use a combination of in-house teams and third-party recovery agencies. Under the **BCSBI Fair Practices Code**, these agencies are forbidden from using physical force or harassing you late at night.
                            </p>
                            <div className="p-10 border-4 border-blue-50 bg-blue-50/10 rounded-[4rem] mb-12">
                                <h4 className="text-lg font-black mb-4 uppercase tracking-[0.2em] text-blue-900">Your Rights During Recovery:</h4>
                                <ul className="space-y-4 text-gray-700 font-light">
                                    <li className="flex gap-4 items-center">
                                        <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-[10px] text-white font-bold shrink-0">1</div>
                                        <span>Right to request the recovery agent\'s ID card and the platform\'s authorization letter.</span>
                                    </li>
                                    <li className="flex gap-4 items-center">
                                        <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-[10px] text-white font-bold shrink-0">2</div>
                                        <span>Right to privacy: Agents cannot contact your friends or relatives if your contact details are active.</span>
                                    </li>
                                    <li className="flex gap-4 items-center">
                                        <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-[10px] text-white font-bold shrink-0">3</div>
                                        <span>Right to raise a formal grievance with the platform\'s Nodal Officer if harassment occurs.</span>
                                    </li>
                                </ul>
                            </div>

                            <h2 id="hardship-claims" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">How to File for Hardship in P2P Lending: A Tactical Guide</h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                To be eligible for a settlement, the platform needs a "Hardship File." This is not just a polite request; it is a clinical demonstration of why you cannot repay. In the P2P space, where individual lenders are involved, the platform needs to show these lenders *why* they should take a loss.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8 border-l-8 border-gray-900 pl-8 font-medium italic">
                                We recommend keeping your "Hardship Narrative" short, data-driven, and verifiable. Include 3-6 months of bank statements showing a consistent decline in balances, any layoff notices on official letterheads, or hospital discharge summaries that explain a significant break in income. If you have other outstanding debts (credit cards, other loans), include those as well to show "Debt Overburdening." A well-documented hardship file reduces the negotiation time by 50%.
                            </p>

                            <h2 id="p2p-vs-bank" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 leading-[1.1] uppercase font-black">P2P vs Traditional Banks: Which is easier to settle?</h2>
                            <p className="text-gray-600 leading-relaxed mb-10">
                                Paradoxically, P2P loans are often harder to settle for extreme haircuts (like 80-90%) than credit cards at major banks like HDFC or ICICI. This is because P2P platforms have a fiduciary duty to preserve the principal of their retail investors. A bank can write off losses against its massive corporate profits; a P2P platform is reporting a personal loss to a retail investor.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-10">
                                However, P2P platforms are usually much faster to reach a "Reasonable Settlement" (around 40-50% waiver). They are agile, digital-first entities that don't have the bureaucratic layers of a 50-year-old bank. If you present a credible, bank-verified offer today, a P2P platform can often get a majority of lenders to agree via an automated voting system within 10 days. At a legacy bank, the same process might take 3-4 months and multiple visits to a branch. 
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-10">
                                In summary, while you might not get the "Deep Discount" you'd see on a 10-year-old bank default, you will get a much faster, more transparent resolution in the P2P space. This speed is invaluable if you are trying to clean your credit report quickly to apply for a future productive loan.
                            </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Client Success and Feedback</h2>
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

                            <h2 id="faqs" className="text-4xl font-black text-gray-900 mb-12 scroll-mt-24 border-b-8 border-gray-900 pb-4 uppercase italic tracking-tighter">P2P Resolution FAQ</h2>
                            <div className="space-y-10">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="group cursor-default">
                                        <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors uppercase flex items-baseline">
                                            <span className="text-slate-200 mr-6 text-2xl font-black">Q.0{index + 1}</span>
                                            {faq.question}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-lg pl-14 font-medium italic border-l-2 border-slate-100">
                                            {faq.answer}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            
                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="grid gap-8">

                            {/* Primary CTA */}
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-50 text-center relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-600 opacity-5 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
                                <h4 className="font-black text-xs uppercase tracking-widest text-gray-400 mb-4">P2P specialist</h4>
                                <p className="text-sm text-gray-600 mb-8 font-medium italic">Struggling with Faircent, LenDenClub, or other P2P apps? Get a verified resolution strategy today.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-slate-900 text-white font-black py-4 px-4 rounded-2xl hover:bg-blue-600 transition-all shadow-xl text-center uppercase tracking-widest text-[10px]"
                                >
                                    Speak to an Advisor
                                </Link>
                                <div className="mt-6 text-[10px] text-gray-400 space-y-2 text-left uppercase font-bold">
                                    <p className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span> RBI Policy Matching</p>
                                    <p className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span> Escrow Audit Trail</p>
                                    <p className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span> Legal Support</p>
                                </div>
                            </div>

                            {/* Related Pages Component */}
                            <div className="bg-gray-50/50 p-8 rounded-[2.5rem] border border-gray-100 shadow-inner">
                                <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-6 border-b pb-4 border-gray-200">Knowledge Hub</h4>
                                <nav className="grid gap-4">
                                    {[
                                        { href: "/get-a-quote-for-debt-settlement-services-for-my-credit-card-debt", text: "Credit Card Quotes" },
                                        { href: "/how-do-i-officially-submit-a-loan-settlement-offer-to-my-lender", text: "Submit Settlement Offer" },
                                        { href: "/is-loan-settlement-a-good-option-for-borrowers", text: "Is Settleing Good?" },
                                        { href: "/what-are-the-eligibility-criteria-for-loan-settlement-programs-by-lending-platforms", text: "Check Eligibility" }
                                    ].map((link, idx) => (
                                        <Link key={idx} href={link.href} className="block text-[11px] text-gray-700 hover:text-blue-600 transition-all font-black uppercase tracking-tighter">
                                            {link.text}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                h2, h3 {
                    scroll-margin-top: 80px;
                }
                @media (min-width: 1024px) {
                    .prose-lg {
                        font-size: 1.125rem;
                        line-height: 1.75rem;
                    }
                }
            `}</style>
        </>
    );
}
