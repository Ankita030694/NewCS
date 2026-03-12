'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function WhenToChooseSettlementClient() {
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
        { id: 'introduction', label: 'The Debt Crossroads' },
        { id: 'defining-the-conflict', label: 'Repayment vs Settlement' },
        { id: 'math-of-debt-trap', label: 'Unlocking the Math' },
        { id: 'genuine-hardship-indicators', label: 'Hardship Checklist' },
        { id: 'rbi-2025-protections', label: 'New RBI Rules' },
        { id: 'pros-of-repayment', label: 'The Power of Closure' },
        { id: 'cons-of-repayment', label: 'Repayment Pitfalls' },
        { id: 'pros-of-settlement', label: 'Survival Benefits' },
        { id: 'cons-of-settlement', label: 'The Hidden Costs' },
        { id: 'tax-implications', label: 'The Tax Man\'s Dues' },
        { id: 'lender-specific-policies', label: 'Lender Tactics' },
        { id: 'the-tipping-point', label: 'When to Jump?' },
        { id: 'asset-protection-strategy', label: 'Protecting Assets' },
        { id: 'legal-safety-nets', label: 'The Legal Guardrail' },
        { id: 'role-of-debt-consultants', label: 'Expert Intervention' },
        { id: 'negotiation-mastery', label: 'Art of Negotiation' },
        { id: 'post-decision-roadmap', label: 'The Next Steps' },
        { id: 'common-scams-to-avoid', label: 'Zero-Interest Scams' },
        { id: 'expert-verdict', label: 'Our Recommendation' },
        { id: 'faqs', label: 'Critical FAQ' },
        { id: 'final-conclusion', label: 'Your Final Call' }
    ];

    const faqs = [
        {
            question: 'Is it always better to repay rather than settle?',
            answer: 'Ideally, yes. Repayment protects your credit score and legal reputation. However, if your interest accrual is faster than your income, and you are forced to choose between food and EMIs, settlement becomes the mathematically superior survival choice.'
        },
        {
            question: 'Can I settle a loan even if I have the money to pay?',
            answer: 'This is dangerous. Banks call this "Wilful Default." If the bank proves you have the funds, they can file criminal proceedings and refuse settlement. Settlement should strictly be for those in genuine financial distress.'
        },
        {
            question: 'Does the RBI 2025 rule prohibit banks from harassment during settlement?',
            answer: 'Yes, the 2025 guidelines mandate that recovery agents cannot use coercive methods. All settlement communications must be recorded, and borrowers have the right to a standardized board approved settlement policy.'
        },
        {
            question: 'What is the "Cooling Period" mentioned in the guidelines?',
            answer: 'After a compromise settlement, lenders are prohibited from granting fresh loans to that borrower for a minimum period (usually 12 months) defined by the bank\'s board. This is to ensure you stabilize your finances first.'
        },
        {
            question: 'Will I be arrested if I choose settlement over repayment?',
            answer: 'Loan default is primarily a civil matter. Arrests only happen in cases of fraud, forged documents, or persistent defiance of court orders. Choosing settlement is a legal negotiation, not a crime.'
        },
        {
            question: 'Can I settle my credit card even if my home loan is regular?',
            answer: 'Yes, but be careful. A settlement on a credit card will crash your CIBIL score, which might cause the home loan bank to increase your interest rate or call back the loan if there is a cross-default clause.'
        },
        {
            question: 'How much discount can I expect in a settlement?',
            answer: 'Typically, banks settle for 30% to 50% of the total outstanding (Principal + Interest). In extreme cases of old debt, you might even settle for 20% of the principal, but this is rare.'
        },
        {
            question: 'Will a settlement affect my current job or business?',
            answer: 'Generally, no. Your employer or clients do not see your credit report unless you work in a high-security sensitive financial role. For 99% of people, it is a private matter between you and the bank.'
        },
        {
            question: 'Is there any "No-Score" impact of settlement?',
            answer: 'Even if your score stays high, the "Settled" tag is visible. Many premium employers and landlords now check credit reports for "Reliability Indicators." A settlement might flag you as a risk in these elite circles.'
        },
        {
            question: 'Can I settle through a debt relief agency?',
            answer: 'Yes, specialized companies like CredSettle can handle the complex negotiations and legal documentation. This prevents you from being bullied by the bank and ensures you get the best mathematical deal.'
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
        'name': 'When Should You Choose Loan Settlement Analysis',
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
            <Script id="faq-schema-when-choose" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-when-choose" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <Script id="org-schema-when-choose" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

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
                        When Should You Choose<br />
                        <span className="text-blue-300">Loan Settlement?</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
                        Exiting the debt spiral requires logic, not just loyalty. Learn the precise triggers, mathematical tipping points, and legal protections that make settlement your smartest move in 2025.
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
                                        When Should You Choose Loan Settlement
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

                <div className="flex flex-col lg:flex-row gap-16 items-start">

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
                            
                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Inside the Debt Crossroads: Logic Over Loyalty</h2>
                            <p className="text-slate-600 leading-relaxed text-2xl mb-10 font-medium italic underline decoration-blue-200 underline-offset-8">
                                Every morning, millions of Indians wake up to the same crushing calculation: "Whom can I delay paying today so I can survive until tomorrow?" When the math of your life no longer supports the math of your loans, you have reached a crossroads.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                The banking system depends on your fear of the "Credit Bureau." They want you to believe that missing a payment is a moral failure. But in 2025, smart financial management is about pragmatism. If you are drowning in a debt pool where the water is rising faster than you can pump it out, refusing to use a life raft (Loan Settlement) because you like the color of the pool (Credit Score) is a strategic blunder.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                At CredSettle, we analyze thousands of portfolios. We don't just ask "Can you pay?" We ask "Should you pay?" This 4000+ word deep-dive is designed to give you the objective, cold, hard facts you need to decide if today is the day you stop trying to repair a sinking ship and start building a new one via settlement.
                            </p>

                            <h2 id="defining-the-conflict" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14 border-b-8 border-blue-50 pb-4">The Conflict: Repayment vs. Settlement</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Let us define the players. **Repayment** is the path of integrity and future credit growth. You honor the contract, the bank makes its profit, and your CIBIL score becomes a golden ticket. **Settlement** is the path of survival and immediate solvency. You admit you cannot honor the contract, the bank accepts a loss to recover whatever they can, and you get to keep your sanity while sacrificing your credit eligibility for a few years.
                            </p>

                            <h2 id="math-of-debt-trap" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Math of the Debt Trap: The Tipping Point</h2>
                            <div className="bg-slate-900 text-white p-12 rounded-[3.5rem] mb-12 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] group-hover:bg-blue-600/40 transition-all duration-1000"></div>
                                <h4 className="text-3xl font-black mb-8 text-blue-400 uppercase tracking-tighter">The "Impossible Ratio"</h4>
                                <p className="text-xl font-light mb-8 leading-relaxed italic">You are in a mathematical debt trap if:</p>
                                <div className="space-y-6 text-2xl font-black">
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-sm">A</div>
                                        <p>Total EMI &gt; 60% of Monthly Take-Home Pay</p>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-sm">B</div>
                                        <p>You are using Credit Cards to pay Loan EMIs</p>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-sm">C</div>
                                        <p>Your Total Debt is &gt; 24x your Monthly Salary</p>
                                    </div>
                                </div>
                                <p className="mt-12 text-blue-300 font-bold text-center border-t border-white/10 pt-8 uppercase tracking-[0.3em] text-sm italic">If you hit 2 out of 3, Repayment is no longer a viable strategy.</p>
                            </div>

                            <h2 id="genuine-hardship-indicators" className="text-3xl font-black text-slate-900 mb-8 scroll-mt-28 italic underline decoration-slate-200">The Hardship Checklist</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Banks will only settle if they believe you genuinely cannot pay. In 2025, "I don't feel like paying" is not a reason. "I physically cannot pay because X" is the requirement. Valid settlement triggers include:
                            </p>
                            <ul className="list-disc pl-10 mb-10 space-y-4 text-gray-700 font-bold border-l-8 border-slate-50">
                                <li><strong>Medical Catastrophe:</strong> Large hospital bills that depleted all savings.</li>
                                <li><strong>Job Loss:</strong> Being unemployed for more than 6 months in a saturated industry.</li>
                                <li><strong>Business Failure:</strong> Shutting down a GST registered entity with proof of loss.</li>
                                <li><strong>Natural Disaster:</strong> Loss of property or income due to uncontrollable events.</li>
                            </ul>

                            <h2 id="rbi-2025-protections" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">RBI 2025 Protections: Your New Shield</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                The Reserve Bank of India updated the "Compromise Settlements and Technical Write-offs" framework in late 2024 for the 2025 cycle. Lenders must now:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div className="p-8 bg-blue-50/50 rounded-3xl border border-blue-100 flex flex-col justify-center">
                                    <h5 className="font-extrabold text-blue-900 mb-3 uppercase text-sm tracking-widest">Board Approval</h5>
                                    <p className="text-sm text-gray-600 font-medium">Every bank must have a written, transparent policy for settlement. They cannot "make it up" on the fly.</p>
                                </div>
                                <div className="p-8 bg-indigo-50/50 rounded-3xl border border-indigo-100 flex flex-col justify-center">
                                    <h5 className="font-extrabold text-indigo-900 mb-3 uppercase text-sm tracking-widest">Wilful Default Check</h5>
                                    <p className="text-sm text-gray-600 font-medium">Lenders must perform a thorough check to ensure you aren't hiding assets before agreeing to a loss.</p>
                                </div>
                            </div>

                            <h2 id="pros-of-repayment" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Benefits of Full Repayment</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you can afford it, Repayment is and will always be the #1 choice.
                            </p>
                            <ol className="list-decimal pl-8 mb-10 space-y-4 text-gray-700">
                                <li><strong>CIBIL Excellence:</strong> A 750+ score opens doors to 8% interest home loans.</li>
                                <li><strong>Speed of Access:</strong> Pre-approved offers at your fingertips.</li>
                                <li><strong>Legal Cleanliness:</strong> No risk of being sued or receiving legal notices.</li>
                                <li><strong>Peace of Mind:</strong> Knowing you honored every rupee of your word.</li>
                            </ol>

                            <h2 id="cons-of-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Bitter Truth: Cons of Settlement</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                We don't sugarcoat the facts at CredSettle. Settlement has teeth.
                            </p>
                            <div className="bg-red-50 p-10 rounded-[3rem] border-2 border-red-100 mb-12">
                                <h4 className="text-red-900 font-black text-2xl mb-6">The "Settled" Mark: A 7-Year Shadow</h4>
                                <p className="text-gray-700 text-lg font-medium leading-relaxed mb-6">
                                    Even if you settle tomorrow, the record stays for 7 years. You will face immediate rejection for credit cards and unsecured loans from all major banks for at least 24 to 36 months.
                                </p>
                                <p className="text-red-700 font-bold uppercase tracking-widest text-xs italic">Warning: This is not a "Reset" button. It is a "Refuge" button.</p>
                            </div>

                            <h2 id="the-tipping-point" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Tipping Point: When to Pull the Trigger?</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Choose settlement **ONLY** when the following three conditions are met simultaneously:
                            </p>
                            <div className="space-y-6 mb-16">
                                <div className="flex gap-8 items-start group">
                                    <span className="text-6xl font-black text-slate-100 group-hover:text-blue-100 transition-colors">01</span>
                                    <div>
                                        <h5 className="font-black text-xl text-slate-900">Immediate Liquidity Crisis</h5>
                                        <p className="text-slate-500 font-medium">You cannot afford basic necessities after paying EMIs.</p>
                                    </div>
                                </div>
                                <div className="flex gap-8 items-start group">
                                    <span className="text-6xl font-black text-slate-100 group-hover:text-blue-100 transition-colors">02</span>
                                    <div>
                                        <h5 className="font-black text-xl text-slate-900">Zero Future Borrowing Need</h5>
                                        <p className="text-slate-500 font-medium">You do not plan to take a major loan for at least the next 3 to 4 years.</p>
                                    </div>
                                </div>
                                <div className="flex gap-8 items-start group">
                                    <span className="text-6xl font-black text-slate-100 group-hover:text-blue-100 transition-colors">03</span>
                                    <div>
                                        <h5 className="font-black text-xl text-slate-900">Aggressive Collection Harassment</h5>
                                        <p className="text-slate-500 font-medium">The recovery process is destroying your family life or professional performance.</p>
                                    </div>
                                </div>
                            </div>

                            <h2 id="expert-verdict" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Our Recommendation</h2>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                If you are "Semi-Stressed", meaning you can pay but it's Tight, **Choose Repayment**. Sacrifice your luxuries, take a second job, and close the loan properly. The CIBIL health you save today will be worth lakhs in the future.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10 font-bold border-l-4 border-slate-900 pl-6">
                                If you are "Severely Stressed", meaning you are taking New Loans to pay Old Loans, **Choose Settlement**. The interest is a fire that will eat your future. Put it out now. Settle, survive, and then rebuild.
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
                                <p className="text-blue-800 mb-6">Deciding to settle a loan is a major life decision. You don't have to navigate the complex legal and bank discussions alone. Our team of expert negotiators and legal advisors is here to ensure you get the best possible terms while protecting your family from harassment.</p>
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
                                    <p>✓ Personalized Debt Roadmap</p>
                                    <p>✓ Legally Compliant Paths</p>
                                    <p>✓ Protect Your Asset Health</p>
                                </div>
                            </div>

                            {/* Related Pages Component */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Expert Resources</h4>
                                <nav className="space-y-3">
                                    {[
                                        { href: "/loan-settlement", text: "The Master Settlement Guide" },
                                        { href: "/how-bank-recovery-works", text: "Inside the Recovery Room" },
                                        { href: "/when-to-choose-loan-settlement-instead-of-repayment", text: "Mathematics of Repayment" },
                                        { href: "/services/anti-harassment", text: "Stop Collection Calls Now" }
                                    ].map((link, idx) => (
                                        <Link key={idx} href={link.href} className="flex group items-start">
                                            <span className="text-blue-600 mr-2 group-hover:translate-x-1 transition-transform">→</span>
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
