'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function AccountDocumentsDRTClient() {
    const [activeId, setActiveId] = useState<string>('');
    const [isMobile, setIsMobile] = useState(false);
    const mobTocRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (activeId && mobTocRef.current) {
            const activeElement = document.getElementById(`mob-toc-${activeId}`);
            if (activeElement) {
                activeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
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
                entries.forEach((entry) => { if (entry.isIntersecting) setActiveId(entry.target.id); });
            },
            { rootMargin: '-100px 0px -35% 0px', threshold: 0.1 }
        );
        const headings = document.querySelectorAll('h2[id], h3[id]');
        headings.forEach((h) => observer.observe(h));
        return () => headings.forEach((h) => observer.unobserve(h));
    }, []);

    const navLinks = [
        { id: 'introduction', label: 'Overview' },
        { id: 'importance-of-documents', label: 'Why Documents Matter' },
        { id: 'bank-documents-in-drt', label: 'Bank Documents in DRT' },
        { id: 'account-statement-analysis', label: 'Account Statement Analysis' },
        { id: 'npa-classification-docs', label: 'NPA Classification Docs' },
        { id: 'challenging-bank-records', label: 'Challenging Bank Records' },
        { id: 'discovery-and-inspection', label: 'Discovery and Inspection' },
        { id: 'expert-witness-reports', label: 'Expert Witness Reports' },
        { id: 'rbi-master-directions', label: 'RBI Document Standards' },
        { id: 'interest-recalculation', label: 'Interest Recalculation' },
        { id: 'sarfaesi-document-defence', label: 'SARFAESI Documents' },
        { id: 'key-legal-precedents', label: 'Legal Precedents' },
        { id: 'document-based-settlement', label: 'Document-Led Settlement' },
        { id: 'case-studies', label: 'Case Studies' },
        { id: 'reviews', label: 'Client Reviews' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Conclusion' },
    ];

    const faqs = [
        {
            question: 'What right does a borrower have to inspect bank account documents during a DRT case?',
            answer: 'Under the Debt Recovery Tribunal Procedure Rules, 1993 and the general principles of natural justice, a borrower-defendant has a fundamental right to inspect all documents relied upon by the bank in its Original Application. The borrower can file an application under Order XI of the Code of Civil Procedure (as adapted for DRT proceedings) for discovery and inspection of documents. The bank cannot refuse access to primary account documents like loan ledgers, interest computation sheets, or booking entries.'
        },
        {
            question: 'What is a forensic account audit in a DRT case, and who can do it?',
            answer: 'A forensic account audit in the DRT context is an expert examination of the bank account statements, loan ledger, and interest computation documents to identify errors, unauthorized charges, incorrect classification dates, or deviations from RBI guidelines. This is typically performed by a Chartered Accountant with banking expertise or a certified forensic accountant. The audit report is then submitted to the DRT as expert evidence. Many successful defences in DRT cases have been built on forensic audit findings that revealed overcharging ranging from a few lakhs to several crores.'
        },
        {
            question: 'Can a DRT order be challenged if the bank relied on incorrect account documents?',
            answer: 'Yes, absolutely. If it can be shown that the DRT passed an order based on account documents that were incorrect, tampered with, or did not reflect actual transactions, the order can be challenged before the DRAT (Appellate Tribunal) on grounds of fraud, misrepresentation, or violation of natural justice. In cases where the error is discovered after the final order, an application for review can be made before the same DRT, or a fresh application can be made on the basis of newly discovered evidence.'
        },
        {
            question: 'What is the significance of the "Account Statements Certificate" that banks submit in DRT cases?',
            answer: 'Banks submit account statements in DRT proceedings as certified copies under Section 2A of the Bankers Books Evidence Act, 1891. These certified copies are admissible as evidence without the bank having to produce the original books. However, the certification requirements are strict: the certificate must be issued by a competent officer of the bank with specific statutory declarations. If these certification requirements are not met, the documents can be challenged as inadmissible evidence, which weakens the bank bank\'s case significantly.'
        },
        {
            question: 'How can a lawyer challenge the NPA classification date using account documents?',
            answer: 'The NPA classification date is critical because it determines when the bank\'s recovery rights under SARFAESI activate and when the limitation period for filing a DRT application begins. A lawyer can challenge the NPA date by analyzing the account ledger for credits that were not properly recorded, payments that were received but not applied to the EMI, or RBI guideline violations in the classification process. If the correct NPA date is different from what the bank claims, the entire timeline of the bank\'s recovery actions may be invalidated.'
        },
        {
            question: 'What documents should a borrower collect from their own bank records before consulting a DRT lawyer?',
            answer: 'Before the DRT lawyer meeting, collect the following from your own records: all loan disbursement advices, bank statement printouts for the loan account covering the entire loan tenure, all repayment receipts or bank-to-bank transfer records, any communication with the bank about restructuring or payment arrangements, the original loan sanction letter and agreement, and any notices received from the bank. These documents form the baseline against which the bank bank\'s DRT documents can be verified.'
        },
        {
            question: 'Can the bank refuse to produce original account documents in DRT proceedings?',
            answer: 'A bank that relies on document summaries or excerpts rather than original account records in DRT proceedings is taking a legal risk. A borrower\'s lawyer can specifically apply for production of original account books, original loan ledger entries, and original computer-generated records with authentication certificates. Refusing to produce these documents can be construed as withholding evidence and may result in adverse inference being drawn against the bank.'
        },
        {
            question: 'What is the Bankers Book Evidence Act, and how does it affect DRT document challenges?',
            answer: 'The Bankers Books Evidence Act, 1891, as amended, allows banks to produce certified copies of entries in their account books as primary evidence in legal proceedings, without having to physically produce the original books. However, the certification must comply with specific statutory requirements regarding the certification officer\'s designation, the statement of accuracy, and the existence of the original entry. Procedural defects in the Section 2A certificate are a technical but powerful ground to challenge the admissibility of bank account statements in DRT.'
        },
        {
            question: 'How does a lawyer use RBI Master Directions to challenge bank account calculations?',
            answer: 'The RBI issues Master Directions on income recognition, asset classification, and provisioning (IRACP) that all banks must follow for NPA classification and interest computation. If a bank has applied compound interest on compound interest, added recovery fees to the principal before calculating interest, or classified an account as NPA without following the 90-day non-payment rule precisely, these are violations of RBI Master Directions. A specialist lawyer cites these directions before the DRT to challenge the accuracy of the bank\'s claimed outstanding amount.'
        },
        {
            question: 'Can account document errors in a DRT case lead to a complete dismissal of the bank\'s application?',
            answer: 'A complete dismissal based solely on document errors is rare, but a significant reduction in the claimed amount and a favorable settlement are very common outcomes. Courts approach document errors practically: if the error materially impacted the amount claimed, they may direct recomputation or order the bank to file fresh documents. A pattern of systematic errors, however, particularly if it appears to be deliberate overcharging, can lead to the court exercising its discretion to impose costs on the bank or ordering a complete recomputation from the first disbursement date.'
        }
    ];

    const reviews = [
        {
            name: 'Ramesh Gupta',
            location: 'Delhi',
            stars: 5,
            comment: 'My business loan DRT case had a claimed amount of Rs. 2.8 crore. After the forensic audit organized by my CredSettle lawyer, we found Rs. 47 lakhs in wrongly applied interest. The bank settled the matter at Rs. 1.9 crore after we filed the expert report. This made a massive difference to my family.'
        },
        {
            name: 'Lalitha Krishnan',
            location: 'Chennai',
            stars: 5,
            comment: 'The lawyer identified that the bank NPA date was incorrect by three months because they had not applied my last before-NPA payment. This shifted the timeline completely and we got a favorable ruling on the limitation period defence. Detailed, meticulous legal work.'
        },
        {
            name: 'Harpreet Singh',
            location: 'Chandigarh',
            stars: 5,
            comment: 'We challenged the bank account certificate under the Bankers Books Evidence Act and the court accepted our objection. Without that certified document, the bank had to produce fresh documents. By the time they were produced, we had negotiated a settlement. The lawyer knowledge of banking law was outstanding.'
        },
        {
            name: 'Deepa Verma',
            location: 'Lucknow',
            stars: 5,
            comment: 'I had no idea that my bank had been charging penal interest on top of compound interest for 5 years. The forensic analysis revealed Rs. 23 lakhs in wrongful charges. The DRT accepted our expert report and ordered a recomputation. We eventually settled for the corrected amount.'
        }
    ];

    const faqSchema = {
        '@context': 'https://schema.org', '@type': 'FAQPage',
        'mainEntity': faqs.map(faq => ({
            '@type': 'Question', 'name': faq.question,
            'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer }
        }))
    };

    const organizationSchema = {
        '@context': 'https://schema.org', '@type': 'Organization',
        'name': 'CredSettle', 'url': 'https://www.credsettle.com',
        'logo': 'https://www.credsettle.com/credsettle-logo.svg',
        'contactPoint': { '@type': 'ContactPoint', 'telephone': '+91-9311-778584', 'contactType': 'customer service', 'areaServed': 'IN', 'availableLanguage': 'English' }
    };

    const reviewSchema = {
        '@context': 'https://schema.org', '@type': 'Product',
        'name': 'Best Lawyer for Account Documents DRT',
        'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': '4.9', 'reviewCount': '2214', 'bestRating': '5', 'worstRating': '1' }
    };

    const relatedPages = [
        { href: '/best-lawyer-for-drt-case-defence-for-bank-loan-recovery', label: 'Best Lawyer for DRT Case Defence' },
        { href: '/drt-lawyer-in-mumbai-loan-recovery', label: 'DRT Lawyer in Mumbai' },
        { href: '/best-lawyer-for-loan-settlement-during-drt', label: 'Loan Settlement During DRT' },
        { href: '/best-loan-agreement-arbitration-lawyer', label: 'Loan Agreement Arbitration Lawyer' },
        { href: '/best-project-finance-builder-loan-recovery-matter-lawyer', label: 'Project Finance DRT Lawyer' },
        { href: '/best-lawyer-for-bank-loan-recovery-defence', label: 'Bank Loan Recovery Defence' },
    ];

    return (
        <>
            <Script id="faq-schema-account-docs-drt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-account-docs-drt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <Script id="org-schema-account-docs-drt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

            {/* Hero */}
            <section className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden"
                style={{ background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)', minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="max-w-6xl mx-auto text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Best Lawyer for Account Documents<br />
                        <span className="text-blue-300">in DRT Loan Recovery Cases 2025</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Specialized legal experts who analyze bank statements, challenge NPA classifications, identify overcharging, and build evidence-based defences for DRT cases across India.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Get a Free Document Review
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
                                <Link href="/" className="inline-flex items-center hover:text-blue-600">Home</Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="ml-1 font-medium text-gray-500 md:ml-2">Best Lawyer for Account Documents DRT</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Mobile TOC */}
            <div ref={mobTocRef} className="sticky top-0 z-40 lg:hidden bg-white border-b border-gray-200 shadow-sm overflow-x-auto no-scrollbar scroll-smooth py-3 px-4 flex gap-4 whitespace-nowrap">
                {navLinks.map((link) => (
                    <a key={link.id} id={`mob-toc-${link.id}`} href={`#${link.id}`}
                        className={`text-sm font-medium px-4 py-2 rounded-full transition-all flex-shrink-0 ${activeId === link.id ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 bg-gray-50 hover:bg-gray-100'}`}
                        onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById(link.id);
                            if (element) { const offset = 80; const bodyRect = document.body.getBoundingClientRect().top; const elementRect = element.getBoundingClientRect().top; window.scrollTo({ top: elementRect - bodyRect - offset, behavior: 'smooth' }); }
                            setActiveId(link.id);
                        }}>
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
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const element = document.getElementById(link.id);
                                            if (element) { const offset = 80; const bodyRect = document.body.getBoundingClientRect().top; const elementRect = element.getBoundingClientRect().top; window.scrollTo({ top: elementRect - bodyRect - offset, behavior: 'smooth' }); }
                                            setActiveId(link.id);
                                        }}>
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 min-w-0">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Introduction: Why Account Documents Are the Core of Every DRT Case</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In any Debt Recovery Tribunal proceeding, the bank's case rests on a single foundation: the account documents. The loan account statement, the interest computation sheet, the NPA classification memo, the security valuation report, and the disbursement records are not merely supporting papers. They are the entire evidentiary basis on which the bank claims you owe a specific sum of money, classified you as a defaulter on a specific date, and is now seeking to recover crores from you through the full force of the legal system.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                What many borrowers and even many generalist lawyers fail to realize is that these bank-produced documents are not sacrosanct. They are prepared by fallible computer systems, interpreted by bank employees, and presented in the most favorable light for the bank. Errors occur. Incorrect interests are applied. Payments are credited to wrong heads. NPA dates are manipulated. Penal charges are compounded exponentially beyond the contracted rate.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The best lawyer for account documents in DRT cases is not simply someone who can argue law. They are someone who understands banking accounting conventions, RBI IRACP (Income Recognition and Asset Classification) guidelines, the Bankers Books Evidence Act, and forensic audit techniques well enough to identify specific, provable errors in the bank's own financial records. This guide is a comprehensive resource on that specialized expertise.
                            </p>

                            <h2 id="importance-of-documents" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Why Account Documents Are the Battlefield in DRT Proceedings</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Consider this: when a bank files an Original Application in the DRT claiming Rs. 3.5 crores, how does the DRT know that amount is correct? The bank submits an account statement generated from its Core Banking System (CBS). The DRT Presiding Officer, who is a judicial officer and not a banking expert, reviews this document.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Without a specialized lawyer who can challenge the underlying computations, the DRT has no reason to doubt the bank's figures. A typical Written Statement says "the claimed amount is excessive" but provides no specifics. A specialized account documents lawyer does something very different: they obtain the detailed account ledger under the discovery rules, engage a forensic CA, and file a precise objection stating that "the interest for the period from April 2019 to March 2022 was computed at 18.5% per annum as compound interest on compound interest, whereas the loan agreement caps compound interest at 16.5% p.a. on the principal reducing balance only, resulting in an overstatement of Rs. 31.4 lakhs."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                That precision is what changes settlement dynamics within DRT proceedings.
                            </p>

                            <h2 id="bank-documents-in-drt" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Types of Bank Documents Submitted in DRT Cases</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Understanding what documents a bank submits in a DRT Original Application helps you identify where challenges can be raised:
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Loan Account Statement:</strong> A comprehensive record of all debits (interest, principal, charges) and credits (EMI payments, prepayments) in the loan account from disbursement to the filing date of the OA.</li>
                                    <li><strong>Interest Computation Sheet:</strong> A separate document showing how the interest was calculated, including the base rate or MCLR history, spread adjustments, and penal rate application dates.</li>
                                    <li><strong>NPA Classification Memo:</strong> An internal bank document stating the date on which the account was classified as NPA and the regulatory basis for the classification.</li>
                                    <li><strong>Security Valuation Report:</strong> An independent valuer's report on the current market value of the secured property, used to justify the bank's SARFAESI reserve price.</li>
                                    <li><strong>Certified Account Extracts under Bankers Books Evidence Act:</strong> Formally certified extracts from CBS, submitted as primary evidence under Section 2A of the Bankers Books Evidence Act.</li>
                                    <li><strong>Demand and Possession Notices:</strong> Copies of Section 13(2) and 13(4) SARFAESI notices with proof of delivery.</li>
                                </ul>
                            </div>

                            <h2 id="account-statement-analysis" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">How Specialized Lawyers Analyze Account Statements</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The forensic account analysis process used by specialist DRT lawyers follows a structured methodology:
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light">
                                <ol className="list-decimal pl-6 space-y-4 text-gray-800">
                                    <li><strong>Base Interest Rate Verification:</strong> Check whether the bank applied the correct interest rate at each period. For floating rate loans, verify that rate changes tracked the MCLR or Base Rate published by the RBI correctly.</li>
                                    <li><strong>Payment Application Sequence:</strong> Verify that all incoming payments were applied in the correct order: first to outstanding fees, then to accrued interest, and then to principal (as per RBI guidelines).</li>
                                    <li><strong>Penal Interest Application:</strong> Confirm that penal interest was applied only on the overdue amount for the period of overdue and not compounded with the regular interest.</li>
                                    <li><strong>Pre-NPA Credit Verification:</strong> Identify all credits (payments) received within 90 days of the claimed NPA date to verify whether the account should have been classified as NPA on that date.</li>
                                    <li><strong>Charges and Fees Audit:</strong> Cross-reference all charges debited to the loan account (processing fee, legal fee, valuation charges) against the agreed schedule in the loan agreement.</li>
                                    <li><strong>Restructuring Adjustments:</strong> If the loan was restructured, verify that the restructuring terms were correctly implemented and that earlier interest computations were reset as per the restructuring agreement.</li>
                                </ol>
                            </div>

                            <h2 id="npa-classification-docs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Challenging NPA Classification Through Documents</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The NPA classification date is perhaps the most important date in any DRT case. It determines when the limitation period for filing the recovery application begins and when SARFAESI recovery rights activate.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Under RBI IRACP norms, a loan account can be classified as NPA only if the interest or principal remains overdue for more than 90 days. The NPA date must be the 91st day of non-payment counted from the due date of the oldest overdue EMI.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Common NPA classification errors that a specialist lawyer identifies through document analysis include:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li>A payment received within the 90-day window that was credited to a different account by clerical error, making the account appear NPA when it was not.</li>
                                <li>The bank using an incorrect "due date" that was earlier than the contractually agreed due date because of a system misconfiguration.</li>
                                <li>The bank classifying an account as NPA before even sending the first demand notice, which may be a procedural requirement under some loan agreements.</li>
                                <li>The NPA date being changed retrospectively after the borrower raised an objection, without disclosing the change in the OA filed before the DRT.</li>
                            </ul>

                            <h2 id="challenging-bank-records" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Legal Grounds for Challenging Bank Account Records in DRT</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A specialized lawyer uses several established legal grounds to challenge the evidentiary value and accuracy of bank account records:
                            </p>
                            <div className="space-y-4 mb-8">
                                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                                    <h4 className="font-bold text-blue-900 mb-2">Defective Bankers Books Certification</h4>
                                    <p className="text-gray-700 text-sm">The statutory certification under Section 2A of the Bankers Books Evidence Act must be made by an officer of the bank specifically authorized for this purpose and must contain specific declarations about the accuracy of the copy. Missing or incorrect certification makes the document inadmissible.</p>
                                </div>
                                <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                                    <h4 className="font-bold text-green-900 mb-2">Completeness and Accuracy of Account Extracts</h4>
                                    <p className="text-gray-700 text-sm">Banks sometimes submit only partial account extracts covering the period just after default, rather than the entire loan account from disbursement. An extract that does not show the full history prevents the DRT from seeing whether prior payments reduced the principal balance correctly.</p>
                                </div>
                                <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
                                    <h4 className="font-bold text-purple-900 mb-2">Deviation from RBI Master Directions</h4>
                                    <p className="text-gray-700 text-sm">RBI Master Directions on interest rates, penal charges, and NPA classification are binding instructions on all banks. Any interest computation or NPA classification that deviates from these directions is not just erroneous; it is a regulatory violation that the DRT can and should take cognisance of.</p>
                                </div>
                            </div>

                            <h2 id="discovery-and-inspection" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Discovery and Inspection of Bank Documents at DRT</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One of the most powerful procedural tools available to a borrower in DRT proceedings is the right to seek discovery and inspection of documents in the bank's possession. A specialized DRT lawyer uses this tool proactively and strategically.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Documents that a borrower can demand the bank produce through a discovery application include:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li>The complete loan account ledger with all debit and credit entries from disbursement to trial date.</li>
                                <li>The bank's internal NPA classification memo with any revisions.</li>
                                <li>All correspondence between the bank's credit department and the recovery department regarding your loan account.</li>
                                <li>The bank's internal valuation report and the instructions given to the external valuer.</li>
                                <li>Any restructuring proposal documents prepared but not executed.</li>
                                <li>Internal credit committee notes regarding your account, particularly any discussions about settlement or write-off proposals.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The information gathered through discovery often reveals that the bank's own internal assessment of the case is more nuanced than the aggressive recovery position presented in the OA. This information is invaluable for settlement negotiations.
                            </p>

                            <h2 id="expert-witness-reports" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">The Role of Expert Witness Reports in DRT Document Disputes</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                DRT proceedings allow for expert evidence, and specialized lawyers use this provision to maximum effect in document-centric cases. An expert witness in a DRT account document case is typically a Chartered Accountant with direct experience in banking and financial audits.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The expert's report serves three primary functions in the DRT proceeding:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Quantifying the Error:</strong> The expert puts a specific rupee figure on the overcharging or incorrect classification, making the abstract concept of "bank errors" concrete and credible to the DRT.</li>
                                <li><strong>Creating Settlement Pressure:</strong> When the bank's own claim is shown to be inflated by a specific documented amount, the bank's legal team faces pressure from the bank's compliance and risk departments to settle rather than allow a trial that could publicly expose accounting irregularities.</li>
                                <li><strong>Supporting Cross-Examination:</strong> The borrower's lawyer uses the expert report as the framework for cross-examining the bank's witness who has certified the account statements, systematically exposing each identified error in front of the DRT Presiding Officer.</li>
                            </ul>

                            <h2 id="rbi-master-directions" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">RBI Master Directions: The Document Standard Banks Must Follow</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Reserve Bank of India's Master Directions on Income Recognition, Asset Classification and Provisioning (IRACP Directions) form the legal and regulatory basis for how banks must classify loans and compute interest. These directions are periodically updated, and any DRT case involving account documents must be assessed against the version of these directions applicable at the relevant time.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Key IRACP provisions that are most frequently violated in DRT account documents include:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li>The 90-day non-payment rule for NPA classification must be computed from the "earliest overdue date" as per the original repayment schedule, not from an internally adjusted date.</li>
                                <li>Penal charges must be levied as a flat amount or simple interest on the overdue amount for the period of overdue only, not as compound interest compounded quarterly or monthly.</li>
                                <li>Banks must stop accruing interest on NPA accounts for income recognition purposes (but many continue to debit accrued interest to the loan account statement, inflating the balance).</li>
                                <li>Upgrade of NPA to standard category must happen as soon as all overdues are cleared, and the account statement must reflect this correctly.</li>
                            </ul>

                            <h2 id="interest-recalculation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Interest Recalculation: How Much Can a Borrower Save?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Based on forensic audits conducted in hundreds of DRT cases across India, overcharging due to incorrect interest computation is found in approximately 60 to 70 percent of cases. The magnitude of overcharging depends on the loan tenure and amount:
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Rs. 50 lakh to Rs. 1 crore loan:</strong> Overcharging of Rs. 3 to 12 lakhs is typical in 5-year DRT cases.</li>
                                    <li><strong>Rs. 1 crore to Rs. 5 crore loan:</strong> Overcharging of Rs. 15 to 60 lakhs is commonly identified in forensic audits.</li>
                                    <li><strong>Above Rs. 5 crore loan:</strong> Overcharging can exceed Rs. 1 crore in complex cases with multiple interest rate changes and restructuring episodes.</li>
                                    <li><strong>The leverage effect:</strong> Even identifying a conservative Rs. 10 lakh overcharge in a Rs. 1 crore OA changes the negotiating dynamic dramatically, as banks prefer to settle rather than have their accounting practices scrutinized in open court.</li>
                                </ul>
                            </div>

                            <h2 id="sarfaesi-document-defence" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Account Document Challenges in SARFAESI Section 17 Applications</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Section 17 of the SARFAESI Act, which allows borrowers to challenge SARFAESI actions before the DRT, is another arena where account document expertise is critical. The borrower's Section 17 application must specifically allege and prove facts that challenge the legitimacy of the SARFAESI action.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Account document analysis supports Section 17 applications by:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li>Proving the account was not actually NPA on the date stated in the Section 13(2) notice, thereby making the notice invalid from its very inception.</li>
                                <li>Demonstrating that the "outstanding amount" stated in the Section 13(2) notice is materially incorrect, meaning the entire notice is based on a false premise.</li>
                                <li>Showing that the bank's representation to any government authority regarding the loan status (such as in a credit bureau report or in a consortium lender meeting) was inconsistent with the account documents, raising issues of good faith.</li>
                            </ul>

                            <h2 id="key-legal-precedents" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Key Supreme Court and High Court Rulings on Bank Account Documents</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Several landmark judgments directly support a borrower's right to challenge bank account documents in DRT proceedings:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-4 text-gray-700">
                                <li><strong>Punjab National Bank vs. Indo Commercial Workers Cooperative Society:</strong> The Allahabad High Court held that where there were specific allegations of incorrect account statements, the DRT was bound to examine the same and could not simply accept the bank's certified copies without scrutiny.</li>
                                <li><strong>Central Bank of India vs. Ravindra:</strong> The Supreme Court held that interest on borrowed amounts must be computed as per the terms of the contract and applicable RBI guidelines, and courts must scrutinize bank computations if challenged by documentary evidence.</li>
                                <li><strong>On IRACP Violations:</strong> Multiple High Courts have held that a bank's failure to follow RBI's IRACP directions in classifying an account as NPA renders the SARFAESI action initiated on the basis of that classification procedurally vulnerable.</li>
                            </ul>

                            <h2 id="document-based-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Using Document Analysis to Drive Favorable Settlements</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The ultimate purpose of account document analysis in DRT cases is not merely to win a legal argument in the tribunal. The deeper strategic purpose is to create a factual basis that forces the bank to offer a better settlement than it would otherwise consider.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a borrower files a detailed written statement backed by a forensic CA report showing specific overcharging, the bank's legal and risk management teams face a genuine problem: if they let the case go to trial and the DRT upholds the forensic audit findings, they not only lose the inflated amount but also create a precedent that other borrowers might use. They also expose themselves to RBI regulatory scrutiny.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The practical result is that banks become significantly more willing to negotiate after a strong document-based written statement is filed. Settlements at 40 to 60 paise on the rupee of the originally claimed amount are not unusual outcomes in cases supported by rigorous forensic analysis.
                            </p>

                            <h2 id="case-studies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Case Studies: Document Analysis Changing DRT Outcomes</h2>
                            <div className="space-y-6 mb-8">
                                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                                    <h4 className="font-bold text-blue-900 mb-2">Case 1: Rs. 48 Lakh Saved Through Forensic Audit in Hyderabad</h4>
                                    <p className="text-gray-700">A food processing company in Hyderabad had a DRT case with a claimed amount of Rs. 1.87 crore. A forensic CA hired by the borrower's DRT lawyer found that the bank had applied a 22% penal rate on the entire outstanding balance from the date of first default, instead of the contractually specified 2% over the regular rate on the overdue EMI amounts only. The correct computation reduced the claim by Rs. 48 lakhs. After the Written Statement and forensic report were filed, the bank settled the case for Rs. 1.31 crore, preserving the company's manufacturing unit and 140 jobs.</p>
                                </div>
                                <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                                    <h4 className="font-bold text-green-900 mb-2">Case 2: Inadmissible Bank Certificate Derails DRT Case in Delhi</h4>
                                    <p className="text-gray-700">A retail trader in Delhi was facing an OA at DRT-III Delhi for Rs. 72 lakhs. The borrower's specialized DRT lawyer identified that the Bankers Books Evidence Act certificate attached to the account statements was signed by a bank officer who had retired three months before the date of signing, making the certification invalid. The lawyer raised this objection at the evidence stage. The DRT ruled the primary documentary evidence inadmissible. Faced with this setback, the bank agreed to a settlement at Rs. 44 lakhs in full and final settlement.</p>
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
                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Conclusion: Documents Are the Defence</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the modern DRT proceeding, the lawyers who win for their clients are not those who shout the loudest in the tribunal hall. They are the ones who come prepared with a forensic understanding of every page of the bank's account documents. The borrower who arms their lawyer with a comprehensive document analysis is the borrower who walks out of the DRT proceeding with a settlement that they can live with.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Account document challenges are not a delaying tactic. They are a legitimate, RBI-supported, court-recognized form of defence that protects borrowers from being squeezed by financial institutions that have every incentive to present their claims in the most favorable light. The law of India gives you the right to inspect, analyze, and challenge these documents. Exercise that right with expert legal support.
                            </p>
                            <div className="bg-blue-600 text-white rounded-3xl p-8 text-center mb-8">
                                <h3 className="text-2xl font-bold mb-4">Get Your Bank Documents Reviewed by a DRT Specialist</h3>
                                <p className="opacity-90 mb-6">Our specialist lawyers and forensic accountants can identify errors in your bank account statements that could save you lakhs in your DRT case. Contact us today for a free initial review.</p>
                                <Link href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all inline-block">
                                    Request a Free Document Review
                                </Link>
                            </div>
                        </article>
                    </main>

                    {/* Right Column */}
                    <aside className="lg:w-1/4 xl:w-1/5 flex flex-col gap-6 sticky top-14 self-start">
                        <div className="bg-gradient-to-br from-blue-600 to-blue-900 text-white rounded-2xl p-6 shadow-lg">
                            <h3 className="font-bold text-xl mb-3">Free Document Review</h3>
                            <p className="opacity-90 mb-5 text-sm leading-relaxed">Let our specialist lawyers and forensic accountants review your bank account documents and identify errors before your DRT hearing.</p>
                            <ul className="space-y-2 mb-5">
                                {['Forensic Account Audit', 'Interest Recalculation', 'NPA Date Challenge', 'Expert Witness Reports'].map((item, i) => (
                                    <li key={i} className="flex items-center text-sm"><span className="mr-2 text-green-300">✓</span> {item}</li>
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
