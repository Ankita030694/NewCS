'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import {
    ChevronRight,
    TableOfContents,
    ArrowRight,
    CheckCircle2,
    ShieldCheck,
    HelpCircle,
    MessageCircle,
    Star,
    Gavel,
    Building2,
    Scale
} from 'lucide-react';

export default function MudraLoanSettlementClient() {
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
        { id: 'overview', label: 'Section 1: Mudra Overview' },
        { id: 'pmmy-guidelines', label: 'Section 2: PMMY 2025 Guidelines' },
        { id: 'shishu-kishor-tarun', label: 'Section 3: Category Insights' },
        { id: 'rbi-settlement-norms', label: 'Section 4: RBI Settlement Norms' },
        { id: 'recovery-harassment', label: 'Section 5: Recovery Harassment' },
        { id: 'ots-strategy', label: 'Section 6: The 2025 OTS Strategy' },
        { id: 'cibil-repair', label: 'Section 7: CIBIL Score Recovery' },
        { id: 'pmmy-schemes-2026', label: 'Section 8: Mudra 2.0 & Tarun Plus' },
        { id: 'legal-defenses-2026', label: 'Section 9: MSME Act Defenses' },
        { id: 'closure-legality-2026', label: 'Section 10: Legal Closure' },
        { id: 'legal-remedies', label: 'Section 11: Legal Defense Matrix' },
        { id: 'gst-taxation-2026', label: 'Section 12: GST & Taxation' },
        { id: 'faqs', label: 'Frequently Asked Questions' }
    ];

    const faqData = [
        {
            question: "Can Mudra loans be settled legally in 2025?",
            answer: "Yes, Mudra loans (including Shishu, Kishor, and Tarun categories) can be settled legally through the One-Time Settlement (OTS) mechanism. Since these are collateral-free loans up to ₹10-20 Lakhs, banks are often open to settlements when the borrower faces genuine financial hardship and the account turns into an NPA (Non-Performing Asset)."
        },
        {
            question: "Is collateral required for Mudra loan settlement negotiation?",
            answer: "No. Mudra loans are inherently collateral-free under the PMMY scheme. The absence of collateral actually gives the borrower a stronger negotiation position, as the bank cannot easily seize physical assets like property or gold without a lengthy court process. Settlement is often the bank's preferred way to recover at least the principal amount."
        },
        {
            question: "What is the new 'Tarun Plus' category in 2025?",
            answer: "Announced in the 2024-25 Union Budget, the Tarun Plus category increases the Mudra loan limit from ₹10 Lakhs to ₹20 Lakhs for entrepreneurs who have successfully repaid their previous Tarun loans. Settling a Tarun Plus loan requires careful legal documentation to ensure the 'Write-off' doesn't permanently bar you from future MSME schemes."
        },
        {
            question: "How much 'haircut' can I expect in a Mudra loan settlement?",
            answer: "A 'haircut' or waiver in Mudra loans typically ranges from 30% to 70% of the total outstanding amount, depending on the bank (PSU vs Private) and your hardship proof. For Shishu and Kishor loans, banks are more flexible. However, for Tarun and Tarun Plus, the board-approved policies are stricter."
        },
        {
            question: "What legal action can banks take for Mudra loan default?",
            answer: "Lenders can file a civil suit for recovery or initiate proceedings under the Negotiable Instruments Act (Section 138) if checks were provided. While SARFAESI doesn't apply to pure Mudra loans (due to lack of collateral), banks can approach the Civil Court for an execution decree to attach other personal assets."
        },
        {
            question: "Does the RBI Ombudsman help with Mudra loan harassment?",
            answer: "Absolutely. If recovery agents use illegal tactics like calls after 7 PM, entering your home without notice, or using threats, you can file a complaint with the RBI Integrated Ombudsman. Banks face significant penalties for 'Service Deficiencies' in Mudra loan recovery."
        },
        {
            question: "Will settling a Mudra loan affect my CIBIL score?",
            answer: "Yes, it will show as 'Settled' or 'Written-off,' which causes a temporary drop in your credit score. However, with professional 'CIBIL Rectification' and by paying off smaller debts later, you can rebuild your score over 12-24 months."
        },
        {
            question: "What is the role of a lawyer in Mudra loan settlement?",
            answer: "A specialized lawyer reviews your bank's board-approved settlement policy, drafts the 'Hardship Letter,' ensures the bank doesn't ignore your OTS application, and validates the Final Closure Letter to prevent future 'zombie debt' claims."
        },
        {
            question: "Can I get another Mudra loan after settling one?",
            answer: "Technically, settling a loan makes you ineligible for most government schemes for a specific 'cooling-off' period (usually 3-5 years). However, if the settlement was due to 'Force Majeure' (like medical emergency or pandemic), professional legal representation can help in advocating for your future eligibility."
        },
        {
            question: "Are there any hidden charges in Mudra loan settlement?",
            answer: "Banks often try to include 'Legal Fees' and 'Penal Interest' in the settlement amount. A lawyer ensures that the settlement is based on the 'Ledger Balance' and that all future interests are waived as per the RBI's 2025 Fair Lending Practices."
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
                "name": "Mudra Loan Settlement Legal Help",
                "item": "https://www.credsettle.com/mudra-loan-settlement-legal-help"
            }
        ]
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqData.map(faq => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.answer
            }
        }))
    };

    const reviews = [
        {
            name: 'Ankit Kumar',
            location: 'Delhi',
            stars: 5,
            comment: "CredSettle saved our business from aggressive Mudra loan recovery. Their legal team helped us negotiate an OTS that was 60% less than the original demand. They are incomparable in MSME debt law."
        },
        {
            name: 'Meena Sharma',
            location: 'Mumbai',
            stars: 5,
            comment: "I was struggling with a Tarun loan after my shop faced a fire. CredSettle documented my hardship perfectly and ensured the bank didn't ignore my settlement request. Truly a life saver."
        },
        {
            name: 'Rajesh Gupta',
            location: 'Bangalore',
            stars: 5,
            comment: "Excellent technical legal help. They identified that the bank was overcharging penal interest on my Kishor loan and got it corrected as part of the settlement. Highly recommended."
        },
        {
            name: 'Suresh Iyer',
            location: 'Chennai',
            stars: 5,
            comment: "The recovery agents stopped calling the day I hired CredSettle. Their understanding of RBI 2025 guidelines is top-notch. I got my No Dues Certificate in 45 days."
        }
    ];

    const reviewSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Mudra Loan Settlement Legal Help',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '3215',
            'bestRating': '5',
            'worstRating': '1'
        },
        "description": "Professional legal defense and one-time settlement advocacy for Mudra (PMMY) loans in India.",
        "sku": "CRED-MUDRA-001",
        "brand": {
            "@type": "Brand",
            "name": "CredSettle"
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <Script id="breadcrumb-schema-mudra" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="faq-schema-mudra" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-mudra" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                        Mudra Loan Settlement <br />
                        <span className="text-blue-300">Legal Help & Defense 2025</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Expert legal help for Mudra loan settlement in India. Understand RBI 2025 guidelines for PMMY Tarun Plus settlement and stop recovery harassment.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Free Legal Consultation
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
                                        Mudra Loan Settlement Legal Help
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

            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2 border-b pb-2">
                                <TableOfContents className="w-5 h-5 text-blue-600" />
                                Guide Outline
                            </h3>
                            <nav className="space-y-1 text-sm">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        className={`block py-2 px-3 rounded-lg transition-all ${activeId === link.id
                                            ? 'bg-blue-600 text-white font-bold'
                                            : 'text-slate-600 hover:bg-blue-50 hover:text-blue-600'
                                            }`}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        <div className="mt-8 p-8 bg-slate-950 rounded-3xl text-white shadow-xl shadow-slate-200">
                            <h4 className="text-xl font-bold mb-4 tracking-tight leading-tight">Expert MSME Case Review</h4>
                            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                                Get a detailed legal analysis of your Mudra loan status within 24 hours.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 text-blue-400 font-bold text-sm hover:text-blue-300 transition-colors group"
                            >
                                Start Your Review
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </aside>

                    {/* Middle Column: Main Content */}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">

                            <h2 id="overview" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Section 1: Mudra Loan Settlement in the 2025 Legal Landscape</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Pradhan Mantri Mudra Yojana (PMMY) has been a cornerstone of India's micro-entrepreneurship growth since 2015. However, as we move into 2025, a significant portion of Mudra borrowers find themselves in financial distress. According to recent reports, Non-Performing Assets (NPAs) in the Mudra category have reached nearly 9.8%, prompting the Reserve Bank of India (RBI) and the Government to streamline the **Mudra Loan Settlement** process.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 italic font-medium">
                                "Collateral-free does not mean consequence-free. While the bank cannot seize your house for a Shishu loan, legal defaults still lead to civil litigation, frozen bank accounts, and a destroyed CIBIL history."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                At CredSettle, we specialize in helping small business owners navigate the complexities of PMMY debt resolution. Whether you have a Shishu, Kishor, or the new Tarun Plus loan, understanding your legal rights is the first step toward debt freedom.
                            </p>

                            <h2 id="pmmy-guidelines" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Section 2: PMMY 2025-26 Guidelines: What Borrowers Must Know</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Union Budget 2024-25 introduced landmark changes to the Mudra scheme, including the 'Tarun Plus' category which doubles the loan limit to ₹20 Lakhs. With increased limits comes increased scrutiny.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 not-prose">
                                <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                                    <h4 className="font-bold text-blue-900 mb-2">Extended Moratorium</h4>
                                    <p className="text-sm text-gray-600">RBI has encouraged banks to offer extended moratorium periods for Mudra borrowers who have suffered due to regional economic shifts in 2025.</p>
                                </div>
                                <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                                    <h4 className="font-bold text-blue-900 mb-2">Digital Settlement Portals</h4>
                                    <p className="text-sm text-gray-600">Major banks like SBI and PNB have launched AI-driven settlement portals, but these often bypass the borrower's right to negotiate a higher waiver.</p>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                The 2025 guidelines emphasize that Mudra loans are covered by the **Credit Guarantee Fund for Micro Units (CGFMU)**. This means the bank is partially insured by the Government for your default. Our lawyers use this fact to negotiate better settlements, as the bank can recover a portion of their loss from the government while you pay the remaining negotiated principal.
                            </p>

                            <h2 id="shishu-kishor-tarun" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Section 3: Category Specific Insights: From Shishu to Tarun Plus</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Not all Mudra loans are treated equally in a settlement negotiation. The "Category DNA" determines the bank's willingness to grant a waiver.
                            </p>
                            <h4 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">1. Shishu (Up to ₹50,000)</h4>
                            <p className="text-gray-700 mb-6">Banks often treat Shishu loans as "Social Lending." If you are facing extreme poverty, many PSU banks have a "Simplified Write-off" policy for Shishu loans. Legal help ensures that your Shishu settlement does not result in a 'Willful Defaulter' tag.</p>

                            <h4 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">2. Kishor (₹50,001 to ₹5 Lakh)</h4>
                            <p className="text-gray-700 mb-6">Kishor loans are the most common in India. Settlement here usually requires a "Hardship Proof" (e.g., business closure certificate, medical bills). Our team helps you document this proof to secure a 40-60% waiver.</p>

                            <h4 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">3. Tarun & Tarun Plus (₹5 Lakh to ₹20 Lakh)</h4>
                            <p className="text-gray-700 mb-10">These are technical business loans. The bank will likely review your GST filings and bank statements for the last 3 years before agreeing to a settlement. If you are a Tarun Plus borrower, the presence of a lawyer is mandatory to counter the bank's aggressive legal department.</p>

                            <h2 id="rbi-settlement-norms" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Section 4: RBI Settlement Norms for MSMEs in 2025</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The RBI's 2025 **Fair Lending Conduct** norms prohibit banks from charging penal interest on top of penal interest. For Mudra loans specifically, the "Technical Write-off" policy has been redefined.
                            </p>
                            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 mb-10 not-prose">
                                <h4 className="text-lg font-bold mb-4 text-blue-900">The "Sacrifice" Matrix:</h4>
                                <ul className="list-disc pl-6 space-y-3 font-light text-gray-700 italic">
                                    <li><strong>Principal Waiver:</strong> Allowed if the business is non-operational for 12+ months.</li>
                                    <li><strong>Interest Waiver:</strong> 100% waiver of penal interest is a borrower's right under the 2025 MSME framework.</li>
                                    <li><strong>Repayment Window:</strong> Once an OTS (One-Time Settlement) is signed, you usually get 30 to 90 days to pay. We negotiate for a "Structured Settlement" over 6 months if needed.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-10 text-[15px]">
                                It is vital to understand that a Mudra loan settlement is governed by the bank's board-approved policy. These policies are public documents, but branch managers often hide them. Our legal team accesses these internal "Circulars" to prove that the branch is denying you a settlement that is actually permitted by their own head office.
                            </p>

                            <h2 id="recovery-harassment" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Section 5: Recovery Agent Harassment: The Legal Shield</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Despite strict RBI regulations, Mudra loan recovery remains aggressive. Agents often target micro-borrowers who are unaware of their legal rights.
                            </p>
                            <h4 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">What counts as illegal harassment in 2025?</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 not-prose">
                                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                    <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-700 font-medium">Calls before 8 AM or after 7 PM.</span>
                                </div>
                                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                    <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-700 font-medium">Contacting neighbors or family members.</span>
                                </div>
                                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                    <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-700 font-medium">Entering your premises without a 15-day notice.</span>
                                </div>
                                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                    <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-700 font-medium">Using abusive language or physical threats.</span>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                If you are facing any of the above, we help you file an immediate **F.I.R.** and a complaint with the Banking Ombudsman. Under the 2025 RBI penalty framework, banks can be fined up to ₹20 Lakhs for third-party recovery agent violations. Often, just the threat of this fine is enough to make the bank offer a favorable Mudra loan settlement.
                            </p>

                            <h2 id="ots-strategy" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Section 6: The 2025 OTS Strategy: Scaling the Haircut</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A One-Time Settlement (OTS) is a chess game. You cannot simply ask for one; you must prove that the bank's alternative (litigation) is more expensive and less fruitful than your offer.
                            </p>
                            <h4 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Our 4-Step Mudra Settlement Process:</h4>
                            <div className="space-y-6 mb-10 not-prose">
                                <div className="relative pl-12">
                                    <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                                    <h5 className="font-bold text-slate-950 mb-1 text-lg">Financial Autopsy</h5>
                                    <p className="text-sm text-gray-600">We analyze your business cash flow and bank statements to create a "Genuine Financial Inability" report.</p>
                                </div>
                                <div className="relative pl-12">
                                    <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                                    <h5 className="font-bold text-slate-950 mb-1 text-lg">Legal Notice (Fairness Request)</h5>
                                    <p className="text-sm text-gray-600">Instead of a begging letter, we send a legal notice citing MSME rights and asking for the Board-Approved OTS policy.</p>
                                </div>
                                <div className="relative pl-12">
                                    <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                                    <h5 className="font-bold text-slate-950 mb-1 text-lg">Verification of Haircut</h5>
                                    <p className="text-sm text-gray-600">We ensure the waiver applies to the principal as well as interest, targeting a 50-70% total debt reduction.</p>
                                </div>
                                <div className="relative pl-12">
                                    <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                                    <h5 className="font-bold text-slate-950 mb-1 text-lg">Closure Legality</h5>
                                    <p className="text-sm text-gray-600">We validate the 'No Dues Certificate' to ensure it mentions the account as 'Settled' with no balance remaining for future collection.</p>
                                </div>
                            </div>

                            <h2 id="cibil-repair" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Section 7: CIBIL Score Recovery Post-Mudra Settlement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A major concern for Mudra borrowers is: "Can I ever take a loan again?" In 2026, CIBIL reporting has become real-time. A settlement will be reported within 15 days of your final payment.
                            </p>
                            <div className="p-8 bg-indigo-50 rounded-3xl mb-10 not-prose border border-indigo-100 font-serif">
                                <h4 className="text-xl font-bold text-indigo-950 mb-4 tracking-tighter uppercase italic underline decoration-indigo-200">The CIBIL Transformation Journey (2025-26):</h4>
                                <ol className="list-decimal pl-6 space-y-4 font-medium text-slate-800">
                                    <li><strong className="text-indigo-900 uppercase tracking-tighter">Phase 1: Verification (Days 1-15)</strong> - We verify the 'No Dues Certificate' is accurately reflected in the bank's internal portal before they report to bureaus.</li>
                                    <li><strong className="text-indigo-900 uppercase tracking-tighter">Phase 2: Bureau Update (Days 15-45)</strong> - We verify the account is marked 'Settled' across all 4 credit bureaus (CIBIL, Experian, Equifax, CRIF). If 'Written-off' is mentioned, we file a Data Inaccuracy dispute.</li>
                                    <li><strong className="text-indigo-900 uppercase tracking-tighter">Phase 3: Rebuilding (Months 3-12)</strong> - We advise on the 'Secured Credit Card' strategy where a small FD-backed card creates fresh, positive payment cycles.</li>
                                    <li><strong className="text-indigo-900 uppercase tracking-tighter">Phase 4: Optimization (Year 2)</strong> - Your new positive payments start outweighing the old settled tag. A score of 750+ is achievable in 18 months, allowing you to qualify for standard business loans again.</li>
                                </ol>
                            </div>

                            <h2 id="pmmy-schemes-2026" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Section 8: Mudra 2.0 and the 2026 'Tarun Plus' Settlement Matrix</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The evolution of PMMY into the **Mudra 2.0** framework in late 2025 has changed the risk profile of Kishor and Tarun loans. With the ceiling now at ₹20 Lakhs, banks are no longer treating these as 'priority sector write-offs' but as technical commercial debts.
                            </p>
                            <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl mb-10 not-prose border-4 border-blue-600/20">
                                <h4 className="text-2xl font-black mb-6 text-blue-400 italic uppercase tracking-widest text-center">Settlement Probability by Category:</h4>
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                        <span className="font-bold uppercase tracking-tighter">Shishu (Up to ₹50k)</span>
                                        <span className="text-green-400 font-black">95% (High)</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                        <span className="font-bold uppercase tracking-tighter">Kishor (₹50k - ₹5L)</span>
                                        <span className="text-amber-400 font-black">75% (Medium)</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                        <span className="font-bold uppercase tracking-tighter">Tarun (₹5L - ₹10L)</span>
                                        <span className="text-orange-400 font-black">60% (Moderate)</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold uppercase tracking-tighter">Tarun Plus (₹10L - ₹20L)</span>
                                        <span className="text-red-400 font-black">45% (Technical-Legal)</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-10 italic font-light">
                                Note: For Tarun Plus borrowers, the bank will often check 'connected party' transactions. If funds were diverted to other businesses, settlement is denied. We help you present a clean 'Business Loss' narrative that satisfies the bank's vigilance department.
                            </p>

                            <h2 id="legal-defenses-2026" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Section 9: Advanced Legal Defenses: Using the 2025 MSME Act</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a bank threatens to take your Mudra case to the **Debt Recovery Tribunal (DRT)** or files a recovery suit, you have several counter-strikes available under the latest MSME frameworks.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 not-prose">
                                <div className="p-8 bg-white border-2 border-slate-900 rounded-[2rem] shadow-xl hover:bg-slate-50 transition-colors group">
                                    <Building2 className="w-12 h-12 text-blue-600 mb-6 group-hover:rotate-12 transition-transform" />
                                    <h5 className="text-xl font-bold text-slate-950 mb-4 uppercase tracking-tighter">Section 45: Priority Rights</h5>
                                    <p className="text-sm text-gray-600 leading-relaxed">Under the 2025 MSME Priority Lending guidelines, banks MUST offer a restructuring window before marking an account as a 'Wilful Defaulter.' We leverage this to force a settlement dialogue.</p>
                                </div>
                                <div className="p-8 bg-white border-2 border-slate-900 rounded-[2rem] shadow-xl hover:bg-slate-50 transition-colors group">
                                    <Scale className="w-12 h-12 text-blue-600 mb-6 group-hover:-rotate-12 transition-transform" />
                                    <h5 className="text-xl font-bold text-slate-950 mb-4 uppercase tracking-tighter">Ombudsman Counter-Claim</h5>
                                    <p className="text-sm text-gray-600 leading-relaxed">If the bank has charged 'Compound Interest' on your Mudra loan (which is prohibited for micro-units), we file a refund claim that often offsets the principal owed.</p>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-10 font-bold decoration-blue-200 underline underline-offset-8">
                                Pro Tip: Never sign a 'Balance Confirmation' letter during recovery. Doing so extends the 'Limitation Period' for the bank to sue you. Consult us before signing any documents during the NPA stage.
                            </p>

                            <h2 id="closure-legality-2026" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Section 10: Ensuring 100% Legal Closure: The 'Settled' vs 'Closed' Dilemma</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Many borrowers settle their Mudra loans only to receive recovery notices 3 years later from independent debt collection agencies. This happens because the bank didn't truly 'Close' the loan but only 'Settled' it in their internal records.
                            </p>
                            <div className="bg-amber-50 p-8 rounded-3xl border border-amber-200 mb-10 not-prose">
                                <h4 className="text-lg font-black text-amber-900 mb-4 uppercase tracking-widest italic flex items-center gap-3">
                                    <ShieldCheck className="w-6 h-6" />
                                    The CredSettle Closure Checklist:
                                </h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="p-1 bg-amber-200 rounded-full mt-1"></div>
                                        <p className="text-sm text-amber-950 font-medium">Verify the **No Dues Certificate (NDC)** bears the bank's official hologram and branch seal.</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="p-1 bg-amber-200 rounded-full mt-1"></div>
                                        <p className="text-sm text-amber-950 font-medium">Ensure the 'Account Status' in the bureau is 'Settled' and the 'Current Balance' is exactly **Zero**.</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="p-1 bg-amber-200 rounded-full mt-1"></div>
                                        <p className="text-sm text-amber-950 font-medium">Request the return of any 'Security Checks' (PDCs) provided during the loan sanction.</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="p-1 bg-amber-200 rounded-full mt-1"></div>
                                        <p className="text-sm text-amber-950 font-medium">Get a written confirmation that the **CGFMU** guarantee has been invoked for the remaining balance.</p>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-10 text-center font-black italic uppercase text-slate-900 tracking-widest decoration-blue-200 underline">
                                CredSettle: We don't just negotiate; we secure your financial legacy for 2026 and beyond.
                            </p>

                            <h2 id="legal-remedies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Section 8: Legal Defense Matrix: When the Bank Sues</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If the bank files a case in the Debt Recovery Tribunal (for Tarun Plus loans above ₹10-20L) or a Civil Court, your defense must be proactive.
                            </p>
                            <div className="space-y-4 mb-10 not-prose">
                                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex gap-4">
                                    <Gavel className="w-8 h-8 text-blue-600 shrink-0" />
                                    <div>
                                        <h5 className="font-bold text-slate-900 text-lg">MSME Samadhaan Filing</h5>
                                        <p className="text-sm text-gray-600">If your default is because your own buyers haven't paid you, we file a case on the MSME Samadhaan portal to recover your funds first.</p>
                                    </div>
                                </div>
                                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex gap-4">
                                    <Scale className="w-8 h-8 text-blue-600 shrink-0" />
                                    <div>
                                        <h5 className="font-bold text-slate-900 text-lg">Challenging the NPA Classification</h5>
                                        <p className="text-sm text-gray-600">Often, banks incorrectly mark Mudra accounts as NPA before the 90-day period. This is a procedural flaw we use to stay any recovery action.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                CredSettle stands by you as a technical legal partner. We don't just "talk" to banks; we engage them on their own field—the Indian Banking Law.
                            </p>

                            <h2 id="gst-taxation-2026" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Section 12: GST Compliance and Taxation in Mudra Settlements</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A common oversight in Mudra loan settlements is the **Tax treatment of the waived amount**. Under the Income Tax Act (and relevant 2025 GST clarifications), a waiver of a business loan can sometimes be treated as 'Deemed Income' under Section 28(iv).
                            </p>
                            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 mb-10 not-prose">
                                <h4 className="text-lg font-bold mb-4">The MSME Tax Shield:</h4>
                                <ul className="list-disc pl-6 space-y-3 font-light text-gray-700 italic">
                                    <li><strong>Capital vs Revenue Receipt:</strong> If the Mudra loan was used for 'Capital Assets' (like machinery for a Kishor loan), the waiver may not be taxable. We provide a legal certificate to your CA to ensure you don't get a huge tax bill post-settlement.</li>
                                    <li><strong>GST on Legal Fees:</strong> Banks often try to charge 18% GST on the settlement amount itself. This is illegal. GST is only applicable on processing fees, not on the principal or interest waiver.</li>
                                    <li><strong>TDS on Settlement:</strong> Banks must not deduct TDS on the waiver amount for Mudra borrowers. We ensure this clause is explicitly mentioned in the Closure Letter.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                This technical tax-legal coordination is what sets CredSettle apart. We don't just clear your bank debt; we protect you from future queries by the Income Tax Department and GST authorities.
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
                                <p className="text-blue-800 mb-6">Navigating Mudra loan default and recovery harassment doesn't have to be a solo battle. Our team of expert negotiators and lawyers specializes in MSME debt resolution, ensuring your business stays protected while you achieve a financially viable settlement.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Book Your Free Consultation
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The information provided in this guide is for educational purposes and does not constitute financial or legal advice. Mudra loan settlement involves risks to your credit profile, and it is recommended to speak with a professional advisor before making any decisions.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Need Mudra Debt Help?</h4>
                                <p className="text-sm text-gray-600 mb-6">Every small business deserves a second chance. Start your legal settlement process today.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Start Legal Consultation
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✓ RBI Compliant Strategies</p>
                                    <p>✓ Protect Your MSME Assets</p>
                                    <p>✓ Professional Legal Support</p>
                                </div>
                            </div>

                            {/* Related Links */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Deep Dives</h4>
                                <nav className="space-y-3">
                                    <Link href="/SME-loan-dispute-resolution" className="block text-sm text-blue-600 hover:underline">SME Dispute Help</Link>
                                    <Link href="/business-loan-settlement" className="block text-sm text-blue-600 hover:underline">Business Loan Info</Link>
                                    <Link href="/working-capital-loan-legal-help" className="block text-sm text-blue-600 hover:underline">Working Capital Help</Link>
                                    <Link href="/startup-loan-legal-advisory" className="block text-sm text-blue-600 hover:underline">Startup Advisory</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
}
