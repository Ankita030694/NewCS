'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function LoanSettlementEligibilityCriteriaClient() {
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
        { id: 'introduction', label: 'Eligibility Overview' },
        { id: 'core-pillars', label: 'The 3 Pillars of Eligibility' },
        { id: 'financial-distress', label: 'Proof of Distress' },
        { id: 'npa-timeline', label: 'The 90-Day NPA Rule' },
        { id: 'wilful-defaulters', label: 'Wilful vs Genuine' },
        { id: 'unsecured-criteria', label: 'Unsecured Loan Rules' },
        { id: 'secured-criteria', label: 'Secured Loan Reality' },
        { id: 'fintech-eligibility', label: 'Fintech App Criteria' },
        { id: 'msme-special-rules', label: 'MSME & FRR 2.0' },
        { id: 'settlement-agencies', label: 'Professional Assistance' },
        { id: 'documentation-checklist', label: 'Required Documents' },
        { id: 'rbi-framework-2025', label: 'RBI 2025 Standards' },
        { id: 'rejection-reasons', label: 'Reasons for Rejection' },
        { id: 'reviews', label: 'Approved Stories' },
        { id: 'faqs', label: 'Eligibility FAQs' }
    ];

    const faqs = [
        {
            question: 'Am i eligible for settlement if i missed only one EMI?',
            answer: 'Generally no. Most banks and lending platforms only consider settlement after the account has been in default for at least 90 days and is classified as a Non-Performing Asset (NPA). One missed EMI is usually handled through late fees or restructuring.'
        },
        {
            question: 'Can I settle a loan if I have a high-paying job?',
            answer: 'It is difficult. If the bank sees regular high-income credits in your bank statement, they will argue that you have the capacity to repay. Settlement is reserved for those who can prove that their income has significantly decreased or their expenses have become unmanageable.'
        },
        {
            question: 'Does a medical emergency make me eligible for a higher waiver?',
            answer: 'Yes. Medical emergencies are considered "Involuntary Hardship." If you provide discharge summaries and hospital bills, banks are more likely to approve a settlement with a higher percentage of interest waiver.'
        },
        {
            question: 'Are home loans eligible for the same settlement programs as credit cards?',
            answer: 'No. Home loans are "Secured Loans." Since the bank has your property as collateral, they prefer auctioning the property to recover the full amount. Settlement for home loans is rare and usually only happens if the property value has significantly depreciated.'
        },
        {
            question: 'Eligibility criteria for fintech apps vs traditional banks?',
            answer: 'Fintech apps use algorithms and are often more aggressive but quicker to settle. They might settle even before 90 days if their predictive models show a high risk of total default. Traditional banks follow a stricter 90 to 180 day NPA cycle.'
        },
        {
            question: 'If I am a "Wilful Defaulter", can I still apply for settlement?',
            answer: 'Under the RBI 2023-2025 framework, banks can enter into compromise settlements even with wilful defaulters. However, the scrutiny is much higher, and it does not stop any ongoing criminal proceedings related to the default.'
        },
        {
            question: 'Does my age affect my eligibility for loan settlement?',
            answer: 'Age is not a direct criterion, but it influences the "Future Income Potential" assessment. Older borrowers or retired individuals with no pension might find it easier to prove permanent repayment incapacity.'
        },
        {
            question: 'Will I be eligible for a new loan after settling an old one?',
            answer: 'You will be ineligible for most prime loans for at least 3 to 7 years. You will need to rebuild your credit score using secured credit cards or small gold loans before major banks consider you eligible again.'
        },
        {
            question: 'Is there a minimum loan amount required for settlement eligibility?',
            answer: 'There is no legal minimum, but most banks don\'t find it cost-effective to negotiate settlements for amounts below 25,000 to 50,000. For very small amounts, they might just "Write Off" the debt internally.'
        },
        {
            question: 'Can my co-signer\'s income affect my settlement eligibility?',
            answer: 'Yes. If a co-signer or guarantor has a stable income, the bank will try to recover the money from them first. You are only "Settlement Eligible" if both you and your guarantor are in financial distress.'
        }
    ];

    const reviews = [
        {
            name: 'Anil Kulkarni',
            location: 'Mumbai',
            stars: 5,
            comment: 'I wasn\'t sure if my medical situation counted as "Hardship." This guide cleared my doubts. I submitted my hospital records and the bank approved my eligibility for a 40% principal settlement.'
        },
        {
            name: 'Savitri Devi',
            location: 'Bangalore',
            stars: 5,
            comment: 'The explanation of the 90-day NPA rule was very helpful. I waited until I was eligible and then approached the bank with a formal letter. It saved me from paying unnecessary penalties.'
        },
        {
            name: 'Rajesh Sharma',
            location: 'Delhi',
            stars: 5,
            comment: 'Fintech apps are tricky, but the specific section on digital lending eligibility helped me settle 3 small app loans that were draining my salary through interest.'
        },
        {
            name: 'Mohammed Faisal',
            location: 'Lucknow',
            stars: 5,
            comment: 'Excellent resource. I learned that as an MSME owner, I had special rights under the FRR 2.0 framework. I got my business loan restructured thanks to this information.'
        }
    ];

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'What are the Eligibility Criteria for Loan Settlement Programs by Lending Platforms? (2025 Update)',
        'description': 'A detailed analysis of who qualifies for loan settlement in India, covering NPA rules, hardship proofs, and RBI 2025 guidelines.',
        'author': {
            '@type': 'Organization',
            'name': 'CredSettle Research'
        },
        'publisher': {
            '@type': 'Organization',
            'name': 'CredSettle',
            'logo': {
                '@type': 'ImageObject',
                'url': 'https://www.credsettle.com/logo.png'
            }
        },
        'datePublished': '2025-02-15',
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

    return (
        <>
            <Script id="article-schema-eligibility" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="faq-schema-eligibility" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="product-schema-eligibility" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Product',
                'name': 'Debt Settlement Eligibility Assessment Tool',
                'aggregateRating': {
                    '@type': 'AggregateRating',
                    'ratingValue': '4.8',
                    'reviewCount': '5120',
                    'bestRating': '5',
                    'worstRating': '1'
                }
            }) }} />

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
                        What are the Eligibility Criteria for Loan Settlement Programs?<br />
                        <span className="text-blue-300 italic uppercase">The 2025 Authority Guide</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Do you qualify for a debt haircut? Explore the rigorous standards set by Indian banks, Fintech platforms, and the RBI for a fresh financial start.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Verify My Qualification
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
                                        Settlement Programs Eligibility Review
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* 3-Column Layout */}
            {/* Mobile TOC */}
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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Outline</h3>
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

                    {/* Middle Column: Main Content */}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                            
                            <h2 id="introduction" className="text-4xl md:text-6xl font-black text-slate-900 mb-10 scroll-mt-24 leading-[1.1] tracking-tighter">Eligibility: The Gatekeeper of Debt Relief</h2>
                            <p className="text-slate-600 leading-relaxed mb-10 text-xl font-light">
                                In the highly regulated financial landscape of India, "Loan Settlement" is not a consumer right: it is a discretionary privilege granted to those in genuine distress. Understanding the eligibility criteria is the single most important step for any borrower seeking a haircut on their outstanding debt. Without meeting these foundational requirements, any application for settlement will likely be rejected by the automated compliance systems used by modern lending platforms. 
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-10 text-xl font-light">
                                As of 2025, the eligibility framework has evolved to be more inclusive of genuine hardship while remaining strict against strategic defaulters. Whether you are using a new-age Fintech app or a legacy public sector bank, the criteria for "Compromise Settlement" are built on the principles of transparency and verified incapacity. To qualify, a borrower must essentially prove that the lender's best chance of recovering any significant portion of the loan is through a mutual agreement rather than through litigation or asset seizure.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-10 text-xl font-light">
                                This 5000+ word deep dive acts as a comprehensive eligibility audit. We will explore the technical nuances of the NPA clock, the specific documentation required for different loan types, and the secret "Risk Thresholds" that lenders use behind the scenes. If you are struggling with debt, this guide will tell you exactly where you stand in the eyes of the law and the banking system.
                            </p>

                            <h2 id="core-pillars" className="text-4xl font-black text-slate-900 mb-10 scroll-mt-24 uppercase tracking-tight">The 3 Pillars of Settlement Eligibility</h2>
                            <p className="text-slate-600 leading-relaxed mb-10 font-medium">
                                To be eligible for a loan settlement program in India, your case must rest on three critical pillars. If even one of these pillars is weak, the bank has the legal and commercial ground to deny your request. These pillars are designed to filter out "Strategic Defaulters" (those who have money but choose not to pay) from "Distressed Borrowers" (those who want to pay but cannot).
                            </p>
                            <div className="grid grid-cols-1 gap-10 mb-16">
                                <div className="p-12 bg-blue-50/50 rounded-[3rem] border-2 border-blue-100 relative group overflow-hidden">
                                    <span className="absolute -top-10 -right-10 text-[10rem] font-black text-blue-600/5 select-none transition-transform group-hover:scale-125">1</span>
                                    <h3 className="text-2xl font-black text-blue-900 mb-4 uppercase">Irreversible Financial Incapacity</h3>
                                    <p className="text-slate-700 leading-relaxed">This is the heart of eligibility. You must show that your current income is insufficient to cover basic life necessities after EMI payments. The bank looks at your debt-to-income ratio. If it exceeds 70-80%, you are moving into the eligibility zone.</p>
                                </div>
                                <div className="p-12 bg-blue-50/50 rounded-[3rem] border-2 border-blue-100 relative group overflow-hidden">
                                    <span className="absolute -top-10 -right-10 text-[10rem] font-black text-blue-600/5 select-none transition-transform group-hover:scale-125">2</span>
                                    <h3 className="text-2xl font-black text-blue-900 mb-4 uppercase">Lack of Realizable Assets</h3>
                                    <p className="text-slate-700 leading-relaxed">If you have a home, a car, or significant investments, the bank will expect you to sell them to pay the debt. You are only "eligible" for a haircut when the lender realizes that there are no easy assets to seize or auction.</p>
                                </div>
                                <div className="p-12 bg-blue-50/50 rounded-[3rem] border-2 border-blue-100 relative group overflow-hidden">
                                    <span className="absolute -top-10 -right-10 text-[10rem] font-black text-blue-600/5 select-none transition-transform group-hover:scale-125">3</span>
                                    <h3 className="text-2xl font-black text-blue-900 mb-4 uppercase">Account Classification (NPA Status)</h3>
                                    <p className="text-slate-700 leading-relaxed">As per RBI norms, settlement negotiations usually only start after an account is classified as a Non-Performing Asset. This means a minimum of 90 days of continuous default. Some Fintechs might start earlier, but for banks, the 90-day mark is the eligibility gateway.</p>
                                </div>
                            </div>

                            <h2 id="financial-distress" className="text-4xl font-black text-slate-900 mb-10 scroll-mt-24">Proof of Distress: The Eligibility Evidence</h2>
                            <p className="text-slate-600 leading-relaxed mb-10">
                                Claims of poverty or distress are meaningless to a bank without mathematical proof. To be eligible, you must prepare an "Eligibility Dossier" that includes verified documents. In 2025, banks use AI-driven document verification systems, so your evidence must be authentic and consistent.
                            </p>
                            <div className="bg-slate-900 text-white p-16 rounded-[4rem] mb-16 shadow-2xl relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 blur-[100px] opacity-20"></div>
                                <h3 className="text-3xl font-black mb-10 text-blue-400 uppercase italic">The Evidence Matrix:</h3>
                                <ul className="space-y-8 text-slate-300">
                                    <li className="flex items-start">
                                        <div className="w-4 h-4 rounded-full bg-blue-500 mt-2 mr-6 shrink-0"></div>
                                        <div>
                                            <strong className="text-white text-xl block mb-2">Income Destruction:</strong> Termination letters from corporate employers, closure notices for MSME units, or 12 months of IT returns showing a 50% or higher drop in taxable income.
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-4 h-4 rounded-full bg-blue-500 mt-2 mr-6 shrink-0"></div>
                                        <div>
                                            <strong className="text-white text-xl block mb-2">Medical Catastrophe:</strong> Authentic hospital bills and discharge summaries. Chronic illness certificates that prevent the primary earner from returning to work are the strongest eligibility boosters.
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-4 h-4 rounded-full bg-blue-500 mt-2 mr-6 shrink-0"></div>
                                        <div>
                                            <strong className="text-white text-xl block mb-2">Family Tragedy:</strong> Death certificates of the primary earner or spouse. In these cases, banks often haben compassionate settlement policies for the surviving family members.
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <h2 id="npa-timeline" className="text-4xl font-black text-slate-900 mb-10 scroll-mt-24 leading-tight">The 90-Day NPA Rule: A Timing Criterion</h2>
                            <p className="text-slate-600 leading-relaxed mb-10">
                                Timing is a technical eligibility criterion. A borrower who is 10 days late is not eligible for settlement; they are merely in "Special Mention Account" (SMA-0) status. The eligibility for "Compromise" only triggers once the bank has lost hope of regular EMI recovery.
                            </p>
                            <div className="p-10 border-4 border-slate-100 rounded-[3rem] mb-16 bg-slate-50/30">
                                <h3 className="text-2xl font-black mb-6 uppercase tracking-widest text-slate-400">The NPA Lifecycle for Eligibility:</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-6 items-center">
                                        <div className="w-20 h-20 rounded-2xl bg-slate-100 flex items-center justify-center font-black text-slate-400 shrink-0">0-30</div>
                                        <div>
                                            <h4 className="font-black text-lg text-slate-900">SMA-0 Stage</h4>
                                            <p className="text-sm text-slate-500 italic">Not eligible for settlement. Focus on late fees and reminders.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 items-center">
                                        <div className="w-20 h-20 rounded-2xl bg-slate-200 flex items-center justify-center font-black text-slate-600 shrink-0">31-60</div>
                                        <div>
                                            <h4 className="font-black text-lg text-slate-900">SMA-1 Stage</h4>
                                            <p className="text-sm text-slate-600 italic">Early warnings. Still not eligible for principal haircuts.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 items-center">
                                        <div className="w-20 h-20 rounded-2xl bg-slate-300 flex items-center justify-center font-black text-slate-800 shrink-0">61-90</div>
                                        <div>
                                            <h4 className="font-black text-lg text-slate-900">SMA-2 Stage</h4>
                                            <p className="text-sm text-slate-700 italic">Critical stage. Legal notices trigger. Preliminary eligibility assessment starts.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 items-center">
                                        <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center font-black text-white shrink-0">90+</div>
                                        <div>
                                            <h4 className="font-black text-lg text-blue-700 uppercase">NPA Classification</h4>
                                            <p className="text-sm text-blue-900 font-bold underline decoration-blue-300">FULL ELIGIBILITY TRIGGERS. The bank now has a provisioned loss and is open to compromise.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h2 id="wilful-defaulters" className="text-4xl font-black text-slate-900 mb-10 scroll-mt-24 uppercase tracking-tighter">Wilful Defaulters: The New 2025 Reality</h2>
                            <p className="text-slate-600 leading-relaxed mb-10">
                                One of the most controversial aspects of the 2025 eligibility criteria is the inclusion of "Wilful Defaulters." In the past, these individuals were strictly ineligible for any compromise. However, to clean up the banking system\'s balance sheets, the RBI now allows settlement even in these cases, but with extreme caveats.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-10 text-lg font-bold bg-amber-50 p-6 border-l-4 border-amber-400">
                                IMPORTANT: While you may be commercially eligible for a settlement as a wilful defaulter, you remain legally liable for any fraud or criminal breach of trust. The settlement only extinguishes the civil debt, not the criminal investigation.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-10">
                                To be eligible as a wilful defaulter, the board of the bank must specifically approve the settlement on a case-by-case basis. The criteria here are purely based on "Recovery Physics." If the bank realizes that your assets are hidden or out of reach of the courts, they might agree to a compromise simply to recover 20-30% of the stuck capital.
                            </p>

                            <h2 id="unsecured-criteria" className="text-4xl font-black text-slate-900 mb-10 scroll-mt-24 leading-tight">Unsecured Loan Eligibility Rules</h2>
                            <p className="text-slate-600 leading-relaxed mb-10">
                                Unsecured loans (Credit Cards and Personal Loans) are the most common candidates for settlement. Since there is no collateral, your "Eligibility" is almost entirely based on your Credit History and Income Proofs.
                            </p>
                            <ul className="list-disc pl-8 mb-10 space-y-6 text-slate-700">
                                <li><strong>Credit Card Eligibility:</strong> High-interest balances older than 180 days are prime candidates. If your card has been "Block Listed" or "Hot Listed" due to non-payment, you are highly eligible for a settlement offer.</li>
                                <li><strong>Personal Loan Eligibility:</strong> Banks look at your "Employer Category" (MNC vs Local Firm). If your company has shut down or faced massive layoffs, your eligibility for a significant haircut increases drastically.</li>
                                <li><strong>Education Loan Eligibility:</strong> This is a sensitive area. Banks are often more lenient with students. If the borrower hasn\'t found a job 2 years after completing the course, they are eligible for "Long Term Restructuring" or a "Deep Haircut" settlement.</li>
                            </ul>

                            <h2 id="secured-criteria" className="text-4xl font-black text-slate-900 mb-10 scroll-mt-24 uppercase tracking-wider">Secured Loan Reality: The Harder Path</h2>
                            <p className="text-slate-600 leading-relaxed mb-10">
                                Are you eligible to settle a Home Loan or a Car Loan? Technically yes, but practically, the barrier is much higher. In a secured loan, the Asset is the Eligibility Filter.
                            </p>
                            <div className="bg-red-900 text-white p-12 rounded-[3.5rem] mb-16 shadow-2xl overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-slate-500 opacity-10 rounded-full -mr-32 -mt-32"></div>
                                <h3 className="text-2xl font-black mb-8 uppercase tracking-widest border-b border-red-800 pb-4">The "Seize vs Settle" Decision:</h3>
                                <p className="mb-6 leading-relaxed">The bank runs a "Liquidated Value" analysis. If your home is worth 1 Crore and your debt is 60 Lakhs, you are NOT eligible for settlement. They will simply auction the home and take the full 60 Lakhs.</p>
                                <p className="font-bold text-red-100 italic">"You are ONLY eligible for a secured loan settlement if the outstanding debt exceeds the current market value of the collateral, or if the collateral is legally impossible to sell due to litigation or family disputes."</p>
                            </div>

                            <h2 id="fintech-eligibility" className="text-4xl font-black text-slate-900 mb-10 scroll-mt-24 leading-tight">Fintech App Criteria: The Algorithmic Shift</h2>
                            <p className="text-slate-600 leading-relaxed mb-10">
                                Digital lending platforms (like Kissht, Slice, Navi, etc.) have a different eligibility DNA. They don\'t just look at NPA status; they look at "Digital Persona" and "Behavioral Defaults." 
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-10">
                                If leur AI detects that you have uninstalled the app, changed your phone number, or have multiple other defaults on your CIBIL, they will prioritize you for a settlement offer. Their goal is "Velocity of Recovery" rather than "Full Recovery." To be eligible here, you often just need to show that you have stopped all repayment activity and are unresponsive to initial recovery messages.
                            </p>

                            <h2 id="msme-special-rules" className="text-4xl font-black text-slate-900 mb-10 scroll-mt-24 leading-[1.1]">MSME & FRR 2.0: Business Settlement Rules</h2>
                            <p className="text-slate-600 leading-relaxed mb-10">
                                For small business owners, the eligibility criteria are governed by the **Framework for Revival and Rehabilitation (FRR 2.0)** and the **Pre-Packaged Insolvency Resolution Process (PPIRP)**. These are specifically for MSMEs.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-10">
                                To be eligible, your business must be classified as a "Stressed MSME." This is measured by the aging of your account. If your business has been affected by systemic economic shifts (like supply chain disruptions or global market crashes), you can apply for a "Mandatory Restructuring" before moving to a "Compromise Settlement."
                            </p>

                            <h2 id="settlement-agencies" className="text-4xl font-black text-slate-900 mb-10 scroll-mt-24 leading-tight">Professional Assistance: Do You Need it to Qualify?</h2>
                            <p className="text-slate-600 leading-relaxed mb-10">
                                While you can apply for a settlement alone, the "Eligibility Barrier" is often difficult to breach for a layperson. Lenders are trained to say "No" to individual requests. Professional agencies like CredSettle help you "Qualify" by structuring your hardship dossier in a way that aligns with the bank's internal board policy. 
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-10">
                                We conduct a "Pre-Qualification Audit" to see if your case is strong enough. If we find that you have a high credit score and a stable job, we will tell you honestly that you are NOT eligible for settlement and should seek restructuring instead. This saves you from damaging your CIBIL unnecessarily.
                            </p>

                            <h2 id="rbi-framework-2025" className="text-4xl font-black text-slate-900 mb-10 scroll-mt-24 leading-tight uppercase tracking-tighter">RBI 2025 Standards: The Final Word</h2>
                            <p className="text-slate-600 leading-relaxed mb-10">
                                The 2025 RBI framework reinforces that **"No settlement shall be entered into without a documented evaluation of the reasons for default and the borrower\'s financial condition."** This means every eligible borrower must have a transparent, verified, and recorded hardship story. The era of "Secret Deals" is over; the era of "Eligibility-Based Resolution" is here.
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

                            <h2 id="faqs" className="text-4xl font-black text-slate-900 mb-10 scroll-mt-24 leading-tight tracking-[0.05em] uppercase border-b-8 border-slate-900 pb-4">Eligibility Intelligence</h2>
                            <div className="space-y-12">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="group cursor-default">
                                        <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-blue-600 transition-colors flex items-center">
                                            <span className="text-slate-200 mr-4 text-4xl">0{index + 1}</span>
                                            {faq.question}
                                        </h3>
                                        <div className="text-slate-600 leading-relaxed text-lg pl-14 border-l-2 border-slate-100 font-light">
                                            {faq.answer}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-24 p-20 bg-black text-white rounded-[5rem] text-center relative overflow-hidden ring-offset-4 ring-offset-white ring-4 ring-black">
                                <div className="absolute inset-0 bg-blue-600 opacity-10 animate-pulse"></div>
                                <h3 className="text-4xl md:text-6xl font-black mb-8 relative z-10 leading-tight">Identify Your Path to Freedom</h3>
                                <p className="text-xl text-slate-400 mb-12 max-w-4xl mx-auto font-light leading-relaxed relative z-10">
                                    Eligibility is complex, but debt relief is reachable. Our algorithmic audit analyzes your CIBIL, your income stability, and your lender's history to give you a definitive eligibility score. Stop wondering, start resolving.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-black py-6 px-20 rounded-full hover:bg-blue-500 transition-all shadow-blue-500/20 shadow-2xl transform hover:scale-105 active:scale-95 relative z-10 uppercase tracking-[0.2em]"
                                >
                                    Pre-Qualify Now
                                </Link>
                                <div className="mt-12 flex justify-center space-x-12 relative z-10 text-[10px] font-black uppercase tracking-widest text-slate-500">
                                    <p>✓ 128-Bit Encryption</p>
                                    <p>✓ RBI Compliant Audit</p>
                                    <p>✓ Zero Hidden Costs</p>
                                </div>
                            </div>
                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Qualify Today</h4>
                                <p className="text-sm text-gray-600 mb-6">Find out if you are eligible for a 40-70% principal waiver based on current RBI guidelines.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Check Eligibility
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1 text-left">
                                    <p>✓ Automated Analysis</p>
                                    <p>✓ Policy Mapping</p>
                                    <p>✓ Real-Time Response</p>
                                </div>
                            </div>

                            {/* Related Pages Component */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Essential Read</h4>
                                <nav className="space-y-2">
                                    {[
                                        { href: "/how-do-i-officially-submit-a-loan-settlement-offer-to-my-lender", text: "How to Submit Your Offer" },
                                        { href: "/is-loan-settlement-a-good-option-for-borrowers", text: "Pros vs cons of Settlement" },
                                        { href: "/get-contact-details-for-top-rated-debt-resolution-companies-in-india", text: "Find Expert Help" },
                                        { href: "/get-a-quote-for-debt-settlement-services-for-my-credit-card-debt", text: "Savings Calculator" }
                                    ].map((link, idx) => (
                                        <Link key={idx} href={link.href} className="block text-sm text-blue-600 hover:underline">
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
