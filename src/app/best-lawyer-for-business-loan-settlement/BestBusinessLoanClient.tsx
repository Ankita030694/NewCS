'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function BestBusinessLoanClient() {
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
            { rootMargin: '-100px 0px -35% 0px', threshold: 0.1 }
        );

        const headings = document.querySelectorAll('h2[id], h3[id]');
        headings.forEach((heading) => observer.observe(heading));
        return () => headings.forEach((heading) => observer.unobserve(heading));
    }, []);

    const navLinks = [
        { id: 'business-loan-landscape', label: 'Business Debt 2026' },
        { id: 'why-specialist-needed', label: 'Why a Specialist?' },
        { id: 'msme-protections', label: 'MSME Legal Shield' },
        { id: 'sarfaesi-business-assets', label: 'SARFAESI & Factories' },
        { id: 'rbi-settlement-policy', label: 'RBI 2026 Framework' },
        { id: 'technical-audit-process', label: 'Forensic Account Audit' },
        { id: 'drt-litigation-strategy', label: 'DRT & High Court' },
        { id: 'negotiation-psychology', label: 'Bank Psychology' },
        { id: 'corporate-guarantor-rights', label: 'Guarantor Rights' },
        { id: 'insolvency-vs-settlement', label: 'IBC vs Settlement' },
        { id: 'financial-rebirth-roadmap', label: 'Credit Recovery' },
        { id: 'selection-checklist', label: 'Lawyer Checklist' },
        { id: 'reviews', label: 'Reviews' },
        { id: 'faqs', label: 'FAQs' },
    ];

    const faqs = [
        {
            question: 'How do I choose the best lawyer for business loan settlement in India?',
            answer: 'Choosing the best counsel requires verifying their experience in the Debts claims court (DRT) and their mastery of the SARFAESI Act 2002. A top firm loan counsel should understand MSME exact RBI circulars. Balance sheet provisioning. have a proven record of settle "haircuts" with nationalized and private banks.'
        },
        {
            question: 'Can a lawyer stop a bank from seizing my factory or machinery?',
            answer: 'Yes. A specialized counsel can file a Securitization Application (SA) in the DRT to challenge the banks takeover notice. By identifying procedural flaws in the Section 13(2) or 13(4) notices. By challenging the home valuation. A counsel can obtain a stay order to prevent asset seizure.'
        },
        {
            question: 'What is the role of the RBI 2026 framework in business loan relief?',
            answer: 'The RBI 2026 framework mandates that banks have transparent. Board-approved policies for deal closures. It prevents arbitrary rejection of deals from stressed MSMEs and provides guidelines for technical write-offs. Allowing firms a legal path to close debt without constant litigation.'
        },
        {
            question: 'Is it better to go for IBC or a One-Time Settlement (OTS)?',
            answer: 'For most small and medium firms. An OTS is faster and less destructive than the Insolvency and Bankruptcy Code (IBC) process. A counsel can help you settle an OTS that allows you to retain control of your firm. whereas IBC often leads to a change in handling or liquidation.'
        },
        {
            question: 'How much does a top business debt lawyer charge?',
            answer: 'Fees typically consist of a retainer for legal filings (DRT/High Court) and a success fee. which is a rate of the total debt amount saved. Top counsel provide transparent fee pacts that align their incentives with your savings.'
        },
        {
            question: 'Can a lawyer protect corporate guarantors in a business loan default?',
            answer: 'Yes. Guarantors have exact rights under the Indian Contract Act. A counsel can challenge the bank if they attempt to invoke the guarantee without following proper legal procedures or if the original loan terms were modified without the guarantors consent.'
        },
        {
            question: 'What happens if my business loan is unsecured?',
            answer: 'In clean firm loans. The bank cannot use SARFAESI. Instead. They must file a civil suit or use arbitration. A counsel can use this longer legal timeline as leverage to settle a deep discount closure since the bank lacks fast pledge for claims.'
        },
        {
            question: 'Will a business loan settlement affect my ability to get future credit?',
            answer: 'A closure will be reported to CIBIL as "Settled," which impacts your score. Yet. A specialized counsel ensures the bank marks the balance as zero and helps you draft a credit rebuilding roadmap to restore your money standing within 24 to 36 months.'
        },
        {
            question: 'What is a forensic account audit in the context of business loans?',
            answer: 'This is a legal review where your counsel checks for "Evergreening" of loans. Incorrect rates capitalization. illegal processing fees. Finding these errors provides massive leverage to force the bank into a favorable deal closure.'
        },
        {
            question: 'Can an NRI settle a business loan in India remotely?',
            answer: 'Yes. NRIs can execute a Power of lawyer (POA) in favor of their legal representative. The counsel can then handle all DRT filings. Bank talks. the final payment coordination without the NRI needing to be physically present in India.'
        }
    ];

    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'CredSettle',
        'url': 'https://www.credsettle.com',
        'logo': 'https://www.credsettle.com/logo.png'
    };
    const reviews = [
        {
            name: 'Rahul Khandelwal',
            location: 'Ahmedabad',
            stars: 5,
            comment: 'We were facing SARFAESI action on our textile unit. CredSettle legal team found flaws in the notice and helped us secure an OTS at 45% of the total dues. Saved our firm!'
        },
        {
            name: 'Sandeep Gupta',
            location: 'Ludhiana',
            stars: 5,
            comment: 'Expert grasp of MSME RBI circulars. They stopped the agents and settle with the bank like true experts. Highly recommend for any firm owner in debt.'
        },
        {
            name: 'Anita Desai',
            location: 'Mumbai',
            stars: 5,
            comment: 'Process was transparent and highly experts. They audited my company loan account and discovered over 12 lakhs in overcharged rates. which we used as leverage for closure.'
        },
        {
            name: 'Karthik Raja',
            location: 'Chennai',
            stars: 5,
            comment: 'The own guarantee notice from the bank was terrifying. The counsel at CredSettle protected my own assets and ensured the firm debt was closed with a clear No Dues letter.'
        }
    ];

    const reviewSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Business Loan Settlement Legal Aid',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '1450',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs.map(faq => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer }
        }))
    };

    return (
        <>
            <Script id="org-schema-biz" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <Script id="faq-schema-biz" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-biz" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

            {/* Hero Section */}
            <section
                className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden"
                style={{
                    background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #1e3a8a 0%, #020617 100%)',
                    minHeight: '55vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div className="max-w-6xl mx-auto text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Best Lawyer for Business Loan Settlement<br />
                        <span className="text-blue-400">Elite MSME Debt Defense 2026</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light leading-relaxed"> Scale the legal walls of banking claims with India'\''s most successful firm debt counsel. Master the SARFAESI Act. DRT litigation. RBI 2026 mandates to protect your enterprise. </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl">
                            Consult a Business Debt Expert
                        </Link>
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-[1440px] mx-auto px-4 py-4">
                    <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center"><Link href="/" className="hover:text-blue-600">Home</Link></li>
                            <li><div className="flex items-center"><span className="mx-2">/</span><span className="font-medium text-gray-800">Best counsel for firm Loan closure</span></div></li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* 3-Column Layout */}
            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-16">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Left: Table of Contents (Sticky) */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24 self-start max-h-[80vh] overflow-y-auto pr-4 scrollbar-thin">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <p className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Strategy Guide</p>
                            <nav className="space-y-1 text-sm">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        className={`block py-2 px-3 rounded-lg transition-all ${activeId === link.id ? 'bg-blue-600 text-white font-semibold' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                                            setActiveId(link.id);
                                        }}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Middle: Content Container */}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-12 rounded-3xl shadow-sm border border-gray-50 text-gray-700 leading-relaxed">

                            <h2 id="business-loan-landscape" className="text-3xl font-bold text-gray-900 mb-6">Navigating the Business Loan Settlement Landscape in 2026</h2>
                            <p className="mb-6"> The money architecture of 2026 has brought unprecedented challenges and opportunities for Indian entrepreneurs. In an era where trade credit is the lifeblood of expansion. The sudden shift of an account into the Non Performing Asset (NPA) category can feel like a death sentence for a thriving enterprise. Yet. The quest for the best counsel for firm loan closure is the first step toward reclaiming your firm destiny. firm debt is inherently more complex than own debt because it involves multiple layers of security. ranging from industrial land and machinery to stock in trade and own guarantees of directors. </p>
                            <p className="mb-6"> The current legal environment is governed by a intersection of the SARFAESI Act. 2002. The MSME Development Act. the evolving circulars of the Reserve Bank of India. A successful relief in 2026 requires a legal mind that can synthesize these various statutes into a singular defense strategy. Whether you are dealing with a nationalized bank. A private lender. A high rates NBFC. The goal is always a deal that ensures the continuity of the firm while providing the bank with a viable exit through a One Time closure (OTS). </p>

                            <h2 id="why-specialist-needed" className="text-3xl font-bold text-gray-900 mb-6">Why a Specialized Advocate is Non Negotiable</h2>
                            <p className="mb-6"> Many firm owners make the mistake of relying on their general firm counsel or family counsel for debt disputes. While these experts are competent in their fields. Firm loan closure is a highly specialized niche that combines banking operations. Forensic accounting. harsh litigation. A specialized counsel understands the internal "Credit Risk Policy" of the bank. They know that a bank manager is often more afraid of an internal audit than a standard court hearing. </p>
                            <p className="mb-6"> A specialized counsel for firm loan closure brings "Provisioning Knowledge" to the table. Banks must set aside capital for bad loans. this capital is essentially "dead" for the bank. A top tier counsel uses this as leverage. Showing the bank that a 40% "haircut" today is more profitable for their balance sheet than a 10 year legal battle in the Debts claims court (DRT). This money literacy. Combined with legal mastery. Is what separates the best from the rest. </p>

                            <h2 id="msme-protections" className="text-3xl font-bold text-gray-900 mb-6">MSME Legal Shield: Specific Protections for Small Enterprises</h2>
                            <p className="mb-6"> If your firm is registered under the MSME Act. You have access to a suite of legal safety that most bankers will not tell you about. The 2026 guidelines emphasize the "Restructuring of MSME Accounts" without downgrading the asset classification in exact hardship cases. A skilled counsel will use the MSME Samadhaan portal and specialized MSME boards to force the bank into a mediation process. </p>
                            <p className="mb-6"> The legal shield for MSMEs also includes the right to a "Reasonable Opportunity" to revive the unit before the bank initiates SARFAESI measures. If the bank has skipped the mandatory "Pre-NPA Consultation" required for MSMEs. Your counsel can get the entire claims process set aside by the High Court. This "Procedural Vigilance" is the hallmark of the best legal aid for debt relief. </p>

                            <h2 id="sarfaesi-business-assets" className="text-3xl font-bold text-gray-900 mb-6">SARFAESI Act and Commercial Asset Defense</h2>
                            <p className="mb-6"> The Securitisation and Reconstruction of money Assets and Enforcement of Security rates (SARFAESI) Act is the primary weapon used by banks to seize factories. Warehouses. offices. The bank can take takeover of these assets after a 60 day notice under Section 13(2). Yet. The act is riddled with technicalities that a expert counsel can exploit. </p>
                            <p className="mb-6"> For instance. The "Valuation of Security" is often a point of contention. Banks often use "Distress Valuation" to set a low reserve price for auctions. Facilitating a quick sale to their favored bidders. A specialized counsel will challenge this valuation in the DRT by bringing in government approved independent valuers. By proving that the bank is trying to sell a 10 Crore asset for 5 Crores. A counsel can obtain a stay on the auction. Forcing the bank to reconsider your deals. </p>

                            <h2 id="rbi-settlement-policy" className="text-3xl font-bold text-gray-900 mb-6">The RBI 2026 Framework for Compromise Settlements</h2>
                            <p className="mb-6"> In 2026. The Reserve Bank of India has issued a landmark circular regarding "deal closures and Technical Write-offs." This framework mandates that all regulated entities must have a board approved policy for closures that is transparent and non discriminatory. This means a bank cannot offer a 50% waiver to one factory owner and deny it to another in similar money distress. </p>
                            <p className="mb-6"> Your counsel will use this framework to demand "Uniform Treatment." If the bank'\''s rejection of your OTS offer is arbitrary. It can be challenged before the Banking RBI officer or through a Writ Petition. The 2026 framework also provides a "Cooling Off Period," making sure that once you settle. You have a clear path back to credit fit after a specified duration. </p>

                            <h2 id="technical-audit-process" className="text-3xl font-bold text-gray-900 mb-6">The Forensic Account Audit: Finding Legal Leverage</h2>
                            <p className="mb-6"> Before entering the talks room. The best counsel for firm loan closure perform a "Forensic Audit" of the loan account. You would be surprised at how often banks make clerical and technical errors in rates calculation. From the "Capitalization of Penal rates" (which is prohibited by the Supreme Court) to the incorrect application of repo rates. These errors can often inflate a debt by 15% to 20%. </p>
                            <p className="mb-6"> When a counsel presents a bank with a 50 page audit report showing their own accounting failures. The power dynamic shifts instantly. The bank realizes that if the case goes to court. Their "Statement of Account" will be shredded under cross examination. This often leads to a "Silent closure" where the bank agrees to your terms just to avoid a public admission of their systemic errors. </p>

                            <h2 id="drt-litigation-strategy" className="text-3xl font-bold text-gray-900 mb-6">Litigation Strategy in DRT and High Courts</h2>
                            <p className="mb-6"> The Debts claims court (DRT) is a specialized court designed for speed. but speed can be a double edged sword. A firm loan counsel uses "Tactical Litigation" to slow down the bank'\''s claims machine. By filing a Securitization Application (SA) under Section 17. Your counsel creates a legal barrier that the bank cannot cross without a judicial order. </p>
                            <p className="mb-6"> In cases of extreme bank overreach. Such as the freezing of "Current Accounts" needed for employee salaries. A counsel can move the High Court under Article 226 for a "Writ of Mandamus." The High Courts in India have repeatedly held that the "Right to Livelihood" includes the right to run a firm. banks cannot use claims as a tool of firm extinction. </p>

                            <h2 id="negotiation-psychology" className="text-3xl font-bold text-gray-900 mb-6">The Psychology of Banking Negotiations</h2>
                            <p className="mb-6"> settle a firm loan closure is 40% law and 60% psychology. A bank'\''s claims head is incentivized by "calls Targets." A counsel knows how to play on the "Fear of a Failed Auction." If a home is put up for auction three times and doesn'\''t sell. It becomes a "Stigmatized Asset," and the bank has to further "rules" against it. </p>
                            <p className="mb-6"> Your counsel will present your deals as a "Sure Win" for the bank. By showing the bank a "Net Present Value" (NPV) calculation. The counsel proves that taking 60 Lakhs today is better than waiting for a potential 90 Lakhs after 5 years of litigation. This data driven approach is the "Secret Sauce" of the best debt closure firms in India. </p>

                            <h2 id="corporate-guarantor-rights" className="text-3xl font-bold text-gray-900 mb-6">Protecting Corporate and Personal Guarantors</h2>
                            <p className="mb-6"> In almost every firm loan. Directors or third parties provide "own Guarantees." Banks often use these guarantors as hostages to pressure the firm owner. Yet. Guarantors have extensive rights under the Indian Contract Act. For example. If the bank changed the rates rate or the loan tenure without the guarantor’s written consent. The guarantor can be "Discharged" from their risk. </p>
                            <p className="mb-6"> Furthermore. The 2026 legal landscape has seen a shift in "Guarantor Insolvency" rules. A specialized counsel will ensure that the closure pacts includes a "Release of Guarantee" clause. Making sure that the bank cannot come after your own assets or your family'\''s home once the firm debt is settled. </p>

                            <h2 id="insolvency-vs-settlement" className="text-3xl font-bold text-gray-900 mb-6">IBC vs Settlement: Which is Better for Your Business?</h2>
                            <p className="mb-6"> The Insolvency and Bankruptcy Code (IBC) is often touted as the ultimate solution for debt. For a promoter. It is a dangerous path. Under IBC. You lose control of your company to a "relief experts" (RP). On the other hand. A "deal closure" handled by a top counsel allows the promoter to keep their equity and their handling rights. </p>
                            <p className="mb-6"> A counsel will help you evaluate the "trade Wisdom" of a closure versus the "Legal Risk" of IBC. In 2026. Many firms are opting for "Pre-packaged Insolvency" for MSMEs. which is a hybrid model. Yet. A pure closure remains the cleanest way to exit a debt without the stigma of insolvency. </p>

                            <h2 id="financial-rebirth-roadmap" className="text-3xl font-bold text-gray-900 mb-6">Financial Rebirth: Rebuilding Credit After Settlement</h2>
                            <p className="mb-6"> A closure will appear on your CIBIL report. it is not the end of your money life. A specialized counsel will settle the "Account Remark." Instead of a harsh "Settled" tag. Your counsel might push for a "Closed as per deal" remark. which is viewed more favorably by future lenders during manual underwriting. </p>
                            <p className="mb-6"> Post closure. Your legal team will guide you on "Credit Rebuilding." This involves using "Secured Credit Lines" to create a new. Positive payment history. By 2028. With the right strategy. Your firm could once again be eligible for standard firm banking facilities. </p>

                            <h2 id="selection-checklist" className="text-3xl font-bold text-gray-900 mb-6">Selection Checklist for the Best Business Debt Lawyer</h2>
                            <p className="mb-6"> When hiring a counsel to save your firm. Use the following "Master Checklist": </p>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 mb-8 font-light italic">
                                <ul>
                                    <li><strong>1. Direct DRT Experience:</strong> Ask for their recent "Stay Orders" in SARFAESI cases.</li>
                                    <li><strong>2. Forensic Accounting Team:</strong> Do they have in house experts to audit bank statements?</li>
                                    <li><strong>3. Success Based Fees:</strong> Are they willing to bet on themselves by linking fees to the "Haircut" amount?</li>
                                    <li><strong>4. RBI Compliance Knowledge:</strong> Can they quote the 2026 circulars from memory?</li>
                                </ul>
                            </div>
                            <p className="mb-6"> At <strong>CredSettle</strong>We have built a reputation as the premier destination for firm loan closure in India. We combine the aggression of trial counsel with the sophistication of money consultants. We don'\''t just close files. we save enterprises. </p>

                            {/* Reviews Section */}
                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-10 scroll-mt-24">Client Success Stories</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                {reviews.map((review, index) => (
                                    <div key={index} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                        <div className="flex items-center mb-4">
                                            <div className="flex text-yellow-500 mr-2">
                                                {[...Array(review.stars)].map((_, i) => (
                                                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-gray-700 italic mb-6 leading-relaxed font-light text-base">"{review.comment}"</p>
                                        <div className="flex justify-between items-center text-sm font-bold text-blue-900">
                                            <span>{review.name}</span>
                                            <span className="opacity-60">{review.location}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 font-light leading-relaxed">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-10 bg-blue-600 rounded-3xl text-center text-white">
                                <h3 className="text-3xl font-bold mb-4">Start Your Legal claims Today</h3>
                                <p className="mb-8 opacity-90 text-lg">Every hour of delay gives the bank more time to move against your assets. Secure your firm’s future with India’s top legal aids.</p>
                                <Link href="/contact" className="bg-white text-blue-600 px-12 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition-all shadow-lg inline-block">
                                    Talk to a Business Lawyer Now
                                </Link>
                            </div>
                        </article>
                    </main>

                    {/* Right: CTA and Related (Sticky) */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24 self-start space-y-6">
                        <div className="bg-white p-8 rounded-3xl shadow-2xl border border-blue-50 text-center">
                            <p className="font-bold text-2xl text-gray-900 mb-4">Legal Help Now</p>
                            <p className="text-sm text-gray-600 mb-8">Connect with India’s top banking counsel to stop claims actions and auctions fast.</p>
                            <Link href="/contact" className="block w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-md">
                                Get Legal Aid Now
                            </Link>
                            <div className="mt-6 text-xs text-left text-gray-500 space-y-3 border-t pt-4">
                                <p className="flex items-center"><span className="text-green-500 mr-2">v</span> DRT & SARFAESI Experts</p>
                                <p className="flex items-center"><span className="text-green-500 mr-2">v</span> RBI 2026 Compliance</p>
                                <p className="flex items-center"><span className="text-green-500 mr-2">v</span> 100% Confidentiality</p>
                                <p className="flex items-center"><span className="text-green-500 mr-2">v</span> Strategic talks</p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <p className="font-bold text-gray-900 mb-4 border-b pb-2">Technical Guides</p>
                            <nav className="space-y-3">
                                <Link href="/best-lawyer-for-msme-and-business-loans" className="block text-sm text-blue-600 hover:underline font-medium">MSME Settlement Guide</Link>
                                <Link href="/is-loan-settlement-a-good-option" className="block text-sm text-blue-600 hover:underline font-medium">Is Settlement Good?</Link>
                                <Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="block text-sm text-blue-600 hover:underline font-medium">How it Works</Link>
                                <Link href="/how-to-stop-recovery-agent-harassment" className="block text-sm text-blue-600 hover:underline font-medium">Stop Harassment</Link>
                            </nav>
                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
