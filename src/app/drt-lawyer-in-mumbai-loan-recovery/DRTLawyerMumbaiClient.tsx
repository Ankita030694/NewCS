'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function DRTLawyerMumbaiClient() {
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
        { id: 'what-is-drt', label: 'What Is DRT?' },
        { id: 'drt-mumbai-structure', label: 'DRT Mumbai Structure' },
        { id: 'drt-procedure', label: 'DRT Procedure' },
        { id: 'sarfaesi-drt-connection', label: 'SARFAESI and DRT' },
        { id: 'borrower-defence', label: 'Borrower Defence' },
        { id: 'why-specialist-lawyer', label: 'Why Specialist Lawyer' },
        { id: 'sa-filing', label: 'Securitization Apps' },
        { id: 'drat-appeals', label: 'DRAT Appeals' },
        { id: 'settlement-during-drt', label: 'Settlement at DRT' },
        { id: 'guarantor-liability', label: 'Guarantor Rights' },
        { id: 'npa-resolution', label: 'NPA Resolution' },
        { id: 'oats-one-time-settlement', label: 'OTS Strategy' },
        { id: 'case-studies', label: 'Case Studies' },
        { id: 'reviews', label: 'Client Reviews' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Conclusion' },
    ];

    const faqs = [
        {
            question: 'How many Debt Recovery Tribunals are there in Mumbai, and which one handles my case?',
            answer: 'Mumbai has three Debt Recovery Tribunals: DRT-I, DRT-II, and DRT-III Mumbai. The assignment of a case to a specific DRT depends on the value of the claim and the jurisdiction criteria set by the RDDBFI Act. Cases involving larger financial institutions and certain claim brackets may go to DRT-I, while others are distributed between DRT-II and DRT-III based on territorial and monetary jurisdiction. Your lawyer will file or defend the case at the appropriate tribunal.'
        },
        {
            question: 'What is the minimum loan amount for a bank to file a case in the DRT Mumbai?',
            answer: 'Under the Recovery of Debts Due to Banks and Financial Institutions (RDDBFI) Act, 1993, the Debt Recovery Tribunal has jurisdiction for loan recovery cases where the amount involved is Rs. 20 lakh (20 Lakhs) or more. For amounts below this threshold, banks typically pursue recovery through civil courts. In Mumbai, where most corporate and large-value loans are based, the DRT handles a significant volume of high-value cases.'
        },
        {
            question: 'Can a borrower file a counter-claim against the bank in DRT Mumbai?',
            answer: 'Yes, absolutely. Under Section 19(8) of the RDDBFI Act, a borrower can file a counter-claim in the DRT against the bank for any set-off amount. Common counter-claims include claims for wrongful NPA classification, failure to release account freeze after payment, excessive charges, breach of loan agreement terms, and harassment caused by recovery agents. A well-crafted counter-claim often creates negotiating leverage for a settlement.'
        },
        {
            question: 'How long does a typical DRT case take in Mumbai?',
            answer: 'A DRT case in Mumbai can take anywhere from six months to three years depending on the complexity of the case, the number of parties involved, and the court calendar. Cases involving SARFAESI actions that are simultaneously being heard tend to be faster at the interim relief stage. If the case goes to full trial with evidence, it can take longer. The DRT-III Mumbai, which handles a higher volume of cases, generally has a slightly longer timeline than the other two tribunals.'
        },
        {
            question: 'What happens if a bank auctions my property while a DRT case is pending?',
            answer: 'If the bank proceeds with an auction under SARFAESI while a DRT proceeding is pending, and the DRT has not granted a stay on the auction, the sale may be effected. However, if the DRT later finds in your favor, you can claim compensation and potentially seek to set aside the sale if it was conducted fraudulently or in violation of procedure. This is why obtaining an early stay order from the DRT or the Bombay High Court is critical. A lawyer must file for this relief instantly upon receiving any auction notice.'
        },
        {
            question: 'Can a DRT lawyer in Mumbai also represent me at the Bombay High Court?',
            answer: 'Yes. Many DRT cases in Mumbai are also accompanied by writ petitions or appeals in the Bombay High Court. A specialized DRT lawyer with High Court enrollment can appear at both forums. If a stay order is denied by the DRT, the next step is often a writ petition before the Bombay High Court under Article 226 of the Constitution challenging the bank action. An integrated legal team that can appear at both DRT and High Court provides seamless protection.'
        },
        {
            question: 'What is the Debt Recovery Appellate Tribunal (DRAT) and where is it located?',
            answer: 'The DRAT (Debt Recovery Appellate Tribunal) is the appeals court for all DRT orders. Appeals from the three Mumbai DRTs go to the DRAT Mumbai, which is also located in Mumbai. You have 45 days from a DRT order to file an appeal before the DRAT. Importantly, to file an appeal against a DRT order that goes against you, you typically have to deposit 50 percent of the debt amount or as directed by the DRAT. Your lawyer can seek a waiver or reduction of this deposit requirement.'
        },
        {
            question: 'Is the DRT process in Mumbai the same as SARFAESI recovery?',
            answer: 'The DRT process (under RDDBFI Act) and SARFAESI Act are two distinct but often parallel legal mechanisms. Under the DRT/RDDBFI Act, the bank files an Original Application (OA) in the DRT for a money decree. Under SARFAESI, the bank directly takes possession of secured assets without court intervention. In Mumbai, many banks use both simultaneously: they file an OA in DRT while also issuing a Section 13(2) notice under SARFAESI. A Section 17 application in the DRT can stay the SARFAESI action.'
        },
        {
            question: 'What documents should I bring to the first meeting with a DRT lawyer in Mumbai?',
            answer: 'You should bring: the original loan sanction letter and agreement, all correspondence with the bank including demand notices and recovery notices, any SARFAESI notice received, bank account statements for the loan account for at least the past 24 months, any repayment receipts or proof of payments made, property documents if a secured loan is involved, and any previous legal notices sent or received regarding this loan. The more documentation you provide, the stronger the legal analysis your lawyer can provide.'
        },
        {
            question: 'Can DRT proceedings be challenged on the ground that the bank did not follow the RBI restructuring guidelines?',
            answer: 'Yes, this is a powerful legal argument. If the bank classified your loan as an NPA and proceeded to DRT without first exploring restructuring options as mandated by RBI guidelines (particularly for MSME and stressed accounts), this procedural lapse can be raised as a defence. The DRT has the power to direct the bank to consider a restructuring proposal before proceeding with the recovery. A specialist lawyer will research whether the applicable RBI guidelines were followed in your case.'
        }
    ];

    const reviews = [
        {
            name: 'Vikram Malhotra',
            location: 'Mumbai',
            stars: 5,
            comment: 'Our company faced a Rs. 3 crore DRT-I Mumbai case from a leading private bank. CredSettle deployed a specialized DRT lawyer who obtained a stay on the auction within 48 hours of receiving the SARFAESI notice. The case was eventually settled at 60 paise on the rupee. Outstanding professional service.'
        },
        {
            name: 'Sunita Raorane',
            location: 'Thane',
            stars: 5,
            comment: 'As a guarantor in my husband business loan, I was dragged into DRT proceedings in Mumbai. The legal team at CredSettle got me discharged from the case by proving I was a dormant guarantor without proper notice. I am very thankful for their expert guidance throughout.'
        },
        {
            name: 'Anil Kapoor',
            location: 'Navi Mumbai',
            stars: 5,
            comment: 'I had a home loan case pending at DRT-III Mumbai. The bank was trying to auction my flat. My lawyer filed a Section 17 application and got a stay order within two weeks. We then negotiated a settlement that allowed us to pay in installments and keep our home. Highly recommended.'
        },
        {
            name: 'Priya Gokhale',
            location: 'Pune',
            stars: 5,
            comment: 'The DRT lawyer assigned to our case was brilliant. She identified that the bank had not followed the mandatory 60-day period before taking symbolic possession. This procedural error gave us significant leverage and the bank agreed to a settlement that was very favorable for us.'
        }
    ];

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
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
        'name': 'DRT Lawyer in Mumbai Loan Recovery',
        'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': '4.9', 'reviewCount': '3156', 'bestRating': '5', 'worstRating': '1' }
    };

    const relatedPages = [
        { href: '/best-lawyer-for-drt-case-defence-for-bank-loan-recovery', label: 'Best Lawyer for DRT Case Defence' },
        { href: '/best-lawyer-for-loan-settlement-during-drt', label: 'Loan Settlement During DRT' },
        { href: '/best-lawyer-for-secured-loan-litigation-drt', label: 'Secured Loan Litigation DRT Lawyer' },
        { href: '/best-project-finance-builder-loan-recovery-matter-lawyer', label: 'Project Finance Builder Loan Recovery' },
        { href: '/best-lawyer-for-account-documents-drt', label: 'Account Documents DRT Lawyer' },
        { href: '/best-lawyer-for-bank-loan-recovery-defence', label: 'Bank Loan Recovery Defence' },
    ];

    return (
        <>
            <Script id="faq-schema-drt-mumbai" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-drt-mumbai" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <Script id="org-schema-drt-mumbai" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

            {/* Hero */}
            <section className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden"
                style={{ background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)', minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="max-w-6xl mx-auto text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        DRT Lawyer in Mumbai<br />
                        <span className="text-blue-300">For Loan Recovery Cases 2025</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Expert representation before DRT-I, DRT-II and DRT-III Mumbai. SARFAESI defence, stay orders, NPA resolution, and strategic settlements for borrowers across Maharashtra.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Speak to a DRT Lawyer in Mumbai
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
                                    <span className="ml-1 font-medium text-gray-500 md:ml-2">DRT Lawyer in Mumbai Loan Recovery</span>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Introduction: Why DRT Proceedings in Mumbai Are Unique</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Mumbai is the financial capital of India, home to the headquarters of every major scheduled commercial bank, hundreds of non-banking finance companies, and the country’s largest concentration of high-value loan accounts. Naturally, when these loans go bad, the Debt Recovery Tribunals in Mumbai become the frontline battleground for some of the country’s most complex and high-stakes loan recovery battles. Understanding how the three Mumbai DRTs function, what legal strategy works in this specific jurisdiction, and how to find the best DRT lawyer in Mumbai can mean the difference between losing your business or property and keeping it.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the DRT landscape in Mumbai has evolved significantly. Digitization of case filing and hearing records, updated tribunal rules under the Tribunal Reforms Act, and an increasing number of borrower-friendly rulings from the Bombay High Court have changed the dynamics of DRT proceedings for both banks and borrowers.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This comprehensive guide covers the structure of Mumbai’s DRTs, the complete legal procedure from filing to appeal, defence strategies specifically developed for Mumbai-based cases, and how expert legal representation can transform the outcome of what appears to be an unwinnable situation.
                            </p>

                            <h2 id="what-is-drt" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">What Is the Debt Recovery Tribunal: Legal Foundation</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Debt Recovery Tribunal (DRT) was established under the Recovery of Debts Due to Banks and Financial Institutions (RDDBFI) Act, 1993. The purpose was to create a faster, specialized court exclusively for loan recovery cases, removing the extreme delays of the ordinary civil court system. Before the DRT system, a bank would need to file a civil suit and wait for ten to fifteen years for a final decree. The DRT was meant to deliver results in six months.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Key features of DRT jurisdiction that every borrower must understand:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li>DRTs have jurisdiction only where the claim amount is Rs. 20 lakhs or more.</li>
                                <li>Both banks and financial institutions (NBFCs included in many cases) can file recovery applications.</li>
                                <li>The DRT Presiding Officer is a qualified judicial officer (usually a District Judge level).</li>
                                <li>The DRT can pass a recovery certificate that is equivalent to a civil court decree for execution purposes.</li>
                                <li>The DRT can also hear Section 17 Securitization Applications under the SARFAESI Act, making it the key forum for all loan-related disputes.</li>
                            </ul>

                            <h2 id="drt-mumbai-structure" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">DRT Mumbai: Structure and Jurisdiction</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Mumbai has three Debt Recovery Tribunals, making it one of the busiest DRT centers in India. Each tribunal handles different categories of cases based on value and territory:
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>DRT-I Mumbai:</strong> Handles original applications from specific major banks and high-value cases. Located in Fort, Mumbai. Also has DRAT (Appellate) jurisdiction for appeals from all three DRTs.</li>
                                    <li><strong>DRT-II Mumbai:</strong> Handles applications by another set of scheduled banks and NBFCs. Covers cases primarily from Mumbai city and certain suburban bank branches.</li>
                                    <li><strong>DRT-III Mumbai:</strong> Handles remaining applications and has a particularly high case volume due to its broader territorial coverage, including Thane and Navi Mumbai bank branches.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The DRAT (Debt Recovery Appellate Tribunal) for appeals from all three Mumbai DRTs is also located in Mumbai, making the city the complete hub for DRT-related legal proceedings in Western India.
                            </p>

                            <h2 id="drt-procedure" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">The DRT Procedure in Mumbai: From OA to Recovery Certificate</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Understanding the step-by-step DRT procedure helps you identify intervention points where an expert lawyer can protect your interests:
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light">
                                <ol className="list-decimal pl-6 space-y-4 text-gray-800">
                                    <li><strong>Filing of Original Application (OA):</strong> The bank files a detailed application in the respective DRT stating the loan amount, default details, and relief sought. This is served on the borrower, guarantors, and co-borrowers.</li>
                                    <li><strong>Notice and Summons:</strong> The DRT issues a notice requiring the defendant (borrower) to appear on a specified date. Non-appearance can lead to an ex-parte order.</li>
                                    <li><strong>Filing of Written Statement (WS):</strong> The borrower has 30 days to file a detailed Written Statement challenging the bank’s claims. This is the most critical document in the defence.</li>
                                    <li><strong>Counter-Claim (if applicable):</strong> Along with the Written Statement, the borrower can file a counter-claim for any amount owed by the bank, such as excess charges or damages for harassment.</li>
                                    <li><strong>Evidence Stage:</strong> Both parties present their documentary and oral evidence. This is where bank account statements, loan agreements, and expert witnesses are examined.</li>
                                    <li><strong>Arguments:</strong> Lawyers for both sides present final legal arguments on law and facts.</li>
                                    <li><strong>Recovery Certificate:</strong> If the DRT decides in the bank’s favor, it passes a Recovery Certificate specifying the amount. This is forwarded to the Recovery Officer for execution through property attachment and sale.</li>
                                </ol>
                            </div>

                            <h2 id="sarfaesi-drt-connection" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">SARFAESI Act and DRT Mumbai: The Critical Connection</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In Mumbai, banks do not typically rely solely on DRT proceedings. They deploy the SARFAESI Act simultaneously as a faster parallel track. Understanding how SARFAESI and DRT interact is critical for any borrower in Mumbai.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Under the SARFAESI Act, once a loan is classified as NPA (Non-Performing Asset), the bank can take the following steps without going to any court first:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li>Issue a Section 13(2) demand notice giving 60 days to pay the outstanding amount.</li>
                                <li>Take symbolic possession of secured property under Section 13(4).</li>
                                <li>Take physical possession and sell the property by public auction.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The only way to challenge SARFAESI action through the DRT in Mumbai is by filing a Section 17 Securitization Application (SA). This is a specialized application that must be filed within 45 days of the SARFAESI action being challenged. If the DRT grants a stay on the SARFAESI action, you get crucial time to resolve the matter.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In Mumbai, Section 17 Applications are taken up urgently by the DRTs because delays in granting or refusing stays directly impact the rights of borrowers. A skilled DRT lawyer in Mumbai knows how to draft a compelling SA that maximizes the chances of a stay order on the very first date of hearing.
                            </p>

                            <h2 id="borrower-defence" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Effective Borrower Defence Strategies at Mumbai DRT</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Many borrowers believe that once a bank files a case in the DRT, there is nothing they can do. This is completely false. There are specific, robust legal defences that a well-prepared DRT lawyer in Mumbai can deploy:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                    <strong className="text-gray-900 block mb-2">Challenge the NPA Classification</strong>
                                    <p className="text-gray-600 text-sm">If payments were made but not properly credited, or if the classification date is wrong, the entire DRT case is built on a flawed foundation that can be challenged.</p>
                                </div>
                                <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                    <strong className="text-gray-900 block mb-2">Interest Rate Disputes</strong>
                                    <p className="text-gray-600 text-sm">Banks often add penal interest on compound interest, which may go beyond the contractually agreed rate. A forensic review of the account statement can uncover thousands or crores of excess charges.</p>
                                </div>
                                <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                    <strong className="text-gray-900 block mb-2">Valuation Challenges</strong>
                                    <p className="text-gray-600 text-sm">In SARFAESI cases, banks must get an independent valuation of the property before auctioning. If the reserve price is set below fair market value, this is grounds for challenging the auction.</p>
                                </div>
                                <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                    <strong className="text-gray-900 block mb-2">Lender’s Own Default</strong>
                                    <p className="text-gray-600 text-sm">If the bank failed to disburse the loan as per schedule, leading to project delays and ultimate default, this is a valid counter-defence that shifts moral and legal responsibility.</p>
                                </div>
                            </div>

                            <h2 id="why-specialist-lawyer" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Why You Need a Specialized DRT Lawyer in Mumbai</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                DRT proceedings in Mumbai are significantly different from courts in smaller cities. The cases involve larger amounts, more sophisticated banks with experienced legal teams, and a specific DRT culture and practice that only experienced practitioners understand.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A specialized DRT lawyer in Mumbai brings these critical advantages:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Familiarity with DRT-I, DRT-II, and DRT-III Mumbai Presiding Officers:</strong> Understanding the judicial temperament and approach of the Presiding Officer handling your case helps in tailoring arguments and interim applications.</li>
                                <li><strong>Experience with Bombay High Court Writs:</strong> When a stay is denied at the DRT level, the next step is often a writ petition in the Bombay High Court. A specialist who practices at both forums provides seamless representation.</li>
                                <li><strong>Banking Relationship Insights:</strong> Understanding which banks are more amenable to settlement at different stages of the proceedings helps in timing settlement negotiations optimally.</li>
                                <li><strong>Access to the DRAT Mumbai:</strong> When a DRT order goes against you, the DRAT appeal must be filed within 45 days with a deposit. A specialized lawyer moves quickly on appeals and knows how to seek a stay of the DRT order pending the appeal.</li>
                            </ul>

                            <h2 id="sa-filing" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Section 17 Securitization Applications at Mumbai DRT</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A Section 17 Application (SA) under the SARFAESI Act is the most urgent legal action a borrower can take when a bank moves to possess or auction property in Mumbai. Unlike a regular court case, the SA is heard on an urgent basis at the DRT.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The key grounds on which an SA can succeed at Mumbai DRT include:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li>The Section 13(2) notice was defective (wrong amount, wrong address, insufficient time given).</li>
                                <li>The bank took possession before the 60-day notice period expired.</li>
                                <li>The property is not the secured asset described in the mortgage document.</li>
                                <li>The account was not properly classified as NPA on the date mentioned in the notice.</li>
                                <li>The bank failed to respond to the borrower’s representation within the 15-day mandatory period.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In Mumbai’s DRTs, SAs that clearly identify procedural defects in the bank’s SARFAESI notice are very frequently granted urgent interim relief. This buys critical time for the borrower to arrange funds or negotiate a settlement.
                            </p>

                            <h2 id="drat-appeals" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">DRAT Mumbai: The Appeals Process</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Debt Recovery Appellate Tribunal (DRAT) in Mumbai hears appeals from all three DRTs in Mumbai. If the DRT passes an order against you, filing a timely appeal before the DRAT is critical to protecting your rights.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Key aspects of the DRAT Mumbai process:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li>You have 45 days from the DRT order to file the DRAT appeal.</li>
                                <li>To file an appeal against a money recovery order, the appellant must deposit 50 percent of the debt amount with the DRAT or furnish bank guarantee or security for the same, unless the DRAT waives this requirement based on good reasons.</li>
                                <li>The DRAT can stay the DRT order and the DRT’s Recovery Certificate while the appeal is pending.</li>
                                <li>DRAT orders can be further appealed to the High Court under Article 227 of the Constitution.</li>
                            </ul>

                            <h2 id="settlement-during-drt" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Negotiating a Settlement During DRT Proceedings in Mumbai</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One of the most important but least discussed aspects of DRT proceedings is that they create an excellent platform for negotiation. Banks file DRT cases in Mumbai with the aim of recovering money, not necessarily of winning a protracted legal battle. A well-timed and well-structured settlement offer, backed by a credible legal stance, often results in a significantly better outcome than a contested proceeding.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The optimal time for settlement negotiations in a Mumbai DRT case is at two specific points: first, immediately after the case is filed and before the first substantive hearing, when the cost of litigation for both sides is still low; and second, after the borrower files a strong Written Statement that creates doubt about the bank’s ability to secure a quick recovery certificate.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A specialized DRT lawyer in Mumbai knows the appropriate settlement zones for different types of cases, different banks, and different loan categories. They can negotiate a One-Time Settlement (OTS) that the bank presents to its board for approval, and secure a mutual consent order from the DRT closing the case.
                            </p>

                            <h2 id="guarantor-liability" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Guarantor Liability at Mumbai DRT: Know Your Rights</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In Mumbai DRT proceedings, guarantors are routinely impleaded (added) as defendants in the bank’s Original Application. Many guarantors do not realize the full extent of their exposure until a recovery notice or auction notice arrives at their doorstep.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Courts in Mumbai have clarified several important principles regarding guarantor rights:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li>A surety is entitled to all the rights and defences available to the principal borrower.</li>
                                <li>A guarantor can challenge the bank’s right to recover from them directly if the bank failed to first exhaust remedies against the primary borrower.</li>
                                <li>A corporate guarantor (as opposed to a personal guarantor) may have different disclosure obligations to its board of directors, and unauthorized guarantee extensions can be challenged.</li>
                                <li>The Bombay High Court has held that a guarantor’s property cannot be auctioned without giving them adequate notice and opportunity to be heard.</li>
                            </ul>

                            <h2 id="npa-resolution" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">NPA Resolution Strategies for Mumbai Borrowers</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Non-Performing Asset (NPA) classification is the starting point for all DRT proceedings. Once a loan is classified as NPA, the bank has multiple recovery tools at its disposal. However, borrowers in Mumbai have specific strategies available to challenge or resolve the NPA status.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The RBI’s stressed asset resolution framework provides a structured opportunity for many Mumbai-based borrowers to exit the NPA classification cycle. Key tools include:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Prudential Framework for Resolution of Stressed Assets:</strong> Banks must implement a resolution plan within 180 days of identifying stress. If a bank has skipped this process and directly initiated DRT proceedings, this is a regulatory lapse that can be challenged.</li>
                                <li><strong>Inter-Creditor Agreement (ICA):</strong> For large loan accounts, all lenders must arrive at a collective resolution plan. If even one bank acts unilaterally by filing a DRT case while others are still negotiating, there can be procedural challenges.</li>
                                <li><strong>Ombudsman Complaints for Regulatory Non-Compliance:</strong> The RBI Integrated Ombudsman can be approached for complaints about unfair NPA classification, failure to provide restructuring options, or violation of the Fair Practices Code before escalating to DRT.</li>
                            </ul>

                            <h2 id="oats-one-time-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">One-Time Settlement (OTS) at Mumbai DRT: Strategy and Execution</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For many Mumbai borrowers, a well-negotiated One-Time Settlement is the most practical and financially efficient way to resolve a DRT case. Banks in Mumbai, especially those with their headquarters in the city, have board-approved OTS policies that allow significant write-offs of penal charges and even principal in certain cases.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A successful OTS at the DRT stage requires a clear strategy. The borrower must demonstrate willingness to pay a viable lump sum, backed by a credible source of funds (either personal savings, family contribution, or a refinance from another lender). The legal strength of your defence directly impacts the OTS percentage the bank is willing to accept.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Once an OTS is agreed upon in principle, your DRT lawyer in Mumbai coordinates with the bank’s legal team to get the settlement terms approved and then moves the DRT for a consent order disposing of the case. This is the most efficient resolution pathway.
                            </p>

                            <h2 id="case-studies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Case Studies: Mumbai DRT Legal Wins</h2>
                            <div className="space-y-6 mb-8">
                                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                                    <h4 className="font-bold text-blue-900 mb-2">Case 1: Commercial Property Auction Stayed at DRT-II Mumbai</h4>
                                    <p className="text-gray-700">A textile business in south Mumbai had a working capital loan of Rs. 4.5 crore that was classified as NPA after a business downturn. The bank issued a SARFAESI notice for their mortgaged commercial property and scheduled an auction. The DRT lawyer filed an urgent Section 17 SA highlighting that the bank had not given the mandatory 60-day window and had miscalculated the outstanding amount. DRT-II Mumbai granted an interim stay within one week. The case was settled at 65 percent of the claimed amount over six months.</p>
                                </div>
                                <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                                    <h4 className="font-bold text-green-900 mb-2">Case 2: Interest Overcharge Challenge at DRT-III Mumbai</h4>
                                    <p className="text-gray-700">A small IT company in Thane had a term loan of Rs. 75 lakhs. When the bank filed an OA at DRT-III Mumbai, the claim amount stated was Rs. 1.23 crore. The borrower’s DRT lawyer engaged a forensic accountant who found that the bank had charged compound interest on penal charges, which was not permitted under the loan agreement. After filing a detailed Written Statement with the forensic report, the bank settled the matter at Rs. 83 lakhs, saving the client nearly Rs. 40 lakhs.</p>
                                </div>
                            </div>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Client Reviews</h2>
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

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Conclusion: Your Strategic Response to DRT in Mumbai</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A DRT case in Mumbai is not a death sentence for your financial future. With experienced legal representation, even the most complex DRT proceedings can be managed, delayed, challenged, and ultimately resolved on terms that protect your business and personal assets. The key is to act immediately upon receiving any notice from a bank, whether it is a demand notice under SARFAESI or a summons from the DRT.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Mumbai’s three DRTs handle thousands of cases annually. The banks that file these cases are experienced litigants with dedicated legal teams. Matching their legal firepower with a specialized DRT lawyer in Mumbai who knows the jurisdiction is not just advisable; it is essential.
                            </p>
                            <div className="bg-blue-600 text-white rounded-3xl p-8 text-center mb-8">
                                <h3 className="text-2xl font-bold mb-4">Get Expert DRT Legal Representation in Mumbai</h3>
                                <p className="opacity-90 mb-6">Our team of specialized DRT lawyers in Mumbai has appeared before all three DRTs and the DRAT. Contact us today for a free assessment of your case.</p>
                                <Link href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all inline-block">
                                    Consult a DRT Lawyer Now
                                </Link>
                            </div>
                        </article>
                    </main>

                    {/* Right Column */}
                    <aside className="lg:w-1/4 xl:w-1/5 flex flex-col gap-6 sticky top-14 self-start">
                        <div className="bg-gradient-to-br from-blue-600 to-blue-900 text-white rounded-2xl p-6 shadow-lg">
                            <h3 className="font-bold text-xl mb-3">Free DRT Case Assessment</h3>
                            <p className="opacity-90 mb-5 text-sm leading-relaxed">Facing DRT proceedings in Mumbai? Our expert lawyers can review your case, identify defences, and develop a strategy to protect your assets.</p>
                            <ul className="space-y-2 mb-5">
                                {['DRT-I, II, III Mumbai Coverage', 'SARFAESI Defence', 'DRAT Appeals', 'OTS Negotiation'].map((item, i) => (
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
