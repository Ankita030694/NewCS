'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function LoanAgreementDocReviewClient() {
    const [activeId, setActiveId] = useState<string>('');
    const mobTocRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (activeId && mobTocRef.current) {
            const el = document.getElementById(`mob-toc-${activeId}`);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    }, [activeId]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setActiveId(entry.target.id); }); },
            { rootMargin: '-100px 0px -35% 0px', threshold: 0.1 }
        );
        const headings = document.querySelectorAll('h2[id], h3[id]');
        headings.forEach((h) => observer.observe(h));
        return () => headings.forEach((h) => observer.unobserve(h));
    }, []);

    const navLinks = [
        { id: 'introduction', label: 'Overview' },
        { id: 'why-review-matters', label: 'Why Review Matters' },
        { id: 'loan-agreement-structure', label: 'Loan Agreement Structure' },
        { id: 'dangerous-clauses', label: 'Dangerous Clauses' },
        { id: 'arbitration-clauses', label: 'Arbitration Clauses' },
        { id: 'acceleration-clauses', label: 'Acceleration Clauses' },
        { id: 'interest-rate-clauses', label: 'Interest Rate Clauses' },
        { id: 'prepayment-clauses', label: 'Prepayment Clauses' },
        { id: 'rbi-compliance', label: 'RBI Compliance Check' },
        { id: 'pdc-security-cheques', label: 'PDC and Security Cheques' },
        { id: 'mortgage-review', label: 'Mortgage Document Review' },
        { id: 'guarantee-review', label: 'Guarantee Document Review' },
        { id: 'negotiating-terms', label: 'Negotiating Loan Terms' },
        { id: 'case-studies', label: 'Case Studies' },
        { id: 'reviews', label: 'Client Reviews' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Conclusion' },
    ];

    const faqs = [
        {
            question: 'Why should I get a lawyer to review my loan agreement before signing?',
            answer: 'A loan agreement is a legally binding contract with consequences that can last for decades. Banks draft these agreements entirely in their own favor, using complex legal language that most borrowers do not understand. A lawyer review identifies predatory clauses, explains your actual obligations, flags RBI non-compliant terms that you can refuse to accept, and negotiates modifications where possible. Spending a few thousand rupees on a lawyer review before signing can save lakhs or even crores in unforeseen liability later.'
        },
        {
            question: 'What is an arbitration clause in a loan agreement, and should I be worried about it?',
            answer: 'An arbitration clause is a provision that compels both parties to resolve disputes through private arbitration rather than through courts. In the loan agreement context, this can work against borrowers because banks often specify that the arbitrator will be nominated by the bank itself, the venue will be in the bank preferred city, and the arbitration costs will initially be borne by the borrower. The Supreme Court of India has held that unilateral arbitration clauses where only the bank can appoint the arbitrator are against principles of natural justice. A lawyer review identifies such clauses and can help you negotiate more balanced arbitration terms or an option to approach courts.'
        },
        {
            question: 'What does an acceleration clause in a loan agreement mean for me as a borrower?',
            answer: 'An acceleration clause allows the bank to declare the entire outstanding loan amount immediately due and payable if certain trigger events occur. These triggers can include a single EMI default, filing for insolvency, any change in ownership of the borrower company, significant deterioration in financial ratios, or even a subjective assessment by the bank that the loan is becoming "risky." The acceleration clause is considered the most dangerous provision for borrowers because it can transform a manageable EMI default into a demand for the entire outstanding principal. A lawyer review ensures you understand these triggers and attempts to narrow the acceleration triggers to only genuine defaults.'
        },
        {
            question: 'Can a bank change the interest rate on my loan unilaterally after the agreement is signed?',
            answer: 'This depends on the type of interest rate agreed upon in the loan agreement. For floating rate loans linked to MCLR or Repo Rate, the interest rate changes automatically as per the linked rate, and the bank can reset it periodically. For fixed rate loans, the bank cannot unilaterally change the rate unless the agreement specifically includes a clause allowing them to do so. A lawyer review identifies whether the interest rate clause is fixed or floating, what the resetting mechanism is, and whether there are any provisions that allow the bank to change the effective rate beyond what the agreed linkage formula would produce.'
        },
        {
            question: 'Are post-dated cheques (PDCs) necessary for a home or personal loan?',
            answer: 'With the advent of ECS and NACH mandates, the requirement for physical post-dated cheques has reduced significantly. However, many lenders, particularly cooperative banks and NBFCs, still insist on PDCs. A PDC must be carefully understood as signing it creates criminal liability under Section 138 of the NI Act for dishonour. The key points a lawyer checks regarding PDCs are: whether the cheques are demand or account payee, what happens if you close the account before the PDC date, whether the bank is obligated to present the ECS/NACH before presenting the PDC, and whether the bank can present security cheques covering the entire outstanding balance rather than periodic EMI cheques.'
        },
        {
            question: 'What should I check in the guarantee section of a loan agreement before agreeing to be a guarantor?',
            answer: 'If you are being asked to be a guarantor for someone else loan, the most important clauses to review are: the extent of guarantee (is it for a specific amount or unlimited?), whether the guarantee is a continuing guarantee for all future liabilities, whether you can revoke the guarantee after a notice period, whether the bank can sue you without first exhausting remedies against the primary borrower, and whether your personal assets (home, investments) are already mortgaged or may be encumbered by this guarantee. A lawyer can also check whether the guarantee document has been registered as required by the Transfer of Property Act for immovable property guarantees.'
        },
        {
            question: 'What is the "right of set-off" clause in a loan agreement?',
            answer: 'The right of set-off clause allows the bank to apply any funds you have in your savings or current account with the bank towards repayment of an outstanding loan if you default. In practice, this means the bank can debit your salary account or current account balance to recover overdue EMIs without prior notice if this clause applies. This clause can create severe cash flow problems for borrowers who have their operating accounts with the same bank as their loan. A specialist lawyer identifies this clause and advises on maintaining accounts with separate banks for critical operations.'
        },
        {
            question: 'How does a lawyer check if a loan agreement complies with RBI Fair Practices Code?',
            answer: 'The RBI Fair Practices Code (FPC) requires banks and NBFCs to follow specific guidelines in their loan documentation and lending practices. A lawyer checks the loan agreement against the FPC on key parameters: whether the interest rate and fee structure is fully disclosed upfront, whether there is provision for a cooling-off period after signing, whether the penalty for prepayment is as per the RBI cap, whether the agreement includes a proper grievance redressal mechanism, and whether the agreement language is in a font size no smaller than the RBI mandated minimum. Any FPC violation can be reported to the Banking Ombudsman and used as a defence in recovery proceedings.'
        },
        {
            question: 'Can loan agreement terms be negotiated with the bank?',
            answer: 'Yes, more than most borrowers realize. While large retail banks offer largely standardized loan agreements for small personal or home loans, corporate loans, MSME loans, and for high-net-worth individual borrowers, significant negotiation of agreement terms is possible. The most frequently negotiated provisions include: interest rate margins and resetting frequency, prepayment charges (often reduced or eliminated for floating rate loans per RBI guidelines), acceleration clause triggers (limiting them to genuine defaults rather than subjective ones), the arbitration mechanism, financial covenants for corporate borrowers, and the scope of security required. A lawyer experienced in banking negotiations helps structure these discussions effectively.'
        },
        {
            question: 'What documents should I carry when meeting a lawyer for a loan agreement review?',
            answer: 'You should bring the complete loan agreement and all annexures (including the schedule of charges, the key facts statement, and any special conditions), the sanction letter specifying the loan terms, any term sheet or indicative offer letter provided by the bank, the product brochure or key features document the bank provided, all forms you have signed (including NACH mandate, PDC authorization, and data privacy consent forms), any security documents if already signed or provided in draft, and any correspondence with the bank that modified the original terms. Bring the originals wherever possible and keep copies for your own records.'
        }
    ];

    const reviews = [
        {
            name: 'Sanjeev Kumar',
            location: 'Delhi',
            stars: 5,
            comment: 'I was about to sign a business loan agreement with an unlimited guarantee from my wife. The CredSettle lawyer identified that the guarantee clause had no ceiling and that the bank could come after our home even if the business defaulted on an entirely different loan with the same bank. We renegotiated the guarantee down to a specific amount. Potentially saved us crores.'
        },
        {
            name: 'Divya Krishnan',
            location: 'Chennai',
            stars: 5,
            comment: 'The acceleration clause in my MSME loan was triggered because my GST filings had a minor delay. I had no idea this was even a trigger event. The CredSettle lawyer helped me challenge the acceleration on the ground that the delay was cured before the bank acted on it. We avoided a full recovery proceeding. Should have reviewed this agreement before signing.'
        },
        {
            name: 'Rajan Patel',
            location: 'Surat',
            stars: 5,
            comment: 'The arbitration clause in my loan agreement named the bank general counsel as the sole arbitrator. The lawyer immediately flagged this as something the Supreme Court has held to be invalid. We went back to the bank and got this clause changed to a three-member panel before signing the final agreement.'
        },
        {
            name: 'Nisha Sharma',
            location: 'Gurgaon',
            stars: 5,
            comment: 'I needed a home loan urgently and the bank was pressuring me to sign quickly. My CredSettle review took only 24 hours and identified a floating rate reset clause that would have allowed the bank to increase my rate beyond the RBI repo linkage by adding a "credit risk premium" at their discretion. We got this clause removed before signing.'
        }
    ];

    const faqSchema = {
        '@context': 'https://schema.org', '@type': 'FAQPage',
        'mainEntity': faqs.map(faq => ({
            '@type': 'Question', 'name': faq.question,
            'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer }
        }))
    };

    const reviewSchema = {
        '@context': 'https://schema.org', '@type': 'Product',
        'name': 'Best Lawyer for Documentation Review of Loan Agreement',
        'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': '4.9', 'reviewCount': '2189', 'bestRating': '5', 'worstRating': '1' }
    };

    const orgSchema = {
        '@context': 'https://schema.org', '@type': 'Organization',
        'name': 'CredSettle', 'url': 'https://www.credsettle.com',
        'logo': 'https://www.credsettle.com/credsettle-logo.svg',
        'contactPoint': { '@type': 'ContactPoint', 'telephone': '+91-9311-778584', 'contactType': 'customer service', 'areaServed': 'IN', 'availableLanguage': 'English' }
    };

    const relatedPages = [
        { href: '/best-lawyer-for-loan-recovery-documentation', label: 'Loan Recovery Documentation Lawyer' },
        { href: '/best-lawyer-for-loan-contract', label: 'Best Lawyer for Loan Contract' },
        { href: '/best-lawyer-for-loan-agreement', label: 'Best Lawyer for Loan Agreement' },
        { href: '/best-loan-agreement-arbitration-lawyer', label: 'Loan Agreement Arbitration Lawyer' },
        { href: '/best-lawyer-for-arc-loan-assignment-dispute', label: 'ARC Loan Assignment Dispute' },
        { href: '/best-check-bounce-lawyer-for-loan-case', label: 'Check Bounce Lawyer for Loan Case' },
    ];

    return (
        <>
            <Script id="faq-schema-loan-agreement-review" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-loan-agreement-review" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <Script id="org-schema-loan-agreement-review" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

            {/* Hero */}
            <section className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden"
                style={{ background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)', minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="max-w-6xl mx-auto text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Best Lawyer for Documentation Review<br />
                        <span className="text-blue-300">of Loan Agreement in India 2025</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Expert legal analysis of hidden clauses, arbitration traps, acceleration risks, and RBI compliance issues in your loan agreement before you sign or after a default.
                    </p>
                    <Link href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block">
                        Get Your Loan Agreement Reviewed
                    </Link>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-[1440px] mx-auto px-4 py-4">
                    <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                            <li><div className="flex items-center"><svg className="w-3 h-3 text-gray-400 mx-1" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" /></svg><span className="ml-1 font-medium text-gray-500">Best Lawyer for Documentation Review of Loan Agreement</span></div></li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Mobile TOC */}
            <div ref={mobTocRef} className="sticky top-0 z-40 lg:hidden bg-white border-b border-gray-200 shadow-sm overflow-x-auto no-scrollbar py-3 px-4 flex gap-4 whitespace-nowrap">
                {navLinks.map((link) => (
                    <a key={link.id} id={`mob-toc-${link.id}`} href={`#${link.id}`}
                        className={`text-sm font-medium px-4 py-2 rounded-full transition-all flex-shrink-0 ${activeId === link.id ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 bg-gray-50 hover:bg-gray-100'}`}
                        onClick={(e) => { e.preventDefault(); const el = document.getElementById(link.id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' }); setActiveId(link.id); }}>
                        {link.label}
                    </a>
                ))}
            </div>

            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left TOC */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14 self-start">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Outline</h3>
                            <nav className="space-y-1 text-sm">
                                {navLinks.map((link) => (
                                    <a key={link.id} href={`#${link.id}`}
                                        className={`block px-3 py-2 rounded-lg transition-all font-medium ${activeId === link.id ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}
                                        onClick={(e) => { e.preventDefault(); const el = document.getElementById(link.id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' }); setActiveId(link.id); }}>
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 min-w-0">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Introduction: The Hidden World Inside Your Loan Agreement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Every year, millions of Indians sign loan agreements without reading them fully. The average home loan agreement runs to 30 or 40 pages of dense legal text. A personal loan agreement from an NBFC might be shorter but packed with clauses that give the lender extraordinary powers. Business loan agreements from private banks can contain financial covenant provisions that allow the bank to call back the entire loan on grounds that have nothing to do with non-payment.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Most borrowers discover what their loan agreement actually says only when they are in financial trouble and the bank has already exercised a clause they did not know existed. At that point, it is often too late to negotiate or challenge the clause. The legally binding contract they signed in happier times has become a weapon deployed against them.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The best lawyer for documentation review of a loan agreement performs a comprehensive legal audit of the entire agreement before it is signed. They identify clauses that are dangerous for the borrower, flag terms that violate RBI regulations, explain each obligation in plain language, and where possible, negotiate modifications with the bank. This service is not a luxury for large corporations; it is a practical necessity for any borrower taking a significant loan.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, this service has become even more critical as banks increasingly include digital consent mechanisms, cross-default clauses, and broadly worded data sharing provisions in their loan agreements that were not present just five years ago.
                            </p>

                            <h2 id="why-review-matters" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Why Loan Agreement Documentation Review Matters in 2025</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Indian banking and lending landscape in 2025 is significantly more complex than it was even a decade ago. The proliferation of digital lending platforms, the growth of NBFC lending, and the increasing sophistication of bank recovery practices have all made loan agreement documentation review more important than ever.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Several developments in the recent past make 2025 a particularly important time for borrowers to be legally vigilant about their loan agreements:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>RBI Digital Lending Guidelines (2022-2025 updates):</strong> The RBI has mandated specific disclosure requirements in digital lending agreements. Violations of these guidelines have ongoing remedy implications for borrowers who identify them after signing.</li>
                                <li><strong>Data Privacy in Loan Agreements:</strong> Following India data protection developments, loan agreements now contain extensive data sharing and processing clauses. These clauses affect credit bureau reporting, third-party marketing, and recovery agent authorization.</li>
                                <li><strong>Cross-Default Clauses in Multi-Bank Scenarios:</strong> For borrowers with loans across multiple institutions, cross-default clauses mean that a default with one bank automatically triggers acceleration with all other banks. Identifying and limiting these clauses before signing is crucial.</li>
                                <li><strong>IBC Interaction Clauses:</strong> Some loan agreements now contain provisions about the lender rights under the Insolvency and Bankruptcy Code. Understanding these provisions matters if the borrower ever considers an IBC resolution path.</li>
                            </ul>

                            <h2 id="loan-agreement-structure" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Understanding the Structure of a Typical Loan Agreement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A standard loan agreement in India typically follows a multi-part structure. Understanding this structure helps you identify which parts need the most careful legal attention.
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light">
                                <ol className="list-decimal pl-6 space-y-3 text-gray-800">
                                    <li><strong>Definitions and Interpretation:</strong> This section defines terms used throughout the agreement. How terms like "Event of Default," "Material Adverse Change," and "Secured Assets" are defined determines the scope of the bank powers.</li>
                                    <li><strong>Loan Particulars and Disbursement Conditions:</strong> The specific amount, tenure, interest rate, EMI schedule, and conditions precedent to disbursement.</li>
                                    <li><strong>Interest and Fees:</strong> The rate computation method, resetting mechanism, processing fees, documentation charges, and penal interest rates.</li>
                                    <li><strong>Representations and Warranties:</strong> Facts the borrower certifies to be true at the time of signing, breach of which can trigger acceleration.</li>
                                    <li><strong>Covenants:</strong> Ongoing obligations of the borrower throughout the loan tenure. These are often the most dangerous for corporate borrowers.</li>
                                    <li><strong>Events of Default:</strong> The specific trigger events that allow the bank to accelerate the loan or take enforcement action.</li>
                                    <li><strong>Security Provisions:</strong> The nature, creation, and enforcement rights over the collateral.</li>
                                    <li><strong>Dispute Resolution:</strong> Whether disputes go to courts, arbitration, or DRT, and the jurisdiction.</li>
                                </ol>
                            </div>

                            <h2 id="dangerous-clauses" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">The Most Dangerous Loan Agreement Clauses in India</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                After reviewing thousands of loan agreements, legal specialists have identified certain types of clauses that consistently create the worst outcomes for borrowers who do not understand them at the time of signing.
                            </p>
                            <div className="space-y-4 mb-8">
                                <div className="p-5 bg-red-50 border border-red-100 rounded-2xl">
                                    <h4 className="font-bold text-red-900 mb-2">Material Adverse Change (MAC) Clause</h4>
                                    <p className="text-gray-700 text-sm">This clause allows the bank to declare an event of default if there is a "material adverse change" in the financial condition of the borrower, business, or even the general economic environment. MAC clauses are often worded so broadly that a significant business downturn, a fall in property values, or even a sector-wide economic stress can trigger this clause. During the COVID pandemic, many borrowers faced bank actions based on broadly worded MAC clauses.</p>
                                </div>
                                <div className="p-5 bg-amber-50 border border-amber-100 rounded-2xl">
                                    <h4 className="font-bold text-amber-900 mb-2">Cross-Default Clause</h4>
                                    <p className="text-gray-700 text-sm">A default on any other loan with any other lender triggers a default under this agreement as well. This creates a dangerous cascade effect where a small default with one bank causes all other loan accounts to simultaneously become stressed, making recovery from financial difficulty nearly impossible once the cycle starts.</p>
                                </div>
                                <div className="p-5 bg-orange-50 border border-orange-100 rounded-2xl">
                                    <h4 className="font-bold text-orange-900 mb-2">Unilateral Rate Change Provision</h4>
                                    <p className="text-gray-700 text-sm">Some agreements, particularly from NBFCs and cooperative banks, contain clauses allowing the lender to increase the interest rate "at its sole discretion" or in response to market conditions, with only notice to the borrower and no right of the borrower to prepay without penalty. The RBI Fair Practices Code prohibits unreasonable interest rate changes, but enforcement requires proving the clause exists and challenging it proactively.</p>
                                </div>
                            </div>

                            <h2 id="arbitration-clauses" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Arbitration Clauses in Loan Agreements: Risks and Remedies</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Arbitration is increasingly the dispute resolution mechanism inserted into loan agreements by both banks and NBFCs. In theory, arbitration can be faster and more efficient than court proceedings. In practice, the way arbitration clauses are structured in most Indian loan agreements strongly favors the lender.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Supreme Court of India addressed the issue of unilateral arbitration clauses in several important decisions. It held that an arbitration clause that gives only one party (typically the bank) the right to appoint the arbitrator is violative of the principles of natural justice and the independent appointment requirements of the Arbitration and Conciliation Act, 1996.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A lawyer reviewing an arbitration clause in a loan agreement checks for:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li>Whether the arbitrator is to be appointed by the bank alone or jointly or by the default mechanism under the Arbitration Act.</li>
                                <li>Whether the venue selected for arbitration is convenient for the borrower or strategically inconvenient.</li>
                                <li>Whether the preliminary costs of arbitration (filing fees, arbitrator fees) must be borne entirely by the borrower.</li>
                                <li>Whether the agreement also preserves the bank right to approach the DRT for money recovery concurrently with arbitration.</li>
                                <li>Whether the arbitration clause has been presented in a font and manner that satisfies the requirement of informed consent.</li>
                            </ul>

                            <h2 id="acceleration-clauses" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Acceleration Clauses: Understanding the Full Risk Exposure</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                An acceleration clause converts what would otherwise be a long-term repayment obligation into an immediate demand for the full outstanding balance. It is the nuclear option in the bank arsenal, and most loan agreements give banks the right to exercise it across a very broad range of trigger events.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Common acceleration triggers in Indian loan agreements that many borrowers do not notice before signing:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li>Any single EMI default, even for one day beyond the grace period.</li>
                                <li>The insolvency, bankruptcy, or liquidation of the borrower or any guarantor.</li>
                                <li>Any change in majority ownership of a borrower company without prior bank consent.</li>
                                <li>The death or incapacitation of any key promoter or guarantor.</li>
                                <li>Any government inquiry, tax demand, or regulatory action against the borrower.</li>
                                <li>A fall in market value of the secured asset below a specified coverage ratio.</li>
                                <li>The borrower taking on additional debt beyond specified financial covenants.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A skilled lawyer reviewing an acceleration clause attempts to narrow these triggers to only genuine default events: non-payment for a specified number of consecutive months, actual (not mere filing of) insolvency proceedings, and confirmed regulatory penalties. Subjective triggers like "material adverse change" and "deterioration of financial condition" are negotiated to have objective financial ratio tests.
                            </p>

                            <h2 id="interest-rate-clauses" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Interest Rate Clauses: Fixed vs. Floating and the Reset Risk</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The interest rate clause is one of the most impactful provisions in any loan agreement, yet it is frequently misunderstood by borrowers. The distinction between truly fixed rates and floating rates linked to external benchmarks has significant financial consequences over a long loan tenure.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Key elements a legal review of the interest rate clause checks:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-200">
                                    <strong className="text-gray-900 block mb-2">Benchmark Linkage</strong>
                                    <p className="text-gray-600 text-sm">For floating rate home loans, the RBI mandates linkage to the Repo Rate since October 2019. Older loans linked to internal benchmarks like the bank MCLR or Base Rate may have higher and less transparent reset mechanisms.</p>
                                </div>
                                <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-200">
                                    <strong className="text-gray-900 block mb-2">Spread Addition</strong>
                                    <p className="text-gray-600 text-sm">Banks add a "spread" or "credit risk premium" to the benchmark rate. The agreement should specify whether this spread is fixed for the loan tenure or can be changed unilaterally by the bank based on the borrower credit profile.</p>
                                </div>
                                <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-200">
                                    <strong className="text-gray-900 block mb-2">Penal Interest Rate</strong>
                                    <p className="text-gray-600 text-sm">The RBI has capped penal charges for regulated entities (banks and NBFCs) at a reasonable flat amount rather than allowing compound penal interest. The agreement should reflect this RBI cap.</p>
                                </div>
                                <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-200">
                                    <strong className="text-gray-900 block mb-2">Interest Compounding Frequency</strong>
                                    <p className="text-gray-600 text-sm">Whether interest is compounded monthly, quarterly, or annually makes a significant difference on large loans over long tenures. The Agreement must specify this clearly. Monthly compounding is the most common and most expensive for the borrower.</p>
                                </div>
                            </div>

                            <h2 id="prepayment-clauses" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Prepayment Clauses and Your Right to Exit the Loan Early</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The prepayment clause governs your right to repay all or part of your loan before the scheduled tenure ends. This is critically important for borrowers who expect their financial situation to improve over time and want the option to become debt-free earlier than planned.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The RBI position on prepayment charges as of 2025 is as follows:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li>For floating rate loans to individual borrowers: No prepayment charge can be levied by banks. This is a hard prohibition.</li>
                                <li>For fixed rate loans: Banks may levy prepayment charges but they must be disclosed upfront in the sanction letter and the Key Facts Statement.</li>
                                <li>For NBFCs: RBI has extended the no-prepayment-charge rule to NBFC floating rate loans to individual borrowers as of May 2024.</li>
                                <li>For corporate borrowers: Prepayment charges are negotiable and are often significant for structured or syndicated loans.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A lawyer also checks whether the prepayment clause requires notice to be given, how many days in advance, and whether partial prepayment is allowed or only full foreclosure. Some agreements restrict partial prepayment to specific dates, missing which can result in penalty charges.
                            </p>

                            <h2 id="rbi-compliance" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">RBI Compliance Check: What Your Loan Agreement Must Include</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The RBI Fair Practices Code and various master directions impose mandatory disclosure and content requirements on all loan agreements issued by regulated entities. A lawyer documents every RBI non-compliance as this serves both as a defence in recovery proceedings and as grounds for a Banking Ombudsman complaint.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Mandatory elements that RBI requires in all loan agreements:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li>A Key Facts Statement (KFS) that clearly summarizes the Annual Percentage Rate (APR), all fees, and the total cost of credit before any agreement is signed.</li>
                                <li>A cooling-off or look-up period for digital loans, allowing the borrower to exit the agreement without penalty within the stipulated period.</li>
                                <li>A clear grievance redressal mechanism with contact details of the Nodal Officer and Banking Ombudsman.</li>
                                <li>Prohibition on collection of charges not mentioned in the sanction letter or KFS.</li>
                                <li>Mandatory consent requirement before sharing data with third parties for non-lending purposes.</li>
                                <li>Font size requirements to ensure the agreement is readable.</li>
                            </ul>

                            <h2 id="pdc-security-cheques" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Post-Dated Cheques and Security Cheques: Critical Legal Review Points</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Signing a post-dated cheque or a security cheque creates a parallel legal obligation: criminal liability under Section 138 of the NI Act if the cheque is dishonoured. This is an obligation separate from and in addition to the civil debt recovery proceedings under the loan agreement.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A lawyer reviewing the PDC and security cheque provisions of a loan agreement focuses on:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li>Whether the PDCs are for specific EMI amounts or blank cheques to be filled in by the bank.</li>
                                <li>Whether the security cheque covers just the principal or an inflated "full liability amount."</li>
                                <li>The conditions under which the bank is authorized to present the security cheque.</li>
                                <li>Whether the agreement requires the bank to present ECS before presenting PDCs.</li>
                                <li>The borrower remedy if the bank presents a security cheque without following the agreed sequence.</li>
                            </ul>

                            <h2 id="mortgage-review" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Mortgage Document Review: Ensuring Your Property is Protected</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a loan is secured by a mortgage on immovable property, the mortgage deed is as important as the loan agreement itself. The mortgage deed defines exactly what property is mortgaged, in what form (equitable or registered), and what rights the bank has in relation to the property.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A lawyer reviewing the mortgage documentation checks:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li>Whether the property description in the mortgage deed exactly matches the title document and sale deed.</li>
                                <li>Whether a Memorandum of Entry (MOE) for an equitable mortgage has been properly registered as required for SARFAESI enforcement.</li>
                                <li>Whether the mortgage extends to future improvements or only the existing structure as of the date of mortgage creation.</li>
                                <li>Whether the property is already encumbered by any prior charge that was not disclosed to the bank.</li>
                                <li>The bank right to inspect the property and the borrower obligations to maintain and insure it.</li>
                            </ul>

                            <h2 id="guarantee-review" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Guarantee Document Review: Protecting Your Personal Liability</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Guarantee documents in Indian loan transactions are frequently misunderstood by those signing them. The guarantor often believes they are providing a formality, while the legal document they sign creates nearly the same liability as the primary borrower in most circumstances.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Key points a lawyer reviews in guarantee documents:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li>Whether the guarantee is for a specified amount or unlimited in scope.</li>
                                <li>Whether it is a continuing guarantee for all present and future liabilities.</li>
                                <li>Whether the guarantee survives the death of the guarantor and binds their estate.</li>
                                <li>Whether the guarantee is revocable and under what conditions.</li>
                                <li>Whether the bank must exhaust remedies against the principal borrower first (surety’s benefit of excussion).</li>
                                <li>Whether the guarantee extends to the NBFC subsidiary loans that the same banking group may issue in the future.</li>
                            </ul>

                            <h2 id="negotiating-terms" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Negotiating Loan Agreement Terms: What Is Actually Possible</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Many borrowers assume that loan agreements are "take it or leave it" documents that cannot be negotiated. This is false, particularly for corporate borrowers, high-value home loan borrowers, and MSME borrowers. Banks have board-approved policies within which their relationship managers have negotiating authority.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Clauses that are most commonly and successfully negotiated include:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                                    <strong className="text-blue-900 block mb-2">Prepayment Terms</strong>
                                    <p className="text-gray-600 text-sm">For corporate loans, negotiating reduced or zero prepayment charges after a specified lock-in period. For retail loans, confirming that the no-prepayment-charge RBI circular applies explicitly.</p>
                                </div>
                                <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                                    <strong className="text-green-900 block mb-2">Financial Covenants</strong>
                                    <p className="text-gray-600 text-sm">For MSME and corporate borrowers, narrowing the financial covenant thresholds to realistic levels that reflect actual business performance rather than theoretical benchmarks.</p>
                                </div>
                                <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
                                    <strong className="text-purple-900 block mb-2">MAC Definition</strong>
                                    <p className="text-gray-600 text-sm">Limiting the Material Adverse Change definition to events specific to the borrower rather than including general market or economic conditions over which the borrower has no control.</p>
                                </div>
                                <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                                    <strong className="text-orange-900 block mb-2">Cure Periods</strong>
                                    <p className="text-gray-600 text-sm">Negotiating grace or cure periods before acceleration or other remedies can be exercised, so that a temporary default can be remedied without triggering the most severe consequences.</p>
                                </div>
                            </div>

                            <h2 id="case-studies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Case Studies: Legal Review Changing the Outcome</h2>
                            <div className="space-y-6 mb-8">
                                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                                    <h4 className="font-bold text-blue-900 mb-2">Case 1: Unlimited Guarantee Withdrawn in Bengaluru</h4>
                                    <p className="text-gray-700">A technology startup founder in Bengaluru was asked to provide an unlimited personal guarantee for his company working capital credit facility of Rs. 2 crore. The legal review at CredSettle revealed that the guarantee form the bank had prepared was worded such that it covered all facilities the company might ever avail from that bank group, not just the Rs. 2 crore facility. After pointed negotiation backed by the legal review, the bank agreed to limit the guarantee to the specific facility amount of Rs. 2 crore only, protecting the founder personal assets from any future additional credit facilities the company might take.</p>
                                </div>
                                <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                                    <h4 className="font-bold text-green-900 mb-2">Case 2: Unilateral Arbitration Clause Challenged in Delhi MSME Case</h4>
                                    <p className="text-gray-700">An MSME manufacturer in Delhi had a loan agreement with an NBFC that contained a clause allowing the NBFC to appoint a sole arbitrator from its own list of approved arbitrators. When a dispute arose about the outstanding amount, the NBFC invoked arbitration and appointed its own arbitrator. The borrower lawyer challenged the appointment under the Arbitration and Conciliation Act, 1996 and the Supreme Court precedent on unilateral appointments. The Delhi High Court nullified the existing arbitration proceedings and ordered a fresh appointment through the Arbitration Council of India. This gave the borrower leverage to settle the matter on more favorable terms.</p>
                                </div>
                            </div>

                            {/* Reviews */}
                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Client Testimonials</h2>
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
                                            <span className="font-bold text-gray-900 text-sm">{review.name}</span>
                                            <span className="text-gray-500 text-sm ml-2">| {review.location}</span>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed">{review.comment}</p>
                                    </div>
                                ))}
                            </div>

                            {/* FAQs */}
                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Frequently Asked Questions</h2>
                            <div className="space-y-4 mb-12">
                                {faqs.map((faq, index) => (
                                    <details key={index} className="group bg-gray-50 rounded-2xl border border-gray-100 p-6 cursor-pointer hover:border-blue-200 transition-all">
                                        <summary className="font-bold text-gray-900 text-base list-none flex justify-between items-center">
                                            {faq.question}
                                            <span className="text-blue-600 group-open:rotate-180 transition-transform text-xl font-light ml-4 flex-shrink-0">+</span>
                                        </summary>
                                        <p className="text-gray-600 mt-4 leading-relaxed text-sm">{faq.answer}</p>
                                    </details>
                                ))}
                            </div>

                            {/* Conclusion */}
                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Conclusion: Know Your Agreement Before It Knows You</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A loan agreement is not a formality to be signed and filed away. It is a detailed legal blueprint for the next several years of your financial life. Every clause in it was drafted by a legal team working for the lender. Signing it without your own legal review means accepting terms that were designed entirely in the bank interest.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The cost of a loan agreement documentation review by a specialist lawyer is modest compared to the financial exposure the loan itself creates. For a borrower taking a Rs. 1 crore loan, spending a fraction on a legal review that identifies a dangerous acceleration clause or negotiates a better arbitration mechanism is among the best investments they can make.
                            </p>
                            <div className="bg-blue-600 text-white rounded-3xl p-8 text-center mb-8">
                                <h3 className="text-2xl font-bold mb-4">Get Your Loan Agreement Legally Reviewed</h3>
                                <p className="opacity-90 mb-6">Do not sign before you understand. Our specialist lawyers have reviewed thousands of loan agreements and know exactly what to look for to protect your interests.</p>
                                <Link href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all inline-block">
                                    Request a Documentation Review
                                </Link>
                            </div>
                        </article>
                    </main>

                    {/* Right Column */}
                    <aside className="lg:w-1/4 xl:w-1/5 flex flex-col gap-6 sticky top-14 self-start">
                        <div className="bg-gradient-to-br from-blue-600 to-blue-900 text-white rounded-2xl p-6 shadow-lg">
                            <h3 className="font-bold text-xl mb-3">Free Loan Agreement Review</h3>
                            <p className="opacity-90 mb-5 text-sm leading-relaxed">Get expert legal review of your loan agreement before signing. Identify dangerous clauses and protect your rights.</p>
                            <ul className="space-y-2 mb-5">
                                {['Dangerous Clause Identification', 'RBI Compliance Check', 'Arbitration Clause Review', 'Guarantee Document Analysis'].map((item, i) => (
                                    <li key={i} className="flex items-center text-sm"><span className="mr-2 text-green-300">v</span> {item}</li>
                                ))}
                            </ul>
                            <Link href="/contact" className="block bg-white text-blue-900 text-center py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all">
                                Get Free Consultation
                            </Link>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Related Pages</h3>
                            <nav className="space-y-2">
                                {relatedPages.map((page, i) => (
                                    <Link key={i} href={page.href} className="block text-sm text-blue-600 hover:text-blue-800 hover:underline py-1 transition-colors">{page.label}</Link>
                                ))}
                            </nav>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}
