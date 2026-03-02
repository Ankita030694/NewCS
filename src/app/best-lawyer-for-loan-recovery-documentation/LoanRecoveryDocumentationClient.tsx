'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function LoanRecoveryDocumentationClient() {
    const [activeId, setActiveId] = useState<string>('');
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
        { id: 'what-is-recovery-documentation', label: 'Recovery Documentation Basics' },
        { id: 'types-of-recovery-docs', label: 'Types of Recovery Docs' },
        { id: 'drt-application-docs', label: 'DRT Application Documents' },
        { id: 'sarfaesi-documentation', label: 'SARFAESI Documentation' },
        { id: 'borrower-side-documents', label: 'Borrower Defence Documents' },
        { id: 'role-of-lawyer', label: 'Role of a Specialist Lawyer' },
        { id: 'common-document-errors', label: 'Common Documentation Errors' },
        { id: 'rbi-guidelines-docs', label: 'RBI Documentation Standards' },
        { id: 'affidavit-and-evidence', label: 'Affidavits and Evidence' },
        { id: 'discovery-of-bank-docs', label: 'Obtaining Bank Documents' },
        { id: 'loan-recovery-legal-notices', label: 'Legal Notice Drafting' },
        { id: 'case-studies', label: 'Case Studies' },
        { id: 'reviews', label: 'Client Reviews' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Conclusion' },
    ];

    const faqs = [
        {
            question: 'What are the most important documents a bank needs to file an Original Application in the DRT?',
            answer: 'For a DRT Original Application under the RDDBFI Act, the bank must file: (1) the original loan sanction letter and agreement, (2) the mortgaged deed or security creation documents (registered), (3) the certified account statement from the date of disbursement, (4) the NPA classification memo, (5) the demand notice sent to the borrower and proof of service, (6) any repayment schedule agreed upon, (7) the resolution passed by the bank authorizing the filing of the OA, and (8) the certified bank account extracts under the Bankers Books Evidence Act. A lawyer helps ensure each document meets the tribunal requirements.'
        },
        {
            question: 'Can a borrower demand copies of all bank documents used in a DRT recovery case?',
            answer: 'Yes. Under Order XI of the Code of Civil Procedure (as adapted for DRT proceedings) and the general principles of natural justice, a borrower has a statutory right to inspect and obtain copies of all documents that the bank relies upon in its Original Application. A failure by the bank to provide documents upon a formal discovery application can result in the DRT drawing adverse inference against the bank. Filing a discovery application is one of the first strategic steps an expert lawyer takes in DRT defence.'
        },
        {
            question: 'What is recovery documentation in the context of SARFAESI proceedings?',
            answer: 'Recovery documentation under SARFAESI includes: the Section 13(2) demand notice (must state the exact outstanding amount, security details, and 60-day demand), proof of NPA classification, the registered mortgage deed creating the security interest that can be enforced, valuation reports from empaneled valuers, the Section 13(4) possession notice for symbolic possession, and the Section 13(8) sale notice with auction details. Each of these documents has strict legal requirements. Any procedural defect in these documents is a ground for challenging the entire SARFAESI action.'
        },
        {
            question: 'What is an affidavit of evidence in loan recovery proceedings, and who signs it?',
            answer: 'In DRT proceedings, evidence is primarily given by way of affidavit rather than oral examination on oath at a preliminary stage. The affidavit of evidence is a sworn statement by an authorized officer of the bank setting out all the facts of the case including the loan details, default, and recovery steps taken. It is accompanied by all supporting documents. The borrower can file a counter-affidavit challenging the bank account affidavit. The person who swears the affidavit is cross-examined on its contents before the Recovery Officer or Presiding Officer.'
        },
        {
            question: 'How does a lawyer help in preparing the Written Statement for a DRT case?',
            answer: 'The Written Statement (WS) is the most critical defence document in DRT proceedings. A specialist lawyer drafts it to systematically challenge the bank claim on multiple levels: factual (payments made and not credited, wrong outstanding amount), legal (procedural defects in the OA, limitation issues, improper NPA classification), documentary (defective account statements, inadmissible bank certificates), and regulatory (RBI guideline violations). The WS also sets out any counter-claim and raises preliminary objections that can shorten the proceedings significantly.'
        },
        {
            question: 'What documents are needed to file a Section 17 Securitization Application challenging a SARFAESI action?',
            answer: 'A Section 17 Application before the DRT must include: the Section 13(2) notice received from the bank, the NPA notice or letter from the bank, proof of payments made after the date stated as NPA date, the original loan agreement showing the agreed terms, any representations made by the borrower to the bank and the bank reply (or lack thereof), and a detailed affidavit setting out the grounds on which the SARFAESI action is being challenged. The lawyer also files an urgent application for interim stay along with the SA, supported by a separate affidavit.'
        },
        {
            question: 'Can defective loan recovery documents lead to a bank case being dismissed?',
            answer: 'Yes. Courts and tribunals have consistently held that procedural compliance with documentation requirements is not merely a technicality but a jurisdictional requirement in many cases. For example, if the Section 13(2) notice does not specify the correct outstanding amount or is served on a wrong address, the entire SARFAESI action built on it is void. Similarly, if the DRT Original Application does not include a proper certified account statement, the tribunal can reject the application without going into the merits. An expert lawyer identifies these defects and raises them at the earliest opportunity.'
        },
        {
            question: 'What is a "debt assignment deed" and when is it relevant to loan recovery documentation?',
            answer: 'A debt assignment deed is the legal document by which a bank transfers (assigns) a non-performing loan account to an Asset Reconstruction Company (ARC) or another financial entity. This assignment must be documented through a registered or validly executed deed that clearly specifies the transferred loan accounts, the outstanding amounts, the security interests being transferred, and the consideration paid. If the debt assignment deed is defective or improperly executed, the ARC has no valid title to the debt and its SARFAESI recovery actions can be challenged as unauthorized.'
        },
        {
            question: 'How long does documentation preparation take for a DRT case?',
            answer: 'The timeline for documentation preparation depends on the complexity of the case. For a straightforward loan recovery OA, a bank typically needs 2 to 4 weeks. For a borrower defending against a DRT OA, the Written Statement must be filed within 30 days of receiving the OA from the DRT. Extension can be sought with valid grounds. For a SARFAESI Section 17 Application, the lawyer needs to work very quickly because the 45-day limitation period for filing is strictly enforced. In urgent cases involving auction notices, a Section 17 SA can be prepared and filed within 48 to 72 hours.'
        },
        {
            question: 'What role does a Chartered Accountant play in loan recovery documentation?',
            answer: 'A Chartered Accountant (CA) specializing in banking plays a pivotal role in loan recovery documentation on the borrower side. The CA prepares a forensic account analysis report that serves as expert evidence to challenge the bank account statement. This report identifies errors in interest computation, wrong NPA classification dates, unaccounted credits, and unauthorized charges. The CA also assists in preparing counter-claims for excess charges and can serve as an expert witness who can be cross-examined on the forensic report in DRT proceedings.'
        }
    ];

    const reviews = [
        {
            name: 'Mahesh Agarwal',
            location: 'Lucknow',
            stars: 5,
            comment: 'My DRT case had very complex banking documents. The CredSettle team not only helped with the legal defence but also engaged a CA to prepare a forensic account report. We found Rs. 18 lakhs in overcharging and the case settled at a significant discount. Documentation expertise made all the difference.'
        },
        {
            name: 'Rekha Nair',
            location: 'Kochi',
            stars: 5,
            comment: 'The bank handed us a SARFAESI notice that had an incorrect outstanding amount. Our lawyer immediately filed a Section 17 SA based on this documentation defect and got a stay on the possession. The DRT accepted our argument. Exceptional knowledge of recovery documentation requirements.'
        },
        {
            name: 'Tarun Mehta',
            location: 'Ahmedabad',
            stars: 5,
            comment: 'I needed help understanding all the documents the bank had filed in my DRT case. The lawyer team at CredSettle walked me through every single document, identified three critical errors in the bank account statement, and prepared a watertight Written Statement. The case was resolved in our favor six months later.'
        },
        {
            name: 'Anjali Rao',
            location: 'Bangalore',
            stars: 5,
            comment: 'The Bankers Books Evidence Act certification on the bank account statement was defective. My lawyer caught this and the DRT ruled the document inadmissible. This forced the bank to file fresh documents and in the meantime we negotiated a settlement. Brilliant legal strategy built on documentation analysis.'
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
        'name': 'Best Lawyer for Loan Recovery Documentation',
        'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': '4.9', 'reviewCount': '2634', 'bestRating': '5', 'worstRating': '1' }
    };

    const orgSchema = {
        '@context': 'https://schema.org', '@type': 'Organization',
        'name': 'CredSettle', 'url': 'https://www.credsettle.com',
        'logo': 'https://www.credsettle.com/credsettle-logo.svg',
        'contactPoint': { '@type': 'ContactPoint', 'telephone': '+91-9311-778584', 'contactType': 'customer service', 'areaServed': 'IN', 'availableLanguage': 'English' }
    };

    const relatedPages = [
        { href: '/best-lawyer-for-account-documents-drt', label: 'Account Documents DRT Lawyer' },
        { href: '/best-lawyer-for-drt-case-defence-for-bank-loan-recovery', label: 'Best DRT Case Defence Lawyer' },
        { href: '/best-lawyer-for-documentation-review-of-loan-agreement', label: 'Loan Agreement Documentation Review' },
        { href: '/best-lawyer-for-arc-loan-assignment-dispute', label: 'ARC Loan Assignment Dispute Lawyer' },
        { href: '/drt-lawyer-in-mumbai-loan-recovery', label: 'DRT Lawyer in Mumbai' },
        { href: '/best-lawyer-to-challenge-loan-assignment-to-arc', label: 'Challenge Loan Assignment to ARC' },
    ];

    return (
        <>
            <Script id="faq-schema-loan-recovery-docs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-loan-recovery-docs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <Script id="org-schema-loan-recovery-docs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

            {/* Hero */}
            <section className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden"
                style={{ background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)', minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="max-w-6xl mx-auto text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Best Lawyer for Loan Recovery<br />
                        <span className="text-blue-300">Documentation in India 2025</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Expert legal documentation for DRT applications, SARFAESI proceedings, recovery affidavits, and borrower defence documents that withstand court scrutiny.
                    </p>
                    <Link href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block">
                        Get a Free Documentation Review
                    </Link>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-[1440px] mx-auto px-4 py-4">
                    <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                            <li><div className="flex items-center"><svg className="w-3 h-3 text-gray-400 mx-1" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" /></svg><span className="ml-1 font-medium text-gray-500">Best Lawyer for Loan Recovery Documentation</span></div></li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Mobile TOC */}
            <div ref={mobTocRef} className="sticky top-0 z-40 lg:hidden bg-white border-b border-gray-200 shadow-sm overflow-x-auto no-scrollbar py-3 px-4 flex gap-4 whitespace-nowrap">
                {navLinks.map((link) => (
                    <a key={link.id} id={`mob-toc-${link.id}`} href={`#${link.id}`}
                        className={`text-sm font-medium px-4 py-2 rounded-full transition-all flex-shrink-0 ${activeId === link.id ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 bg-gray-50 hover:bg-gray-100'}`}
                        onClick={(e) => { e.preventDefault(); const el = document.getElementById(link.id); if (el) { window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' }); } setActiveId(link.id); }}>
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
                                        onClick={(e) => { e.preventDefault(); const el = document.getElementById(link.id); if (el) { window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' }); } setActiveId(link.id); }}>
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 min-w-0">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Introduction: Why Documentation is the Foundation of Loan Recovery</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In every loan recovery proceeding in India, whether before the Debt Recovery Tribunal, the SARFAESI authority, or the civil court, the case is ultimately decided on paper. The documents filed by both parties, the affidavits sworn by bank officers, the certified account statements, the demand notices, and the security creation documents collectively form the entire factual basis of the dispute. Without proper documentation, neither a bank can recover its dues effectively, nor can a borrower mount a credible legal defence.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                What makes loan recovery documentation unique is its highly technical nature. It sits at the intersection of banking law, property law, procedural law, and financial accounting. A document that looks perfectly fine to a layperson may be fatally defective under the Bankers Books Evidence Act, the SARFAESI regulations, or the DRT Procedure Rules. These defects, when identified and raised by a specialist lawyer, can completely change the trajectory of a recovery proceeding.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This comprehensive guide explains the entire landscape of loan recovery documentation in India as it stands in 2025. It covers what documents are required at each stage of recovery, what mistakes are most commonly made, how a specialized lawyer uses documentation to defend borrowers and advise lenders, and why getting the documentation right from the very beginning is a non-negotiable requirement for success in any loan recovery matter.
                            </p>

                            <h2 id="what-is-recovery-documentation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">What is Loan Recovery Documentation: The Legal Framework</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Loan recovery documentation refers to the complete set of legal papers, agreements, notices, affidavits, court pleadings, and financial records that are created, exchanged, and filed during the process of recovering an outstanding loan through legal channels. This documentation serves different purposes depending on which party is creating it.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For the bank or financial institution, documentation serves to establish the existence of the debt, the amount outstanding, the security available for recovery, and the legal authority to pursue recovery. For the borrower, documentation serves to challenge the bank claims, demonstrate payments made, identify procedural errors, and establish defences that reduce or eliminate liability.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6">
                                <p className="text-gray-800 font-medium mb-3">The primary legal frameworks governing loan recovery documentation in India are:</p>
                                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                                    <li>Recovery of Debts and Bankruptcy Act, 1993 (RDDBFI Act) for DRT proceedings</li>
                                    <li>SARFAESI Act, 2002 and SARFAESI Regulations for out-of-court enforcement</li>
                                    <li>Bankers Books Evidence Act, 1891 for admissibility of bank account records</li>
                                    <li>Code of Civil Procedure, 1908 (as adapted for DRT) for procedural documentation</li>
                                    <li>Indian Evidence Act for the evidentiary weight of documents</li>
                                    <li>RBI Master Directions on income recognition and NPA classification</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Each of these legal instruments imposes specific documentation requirements. A specialist lawyer who understands all these frameworks is the only professional equipped to handle the documentation aspects of a complex loan recovery matter.
                            </p>

                            <h2 id="types-of-recovery-docs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Types of Loan Recovery Documents: A Comprehensive Overview</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Loan recovery documentation can be broadly categorized into five distinct types, each with its own legal status, evidentiary weight, and procedural requirements:
                            </p>
                            <div className="space-y-4 mb-8">
                                <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-2">1. Primary Loan Documents</h4>
                                    <p className="text-gray-600 text-sm">The original loan application, sanction letter, loan agreement, security creation documents (mortgage deed, hypothecation deed, pledge agreement), guarantee deeds, and insurance documents. These form the foundation of any recovery action.</p>
                                </div>
                                <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-2">2. Account Records</h4>
                                    <p className="text-gray-600 text-sm">Loan account statements, interest computation sheets, NPA classification memos, and repayment history records generated from the bank Core Banking System. These are submitted as certified copies under the Bankers Books Evidence Act.</p>
                                </div>
                                <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-2">3. Statutory Recovery Notices</h4>
                                    <p className="text-gray-600 text-sm">Section 13(2) SARFAESI demand notices, Section 13(4) possession notices, Section 13(8) sale notices, and demand notices under the RDDBFI Act. Each has strict content and service requirements.</p>
                                </div>
                                <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-2">4. Court Pleadings and Applications</h4>
                                    <p className="text-gray-600 text-sm">Original Applications (OA) in DRT, Written Statements, Counter-Claims, Section 17 Securitization Applications, Interim Applications for stay orders, Affidavits of Evidence, and Appeals before DRAT.</p>
                                </div>
                                <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-2">5. Expert Reports and Forensic Documents</h4>
                                    <p className="text-gray-600 text-sm">Chartered Accountant forensic audit reports, independent property valuation reports, expert witness affidavits, and technical reports challenging bank account computations. These are supplementary evidence documents with significant impact.</p>
                                </div>
                            </div>

                            <h2 id="drt-application-docs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">DRT Application Documentation: What Banks Must File</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a bank or financial institution files an Original Application (OA) in the Debt Recovery Tribunal, it must include a comprehensive set of documents that prove the existence and amount of the debt, the default, and the legal standing of the bank to file the application.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A specialist lawyer reviewing a bank OA on behalf of a borrower checks each required document against the statutory checklist. Missing or defective documents are grounds for objection that can significantly delay or complicate the bank recovery.
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light">
                                <ol className="list-decimal pl-6 space-y-3 text-gray-800">
                                    <li><strong>Certified Copy of Loan Agreement:</strong> Must be produced as a certified true copy. The certification must be by an authorized bank officer.</li>
                                    <li><strong>Certified Account Statement:</strong> A complete account statement from disbursement to the filing date, certified under the Bankers Books Evidence Act.</li>
                                    <li><strong>Demand Notice with Service Proof:</strong> Evidence that the borrower was notified of the outstanding amount and given an opportunity to repay before legal action was initiated.</li>
                                    <li><strong>Board or Competent Authority Resolution:</strong> The internal bank authorization for filing the recovery application in the DRT.</li>
                                    <li><strong>Security Documents:</strong> Registered mortgage deed, hypothecation agreement, and any guarantee deeds signed by co-borrowers or guarantors.</li>
                                    <li><strong>NPA Classification Communication:</strong> The bank internal document recording the NPA date and the communication sent to the borrower about NPA classification as mandated by RBI.</li>
                                    <li><strong>Vakalatnama:</strong> The legal authorization from the bank to the advocate filing the OA.</li>
                                </ol>
                            </div>

                            <h2 id="sarfaesi-documentation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">SARFAESI Documentation: The Out-of-Court Recovery Paper Trail</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                SARFAESI proceedings are driven almost entirely by documentation. Because the bank acts without prior court intervention, every step must be precisely documented to withstand challenge in the DRT under Section 17 or in the High Court under Article 226.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The SARFAESI documentation chain begins with the NPA classification and ends either with the sale of the secured asset or with the debt being fully repaid. Each link in this chain is a document that must meet specific legal requirements.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Critical SARFAESI documentation requirements that lawyers look for:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Section 13(2) Notice:</strong> Must be sent to each borrower and guarantor separately, must state the exact outstanding amount as of a specific date, must mention the security interest, and must give exactly 60 days to repay. Any deviation from these requirements makes the notice void.</li>
                                <li><strong>Section 13(3A) Representation Response:</strong> If the borrower submits a written representation within the 60-day period, the bank must respond to it within 15 days with a reasoned reply. Failure to respond is a procedural lapse that can be raised in a Section 17 SA.</li>
                                <li><strong>Authorized Officer Designation:</strong> The official who issues the SARFAESI notice and takes possession must be a properly designated "Authorized Officer" of the bank under its board-approved SARFAESI policy. Using an undesignated officer is a legal defect.</li>
                                <li><strong>Valuation Report:</strong> Before fixing the reserve price for auction, the bank must obtain an independent valuation report from a government-approved or empaneled valuer. The valuation must be current (within six months).</li>
                                <li><strong>E-Auction Documentation:</strong> For properties auctioned electronically, the bank must follow the IBBI e-auction rules and document the entire process including the auction notice publication in two newspapers (at least one regional language), the e-auction platform records, and the successful bidder documents.</li>
                            </ul>

                            <h2 id="borrower-side-documents" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Borrower Defence Documentation: Building Your Legal Case</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For a borrower facing loan recovery proceedings, documentation is equally critical. The borrower defence case is built document by document. A specialist lawyer helps the borrower gather, organize, and present this documentation in the most strategically effective manner.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The core documents a borrower needs for their legal defence include:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                                    <strong className="text-blue-900 block mb-2">Repayment Evidence</strong>
                                    <p className="text-gray-600 text-sm">Bank transfer records, cheque payment copies, online transaction references, and receipts for every EMI or payment made. These documents are crucial to challenging the bank account statement.</p>
                                </div>
                                <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                                    <strong className="text-green-900 block mb-2">Correspondence with Bank</strong>
                                    <p className="text-gray-600 text-sm">All emails, letters, and written communications with the bank about the loan, including any restructuring requests, payment holiday applications, and loan modification proposals.</p>
                                </div>
                                <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
                                    <strong className="text-purple-900 block mb-2">Financial Records</strong>
                                    <p className="text-gray-600 text-sm">Income tax returns, GST returns, audited financial statements, and bank statements from the borrower account for the relevant period to support arguments about financial capacity and genuine hardship.</p>
                                </div>
                                <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                                    <strong className="text-orange-900 block mb-2">Property Documents</strong>
                                    <p className="text-gray-600 text-sm">Original title deeds, property registration documents, encumbrance certificates, and independent valuation reports to challenge any undervalued bank auction reserve price.</p>
                                </div>
                            </div>

                            <h2 id="role-of-lawyer" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">The Role of a Specialist Lawyer in Recovery Documentation</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A specialist lawyer for loan recovery documentation performs functions that go well beyond what most people imagine. They are not just advocates who appear in court; they are legal architects who design the entire documentation strategy for the case.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                On the lender side, a specialist lawyer ensures that every document in the recovery chain is legally compliant before it is issued, so that when challenged by the borrower, it withstands scrutiny. They draft SARFAESI notices, prepare DRT applications, and ensure the certified account statements meet the Bankers Books Evidence Act requirements.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                On the borrower side, a specialist lawyer performs a forensic review of every bank document, identifies procedural defects, drafts detailed Written Statements and Section 17 SAs, engages forensic CAs for account analysis, and prepares comprehensive affidavits of evidence that present the borrower case effectively.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The specific skills that distinguish a specialist recovery documentation lawyer from a generalist include:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li>Deep knowledge of the Bankers Books Evidence Act certification requirements.</li>
                                <li>Ability to read and analyze a bank loan ledger in detail.</li>
                                <li>Understanding of RBI IRACP norms and how they translate into documentation obligations.</li>
                                <li>Experience with SARFAESI notice drafting and the common defects that arise in Section 17 challenges.</li>
                                <li>Command of affidavit drafting standards for DRT proceedings.</li>
                                <li>Ability to cross-examine bank witnesses on the documentation they have filed.</li>
                            </ul>

                            <h2 id="common-document-errors" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Most Common Documentation Errors in Loan Recovery Proceedings</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Based on patterns observed across thousands of loan recovery cases in India, documentation errors fall into predictable categories. Understanding these common errors helps borrowers know what to look for and helps lenders avoid them.
                            </p>
                            <div className="space-y-4 mb-8">
                                <div className="p-5 bg-red-50 border border-red-100 rounded-2xl">
                                    <h4 className="font-bold text-red-900 mb-2">Error Category 1: Defective Bankers Books Certification</h4>
                                    <p className="text-gray-700 text-sm">The most frequent challenge to bank account statements. The Section 2A certificate must be signed by a specifically authorized officer (Manager level or above as per RBI guidelines), must contain a specific declaration about the accuracy of the copy, and must identify the original book from which the extract is taken. Missing any element makes the certificate invalid.</p>
                                </div>
                                <div className="p-5 bg-amber-50 border border-amber-100 rounded-2xl">
                                    <h4 className="font-bold text-amber-900 mb-2">Error Category 2: Wrong Outstanding Amount in Section 13(2) Notice</h4>
                                    <p className="text-gray-700 text-sm">Banks sometimes issue SARFAESI demand notices with an outstanding amount that includes future interest not yet accrued, or excludes credits that were received and not applied. If the amount in the notice does not match the account statement on that date, the entire notice is potentially void.</p>
                                </div>
                                <div className="p-5 bg-blue-50 border border-blue-100 rounded-2xl">
                                    <h4 className="font-bold text-blue-900 mb-2">Error Category 3: Service Issues with Demand Notices</h4>
                                    <p className="text-gray-700 text-sm">Sending the Section 13(2) notice to an outdated address, failing to serve all co-borrowers and guarantors separately, or not following the prescribed mode of service (registered post, speed post, or personal service) are service-related defects that can invalidate the notice.</p>
                                </div>
                                <div className="p-5 bg-green-50 border border-green-100 rounded-2xl">
                                    <h4 className="font-bold text-green-900 mb-2">Error Category 4: Limitation Period Lapses</h4>
                                    <p className="text-gray-700 text-sm">Filing a DRT Original Application after the three-year limitation period from the date the debt became due, or filing a Section 17 SA after the 45-day window from the SARFAESI action being challenged, are fatal technical defects that courts strictly enforce.</p>
                                </div>
                            </div>

                            <h2 id="rbi-guidelines-docs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">RBI Documentation Guidelines Banks Must Follow</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Reserve Bank of India issues Master Circulars and Master Directions that impose specific documentation obligations on banks throughout the loan recovery process. These are not mere guidelines; they are mandatory instructions backed by RBI supervisory authority.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Key RBI documentation requirements relevant to recovery proceedings:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>NPA Classification Communication:</strong> RBI requires banks to communicate the NPA classification to the borrower in writing within a specified time. Failure to issue this communication is a regulatory violation that can be raised before the DRT.</li>
                                <li><strong>Stressed Asset Resolution Documentation:</strong> For accounts above a threshold, banks must document their attempts at resolution before initiating recovery. A DRT case filed without this documentation is procedurally vulnerable.</li>
                                <li><strong>Recovery Agent Authorization:</strong> Banks must maintain documentation of recovery agent authorizations, training, and complaint handling. In cases where recovery agents harassed the borrower, the absence of proper authorization documentation strengthens the borrower counter-claim.</li>
                                <li><strong>Fair Practices Code Communication:</strong> Banks must provide borrowers with a copy of their Fair Practices Code at the time of sanction. This document governs the terms of the lending relationship and its absence can support borrower arguments about non-disclosure.</li>
                            </ul>

                            <h2 id="affidavit-and-evidence" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Affidavits and Evidence Affidavits in DRT Proceedings</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In DRT proceedings, evidence is presented largely through affidavits rather than oral testimony at the initial stage. The affidavit of evidence is a formal sworn document that substitutes for examination-in-chief and sets out all the material facts the deponent wishes to rely on.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For a bank, the chief affidavit of evidence is typically sworn by the branch manager or authorized recovery officer. For the borrower, the chief affidavit is sworn by the proprietor, director, or co-borrower, as applicable.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A well-drafted affidavit of evidence on the borrower side should:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li>Set out the full history of the loan relationship, including all payments made.</li>
                                <li>Specifically identify each document filed by the bank that is challenged.</li>
                                <li>Exhibit all supporting documents referenced in the affidavit, with proper page numbers.</li>
                                <li>Incorporate by reference the forensic CA report or expert opinion where available.</li>
                                <li>State clearly the specific relief sought from the DRT.</li>
                                <li>Be sworn before a Notary or Magistrate to establish legal validity.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The deponent is cross-examined on the affidavit contents. A specialist lawyer carefully prepares the deponent for this cross-examination, explaining each statement in the affidavit and anticipating the bank lawyer questions.
                            </p>

                            <h2 id="discovery-of-bank-docs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">How to Obtain Bank Documents: Discovery and Inspection</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One of the most powerful tools in the borrower legal arsenal is the discovery and inspection application. Through this application, the borrower can force the bank to produce documents it may not have voluntarily filed in the DRT case.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Documents typically sought through discovery applications in DRT loan recovery cases include:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li>The complete loan account ledger from first disbursement to the filing of the OA.</li>
                                <li>All correspondence between the bank credit department and recovery department regarding the specific account.</li>
                                <li>Internal NPA classification memos and any revisions thereto.</li>
                                <li>Instructions given to the recovery agent or third-party recovery firm.</li>
                                <li>Any settlement discussions at the bank level before the OA was filed.</li>
                                <li>The bank board resolution or credit committee resolution authorizing the OA filing.</li>
                                <li>Documents related to any consortium lender meetings regarding this account (for multi-bank loans).</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The DRT has the power to order the bank to produce any document that is relevant to the proceedings. When banks are compelled to produce internal communications, the revealed information often significantly strengthens the borrower position in negotiations.
                            </p>

                            <h2 id="loan-recovery-legal-notices" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Legal Notice Drafting in Loan Recovery: Critical Requirements</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Legal notices in loan recovery proceedings are not standard letters. They operate as formal legal instruments that, if improperly drafted, can undermine the entire recovery action or, from the borrower side, fail to create the legal pressure needed for a negotiated resolution.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                There are three distinct types of legal notices in the loan recovery context, each with different requirements:
                            </p>
                            <div className="space-y-4 mb-8">
                                <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-2">1. Section 13(2) SARFAESI Demand Notice</h4>
                                    <p className="text-gray-600 text-sm">This is the most formal notice in loan recovery. It must be issued by an officer designated as "Authorized Officer" under the bank SARFAESI policy, must be in the format specified under the Security Interest (Enforcement) Rules, 2002, must clearly specify the outstanding amount and security details, and must demand repayment within 60 days. It must be served on every borrower and guarantor at their last known address.</p>
                                </div>
                                <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-2">2. Section 138 NI Act Demand Notice (Cheque Bounce)</h4>
                                    <p className="text-gray-600 text-sm">This notice must be sent within 30 days of the cheque return memo, must demand the cheque amount within 15 days, and must be sent by registered/speed post. The borrower counter-notice in response is equally important and must be sent within 15 days to preserve defences.</p>
                                </div>
                                <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-2">3. General Demand Notice Before DRT Filing</h4>
                                    <p className="text-gray-600 text-sm">While not strictly required by statute before every DRT OA filing, many banks send a general demand notice. This notice helps establish the date of "accrual of cause of action" for limitation purposes. A lawyer ensures this notice is served properly and that it sets the limitation clock running correctly for both the bank and the borrower.</p>
                                </div>
                            </div>

                            <h2 id="case-studies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Case Studies: Documentation Making the Difference</h2>
                            <div className="space-y-6 mb-8">
                                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                                    <h4 className="font-bold text-blue-900 mb-2">Case 1: Defective Bankers Books Certificate in Ahmedabad DRT</h4>
                                    <p className="text-gray-700">A textile trader in Ahmedabad faced a Rs. 1.1 crore DRT claim. The bank account statement was the primary evidence. The borrower lawyer examined the Bankers Books Evidence Act certificate and found that it was signed by an Assistant Manager, while the RBI circular required at minimum a Manager-level officer. The certificate was challenged as defective. The DRT ruled that the certified account statement was inadmissible without a valid certificate. The bank was compelled to file fresh documents with correct certification, causing a 4-month delay. During this period, the borrower negotiated and settled the matter for Rs. 73 lakhs, saving approximately 33 percent.</p>
                                </div>
                                <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                                    <h4 className="font-bold text-green-900 mb-2">Case 2: Missing Section 13(3A) Reply Stayed SARFAESI in Hyderabad</h4>
                                    <p className="text-gray-700">A pharmaceutical company in Hyderabad received a Section 13(2) SARFAESI notice and immediately filed a written representation challenging the outstanding amount calculation. The bank did not respond within 15 days as required. When the bank subsequently issued a Section 13(4) possession notice, the borrower filed a Section 17 SA. The DRT granted an immediate stay on possession, holding that the bank failure to respond to the representation was a procedural lapse that made the subsequent SARFAESI actions premature. The bank ultimately entered settlement discussions and accepted a One-Time Settlement at 68 paise on the rupee.</p>
                                </div>
                            </div>

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

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Conclusion: Documentation is Strategy</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the context of loan recovery in India, documentation is not an administrative task. It is a strategic legal activity that directly determines the outcome of DRT proceedings, SARFAESI enforcements, and negotiated settlements. The bank that files perfect documentation wins quickly. The borrower whose lawyer identifies and exploits documentation defects gains both time and leverage.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Engaging a specialist lawyer for loan recovery documentation at the earliest possible stage, whether you are a lender initiating recovery or a borrower defending against it, is the single most effective step you can take to protect your legal position. Documentation defects are far easier to remedy proactively than to defend in the middle of adversarial proceedings.
                            </p>
                            <div className="bg-blue-600 text-white rounded-3xl p-8 text-center mb-8">
                                <h3 className="text-2xl font-bold mb-4">Expert Loan Recovery Documentation Support</h3>
                                <p className="opacity-90 mb-6">Whether you need to prepare watertight recovery documents or challenge defective bank documentation, our specialist team is ready to help. Get a free case assessment today.</p>
                                <Link href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all inline-block">
                                    Get Free Documentation Review
                                </Link>
                            </div>
                        </article>
                    </main>

                    {/* Right Column */}
                    <aside className="lg:w-1/4 xl:w-1/5 flex flex-col gap-6 sticky top-14 self-start">
                        <div className="bg-gradient-to-br from-blue-600 to-blue-900 text-white rounded-2xl p-6 shadow-lg">
                            <h3 className="font-bold text-xl mb-3">Free Documentation Review</h3>
                            <p className="opacity-90 mb-5 text-sm leading-relaxed">Get expert legal review of all bank recovery documents and DRT filings. Identify defects that can change your case outcome.</p>
                            <ul className="space-y-2 mb-5">
                                {['DRT Application Preparation', 'SARFAESI Notice Analysis', 'Bankers Books Certification', 'Affidavit Drafting'].map((item, i) => (
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
