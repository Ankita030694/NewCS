'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function FrozenAccountClient() {
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
        { id: 'shock-of-frozen-account', label: 'The Shock of a Frozen Salary Account' },
        { id: 'bankers-right-of-lien', label: 'Understanding the Bankers Right of Lien' },
        { id: 'protect-future-income', label: 'Immediate Steps to Protect Income' },
        { id: 'unfreeze-bank-account', label: 'How to Unfreeze Your Account' },
        { id: 'success-story', label: 'Success Story' },
        { id: 'faqs', label: 'Frequently Asked Questions' },
    ];

    const faqs = [
        {
            question: "Can a bank freeze my salary account without a court order?",
            answer: "Yes, if you have a loan with the same bank where you receive your salary, they can invoke the Banker's Right of Lien (Right of Set-Off) to recover the outstanding EMIs without requiring a court order."
        },
        {
            question: "Is it legal for the bank to deduct my entire salary for a loan default?",
            answer: "While banks have the right to set-off, RBI guidelines mandate that borrowers must be left with a minimum subsistence amount to survive. Completely draining an account and leaving zero balance is often considered an unfair banking practice that can be challenged."
        },
        {
            question: "How can I stop the auto debit for my personal loan?",
            answer: "You can formally submit a revocation letter to your bank branch to cancel the NACH or standing instruction. However, if the salary account is with the same lending bank, simply cancelling NACH might not stop them from using their Right of Lien."
        },
        {
            question: "What is the fastest way to protect my future income from being frozen?",
            answer: "The fastest and most effective step is to request your HR department to change your salary credit to a completely different, unaffiliated bank where you do not hold any active loans or credit cards."
        },
        {
            question: "Can I complain to the RBI Ombudsman if my account is frozen?",
            answer: "Yes, if the bank freezes your account without prior notice or deducts funds beyond the agreed EMI amount without providing you a minimum living allowance, you can file a grievance with the RBI Banking Ombudsman for unfair practices."
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
                        Salary Account Frozen by Bank<br />
                        <span className="text-blue-300">How to Protect Your Income</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Stop illegal auto debits and force the bank to release your funds. Learn your rights against the Banker's Right of Lien.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Immediate Legal Help
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
                                        Salary Account Frozen by Bank
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
                            
                            <p className="text-gray-700 leading-relaxed mb-6 font-bold text-xl">
                                Waking up on payday to find your entire salary auto debited or your account completely frozen by your bank is a terrifying reality for many borrowers in default. While banks frequently weaponize the Banker's Right of Lien to aggressively recover personal loan arrears, you have legal rights. Discover how to immediately protect your future income, stop illegal auto debits, and force the bank to unfreeze the funds you need to survive.
                            </p>

                            <h2 id="shock-of-frozen-account" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">The Shock of a Frozen Salary Account</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The financial ecosystem is designed to prioritize the recovery of debt above all else. When a borrower faces temporary financial hardship and misses a few Equated Monthly Installments (EMIs) on a personal loan or credit card, the lending institution does not merely wait patiently. If you have made the strategic error of maintaining your primary salary account with the exact same banking institution that issued your loan, you are sitting on a ticking financial time bomb. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                On the very morning your employer credits your hard earned salary, you might receive a sterile automated SMS notifying you of a massive debit. You log into your mobile banking application only to discover a balance of zero, or worse, a negative balance indicating that the account has been completely frozen. You cannot buy groceries, you cannot pay your rent, and you cannot fund emergency medical expenses. This catastrophic event is the deployment of a legal mechanism known as the Banker's Right of Lien, and it is the most aggressive tool in a bank's recovery arsenal.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The psychological impact of having your livelihood unilaterally confiscated is profound. Borrowers often experience severe panic and depression, feeling entirely powerless against a massive financial institution. However, this feeling of powerlessness is exactly what the bank relies upon. By understanding the legal boundaries of a bank's authority and deploying rapid counter measures, you can halt these predatory deductions and reclaim control over your finances. This guide will provide a detailed blueprint on how to navigate a frozen salary account, explaining the nuances of stopping auto debits and forcing a negotiated release of your funds.
                            </p>

                            <h2 id="bankers-right-of-lien" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Understanding the Bankers Right of Lien</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To fight back effectively, you must first understand the legal weapon being used against you. The Banker's Right of Lien, often referred to interchangeably as the Right of Set Off in practical banking terms, is a statutory right granted to banks under the Indian Contract Act. This principle allows a bank to retain the funds or assets of a customer to recover a debt owed by that same customer to the bank.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Essentially, if you owe Bank A fifty thousand rupees for a defaulted credit card, and you simultaneously have one lakh rupees sitting in a savings account with Bank A, the bank has the legal right to unilaterally transfer fifty thousand rupees from your savings account to clear the credit card debt. They do not need to ask for your permission, they do not need to wait for a court order, and they do not need to send you a polite request. They simply execute the transfer internally.
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Is it Legal to Auto Debit My Entire Salary?</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This is the critical question where the legal framework becomes nuanced. While the Right of Set Off is a recognized legal principle, it is not an absolute, unchecked power. The application of this right must comply with the overarching guidelines established by the Reserve Bank of India (RBI) and basic principles of equity. 
                            </p>

                            {/* Data Callout Section Type */}
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200 mb-8 mt-6">
                                <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    RBI Guidelines on Subsistence Allowances
                                </h4>
                                <ul className="space-y-4 text-blue-800">
                                    <li className="flex justify-between border-b border-blue-200 pb-2">
                                        <span className="font-semibold">Minimum Living Expenses:</span>
                                        <span>Courts have repeatedly ruled that a debtor must not be deprived of the basic means to survive.</span>
                                    </li>
                                    <li className="flex justify-between border-b border-blue-200 pb-2">
                                        <span className="font-semibold">Notice Requirement:</span>
                                        <span>Banks should ideally provide reasonable prior notice before invoking the Right of Set Off, though this is frequently ignored in practice.</span>
                                    </li>
                                    <li className="flex justify-between border-b border-blue-200 pb-2">
                                        <span className="font-semibold">Unfair Banking Practices:</span>
                                        <span>Wiping an account to absolute zero on the day a salary is credited violates the spirit of fair recovery policies.</span>
                                    </li>
                                </ul>
                                <p className="mt-4 text-sm text-blue-700 italic">
                                    If a bank deducts 100 percent of your salary, leaving you destitute, this constitutes an unfair practice. You have the right to challenge this disproportionate deduction through the RBI Banking Ombudsman mechanism.
                                </p>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                Despite these legal nuances, branch managers frequently operate on aggressive monthly targets. They often instruct their systems to auto debit any incoming funds until the overdue amount, including exorbitant penal interest and late fees, is completely satisfied. They operate on the assumption that the average borrower is ignorant of their rights and will simply accept the financial wipeout.
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">How "Right of Set-Off" Ruins Your Finances</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The destruction caused by an unchecked Right of Set Off cascades rapidly. First, it causes a severe liquidity crisis. Without your salary, you will inevitably default on your rent, your utility bills, and potentially your children's school fees. Second, it causes a domino effect on your other debt obligations. If your salary account is drained, the NACH mandates (National Automated Clearing House mandates) you have set up for loans with other banks will systematically bounce. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Every time a NACH mandate bounces, the originating bank charges a penalty, and the destination bank charges a bounce fee. Furthermore, each bounce is meticulously reported to the CIBIL bureau, accelerating the destruction of your credit score. Therefore, a freeze initiated by one bank quickly triggers defaults across your entire financial portfolio, creating a catastrophic debt spiral that is incredibly difficult to escape. If you want to know <Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="text-blue-600 hover:underline">what is loan settlement and how does it work in India</Link>, you must first stabilize your incoming cash flow.
                            </p>

                            <h2 id="protect-future-income" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Immediate Steps to Protect Your Future Income</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When dealing with a hostile lending institution, speed is your primary advantage. You cannot afford to wait and hope that the bank will act benevolently next month. You must take immediate, decisive action to firewall your future income from their automated recovery systems.
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Changing Your Salary Account Immediately</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This is the single most important piece of advice in this entire guide. If your salary account is held with the bank where you have defaulted, you must change it immediately. You cannot negotiate from a position of weakness where the bank physically controls your cash.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Approach your HR department or payroll administrator the very same day. Request them to update your salary credit details to an account held in a completely unaffiliated banking institution. This new bank should be one where you have absolutely zero credit cards, zero personal loans, and zero outstanding debt. By routing your salary to a neutral third party bank, you instantly neutralize the lending bank's Right of Lien. They cannot reach across institutional boundaries to freeze an account in a different bank without a highly specific court order, which is rarely pursued for unsecured retail loans.
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">How to Stop Auto Debit for Personal Loans</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In addition to changing your salary account, you must systematically dismantle the automated debit instructions that allow the bank to pull funds. Even if you change your salary account, old NACH mandates might still trigger bounce fees on the old account, pushing it further into a negative balance.
                            </p>

                            {/* Step Checklist Section Type */}
                            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm mb-8 mt-6">
                                <h4 className="font-bold text-xl text-gray-900 mb-4">Steps to Revoke NACH and Auto Debits</h4>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold mr-4">1</div>
                                        <p className="text-gray-700 pt-1"><strong>Submit a Written Revocation:</strong> Visit your bank branch in person and submit a formally drafted letter requesting the immediate cancellation of all NACH mandates, ECS instructions, and Standing Instructions linked to the loan account.</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold mr-4">2</div>
                                        <p className="text-gray-700 pt-1"><strong>Obtain a Stamped Acknowledgment:</strong> Do not just hand the letter to a clerk and leave. Demand a stamped and signed acknowledgment copy of your request. This piece of paper is your legal proof of revocation.</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold mr-4">3</div>
                                        <p className="text-gray-700 pt-1"><strong>Email the Nodal Officer:</strong> Send a digital copy of the stamped request to the bank's Nodal Officer and the customer grievance cell. State clearly that any further auto debit attempts will be considered unauthorized.</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold mr-4">4</div>
                                        <p className="text-gray-700 pt-1"><strong>Disable Online Mandates:</strong> Log into your net banking portal and actively delete any biller registrations or auto pay mandates configured for the loan account.</p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                It is vital to understand that revoking a NACH mandate does not erase your legal obligation to repay the debt. You still owe the money. However, revoking the mandate prevents the bank from causing a cascade of expensive bounce charges and forces them to negotiate rather than relying on automated extraction.
                            </p>

                            <h2 id="unfreeze-bank-account" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">How to Unfreeze Your Bank Account After a Loan Default</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If your account has already been frozen and your funds are trapped, you must initiate a structured negotiation process. The bank holds the leverage because they possess your money, but they are also bound by regulatory compliance. You must demonstrate that their aggressive freeze is jeopardizing your basic survival.
                            </p>

                            {/* Comparison Table Section Type */}
                            <div className="overflow-x-auto mb-8 mt-6">
                                <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="py-4 px-6 text-left text-sm font-bold text-gray-900 border-b">Banking Practice</th>
                                            <th className="py-4 px-6 text-left text-sm font-bold text-green-700 border-b">Legal Application of Lien</th>
                                            <th className="py-4 px-6 text-left text-sm font-bold text-red-700 border-b">Illegal or Unfair Practice</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="py-4 px-6 text-sm text-gray-700 font-medium">Notification</td>
                                            <td className="py-4 px-6 text-sm text-gray-600">Bank provides formal written notice invoking the Right of Set Off prior to debiting funds.</td>
                                            <td className="py-4 px-6 text-sm text-gray-600">Bank debits funds silently without any prior warning or explanation.</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="py-4 px-6 text-sm text-gray-700 font-medium">Amount Debited</td>
                                            <td className="py-4 px-6 text-sm text-gray-600">Deducting the exact EMI amount owed while leaving sufficient funds for survival.</td>
                                            <td className="py-4 px-6 text-sm text-gray-600">Draining the entire account to zero, depriving the borrower of basic subsistence.</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="py-4 px-6 text-sm text-gray-700 font-medium">Account Status</td>
                                            <td className="py-4 px-6 text-sm text-gray-600">Executing a specific transfer transaction for the owed amount.</td>
                                            <td className="py-4 px-6 text-sm text-gray-600">Placing a blanket debit freeze on the entire account, blocking all outgoing transactions indefinitely.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Negotiating a Partial Release of Funds</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Your first step is to visit the branch manager and present a formal request for a partial release of funds. You must clearly articulate that the frozen amount includes your livelihood. Provide documentation of your essential monthly expenses, such as rent agreements, utility bills, and medical prescriptions. Propose a pragmatic compromise: offer to allow the bank to retain the exact EMI amount that is overdue, provided they immediately unfreeze the remaining balance so you can survive the month.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Most reasonable branch managers will accept this compromise because they want the NPA account to show a recovery entry, and they want to avoid regulatory complaints. If they agree, ensure the unfreezing is processed immediately before you leave the branch.
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Legal Action and RBI Ombudsman Complaints</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If the branch manager is hostile and refuses to release any funds, stating that the system has blocked it automatically, you must escalate the matter aggressively. Draft a strongly worded email to the Principal Nodal Officer of the bank. Explicitly state that the bank's unilateral freezing of your entire salary violates the principles of natural justice and deprives you of your constitutional right to livelihood.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Give the bank a strict 48 hour deadline to respond. If they fail to unfreeze the subsistence amount, immediately file a formal grievance on the Reserve Bank of India's CMS (Complaint Management System) portal. The RBI takes a very dim view of banks executing total financial paralysis on retail borrowers without court orders. Often, the mere filing of an RBI Ombudsman complaint will force the bank's central compliance team to override the local branch and release your funds. This is a critical component of <Link href="/loan-default-recovery-freeze-defense" className="text-blue-600 hover:underline">loan default recovery freeze defense</Link>.
                            </p>

                            <h2 id="success-story" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Success Story: Reclaiming a Frozen Livelihood</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Consider the situation of an IT professional in Pune. He lost his job during corporate downsizing and subsequently defaulted on three personal loan EMIs totaling INR 60,000. When he finally secured a new job three months later, his very first salary credit of INR 85,000 was instantly swallowed by the lending bank where his account was held. The bank claimed the Right of Lien and froze the account, leaving him with zero rupees to pay his accumulated rent and grocery bills.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The borrower was desperate and contacted our legal team. We immediately drafted a legal notice challenging the disproportionate execution of the lien. We cited RBI circulars emphasizing that recovery mechanisms cannot circumvent the borrower's basic right to survival. Simultaneously, we lodged an escalated complaint with the bank's grievance cell, threatening to escalate to the Banking Ombudsman if a minimum living allowance was not released.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Recognizing the regulatory vulnerability of their aggressive action, the bank's legal department intervened within 24 hours. They agreed to retain the INR 60,000 to clear the overdue EMIs and immediately unfroze the remaining INR 25,000, allowing the borrower to survive. Furthermore, we advised the borrower to immediately change his salary account for the next month to prevent a recurrence, allowing him the breathing room to eventually explore <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="text-blue-600 hover:underline">how to improve CIBIL score after loan settlement</Link> in the future.
                            </p>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related Expertise (NO AUTHOR BIO) */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20">
                        <div className="space-y-6">
                            {/* CTA Card Widget */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                                <h4 className="font-bold text-2xl text-gray-900 mb-2">Trapped in Debt?</h4>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Stop paying high interest and start negotiating. We protect your rights.
                                </p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-[#1e40af] text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-800 transition-colors shadow-md text-center text-lg mb-6"
                                >
                                    Get Legal Help
                                </Link>
                                <div className="space-y-2 text-sm text-gray-600 text-left w-fit mx-auto">
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-gray-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        Stop Harassment Calls
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-gray-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        Save up to 50% on Debt
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-gray-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        Get Official NOC
                                    </div>
                                </div>
                            </div>

                            {/* Related Expertise */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-xl text-gray-900 mb-4 border-b border-gray-800 pb-2 inline-block w-full">Related Expertise</h4>
                                <nav className="space-y-4 mt-2">
                                    <Link href="/best-lawyer-for-bank-loan-recovery-defence" className="block text-[#3b82f6] hover:underline text-lg">Bank Recovery Defence</Link>
                                    <Link href="/best-lawyer-for-drt-case-defence-for-bank-loan-recovery" className="block text-[#3b82f6] hover:underline text-lg">DRT Specialization</Link>
                                    <Link href="/what-is-the-best-way-to-negotiate-loan-settlement" className="block text-[#3b82f6] hover:underline text-lg">Settlement Strategies</Link>
                                    <Link href="/best-lawyer-for-MSME-loan-recovery-defence" className="block text-[#3b82f6] hover:underline text-lg">MSME Loan Defence</Link>
                                </nav>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}
