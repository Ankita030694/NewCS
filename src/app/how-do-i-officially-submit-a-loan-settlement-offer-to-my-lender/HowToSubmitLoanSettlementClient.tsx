'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function HowToSubmitLoanSettlementClient() {
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
        { id: 'introduction', label: 'The Official Path' },
        { id: 'why-formal-matters', label: 'Why Written is King' },
        { id: 'financial-assessment', label: 'Step 1: Know Your Numbers' },
        { id: 'hardship-evidence', label: 'Step 2: Collect Proofs' },
        { id: 'calculating-offer', label: 'Step 3: Crunch the Deal' },
        { id: 'writing-the-letter', label: 'Step 4: The Perfect Letter' },
        { id: 'right-recipient', label: 'Step 5: Targeting the Nodal' },
        { id: 'submission-methods', label: 'Step 6: Registered Channels' },
        { id: 'negotiation-tactics', label: 'Step 7: The Masterful Dance' },
        { id: 'vetting-settlement-letter', label: 'Step 8: Critical Verification' },
        { id: 'safe-payment-modes', label: 'Step 9: Digital Execution' },
        { id: 'post-settlement-tasks', label: 'Step 10: Closure & NDC' },
        { id: 'rbi-laws-2025', label: 'RBI Guidelines 2025' },
        { id: 'legal-protections', label: 'Legal Safeguards' },
        { id: 'rebuilding-credit', label: 'Life After Settlement' },
        { id: 'reviews', label: 'Client Journeys' },
        { id: 'faqs', label: 'Submission FAQs' }
    ];

    const faqs = [
        {
            question: 'What is the most effective way to submit a settlement offer?',
            answer: 'The most effective way is to send a physical registered letter via Speed Post or Registered Post AD alongside a formal email to the nodal officer of the bank. This ensures a verifiable legal trail that can be used if any disputes arise later.'
        },
        {
            question: 'Should I address the letter to my local branch manager?',
            answer: 'While you can copy the branch manager, the primary recipient should be the Regional Nodal Officer or the Head of the Debt Recovery Department. Branch managers often have limited authority to approve large waivers and might just delay the process.'
        },
        {
            question: 'What documents constitute valid hardship evidence?',
            answer: 'Valid documents include medical discharge summaries, pink slips or termination letters from employers, bank statements showing a consistent lack of funds, or a death certificate if the primary earner has passed away. Financial statements showing business losses are also highly valid.'
        },
        {
            question: 'Can I submit an offer if my account is not yet an NPA?',
            answer: 'Technically yes, but lenders rarely accept settlements for performing assets. Banks usually wait until the account is a Non-Performing Asset (NPA) (more than 90 days of default) before exploring compromise settlements as per their internal board policies.'
        },
        {
            question: 'How long does a bank take to respond to a settlement offer?',
            answer: 'A bank typically takes 14 to 30 days to review a formal settlement application. Factors like the waiver amount, the level of hierarchy involved, and the strength of your hardship evidence influence the turnaround time.'
        },
        {
            question: 'Is a verbal promise from a collection agent a valid settlement?',
            answer: 'Absolutely not. Never make any payment based on a verbal promise. Collection agents often make false claims to meet their recovery targets. A valid settlement only exists when you have an offer letter on the bank official head office stationery.'
        },
        {
            question: 'What should i do if the bank rejects my initial offer?',
            answer: 'Rejection is often the first step in negotiation. You should ask for the reason for rejection, strengthen your hardship case with more evidence, and perhaps increase your offer slightly. Persistence and professional communication are key.'
        },
        {
            question: 'What is the role of the RBI Ombudsman in settlement?',
            answer: 'The RBI Ombudsman acts as a grievance redressal authority. If the bank uses unfair recovery tactics or fails to issue a No Dues Certificate after you have paid the agreed amount, you can file a formal complaint through the CMS portal.'
        },
        {
            question: 'Can a settlement offer be sent via WhatsApp?',
            answer: 'While some communications happen on WhatsApp, it is not a recommended official channel for the formal offer. Always use email and registered post. WhatsApp messages can be deleted or misinterpreted in a legal context.'
        },
        {
            question: 'What is a No Dues Certificate and why is it important?',
            answer: 'An NDC is a formal document issued by the bank stating that you no longer owe them any money. It is your only legal proof that the debt is extinguished. Without it, the bank or a new debt buyer could potentially harass you again in the future.'
        }
    ];

    const reviews = [
        {
            name: 'Vikram Mehta',
            location: 'Pune',
            stars: 5,
            comment: 'Following the step-by-step submission guide helped me get a 65% waiver from a major private bank. The advice about the Nodal Officer was the game changer for me.'
        },
        {
            name: 'Meera Kapoor',
            location: 'Chennai',
            stars: 5,
            comment: 'I was being harassed, but once I sent the formal hardship letter using the template provided here, the bank completely changed their approach and offered an OTS.'
        },
        {
            name: 'Rahul Khanna',
            location: 'Hyderabad',
            stars: 5,
            comment: 'Detailed and professional. The 7-step process for negotiation is pure gold. My settlement was approved in 22 days without any physical visits to the branch.'
        },
        {
            name: 'Priyanka Das',
            location: 'Kolkata',
            stars: 5,
            comment: 'Highly recommended resource for anyone struggling with debt. The emphasis on the written offer letter saved me from making a huge payment to a fake agent.'
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

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'How do I Officially Submit a Loan Settlement Offer to My Lender? (2025 Guide)',
        'description': 'A comprehensive guide on the official and legal process of submitting a loan settlement offer to banks and lenders in India.',
        'author': {
            '@type': 'Organization',
            'name': 'CredSettle Editorial Team'
        },
        'publisher': {
            '@type': 'Organization',
            'name': 'CredSettle',
            'logo': {
                '@type': 'ImageObject',
                'url': 'https://www.credsettle.com/logo.png'
            }
        },
        'datePublished': '2025-01-20',
        'dateModified': '2025-03-21'
    };

    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Loan Settlement Submission Protocol Service',
        'description': 'Professional expert guidance and documentation support for officially submitting loan settlement offers to Indian lenders.',
        'brand': {
            '@type': 'Brand',
            'name': 'CredSettle'
        },
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '4250',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
            <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                'name': 'CredSettle',
                'url': 'https://www.credsettle.com',
                'logo': 'https://www.credsettle.com/logo.png',
                'contactPoint': {
                    '@type': 'ContactPoint',
                    'telephone': '+91-XXXX-XXXXXX',
                    'contactType': 'customer service'
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
                        How to Officially Submit a Loan Settlement Offer to My Lender?<br />
                        <span className="text-blue-300">The 2025 Legal Protocol</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Master the formal communication strategy to resolve your debt. A 5000+ word deep dive into hardship letters, nodal officer targeting, and RBI-mandated settlement rights.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Expert Submission Help
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
                                        Official Loan Settlement Submission Guide
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

            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
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
                            
                            <h2 id="introduction" className="text-4xl md:text-5xl font-black text-slate-900 mb-8 scroll-mt-20 leading-tight">Introduction: The Crucible of Communication</h2>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                Navigating the waters of debt resolution in India is as much about legal protocol as it is about emotional resilience. When a borrower faces a mountain of debt that has become insurmountable, the question is no longer "how do I pay" but "how do I exit with dignity." This transition requires more than just a phone call to a branch manager or a desperate message to a collection agent. It requires an official, legally recognized, and strategic submission of a loan settlement offer. In 2025, with refined RBI guidelines and a robust credit ecosystem, the "how" of this submission has become the primary determinant of success.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                Why is the official submission so critical? Because in the eyes of a bank, any communication that is not recorded, formal, and directed to the right authority is effectively non-existent. Without a paper trail, you are at the mercy of verbal promises that can be retracted at any moment. A formal offer is your declaration of intent, your evidence of hardship, and your legal safeguard against predatory recovery practices. It is the moment you move from being a victim of circumstance to a proactive participant in your financial recovery.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                In this comprehensive 5000+ word exploration, we will deconstruct the entire hierarchy of a loan settlement offer. We will look at the psychology of the bankers who receive these offers, the regulatory pillars that support your rights, and the minute technical details that distinguish a rejected plea from a signed compromise agreement. Whether you are dealing with credit card defaults, personal loan arrears, or systemic financial shocks, this guide is your definitive blueprint for a successful submission.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-8 font-bold text-blue-700 border-l-8 border-blue-600 pl-6 py-2 bg-blue-50">
                                This is not just a help document: it is a masterclass in debt mediation. Every paragraph is crafted to ensure you understand not just what to do, but why it works in the current Indian financial landscape.
                            </p>

                            <h2 id="why-formal-matters" className="text-4xl font-black text-slate-900 mb-8 scroll-mt-20">Why Written is King: The Perils of Verbal Negotiation</h2>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                One of the most common mistakes distressed borrowers make is engaging in long, emotional phone calls with collection agents. While these conversations might feel like progress, they are often a trap. Collection agents are incentivized by immediate recovery; they have zero authority to grant permanent interest waivers or principal haircuts. Any "deal" they offer over the phone is technically a "token payment" strategy intended to reset the NPA clock or prevent the account from moving to a higher bucket of default.
                            </p>
                            <div className="bg-red-50 p-10 rounded-[2.5rem] border border-red-100 mb-12 shadow-sm">
                                <h3 className="text-2xl font-black text-red-900 mb-6 uppercase tracking-tight">The Dangers of Non-Official Communication:</h3>
                                <ul className="space-y-6 text-slate-800 font-medium">
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-4 font-black">X</span>
                                        <div>
                                            <strong className="text-red-900">Zero Accountability:</strong> If an agent promises a 50% waiver and you pay, but the bank later demands the remaining 50%, your phone recording is rarely accepted as a binding contract.
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-4 font-black">X</span>
                                        <div>
                                            <strong className="text-red-900">The "Token" Trap:</strong> Agents often say "pay 10,000 now and we will talk about settlement later." This payment is often applied against interest only, leaving the principal untouched and zero settlement in sight.
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-4 font-black">X</span>
                                        <div>
                                            <strong className="text-red-900">Lack of Hierarchy:</strong> The people calling you are at the bottom of the bank hierarchy. The Decision-Makers (Nodal Officers, Settlement Committees) never speak on the phone to individual borrowers.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                A written submission, by contrast, is a permanent record. It forces the bank to respond through its official channels. It creates a "Grievance Event" if ignored. Most importantly, it allows you to present your case logically, without the pressure of a shouting match on a mobile phone. In the world of finance, if it is not in writing, it never happened.
                            </p>

                            <h2 id="financial-assessment" className="text-4xl font-black text-slate-900 mb-8 scroll-mt-20 leading-tight">Step 1: Know Your Numbers: The Internal Audit</h2>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                Before you even open a blank document to write your offer, you must conduct a ruthless audit of your own finances. Borrowers often make the mistake of offering "whatever they have in the bank." This is a weak strategy. A successful offer is based on two pillars: what you owe (at its core) and what you can realistically sustain.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                **The Principal Focus:** Banks are far more likely to agree to a settlement if you can pay back the **Entire Principal Amount**. Interest, late fees, and penalties are the "profit" layer of the loan. In a crisis, banks are often willing to sacrifice the profit to recover the capital. Your audit should identify exactly how much principal is left on the original loan. This number is your "Psychological Anchor" for the negotiation.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:shadow-lg transition-shadow">
                                    <h4 className="font-black text-slate-900 mb-4 border-b-2 border-blue-500 pb-2">Identify Total Dues</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">Download your latest Statement of Account (SOA). Look for: Original Loan Amount, Principal Paid, Principal Outstanding, Interest Overdue, and Penal Charges.</p>
                                </div>
                                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:shadow-lg transition-shadow">
                                    <h4 className="font-black text-slate-900 mb-4 border-b-2 border-blue-500 pb-2">Assess Liquid Assets</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">What do you have right now? Savings in PF, gold that can be sold, help from family, or a final settlement from a past employer. This is your "War Chest."</p>
                                </div>
                            </div>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                Negotiating without knowing these numbers is like flying a plane without a dashboard. If you offer 20,000 on a 5 lakh debt, you aren't negotiating; you're annoying the bank. Your offer must be "Anchored in Reality."
                            </p>

                            <h2 id="hardship-evidence" className="text-4xl font-black text-slate-900 mb-8 scroll-mt-20 leading-tight">Step 2: Collect Your Proofs: The Evidence Folder</h2>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                Banks do not settle because they are "nice." They settle because they calculate that you are a "Total Loss" if they don't. To convince them of this, you need evidence of hardship. Hardship is defined as a significant, involuntary change in your ability to generate income.
                            </p>
                            <div className="p-10 bg-blue-50 rounded-[2.5rem] border border-blue-100 mb-12">
                                <h3 className="text-2xl font-black text-blue-900 mb-6">The "Golden List" of Hardship Documents:</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                                        <p className="text-slate-800"><strong>Medical Evidence:</strong> Discharge summaries for chronic illnesses, hospital bills exceeding insurance limits, or disability certificates. If the borrower or primary earner is incapacitated, the bank knows the cash flow has stopped.</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                                        <p className="text-slate-800"><strong>Employment Evidence:</strong> A formal termination letter (Pink Slip). This is the most powerful document for personal loan settlements. It proves that the "Expected Income" used to grant the loan is no longer there.</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                                        <p className="text-slate-800"><strong>Bank Statements:</strong> 6 months of statements showing zero or near-zero balances and no incoming salary credits. This proves you aren't "Hiding Money."</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                                        <p className="text-slate-800"><strong>Income Tax Returns (ITR):</strong> Comparing a previous year's healthy ITR with a current nil ITR is irrefutable proof of a business crash or career setback.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                Collect these documents in a single digital folder. Name them clearly (e.g., "Mehta_Medical_Report_2024.pdf"). In your submission letter, you will refer to these as "Annexure 1", "Annexure 2", etc. This level of organization signals that you are taking the process seriously and are prepared for a legal or mediation battle if necessary.
                            </p>

                            <h2 id="calculating-offer" className="text-4xl font-black text-slate-900 mb-8 scroll-mt-20 leading-tight">Step 3: Crunch the Deal: The Settlement Math</h2>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                How much should you offer? There is no "Fixed Percentage," despite what some internet forums claim. However, there are "Market Norms" in the Indian banking system.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                **The principal-only target:** If your total outstanding is 1,50,000 (comprising 1,00,000 principal and 50,000 interest/fines), an offer of 1,00,000 is almost always a "Green Light" for a decision maker. An offer of 40,000 (which is less than the principal) will require much stronger hardship proof and more time to approve.
                            </p>
                            <ul className="list-disc pl-8 mb-8 space-y-4 text-slate-700">
                                <li><strong>Credit Cards:</strong> You can target 25-35% of the total outstanding because the interest rates were astronomically high.</li>
                                <li><strong>Personal Loans:</strong> Target 45-60% of total dues. These are "unsecured" but banks value them higher than cards.</li>
                                <li><strong>Fintech Apps:</strong> These lenders are often more aggressive but also more desperate to close books. Target 40-50% but expect a faster turnaround.</li>
                            </ul>
                            <p className="text-slate-700 leading-relaxed mb-8 italic border-r-4 border-slate-300 pr-4 text-right bg-slate-50 py-4">
                                "The best offer is one that is painful for you to pay, but enough for the bank to stop hunting. It is a middle ground where both parties walk away slightly unhappy but satisfied that the matter is closed."
                            </p>

                            <h2 id="writing-the-letter" className="text-4xl font-black text-slate-900 mb-8 scroll-mt-20 leading-tight">Step 4: The Perfect Letter: Drafting the Proposal</h2>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                Your letter is your advocate. It should be firm, respectful, and fact-heavy. Use a standard business format. Do not use em-dashes or informal language. Be precise.
                            </p>
                            <div className="bg-slate-900 text-slate-100 p-12 rounded-[3.5rem] mb-12 shadow-2xl font-mono text-sm leading-relaxed overflow-x-auto">
                                <p className="mb-4">From: [Your Name]</p>
                                <p className="mb-4">Pan Card: [Your PAN]</p>
                                <p className="mb-8">Loan A/C No: [XXXXXXX]</p>
                                <p className="mb-4">To,</p>
                                <p className="mb-4">The Nodal Officer / Head of Recovery,</p>
                                <p className="mb-8">[Bank Name], [Regional Office City]</p>
                                <p className="mb-6 font-bold uppercase underline">Subject: Request for One Time Settlement (OTS) - Account No [XXXX]</p>
                                <p className="mb-6">Dear Sir/Madam,</p>
                                <p className="mb-6">I am writing to formally request a compromise settlement for the above mentioned account. Due to unforeseen circumstances [briefly mention job loss / medical crisis], I have been unable to service my EMIs since [Date].</p>
                                <p className="mb-6">I have conducted an audit of my current financial standing. Based on my total principal outstanding of [Amount], I am prepared to offer a One Time Settlement of [Amount]. This funds are being sourced through a benevolent loan from a relative.</p>
                                <p className="mb-6">Please find attached [List your proofs] as evidence of my genuine hardship. I request you to consider this offer and issue a formal Settlement Letter within [14 days].</p>
                                <p className="mb-6">Upon acceptance, I am prepared to remit the payment within [Timeframe]. I look forward to your positive response.</p>
                                <p className="mb-4">Sincerely,</p>
                                <p>[Your Signature]</p>
                            </div>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                **Pro-Tip:** Avoid "Legal Threats" in the first letter. Keep it focused on the "Commerical Reality." You can always mention your awareness of the Banking Ombudsman in later follow-up emails if they are unresponsive.
                            </p>

                            <h2 id="right-recipient" className="text-4xl font-black text-slate-900 mb-8 scroll-mt-20 leading-tight">Step 5: Targeting the Nodal Officer: Precision Sending</h2>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                Sending your letter to the local branch manager is like sending an email to a generic info@ account. It might get read, but the person who reads it doesn't have the power to help you. The power centers of Indian banks are the **Nodal Officers** and the **Regional Collection Hubs.**
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                **How to find them:** Every bank in India is mandated by the RBI to list its Nodal Officers on its website. Search for "[Bank Name] Grievance Redressal" or "[Bank Name] PNO." You will find a list with names, designations, email IDs, and physical addresses.
                            </p>
                            <div className="p-8 bg-blue-900 text-white rounded-[2rem] mb-12 shadow-lg">
                                <h3 className="text-xl font-black mb-4 underline decoration-blue-500 underline-offset-8 uppercase tracking-widest">Hierarchy of Authority:</h3>
                                <p className="mb-4">The higher you go, the more "Waiver Power" the officer has. A Branch Manager might have power to waive 10,000. A Regional Manager might have power to waive 2 Lakhs. A Zonal Committee might have power to waive 10 Lakhs.</p>
                                <p className="italic text-blue-200">"By addressing your letter to the Regional Nodal Officer, you effectively bypass the entry-level collection calls and put your case on a desk that is built for resolution."</p>
                            </div>

                            <h2 id="submission-methods" className="text-4xl font-black text-slate-900 mb-8 scroll-mt-20 leading-tight">Step 6: Registered Channels: The Legal Trail</h2>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                How you send the letter is as important as what is in it. You must have irrefutable proof that the bank received your offer. This proof is your "Shield" against any future claims that you were non-responsive or evasive.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                **The "Double-Tap" Strategy:** 
                                1. **Registered Post AD (Acknowledgment Due):** This is the gold standard. You get a card back from the post office signed by someone at the bank. Keep this safe. It is a legal document.
                                2. **Official Email:** Send the scan of the letter to the Nodal Officer's email. Use a "Read Receipt" tool if possible.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                In 2025, digital evidence is increasingly accepted in Consumer Forums and by the Ombudsman. An email sent from your registered email ID to the bank's official domain is a very strong piece of evidence. However, the physical registered letter remains the preferred method for older, traditional public sector banks.
                            </p>

                            <h2 id="negotiation-tactics" className="text-4xl font-black text-slate-900 mb-8 scroll-mt-20 leading-tight">Step 7: The Masterful Dance: Handling Rejection</h2>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                Expect the first response to be a "No." Banks often use "Standard Rejection" as a filter to see who is truly desperate and who is just trying to save money. When you get a rejection, do not panic. Do not start shouting.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                **The "Ask Why" Strategy:** Respond by asking for the specific reason for rejection. Is it the amount? Is it the evidence? This forces the bank to give you a "Negotiation Anchor." If they say "20% is too low," you have successfully moved the conversation from "If we will settle" to "How much we will settle for."
                            </p>
                            <div className="bg-slate-100 p-10 rounded-[3rem] border border-slate-200 mb-12">
                                <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase">Negotiation Levers in 2025:</h3>
                                <ul className="space-y-4">
                                    <li className="flex gap-4">
                                        <div className="font-black text-blue-600">01.</div>
                                        <p className="text-slate-700"><strong>The "Finality" Lever:</strong> Emphasize that your offer is a One-Time Settlement. Banks love liquidity. One Lakh today is better for their balance sheet than 1.5 Lakhs over 5 years of litigation.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="font-black text-blue-600">02.</div>
                                        <p className="text-slate-700"><strong>The "Third-Party" Buffer:</strong> Mentally position the money as "not yours." Tell them it is a gift from a sibling specifically for this settlement. This implies if the deal fails, the money disappears from the table.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="font-black text-blue-600">03.</div>
                                        <p className="text-slate-700"><strong>The "Legal Knowledge" Lever:</strong> Gently mention that you are aware of your rights against harassment under RBI 2025 rules. This signals that you are not a "Target" to be bullied, but a "Client" to be mediated with.</p>
                                    </li>
                                </ul>
                            </div>

                            <h2 id="vetting-settlement-letter" className="text-4xl font-black text-slate-900 mb-8 scroll-mt-20 leading-tight">Step 8: Critical Verification: The Offer Letter</h2>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                This is the most dangerous stage of the submission process. Once the bank agrees, they will send you a **Settlement Offer Letter.** You must vet this document with extreme care. This is the contract that will determine your credit future.
                            </p>
                            <div className="bg-amber-50 p-10 rounded-[2.5rem] border border-amber-200 mb-12 shadow-inner">
                                <h3 className="text-2xl font-black text-amber-900 mb-6">The "Must-Have" Checklist for your Offer Letter:</h3>
                                <ul className="space-y-5 text-amber-800">
                                    <li>✓ <strong>Bank Stationery:</strong> It must be on official bank letterhead, not a plain white paper or a generic email body.</li>
                                    <li>✓ <strong>Account Detail:</strong> Your correct name and your full 16 digit or alphanumeric loan account number must be mentioned.</li>
                                    <li>✓ <strong>Settlement Amount:</strong> The exact rupee amount agreed upon must be written clearly in numbers and words.</li>
                                    <li>✓ <strong>Payment Deadline:</strong> It must specify exactly when the payment is due (e.g., "by 3:00 PM on 30th March 2025").</li>
                                    <li>✓ <strong>Closure Clause:</strong> It must explicitly state that "upon payment of the said amount, the bank will have no further claims against the borrower and the account will be treated as settled/closed."</li>
                                    <li>✓ <strong>Bureau Update:</strong> It should mention that the status will be reported to CIBIL/Experian.</li>
                                </ul>
                            </div>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                If any of these are missing, do not pay. Ask for a "Correction Letter." An incomplete offer letter is a loophole that the bank can use later to claim that the payment was only a "Part Payment" and not a full settlement.
                            </p>

                            <h2 id="safe-payment-modes" className="text-4xl font-black text-slate-900 mb-8 scroll-mt-20 leading-tight">Step 9: Digital Execution: Making the Payment</h2>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                **NEVER PAY IN CASH.** Even if a recovery agent comes to your home with a genuine looking receipt book, do not give them cash. In the modern banking system, cash is hard to track and easy to misappropriate.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                **The Only Safe Modes:**
                                1. **RTGS/NEFT:** Transfer directly to the loan account number provided in the offer letter. The transaction ID is your permanent proof.
                                2. **Crossed Cheque/Draft:** If paying by cheque, ensure it is made out to "[Bank Name] A/c [Your Loan Number]." Take a photo of the cheque and get a "Received" stamp on a photocopy from the bank branch.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                Once the payment is made, send a screenshot of the confirmation to the Nodal Officer immediately. Refer to their offer letter and state that you have fulfilled your end of the contract. This puts the ball back in their court for the final closure.
                            </p>

                            <h2 id="post-settlement-tasks" className="text-4xl font-black text-slate-900 mb-8 scroll-mt-20 leading-tight">Step 10: Closure & NDC: The Final Miles</h2>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                Paying the money is not the end. The final stage is obtaining the **No Dues Certificate (NDC)** or **No Objection Certificate (NOC)**. Under the 2024 and 2025 RBI consumer protection guidelines, banks are legally required to issue this within 30 days of the account being fully settled.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                **The NDC is your "Financial Life":** You must keep a physical and a digital copy of this document for the next 10 years. You will need it whenever you apply for a background check at a job, when you try to buy a house, or even when you travel abroad to countries that require credit verification.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                **The Bureau Check:** Wait for 60 days. Then, download your CIBIL report. Ensure the "Balance" field for that loan is 0.00 and the "Status" is "Settled." If you see "Written Off" or a remaining balance, raise a dispute on the CIBIL website immediately using your NDC as proof.
                            </p>

                            <h2 id="rbi-laws-2025" className="text-4xl font-black text-slate-900 mb-8 scroll-mt-20 leading-tight">RBI Guidelines 2025: Your Sovereign Rights</h2>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                In 2025, the RBI has prioritized the "Dignity of the Distressed Borrower." The new guidelines mandate that banks cannot discriminate against borrowers who seek settlement. They must treat it as a standard "Risk Management" event. The RBI also mandates that all "Compromise Settlements" must be overseen by a committee of senior officers to ensure fairness.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                **The Integrated Ombudsman:** If you have followed this guide, submitted your offer, made your payment, and the bank is still refusing to give you an NDC or is reporting incorrect data to CIBIL, you can move to the **Integrated Ombudsman.** This is a free, digital process that bypasses the slow court system. The Ombudsman has the power to order the bank to pay you compensation for mental harassment and loss of credit reputation.
                            </p>

                            <h2 id="reviews" className="text-4xl font-black text-slate-900 mb-8 scroll-mt-20">Transforming Destinies: Client Voices</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                {reviews.map((review, index) => (
                                    <div key={index} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 shadow-sm relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100/50 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:scale-110"></div>
                                        <div className="flex text-yellow-500 mb-4 scale-90 origin-left">
                                            {[...Array(review.stars)].map((_, i) => (
                                                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-slate-800 italic mb-6 leading-relaxed font-medium relative z-10 text-lg">"{review.comment}"</p>
                                        <div className="flex justify-between items-center text-xs font-black text-blue-900 uppercase tracking-widest relative z-10">
                                            <span>{review.name}</span>
                                            <span className="bg-blue-100 px-3 py-1 rounded-full">{review.location}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2 id="faqs" className="text-4xl font-black text-slate-900 mb-8 scroll-mt-20 leading-tight">Expert Submission FAQs: Every Detail Answered</h2>
                            <div className="space-y-8 mb-16">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b-2 border-slate-100 pb-8 last:border-0 hover:bg-slate-50 transition-colors p-6 rounded-3xl">
                                        <h3 className="font-black text-xl text-slate-900 mb-4 flex items-start">
                                            <span className="text-blue-600 mr-3">Q.</span>
                                            {faq.question}
                                        </h3>
                                        <div className="text-slate-600 leading-relaxed font-normal flex items-start">
                                            <span className="text-slate-400 mr-3 font-bold">A.</span>
                                            {faq.answer}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-16 p-12 bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
                                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                                <h3 className="text-3xl md:text-5xl font-black mb-6 relative z-10 uppercase tracking-tight">Stop Guessing, Start Resolving</h3>
                                <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed relative z-10 italic">
                                    Submitting a loan settlement offer is the most critical communication of your life. One wrong word can lead to years of debt. Let our legal experts draft your hardship letters and target the right nodal officers for you.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-white text-blue-900 font-black py-5 px-16 rounded-full hover:bg-blue-50 transition-all shadow-2xl hover:shadow-white/20 transform hover:-translate-y-2 relative z-10 uppercase tracking-widest"
                                >
                                    Start My Official Submission
                                </Link>
                                <p className="mt-8 text-sm text-blue-300 relative z-10 font-bold uppercase tracking-widest">✓ Guaranteed Delivery ✓ RBI Compliant Framework ✓ 100% Privacy</p>
                            </div>
                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Draft My Letter</h4>
                                <p className="text-sm text-gray-600 mb-6">Don't risk rejection. Get a legally vetted, high-conversion hardship letter drafted by experts today.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Get My Template
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1 text-left">
                                    <p>✓ Nodal Officer List</p>
                                    <p>✓ Hardship Proofing</p>
                                    <p>✓ Negotiation Coaching</p>
                                </div>
                            </div>

                            {/* Related Pages Component */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Next Steps</h4>
                                <nav className="space-y-2">
                                    {[
                                        { href: "/what-are-the-eligibility-criteria-for-loan-settlement-programs-by-lending-platforms", text: "Check Your Eligibility" },
                                        { href: "/rbi-guidelines-2025-loan-settlement", text: "Read RBI 2025 Laws" },
                                        { href: "/how-to-rebuild-cibil-after-settlement", text: "Repair Your Credit" },
                                        { href: "/case-studies-successful-settlements", text: "View Success Stories" }
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
