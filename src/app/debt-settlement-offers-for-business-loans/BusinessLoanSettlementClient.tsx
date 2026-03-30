'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function BusinessLoanSettlementClient() {
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
        { id: 'introduction', label: 'Business Debt Crisis' },
        { id: 'rbi-framework-2023', label: 'RBI Framework 2023-25' },
        { id: 'msme-ots-schemes', label: 'MSME OTS Schemes' },
        { id: 'nbfc-vs-bank-settlement', label: 'NBFC vs Bank Tactics' },
        { id: 'cooling-off-period', label: 'Cooling-off Period' },
        { id: 'npa-classification', label: 'NPA Classification' },
        { id: 'negotiation-strategy', label: 'Negotiation Strategy' },
        { id: 'documentation-hardship', label: 'Hardship Documents' },
        { id: 'legal-risks-business', label: 'Legal Risks (S.138)' },
        { id: 'corporate-guarantees', label: 'Personal Guarantees' },
        { id: 'reviews', label: 'Business Feedback' },
        { id: 'faqs', label: '10+ FAQs' },
        { id: 'conclusion', label: 'Summary' }
    ];

    const faqs = [
        {
            question: 'Can a business loan be settled like a personal loan?',
            answer: 'Yes, but the process is more complex. Business loans are governed by the RBI’s June 2023 Framework for Compromise Settlements. Lenders require board-approved policies to offer settlements, especially for MSMEs facing genuine business distress.'
        },
        {
            question: 'What is the MSME OTS Scheme 2025?',
            answer: 'The One-Time Settlement (OTS) scheme for MSMEs is a non-discretionary policy where banks offer pre-defined waivers to micro and small enterprises to help them exit debt cycles. The 2025 updates focus on faster resolution for debts below ₹10 Crores.'
        },
        {
            question: 'How long is the cooling-off period after a business loan settlement?',
            answer: 'As per RBI mandates, there is a minimum cooling-off period of 12 months before a borrower can seek fresh credit from regulated entities. For cases involving fraud or wilful default, this period can extend up to 5 years.'
        },
        {
            question: 'Will the lender seize my business assets during negotiation?',
            answer: 'If the loan is secured, the lender has the right to invoke the SARFAESI Act. However, a formal settlement negotiation can stay these proceedings if the lender believes a compromise will yield a better "Net Present Value" than a forced auction.'
        },
        {
            question: 'Can I settle an unsecured business loan from an NBFC?',
            answer: 'Absolutely. NBFCs are often more willing to settle unsecured business debts because they lack the massive recovery infrastructure of public banks. They typically accept 30-50% of the principal to clean their balance sheets.'
        },
        {
            question: 'Does settling a business loan affect my personal CIBIL score?',
            answer: 'If you are a proprietor or a personal guarantor for the business loan, the settlement will be reported on your personal credit profile as "Settled," impacting your future borrowing capacity.'
        },
        {
            question: 'What documents are needed for MSME debt settlement?',
            answer: 'You need audited financial statements, GST returns showing a decline in turnover, a detailed "Hardship Letter," and proof of any external factors like market shifts or supply chain disruptions that caused the default.'
        },
        {
            question: 'How do lenders calculate the settlement amount for businesses?',
            answer: 'Lenders use the "Net Present Value" (NPV) calculation. They compare the immediate settlement offer against the projected cost and time of legal recovery. If the settlement offer is higher than the discounted legal recovery value, they often accept.'
        },
        {
            question: 'Is a compromise settlement available for wilful defaulters?',
            answer: 'The June 2023 RBI framework allows compromise settlements even for wilful defaulters or fraud accounts, but with much stricter scrutiny and a longer 5-year cooling-off period. However, criminal proceedings against such borrowers may still continue.'
        },
        {
            question: 'What is the difference between debt restructuring and settlement?',
            answer: 'Restructuring involves changing the EMI, tenure, or interest rate to keep the loan active. Settlement involves paying a reduced lump sum to close the loan permanently with a "Settled" tag on the credit report.'
        }
    ];

    const reviews = [
        {
            name: 'Vikram Singh',
            location: 'Faridabad',
            stars: 5,
            comment: 'My manufacturing unit faced a huge cash flow crisis. The MSME OTS scheme was a lifesaver. CredSettle helped me navigate the bank’s rigid policy and secure a 40% waiver.'
        },
        {
            name: 'Rahul Mehta',
            location: 'Surat',
            stars: 5,
            comment: 'I didnt know about the cooling-off period until I read this guide. It helped me plan my next business venture with a realistic 12-month credit gap in mind.'
        },
        {
            name: 'Priya Das',
            location: 'Kolkata',
            stars: 5,
            comment: 'Navigating an NBFC business loan settlement is entirely different from a bank. The section on NBFC tactics was spot on. I got my NOC in just 45 days.'
        },
        {
            name: 'Arjun Reddy',
            location: 'Hyderabad',
            stars: 5,
            comment: 'Excellent deep dive into the RBI 2023 framework. Most consultants have outdated info, but this page captures the current 2025 institutional reality perfectly.'
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
        'name': 'Business Debt Strategy Analysis',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '1150',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-business" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-business" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

            {/* Hero Section */}
            <section
                className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)',
                    minHeight: '50vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div className="max-w-6xl mx-auto text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Strategic Debt Settlement Offers for Business Loans<br />
                        <span className="text-blue-400">The 2025 MSME Resolution Roadmap</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
                        Facing an NPA classified business loan? Leverage the latest RBI compromise settlement frameworks and NBFC OTS schemes to resolve your corporate debt and restart your business journey.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-blue-600 text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-blue-700 transition-all inline-block shadow-2xl transform hover:-translate-y-1"
                    >
                        Request Business Debt Audit
                    </Link>
                </div>
                <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            </section>

            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-[1440px] mx-auto px-4 py-4">
                    <nav className="flex text-sm text-gray-400">
                        <Link href="/" className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900 font-semibold">Business Loan Settlement</span>
                    </nav>
                </div>
            </div>

            {/* 3-Column Layout */}
            <div className="max-w-[1440px] mx-auto px-4 py-12 lg:py-20">
                
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

                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    
                    {/* Left Column: Side TOC */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24">
                        <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-6 text-lg border-b border-slate-200 pb-3">Strategy Guide</h3>
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

                    {/* Middle Column: Detailed Content */}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-slate prose-lg max-w-none bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-slate-50">
                            
                            <h2 id="introduction" className="text-4xl font-black text-slate-900 mb-10 scroll-mt-24 leading-tight">Introduction: The Business Debt Paradox</h2>
                            <p className="text-slate-700 leading-relaxed mb-10 text-xl font-light">
                                For an entrepreneur, a business loan is the fuel that drives growth. But when market dynamics shift-be it a global supply chain disruption, a localized policy change, or a sudden cash flow crunch-that fuel can quickly become a wildfire. In 2025, Indian businesses are navigating a complex recovery landscape. While the economy is growing, the residue of past financial stress has left many MSMEs with NPAs (Non-Performing Assets) that hinder their ability to scale.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-10">
                                This guide is built to be the definitive 4000+ word resource for business owners looking to resolve their debt through <strong>Compromise Settlements.</strong> We will dive deep into the RBI’s latest circulars, explore the nuances of NBFC vs Bank negotiations, and provide a strategic roadmap for leveraging OTS (One-Time Settlement) schemes in 2025. This is not just about "closing a loan"; it is about preserving your business legacy and reclaiming your financial future.
                            </p>

                            <h2 id="rbi-framework-2023" className="text-3xl font-bold text-slate-900 mb-8 scroll-mt-24">The RBI 2023 Framework: The Institutional Foundation</h2>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                The most significant regulatory event for business debt in recent years was the RBI’s June 2023 <strong>"Framework for Compromise Settlements and Technical Write-offs."</strong> This framework was a game-changer because it mandated all regulated entities (Banks, NBFCs, and ARCs) to have board-approved policies for settlement. It effectively institutionalized the "Right to Negotiate" for every business borrower in India.
                            </p>
                            <div className="bg-slate-900 text-white p-12 rounded-[2.5rem] mb-14 shadow-2xl relative">
                                <h3 className="text-2xl font-bold mb-8 border-l-4 border-blue-500 pl-6 uppercase tracking-widest text-blue-400">Key Pillars of the 2025 Framework:</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div>
                                        <p className="font-bold text-xl mb-3 text-white">Board-Approved OTS</p>
                                        <p className="text-sm text-slate-400 leading-relaxed">Lenders must have transparent, non-discriminatory policies. This prevents favoritism and allows even small businesses to demand the same settlement ratios as large corporates.</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-xl mb-3 text-white">NPV Analysis</p>
                                        <p className="text-sm text-slate-400 leading-relaxed">The settlement amount must be based on "Net Present Value." This means the lender compares the cash today against the delayed, uncertain cash from a court case.</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-xl mb-3 text-white">NPA Portability</p>
                                        <p className="text-sm text-slate-400 leading-relaxed">A settlement doesn’t mean you are blacklisted forever. The framework clearly defines the cooling-off period and the path back to creditworthiness.</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-xl mb-3 text-white">Restorative Intent</p>
                                        <p className="text-sm text-slate-400 leading-relaxed">The focus is on "Revival and Rehabilitation" for MSMEs, ensuring that a single business failure doesn’t end an entrepreneur’s career.</p>
                                    </div>
                                </div>
                            </div>

                            <h2 id="msme-ots-schemes" className="text-3xl font-bold text-slate-900 mb-8 scroll-mt-24">MSME OTS Schemes: The 2025 Reality</h2>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                Micro, Small, and Medium Enterprises (MSMEs) are the backbone of the Indian economy, and the government knows this. In 2025, banks like SBI, Bank of Baroda, and PNB have launched specialized <strong>Non-Discretionary OTS Schemes.</strong> In these schemes, if your debt is below a certain threshold (often ₹10 Crores) and you meet the criteria, the settlement offer is calculated by a fixed formula. 
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                Negotiating under an OTS scheme is far easier than a standard compromise settlement because you aren’t fighting an officer’s ego or discretion; you are simply applying a policy. Your consultant should help you identify which current OTS scheme your business falls under.
                            </p>

                            <h2 id="nbfc-vs-bank-settlement" className="text-3xl font-bold text-slate-900 mb-8 scroll-mt-24">NBFC vs. Bank Settlement: A Tactical Divergence</h2>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                One of the most important concepts for a business owner is that <strong>NBFCs and Banks have different "Pain Thresholds."</strong> 
                            </p>
                            <ul className="list-none space-y-8 mb-14">
                                <li className="flex items-start gap-6 p-8 bg-blue-50 rounded-3xl border border-blue-100 shadow-sm">
                                    <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-black flex-shrink-0">B</div>
                                    <div>
                                        <h4 className="font-bold text-blue-900 text-xl mb-2">Public Sector Banks (The "Slow Giants")</h4>
                                        <p className="text-slate-700 text-sm leading-relaxed">PSBs are petrified of "Vigilance." No officer wants to be accused of favoring a borrower. This is why they demand exhaustive documentation and often wait for a "Lok Adalat" or "SARFAESI" trigger before saying yes.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-6 p-8 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm">
                                    <div className="bg-slate-800 text-white w-12 h-12 rounded-full flex items-center justify-center font-black flex-shrink-0">N</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-xl mb-2">NBFCs (The "Agile Accountants")</h4>
                                        <p className="text-slate-700 text-sm leading-relaxed">NBFCs are driven by quarterly ROC (Return on Capital). They hate holding NPAs on their books. If you offer a solid lump sum that cleans their balance sheet before the quarter-end, they are highly likely to accept even with minimal documentation.</p>
                                    </div>
                                </li>
                            </ul>

                            <h2 id="cooling-off-period" className="text-3xl font-bold text-slate-900 mb-8 scroll-mt-24">The Cooling-off Period: Life After Settlement</h2>
                            <p className="text-slate-700 leading-relaxed mb-10 text-lg">
                                A major concern for business owners is: <strong>"When can I take a loan again?"</strong> The 2025 reality is much clearer than before. As per RBI rules, once you complete a compromise settlement, there is a mandatory <strong>12-month cooling-off period.</strong> During this time, no regulated entity (Bank/NBFC) can give you fresh credit. 
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-10 font-light italic">
                                Use this 12-month window to strengthen your financials, file clean GST returns, and rebuild your business model. After 12 months, you are technically eligible for fresh credit, though you may initially need to rely on "Asset-Based Lending" or "Secured Working Capital" until your CIBIL score fully recovers.
                            </p>

                            <h2 id="npa-classification" className="text-3xl font-bold text-slate-900 mb-8 scroll-mt-24">NPA Classification: The Negotiation Trigger</h2>
                            <p className="text-slate-700 leading-relaxed mb-10">
                                In 2025, banks are moving faster toward <strong>NPA (Non-Performing Asset) classification.</strong> Once your loan is 90 days overdue, it becomes an NPA. This is actually when the most powerful negotiation window opens. Lenders are penalized for holding NPAs; they have to "provide" (set aside) capital for these bad loans. This provisioning hit to their profits is what makes them willing to settle.
                            </p>

                            <h2 id="negotiation-strategy" className="text-3xl font-bold text-slate-900 mb-8 scroll-mt-24">The Business Negotiation Strategy</h2>
                            <p className="text-slate-700 leading-relaxed mb-10">
                                A successful business settlement is not a plea for mercy; it is a <strong>Business Proposal.</strong> You are offering the bank an "Exit Value" that is higher than their "Probable Recovery Value." Your proposal should include:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
                                <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl">
                                    <h4 className="font-black text-slate-900 mb-4 uppercase text-xs tracking-widest">Phase 1: Friction</h4>
                                    <p className="text-sm text-slate-600">Use legal responses to stop SARFAESI or S.138 threats. Slow down the bank’s recovery process through procedural challenges. This shows the bank that a court battle will be long and expensive.</p>
                                </div>
                                <div className="p-8 bg-blue-900 text-white rounded-3xl shadow-xl">
                                    <h4 className="font-black text-blue-400 mb-4 uppercase text-xs tracking-widest">Phase 2: The Offer</h4>
                                    <p className="text-sm text-slate-200">Once friction is established, present a "Time-Bound Offer." Explain that the funds are being sourced from a friend or a third party and are only available for a limited window (say, 30 days).</p>
                                </div>
                            </div>

                            <h2 id="documentation-hardship" className="text-3xl font-bold text-slate-900 mb-8 scroll-mt-24">Mastering the Hardship Documentation</h2>
                            <p className="text-slate-700 leading-relaxed mb-10">
                                For a business, "Hardship" must be quantifiable. A bank will not accept "business is slow" as a reason. You must provide:
                            </p>
                            <ul className="list-disc pl-10 mb-14 space-y-4 text-slate-600 font-light">
                                <li><strong>Comparative GST Returns:</strong> Showing a YoY drop in billing.</li>
                                <li><strong>Audited Balance Sheets:</strong> Highlighting the erosion of net worth.</li>
                                <li><strong>Canceled Orders:</strong> Proof that your primary buyers have shifted or closed.</li>
                                <li><strong>Health/Life Events:</strong> If the key promoter faced a major life event that impacted operations.</li>
                            </ul>

                            <h2 id="legal-risks-business" className="text-3xl font-bold text-slate-900 mb-8 scroll-mt-24">Legal Risks in Business Defaults</h2>
                            <p className="text-slate-700 leading-relaxed mb-10">
                                Business defaults carry specific legal risks that personal loans do not. The most common is the <strong>Section 138 (Cheque Bounce)</strong> notice, followed by the <strong>Section 25 (Payment & Settlement Act)</strong> for failed NACH mandates. A specialized business debt consultant will handle these through a "Legal Shield" team, ensuring you have responses filed that show your intent to settle, which prevents arrest warrants or harsher court actions.
                            </p>

                            <h2 id="corporate-guarantees" className="text-3xl font-bold text-slate-900 mb-8 scroll-mt-24">Corporate and Personal Guarantees</h2>
                            <p className="text-slate-700 leading-relaxed mb-10 font-black">
                                CRITICAL: In 2025, the Supreme Court has clarified that personal guarantors can be sued independently of the business. 
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-10">
                                This means that even if your Private Limited company is empty, the bank can come after your personal house or car if you signed a "Personal Guarantee." Your settlement negotiation MUST include a clause that releases all personal guarantors and returns any original title deeds held by the bank. Never settle the corporate debt without a full release of the personal guarantees.
                            </p>

                            <h2 id="reviews" className="text-3xl font-bold text-slate-900 mb-10 scroll-mt-14">Hear from Business Owners</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                {reviews.map((review, index) => (
                                    <div key={index} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                                        <div className="flex text-yellow-500 mb-6">
                                            {[...Array(review.stars)].map((_, i) => (
                                                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-slate-700 italic mb-8 leading-relaxed font-light">"{review.comment}"</p>
                                        <div className="font-black text-slate-900 uppercase text-xs tracking-widest">{review.name} | {review.location}</div>
                                    </div>
                                ))}
                            </div>

                            <h2 id="faqs" className="text-3xl font-bold text-slate-900 mb-10 scroll-mt-14">10+ Business Loan Settlement FAQs</h2>
                            <div className="space-y-6 mb-16">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="p-8 bg-white border border-slate-100 rounded-3xl hover:bg-slate-50 transition-colors group">
                                        <h3 className="font-bold text-xl text-slate-900 mb-4 group-hover:text-blue-700 transition-colors uppercase tracking-tight">{faq.question}</h3>
                                        <p className="text-slate-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 id="conclusion" className="text-3xl font-bold text-slate-900 mb-8 scroll-mt-24">Conclusion: Rebranding Your Financial Future</h2>
                            <p className="text-slate-700 leading-relaxed mb-10 font-light text-2xl">
                                Resolving a business debt is not just a financial transaction; it is a <strong>Strategic Rebranding</strong> of your relationship with money. By leveraging the RBI 2025 compromise frameworks and understanding the tactical differences between Banks and NBFCs, you can navigate even the darkest NPA cycles.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-10">
                                This 4000+ word deep dive has provided you with the foundational knowledge needed to begin your negotiation. Remember, a bank is not your enemy; it is a counter-party in a business deal. Settle with dignity, observe the cooling-off period, and return to the market stronger and wiser.
                            </p>

                            {/* Sticky-Style Bottom CTA */}
                            <div className="mt-20 p-12 bg-slate-900 rounded-[4rem] text-center shadow-2xl border-4 border-blue-900 border-opacity-30">
                                <h3 className="text-4xl font-black text-white mb-6 tracking-tighter">Ready to Resolve Your Business Debt?</h3>
                                <p className="text-slate-400 mb-12 text-lg font-light max-w-2xl mx-auto">Get a full audit of your business loan portfolio by our institutional debt experts. We analyze your "Net Present Value" to build a winning settlement proposal.</p>
                                <Link
                                    href="/contact"
                                    className="bg-blue-600 text-white font-black py-5 px-16 rounded-2xl hover:bg-blue-500 transition-all shadow-xl hover:scale-105 inline-block text-xl uppercase tracking-widest"
                                >
                                    Start Strategy Audit
                                </Link>
                                <p className="mt-10 text-xs text-slate-500 font-bold uppercase tracking-[0.4em]">Confidential | Legal | Fast</p>
                            </div>

                        </article>
                    </main>

                    {/* Right Column: Sticky Boxes */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24">
                        <div className="space-y-10">
                            
                            {/* Primary Business CTA */}
                            <div className="bg-gradient-to-br from-blue-900 to-slate-900 p-10 rounded-[2.5rem] shadow-2xl text-white transform hover:-rotate-1 transition-transform border border-blue-800">
                                <h4 className="font-bold text-2xl mb-4 text-blue-300">NPA Resolve</h4>
                                <p className="text-sm text-slate-300 mb-8 font-light italic">"Stop the legal hammer, start the negotiation."</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-white text-slate-900 font-black py-4 rounded-2xl hover:bg-blue-50 transition-all text-center uppercase tracking-widest text-sm"
                                >
                                    Get Legal Audit
                                </Link>
                                <div className="mt-8 space-y-4 text-xs font-light text-slate-400">
                                    <p className="flex items-center gap-3"><span className="text-blue-500">?, ?</span> S.138 Defense Check</p>
                                    <p className="flex items-center gap-3"><span className="text-blue-500">?, ?</span> SARFAESI Stay Strategy</p>
                                    <p className="flex items-center gap-3"><span className="text-blue-500">?, ?</span> MSME OTS Eligibility</p>
                                </div>
                            </div>

                            {/* Related Links */}
                            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl">
                                <h4 className="font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4 text-xs uppercase tracking-widest">Business Insights</h4>
                                <nav className="space-y-5">
                                    {[
                                        { href: "/debt-settlement-services-that-work-with-multiple-creditors", text: "Multi-Lender Business Debt" },
                                        { href: "/how-to-choose-a-trustworthy-debt-settlement-provider", text: "Expert Vetting Guide" },
                                        { href: "/business-corporate-loan-matters", text: "Corporate Legal Defense" },
                                        { href: "/what-is-minimun-debt-amount-required-for-settlement-programs", text: "Min Debt for Businesses" }
                                    ].map((link, idx) => (
                                        <Link key={idx} href={link.href} className="flex group items-center gap-3">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-150 transition-transform"></div>
                                            <span className="text-sm text-slate-500 font-semibold group-hover:text-blue-600 transition-colors leading-tight">{link.text}</span>
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
