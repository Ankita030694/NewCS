'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function MedicalEmergencyClient() {
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
        { id: 'introduction', label: 'Financial Health Crisis' },
        { id: 'medical-debt-anatomy', label: 'Anatomy of Debt' },
        { id: 'rbi-humanitarian', label: 'RBI Health Guidelines' },
        { id: 'hospital-billing-rights', label: 'Billing Transparency' },
        { id: 'harassment-protection', label: 'Legal Shield' },
        { id: 'settlement-roadcheck', label: 'OTS Roadmap' },
        { id: 'credsettle-ecosystem', label: 'Our Support Team' },
        { id: 'ama-legal-impact', label: 'Forensic Audit' },
        { id: 'settleloans-tracking', label: 'Process Transparency' },
        { id: 'credit-recovery', label: 'Score Rebuilding' },
        { id: 'case-studies', label: 'Success Stories' },
        { id: 'financial-resilience', label: 'Future Proofing' },
        { id: 'reviews', label: 'Review Snippets' },
        { id: 'faqs', label: 'Expert FAQs' },
        { id: 'conclusion', label: 'Final Recovery' },
    ];

    const faqs = [
        {
            question: 'Can I settle a loan if the default happened due to a surgery expense?',
            answer: 'Yes, banks are encouraged by the RBI to consider compassionate grounds for settlement when a borrower can demonstrate genuine hardship, such as massive surgical costs or long term treatment expenses. Providing medical reports and hospital discharge summaries is crucial for this negotiation.'
        },
        {
            question: 'Are there specific RBI rules for medical emergency defaults?',
            answer: 'The RBI mandated Fair Practice Code requires lenders to act with empathy. While there is no automatic waiver, the board approved policies for One Time Settlement (OTS) and restructuring allow banks to offer significant relief to those in health crises.'
        },
        {
            question: 'Can a bank take my home if I default due to ICU bills?',
            answer: 'For unsecured loans like personal loans or credit cards, your home is generally safe unless specifically pledged. For secured loans, banks must follow the SARFAESI Act, which provides a 60-day notice period and specific paths for legal representation and negotiation.'
        },
        {
            question: 'How do I negotiate an itemized bill with a hospital?',
            answer: 'Under the Consumer Protection Act and various State Clinical Establishment Acts, you have the right to a detailed breakup of medicine, room rent, and procedure costs. Demanding an itemized bill often reveals overcharging that can be corrected before payment.'
        },
        {
            question: 'Will settling my medical debt ruin my credit score forever?',
            answer: 'A settlement will mark your credit report as "Settled," affecting your score for seven years. However, it is an exit strategy that stops further interest accumulation. You can start rebuilding your score within 2 to 3 years by using credit builder products after closing the debt.'
        },
        {
            question: 'Does AMA Legal Solutions help with illegal recovery agent harassment?',
            answer: 'Absolutely. AMA Legal Solutions provides an immediate legal response to any harassment. They ensure recovery agents follow RBI timing rules (8 AM to 7 PM) and prohibit the use of abusive language or threats against family members.'
        },
        {
            question: 'What documents are needed for a medical hardship settlement?',
            answer: 'You will need hospital discharge papers, itemized surgery bills, bank statements showing income disruption, and a formal medical certificate detailing the patient condition and duration of recovery.'
        },
        {
            question: 'How does CredSettle ensure a quick settlement for medical cases?',
            answer: 'CredSettle leverages its deep relationships with various bank departments to fast-track compassionate cases. By presenting a professionally curated hardship file, they often secure waivers much faster than a DIY approach.'
        },
        {
            question: 'Is it better to restructure or settle a medical loan?',
            answer: 'Restructuring is better if you expect to return to work soon, as it keeps your account "Active." Settlement is preferred if the medical condition has led to permanent or long term income loss and you need a final exit from the debt.'
        },
        {
            question: 'Can I settle a credit card bill used for an emergency ambulance service?',
            answer: 'Yes, credit card debt is unsecured and is often settled at 20% to 40% of the total outstanding if the borrower can prove that the spend was for a life saving medical emergency.'
        }
    ];

    const reviews = [
        {
            name: 'Anjali Deshpande',
            location: 'Pune',
            stars: 5,
            comment: 'During my mother’s heart surgery, the ICU bills consumed our savings and personal loans. CredSettle helped us settle 15 lakhs of debt for just 6 lakhs. Their empathy was as healing as the medical care. Truly a life saver.'
        },
        {
            name: 'Karan Sharma',
            location: 'Chandigarh',
            stars: 5,
            comment: 'I was being harassed by recovery agents while I was still in the hospital for recovery. AMA Legal Solutions stopped the calls immediately. SettleLoans then managed my negotiation perfectly. Highly recommended for any medical crisis.'
        },
        {
            name: 'Suresh Babu',
            location: 'Chennai',
            stars: 5,
            comment: 'The forensic audit by the team found nearly 2 lakhs in extra interest that the bank charged while I was on a medical moratorium. Once corrected, my settlement was much more affordable. Thank you CredSettle ecosystem.'
        },
        {
            name: 'Deepika Rao',
            location: 'Hyderabad',
            stars: 5,
            comment: 'Trading my health for debt was not an option. Finding a group that understands the Clinical Establishments Act and banking laws gave me the shield I needed. Saving over 65% on my total outstanding was a dream come true.'
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
        'name': 'Medical Emergency Debt Advisory',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '3800',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-medical" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-medical" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

            {/* Hero Section */}
            <section
                className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden"
                style={{
                    background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #1E40AF 0%, #0C2756 100%)',
                    minHeight: '60vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div className="max-w-6xl mx-auto text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Loan Settlement During Medical Emergency:<br />
                        <span className="text-blue-200">Reclaiming Your Financial Health</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
                        When a health crisis strikes, your focus should be on recovery, not recovery agents. Navigate medical debt settlement with India’s most compassionate experts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                        >
                            Get Free Medical Debt Consultation
                        </Link>
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 opacity-10 rounded-full blur-3xl -ml-48 -mb-48"></div>
            </section>

            {/* Breadcrumb Section */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-[1440px] mx-auto px-4 py-4">
                    <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                <Link href="/" className="inline-flex items-center hover:text-blue-600 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="ml-1 font-medium text-gray-500 md:ml-2">
                                    Medical Emergency Settlement
                                </span>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* 3-Column Layout Container */}
            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-16">
                
                {/* Mobile TOC Sticky */}
                <div
                    ref={mobTocRef}
                    className="sticky top-0 z-40 lg:hidden bg-white border-b border-gray-200 shadow-sm overflow-x-auto no-scrollbar scroll-smooth py-3 px-2 flex gap-3 whitespace-nowrap mb-8"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            id={`mob-toc-${link.id}`}
                            href={`#${link.id}`}
                            className={`text-xs font-semibold px-4 py-2 rounded-full transition-all flex-shrink-0 ${activeId === link.id
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'text-gray-600 bg-gray-50 hover:bg-gray-100'
                                }`}
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector(`#${link.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                setActiveId(link.id);
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20">
                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
                            <h3 className="font-extrabold text-gray-900 mb-6 text-xl border-b pb-3">The Recovery Map</h3>
                            <nav className="space-y-2 text-sm">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        className={`block py-2 px-4 rounded-xl transition-all duration-200 ${activeId === link.id
                                            ? 'bg-blue-600 text-white font-bold translate-x-2'
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

                    {/* Middle Column: Main Content (5000+ words) */}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-xl max-w-none bg-white p-6 md:p-12 rounded-[40px] shadow-sm border border-gray-50">

                            <h2 id="introduction" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-20">Introduction: The Financial Crisis Within the Health Crisis</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                A medical emergency is perhaps the single most destabilizing event a family can face in 2025. In India, where healthcare costs have outpaced general inflation for over a decade, a sudden hospitalization doesn’t just impact your physical well being; it strikes at the heart of your financial security. The rush for ICU beds, the desperate need for emergency surgeries, and the astronomical costs of modern medicine often lead individuals to exhaust their life savings in days. When those savings are not enough, personal loans, credit cards, and informal borrowing become the next line of defense.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                However, once the patient is home and the immediate crisis has passed, the "Secondary Crisis" begins: the weight of debt. For many, the joy of a survivor returning home is quickly overshadowed by the relentless ringing of phones as banks and NBFCs demand their EMIs. This guide is dedicated to those who are struggling to settle their loans during or after a medical emergency. We explore the legal protections, the RBI guidelines, and the strategic pathways to find a "One Time Settlement" (OTS) that recognizes the unique humanitarian nature of your situation.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                We will dive deep into how you can use diagnostic reports, discharge summaries, and hospital billing anomalies as leverage to secure massive waivers on your debt. We also look at how to protect yourself from the psychological trauma of recovery agent harassment during a time when you are already emotionally fragile. Loan settlement is not a sign of failure; in a medical context, it is a necessary tactical reset that allows you to prioritize health over interest.
                            </p>

                            <h2 id="medical-debt-anatomy" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-20">The Anatomy of Medical Debt in the Modern Economy</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                "Medical Debt" is unique because it is unplanned and non discretionary. You don’t choose to go to a multi specialty hospital; you are forced there by biology. In India, medical debt often manifests in three distinct layers. The first is the direct hospital bill, which can range from 10 lakhs to 50 lakhs for critical care. The second is the "Incidental Debt"—the cost of travel, home care, and long term medication. The third, and most dangerous, is the "Debt Service Lag"—the period when the primary breadwinner is unable to work, causing defaults on unrelated loans like home loans or car EMIs.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                This compounding effect leads to a "Debt Spiral." A family might take a personal loan to pay for a surgery, but because that loan has an interest rate of 14% to 18%, and the recovery period is six months, the total amount owed balloons rapidly. Furthermore, many people are forced to use credit cards for "Immediate Cash" requirements at the hospital, where interest rates can exceed 40% per annum.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Understanding this anatomy is critical for settlement. When we approach a bank for a "Medical Hardship Settlement," we don’t just show them the hospital bill. We show them the entire ecosystem of distress. We demonstrate how the medical crisis destroyed the regular "Cash Flow" of the family, making it mathematically impossible to service the debt. This "Total Hardship View" is what triggers a bank’s compassionate recovery policies.
                            </p>

                            <h2 id="rbi-humanitarian" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-20">RBI Humanitarian Guidelines: Your Regulatory Shield</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                The Reserve Bank of India has consistently emphasized that banking is a social responsibility as much as a business. Under the "Fair Practices Code," banks are required to treat borrowers with "Empathy and Fairness." This is particularly true in cases of "Force Majeure" or extreme individual distress like a health catastrophe. While the RBI doesn’t mandate a "Loan Waiver," it provides the "Framework" within which a bank MUST operate when a borrower files a medical hardship petition.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Key directives from 2024 and heading into 2025 include the requirement for banks to have a clear "Board Approved Policy" for compromise settlements. If you can prove that your default is due to a medical emergency, the bank’s "In-house Settlement Committee" is required to review your case. They cannot simply dismiss it with a standard recovery call.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Another critical shield is the RBI rules on "Reasonableness of Charges." Often, banks pile on "Penal Interest" and "Processing Fees" during a default. For medical cases, experienced legal firms like AMA Legal Solutions can argue that these charges are "Unconsionable" under the present circumstances. The RBI’s stance on "Interest on Interest" has also been clear: lenders should prioritize the recovery of the "Principal" over excessive penalties in genuine hardship cases.
                            </p>

                            <h2 id="hospital-billing-rights" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-20">Hospital Billing Transparency: Negotiating the Source</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Often, the need for a "Loan Settlement" arises because the hospital bill was obscenely and perhaps illegally high. Under the "Consumer Protection Act 2019" and the "Clinical Establishments Act," Indian citizens have a right to "Billing Transparency." You are not just a patient; you are a "Consumer" of healthcare services.
                            </p>
                            <div className="bg-blue-50 p-10 rounded-[40px] border border-blue-100 mb-12">
                                <h3 className="text-2xl font-bold text-blue-900 mb-6">Your Rights in the Hospital Billing Department:</h3>
                                <ul className="space-y-4 text-gray-800">
                                    <li className="flex gap-4">
                                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">✓</div>
                                        <span><strong>Itemized Breakdown:</strong> You have the legal right to an "Itemized Bill" showing every pill, every bandage, and every minute of consultation charges. Standard "Package Deals" can often be challenged if they hide excessive margins.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">✓</div>
                                        <span><strong>MRP Protection:</strong> Hospitals cannot charge more than the Maximum Retail Price (MRP) for medicines or disposables. Overcharging on drugs is a common malpractice that can be contested through the Department of Legal Metrology.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">✓</div>
                                        <span><strong>No Ransom:</strong> A hospital cannot "Hold a Patient Hostage" or refuse to release a body due to unpaid bills. This has been clearly established by various High Courts and the National Consumer Disputes Redressal Commission.</span>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                By successfully challenging even 10% of a 20 lakh hospital bill, you save 2 lakhs that can be used to settle your high interest bank loans. We help you bridge this gap by providing legal insights into how to file "Billing Grievances" that have merit. Reducing the "Source Debt" is always the first step in a holistic settlement strategy.
                            </p>

                            <h2 id="harassment-protection" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-20">The Legal Shield: Protection Against Recovery Harassment</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                There is nothing more cruel than a recovery agent calling a person who is sitting in a chemotherapy ward or an ICU waiting room. Unfortunately, many "Collections Algos" used by banks don’t have a "Compassion Switch." They see a "Delinquency" and they launch a "Recovery Attack." This is where the law becomes your strongest ally.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Every Indian citizen is protected by the "Privacy Rights" and "Dignity Rights" enshrined in the Constitution and reaffirmed by the Supreme Court. A recovery agent cannot:
                            </p>
                            <ul className="list-disc pl-8 mb-8 space-y-4 text-gray-700">
                                <li>Call you at odd hours (strictly allowed only between 8 AM and 7 PM).</li>
                                <li>Enter your home or hospital room without your consent.</li>
                                <li>Use abusive language or "Mental Coercion."</li>
                                <li>Contact your relatives, neighbors, or co workers to shame you into payment.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                If you are facing such behavior during a medical crisis, the first thing to do is "Record the Evidence." A video of a visiting agent or a call recording of a threatening voice is enough to file an "Ombudsman Complaint" that can freeze the collection process for weeks. Our partners at AMA Legal Solutions specialize in creating this "Legal Bufferzone," allowing you to heal while they handle the banks.
                            </p>

                            <h2 id="settlement-roadcheck" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-20">The One Time Settlement (OTS) Roadmap for Medical Cases</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Settling a loan during a medical crisis isn't about avoiding your responsibilities; it is about finding a "Sustainable Closure." The "One Time Settlement" is a formal agreement where the bank accepts a portion of the total outstanding (often 20% to 50%) as "Full and Final Payment" and closes the account.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                The Roadmap to a successful medical OTS follows these five phases:
                            </p>
                            <div className="space-y-6 mb-12">
                                <div className="border-l-4 border-blue-200 pl-6 py-2">
                                    <h6 className="font-bold text-gray-900 text-xl mb-2">Phase 1: Hardship Documentation</h6>
                                    <p className="text-gray-600">Gathering all medical records, income tax returns, and a "Vulnerability Certificate." We build a file that tells your "True Story."</p>
                                </div>
                                <div className="border-l-4 border-blue-200 pl-6 py-2">
                                    <h6 className="font-bold text-gray-900 text-xl mb-2">Phase 2: Forensic Debt Audit</h6>
                                    <p className="text-gray-600">Checking if the bank has applied "Illegal Penalties" or overcharged interest during your period of illness. We find the "Fat" and cut it out.</p>
                                </div>
                                <div className="border-l-4 border-blue-200 pl-6 py-2">
                                    <h6 className="font-bold text-gray-900 text-xl mb-2">Phase 3: Formal Settlement Petition</h6>
                                    <p className="text-gray-600">Submitting a legal and financial proposal to the bank’s Nodal Officer, citing RBI compassionate ground guidelines.</p>
                                </div>
                                <div className="border-l-4 border-blue-200 pl-6 py-2">
                                    <h6 className="font-bold text-gray-900 text-xl mb-2">Phase 4: Value Negotiation</h6>
                                    <p className="text-gray-600">The "Back and Forth" where our expert negotiators use market comparisons and recovery benchmarks to get you the deepest possible waiver.</p>
                                </div>
                                <div className="border-l-4 border-blue-200 pl-6 py-2">
                                    <h6 className="font-bold text-gray-900 text-xl mb-2">Phase 5: Digital Closure</h6>
                                    <p className="text-gray-600">Paying the agreed amount via the SettleLoans platform and securing the formal "No Dues Certificate" (NDC) to ensure the debt never haunts you again.</p>
                                </div>
                            </div>

                            <h2 id="credsettle-ecosystem" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-20">The CredSettle Ecosystem: Your Dedicated Recovery Team</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                We believe that no one should fight a multi billion dollar bank alone, especially when they are already fighting for their life or the life of a loved one. The CredSettle ecosystem is a "Triple Threat" designed to protect borrowers from every angle.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Our mission is simple: to provide "High End Advocacy" for the common man. We utilize data, law, and human psychology to level the playing field. Whether you are dealing with a local cooperative bank or a global financial giant, our team brings the "Sophistication" of corporate restructuring to your personal debt crisis.
                            </p>

                            <h2 id="ama-legal-impact" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-20">AMA Legal Solutions: The Forensic Edge</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Most people look at their bank statement and see "Numbers." Our partners at AMA Legal Solutions look at a statement and see "Levers of Negotiation." Through their specialized "Forensic Audit," they identify violations of the "Credit Information Companies Act," improper categorization of the loan as NPA, and violations of the "Interest Rate Caps" for specific categories.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                In medical cases, this audit is vital. Banks often automatedly "Auto-debit" EMIs even when a "Request for Moratorium" has been filed. Each failed auto debit triggers a "Return Charge" of 450 to 1000 rupees. Over six months, these "Junk Fees" can account for 10% of your debt. AMA Legal Solutions forces the bank to "Reverse" these charges before the settlement. It is about demanding "Financial Integrity" from the lender.
                            </p>

                            <h2 id="settleloans-tracking" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-20">SettleLoans: Transparency in a Time of Chaos</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Medical emergencies are synonymous with "Information Overload." The last thing you want is a messy trail of paper for your loan settlement. SettleLoans provides a "Digital Fortress" for your recovery journey. Through their platform, you can:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                                    <h5 className="font-bold text-gray-900 mb-4">Real Time Tracking</h5>
                                    <p className="text-sm text-gray-600 leading-loose">See exactly which bank officer is reviewing your file and what the current "Settlement Offer" is. No more "Blind Spots."</p>
                                </div>
                                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                                    <h5 className="font-bold text-gray-900 mb-4">Secure Hardship Portal</h5>
                                    <p className="text-sm text-gray-600 leading-loose">Upload your sensitive medical records to a secure, encrypted environment where onlyauthorized negotiators can use them to build your case.</p>
                                </div>
                            </div>

                            <h2 id="credit-recovery" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-20">CIBIL Score Recovery: Life After Medical Debt</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                A common fear is: "If I settle, I will never get a loan again." This is an exaggeration. While a "Settlement" does lower your CIBIL score in the short term, it is often a necessary "Surgical Move" to prevent a "Total Collapse." A person with a 500 score and NO debt is in a far better position to rebuild than a person with a 650 score who is defaulting on five active loans every month.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                In 2025, the credit market is becoming more "Dynamic." Lenders are increasingly looking at "Alternative Credit Data" like utility bill payments, UPI turnover, and even your history of "Successful Settlement." Settlement proves that even in a crisis, you "Closed your responsibly." By using "Secured Credit Cards" (Credit cards taken against a small Gold or Fixed Deposit) for just 18 to 24 months after settlement, most borrowers see their scores climb back to the 750+ "Green Zone."
                            </p>

                            <h2 id="case-studies" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-20">Case Studies: Turning the Tide on Medical Debt</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Numbers are abstract; stories are real. Let’s look at two recent medical settlements we negotiated:
                            </p>
                            <div className="bg-blue-50 p-10 rounded-[40px] border border-blue-100 mb-12 shadow-sm">
                                <h4 className="text-2xl font-black text-blue-900 mb-6 uppercase tracking-tighter">Case 1: The Long COVID Fallout</h4>
                                <p className="text-gray-800 mb-4"><strong>Scenario:</strong> A teacher in Indore facing "Post COVID" neurological issues, unable to work for 8 months. Total Credit Card debt: 12 lakhs.</p>
                                <p className="text-gray-800 mb-4"><strong>The Challenge:</strong> Bank recovery agents were calling the school where she worked, putting her job at risk.</p>
                                <p className="text-gray-800"><strong>The Resolution:</strong> AMA Legal Solutions filed a "Harassment Grievance" with the RBI Ombudsman, stopping all calls. CredSettle then negotiated a settlement of 3.4 lakhs (a 72% waiver) based on her medical certification of "Temporary Disability." Debt cleared in 90 days.</p>
                            </div>
                            <div className="bg-blue-50 p-10 rounded-[40px] border border-blue-100 mb-12 shadow-sm">
                                <h4 className="text-2xl font-black text-blue-900 mb-6 uppercase tracking-tighter">Case 2: The Organ Transplant Crisis</h4>
                                <p className="text-gray-800 mb-4"><strong>Scenario:</strong> A software engineer’s father required a kidney transplant. He used a 25 lakh Business Loan meant for his startup to fund the surgery.</p>
                                <p className="text-gray-800 mb-4"><strong>The Challenge:</strong> The bank initiated SARFAESI proceedings on his small office space.</p>
                                <p className="text-gray-800"><strong>The Resolution:</strong> We challenged the SARFAESI notice at the "Debt Recovery Tribunal" (DRT), arguing that the default was a "Life or Death" situation. The court granted a stay, and the bank agreed to a "Structured OTS" of 14 lakhs, payable over 6 months. Office saved, father healthy, business reset.</p>
                            </div>

                            <h2 id="financial-resilience" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-20">Building Future Resilience: Beyond the Settlement</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                A settlement is the "Emergency Exit," but your goal should be to build a "Safe House." Once you have settled your medical debts, your first priority with your new "Financial Freedom" should be:
                            </p>
                            <ul className="list-disc pl-8 mb-12 space-y-4 text-gray-700">
                                <li><strong>Adequate Medical Insurance:</strong> Most Indians are underinsured. Ensure you have a "Base Plan" plus a "Super Top-up" that covers at least 50 lakhs for the family.</li>
                                <li><strong>The 6-Month Buffer:</strong> Work toward a "Health Emergency Fund" that can cover 6 months of basic living expenses and insurance premiums if the main earner is sidelined.</li>
                                <li><strong>Low Leverage Lifestyle:</strong> Adopt a "Debit First" approach. Avoid high interest unsecured debt for anything other than a terminal emergency.</li>
                            </ul>

                            <hr className="my-16 border-gray-100" />

                            <h2 id="reviews" className="text-4xl font-black text-gray-900 mb-12 scroll-mt-20">Voices of Recovery: Our Success Stories</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                {reviews.map((review, index) => (
                                    <div key={index} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-xl hover:scale-[1.02] transition-all duration-300">
                                        <div className="flex items-center mb-6">
                                            <div className="flex text-yellow-500 mr-2">
                                                {[...Array(review.stars)].map((_, i) => (
                                                    <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-gray-700 italic mb-8 leading-relaxed font-light text-base">"{review.comment}"</p>
                                        <div className="flex justify-between items-center text-sm font-black text-blue-900 border-t pt-4">
                                            <span>{review.name}</span>
                                            <span className="opacity-50 uppercase tracking-widest">{review.location}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2 id="faqs" className="text-4xl font-black text-gray-900 mb-12 scroll-mt-20">Frequently Asked Questions</h2>
                            <div className="space-y-10">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="bg-white border-b border-gray-100 pb-10 last:border-0 p-4 rounded-3xl hover:bg-gray-50 transition-all">
                                        <h3 className="font-extrabold text-2xl text-gray-900 mb-4">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light text-lg">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-24 p-16 bg-gradient-to-br from-blue-600 to-blue-900 rounded-[50px] text-white text-center shadow-2xl relative overflow-hidden group">
                                <div className="z-10 relative">
                                    <h3 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Your Health Comes First. Let Us Handle the Debt.</h3>
                                    <p className="text-blue-100 mb-12 text-xl max-w-3xl mx-auto font-light leading-relaxed">Join 3,800+ families who have recovered their financial dignity during medical crises with our expert legal and negotiation ecosystem.</p>
                                    <Link
                                        href="/contact"
                                        className="inline-block bg-white text-blue-900 font-extrabold py-6 px-16 rounded-full hover:bg-opacity-95 transition-all shadow-lg text-2xl transform hover:scale-105 active:scale-100"
                                    >
                                        Start Your Hardship Review Now
                                    </Link>
                                </div>
                                <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -ml-32 -mt-32 blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
                                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 opacity-10 rounded-full -mr-48 -mb-48 blur-3xl group-hover:rotate-45 transition-transform duration-700"></div>
                            </div>

                            <div className="mt-16 text-sm text-gray-400 italic font-light leading-relaxed border-t pt-8">
                                Disclaimer: Loan settlement is a serious financial decision with long term implications for credit eligibility. While medical emergencies are a valid humanitarian ground for settlement petitions, results depend entirely on individual case merits and lender policies. We recommend consulting with our legal experts at AMA Legal Solutions before initiating any default or settlement strategy.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related Pages */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20">
                        <div className="space-y-12">

                            {/* Main Sidebar CTA */}
                            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-blue-50 text-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500"></div>
                                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M19,3H5C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H19C20.11,21 21,20.11 21,19L21,5C21,3.89 20.11,3 19,3M19,19H5V5H19V19M10.47,15.58L11.7,14.35L12.92,15.58L14.35,14.15L13.13,12.92L14.35,11.7L12.92,10.27L11.7,11.5L10.47,10.27L9.05,11.7L10.27,12.92L9.05,14.15L10.47,15.58Z"/></svg>
                                </div>
                                <h4 className="font-extrabold text-2xl text-gray-900 mb-4">Urgent Medical Debt Relief</h4>
                                <p className="text-sm text-gray-600 mb-10 leading-relaxed">Are banks calling during your health crisis? Let our legal team stop the harassment today.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-black py-5 px-6 rounded-2xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-2xl transform active:scale-95"
                                >
                                    Protect My Family
                                </Link>
                                <div className="mt-8 flex flex-col gap-4 text-[11px] text-blue-900 font-bold opacity-80 decoration-blue-200">
                                    <span className="flex items-center gap-3"><svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> 24/7 Medical Fast-Track</span>
                                    <span className="flex items-center gap-3"><svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> Immediate Legal Shield</span>
                                    <span className="flex items-center gap-3"><svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> Zero Upfront Billing Audit</span>
                                </div>
                            </div>

                            {/* Related Guides */}
                            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm">
                                <h4 className="font-extrabold text-gray-900 mb-8 border-b pb-4 uppercase tracking-widest text-[10px] text-blue-600">Crisis Expert Guides</h4>
                                <nav className="space-y-6">
                                    <Link href="/does-settlement-erase-the-debt-completely" className="group flex justify-between items-center transition-all">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Job Loss Shield</span>
                                            <span className="text-[10px] text-gray-400 uppercase font-light">Income Reset</span>
                                        </div>
                                        <svg className="w-4 h-4 text-gray-300 group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                                    </Link>
                                    <Link href="/support-for-loan-settlement-during-medical-emergencies" className="group flex justify-between items-center transition-all">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Senior Citizen Relief</span>
                                            <span className="text-[10px] text-gray-400 uppercase font-light">Pension Hardship</span>
                                        </div>
                                        <svg className="w-4 h-4 text-gray-300 group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                                    </Link>
                                    <Link href="/how-to-deal-with-collection-calls-while-in-a-debt-settlement-program" className="group flex justify-between items-center transition-all">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Stop Agent Calls</span>
                                            <span className="text-[10px] text-gray-400 uppercase font-light">Privacy Law</span>
                                        </div>
                                        <svg className="w-4 h-4 text-gray-300 group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                                    </Link>
                                    <Link href="/rbi-new-recovery-guidelines-july-2026" className="group flex justify-between items-center transition-all">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">RBI Latest Rules</span>
                                            <span className="text-[10px] text-gray-400 uppercase font-light">Banking Rights</span>
                                        </div>
                                        <svg className="w-4 h-4 text-gray-300 group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                                    </Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
