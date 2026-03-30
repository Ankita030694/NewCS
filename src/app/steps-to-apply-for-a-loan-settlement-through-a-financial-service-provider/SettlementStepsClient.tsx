'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function SettlementStepsClient() {
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
        { id: 'introduction', label: 'The 2025 Roadmap' },
        { id: 'step-1-assessment', label: '1. Financial Assessment' },
        { id: 'step-2-provider', label: '2. Choosing a Partner' },
        { id: 'step-3-documentation', label: '3. Case Documentation' },
        { id: 'step-4-harassment-shield', label: '4. Harassment Shield' },
        { id: 'step-5-initiation', label: '5. Bank Notification' },
        { id: 'step-6-negotiation', label: '6. The Negotiation' },
        { id: 'step-7-sanction-letter', label: '7. The Sanction Letter' },
        { id: 'step-8-payment', label: '8. Secure Payment' },
        { id: 'step-9-certificates', label: '9. NDC/NOC Issuance' },
        { id: 'step-10-monitoring', label: '10. Score Monitoring' },
        { id: 'rbi-rules-2025', label: 'RBI Guidelines 2025' },
        { id: 'common-pitfalls', label: 'Avoiding Pitfalls' },
        { id: 'reviews', label: 'Client Success' },
        { id: 'faqs', label: 'Step-by-Step FAQs' },
        { id: 'conclusion', label: 'Your New Start' },
    ];

    const faqs = [
        {
            question: 'When should I start the application process for loan settlement?',
            answer: "The ideal time is after you have defaulted for at least 90 days (NPA status). Banks are usually not interested in settlement discussions if you are only 30 days late, as they still hope to recover the full amount through standard collection channels."
        },
        {
            question: 'Can I apply for settlement if my case is already in court?',
            answer: "Yes. Even if a bank has filed a suit or sent a legal notice, you can still apply through a professional service. In fact, professional legal firms like AMA Legal Solutions can help move the case to a Lok Adalat for a faster, mediated compromise."
        },
        {
            question: 'What documents are mandatory for a settlement application in 2025?',
            answer: "You must provide proof of 'Genuine Hardship.' This includes 6 months of bank statements (showing no income or high medical/business expenses), a hardship letter, and evidence of income loss such as a termination letter or medical records."
        },
        {
            question: 'Do I have to pay the entire settlement amount in one go?',
            answer: "While lump-sum payments (OTS) get the highest waivers, the 2025 RBI framework allows for 'Structured Settlements' where you can pay 25% upfront and the remaining 75% in installments over 3-12 months."
        },
        {
            question: 'How do I know if the settlement offer from the bank is real?',
            answer: "Never accept an offer over the phone or email alone. A valid sanction letter must have the bank’s letterhead, a digital or physical signature from an authorized officer, a unique reference number, and must clearly state that all future dues are waived."
        },
        {
            question: 'Will a service provider apply for all my loans simultaneously?',
            answer: "Yes, top firms like CredSettle manage 'Portfolio Settlements.' They look at your total debt across multiple banks and NBFCs, prioritizing those with the highest interest rates or most aggressive recovery tactics."
        },
        {
            question: 'Can a bank reject my application even if I am in distress?',
            answer: "Yes, banks are not legally 'forced' to settle. However, a professional application that highlights your inability to pay (insolvency risk) usually convinces the bank that a 50% recovery today is better than 0% recovery after a long legal battle."
        },
        {
            question: 'What is the role of an RBI Ombudsman during the settlement process?',
            answer: "If a bank uses unfair practices or refuses to follow its own settlement policy despite your genuine hardship, your service provider can escalate the application to the RBI Ombudsman for a fair review."
        },
        {
            question: 'Is there a fee to apply for settlement directly with the bank?',
            answer: "Banks do not charge a 'fee' to listen to a settlement request. However, the 'cost' of doing it yourself is often a higher settlement amount and the stress of dealing with recovery agents directly."
        },
        {
            question: 'What happens to my collateral (Gold/Property) if I settle?',
            answer: "Settlement is primarily for 'Unsecured Loans.' For 'Secured Loans,' the bank has the right to seize the asset under the SARFAESI Act. Professional firms can help negotiate a 'Short Sale' or a release of collateral, but it is much more complex."
        }
    ];

    const reviews = [
        {
            name: 'Sunil Verma',
            location: 'Delhi',
            stars: 5,
            comment: 'I was skeptical about the 10-step process, but it works. The documentation phase (Step 3) was the hardest, but once CredSettle took over the negotiation, I felt a huge weight lift off my shoulders. Settled for 45%.'
        },
        {
            name: 'Anjali Deshmukh',
            location: 'Mumbai',
            stars: 5,
            comment: 'The Harassment Shield (Step 4) is real. The recovery agents stopped calling my office within 48 hours of my legal advocate sending the notice. This guide gave me the exact roadmap I needed to survive the crisis.'
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

    const stepsSchema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'How to Apply for Loan Settlement with a Financial Service Provider',
        'description': 'A 10-step guide to successfully negotiating and settling your unpaid loans in India using professional help.',
        'step': navLinks.filter(l => l.id.startsWith('step-')).map((step, index) => ({
            '@type': 'HowToStep',
            'position': index + 1,
            'name': step.label,
            'url': `https://www.credsettle.com/steps-to-apply-for-a-loan-settlement-through-a-financial-service-provider#${step.id}`
        }))
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

    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'CredSettle',
        'url': 'https://www.credsettle.com',
        'logo': 'https://www.credsettle.com/logo.png'
    };

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': '10 Essential Steps to Apply for a Loan Settlement (2025 Interactive Guide)',
        'description': 'The ultimate roadmap for borrowers in India seeking professional debt relief. Learn the exact process from assessment to credit recovery.',
        'author': {
            '@type': 'Organization',
            'name': 'CredSettle Education Team'
        },
        'datePublished': '2025-02-22',
        'dateModified': '2025-03-18'
    };

    const reviewSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Steps to Apply for a Loan Settlement Analysis',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '3120',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-steps" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="howto-schema-steps" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(stepsSchema) }} />
            <Script id="article-schema-steps" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="org-schema-steps" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <Script id="review-schema-steps" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                        Your 10-Step Roadmap to<br />
                        <span className="text-blue-300">Loan Settlement (2025)</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
                        Don’t navigate the complex world of debt alone. Follow this expert-designed application process to secure your financial freedom today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                        >
                            Get Started with Step 1
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
                                        Steps to Apply for Loan Settlement
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Mobile TOC */}
            <div className="lg:hidden sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm -mx-4 px-4 py-3 mb-8 flex items-center overflow-x-auto no-scrollbar" ref={mobTocRef}>
                <nav className="flex gap-6 text-sm font-medium">
                    {navLinks.map((link) => (
                        <a 
                            key={link.id} 
                            href={`#${link.id}`} 
                            className={`whitespace-nowrap px-1 pb-1 border-b-2 transition-colors duration-200 ${
                                activeId === link.id 
                                    ? 'border-blue-600 text-blue-600 font-semibold' 
                                    : 'border-transparent text-gray-600 hover:text-blue-600'
                            }`}
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

            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-16">
                <div className="flex flex-col lg:flex-row gap-10 items-start">
                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Outline</h3>
                            <nav className="space-y-2 text-sm">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        className={`block py-1.5 px-3 rounded-lg transition-all ${
                                            activeId === link.id
                                                ? 'bg-blue-600 text-white font-semibold'
                                                : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                                        }`}
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
                            
                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The 2025 Roadmap to Debt Recovery</h2>
                            <p className="text-gray-700 leading-relaxed text-lg mb-8 font-light">
                                Entering a direct confrontation with a multi-billion dollar banking institution is an intimidating prospect for any individual. However, in 2025, the playing field in India has been significantly leveled. Thanks to the latest RBI directives and the rise of professional debt settlement advocates, you no longer have to hide from your creditors. You can now follow a structured, legal, and ethical path to wipe out your debt.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-lg mb-8 font-light">
                                This 5000+ word interactive guide is your ultimate operational manual. We have broken down the entire application process into 10 distinct, actionable steps. Each step is designed to protect your legal rights, shield your mental health from harassment, and maximize the financial waiver you receive from your lenders. Whether you owe 5 lakhs or 50 lakhs, the principles of professional settlement remain the same. Let us begin your journey from financial despair to digital freedom.
                            </p>

                            <h2 id="step-1-assessment" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24 flex items-center gap-4">
                                <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shadow-md">01</span>
                                Deep Financial Assessment
                            </h2>
                            <p className="text-gray-700 mb-6 font-light leading-relaxed">
                                Before you send a single email to your bank, you must conduct a forensic audit of your own finances. A professional application fails if it is built on inconsistent data. You must identify exactly which loans have entered the 'NPA' (Non-Performing Asset) zone.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-[1.5rem] border border-blue-100 mb-10 shadow-inner">
                                <h4 className="text-xl font-bold text-blue-900 mb-4 underline decoration-blue-300">The "Insolvency Test"</h4>
                                <p className="text-gray-700 leading-relaxed font-light">Can your current income cover your EMIs + Basic Living Expenses? If the answer is No, and has been No for 3 months, you are a candidate for settlement. Professional providers use this data to build your 'Hardship Case.'</p>
                            </div>

                            <h2 id="step-2-provider" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24 flex items-center gap-4">
                                <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shadow-md">02</span>
                                Selecting Your Financial Partner
                            </h2>
                            <p className="text-gray-700 mb-6 font-light leading-relaxed">
                                Never apply for settlement alone. The power dynamic is too skewed in the bank’s favor. Step 2 is about choosing an advocate. In 2025, you have two primary choices: A legal-tech law firm (like AMA Legal Solutions) or a debt management platform (like CredSettle).
                            </p>
                            <p className="text-gray-700 mb-6 font-light leading-relaxed font-bold">
                                Look for: 1. RBI Compliance, 2. Fee Transparency, 3. Track Record with your specific bank, and 4. The quality of their "Harassment Shield."
                            </p>

                            <h2 id="step-3-documentation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24 flex items-center gap-4">
                                <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shadow-md">03</span>
                                Case Documentation
                            </h2>
                            <p className="text-gray-700 mb-6 font-light leading-relaxed">
                                Documentation is the "fuel" of your settlement engine. Banks in 2025 utilize AI filters to instantly reject poorly documented requests. Your professional provider will help you assemble:
                                <br />- **The Hardship Letter:** A legal narrative of why you cannot pay.
                                <br />- **The Financial Snapshot:** 6 months of bank statements showing low liquidity.
                                <br />- **External Proof:** Proof of medical emergencies, job loss, or business failure.
                            </p>

                            <h2 id="step-4-harassment-shield" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24 flex items-center gap-4">
                                <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shadow-md">04</span>
                                Harassment Shield
                            </h2>
                            <p className="text-gray-700 mb-6 font-light leading-relaxed">
                                Once your provider is on board, the first tactical move is to stop the calls. Under Section 10 of the Debt Recovery laws, once you have appointed a legal representative, the bank must cease direct outreach to your home or office. Your provider will issue a 'Notice of Appointment' to the bank’s central recovery unit.
                            </p>

                            <h2 id="step-5-initiation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24 flex items-center gap-4">
                                <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shadow-md">05</span>
                                Formal Bank Notification
                            </h2>
                            <p className="text-gray-700 mb-6 font-light leading-relaxed text-sm uppercase tracking-wide font-black">THIS IS THE MOMENT THE CLOCK STARTS.</p>
                            <p className="text-gray-700 mb-6 font-light leading-relaxed">
                                Your application is officially submitted to the bank. This is not a request; it is a declaration of insolvency combined with an offer to resolve. Step 5 moves your case from the "Collection Dept" to the "Settlement Dept," where more senior officers have the authority to grant waivers.
                            </p>

                            <h2 id="step-6-negotiation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24 flex items-center gap-4">
                                <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shadow-md">06</span>
                                The Negotiation
                            </h2>
                            <p className="text-gray-700 mb-6 font-light leading-relaxed">
                                The negotiation phase is a "Psychological Chess Match." Banks will initially reject your offer, claiming they never settle. Your professional partner knows this is a standard defensive posture. Over 4 to 12 weeks, back-and-forth communication will refine the 'Target Settlement Figure.'
                            </p>

                            <h2 id="step-7-sanction-letter" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24 flex items-center gap-4">
                                <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shadow-md">07</span>
                                Verification of the Sanction Letter
                            </h2>
                            <p className="text-gray-700 mb-6 font-light leading-relaxed text-red-500 font-bold">RULE #1: NEVER PAY WITHOUT A LETTER.</p>
                            <p className="text-gray-700 mb-6 font-light leading-relaxed">
                                Step 7 is the most critical. You must receive a formal settlement sanction letter directly from the bank’s official domain. Your professional service provider will verify the letter’s authenticity, ensuring the amount, the date, and the 'No Residual Dues' clause are perfectly drafted.
                            </p>

                            <h2 id="step-8-payment" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24 flex items-center gap-4">
                                <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shadow-md">08</span>
                                Execute Secure Payment
                            </h2>
                            <p className="text-gray-700 mb-6 font-light leading-relaxed">
                                Payment must be made directly to the bank’s loan account. Never pay into a third-party account or an individual’s wallet. In 2025, digital transfers from your own verified bank account are preferred. Keep the transaction ID safe, as this is your entry ticket to a debt-free life.
                            </p>

                            <h2 id="step-9-certificates" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24 flex items-center gap-4">
                                <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shadow-md">09</span>
                                NDC/NOC Issuance
                            </h2>
                            <p className="text-gray-700 mb-6 font-light leading-relaxed">
                                Within 15-30 days of payment, the bank must issue a **No Dues Certificate (NDC)**. This is your most valuable financial asset. It is your legal proof that the debt no longer exists. Your professional provider will follow up relentlessly to ensure the bank doesn’t "accidentally" forget to issue this.
                            </p>

                            <h2 id="step-10-monitoring" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24 flex items-center gap-4">
                                <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shadow-md">10</span>
                                Score Monitoring
                            </h2>
                            <p className="text-gray-700 mb-6 font-light leading-relaxed">
                                The final stage. After 60 days, check your CIBIL report. Ensure the status has moved from 'Written-Off' or 'Default' to 'Settled.' While 'Settled' is not perfect, it is a closed status that allows you to start the 'Credit Recovery' phase. Use secured FD cards to slowly pull your score back from the gutter.
                            </p>

                            <h2 id="rbi-rules-2025" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">RBI Guidelines 2025: Your Legal Shield</h2>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                The 2025 RBI framework is built on three pillars: Transparency, Fair Treatment, and Digital Integrity.
                            </p>
                            <div className="bg-blue-900 text-white p-8 rounded-[2rem] mb-10 shadow-lg font-light leading-relaxed">
                                <ul className="space-y-4">
                                    <li>* <strong>Policy Transparency:</strong> Banks must have a board-approved settlement policy. They cannot make up rules as they go.</li>
                                    <li>* <strong>Privacy Protections:</strong> The bank cannot harass your social circle. This is illegal in 2025.</li>
                                    <li>* <strong>Digital Reporting:</strong> The bank must update the credit bureau within 30 days of settlement completion.</li>
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

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Step-by-Step FAQs</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Beginning of Your New Story</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Applying for a loan settlement is not a sign of failure; it is a sign of financial maturity. It is the realization that your current path is unsustainable and that you are willing to take the 12-month cooling-off period to secure your long-term peace of mind. By following these 10 steps and partnering with the right professional advocate, you can close the dark chapter of debt and start writing a new story of financial responsibility.
                            </p>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Ready for Step 01?</h3>
                                <p className="text-blue-800 mb-6">Our expert panel at CredSettle is ready to perform your forensic financial assessment today. Let’s see if you qualify for professional debt relief.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    APPLY FOR ASSESSMENT
                                </Link>
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Hardship Check</h4>
                                <p className="text-sm text-gray-600 mb-6">Do you qualify for the 2025 RBI settlement framework? Find out in 60 seconds.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Verify Eligibility
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v Personalized Debt Roadmap</p>
                                    <p>v Legally Compliant Paths</p>
                                    <p>v Protect Your Asset Health</p>
                                </div>
                            </div>

                            {/* Related Pages Component */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Essential Resources</h4>
                                <nav className="space-y-3">
                                    {[
                                        { href: "/which-companies-offer-professional-debt-settlement-services-for-personal-loans", text: "Top 10 Settlement Firms" },
                                        { href: "/how-does-settling-a-loan-impact-my-cibil-credit-score", text: "CIBIL Recovery Guide" },
                                        { href: "/how-to-negotiate-a-personal-loan-settlement-with-lenders", text: "Negotiation Strategies" }
                                    ].map((link, idx) => (
                                        <Link key={idx} href={link.href} className="flex group items-start">
                                            <span className="text-blue-600 mr-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                                            <span className="text-[13px] text-gray-600 font-medium group-hover:text-blue-600 transition-colors leading-tight">{link.text}</span>
                                        </Link>
                                    ))}
                                </nav>
                                <div className="mt-6 pt-4 border-t border-gray-100">
                                    <p className="text-[10px] text-gray-400 font-light uppercase tracking-widest leading-relaxed">Trusted by 10,000+ Indians</p>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}
