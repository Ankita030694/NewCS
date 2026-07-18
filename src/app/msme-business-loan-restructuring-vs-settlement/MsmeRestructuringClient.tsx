'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function MsmeRestructuringClient() {
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
        { id: 'msme-debt-crisis', label: 'Understanding the MSME Debt Crisis' },
        { id: 'restructuring-lifeline', label: 'Restructuring: The Survival Lifeline' },
        { id: 'eligibility-criteria', label: 'Eligibility Criteria Checklist' },
        { id: 'impact-on-cmr', label: 'Impact on Business Credit Score' },
        { id: 'ots-exit-strategy', label: 'OTS: The Final Exit Strategy' },
        { id: 'when-is-ots-viable', label: 'When is OTS the Only Option?' },
        { id: 'negotiation-process', label: 'The Negotiation Process' },
        { id: 'comparing-outcomes', label: 'Comparing Restructuring vs Settlement' },
        { id: 'success-story', label: 'Success Story: Rescuing an MSME' },
        { id: 'faqs', label: 'Frequently Asked Questions' },
    ];

    const faqs = [
        {
            question: 'What is the difference between MSME loan restructuring and settlement?',
            answer: 'Restructuring involves modifying the terms of your existing loan (like extending tenure or reducing interest) to make EMIs affordable, allowing you to repay the full principal and keep a clean credit score. Settlement (OTS) means paying a negotiated lump sum that is less than the total outstanding to close the account, which negatively impacts your commercial CIBIL score.'
        },
        {
            question: 'Can an MSME account be restructured after it becomes an NPA?',
            answer: 'Generally, banks prefer restructuring before an account is classified as a Non-Performing Asset (NPA). However, under specific RBI frameworks for stressed MSMEs, restructuring can sometimes be negotiated even after NPA classification, provided the business shows viability.'
        },
        {
            question: 'How does a loan settlement affect my company\'s ability to get future loans?',
            answer: 'A loan settlement significantly damages your Company Credit Report (CMR) and personal CIBIL score, marking the account as "Settled". This makes it extremely difficult to secure institutional credit for your business for several years.'
        },
        {
            question: 'Are MSMEs protected from SARFAESI Act proceedings during restructuring?',
            answer: 'Yes, once a formal restructuring plan is submitted and accepted by the lending consortium, recovery actions under the SARFAESI Act are typically put on hold to allow the business to rehabilitate.'
        },
        {
            question: 'What documents are required to apply for MSME loan restructuring?',
            answer: 'You will need a detailed restructuring proposal (Resolution Plan), projected cash flows, audited balance sheets, proof of MSME registration (Udyam), and a justification for the financial distress.'
        },
        {
            question: 'Is it possible to negotiate an OTS without closing down the business?',
            answer: 'Yes, it is entirely possible. An OTS simply settles the debt with the specific bank. You can continue operating your business using internal accruals or alternative non-institutional funding sources, though institutional borrowing will be restricted.'
        }
    ];

    const reviews = [
        {
            name: 'Rajesh Mehta',
            location: 'Ludhiana',
            stars: 5,
            comment: 'We thought our manufacturing unit was doomed when the bank issued an NPA notice. CredSettle guided us through the RBI restructuring framework, saving our factory from SARFAESI auction and reducing our EMIs by 40%.'
        },
        {
            name: 'Sunita Aggarwal',
            location: 'Surat',
            stars: 5,
            comment: 'Our retail business took a massive hit, and we couldn\'t service our CC limit. The legal team helped us negotiate an OTS that saved us over 50 lakhs, allowing us to pivot the business without the bank breathing down our necks.'
        }
    ];

    return (
        <>
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
                        MSME Loan Restructuring vs Settlement:<br />
                        <span className="text-blue-300">Saving Your Company</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Navigate working capital defaults legally. Learn when to restructure for survival and when to execute a One Time Settlement.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Consult an MSME Debt Expert
                        </Link>
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
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
                                        MSME Restructuring vs Settlement
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
                className="sticky top-[56px] z-40 lg:hidden bg-white border-b border-gray-200 shadow-sm overflow-x-auto no-scrollbar scroll-smooth py-3 px-4 flex gap-4 whitespace-nowrap"
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
                            document.querySelector(`#${link.id}`)?.scrollIntoView({ behavior: 'smooth' });
                            setActiveId(link.id);
                        }}
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Left Column: TOC */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20">
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

                    {/* Middle Column: Content */}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                            
                            <p className="text-gray-700 leading-relaxed mb-6 font-semibold">
                                Indian MSMEs are the backbone of the economy, yet thousands face severe working capital crunches leading to loan defaults every year. When an MSME account nears NPA status, promoters often panic and assume that shutting down or settling the debt and destroying their commercial CIBIL score is the only way out, completely unaware of the RBI's specialized restructuring frameworks designed to rehabilitate stressed businesses.
                            </p>

                            <h2 id="msme-debt-crisis" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Understanding the MSME Debt Crisis in India</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Micro, Small, and Medium Enterprises (MSMEs) operate on incredibly tight margins and are highly susceptible to macroeconomic shocks. A sudden delay in receivables from large corporate clients, fluctuations in raw material costs, or unforeseen global supply chain disruptions can instantly wipe out a small company's working capital. When this happens, servicing high interest Cash Credit (CC) limits, Overdraft (OD) facilities, or unsecured business loans becomes impossible. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The banking system, unfortunately, is quick to react defensively. Once payments are delayed by just 30 to 60 days, the account is tagged as a Special Mention Account (SMA-1 or SMA-2). At this juncture, the bank often freezes further credit lines, turning a temporary cash flow problem into a permanent liquidity crisis. If the default crosses 90 days, the account plunges into the Non-Performing Asset (NPA) category. This triggers aggressive recovery mechanisms, including the invocation of the SARFAESI Act, which allows banks to auction mortgaged factory premises or residential properties without court intervention.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Confronted with these draconian threats, many promoters seek out the <Link href="/best-lawyer-for-msme-business-loan-dispute" className="text-blue-600 hover:underline">best lawyer for msme business loan dispute</Link> to simply buy time. However, buying time without a strategic resolution plan only increases the penal interest burden. The critical decision every stressed MSME must make is whether the business model is still fundamentally viable. If it is viable, loan restructuring is the correct path. If the core business has irreparably failed, a One Time Settlement (OTS) is the necessary damage control measure.
                            </p>

                            <h2 id="restructuring-lifeline" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">MSME Loan Restructuring: The Survival Lifeline</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Loan restructuring is a formal mechanism recognized by the Reserve Bank of India (RBI) that allows a stressed MSME to renegotiate the terms of its existing debt to align with its current, reduced cash flow. The objective of restructuring is rehabilitation, not liquidation. Banks actually prefer restructuring over NPA classification because it prevents them from having to make massive provisioning losses on their own balance sheets.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A typical restructuring package may include a moratorium (a holiday period) on principal repayments, an extension of the loan tenure to reduce the monthly EMI burden, a reduction in the interest rate, or the conversion of unpaid interest into a separate Funded Interest Term Loan (FITL). In some advanced cases, banks may even convert a portion of the debt into equity, although this is rare for smaller enterprises. The key advantage of restructuring is that the borrower agrees to repay the entire principal amount over a longer period, which satisfies the bank and keeps the business operational.
                            </p>

                            {/* Section Type: Eligibility Checklist */}
                            <h3 id="eligibility-criteria" className="text-2xl font-bold text-gray-800 mt-8 mb-4">Eligibility Criteria for Restructuring</h3>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200 mb-6">
                                <p className="text-gray-700 mb-4 font-semibold">To qualify for most RBI mandated MSME restructuring schemes, a business must typically meet the following criteria:</p>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        <span className="text-gray-700"><strong>Udyam Registration:</strong> The enterprise must be officially registered as an MSME on the government Udyam portal.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        <span className="text-gray-700"><strong>Standard Account Status:</strong> The account must have been classified as 'Standard' on a specific cutoff date prior to the crisis. Accounts already deep into NPA territory face much higher hurdles for restructuring.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        <span className="text-gray-700"><strong>Viability Plan:</strong> The promoter must submit a robust, data driven Techno-Economic Viability (TEV) report proving that the business can generate sufficient cash flow to service the restructured debt.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        <span className="text-gray-700"><strong>No Fraud Findings:</strong> The account must not have been flagged for fraud, diversion of funds, or willful default by any forensic audit.</span>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Crafting the viability plan is the most complex part of this process. Banks will heavily scrutinize the projected cash flows. This is where engaging financial consultants alongside legal experts specializing in <Link href="/SME-loan-dispute-resolution" className="text-blue-600 hover:underline">SME loan dispute resolution</Link> becomes vital. If the bank rejects the restructuring proposal, the account will inevitably slip into NPA status, leaving settlement as the only alternative.
                            </p>

                            <h3 id="impact-on-cmr" className="text-2xl font-bold text-gray-800 mt-8 mb-4">Impact on Business Credit Score (CMR)</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Preserving the Company Credit Report (CMR) ranking is the primary reason promoters fight for restructuring. The CMR rank (ranging from CMR-1, which is excellent, to CMR-10, which is high risk) determines an MSME's ability to secure future working capital, participate in government tenders, and negotiate credit terms with large suppliers. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a loan is successfully restructured before it becomes an NPA, the account retains its 'Standard' classification. While the credit report will carry a tag indicating that the facility was restructured due to stress, this is vastly superior to a 'Default' or 'Settled' tag. Once the MSME demonstrates consistent repayment behavior under the new restructured terms for a specified observation period (usually 12 months), the CMR score begins to recover, enabling the business to eventually access regular credit markets again.
                            </p>

                            <h2 id="ots-exit-strategy" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">One-Time Settlement (OTS): The Final Exit Strategy</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If the business model is no longer sustainable, or if the debt burden is so astronomically high that no amount of tenure extension will make the EMIs affordable, loan restructuring is a futile exercise. In such scenarios, attempting to restructure will only bleed the promoter's remaining personal savings. The correct, albeit painful, strategy is to execute a One Time Settlement (OTS).
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                An OTS is a legally binding compromise between the borrower and the bank. The borrower agrees to pay a lump sum amount (or a scheduled payment over a few months) that is significantly lower than the total outstanding dues. In return, the bank agrees to write off the remaining balance, release the mortgaged collaterals, and issue a No Dues Certificate (NDC). The bank accepts the loss to quickly clean up its non performing assets and free up capital, while the borrower gets a permanent release from the crushing debt trap.
                            </p>

                            <h3 id="when-is-ots-viable" className="text-2xl font-bold text-gray-800 mt-8 mb-4">When is OTS the Only Viable Option?</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                An OTS becomes the mandatory strategy when the business has suffered irreversible damage. This could be due to a complete technological shift rendering the product obsolete, a devastating fire or natural disaster not fully covered by insurance, or the sudden loss of the single largest client that accounted for 80% of revenue. In these cases, there is no future cash flow to project for a restructuring plan.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Furthermore, if the bank has already initiated intense recovery proceedings under SARFAESI, and the DRT has declined to grant a stay order, the physical possession of the factory or the promoter's home is imminent. At this crisis point, arranging funds from family, friends, or private investors to offer an aggressive OTS is the only way to save the core assets from being sold at a heavily discounted auction price. If you need assistance navigating this, consulting an expert in <Link href="/working-capital-loan-legal-help" className="text-blue-600 hover:underline">working capital loan legal help</Link> is essential to ensure the bank does not backtrack on verbal promises.
                            </p>

                            <h3 id="negotiation-process" className="text-2xl font-bold text-gray-800 mt-8 mb-4">The Negotiation Process with Banks</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Negotiating a commercial OTS is not for the faint of heart. Banks will initially demand the full principal plus a portion of the interest. They will use the threat of declaring the promoter a "willful defaulter" or initiating insolvency proceedings under the IBC (Insolvency and Bankruptcy Code) to extract maximum value. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A successful negotiation requires demonstrating the absolute inability to pay more. This involves transparently sharing the dire financial state of the company and proving that liquidating the assets through the DRT will yield less for the bank than the proposed OTS amount. Time is the borrower's greatest leverage; the longer the asset sits as a dead NPA, the more provisioning the bank must make. Settlements for MSME accounts often land between 40% and 70% of the principal outstanding, depending on the quality of the collateral and the age of the NPA.
                            </p>

                            {/* Section Type: Comparison Table */}
                            <h2 id="comparing-outcomes" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Comparing Restructuring vs. Settlement Outcomes</h2>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200 mb-8 overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[600px]">
                                    <thead>
                                        <tr className="bg-gray-200 text-gray-900">
                                            <th className="p-4 font-bold border-b border-gray-300 rounded-tl-xl w-1/3">Parameter</th>
                                            <th className="p-4 font-bold border-b border-gray-300 w-1/3">Loan Restructuring</th>
                                            <th className="p-4 font-bold border-b border-gray-300 rounded-tr-xl w-1/3">One-Time Settlement (OTS)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        <tr className="border-b border-gray-200 bg-white">
                                            <td className="p-4 font-semibold text-gray-900">Primary Objective</td>
                                            <td className="p-4">Rehabilitate the business and repay full principal.</td>
                                            <td className="p-4">Exit the debt trap with minimal financial outlay.</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="p-4 font-semibold text-gray-900">Business Viability</td>
                                            <td className="p-4">Requires strong proof of future cash flow.</td>
                                            <td className="p-4">Used when the business is failing or closed.</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 bg-white">
                                            <td className="p-4 font-semibold text-gray-900">Total Amount Paid</td>
                                            <td className="p-4">100% of Principal + adjusted interest.</td>
                                            <td className="p-4 font-bold text-green-600">Negotiated haircut (often 30% to 60% savings).</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="p-4 font-semibold text-gray-900">Collateral Status</td>
                                            <td className="p-4">Remains mortgaged with the bank until fully paid.</td>
                                            <td className="p-4 font-bold text-blue-600">Released immediately upon OTS completion.</td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="p-4 font-semibold text-gray-900 rounded-bl-xl">Credit Score (CMR) Impact</td>
                                            <td className="p-4">Maintained as 'Standard'. Recovers over time.</td>
                                            <td className="p-4 font-bold text-red-600 rounded-br-xl">Severely damaged. Marked as 'Settled'.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                As the comparison shows, the choice is ultimately between preserving your creditworthiness for future expansion (Restructuring) versus preserving your immediate cash and unencumbering your physical assets (Settlement). There is no universally correct answer; the optimal path depends entirely on the specific financial health and future prospects of the enterprise.
                            </p>

                            {/* Section Type: Case Study */}
                            <h2 id="success-story" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Success Story: Rescuing an MSME from NPA Status</h2>
                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-200 mb-8">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Case Study: The Textile Exporter's Dilemma</h3>
                                <p className="text-gray-700 leading-relaxed mb-4"><strong>The Crisis:</strong> A Tirupur based textile exporting MSME had a working capital facility of INR 4.5 Crores. Due to a sudden cancellation of orders from Europe, inventory piled up, and the company missed three consecutive EMI cycles. The bank swiftly classified the account as an NPA and issued a Section 13(2) notice under the SARFAESI Act, threatening to auction the manufacturing unit.</p>
                                <p className="text-gray-700 leading-relaxed mb-4"><strong>The Strategy:</strong> The promoters were terrified and considered liquidating personal assets to offer an OTS. However, the legal and financial advisory team at CredSettle intervened. They analyzed the order book and realized new domestic contracts were signed that would generate strong cash flow in six months. The business was fundamentally viable, just facing a severe liquidity mismatch.</p>
                                <p className="text-gray-700 leading-relaxed"><strong>The Execution:</strong> Instead of surrendering to an OTS, the team drafted a comprehensive Techno Economic Viability report and submitted a formal restructuring proposal under the RBI's MSME framework. They simultaneously filed a representation halting the SARFAESI proceedings. The bank, seeing the data backed domestic orders, agreed to restructure. They granted a 12 month moratorium on principal payments and converted the accrued interest into a FITL. The factory was saved, production resumed, and the company's CMR rating was protected from a permanent 'Settled' tag.</p>
                            </div>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Frequently Asked Questions on MSME Loan Resolution</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Save Your Business Before It's Too Late</h3>
                                <p className="text-blue-800 mb-6">If your MSME is facing working capital stress, do not wait for the bank to take control of your assets. Our specialized legal and financial team can evaluate your viability, halt aggressive recovery actions, and negotiate a restructuring plan or an OTS that protects your interests.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Book a Strategy Session Today
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The strategies outlined regarding MSME loan restructuring and settlements are for educational purposes. Banking regulations and RBI guidelines are subject to change. Always consult with a qualified financial advisor and legal counsel before submitting restructuring proposals or settlement offers to your bank.
                            </div>
                        </article>
                    </main>

                    {/* Right Column: CTA & Related Expertise (NO AUTHOR BIO) */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20">
                        <div className="space-y-6">
                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Business in Danger?</h4>
                                <p className="text-sm text-gray-600 mb-6">Stop the bank from auctioning your commercial property. Get a resolution strategy now.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Get Expert Advice
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✔ Halt SARFAESI Action</p>
                                    <p>✔ Draft Viability Plans</p>
                                    <p>✔ Negotiate OTS Deals</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Expertise</h4>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-bank-loan-recovery-defence" className="block text-sm text-blue-600 hover:underline">Bank Recovery Defence</Link>
                                    <Link href="/best-lawyer-for-drt-case-defence-for-bank-loan-recovery" className="block text-sm text-blue-600 hover:underline">DRT Specialization</Link>
                                    <Link href="/best-lawyer-for-loan-settlement-during-drt" className="block text-sm text-blue-600 hover:underline">Settlement Strategies</Link>
                                    <Link href="/best-lawyer-for-MSME-loan-recovery-defence" className="block text-sm text-blue-600 hover:underline">MSME Loan Defence</Link>
                                </nav>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
            
            {/* Reviews Section at the bottom */}
            <section className="max-w-[1440px] mx-auto px-4 py-12 border-t border-gray-100">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Client Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
            </section>
        </>
    );
}
