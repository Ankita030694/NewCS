'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    ChevronRight,
    TableOfContents,
    ArrowRight,
    CheckCircle2,
    Scale,
    ShieldCheck,
    AlertCircle,
    HelpCircle,
    MessageCircle,
    ExternalLink,
    Star,
    FileText,
    Gavel,
    Fingerprint,
    Search,
    ShieldAlert
} from 'lucide-react';
import Script from 'next/script';

const DisputeForgedSignaturesClient = () => {
    const [activeSection, setActiveSection] = useState('overview');

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                'overview',
                'legal-framework',
                'ipc-vs-bsa',
                'handwriting-experts',
                'fsl-cbi-reports',
                'civil-vs-criminal',
                'stop-emi-cibil',
                'defense-matrix',
                'faqs'
            ];

            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top >= 0 && rect.top <= 200;
                }
                return false;
            });

            if (current) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const faqData = [
        {
            question: "How do I prove my signature was forged on a loan document?",
            answer: "Proving forgery requires a combination of forensic and circumstantial evidence. Primarily, an opinion from a certified Handwriting Expert or a report from a Forensic Science Laboratory (FSL) is used to compare the 'specimen' signature (admitted) with the 'disputed' signature. Additionally, you must show you were not present at the location of signing or that the loan funds never reached your account."
        },
        {
            question: "What sections of the law deal with loan forgery in 2025-26?",
            answer: "Under the new Bharatiya Nyaya Sanhita (BNS) 2023 and the existing IPC, forgery is covered under Sections 336, 337, and 338 (previously IPC 465, 467, 468). Specifically, forgery of a 'valuable security' like a loan agreement or a promissory note captures the most severe penalties, including life imprisonment in certain aggregate fraud cases."
        },
        {
            question: "Can I stop bank EMIs if I dispute the loan as forged?",
            answer: "Yes, but you must act quickly. Filing a police complaint (FIR) and sending a legal notice to the bank's Nodal Officer citing 'Identity Theft' can provide a grounds to stay EMIs. However, a bank usually only stops deductions after a prima facie report from a handwriting expert or a court stay order."
        },
        {
            question: "Are handwriting expert opinions conclusive in Indian courts?",
            answer: "Handwriting expert opinions are considered 'advisory' rather than 'conclusive.' Under Section 45 of the Evidence Act (now Section 39 of BSA 2023), it is an expert's opinion. The court has the final authority to compare signatures under Section 73 (Evidence Act) but relies heavily on FSL reports for technical corroboration."
        },
        {
            question: "What is the role of an FSL report in a loan fraud case?",
            answer: "A Forensic Science Laboratory (FSL) report is a government-authenticated analysis of ink, pressure patterns, and stroke rhythm. In 2026, many FSLs also use digital forensics to determine if a signature was 'copied' or 'traced' using digital tools. This report is high-value evidence in both civil and criminal trials."
        },
        {
            question: "Can I sue the bank for negligence in a forgery case?",
            answer: "Absolutely. If the bank failed in 'KYC Due Diligence' or did not verify the signature against their existing records (like your SB account signature), you can sue them for 'Deficiency in Service' in Consumer Court and seek compensation for mental agony and financial loss."
        },
        {
            question: "How does identity theft lead to forged loan signatures?",
            answer: "Identity theft occurs when fraudsters use your Aadhaar or Pan card to apply for 'Instant Digital Loans.' Often, they forge a digital signature or a stylus-signed image. Disputing these requires forensic analysis of the 'metadata' of the signed document on the lender's app."
        },
        {
            question: "Will a forged loan affect my CIBIL score?",
            answer: "Initially, yes. The default will trigger a 100+ point drop. However, with an FIR copy and a lawyer's representation, you can raise a 'Data Inaccuracy' dispute with CIBIL. If the forgery is proven, CIBIL is mandated to delete the entire record within 30 days."
        },
        {
            question: "What is a 'Civil Suit for Declaration' in forgery?",
            answer: "This is a suit filed to get the court to declare that the loan agreement is 'void ab initio' (null from the start) because the signature is not yours. Once the court grants this declaration, the bank loses its legal right to recover the money from you."
        },
        {
            question: "How long does a forgery dispute take to resolve?",
            answer: "A criminal investigation with an FSL report usually takes 6-12 months. A civil suit for declaration can take 2-3 years. However, 'Interim Relief' (stopping EMIs) can often be secured within 60 days of filing the case with proper legal strategy."
        }
    ];

    const reviews = [
        {
            name: 'Sunil Mehta',
            location: 'Mumbai',
            stars: 5,
            comment: "CredSettle's handwriting expert proved the bank manager had forged my wife's signature. The loan was canceled and the bank paid us ₹5 Lakhs in damages. Their forensic team is brilliant."
        },
        {
            name: 'Priya Sharma',
            location: 'Delhi',
            stars: 5,
            comment: "I was a victim of identity theft where someone took a digital loan in my name. CredSettle used IP tracking and forensic metadata to prove I didn't sign the document. My CIBIL is now clean."
        },
        {
            name: 'Amit Patel',
            location: 'Ahmedabad',
            stars: 5,
            comment: "The recovery agents were relentless until the CredSettle lawyers stepped in. They filed an FIR and a stay order that stopped the legal harassment immediately. Exceptional service."
        },
        {
            name: 'Vikram Singh',
            location: 'Chandigarh',
            stars: 5,
            comment: "Dealing with a forged loan is mentally draining. CredSettle handled all the technical forensics and lawyer communications, allowing me to focus on my life again. Truly worth every rupee."
        }
    ];

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.credsettle.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Dispute Over Forged Loan Signatures",
                "item": "https://www.credsettle.com/dispute-over-forged-loan-signatures"
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <div className="bg-white min-h-screen">
            <Script
                id="breadcrumb-schema-client"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Script
                id="faq-schema-client"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

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
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 text-white/90 animate-fade-in shadow-lg">
                        <ShieldAlert className="w-4 h-4 text-blue-300" />
                        <span className="text-sm font-medium tracking-wide">Loan Fraud Protection 2025-26</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                        Dispute Over Forged <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">
                            Loan Signatures
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-blue-100/80 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                        Victim of loan forgery or identity theft? We provide expert legal strategies using handwriting forensics, IPC/BNS criminal defense, and civil declaration suits to clear your name and credit score.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-all duration-300 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group"
                        >
                            Report Forgery & Fraud
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                                        Dispute Over Forged Loan Signatures
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Mobile Sticky TOC */}
            <div
                className="sticky top-0 z-40 lg:hidden bg-white border-b border-gray-200 shadow-sm overflow-x-auto no-scrollbar scroll-smooth py-3 px-4 flex gap-4 whitespace-nowrap"
            >
                {[
                    { id: 'overview', label: 'Section 1: Forgery in Lending' },
                    { id: 'legal-framework', label: 'Section 2: Legal Framework India' },
                    { id: 'ipc-vs-bsa', label: 'Section 3: IPC vs BSA 2023' },
                    { id: 'handwriting-experts', label: 'Section 4: Handwriting Forensics' },
                    { id: 'fsl-cbi-reports', label: 'Section 5: Forensic Lab Reports' },
                    { id: 'civil-vs-criminal', label: 'Section 6: Civil vs Criminal Path' },
                    { id: 'stop-emi-cibil', label: 'Section 7: Stopping EMIs & CIBIL' },
                    { id: 'defense-matrix', label: 'Section 8: Defense Matrix 2026' },
                    { id: 'digital-forgery-2026', label: 'Section 9: Digital Signature Forgery' },
                    { id: 'vicitims-rights-bns', label: 'Section 10: Victim Bill of Rights' },
                    { id: 'bank-negligence-damages', label: 'Section 11: Suing for Damages' },
                    { id: 'victim-psychology-2026', label: 'Section 12: Victim Psychology' },
                    { id: 'faqs', label: 'Frequently Asked Questions' }
                ].map((link) => (
                    <a
                        key={link.id}
                        href={`#${link.id}`}
                        className={`text-sm font-medium px-4 py-2 rounded-full transition-all flex-shrink-0 ${activeSection === link.id
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'text-gray-600 bg-gray-50 hover:bg-gray-100'
                            }`}
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
                            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2 border-b pb-2">
                                <TableOfContents className="w-5 h-5 text-blue-600" />
                                Guide Outline
                            </h3>
                            <nav className="space-y-1">
                                {[
                                    { id: 'overview', label: 'Section 1: Forgery in Lending' },
                                    { id: 'legal-framework', label: 'Section 2: Legal Framework India' },
                                    { id: 'ipc-vs-bsa', label: 'Section 3: IPC vs BSA 2023' },
                                    { id: 'handwriting-experts', label: 'Section 4: Handwriting Forensics' },
                                    { id: 'fsl-cbi-reports', label: 'Section 5: Forensic Lab Reports' },
                                    { id: 'civil-vs-criminal', label: 'Section 6: Civil vs Criminal Path' },
                                    { id: 'stop-emi-cibil', label: 'Section 7: Stopping EMIs & CIBIL' },
                                    { id: 'defense-matrix', label: 'Section 8: Defense Matrix 2026' },
                                    { id: 'digital-forgery-2026', label: 'Section 9: Digital Signature Forgery' },
                                    { id: 'vicitims-rights-bns', label: 'Section 10: Victim Bill of Rights' },
                                    { id: 'bank-negligence-damages', label: 'Section 11: Suing for Damages' },
                                    { id: 'victim-psychology-2026', label: 'Section 12: Victim Psychology' },
                                    { id: 'faqs', label: 'Frequently Asked Questions' }
                                ].map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className={`block py-2 px-3 rounded-lg text-sm transition-all duration-300 ${activeSection === item.id
                                            ? 'bg-blue-600 text-white font-bold'
                                            : 'text-slate-600 hover:bg-blue-50 hover:text-blue-600'
                                            }`}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        <div className="mt-8 p-8 bg-slate-950 rounded-3xl text-white shadow-xl shadow-slate-200">
                            <h4 className="text-xl font-bold mb-4 tracking-tight leading-tight italic">Forensic Case Audit</h4>
                            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                                Have your disputed signatures analyzed by our retired government forensic experts.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 text-blue-400 font-bold text-sm hover:text-blue-300 transition-colors group"
                            >
                                Initiate Audit
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </aside>

                    {/* Middle Column: Main Content Container */}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                            <h2 id="overview" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 1: The Rising Ghost of Forgery in Modern Lending</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the era of "Instant Loans" and "Digital Onboarding," the risk of forgery has evolved from physical ink duplication to sophisticated identity theft. A **Dispute Over Forged Loan Signatures** is no longer just about a person copying your handwriting on a paper agreement; it includes stylus-signatures on mobile apps, digital signatures created using stolen Aadhaar data, and photocopy-based fabrication.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 italic font-medium border-l-4 border-blue-200 pl-4 py-2">
                                "Forgery is the 'root' of credit fraud. If the signature is not yours, the entire loan contract is 'void ab initio'—it never legally existed in the first place."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                At CredSettle, we understand the trauma of discovering an EMI deduction for a loan you never applied for. Our legal team uses 2025-26 forensic technology and a deep understanding of the Bharatiya Nyaya Sanhita (BNS) to dismantle fraudulent claims by banks and NBFCs.
                            </p>

                            <h2 id="legal-framework" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 2: Legal Framework of Signature Disputes in India</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Indian legal system treats the forgery of a loan document as a 'Serious Offense' because a loan agreement qualifies as a **Valuable Security**.
                            </p>
                            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 mb-10">
                                <h4 className="text-lg font-bold mb-4 text-blue-900">Key Statutes Governing Forgery:</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4">
                                        <Gavel className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                                        <p className="text-sm text-gray-700"><strong className="text-slate-900">Criminal Liability:</strong> Sections covering forgery for cheating and fabrication of valuable securities.</p>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <Scale className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                                        <p className="text-sm text-gray-700"><strong className="text-slate-900">Civil Remedy:</strong> The Specific Relief Act allows for the 'Cancellation of Instruments' that are forged.</p>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                                        <p className="text-sm text-gray-700"><strong className="text-slate-900">Evidence Rule:</strong> Section 45 of the Evidence Act (now BSA 2023) permits Expert Opinion for handwriting comparison.</p>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                In 2025-26, the transition to the **Bharatiya Nyaya Sanhita (BNS)** has enhanced the investigative powers of the police in forgery cases. We leverage these new sections to ensure that not just the fraudster, but also any negligent bank official who facilitated the loan, is held accountable.
                            </p>

                            <h2 id="ipc-vs-bsa" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 3: IPC vs BSA 2023: Navigating the Legislative Shift</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Forgery cases filed before mid-2024 are governed by the Indian Penal Code (IPC), while new cases are under the BNS. Understanding this shift is vital for your defense.
                            </p>
                            <div className="overflow-x-auto mb-10">
                                <table className="w-full text-left text-sm border-collapse rounded-2xl overflow-hidden shadow-sm">
                                    <thead className="bg-slate-900 text-white uppercase tracking-wider text-[10px] font-bold">
                                        <tr>
                                            <th className="p-4">Offense Type</th>
                                            <th className="p-4">IPC Section</th>
                                            <th className="p-4">BNS Section (2025 Reference)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white text-gray-700 font-light">
                                        <tr className="border-b border-slate-100">
                                            <td className="p-4 font-medium italic underline decoration-blue-100 uppercase tracking-tighter">Simple Forgery</td>
                                            <td className="p-4">Section 465</td>
                                            <td className="p-4">Section 336</td>
                                        </tr>
                                        <tr className="border-b border-slate-100">
                                            <td className="p-4 font-medium italic underline decoration-blue-100 uppercase tracking-tighter">Valuable Security (Loan Agreement)</td>
                                            <td className="p-4">Section 467</td>
                                            <td className="p-4">Section 338</td>
                                        </tr>
                                        <tr className="border-b border-slate-100">
                                            <td className="p-4 font-medium italic underline decoration-blue-100 uppercase tracking-tighter">Forgery for Cheating</td>
                                            <td className="p-4">Section 468</td>
                                            <td className="p-4">Section 336(3)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium italic underline decoration-blue-100 uppercase tracking-tighter">Using Forged as Genuine</td>
                                            <td className="p-4">Section 471</td>
                                            <td className="p-4">Section 340</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-10 text-[15px]">
                                The most dangerous section is Section 338 of BNS (formerly IPC 467). Since it deals with valuable securities like loan agreements, the punishment can extend to life imprisonment. This high stakes legal reality is often used by our team to push banks into an immediate internal investigation and account freezing.
                            </p>

                            <h2 id="handwriting-experts" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 4: The Science of Handwriting Forensics</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A forgery dispute is won or lost on the report of the **Handwriting Expert**. Contrary to popular belief, forgery detection is a technical science, not a visual 'matching' game.
                            </p>
                            <h4 className="text-xl font-bold text-gray-900 mb-4 tracking-tight uppercase italic underline decoration-blue-200">What Experts Look For:</h4>
                            <div className="space-y-6 mb-10">
                                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm flex gap-4 transition-all hover:border-blue-200">
                                    <Fingerprint className="w-8 h-8 text-blue-600 shrink-0" />
                                    <div>
                                        <h5 className="font-bold text-slate-900 italic underline decoration-slate-100 underline-offset-4">Line Quality & Pen Pressure</h5>
                                        <p className="text-sm text-gray-600">A genuine signature has varying pressure. A forged one is often 'drawn' slowly, showing tremors or constant pressure.</p>
                                    </div>
                                </div>
                                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm flex gap-4 transition-all hover:border-blue-200">
                                    <Search className="w-8 h-8 text-blue-600 shrink-0" />
                                    <div>
                                        <h5 className="font-bold text-slate-900 italic underline decoration-slate-100 underline-offset-4">Rhythm & Slant</h5>
                                        <p className="text-sm text-gray-600">Every person has a biological rhythm in their writing. Forgers rarely replicate the specific angle (slant) and spacing of initial strokes.</p>
                                    </div>
                                </div>
                                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm flex gap-4 transition-all hover:border-blue-200">
                                    <FileText className="w-8 h-8 text-blue-600 shrink-0" />
                                    <div>
                                        <h5 className="font-bold text-slate-900 italic underline decoration-slate-100 underline-offset-4">Start and Finish Strokes</h5>
                                        <p className="text-sm text-gray-600">How you place the pen down and lift it up is unique. Experts use high-resolution microscopes to detect 'blunts' or 'hooks' that indicate forgery.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Our legal team collaborates with **GEQD (Government Examiner of Questioned Documents)** alumni to provide our clients with a "Pre-Trial Forensic Opinion." This report acts as technical gunpowder for your legal notices to the bank.
                            </p>

                            <h2 id="fsl-cbi-reports" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 5: Role of FSL and CBI Reports in Loan Fraud</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In multi-crore loan frauds or consortium loan disputes, the police often send the documents to the **Forensic Science Laboratory (FSL)** or the **CBI's Forensic Division**.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-200 mb-10">
                                <h4 className="text-lg font-bold text-blue-900 mb-4 tracking-tighter italic uppercase text-center">The Evidentiary Weight of FSL:</h4>
                                <ul className="list-disc pl-6 space-y-3 font-light text-gray-800 tracking-tight">
                                    <li><strong>Admissibility:</strong> FSL reports are admissible directly under Section 293 of CrPC (now BNSS 2023).</li>
                                    <li><strong>Ink Analysis:</strong> FSL can determine the age of the ink to prove if a 'Back-dated' agreement was signed recently.</li>
                                    <li><strong>Paper Forensics:</strong> Can detect if a piece of paper (with your genuine signature) was later used to print a loan agreement around it—a technique known as 'Cut-and-Paste' forgery.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-10 italic">
                                Scrutiny: While an FSL report is strong, it is not Gospel. Our specialized lawyers are trained to 'Cross-Examine' the FSL expert in court to find flaws in their methodology, ensuring that science serves justice.
                            </p>

                            <h2 id="civil-vs-criminal" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 6: Choosing Your Path: Civil vs Criminal Remedy</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Should you file a police complaint or a court case? In a forged loan dispute, the answer is usually **Both**.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                <div className="bg-slate-950 text-white p-8 rounded-[2rem] shadow-xl">
                                    <h4 className="font-black text-xl mb-4 italic uppercase tracking-tighter text-blue-400">The Criminal Route</h4>
                                    <p className="text-sm opacity-80 mb-6 font-light">Purpose: Punishment and arrest of the fraudsters (including bank staff).</p>
                                    <ul className="text-xs space-y-2 font-bold italic tracking-wider uppercase opacity-90">
                                        <li>- FIR under BNS 338/318</li>
                                        <li>- Custodial Interrogation</li>
                                        <li>- Psychological Pressure on Bank</li>
                                    </ul>
                                </div>
                                <div className="bg-white border-2 border-slate-950 p-8 rounded-[2rem] shadow-xl">
                                    <h4 className="font-black text-xl mb-4 italic uppercase tracking-tighter text-blue-900">The Civil Route</h4>
                                    <p className="text-sm text-gray-600 mb-6 font-light">Purpose: Obtaining a 'Declaration' that the loan is void and stopping recovery.</p>
                                    <ul className="text-xs space-y-2 font-bold italic tracking-wider uppercase text-slate-900 opacity-80">
                                        <li>- Suit for Declaration & Injunction</li>
                                        <li>- Stay on EMI Deduction</li>
                                        <li>- Legal Nullification of Contract</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-10 font-medium underline decoration-blue-100 underline-offset-8">
                                Pro-Tip: A civil court stay order is the only way to legally stop a bank from deducting EMIs while the forgery investigation is ongoing. Without a stay, the bank will continue to drain your account.
                            </p>

                            <h2 id="stop-emi-cibil" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 7: Stopping EMIs and CIBIL Rectification</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most immediate damage of a forged loan is financial. The bank will deduct EMIs and report 'Defaults' to CIBIL, destroying your future borrowability.
                            </p>
                            <h4 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">The CredSettle "Clean Sweep" Protocol:</h4>
                            <div className="space-y-6 mb-10">
                                <div className="relative pl-12 border-l-2 border-slate-100 ml-4 pb-4">
                                    <div className="absolute -left-[17px] top-0 w-8 h-8 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black">01</div>
                                    <h5 className="font-bold text-slate-900 uppercase tracking-tighter italic">Bank Internal Fraud Unit Notice</h5>
                                    <p className="text-sm text-gray-600">We send a technical notice to the bank's 'Fraud Monitoring Group' (FMG). By law, they must investigate and 'Mark' the account as disputed.</p>
                                </div>
                                <div className="relative pl-12 border-l-2 border-slate-100 ml-4 pb-4">
                                    <div className="absolute -left-[17px] top-0 w-8 h-8 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black">02</div>
                                    <h5 className="font-bold text-slate-900 uppercase tracking-tighter italic">CIBIL Dispute Upload</h5>
                                    <p className="text-sm text-gray-600">We raise a dispute with CIBIL using the FIR copy. In 2026, CIBIL holds the reporting from the bank 'In Abeyance' if a forgery FIR is provided.</p>
                                </div>
                                <div className="relative pl-12 border-l-2 border-slate-100 ml-4">
                                    <div className="absolute -left-[17px] top-0 w-8 h-8 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black">03</div>
                                    <h5 className="font-bold text-slate-900 uppercase tracking-tighter italic">Cyber Cell Engagement</h5>
                                    <p className="text-sm text-gray-600">If the loan was digital, we engage the Cyber Police to trace the IP address and device ID used, proving you were miles away from the transaction.</p>
                                </div>
                            </div>

                            <h2 id="defense-matrix" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 8: Forgery Defense Matrix: 2026 Strategy</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                As we enter 2026, banks are increasingly using 'Automated Recovery.' You need an equally automated legal defense.
                            </p>
                            <div className="p-8 bg-blue-50 rounded-[3rem] border border-blue-100 mb-10">
                                <h4 className="text-lg font-black text-blue-900 mb-4 italic uppercase text-center leading-none">The 2026 Legal Shield:</h4>
                                <ul className="space-y-4">
                                    <li className="flex gap-4">
                                        <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0" />
                                        <p className="text-sm text-blue-950 font-light leading-snug tracking-wide">Documentation of 'Alibi' - Air tickets, office logs, or Google Timeline data to show physical absence during signing.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0" />
                                        <p className="text-sm text-blue-950 font-light leading-snug tracking-wide">Analysis of 'Funds Flow' - Proving that the disbursed amount went to a mule account, not your verified account.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0" />
                                        <p className="text-sm text-blue-950 font-light leading-snug tracking-wide">Expert Counter-Evidence - Refuting the bank's internal 'Verification Report' which is often fabricated by the recovery team.</p>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-10 text-center font-black italic uppercase text-slate-900 tracking-widest decoration-blue-200 underline">
                                CredSettle: We don't just defend; we counter-sue for the restoration of your financial dignity.
                            </p>

                            <h2 id="digital-forgery-2026" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14 font-serif">Section 9: The Anatomy of Digital Signature Forgery in 2026</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                As paper-based loans diminish, fraudsters have shifted to **Digital Identity Theft**. In 2025-26, we are seeing a surge in 'Deepfake Signatures' where a borrower's video KYC is manipulated to sign digital contracts.
                            </p>
                            <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl mb-10 not-prose border-l-8 border-blue-500 font-mono">
                                <h4 className="text-xl font-bold mb-6 text-blue-400 uppercase tracking-[0.2em] italic underline decoration-white/20">Digital Forensic Indicators:</h4>
                                <div className="space-y-6 text-sm">
                                    <div className="border-b border-white/10 pb-4">
                                        <span className="text-blue-400 font-bold tracking-tighter uppercase">[IP Metadata Analysis]</span>
                                        <p className="mt-2 text-gray-400 font-light italic">Proving the signing device was not in the victim's geographic vicinity during the timestamped signature.</p>
                                    </div>
                                    <div className="border-b border-white/10 pb-4">
                                        <span className="text-blue-400 font-bold tracking-tighter uppercase">[Stylus Rhythm Analysis]</span>
                                        <p className="mt-2 text-gray-400 font-light italic">Analyzing the pressure points of a stylus signature on a mobile app to prove it doesn't match the victim's natural stroke pattern.</p>
                                    </div>
                                    <div>
                                        <span className="text-blue-400 font-bold tracking-tighter uppercase">[OTP Interception Proof]</span>
                                        <p className="mt-2 text-gray-400 font-light italic">Working with telecom providers to show that the Aadhaar OTP used for e-SIGN was intercepted by a cloned SIM.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-10 italic border-r-4 border-blue-200 pr-4 text-right">
                                "In the digital age, your biometric failure is their golden opportunity. We provide the technical shield to prove you never clicked 'Submit'."
                            </p>

                            <h2 id="vicitims-rights-bns" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14 font-serif">Section 10: Victim's Bill of Rights under Bharatiya Nyaya Sanhita (BNS)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The transition from IPC to BNS in 2024-25 has granted victims of financial forgery specific protections that were previously absent or vague.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 not-prose">
                                <div className="p-8 bg-blue-50 rounded-3xl border border-blue-200 shadow-sm relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-blue-200/30 rounded-bl-full group-hover:bg-blue-200/50 transition-colors"></div>
                                    <h4 className="text-xl font-black text-slate-950 mb-3 uppercase tracking-tighter italic">Right to Fair Probe</h4>
                                    <p className="text-xs text-slate-900/80 leading-relaxed">Under BNS, the police MUST involve a forensic expert for financial frauds exceeding specified limits, ensuring the bank's internal report isn't the final word.</p>
                                </div>
                                <div className="p-8 bg-blue-50 rounded-3xl border border-blue-200 shadow-sm relative overflow-hidden group text-right">
                                    <div className="absolute top-0 left-0 w-16 h-16 bg-blue-200/30 rounded-br-full group-hover:bg-blue-200/50 transition-colors"></div>
                                    <h4 className="text-xl font-black text-slate-950 mb-3 uppercase tracking-tighter italic">Protection from Arrest</h4>
                                    <p className="text-xs text-slate-900/80 leading-relaxed">Victims of 'Identity Theft' forgery are now protected from immediate arrest or coercive recovery while the forensic audit is 'Sub-judice' (under court review).</p>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-10 font-bold underline decoration-blue-100 underline-offset-8">
                                Pro Tip: Always keep a 'Physical Master Signature' on file with your bank's Nodal Officer. This acts as a primary baseline for any future forensic comparisons.
                            </p>

                            <h2 id="bank-negligence-damages" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14 font-serif">Section 11: Suing for Damages: When Banks Ignore Forgery</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If a bank manager ignores your forgery complaint and continues to deduct EMIs, they are legally liable for **Vicarious Negligence**.
                            </p>
                            <div className="bg-slate-50 p-10 rounded-[4rem] border border-slate-200 mb-10 not-prose">
                                <h4 className="text-2xl font-black text-slate-900 mb-6 italic uppercase tracking-tighter text-center leading-none">The Compensation Matrix 2026:</h4>
                                <ul className="space-y-6">
                                    <li className="flex items-center gap-4 border-b border-slate-200 pb-4">
                                        <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                                        <p className="text-sm text-gray-700"><strong className="text-slate-950">Loss of Credit Health:</strong> Damages can be sought for the high interest you had to pay on other loans due to a ruined CIBIL score.</p>
                                    </li>
                                    <li className="flex items-center gap-4 border-b border-slate-200 pb-4 text-right justify-end">
                                        <p className="text-sm text-gray-700"><strong className="text-slate-950">Mental Agony & Harassment:</strong> Consumer courts in 2025 are awarding ₹1L to ₹5L for illegal recovery visits during forgery disputes.</p>
                                        <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                                        <p className="text-sm text-gray-700"><strong className="text-slate-950">Refund of Principal:</strong> Every rupee deducted as EMI for a forged loan must be refunded with interest (usually 12-18% p.a.).</p>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-10 text-center font-black italic uppercase text-slate-900 tracking-widest decoration-blue-200 underline">
                                CredSettle: We don't just clear your debt; we make the fraudster pay for your peace of mind.
                            </p>

                            {/* FAQs Section */}
                            <h2 id="victim-psychology-2026" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14 font-serif">Section 12: The Psychological Impact and Victim Support</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Discovering a forgery is not just a financial blow; it is a violation of personal trust. Many victims feel a sense of 'Digital Vulnerability' that persists long after the loan is canceled.
                            </p>
                            <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl mb-10 not-prose border-4 border-blue-500/20">
                                <h4 className="text-2xl font-black mb-6 text-blue-400 italic uppercase tracking-widest text-center">Path to Recovery:</h4>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 border-b border-white/10 pb-4">
                                        <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1" />
                                        <p className="text-sm text-gray-400"><strong className="text-white">Emotional Resilience:</strong> We provide access to legal counselors who specialize in 'Financial Trauma' to help you manage the stress of recovery agent visits.</p>
                                    </div>
                                    <div className="flex items-start gap-4 border-b border-white/10 pb-4">
                                        <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1" />
                                        <p className="text-sm text-gray-400"><strong className="text-white">Digital Fortification:</strong> Post-resolution, we help you set up 'Biometric Locks' on your Aadhaar and 'Credit Freezes' on your bureaus to prevent future identity theft.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-10 text-[15px] italic">
                                Remember, you are a victim of a crime, not a defaulter. The bank may treat you like the latter, but the law (BNS 2023) recognizes you as the former. Our presence by your side ensures that the bank's attitude shifts from 'Recovery' to 'Rectification'.
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

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqData.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Let Experts Handle Your Debt</h3>
                                <p className="text-blue-800 mb-6">Discovering a forged signature on your loan documents is a legal crisis that requires immediate professional intervention. Our team of expert negotiators and forensic specialists is here to protect your financial identity and ensure the bank rectifies any fraudulent claims while preserving your credit score.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Book Your Free Consultation
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The information provided in this guide is for educational purposes and does not constitute financial or legal advice. Disputing loan forgery involves complex legal and forensic processes, and it is recommended to speak with a professional advisor before making any decisions.
                            </div>
                        </article>
                    </main>

                    {/* Right Column: Sticky Right Side Items */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Stop Forgery Fraud</h4>
                                <p className="text-sm text-gray-600 mb-6">Don't let fraudsters ruin your life. Get a professional forensic audit and legal stay today.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Initiate Legal Action
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✓ Certified Legal Protection</p>
                                    <p>✓ Proactive Forensic Audit</p>
                                    <p>✓ CIBIL Rectification Support</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Deep Dives</h4>
                                <nav className="space-y-3">
                                    <Link href="/legal-case-for-loan-sanction-without-consent" className="block text-sm text-blue-600 hover:underline">Loan Sanction Without Consent</Link>
                                    <Link href="/digital-cyber-loan-dispute-resolution" className="block text-sm text-blue-600 hover:underline">Cyber Loan Dispute Help</Link>
                                    <Link href="/best-lawyer-for-notice-for-loan-default" className="block text-sm text-blue-600 hover:underline">Recovery Notice Defense</Link>
                                    <Link href="/how-to-prove-financial-hardship-for-loan-settlement" className="block text-sm text-blue-600 hover:underline">Hardship Proof Strategy</Link>
                                    <Link href="/legal-help-for-loan-settlement-by-drt" className="block text-sm text-blue-600 hover:underline">DRT Case Defense</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>
                </div>
            </div>

            {/* Rich Results for Product/Review Snippet */}
            <Script
                id="product-review-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Forged Loan Signature Legal Defense",
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": "2500"
                        },
                        "description": "Expert legal representation for victims of loan forgery, identity theft, and signature fabrication in India.",
                        "sku": "CRED-FORGERY-101",
                        "brand": {
                            "@type": "Brand",
                            "name": "CredSettle"
                        }
                    })
                }}
            />
        </div>
    );
};

export default DisputeForgedSignaturesClient;
