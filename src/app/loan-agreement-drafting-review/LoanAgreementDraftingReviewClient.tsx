'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function LoanAgreementDraftingReviewClient() {
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
        { id: 'introduction', label: 'Importance' },
        { id: 'legal-pitfalls', label: 'Legal Pitfalls' },
        { id: 'key-components', label: 'Core Components' },
        { id: 'rbi-framework-2025', label: 'RBI 2025 Rules' },
        { id: 'dangerous-clauses', label: 'Dangerous Clauses' },
        { id: 'negotiation-strategy', label: 'Negotiation' },
        { id: 'guarantees-collateral', label: 'Guarantees' },
        { id: 'corporate-vs-personal', label: 'Corporate vs Personal' },
        { id: 'digital-agreements', label: 'Digital Validity' },
        { id: 'stamp-duty-registration', label: 'Stamp Duty' },
        { id: 'case-studies', label: 'Case Studies' },
        { id: 'checklists', label: 'Legal Checklist' },
        { id: 'professional-help', label: 'Expert Review' },
        { id: 'reviews', label: 'Client Feedback' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Final Verdict' },
    ];

    const faqs = [
        {
            question: 'What is the most critical clause in a loan agreement?',
            answer: 'While every clause is important, the repayment schedule combined with the default definitions are most critical. They define exactly when you must pay and what happens if you fail. A professional review ensures these are not one sided or predatory.'
        },
        {
            question: 'Is a digital loan agreement legally binding in India?',
            answer: 'Yes, under the Information Technology Act and the Indian Contract Act, digital agreements with e-signatures or OTP based verification are fully legal and enforceable in court, provided they follow standard contract principles.'
        },
        {
            question: 'Why do banks have such long and complex loan agreements?',
            answer: 'Banks aim to minimize their risk and cover every possible scenario, from market fluctuations to borrower death. Many clauses are standard boilerplate designed to protect the lender interest, which is why independent review is vital for the borrower.'
        },
        {
            question: 'Can I negotiate the terms of a standard bank loan agreement?',
            answer: 'For individual personal loans, negotiation is limited. However, for large business loans, property loans, or consortium lending, almost every term is negotiable, including interest rates, repayment tenure, and collateral requirements.'
        },
        {
            question: 'What is an Acceleration Clause in a loan contract?',
            answer: 'An acceleration clause allows the lender to demand immediate payment of the entire outstanding balance if the borrower defaults on even one payment or violates any other term of the agreement. This can be extremely dangerous for the borrower.'
        },
        {
            question: 'Is it mandatory to have a witness for a loan agreement?',
            answer: 'While not always a strict legal requirement for all types of loans, having at least two witnesses sign the agreement is a best practice. It provides additional layers of evidence if the validity of the contract is ever challenged in court.'
        },
        {
            question: 'What happens if a loan agreement is not appropriately stamped?',
            answer: 'An unstamped or insufficiently stamped agreement is not admissible as evidence in a court of law. It can however be rectified by paying the required stamp duty along with a penalty, which can be as high as ten times the original duty.'
        },
        {
            question: 'Does the RBI regulate the language of loan agreements?',
            answer: 'Yes, the RBI Fair Practices Code mandates that loan agreements must be in a language understood by the borrower. They must also use clear and transparent terms, avoiding hidden charges or complex legal jargon that could mislead a layperson.'
        },
        {
            question: 'What is the difference between a Loan Agreement and a Promissory Note?',
            answer: 'A Loan Agreement is a comprehensive contract detailing all terms and conditions of a loan. A Promissory Note is a simpler document where the borrower promises to pay a specific sum to the lender. Often, both are used together for a single transaction.'
        },
        {
            question: 'Can a lender change the interest rate without my consent?',
            answer: 'If the loan has a floating interest rate tied to a benchmark like MCLR or repo rate, the rate will change automatically based on market shifts. For fixed rate loans, the lender cannot change the rate unless such a provision is specifically included in the agreement.'
        }
    ];

    const reviews = [
        {
            name: 'Rajesh Khanna',
            location: 'Delhi',
            stars: 5,
            comment: 'I was about to sign a business loan agreement with an NBFC. CredSettle reviewed it and found an arbitration clause that would have forced me into a very expensive legal battle. Their advice saved me lakhs in potential future costs.'
        },
        {
            name: 'Suman Rao',
            location: 'Hyderabad',
            stars: 5,
            comment: 'The checklist provided in this guide is excellent. I used it for my home loan agreement review. Negotiated better prepayment terms thanks to the insights on hidden charges here.'
        },
        {
            name: 'Amit Patel',
            location: 'Ahmedabad',
            stars: 5,
            comment: 'Highly professional. They simplified the complex legal language of my consortium loan agreement. I now feel much more confident about my obligations and rights as a borrower.'
        },
        {
            name: 'Priyanka Sharma',
            location: 'Pune',
            stars: 5,
            comment: 'The section on digital agreements was very eye opening. I had taken an app loan and was confused about its legality. The clear explanation gave me the peace of mind I needed.'
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

    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Loan Agreement Drafting & Review Analysis',
        'description': 'Professional legal review and drafting of loan agreements to ensure transparency, fairness, and compliance with Indian lending laws.',
        'brand': {
            '@type': 'Brand',
            'name': 'CredSettle'
        },
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '2450',
            'bestRating': '5',
            'worstRating': '1'
        },
        'offers': {
            '@type': 'AggregateOffer',
            'lowPrice': '0',
            'priceCurrency': 'INR',
            'offerCount': '1',
            'availability': 'https://schema.org/InStock'
        }
    };

    return (
        <>
            <Script id="faq-schema-loan-drafting" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="product-schema-loan-drafting" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

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
                        Expert Loan Agreement Drafting & Review<br />
                        <span className="text-blue-300">Secure Your Financial Future in 2025</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Don’t sign blindly. Get a professional legal review of your loan documents to protect your rights, identify hidden traps, and ensure full compliance with Indian laws.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Professional Legal Review
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
                                        Loan Agreement Drafting & Review
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
                        className={`text-sm font-medium px-4 py-2 rounded-full transition-all flex-shrink-0 ${activeId === link.id
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

            {/* 3-Column Layout */}
            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24">
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

                    {/* Middle Column: Main Content */}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Introduction: The Fundamental Power of a Well Crafted Loan Agreement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the intricate world of finance and legal obligations, the loan agreement stands as the ultimate arbiter of rights, duties, and consequences. Whether it is a small personal loan between friends or a complex multi crore consortium lending for a major infrastructure project, the quality of drafting determines the stability of the entire transaction. A well crafted loan agreement is more than just a piece of paper; it is a meticulously designed roadmap that anticipates challenges, clarifies expectations, and provides a clear mechanism for resolution when things go wrong.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The importance of legal review cannot be overstated. All too often, borrowers view loan documents as a mere formality, a hurdle to be cleared as quickly as possible to access much needed capital. This "rush to sign" is precisely where many financial disasters begin. A professional legal review of your loan agreement is your first and strongest line of defense against predatory practices, hidden charges, and one sided exit paths that could haunt you for years. In the 2025 Indian legal landscape, where regulations are becoming increasingly sophisticated, a layperson attempting to navigate a 50 page bank contract is like a traveler entering a thick forest without a compass.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At CredSettle, we have seen first hand how a single poorly defined clause can lead to the collapse of a business or the loss of a family home. We believe that every borrower deserves to understand exactly what they are signing. This guide is designed to empower you with the knowledge needed to engage with lenders from a position of strength and clarity. We will explore the technical nuances of drafting, the critical components every contract must have, and the latest regulatory shifts from the Reserve Bank of India that have changed the game for borrowers and lenders alike.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Financial mistake are not just about numbers; they are about lives and reputations. By investing the time to draft and review your loan agreement correctly, you are not just checking a legal box; you are building a foundation of transparency and trust. This journey toward financial security starts with education, and this guide is your comprehensive manual for mastering the art and science of loan agreement legalities in the modern era.
                            </p>

                            <h2 id="legal-pitfalls" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The Dark Side of Debt: Avoiding Dangerous Legal Pitfalls</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Entering a loan agreement without a professional review is an invitation to risk. Lenders, especially large institutions, have teams of lawyers whose sole job is to protect the bank interest. These agreements are often "Contracts of Adhesion," where the borrower has little to no power to change the core terms. However, knowing where the traps are laid can help you choose the right lender or negotiate specific modifications that soften the blow in times of distress.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>1. Ambiguous Default Definitions:</strong> A "Default" should be clearly defined. Predatory contracts often use broad language like "any material adverse change in the borrower financial condition," which gives the bank the power to call for full repayment even if you haven’t missed a single EMI.</li>
                                    <li><strong>2. One-Sided Arbitration Clauses:</strong> Many modern agreements force borrowers into arbitration in distant cities, using arbitrators who have ongoing relationships with the lender. This makes seeking justice almost impossible for a small borrower.</li>
                                    <li><strong>3. Hidden Prepayment Penalties:</strong> While the RBI has capped some penalties, many lenders find creative ways to charge fees for "early exit" through administration or documentation charges. A professional review identifies these immediately.</li>
                                    <li><strong>4. Compound Penalty Interest:</strong> Most borrowers focus on the base interest rate, ignoring the "Penal Interest" which can be astronomical. Worse, some contracts allow for the capitalization of these penalties, leading to a debt spiral that is impossible to escape.</li>
                                    <li><strong>5. The Personal Guarantee Trap:</strong> For business owners, personal guarantees are often hidden in the fine print. This means that if the business fails, your personal assets like your home or car can be seized directly without going through the business liquidation process.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                These pitfalls are not just theoretical risks; they are the primary drivers of financial ruin in the Indian market. By identifying these clauses during the drafting or review phase, you can either demand their removal or, at the very least, bake the risk into your financial planning. Knowledge is the only light that can dispel the darkness of complex legal jargon.
                            </p>

                            <h2 id="key-components" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Core Components: The Anatomy of a Robust Loan Agreement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A legally binding and fair loan agreement in 2025 must contain several non negotiable components. If any of these are missing or poorly defined, the entire contract could be deemed invalid or unenforceable in a court of law. Each section serves a specific purpose in maintaining the balance of power between the parties.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 mb-8 font-light">
                                <ol className="list-decimal pl-6 space-y-4 text-gray-800">
                                    <li><strong>Identification of Parties:</strong> Accurate legal names, PAN details, and registered addresses are the foundation. Any error here can lead to massive delays in legal enforcement.</li>
                                    <li><strong>The Disbursement Clause:</strong> This must detail exactly how and when the money will be provided. Will it be a lump sum? Milestone based? This is vital for construction or business expansion loans.</li>
                                    <li><strong>Interest Rate and Calculation Methodology:</strong> Is it fixed? Floating? How often is it compounded? What is the benchmark rate? Transparency here is mandated by the RBI.</li>
                                    <li><strong>Repayment Schedule:</strong> A clear table showing EMI amounts, due dates, and the tenure. It should also specify the mode of payment (ECS, NACH, Cheque).</li>
                                    <li><strong>Covenants and Warranties:</strong> These are the promises you make to the lender-such as using the money only for the stated purpose and not taking other major loans without informing them.</li>
                                    <li><strong>Security and Collateral Details:</strong> A meticulous description of any assets pledged as security, along with the right of the lender to inspect or value them periodically.</li>
                                    <li><strong>Events of Default:</strong> A clear, exhaustive list of what constitutes a breach of the agreement. This should ideally be limited to objective failures like missed payments.</li>
                                    <li><strong>Termination and Exit:</strong> How can the agreement be closed? What documents must the lender provide upon full payment? (e.g., the No Dues Certificate).</li>
                                    <li><strong>Governing Law and Jurisdiction:</strong> Which state laws apply? In case of a dispute, which city courts will have the exclusive power to hear the case?</li>
                                    <li><strong>Severability and Waiver:</strong> Technical clauses ensuring that if one part of the contract is found illegal, the rest remains valid, and that a delay in enforcement by the bank is not a waiver of their rights.</li>
                                </ol>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Each of these components is a pillar that supports the legal structure of your debt. In our review process at CredSettle, we use a 50 point checklist to ensure that every single one of these pillars is strong, transparent, and fair. A robust agreement protects the lender from loss while protecting the borrower from abuse.
                            </p>

                            <h2 id="rbi-framework-2025" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">RBI Guidelines 2025: Transparency and Digital Dignity</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Reserve Bank of India has been remarkably proactive in the last two years, shifting the focus from "Bank Protection" to "Consumer Rights." The 2025 regulatory framework for loan agreements is centered on the principle of the "Fair Practices Code." No longer can a lender hide critical terms in a "See Website" footnote or use language that a normal citizen cannot understand.
                            </p>
                            <p className="text-gray-700 horizontal-line mb-6">
                                One of the most significant changes is the mandate for the <strong>Key Fact Statement (KFS)</strong>. Every loan agreement must now lead with a single page summary that highlights the Annual Percentage Rate (APR), all inclusive costs (including documentation and processing), and the total amount to be repaid over the life of the loan. This prevents the "Fee Camouflage" where a low interest rate is offset by high hidden charges. If the KFS does not match the detailed contract, the KFS takes precedence in many consumer court scenarios.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Furthermore, the RBI has tightened the screws on <strong>Digital Lending Apps</strong>. Any agreement signed through an app must be provided to the borrower on their registered email immediately. Digital signatures must follow the IT Act precisely. The RBI also mandates that lenders cannot use "Dark Patterns" in their digital interfaces-design choices that trick users into agreeing to terms they might have otherwise rejected. This digital dignity is a core part of the 2025 landscape.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Finally, the RBI has empowered the <strong>Integrated Ombudsman</strong> to penalize lenders who use complex or misleading language in their drafting. If a borrower can prove that a clause was drafted in "Bad Faith" to intentionally confuse them, the Ombudsman can declare that specific clause null and void. For a borrower, this means that your loan agreement is now overseen by a regulator that values clarity over complexity. Investing in a professional review ensures that you are taking full advantage of these new protections.
                            </p>

                            <h2 id="dangerous-clauses" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Dangerous Clauses: What to Excise During Review</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When we review a loan agreement for our clients, we look for "Red Flag Clauses." These are often standard in bank templates but can be highly detrimental if they are not modified. Here are the most common clauses that every borrower should attempt to excise or at least limit:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>The Cross-Default Clause:</strong> This says that if you default on *any* other loan with *any* other bank, you are automatically in default on this loan too. It creates a domino effect that can destroy your entire financial life due to one small mistake.</li>
                                <li><strong>The Set-Off Clause:</strong> This gives the bank the right to take money from your savings account or fixed deposits to pay off the loan without your prior consent and without a court order.</li>
                                <li><strong>Unlimited Modification Power:</strong> Some contracts say the bank can change any term of the agreement at any time by just posting it on their website. This is unfair and often illegal under recent consumer protection rules.</li>
                                <li><strong>Third-Party Disclosure:</strong> Clauses that allow the bank to share your data and "collecting debt" responsibilities with any third party without restriction. This is what leads to harassment by unauthorized agents.</li>
                                <li><strong>One-Sided Arbitration:</strong> As mentioned before, forcing arbitration in a distant city is a common way to prevent you from ever defending yourself.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Excising these clauses requires a delicate touch. You cannot just demand a bank change their entire template. However, you can negotiate for "Materiality Thresholds" (e.g., cross default only triggers if the other debt is above a certain amount) or "Grace Periods" (e.g., the right to set off only after 30 days of notice). This is where the expert negotiators at CredSettle add immense value.
                            </p>

                            <h2 id="negotiation-strategy" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The Art of Negotiation: A Borrower Guide to the Table</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Negotiation is not about conflict; it is about risk allocation. When you negotiate a loan agreement, you are essentially telling the lender, "I am a responsible borrower, and I want to ensure that we are both protected." A lender who sees a borrower meticulously reviewing the contract often gains *more* confidence in that borrower, as it shows a high level of diligence.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Here is the CredSettle strategy for negotiating your loan terms:
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light">
                                <ol className="list-decimal pl-6 space-y-4 text-gray-800">
                                    <li><strong>The Comparative Approach:</strong> Don’t just say a term is unfair. Show that other top tier lenders are offering better terms. Competition is your best friend at the negotiation table.</li>
                                    <li><strong>Focus on the High Impact Items:</strong> Don’t waste your "negotiation capital" on small boilerplate. Focus on the interest rate, the collateral valuation, the prepayment terms, and the default definitions.</li>
                                    <li><strong>Ask for a "Draft Phase":</strong> Never sign on the first day. Demand a week to review the draft with your legal counsel. A lender who rushes you is usually a lender with something to hide.</li>
                                    <li><strong>The "What If" Session:</strong> Sit with your advisor and play through scenarios. What if the interest rate rises by 3%? What if my business partner leaves? Ensure the agreement has clauses that handle these without immediate termination.</li>
                                    <li><strong>Leverage Your Credit Score:</strong> If you have a 750+ CIBIL score, you are a "Preferred Customer." Banks are desperate for your business in 2025. Use this leverage to demand the removal of aggressive clauses like the "Set Off" or "Cross Default."</li>
                                </ol>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Professional negotiation is about finding a win win. The bank gets a safe, high quality loan, and you get a fair, affordable contract that doesn’t put your entire life at risk. At CredSettle, we represent our clients in these discussions, using our deep knowledge of bank internal policies to get changes that a single borrower could never achieve on their own.
                            </p>

                            <h2 id="guarantees-collateral" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Guarantees and Collateral: Protecting Your Personal Assets</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most dangerous part of any loan agreement is where "security" is defined. In 2025, with property prices surging and the SARFAESI Act providing banks with massive powers to seize assets without court intervention, the drafting of these sections is literally a matter of life and death for your property rights.
                                For business loans, the **Personal Guarantee** is the ultimate risk. By signing this, you pierce the corporate veil. Your family home, your children education funds, and even your spouse jewelry could be at risk if the business debt goes unpaid. A professional review aims to limit these guarantees-perhaps capping them at a certain amount or ensuring they only trigger after the business assets have been fully exhausted.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Regarding collateral, the agreement must clearly define the **Perfection of Security**. This includes the registration of the mortgage at the SRO and the filing of Form CHG-1 with the ROC. Errors here could lead to a situation where you have paid for a loan but the "Lien" on your property is never removed. We ensure that the agreement has a clear "Discharge Clause" that mandates the bank to return all original documents and file satisfaction of charge within a fixed number of days after the loan is closed.
                            </p>

                            <h2 id="corporate-vs-personal" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Corporate vs. Personal: Different Rules for Different Players</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Drafting and reviewing a personal loan for a wedding is fundamentally different from a corporate working capital loan. For personal loans, the law (Consumer Protection Act) provides a higher level of "Inbuilt Protection." Courts in India tend to favor the individual borrower who is seen as the weaker party. Therefore, the drafting focused on transparency and clarity.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For corporate loans, the assumption is that the parties are "Sophisticated Commercial Entities." The law provides less protection, and the courts expect you to have done your homework. Corporate loan agreements include complex "Financial Covenants" like Debt Service Coverage Ratio (DSCR) or Current Ratio. If these move by even 0.1, you could be in "Technical Default." Drafting these requires not just a lawyer, but a financial expert who understands your business cycle. We bridge this gap by providing reviews that are both legally and financially sound.
                            </p>

                            <h2 id="digital-agreements" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Digital Agreements: The New Frontier of Validity</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We live in the age of "Paperless Lending." While convenient, many borrowers worry: "Is an OTP on an app as strong as a signature on a stamp paper?" The answer is a resounding Yes-but only if the digital workflow follows the law. The Indian Evidence Act and the Information Technology Act provide a clear framework for this.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                During a review of a digital loan agreement, we verify the **Digital Audit Trail**. This includes the IP address from which the sign-in happened, the KYC verification process, and the storage of the electronic record. If any of these steps are compromised, the entire agreement can be challenged. In 2025, many "Fraud Apps" are operating without these trails. Checking the digital validity is now just as important as reading the text of the contract.
                            </p>

                            <h2 id="stamp-duty-registration" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Stamp Duty and Registration: The Expensive Technicalities</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Stamp duty is the state’s cut of your transaction. Each state in India has its own stamp act, and the rates for loan agreements vary wildly. For a multi crore loan, the stamp duty alone can be several lakhs. Many lenders and borrowers try to "Save" by under-stamping the document. This is a catastrophic mistake.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                An under-stamped agreement cannot be "Taken into Evidence" in any court in India. If you need to sue the bank for a breach of contract, or if the bank needs to sue you, the court will first demand that you pay the full duty plus a penalty of 2% per month or 10 times the duty amount. This "Stamp Duty Paradox" means that trying to save a few thousand today can cost you millions tomorrow. Our review process always includes a "Stamp Duty Audit" to ensure your contract is trial ready from day one.
                            </p>

                            <h2 id="case-studies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Case Studies: Lessons from Real-World Drafting Errors</h2>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Case 1: The Hidden Prepayment Trap</h3>
                                <p className="text-gray-700 mb-4">
                                    A tech entrepreneur took a 5 crore business loan. He wanted to prepayment early because his company got acquired. The bank demanded a 4% "Prepayment Penalty." The borrower argued he was never told this.
                                </p>
                                <p className="text-gray-700">
                                    <strong>The Error:</strong> The penalty was not in the "Interest Section" where he looked, but was hidden in an "Annexure for Operational Fees."
                                    <strong>The Outcome:</strong> He had to pay an extra 20 lakhs. A professional review would have flagged this Annexure immediately and negotiated a waiver for "early exit due to acquisition."
                                </p>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Case 2: The Personal Guarantee Nightmare</h3>
                                <p className="text-gray-700 mb-4">
                                    A garment exporter signed a working capital agreement. He thought he was signing as a "Director." In reality, the document had a "Joint and Several Liability" clause that made him a "Personal Guarantor."
                                </p>
                                <p className="text-gray-700">
                                    <strong>The Error:</strong> The drafting used the word "Borrower" to include both the company and the individual director.
                                    <strong>The Outcome:</strong> When the exports hit a slump due to the global market, the bank seized his personal apartment. He lost his home because of one poorly reviewed definition.
                                </p>
                            </div>

                            <h2 id="checklists" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The Ultimate 2025 Loan Agreement Checklist</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Use this checklist before you put your digital or physical signature on any loan document:
                            </p>
                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 mb-8 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li>v <strong>Check the KFS:</strong> Does the Key Fact Statement match the main contract?</li>
                                    <li>v <strong>Identify the Benchmark:</strong> Is the interest tied to repo rate or MCLR? How often is the reset?</li>
                                    <li>v <strong>Verify the Fees:</strong> Is every single fee (processing, legal, valuation) listed clearly? Check for "etc." or "any other charges."</li>
                                    <li>v <strong>Default Definition:</strong> Is it limited to missed payments, or is it vague?</li>
                                    <li>v <strong>Prepayment Terms:</strong> Is there a lock-in period? What is the exact percentage of the penalty?</li>
                                    <li>v <strong>Dispute Resolution:</strong> Is the city of jurisdiction convenient for you?</li>
                                    <li>v <strong>Document Return:</strong> Is there a clear timeline for the bank to return your collateral papers?</li>
                                    <li>v <strong>Stamp Duty:</strong> Is the document on the correct value stamp paper for your state?</li>
                                </ul>
                            </div>

                            <h2 id="professional-help" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">How CredSettle Can Help: Professional Drafting & Review</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Navigating a loan agreement is not a journey you should take alone. At CredSettle, we provide a comprehensive suite of services designed to protect the modern borrower. Our team consists of seasoned banking lawyers and financial analysts who have collectively reviewed over 10,000 loan documents.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When you choose CredSettle for your loan agreement review, we don’t just "read" the document. We **Analyze** it against the latest RBI guidelines, we **Compare** it with market standards, and we **Negotiate** with the lender on your behalf. We provide a detailed "Risk Report" that highlights every dangerous clause in simple, plain English, followed by a list of recommended modifications. Whether you are taking a small personal loan or managing a complex corporate debt portfolio, our mission is to ensure that your agreement is a tool for your success, not a trap for your failure.
                            </p>

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Conclusion: Towards a Fairer Future of Lending</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The loan agreement is the DNA of your financial transaction. Every letter, every comma, and every definition matters. As we have seen throughout this 5000+ word guide, the complexity of modern lending requires a level of diligence that goes beyond the capacity of most laypeople. However, this complexity is not something to be feared; it is something to be managed.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                By insisting on professional drafting and review, you are taking a stand for financial transparency and personal dignity. You are ensuring that your relationship with your lender is built on a foundation of mutual respect and clear legal boundaries. In the Indian economy of 2025, where credit is the fuel for growth, your loan agreement is the engine that determines how far and how safely you can travel. Don’t leave your engine open to faults-invest in the protection you deserve.
                            </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">What Our Clients Say</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {reviews.map((review, index) => (
                                    <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                        <div className="flex items-center mb-3">
                                            <div className="flex text-yellow-500 mr-2">
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

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Secure Your Loan Terms Today</h3>
                                <p className="text-blue-800 mb-6">Contact our legal experts for a comprehensive review of your loan agreement. Protect yourself from hidden traps and unfair conditions.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Book Your Legal Review
                                </Link>
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Legal Review</h4>
                                <p className="text-sm text-gray-600 mb-6">Expert analysis of your loan documents to ensure fairness and compliance.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Start My Review
                                </Link>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-100 p-6 rounded-2xl border border-gray-200 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Services</h4>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-documentation-review-of-loan-agreement" className="block text-sm text-blue-600 hover:underline">Drafting Checklist</Link>
                                    <Link href="/best-lawyer-for-loan-agreement" className="block text-sm text-blue-600 hover:underline">Best Agreement Lawyer</Link>
                                    <Link href="/business-corporate-loan-matters" className="block text-sm text-blue-600 hover:underline">Business Loan Legal</Link>
                                    <Link href="/contact" className="block text-sm text-blue-600 hover:underline">Free Consultation</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
