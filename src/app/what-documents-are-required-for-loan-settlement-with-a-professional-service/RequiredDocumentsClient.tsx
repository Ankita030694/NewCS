'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function RequiredDocumentsClient() {
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
        { id: 'kyc-proofs', label: 'KYC & ID' },
        { id: 'loan-evidence', label: 'Loan Records' },
        { id: 'hardship-proof', label: 'Hardship Proof' },
        { id: 'financial-records', label: 'Financials' },
        { id: 'leverage-records', label: 'Legal Records' },
        { id: 'holy-grail-docs', label: 'Holy Grail Docs' },
        { id: 'digital-apps', label: 'Digital Apps' },
        { id: 'professional-checklist', label: 'Exert Checklist' },
        { id: 'common-mistakes', label: 'Common Mistakes' },
        { id: 'reviews', label: 'Reviews' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Conclusion' },
    ];

    const faqs = [
        {
            question: 'Can I settle a loan if I have lost my original loan agreement?',
            answer: 'Yes, you can. While having the original is better, the bank\'s account statement and the notices they send you are sufficient proof of the debt\'s existence.'
        },
        {
            question: 'Why does the bank need my PAN card for a settlement?',
            answer: 'The Income Tax Act mandates that banks report any "waiver of liability" above certain limits. They cannot file this report without your PAN.'
        },
        {
            question: 'What if I don\'t have a "Termination Letter" for my job?',
            answer: 'You can provide an email from your HR, a resignation acceptance, or simply 6 months of bank statements showing that your salary credits have stopped.'
        },
        {
            question: 'Is an Aadhaar OTP considered a valid signature for a settlement?',
            answer: 'Yes, under the IT Act and current RBI guidelines, an OTP-based e-signature is a legally binding way to accept a settlement offer in 2025.'
        },
        {
            question: 'What should I do if the bank refuses to give me a No Dues Certificate?',
            answer: 'If you have paid the full OTS amount on time and the bank is delaying the NDC, you can file a formal complaint with the Integrated Ombudsman of the RBI.'
        },
        {
            question: 'Do I need to provide documents of my spouse\'s income?',
            answer: 'Only if your spouse was a "Co-Applicant" or a "Guarantor" for the loan. If the loan was in your name only, your spouse\'s income is technically private, though showing a low "Household Income" can sometimes help your case.'
        },
        {
            question: 'How long should I keep my settlement documents?',
            answer: 'Permanently. Or at least for 10-15 years. Debt records can surface decades later during bank audits or when the debt is sold to an ARC. Your NDC is your only shield.'
        },
        {
            question: 'Can I settle without a CIBIL report?',
            answer: 'No major bank will process a settlement without checking your credit profile. Even if you don\'t provide it, they will pull it. Having your own copy just makes you better prepared.'
        },
        {
            question: 'What is a "Hardship Letter" and who should it be addressed to?',
            answer: 'It is a formal explanation of your financial crisis. It should be addressed to the "Nodal Officer" or the "Head of Collections" of the bank, not just your local branch manager.'
        },
        {
            question: 'Do I need an affidavit for a credit card settlement?',
            answer: 'Usually not for small amounts. But if your card debt is above 5 or 10 lakhs, the bank\'s policy might require a sworn statement of your assets and liabilities.'
        }
    ];

    const reviews = [
        {
            name: 'Rajesh Khanna',
            location: 'Delhi',
            stars: 5,
            comment: 'I didn\'t know where to start until I saw this checklist. The section on medical hardship docs was exactly what I needed to prove my case to SBI. Successfully settled my 12L debt.'
        },
        {
            name: 'Sunita Mehra',
            location: 'Gurgaon',
            stars: 5,
            comment: 'The focus on the No Dues Certificate (NDC) saved me. My bank tried to claim interest after 6 months, but I showed them my NOC and they backed off immediately. Must read!'
        },
        {
            name: 'Amit Patel',
            location: 'Ahmedabad',
            stars: 5,
            comment: 'Professional and thorough. Working with CredSettle was easy because I had all my docs ready using this guide. There is no better resource for distressed borrowers in India.'
        },
        {
            name: 'Monica Singh',
            location: 'Pune',
            stars: 5,
            comment: 'The digital loan app section helped me deal with a nasty harassment case. I took all the requested screenshots and the bank Ombudsman ruled in my favor within weeks.'
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
        ]
    };

    const reviewSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Required Documents for Loan Settlement Guide',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '2100',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-docs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-docs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <Script id="org-schema-docs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

            {/* Hero Section */}
            <section
                className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden"
                style={{
                    background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #0d47a1 0%, #000 100%)',
                    minHeight: '50vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div className="max-w-6xl mx-auto text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Required Documents for<br />
                        <span className="text-blue-300">Loan Settlement: 2025 Checklist</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Every document you need for a successful debt compromise—from KYC and Hardship Proof to the No Dues Certificate.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Download Full Checklist
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
                                        Required Documents for Loan Settlement
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* 3-Column Layout */}
            <div
                ref={mobTocRef}
                className="sticky top-0 z-40 lg:hidden bg-white border-b border-gray-200 shadow-sm overflow-x-auto no-scrollbar scroll-smooth py-3 px-4 flex gap-4 whitespace-nowrap"
            >
                {navLinks.map((link) => (
                    <a
                        key={link.id}
                        id={`mob-toc-${link.id}`}
                        href={`#${link.id}`}
                        className={`text-sm font-medium px-4 py-2 rounded-full transition-all flex-shrink-0 ${activeId === link.id
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'text-gray-600 bg-gray-50 hover:bg-gray-100'
                            }`}
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                            setActiveId(link.id);
                        }}
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Outline</h3>
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

                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction: Why Documentation is the Backbone of Debt Relief</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the high stakes world of debt settlement, information is power. When you approach a bank or a financial institution to ask for a "compromise," you are essentially asking them to admit a loss and let you walk away. To a bank, a loan is an asset; to you, it is a liability. To bridge this gap, you must provide a compelling, evidence backed story of why you cannot pay. This is where documentation becomes your greatest ally.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Many borrowers make the mistake of thinking that a "hardship" is something you just tell a bank officer over a cup of tea. In the 2025 Indian banking system, which is increasingly driven by algorithms, credit scores, and automated recovery platforms, a "verbal hardship" doesn\'t exist. If it isn\'t on paper (or a verified digital file), it didn\'t happen.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Whether you are working with a professional service like CredSettle or attempting a negotiation on your own, having a complete, organized "Settlement Dossier" is the difference between a 70% discount and a flat rejection. This guide will walk you through every single document you need—from the standard KYC to the more complex legal affidavits and medical proofs—ensuring you are prepared for every question the bank might throw at you.
                            </p>

                            <h2 id="kyc-proofs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Category 1: Standard KYC and Identity Proofs</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Every financial transaction in India begins with KYC (Know Your Customer). While the bank already has your documents from when you took the loan, you must provide updated versions to ensure there are no administrative hurdles.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>1. Aadhaar Card:</strong> In 2025, your Aadhaar is linked to your e-KYC and digital signatures. Ensure your mobile number is linked for OTP verification.</li>
                                    <li><strong>2. PAN Card:</strong> Mandatory for reporting high value settlements to the Income Tax Department. The name must match your loan account exactly.</li>
                                    <li><strong>3. Current Address Proof:</strong> Valid proofs include latest electricity bills, registered rent agreements, or your passport.</li>
                                </ul>
                            </div>

                            <h2 id="loan-evidence" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Category 2: Loan Evidence and History</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To settle a debt, you must first know exactly what you owe. Surprisingly, many borrowers lose track of their original loan documents over time.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>Loan Account Statement (Last 12-24 Months):</strong> This is perhaps the most important document in this category. It shows the Principal Component vs the Interest and Penalty Component. Professional negotiators use this statement to show how much of the Total Outstanding is actually just compounding penalties.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>Notice from Bank or ARC:</strong> If your loan has been sold to an Asset Reconstruction Company (ARC) or if the bank has sent you a "Legal Notice," keep these documents safely. They contain critical reference numbers for all correspondence.
                            </p>

                            <h2 id="hardship-proof" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Category 3: Proof of Genuine Hardship</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Banks don\'t settle because they are "nice." They settle because they realize you physically cannot pay. This requires documented proof.
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Income Proof:</strong> Salary slips for last 6 months, termination letters, or bank statements showing zero credits. For self-employed individuals, audited P&L statements showing business loss are best.</li>
                                <li><strong>Medical Records:</strong> Clinical summaries, hospital discharge papers, and medical bills are considered "High Quality Evidence" because they are objective and verifiable.</li>
                                <li><strong>A Detailed Monthly Budget:</strong> Provide a simple spreadsheet showing essential expenses (rent, groceries, fees). Show that after essentials, you have zero surplus for EMIs.</li>
                            </ul>

                            <h2 id="financial-records" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Category 4: Financial and Credit Records</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The bank will want to verify where your money is going. Transparency is the only way to build trust with a recovery manager.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>Bank Statements (All Active Accounts):</strong> You must provide the last 6-12 months of statements for all your bank accounts. This proves that you are not hiding cash in another account.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>Asset Disclosure Affidavit:</strong> In cases of high value debt (above 25 lakhs), the bank might ask for a Sworn Affidavit stating that you do not own hidden real estate or gold.
                            </p>

                            <h2 id="leverage-records" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Category 5: Communication and Legal Records</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you have been harassed or if the bank has violated RBI guidelines, you have leverage. Keep records of every interaction with recovery agents.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>Correspondence Log:</strong> Maintain a diary of every time you spoke to the bank. Note names, times, and summaries of conversations. Abusive language or calls at odd hours should be specifically highlighted.
                            </p>

                            <h2 id="holy-grail-docs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Category 6: The "Holy Grail" Documents</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Once the negotiation is successful, you must receive specific documents to ensure your debt is legally dead.
                            </p>
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-6">
                                <strong>1. The OTS Offer Letter:</strong> Must be on bank letterhead with a reference number, amount, deadline, and "Settled" status promise.
                                <br /><br />
                                <strong>2. No Dues Certificate (NDC):</strong> Your definitive legal proof that the account is closed and no further money is owed.
                            </div>

                            <h2 id="digital-apps" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Category 7: Documentation for Digital Lending Apps</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                With the rise of Instant Loan Apps, documentation is often purely digital.
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>App Screenshots:</strong> Detail screens, repayment dates, and permission screens.</li>
                                <li><strong>UPI Payment History:</strong> Evidence of all transfers made to the app.</li>
                                <li><strong>Harassment Screenshots:</strong> Contact with family/friends—vital for RBI Sachet portal reporting.</li>
                            </ul>

                            <h2 id="professional-checklist" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Checklist for Professional Settlement Services</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When working with experts like CredSettle, we ask for a Digital Vault of your documents. This includes an Authorization Letter and a Financial Hardship Questionnaire to build your case faster and more effectively than the bank\'s recovery department.
                            </p>

                            <h2 id="common-mistakes" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Common Mistakes in Loan Settlement Documentation</h2>
                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 mb-6 font-light text-gray-800">
                                <p className="mb-4"><strong>Mistake 1: Incomplete Statements.</strong> Providing 5 months instead of 6 makes banks assume you are hiding something. Always be 100% complete.</p>
                                <p className="mb-4"><strong>Mistake 2: Missing the OTS Deadline.</strong> Paying even one day late can void the settlement. Always keep your payment receipts.</p>
                                <p><strong>Mistake 3: Verbal Promises.</strong> A manager\'s promise over the phone means nothing without a printed, stamped letter from the bank.</p>
                            </div>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Successful Settlement Reviews</h2>
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

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Conclusion: Preparation is the Key to Debt Freedom</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Navigating a loan settlement is like fighting a legal battle where the Evidence is your documentation. By organizing your Identity, Loan, Hardship, and Financial records before you start the conversation, you signal to the bank that you are a serious, responsible borrower who is acting in good faith.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the banks are looking for "Clean Exits." They want to move on from bad loans as much as you want to move on from debt. But they need their records to be "Audit Proof." By providing them with a perfectly documented case, you are helping the bank officer say "Yes" to your request.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At CredSettle, we specialize in "Document Optimization." We know exactly which papers a particular bank values and how to present your hardship in a way that aligns with their internal policies.
                            </p>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Get Your Documentation Vault Ready</h3>
                                <p className="text-blue-800 mb-6">Don\'t let a missing paper be the reason you stay trapped in debt. Our professional negotiators will help you compile and present the strongest possible case to your lender.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Expert Document Help
                                </Link>
                            </div>

                        </article>
                    </main>

                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Need a Document Checklist?</h4>
                                <p className="text-sm text-gray-600 mb-6">Every bank has different requirements. Get a personalized list for your lender today.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Start My Roadmap
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✓ RBI Compliant Guide</p>
                                    <p>✓ Bank-Specific Checklist</p>
                                    <p>✓ Hardship Letter Templates</p>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Resources</h4>
                                <nav className="space-y-3">
                                    <Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="block text-sm text-blue-600 hover:underline">How Settlement Works</Link>
                                    <Link href="/is-loan-settlement-a-good-option" className="block text-sm text-blue-600 hover:underline">Pros & Cons Guide</Link>
                                    <Link href="/how-to-check-if-a-loan-settlement-offer-is-genuine-on-digital-platforms" className="block text-sm text-blue-600 hover:underline">Verify Offer Genuineness</Link>
                                    <Link href="/can-i-settle-loan-for-free" className="block text-sm text-blue-600 hover:underline">Free Settlement Paths</Link>
                                </nav>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
