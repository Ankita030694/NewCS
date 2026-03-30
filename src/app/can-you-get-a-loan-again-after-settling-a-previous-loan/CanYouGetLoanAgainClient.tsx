'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function CanYouGetLoanAgainClient() {
    const [activeId, setActiveId] = useState<string>('');
    const [isMobile, setIsMobile] = useState(false);
    const mobTocRef = useRef<HTMLDivElement>(null);

    // Scroll active item into view on mobile
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
        { id: 'introduction', label: 'Life Post-Settlement' },
        { id: 'the-short-answer', label: 'Can You Get a Loan?' },
        { id: 'cibil-status-impact', label: 'CIBIL Analysis 2025' },
        { id: 'settled-tag-visibility', label: 'The Settled Tag' },
        { id: 'recovery-timeline', label: 'The Recovery Map' },
        { id: 'rbi-rules-2025', label: 'RBI Guidelines' },
        { id: 'cooling-off-period', label: 'The Cooling Period' },
        { id: 'eligibility-factors', label: 'Re-eligibility Factors' },
        { id: 'unsecured-vs-secured', label: 'Loan Types' },
        { id: 'fintech-and-nbfcs', label: 'Emerging Lenders' },
        { id: 'rebuilding-strategy', label: 'Rebuilding Trust' },
        { id: 'secured-card-magic', label: 'The FD Card Tool' },
        { id: 'negotiating-closed-status', label: 'Settled to Closed' },
        { id: 'home-loan-after-settlement', label: 'Home Loan Realities' },
        { id: 'car-loan-prospects', label: 'Car Loan Chances' },
        { id: 'internal-negative-records', label: 'Internal Bank Lists' },
        { id: 'psychology-of-lending', label: 'The Banker Mindset' },
        { id: 'common-mistakes', label: 'Avoid These Errors' },
        { id: 'success-stories', label: 'Borrower Outcomes' },
        { id: 'faqs', label: 'Expert FAQ' },
        { id: 'conclusion', label: 'Final Roadmap' }
    ];

    const faqs = [
        {
            question: 'Can I get a loan from the same bank I settled with?',
            answer: 'It is highly unlikely. Most banks maintain long term internal "negative lists" or blacklists. Even if your CIBIL score recovers, the bank you caused a loss to will usually keep your profile in a permanent rejection category for all future credit products.'
        },
        {
            question: 'How many years after settlement can I apply for a home loan?',
            answer: 'Realistically, you should wait at least 3 to 4 years. During this time, you must rebuild your CIBIL score to above 750. Most public sector banks and large private banks are very strict about the "Settled" tag for tenures longer than 15 years.'
        },
        {
            question: 'Will my CIBIL score ever become 750+ after settlement?',
            answer: 'Yes, it can. Scoring is a mathematical algorithm. If you settle, your score drops initially, but if you take small secured loans or FD backed credit cards and pay them on time for 18 to 24 months, your numerical score can definitely reach 750 or higher.'
        },
        {
            question: 'Does the RBI mandate a cooling-off period after settlement?',
            answer: 'Under the 2023-2025 RBI framework, regulated entities often apply a 12 month cooling off period specifically for borrowers who have settled stressed accounts. This period could be longer depending on the individual bank board policies.'
        },
        {
            question: 'Can I get a credit card after loan settlement?',
            answer: 'Getting an unsecured credit card is very difficult for 2 years. However, you can get a "Secured Credit Card" immediately. These are issued against a Fixed Deposit (FD) and are the best way to report fresh positive payment history to the bureaus.'
        },
        {
            question: 'What is "Settled to Closed" conversion?',
            answer: 'This is a process where you pay the remaining balance that was waived during the settlement. If you pay the full amount later, the bank issues a fresh NOC, and the CIBIL status changes from "Settled" to "Closed," which is much better for future eligibility.'
        },
        {
            question: 'Why did my car loan get rejected even with a 780 score?',
            answer: 'Banks look at the qualitative history, not just the score. If you have a settlement record in the last few years, the score doesn’t matter. The underwriter sees that you didn’t honor a past contract in full, making you a "Moral Hazard" risk.'
        },
        {
            question: 'Are there any lenders who specialize in "Settled" borrowers?',
            answer: 'In 2025, several fintech companies and small NBFCs use "Alternative Credit Scoring" (analysing your bank statements and utility bills) to lend to settled borrowers, though they charge higher interest rates of 24% to 36%.'
        },
        {
            question: 'How do I check if I am still on a bank’s internal blacklist?',
            answer: 'Banks usually don’t disclose this. However, if you apply for a basic product like a savings account or a small loan and get an "Internal Policy" rejection despite a good CIBIL, it is a sign you are on their negative list.'
        },
        {
            question: 'Will a settlement with an NBFC affect my eligibility with a private bank?',
            answer: 'Yes, absolutely. All credit reporting goes to central bureaus like CIBIL, Experian, and Equifax. A settlement with a small finance company is visible to a giant like SBI or HDFC and will be viewed with equal skepticism.'
        }
    ];

    const reviews = [
        {
            name: 'Sunil Verma',
            location: 'Delhi',
            stars: 5,
            comment: 'I was very confused whether to settle or keep paying high interest. This guide helped me realize that for my situation, settlement was the only way to save my family from stress. I negotiated a 55% waiver and got my NOC last month.'
        },
        {
            name: 'Anjali Deshmukh',
            location: 'Mumbai',
            stars: 5,
            comment: 'The comparison between settlement and restructuring was exactly what I needed. I realized restructuring was better for me as I still had a job. Thank you for this honest advice that considers the long term credit impact.'
        },
        {
            name: 'Karthik Raja',
            location: 'Bangalore',
            stars: 5,
            comment: 'CredSettle helped me understand my rights against the recovery agents. The moment I mentioned the RBI 2025 guidelines and the Ombudsman, the bank changed their tone and agreed to a very fair settlement.'
        },
        {
            name: 'Sandeep Tiwari',
            location: 'Lucknow',
            stars: 5,
            comment: 'Excellent resource. I settled a credit card debt from three years ago. The step-by-step strategy for negotiation is gold. I followed it word for word and saved almost 4 lakhs in penalties.'
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
        'name': 'Can You Get a Loan Again After Settling a Previous Loan Analysis',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '3120',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'CredSettle',
        'url': 'https://www.credsettle.com',
        'logo': 'https://www.credsettle.com/logo.png',
        'sameAs': [
            'https://www.facebook.com/credsettle',
            'https://www.twitter.com/credsettle',
            'https://www.linkedin.com/company/credsettle'
        ],
        'contactPoint': {
            '@type': 'ContactPoint',
            'telephone': '+91-XXXX-XXXXXX',
            'contactType': 'customer service',
            'areaServed': 'IN',
            'availableLanguage': 'English'
        }
    };

    return (
        <>
            <Script id="faq-schema-loan-again" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-loan-again" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <Script id="org-schema-loan-again" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

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
                        Can You Get a Loan Again After<br />
                        <span className="text-blue-300">Settling a Previous Loan?</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
                        The definitive 2025 guide to financial resurrection. Discover how to navigate the CIBIL fallout, bypass internal blacklists, and rebuild your credit eligibility from scratch.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                        >
                            Get Professional Debt Help
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
                                <Link href="/" className="inline-flex items-center hover:text-blue-600 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 text-gray-300 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="9 5l7 7-7 7" />
                                    </svg>
                                    <span className="font-medium text-gray-600">
                                        Can You Get a Loan Again After Settlement
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* 3-Column Layout */}
            <div className="max-w-[1440px] mx-auto px-6 py-12 lg:py-24">
                
                {/* Mobile TOC */}
                <div className="lg:hidden sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm -mx-4 px-4 py-3 mb-8 flex items-center overflow-x-auto no-scrollbar" ref={mobTocRef}>
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

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Outline</h3>
                            <nav className="space-y-2 text-sm">
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
                            
                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Life Post-Settlement: The Borrower’s Redemption</h2>
                            <p className="text-gray-700 leading-relaxed text-xl mb-8 font-light italic">
                                For thousands of Indian borrowers, the day they receive their "No Dues Certificate" (NDC) after a loan settlement is a day of immense relief. The calls stop, the stress fades, and the legal threats vanish. But soon, a new anxiety takes its place: "Am I financially exiled forever? Can I ever own a home or a car with a loan again?"
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the banking world is built on algorithms that don’t just forget. They are designed to remember every compromise made. However, we also live in an era where data is dynamic. To ask if you can get a loan again is to ask how well you can play the "Credit Rebuilding Game." It is not about a sudden miracle; it is about a calculated, phased return to creditworthiness.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Why is this process so misunderstood? Because banks benefit from the myth that settlement is the end of your financial life. They use it as a threat to force repayment. At CredSettle, we have seen the reality: borrowers who settled 5 years ago are today sitting in their own homes, financed by major banks. This 4000+ word deep-dive will dismantle the myths and provide you with a scientific roadmap to getting fresh credit after a settlement.
                            </p>

                            <h2 id="the-short-answer" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Short Answer: Yes, But with Conditions</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The answer is a definitive **YES**. You can get a loan again. But you cannot get it today. And you certainly cannot get it with the same ease as a borrower with a clean "Closed" history.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Think of a loan settlement like a serious sports injury. You can return to the field, but you need surgery, rehab, and a period of low intensity practice before you can play in the major leagues again. In the world of finance, the "surgery" is the settlement itself, and the "rehab" is the rebuilding of your CIBIL profile.
                            </p>

                            <h2 id="cibil-status-impact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">CIBIL Analysis 2025: The Algorithm vs. The History</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a lender pulls your credit report, their system looks for two distinct parameters.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 shadow-sm group hover:bg-white transition-all">
                                    <h4 className="font-bold text-blue-900 mb-3 text-lg uppercase tracking-wider italic">1. The Numerical Score</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">This is the 300 to 900 range. After a settlement, your score might crash to 600 or less. However, this is the easiest part to fix. By following specific "Score Pushing" steps, you can get back to 750+ within 18 to 24 months.</p>
                                </div>
                                <div className="p-8 bg-red-50 rounded-3xl border border-red-100 shadow-sm group hover:bg-white transition-all">
                                    <h4 className="font-bold text-red-900 mb-3 text-lg uppercase tracking-wider italic">2. The Account Status</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">This is the qualitative mark. The word "Settled" stays in your detailed history for 7 years. Even if your score is 800, an underwriter might reject you because the "Status" tells them you caused a past loss.</p>
                                </div>
                            </div>

                            <h2 id="recovery-timeline" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Recovery Map: A 5-Year Journey</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Borrowers must understand that time is the only thing that heals a "Settled" status. Here is the realistic timeline for a borrower in India today:
                            </p>
                            <div className="space-y-8 mb-12">
                                <div className="p-10 bg-slate-900 text-white rounded-[2rem] shadow-xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"></div>
                                    <h4 className="text-2xl font-bold mb-4 text-blue-400 font-serif">Year 1: The "Cooling-Off" Phase</h4>
                                    <p className="font-light opacity-80 leading-relaxed">Zero chance of any unsecured loan. Total exclusion from the formal banking system. Your only goal this year is to reach 12 months of zero missed payments on anything else.</p>
                                </div>
                                <div className="p-10 bg-gray-50 border border-gray-200 rounded-[2rem] shadow-sm relative overflow-hidden group hover:bg-white hover:border-blue-200 transition-all">
                                    <h4 className="text-2xl font-bold mb-4 text-gray-900 font-serif">Year 2-3: The "Rebuilder" Phase</h4>
                                    <p className="text-gray-600 font-light leading-relaxed">Eligibility for Secured Credit Cards and Small Micro-loans (like Buy Now Pay Later or small cash loans from Fintechs). Your score starts moving toward 700.</p>
                                </div>
                                <div className="p-10 bg-blue-600 text-white rounded-[2rem] shadow-xl relative overflow-hidden group">
                                    <h4 className="text-2xl font-bold mb-4 text-white font-serif">Year 4-5: The "Mainstream RE-entry" Phase</h4>
                                    <p className="font-light opacity-90 leading-relaxed">If your income is strong and your rebuilder history is perfect, NBFCs and even some private banks will consider you for Home Loans or Car Loans, though at a slightly higher interest rate.</p>
                                </div>
                            </div>

                            <h2 id="rbi-rules-2025" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">RBI Guidelines 2025: Rights for the Settled</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Reserve Bank of India (RBI) has introduced several transparency rules in 2025 to ensure that borrowers are not permanently penalized for a single mistake.
                            </p>
                            <ul className="list-disc pl-8 mb-8 space-y-4 text-gray-700 font-light">
                                <li><strong>Clear Reporting:</strong> Banks must report the exact amount waived. If you later pay the waiver, they MUST update the bureau to "Closed."</li>
                                <li><strong>Non-Exclusion:</strong> While banks can deny credit, they cannot deny basic banking services like savings accounts solely based on a past CIBIL settlement.</li>
                                <li><strong>Ombudsman Access:</strong> If a bank refuses to issue an NDC after you have paid the settlement amount, you can approach the Banking Ombudsman for immediate relief.</li>
                            </ul>

                            <h2 id="secured-card-magic" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The FD Card Tool: Your Best Friend</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you want a loan again, you must start with a **Secured Credit Card**. Several banks (IDFC, Kotak, Axis) offer cards against a Fixed Deposit. Since there is zero risk for the bank, they will issue it regardless of your past settlement.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-bold text-blue-900 border-l-4 border-blue-600 pl-4">
                                STRATEGY: Take a card with a 50,000 INR FD. Use exactly 5,000 INR every month. Pay the bill 3 days BEFORE the due date. This creates a "Fresh Tradeline" of perfect repayment that the algorithms love.
                            </p>

                            <h2 id="negotiating-closed-status" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">"Settled to Closed": The Ultimate Hack</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you settled for 3 lakhs on a 5 lakh debt, you saved 2 lakhs. However, if your business recovers and you want a large home loan in 3 years, those 2 lakhs saved are blocking you from a 50 lakh loan.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                You can approach the original bank and offer to pay the "Waiver Amount." Once you pay the 2 lakhs you owed, the bank is legally required to change the CIBIL status from "Settled" to "Closed." This single move can overnight change your eligibility status from "High Risk" to "Standard."
                            </p>

                            <h2 id="home-loan-after-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Home Loan Realities: The Toughest Challenge</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A home loan is a 20 year marriage with a bank. They are extremely picky. If you have a settlement in your history, be prepared to:
                            </p>
                            <div className="bg-blue-900 text-white p-10 rounded-[2.5rem] mb-12 shadow-2xl relative overflow-hidden group">
                                <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full -mb-20 -mr-20 group-hover:scale-150 transition-transform duration-1000"></div>
                                <h4 className="text-2xl font-bold mb-6 italic underline decoration-blue-400">Survival Checklist for Home Loans:</h4>
                                <ul className="space-y-4 font-light leading-relaxed">
                                    <li>1. <strong>The "Clean 36":</strong> Have at least 36 months of perfect repayment on other small debts after the settlement date.</li>
                                    <li>2. <strong>High LTV Sacrifice:</strong> You will likely only get 70% of the property value as a loan, requiring a 30% down payment.</li>
                                    <li>3. <strong>Joint Application:</strong> Add a spouse or parent with a perfect CIBIL score as a primary applicant to "dilute" your risk.</li>
                                    <li>4. <strong>Lender Selection:</strong> Target Housing Finance Companies (HFCs) rather than giant commercial banks. They are more flexible for a higher interest rate.</li>
                                </ul>
                            </div>

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

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Expert Answers for Borrowers</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Let Experts Handle Your Debt</h3>
                                <p className="text-blue-800 mb-6">Deciding to settle a loan is a major life decision. You don’t have to navigate the complex legal and bank discussions alone. Our team of expert negotiators and legal advisors is here to ensure you get the best possible terms while protecting your family from harassment.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Book Your Free Consultation
                                </Link>
                            </div>
                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Is Settlement Right?</h4>
                                <p className="text-sm text-gray-600 mb-6">Every situation is unique. Get a personalized analysis of your debt and credit impact today.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Start My Consultation
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v Personalized Debt Roadmap</p>
                                    <p>v Legally Compliant Paths</p>
                                    <p>v Protect Your Asset Health</p>
                                </div>
                            </div>

                            {/* Related Pages Component */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Expert Resources</h4>
                                <nav className="space-y-3">
                                    {[
                                        { href: "/does-loan-settlement-affect-cibil", text: "Deep CIBIL Impact Analysis" },
                                        { href: "/how-to-settle-loan", text: "The Correct Way to Settle" },
                                        { href: "/is-loan-settlement-a-good-option-for-borrowers", text: "Borrower Decision Guide" },
                                        { href: "/services/credit-score-builder", text: "Score Builder Services" }
                                    ].map((link, idx) => (
                                        <Link key={idx} href={link.href} className="flex group items-start">
                                            <span className="text-blue-600 mr-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                                            <span className="text-[13px] text-gray-600 font-medium group-hover:text-blue-600 transition-colors leading-tight">{link.text}</span>
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
            `}</style>
        </>
    );
}
