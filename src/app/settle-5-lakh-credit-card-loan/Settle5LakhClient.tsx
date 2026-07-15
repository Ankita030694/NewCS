'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const StarIcon = () => (
    <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

export default function Settle5LakhClient() {
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
        { id: 'anatomy-of-default', label: 'Anatomy of Default' },
        { id: 'compounding-interest', label: 'Compounding Interest' },
        { id: 'collection-cycle', label: 'Collection Cycle' },
        { id: 'month-1-to-3', label: 'Month 1 to 3' },
        { id: 'month-4-to-6', label: 'Month 4 to 6' },
        { id: 'hardship-strategy', label: 'Hardship Strategy' },
        { id: 'repayment-capacity', label: 'Repayment Capacity' },
        { id: 'dialogue-before-charge-off', label: 'Early Dialogue' },
        { id: 'executing-negotiation', label: 'Executing Negotiation' },
        { id: 'principal-vs-interest', label: 'Principal vs Interest' },
        { id: 'securing-agreement', label: 'Securing Agreement' },
        { id: 'cibil-score-aftermath', label: 'CIBIL Aftermath' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'reviews', label: 'Real Stories' },
    ];

    const reviews = [
        {
            name: "Manish R.",
            location: "Delhi",
            rating: 5,
            text: "I was buried under a 5 Lakh card debt and was getting completely overwhelmed. Following these steps helped me negotiate an affordable closure without legal trouble."
        },
        {
            name: "Sonia P.",
            location: "Mumbai",
            rating: 5,
            text: "Understanding the collection cycle changes everything. I knew exactly when they would be ready to accept a lower sum. It literally saved me over two lakhs."
        },
        {
            name: "Arvind K.",
            location: "Chennai",
            rating: 5,
            text: "The advice on prioritizing principal waivers over interest was completely counter intuitive but absolutely correct. An eye opener for anyone struggling with unsecured debt."
        }
    ];

    const faqs = [
        {
            question: 'What is the absolute minimum amount a bank will accept to settle a 5 Lakh credit card debt?',
            answer: 'Banks do not have a fixed absolute minimum. The accepted amount depends on how old the default is and your documented hardship. Typically, older accounts nearing the 6 month mark might see settlements ranging between 30% and 50% of the total outstanding, but this varies wildly by issuer.'
        },
        {
            question: 'Will a 5 Lakh credit card settlement lead to a police case?',
            answer: 'No. Defaulting on a credit card is a civil issue, not a criminal one. Unless there is proven identity theft or deliberate, systemic fraud at the time of application, a simple inability to pay due to financial hardship cannot result in a police FIR.'
        },
        {
            question: 'Can I get another credit card immediately after settling this debt?',
            answer: 'It is highly unlikely. A settled status drastically reduces your CIBIL score. You will need to spend at least 12 to 24 months rebuilding your credit profile using secured cards before prime lenders will consider you for a new unsecured credit card.'
        },
        {
            question: 'How long does a 5 Lakh settlement stay on my CIBIL report?',
            answer: 'The settled status will remain on your CIBIL report for 7 years from the date of the last reported update by the lender. While the impact lessens over time, the remark is permanent for that duration.'
        },
        {
            question: 'Should I hire a lawyer to negotiate my credit card settlement?',
            answer: 'For a 5 Lakh debt, it can be extremely beneficial. A legal professional ensures that the bank issues a legally binding No Dues Certificate and protects you against harassment from third party agents during the negotiation phase.'
        },
        {
            question: 'Are digital apps safer than banks for negotiating settlements?',
            answer: 'Not necessarily. While some digital platforms offer legitimate advisory services, you must always ensure that the final payment goes directly into your official bank loan account, not a third party wallet or UPI id.'
        },
        {
            question: 'What happens if I stop paying completely and ignore the bank?',
            answer: 'Ignoring the bank will lead to severe compound interest, harassment from recovery agents, and eventually, the bank may initiate civil litigation or arbitration to recover the amount, which could freeze your bank accounts or result in salary garnishment.'
        }
    ];

    return (
        <>
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
                        How to Successfully Negotiate and<br />
                        <span className="text-blue-300">Settle a 5 Lakh Credit Card Loan</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        A detailed, step by step strategy to resolve high balance credit card defaults, stop harassment, and secure a legally binding settlement in India.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Legal Settlement Assistance
                        </Link>
                    </div>
                </div>
            </section>

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
                                        Settle 5 Lakh Credit Card Loan
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="max-w-8xl mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Strategy Map</h3>
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

                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">

                            <h2 id="anatomy-of-default" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Anatomy of a ₹5 Lakh Credit Card Default</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Credit card debts compound aggressively; a ₹5 Lakh balance can easily balloon to over ₹7 Lakhs within just six months due to compounding interest rates averaging 36% to 42% annually alongside exorbitant late payment penalties. Unlike term loans, credit card debt is a revolving unsecured line, meaning issuers operate with much shorter tolerance thresholds before assigning your account to aggressive third-party collection agencies. The moment you miss your first payment, a very precise mathematical and psychological machine is set into motion by the lender.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Understanding this anatomy is crucial for survival. When you default on a personal loan, the bank has a fixed EMI schedule to reference. With a credit card, the balance is a moving target. Every passing month without a payment triggers not just late fees, but overlimit fees, GST on those fees, and interest applied not just to the principal, but to the previously accumulated interest. This compounding effect is what makes a 5 Lakh card debt significantly more dangerous than a 5 Lakh personal loan. Borrowers often try to pay just the <Link href="/what-is-minimum-amount-due-for-credit-card" className="text-blue-600 underline">minimum amount due</Link>, but when the principal is this high, the minimum payment barely covers the new interest, leaving the core debt completely untouched.
                            </p>

                            <h3 id="compounding-interest" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-14">How Compounding Interest Inflates the Balance</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Let us look at a stark reality. If you owe 5 Lakhs on a premium credit card and stop making payments, the math works relentlessly against you. At an average annual percentage rate of 40%, the monthly interest is roughly 3.33%. In the first month of default, you are hit with 16,650 rupees in interest, plus a late payment fee of around 1,000 rupees, plus 18% GST on all charges. Your balance instantly jumps to nearly 5.2 Lakhs.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light">
                                <h4 className="font-bold text-lg mb-4">The 6 Month Cost Breakdown (Approximate)</h4>
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Month 1:</strong> Principal ₹5,00,000. Interest + Fees + GST ≈ ₹20,000. New Balance: ₹5,20,000.</li>
                                    <li><strong>Month 2:</strong> Interest calculated on ₹5,20,000. Total added ≈ ₹21,000. New Balance: ₹5,41,000.</li>
                                    <li><strong>Month 3:</strong> Card is blocked, but charges continue. Total added ≈ ₹22,000. New Balance: ₹5,63,000.</li>
                                    <li><strong>Month 6:</strong> After half a year of compounding, the total balance frequently exceeds ₹6,50,000.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This aggressive inflation is exactly why you cannot simply wait and hope the problem disappears. The longer you wait, the larger the target the bank has for legal recovery. Understanding this math is the first step in realizing that a fast, strategic settlement is your best defense against an escalating financial disaster.
                            </p>

                            <h2 id="collection-cycle" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Recognizing the Credit Card Debt Collection Cycle</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Lenders do not behave randomly. They follow a highly structured, data driven collection matrix. Knowing exactly where you are in this cycle gives you a massive advantage when it comes to negotiating a settlement. If you try to negotiate a steep discount in week two, you will be rejected. If you wait until month eight, you might face a legal notice. Timing is everything. Let us break down exactly what happens and when.
                            </p>

                            <h3 id="month-1-to-3" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-14">Month 1 to 3: Internal Recovery Tactics</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The first ninety days are handled directly by the banks internal telecalling teams. Their primary goal is "cure rate", getting the account back to a current status by forcing you to pay the minimum due.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                During this phase, you will receive dozens of calls daily. The tone will shift from polite reminders in week one to stern warnings by week eight. You will receive automated SMS alerts and emails threatening that your CIBIL score will be ruined. The bank is not interested in settling during this period. They believe you have a temporary cash flow problem and they want you to borrow from friends or family to clear the immediate dues. If you have a specific bank, like ICICI, understanding an <Link href="/icici-credit-card-settlement" className="text-blue-600 underline">ICICI credit card settlement</Link> process requires knowing that they are particularly aggressive in these first 90 days.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This is also the period where your credit card privileges are permanently suspended. Once you cross the 60 day mark without payment, the card is hotlisted, and the bank registers a major negative marker on your credit report. It is vital to stay calm here. Do not make a tiny, token payment of 2000 rupees. A token payment resets the delinquency clock, meaning the bank will just restart the 90 day cycle of internal pressure instead of moving your file to the settlement queue.
                            </p>

                            <h3 id="month-4-to-6" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-14">Month 4 to 6: Third-Party Agency Assignment</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When an account crosses 90 days past due, it is classified as a Non Performing Asset (NPA). The bank realizes that internal calls are not working. The account is now handed over to external, third party recovery agencies. This is when the real pressure begins, and ironically, it is also when the window for a profitable settlement opens.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Third party agents operate on commissions. They get a percentage of whatever they recover from you. Their tactics will be significantly more aggressive than the bank employees. They may threaten to visit your office or home. They might use intimidation tactics, falsely claiming they have a police warrant. This period is psychologically grueling, but it is precisely because they are commissioned that they are open to negotiating a lump sum. The bank has already written down the value of your debt on their books, and they are now willing to accept a loss to recover at least some capital.
                            </p>

                            <h2 id="hardship-strategy" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Preparing Your Hardship Settlement Strategy</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                You cannot just call the bank and say, "I want to settle." A successful settlement requires building a compelling case of financial hardship. The bank needs to believe that if they do not take your offer now, they will never see a single rupee. You must present yourself as a borrower who wants to pay but mathematically cannot.
                            </p>

                            <h3 id="repayment-capacity" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-14">Assessing True Repayment Capacity</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Before you open dialogue, you need to know exactly how much cash you can access. A settlement is usually a lump sum payment. If you owe 5 Lakhs, and the bank eventually agrees to settle for 2 Lakhs, you need to have that 2 Lakhs ready within a few days of the agreement. If you negotiate a deal and then fail to pay, the bank will cancel the offer, add all the waived penalties back to your account, and refuse to negotiate with you for months.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Audit your liquid assets. Can you break a fixed deposit? Can you borrow a lump sum from a trusted family member? Do you have provident fund savings you can withdraw? Calculate your absolute maximum limit. Let us say your limit is 2.2 Lakhs. Your opening offer to the bank should be around 1.5 Lakhs, giving you room to negotiate upward without crossing your breaking point.
                            </p>

                            <h3 id="dialogue-before-charge-off" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-14">Initiating Dialogue Before Charge-Off</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The best time to strike is usually between day 120 and day 180 of default. By this time, the debt is heavily provisioned by the bank, but it has not yet been sold completely to an Asset Reconstruction Company (ARC). Write a formal email to the banks nodal officer and the credit card grievance redressal department.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                State your case clearly. Outline your financial hardship. Did you lose your job? Did you have a major medical emergency? Attach proof. A termination letter or a hospital bill speaks volumes. State that you have arranged a small sum from relatives and you wish to offer it as a full and final settlement. Keep the tone professional but firm. You are not begging; you are offering a business solution to a bad debt.
                            </p>

                            <h2 id="executing-negotiation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Executing the ₹5 Lakh Settlement Negotiation</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Negotiation is an art, especially when dealing with trained recovery managers. They will employ tactics to make you feel guilty, they will use silence to make you nervous, and they will always reject your first offer. Your job is to stay entirely unemotional and stick to your numbers.
                            </p>

                            <h3 id="principal-vs-interest" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-14">Pushing for Principal Waivers vs Interest Waivers</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A critical mistake borrowers make is accepting a deal that only waives the penalty fees. Remember, your 5 Lakh balance has probably grown to 6.5 Lakhs due to interest and penalties. If the bank says, "We will waive all penalties, just pay the original 5 Lakhs," that is NOT a good settlement for a defaulted credit card.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A true <Link href="/credit-card-settlement" className="text-blue-600 underline">credit card settlement</Link> involves a haircut on the principal amount as well. You must insist that your hardship is so severe that even the original principal is unpayable. A strong negotiator will aim to settle a 5 Lakh card for anywhere between 1.75 Lakhs to 2.5 Lakhs, depending on the age of the debt and the specific bank policies. Always focus the conversation on the lump sum amount you have in hand, ignoring their breakdown of what is principal and what is interest. Tell them, "I have exactly 2 Lakhs today. Take it and close the account, or I will have to use it for my medical bills."
                            </p>

                            <h3 id="securing-agreement" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-14">Securing the Written Settlement Agreement</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This is where scams and miscommunications ruin lives. Never, ever make a payment based on a phone call or a WhatsApp message. You must receive a formal "Settlement Offer Letter" or "One Time Settlement (OTS)" letter from the banks official email domain.
                            </p>
                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 mb-6 font-light">
                                <h4 className="font-bold text-lg mb-4">Before vs After The Agreement</h4>
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Before Payment:</strong> Ensure the letter has your correct 16 digit card number, your exact name, and explicitly states the final amount as "Full and Final Settlement."</li>
                                    <li><strong>Before Payment:</strong> Ensure the letter mentions that upon receipt of the funds, the bank will issue a No Dues Certificate and update the credit bureaus.</li>
                                    <li><strong>After Payment:</strong> The bank must reflect a zero balance. If the letter only says "partial payment receipt," the bank can still come after you for the rest.</li>
                                    <li><strong>After Payment:</strong> Do not pay via cash to an agent. Pay only directly to your 16 digit card number via NEFT or RTGS.</li>
                                </ul>
                            </div>

                            <h2 id="cibil-score-aftermath" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The CIBIL Score Aftermath and Rebuilding</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Completing the payment is a massive relief, but it leaves a scar. Your CIBIL report will show this account as "Settled" rather than "Closed." This is a significant negative marker. It tells future lenders that while you resolved the debt, you did not pay back everything you borrowed. For a large amount like 5 Lakhs, this marker is highly visible.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Rebuilding takes time. For the first 12 months post settlement, you will likely be rejected for unsecured loans and premium credit cards. The most effective way to rebuild is to open a fixed deposit based secured credit card. Use it for small grocery purchases and pay the bill in full, two days before the due date, every single month. This injects fresh, positive payment data into your CIBIL file, slowly diluting the impact of the settled account. After 24 to 36 months of flawless behavior, prime lenders will begin to consider your applications again, realizing that your past default was a temporary anomaly rather than a permanent character trait.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A 5 Lakh credit card debt is a heavy burden, but it is not the end of your financial life. By understanding the math, recognizing the collection phases, and negotiating with a firm strategy, you can cut your losses, stop the harassment, and begin the journey back to financial stability. Always prioritize a legally binding paper trail and never yield to pressure tactics from commissioned agents.
                            </p>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Frequently Asked Questions</h2>
                            <div className="space-y-6 mb-12">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-14">Real Stories</h2>
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

                        </article>
                    </main>

                    <aside className="lg:w-1/4 xl:w-1/5 w-full mt-8 lg:mt-0">
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-md sticky top-14">
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
                                    alt="Vikram Sharma - Legal Expert"
                                    className="w-24 h-24 rounded-full border-4 border-blue-50 mb-4 object-cover"
                                />
                                <h3 className="text-xl font-bold text-gray-900 mb-1">Vikram Sharma</h3>
                                <p className="text-sm text-blue-600 font-medium mb-4">Legal Resolution Expert</p>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">
                                    Specializing in high value debt negotiation and borrower rights protection under the Indian legal framework.
                                </p>
                                <Link
                                    href="/contact"
                                    className="w-full bg-gray-900 text-white py-3 px-4 rounded-xl font-medium hover:bg-gray-800 transition-colors text-sm"
                                >
                                    Request Consultation
                                </Link>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
