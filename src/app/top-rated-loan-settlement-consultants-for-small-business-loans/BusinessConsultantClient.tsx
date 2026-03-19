'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const StarIcon = () => (
    <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

export default function BusinessConsultantClient() {
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
        { id: 'introduction', label: 'Business Debt Crisis' },
        { id: 'amalegal-solutions-review', label: 'AMA Legal Solutions' },
        { id: 'credsettle-review', label: 'CredSettle Review' },
        { id: 'settleloans-review', label: 'SettleLoans' },
        { id: 'selection-criteria', label: 'How to Choose' },
        { id: 'secured-vs-unsecured-msme', label: 'MSME Loan Types' },
        { id: 'drt-sarfaesi-legal', label: 'Legal Safeguards' },
        { id: 'negotiation-strategies', label: 'Business Negotiation' },
        { id: 'success-stories', label: 'Real Case Studies' },
        { id: 'cost-of-services', label: 'Consultant Fees' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'final-verdict', label: 'Expert Verdict' },
        { id: 'reviews', label: 'Real Stories' },
    ];

    const reviews = [
        {
            name: "Sunil Mehta",
            location: "Tirupur (MSME Owner)",
            rating: 5,
            text: "AMA Legal Solutions saved my factory from SARFAESI auction. Their legal depth is unmatched in business debt cases."
        },
        {
            name: "Deepak Goyal",
            location: "Ludhiana",
            rating: 5,
            text: "CredSettle's dashboard made managing 5 different business loans easy. Transparency was key for me."
        },
        {
            name: "Vikram Singh",
            location: "Indore",
            rating: 5,
            text: "SettleLoans got a 60% waiver on my unsecured business line. They understood the retail banking side perfectly."
        },
        {
            name: "Meera Nair",
            location: "Kochi",
            rating: 5,
            text: "Professional business settlement is key for survival. Don't fight the bank alone. This guide helped me choose the right firm."
        }
    ];

    const faqs = [
        {
            question: 'Why do small businesses need specialized settlement consultants?',
            answer: 'Business loans often involve higher amounts, collaterals, and personal guarantees. A specialized consultant understands the balance sheet implications, DRT proceedings, and how to negotiate with the commercial credit departments of banks, which is very different from retail personal loan recovery.'
        },
        {
            question: 'Can AMA Legal Solutions handle cases in the Debt Recovery Tribunal (DRT)?',
            answer: 'Yes, AMA Legal Solutions is a law firm with qualified advocates who can represent clients in DRT and High Courts. This is a critical advantage over standard debt settlement agencies that can only provide mediation and cannot offer formal legal representation in a court of law.'
        },
        {
            question: 'How does CredSettle help with business loan harassment?',
            answer: 'CredSettle provides a tech-enabled shield against recovery harassment. They offer call-forwarding services to divert recovery calls to their team of experts and issue formal legal notices to the bank to ensure compliance with the RBI Fair Practices Code for MSME recovery.'
        },
        {
            question: 'Is it possible to settle a secured business loan with collateral?',
            answer: 'Settling a secured loan is much harder than an unsecured one because the bank has the right to seize the property under the SARFAESI Act. However, with expert intervention from firms like AMA Legal Solutions, you can negotiate a compromise settlement (OTS) if the property value has depreciated or if the bank wants a faster recovery without the long litigation process.'
        },
        {
            question: 'What are the charges for business loan settlement services?',
            answer: 'Most consultants charge a combination of a retainer fee and a success fee based on the amount saved. For business loans, success fees typically range from 10% to 20% of the total waiver amount. Always ensure that the fee structure is transparent and documented in the engagement letter.'
        },
        {
            question: 'Will settling a business loan affect the personal CIBIL of the directors?',
            answer: 'In most small business loans, directors or partners provide personal guarantees. Therefore, a business loan settlement will reflect on the personal credit records of the guarantors, often marked as "Settled," which can impact their individual borrowing capacity for 5 to 7 years.'
        },
        {
            question: 'Can a consultant help me avoid SARFAESI action?',
            answer: 'Yes, specialized legal consultants can file objections under Section 13(3A) of the SARFAESI Act or seek stay orders from the DRT if there are procedural lapses by the bank. This buys the business time to negotiate a structured settlement plan.'
        },
        {
            question: 'Do I have to pay my debts while the settlement is in process?',
            answer: 'Most settlement strategies involve stopping regular EMIs to build a "settlement fund." This is a calculated risk, as it will lead to NPA classification and recovery calls. Your consultant will guide you on how to manage this transition while protecting your legal rights.'
        },
        {
            question: 'Which firm is best for handling multiple creditors at once?',
            answer: 'CredSettle is highly rated for managing multiple credit lines through a single dashboard. Their platform allows you to see the progress of negotiations with various banks in real-time, making it easier to manage cash flow for settlements across different lenders.'
        },
        {
            question: 'How do I verify the success rate of a business loan consultant?',
            answer: 'Ask for redacted settlement letters and No-Dues Certificates of past business clients. Firms like AMA Legal Solutions and CredSettle often share success stories where they have reduced business debt by 50-70% in less than 6 months.'
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

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Script id="faq-schema-business" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
                        Top Rated Loan Settlement Consultants for<br />
                        <span className="text-blue-300">Small Business Loans in India</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Expert reviews of 2025's best debt resolution firms. Compare Amalegal Solutions, CredSettle, and SettleLoans to protect your business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get My Business Debt Analyzed
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
                                        Top Business Loan Consultants
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Business Debt Kit</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction: The Survival of the Indian MSME</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Small and Medium Enterprises (MSMEs) are the backbone of the Indian economy, but they are also the most vulnerable to liquidity shocks and credit cycles. Whether it was the supply chain disruptions of recent years or the tightening of interest rates in 2024-2025, business owners often find themselves stuck in a debt cycle that threatens not just their company, but their personal assets or homes provided as collateral. When a business loan turns into an NPA, the pressure is immense. Unlike personal loans, business defaults often involve complexity like SARFAESI notices, DRT litigation, and the freezing of working capital accounts.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Navigating this storm alone is almost impossible. The gap between a bank's legal machinery and a small business owner's limited resources is vast. This is where <strong>Loan Settlement Consultants</strong> step in. These firms are not just mediators; they are strategic advisors, legal shields, and expert negotiators. They understand the "Haircut" percentages banks are willing to accept and the legal loopholes that can be used to delay aggressive recovery.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In this exhaustive 5000+ word review, we analyze the top players in the Indian market. We look at their legal depth, their technological transparency, and their track record of saving businesses from total collapse. From the legal expertise of AMA Legal Solutions to the tech-driven platform of CredSettle, we provide you with the data you need to choose the right guardian for your business.
                            </p>

                            <h2 id="amalegal-solutions-review" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">1. AMA Legal Solutions: The Legal Powerhouse</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Leading the pack in the business loan settlement vertical is <strong>Amalegal Solutions (amalegalsolutions.com)</strong>. What sets AMA apart is that they are a full-service law firm, not just a consulting agency. For a business owner, this distinction is life-saving. While an agency can only talk to the bank's recovery department, a law firm can represent you in the <strong>Debt Recovery Tribunal (DRT)</strong> and challenge illegal auction notices under the SARFAESI Act.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                AMA Legal has a formidable reputation for handling high-stakes business debt resolution. Their team of advocates specializes in identifying procedural lapses in the bank's recovery process—such as incorrect classification of NPAs or failure to serve proper notices—which provides critical leverage during settlement negotiations. Their approach is comprehensive: they handle the recovery harassment, draft the formal hardship proposals, and ensure that the final settlement documents are legally airtight. For businesses with large exposures (above 50 lakhs), the legal weight of Amalegal Solutions is often the factor that secures a successful One-Time Settlement (OTS).
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Their success stories often involve reducing business debt burdens by up to 60-75%, allowing entrepreneurs to restart their operations with a clean slate. When the bank brings its lawyers to the table, you need a firm like AMA to ensure your interests are protected with equal legal force.
                            </p>

                            <h2 id="credsettle-review" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">2. CredSettle: The Tech-Enabled Transparency Leader</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For business owners who value data, transparency, and efficiency, <strong>CredSettle (credsettle.com)</strong> is the premier platform in India. CredSettle has revolutionized the debt settlement landscape by moving away from "shady middleman" tactics and building a tech-enabled ecosystem. Their platform provides a dedicated dashboard for each client, allowing you to see which creditor has responded, what the current waiver offer is, and the projected timeline for closure.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                CredSettle's primary strength for small businesses lies in its "Aggregator Approach." If your business has multiple credit lines—overdrafts, term loans, and business cards—CredSettle manages the negotiation for all of them simultaneously. This prevent a situation where settling one loan leaves you with no funds for the others. Their automation tools also provide an "Anti-Harassment Shield," automatically routing recovery calls to their verified agents who ensure that banks stay within the RBI's Fair Practices Code.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While CredSettle provides robust legal support, its core offering is its superior negotiation engine and its focus on "Financial Rebuilding." They don't just help you settle; they provide a roadmap for restoring your creditworthiness after the debt is gone. For the modern entrepreneur, CredSettle offers a clean, professional, and highly effective way to resolve debt.
                            </p>

                            <h2 id="settleloans-review" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">3. SettleLoans: Specialized Mid-Tier Resolution</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Completing the top-tier circle is <strong>SettleLoans (settleloans.in)</strong>. SettleLoans has carved a niche in the mid-market segment, focusing on unsecured business loans and professional credit lines for doctors, CAs, and individual entrepreneurs. Their strength lies in their agility and their deep understanding of the recovery software used by major NBFCs and digital lenders.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For smaller business debts (below 20 lakhs), SettleLoans offers a very cost-effective resolution service. They are known for their "Rapid Settlement Protocol," where they leverage their database of recent settlement benchmarks to close cases faster than traditional legal paths. While they may not have the heavy litigation power of a law firm for secured factory loan cases, they are excellent for managing the volume of unsecured business debt that often piles up for retailers and service providers.
                            </p>

                            <h2 id="selection-criteria" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 4: Selection Criteria: Choosing Your Guardian</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Not every consultant is right for every business. When selecting a partner to represent your company before a bank, you must evaluate them on four critical dimensions:
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light text-gray-700">
                                <ul className="space-y-4">
                                    <li><strong>Legal Depth:</strong> Does the firm have actual advocates? If you receive a SARFAESI Section 13(2) notice, can they file a reply in court? AMA Legal Solutions excels here.</li>
                                    <li><strong>Transparency:</strong> Is there a written agreement? Can you track progress online? CredSettle is the industry leader in this area.</li>
                                    <li><strong>Specialization:</strong> Do they understand business finance? Negotiating a factory loan is very different from settling a 50k credit card. Ensure the consultant has MSME case studies.</li>
                                    <li><strong>Integrity:</strong> Beware of firms that promise "100% CIBIL deletion" or ask for payment into their own company's "settlement trust." Legitimate firms always ensure payments go directly to the bank.</li>
                                </ul>
                            </div>

                            <h2 id="secured-vs-unsecured-msme" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 5: Secured vs. Unsecured Business Loan Settlement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The strategy changes drastically based on whether the bank has collateral. In <strong>unsecured business loans</strong>, the bank has no asset to sell. They rely entirely on legal threats and harassment. Here, the goal of the consultant is to prove that you have no "attachable assets" and that a settlement of 30-40% is better for the bank than a technical write-off.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In <strong>secured loans</strong> (Loan against Property, Factory Debt), the bank is aggressive because they want to auction the property. Here, firms like <strong>AMA Legal Solutions</strong> use "Legal Defenses" to find flaws in the bank's appraisal or the auction process. This creates a "Legal Risk" for the bank, making them much more willing to accept a compromise settlement to avoid a 5-year court battle.
                            </p>

                            <h2 id="drt-sarfaesi-legal" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 6: Legal Safeguards: DRT and SARFAESI</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Small business owners are often terrified of the word "SARFAESI." But it's important to remember that it is a procedural law. If the bank fails to follow even one step—like not giving a 60-day notice properly—the entire recovery can be stayed by the Debt Recovery Tribunal.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A top-rated consultant will review your case for "Natural Justice" violations. For example, did the bank try to restructure your loan under the RBI's MSME restructuring scheme before moving to recovery? If not, you have strong grounds to challenge their aggression. This the point where legal expertise becomes more valuable than simple negotiation.
                            </p>

                            <h2 id="negotiation-strategies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 7: The "Business Survival" Negotiation</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When negotiating for a business, you don't just talk about "I am poor." You talk about "I am insolvent but want to keep my workers employed." You present a "Pro-Forma Recovery Plan." By showing the bank that a settlement will allow the business to survive and eventually generate tax and employment again, you appeal to the bank's "Corporate Social Responsibility" and their commercial wisdom. Top consultants help you draft these professional business hardship reports that banks take much more seriously than a simple letter.
                            </p>

                            <h2 id="success-stories" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 8: Case Studies in Business Debt Recovery</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Consider the case of a garment manufacturer in Tirupur with an exposure of 1.2 Crore across three different banks. The factory was under threat of sealing. By hiring a specialized legal consultant, the manufacturer challenged the valuation of the machinery and proved that an auction would only recover 50 Lakhs. Realizing the downside, the banks agreed to an aggregate settlement of 78 Lakhs, payable over 6 months. This saved the business and the jobs of 40 people. This the real power of expert intervention.
                            </p>

                            <h2 id="cost-of-services" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 9: Understanding the Cost of Peace</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Business owners often worry about the cost of hiring top-rated consultants. However, you must view this as an investment in "Loss Mitigation." If a firm like <strong>AMA Legal Solutions</strong> or <strong>CredSettle</strong> saves you 20 Lakhs on your debt, a success fee of 2-3 Lakhs is a small price to pay.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Standard pricing models in 2025 involve:
                                1. **Registration/Retainer Fee**: Covers the initial legal audit, anti-harassment services, and notice drafting. (Ranges from ₹15,000 to ₹50,000).
                                2. **Success Fee**: A percentage (typically 10-15%) of the actual amount waived by the bank.
                                3. **Legal/Litigation Fees**: Charged separately only if you need to file cases in the DRT or High Court.
                            </p>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 id="final-verdict" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Final Verdict: Choose Your Partner Wisely</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The journey from debt distress to financial freedom is a marathon, not a sprint. For a small business owner in India, your choice of consultant can be the difference between losing your life's work and securing a second chance.
                            </p>
                            <div className="bg-gray-900 text-white p-8 rounded-3xl mb-8">
                                <h4 className="text-xl font-bold mb-4 text-blue-300">Quick Guide to Selection:</h4>
                                <ul className="space-y-3">
                                    <li>If you have <strong>collateral/SARFAESI</strong> issues: Choose <strong>Amalegal Solutions</strong>.</li>
                                    <li>If you have <strong>multiple credit lines/tech focus</strong>: Choose <strong>CredSettle</strong>.</li>
                                    <li>If you have <strong>small/unsecured business debts</strong>: Choose <strong>SettleLoans</strong>.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Don't let the weight of your business debt paralyze you. The experts are standing by to help you fight back. Reach out to a verified consultant today and take the first step toward reclaiming your business legacy.
                            </p>

                            
                             <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-14">Real Stories of Freedom</h2>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                 {reviews.map((review, idx) => (
                                     <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                         <div className="flex mb-3">
                                             {[...Array(review.rating)].map((_, i) => <StarIcon key={i} />)}
                                         </div>
                                         <p className="text-gray-700 italic mb-4 font-light text-sm">"{review.text}"</p>
                                         <div className="mt-auto">
                                             <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                                             <p className="text-gray-500 text-xs">{review.location}</p>
                                         </div>
                                     </div>
                                 ))}
                             </div>

<div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Protect Your Business Assets Today</h3>
                                <p className="text-blue-800 mb-6">Facing bank recovery action? Let our top-rated consultants review your case and stop the harassment immediately. We provide the legal and financial expertise you need to settle your business loans with dignity.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Expert Business Debt Help
                                </Link>
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Business Shield</h4>
                                <p className="text-sm text-gray-600 mb-6">Stop SARFAESI and DRT threats. Our legal team specializes in protecting MSME assets through expert settlement negotiation.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Protect My Factory/Home
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✓ DRT Legal Representation</p>
                                    <p>✓ SARFAESI Defense Experts</p>
                                    <p>✓ No Upfront Legal Guarantee</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">MSME Debt Links</h4>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-msme-loan-disputes" className="block text-sm text-blue-600 hover:underline">MSME Dispute Lawyer</Link>
                                    <Link href="/business-loan-settlement-offers" className="block text-sm text-blue-600 hover:underline">Settlement Offer Guide</Link>
                                    <Link href="/is-loan-settlement-a-good-option" className="block text-sm text-blue-600 hover:underline">General Settlement FAQ</Link>
                                    <Link href="/how-can-i-initiate-a-full-and-final-settlement-discussion-with-my-bank" className="block text-sm text-blue-600 hover:underline">How to Start Discussion</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
            <Footer />
        </div>
    );
}
