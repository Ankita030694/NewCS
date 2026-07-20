'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function DrtJurisdictionClient() {
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
        { id: 'introduction', label: 'The Empty Threat of DRT Action' },
        { id: 'exact-jurisdiction-limit', label: 'Exact DRT Jurisdiction Limit' },
        { id: 'can-bank-sue-5-lakh', label: 'Can Bank Sue for 5 Lakhs?' },
        { id: 'civil-vs-drt', label: 'Civil Court vs. DRT' },
        { id: 'drt-rules-2026', label: 'DRT Rules 2026 Updates' },
        { id: 'why-government-raised', label: 'Why the Limit Was Raised' },
        { id: 'respond-fake-notices', label: 'Respond to Fake Notices' },
        { id: 'real-consequences', label: 'Real Consequences Below 20L' },
        { id: 'case-studies', label: 'Exposing Recovery Bluffs' },
        { id: 'faqs', label: 'Frequently Asked Questions' },
        { id: 'conclusion', label: 'Do Not Let Fear Dictate' },
    ];

    const faqs = [
        {
            question: 'What is the minimum amount required to file a case in the DRT?',
            answer: 'The minimum pecuniary jurisdiction for the Debt Recovery Tribunal (DRT) is Rs. 20 Lakhs. Any default below this amount cannot be entertained by the tribunal.'
        },
        {
            question: 'Can a bank go to DRT for a 5 Lakh personal loan default?',
            answer: 'No. Because 5 Lakhs is well below the statutory minimum limit of 20 Lakhs, the bank is legally barred from filing a recovery suit in the DRT for this amount.'
        },
        {
            question: 'Why do recovery agents threaten DRT action for small loans?',
            answer: 'Recovery agents use the term DRT purely as a psychological scare tactic. They know most borrowers are unaware of the 20 Lakh limit and use the fear of severe tribunal action to force immediate payments.'
        },
        {
            question: 'Where do banks file cases for loans under 20 Lakhs?',
            answer: 'For amounts under 20 Lakhs, banks must file a standard recovery suit in a regular civil court, or they may refer the matter to the Lok Adalat for an amicable settlement.'
        },
        {
            question: 'Is a legal notice mentioning DRT for a 3 Lakh loan fake?',
            answer: 'Yes, if the legal notice explicitly threatens to file a case in the DRT for a 3 Lakh default, it is a legally unsound bluff. Such notices are often generated in bulk by collection agencies.'
        },
        {
            question: 'Did the government recently change the DRT jurisdiction rules?',
            answer: 'Yes, the Central Government raised the minimum limit from 10 Lakhs to 20 Lakhs through a notification, primarily to reduce the massive backlog of small cases burdening the tribunals.'
        },
        {
            question: 'Can multiple small loans be clubbed together to reach the 20 Lakh DRT limit?',
            answer: 'Only if multiple loans were taken by the exact same borrower from the exact same bank and the bank chooses to file a single consolidated recovery suit. Otherwise, individual small loans cannot be clubbed.'
        }
    ];

    const reviews = [
        {
            name: 'Rohit Verma',
            location: 'Bangalore',
            stars: 5,
            comment: 'I was shaking with fear when a recovery agent showed me a fake legal notice claiming my 4 Lakh credit card default was being sent to the DRT. CredSettle explained the 20 Lakh limit rule and helped me file a harassment complaint. The calls stopped immediately.'
        },
        {
            name: 'Priya Nair',
            location: 'Chennai',
            stars: 5,
            comment: 'An agent threatened me that my property would be seized through the DRT for a 7 Lakh personal loan. Once I learned that the DRT jurisdiction is 20 Lakhs, I called their bluff. We then negotiated a fair settlement without any tribunal pressure.'
        },
        {
            name: 'Sandeep Singh',
            location: 'Chandigarh',
            stars: 5,
            comment: 'The bank sent a legal notice stating a DRT suit was already filed for my 12 Lakh business loan. My lawyer verified it was impossible due to the new 2026 pecuniary limits. Armed with this knowledge, I settled the debt on my terms.'
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
                        DRT Jurisdiction Limit India:<br />
                        <span className="text-blue-300">Exposing the 5 Lakh Recovery Bluff</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Are bank agents threatening you with Debt Recovery Tribunal action for a small personal loan? Learn the exact legal minimum limits and how to defend against fake legal notices.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Verify Your Legal Notice Today
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
                                        DRT Jurisdiction Limit and Minimum Amounts
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
                            
                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Introduction: The Empty Threat of DRT Action</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One of the most common psychological tactics used by aggressive recovery agents is threatening a terrified borrower with an immediate lawsuit in the Debt Recovery Tribunal (DRT). When you default on a personal loan, credit card, or small business loan, the collection calls begin. Very soon, the tone of these calls escalates. The agent might scream over the phone, claiming that a DRT case has already been filed against your name and that tribunal officers will arrive at your house by evening to seize your furniture and lock your doors. For an ordinary citizen unaware of complex banking laws, this sounds like an impending catastrophe. The fear of being dragged into a powerful government tribunal is often enough to make borrowers borrow more money from loan sharks just to pay off the bank. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                However, if your outstanding loan is for 5 Lakhs, 10 Lakhs, or even 15 Lakhs, this threat is a complete legal fabrication. The Indian legal system strictly mandates a minimum pecuniary threshold for the Debt Recovery Tribunal. The DRT is a highly specialized, fast track quasi judicial body designed to help banks recover massive corporate debts and large scale defaults. It was never designed to hear cases regarding a defaulted smartphone EMI or a missed credit card payment. Banks absolutely cannot bypass this minimum statutory limit just to scare you. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This guide is dedicated to exposing the massive banking bluff regarding DRT jurisdiction limits. We will explore exactly what the law states, how recent government amendments have further protected small borrowers, and how you can definitively call out a recovery agent who is lying to you about impending tribunal action. Knowledge is your strongest shield against harassment. Once you understand the limits of a bank's legal power, you can negotiate your loan settlement from a position of profound strength and complete peace of mind.
                            </p>

                            <div className="bg-red-50 p-8 rounded-3xl border border-red-200 mb-8">
                                <h3 className="text-xl font-bold text-red-900 mb-4 text-center">Exposing the Bluff: Fake DRT Notices</h3>
                                <div className="space-y-4">
                                    <div className="p-4 bg-white rounded-xl shadow-sm border border-red-100">
                                        <strong className="text-red-700 block mb-1">The Bluff:</strong> "Pay your 4 Lakh credit card bill today, or we are registering a case in the DRT tomorrow morning."
                                    </div>
                                    <div className="p-4 bg-white rounded-xl shadow-sm border border-green-200">
                                        <strong className="text-green-700 block mb-1">The Reality:</strong> The DRT registry will instantly reject any application filed for 4 Lakhs. The minimum limit is 20 Lakhs. The agent is lying to create panic.
                                    </div>
                                    <div className="p-4 bg-white rounded-xl shadow-sm border border-red-100">
                                        <strong className="text-red-700 block mb-1">The Bluff:</strong> "You received a legal notice titled 'Pre DRT Intimation' for your 8 Lakh personal loan. The judge is already assigned."
                                    </div>
                                    <div className="p-4 bg-white rounded-xl shadow-sm border border-green-200">
                                        <strong className="text-green-700 block mb-1">The Reality:</strong> There is no such legal term as "Pre DRT Intimation." It is a fake document generated in bulk by collection agencies to look like an official court summons.
                                    </div>
                                </div>
                            </div>

                            <h2 id="exact-jurisdiction-limit" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">What is the Exact DRT Jurisdiction Limit in India?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Debt Recovery Tribunals were established under the Recovery of Debts Due to Banks and Financial Institutions (RDDBFI) Act, 1993. Section 1(4) of this Act explicitly defines the pecuniary jurisdiction, which means the financial value of the cases the tribunal is legally permitted to hear. According to the current law, the Debt Recovery Tribunal cannot entertain any original application (OA) filed by a bank or financial institution if the amount of debt due is less than Rs. 20 Lakhs. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This 20 Lakh threshold is a hard legal barrier. A bank manager cannot request a special exception from the DRT judge because you were rude to them. A recovery agency cannot bribe the tribunal to accept a 10 Lakh case. If a bank submits an application claiming a default of 19.5 Lakhs, the registrar of the DRT is legally bound to return the file to the bank, citing a total lack of jurisdiction. The law is designed this way to ensure that the highly specialized infrastructure of the DRT is utilized for recovering substantial public funds, rather than being clogged up by millions of retail loan defaults.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                It is important to calculate this amount correctly. The "debt due" includes the principal amount plus the accumulated interest and penal charges on the date the application is filed. So, if you took a loan of 15 Lakhs, and the accumulated interest has pushed the total outstanding demand to 21 Lakhs, the bank can technically file a case in the DRT. However, if your original loan was 3 Lakhs, it is mathematically impossible for the interest to push it above the 20 Lakh threshold before the bank is forced to write it off or file a civil suit.
                            </p>

                            <h2 id="can-bank-sue-5-lakh" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Can a Bank Sue You in DRT for a 5 Lakh Default?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The answer is an absolute, unequivocal no. If you have defaulted on a personal loan, a credit card, or a two wheeler loan amounting to 5 Lakhs, the bank is legally barred from entering the Debt Recovery Tribunal. When a recovery agent calls you and threatens you with DRT action for a 5 Lakh default, they are committing a deceptive practice. They are relying entirely on your ignorance of the RDDBFI Act. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Many borrowers panic when they see the letters "DRT" printed in bold red ink on a legal notice sent by a bank advocate. Advocates hired by recovery agencies often draft these notices in a deliberately misleading manner. They might write, "If you do not pay, we will initiate civil proceedings, criminal proceedings, and approach the Debt Recovery Tribunal." They include the DRT threat as boilerplate text to maximize the intimidation factor. If your loan is under 20 Lakhs, you can safely take a pen and cross out the DRT threat on that notice; it holds absolutely zero legal weight.
                            </p>

                            <h3 id="civil-vs-drt" className="text-2xl font-bold text-gray-800 mb-4 mt-8 scroll-mt-20">Civil Court vs. DRT: Where Do Small Claims Go?</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If the bank cannot go to the DRT for a 5 Lakh loan, does that mean they cannot sue you at all? No. The bank still retains the legal right to recover their money. However, for amounts below 20 Lakhs, the bank must file a standard recovery suit in a regular civil court, such as a District Court or a City Civil Court, under the Code of Civil Procedure (CPC).
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The difference between a civil court and a DRT is massive. A DRT is a fast track tribunal designed to issue recovery certificates quickly, often within a year. A regular civil court is burdened with millions of property disputes, family matters, and contract breaches. A civil recovery suit filed by a bank for a 5 Lakh unsecured loan can easily drag on for five to seven years. The legal fees the bank must pay to litigate a civil suit for five years often exceed the value of the loan itself. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Because civil litigation is incredibly slow and expensive, banks heavily prefer out of court settlements for retail defaults. This is why knowing <Link href="/what-is-the-success-rate-of-debt-settlement-programs" className="text-blue-600 hover:underline">what is the success rate of debt settlement programs</Link> is vital. When a bank realizes they cannot use the fast track DRT and must face a decade long civil battle, they become highly motivated to accept a One Time Settlement (OTS) for a fraction of the outstanding amount.
                            </p>

                            <h2 id="drt-rules-2026" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Debt Recovery Tribunal Rules 2026: Recent Updates</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                It is crucial to stay updated with the latest legislative changes. For many years, the pecuniary limit for filing cases in the DRT was set at Rs. 10 Lakhs. This lower limit meant that banks could drag many mid sized business defaults and slightly larger personal loans into the fast track tribunal. However, a significant notification from the Ministry of Finance altered this landscape entirely.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Exercising its powers under Section 1(4) of the RDDBFI Act, the Central Government officially raised the minimum pecuniary jurisdiction of the DRTs from Rs. 10 Lakhs to Rs. 20 Lakhs. This rule is in full effect in 2026. This legislative change instantly protected millions of retail borrowers from the harsh and rapid procedures of tribunal litigation, pushing those cases back into the slower civil court system.
                            </p>
                            
                            <h3 id="why-government-raised" className="text-2xl font-bold text-gray-800 mb-4 mt-8 scroll-mt-20">Why the Government Raised the Minimum Limit</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The decision to double the jurisdiction limit was not born out of sympathy for defaulting borrowers, but rather out of administrative necessity. The DRTs across India were suffering from catastrophic operational paralysis. Created to speed up the recovery of massive corporate NPAs, the tribunals were instead choked by millions of 12 Lakh and 15 Lakh retail loan cases filed by aggressive private banks. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                High value corporate cases involving hundreds of crores of public money were being delayed because the judges were busy listening to arguments over a defaulted auto loan. By raising the floor to 20 Lakhs, the government cleared a massive backlog of small cases, effectively stating that small retail defaults do not warrant the special fast track privileges granted to banks under the tribunal system. If you are struggling with a smaller debt and wondering <Link href="/is-loan-settlement-a-good-option-for-borrowers" className="text-blue-600 hover:underline">is loan settlement a good option for borrowers</Link>, this legislative change strongly tilts the negotiation leverage in your favor.
                            </p>

                            <h2 id="respond-fake-notices" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">How to Respond to Fake DRT Legal Notices</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When you receive a legal notice threatening DRT action for a loan below 20 Lakhs, your response should be calculated and legally sound. Do not panic, and do not immediately call the number on the notice begging for more time. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                First, read the notice carefully. If it is titled "Final Warning Before DRT" or "Pre Tribunal Intimation" for a 6 Lakh debt, you have undeniable proof that the sender is attempting to deceive you. You can have a lawyer draft a strong reply to the advocate who sent the notice. The reply should boldly state that you are fully aware of the Rs. 20 Lakh pecuniary jurisdiction under Section 1(4) of the RDDBFI Act, and that their threat to approach the DRT is legally frivolous and constitutes professional misconduct by the advocate.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Calling out the bluff instantly changes the dynamic of the recovery process. The recovery agency realizes they are dealing with an informed citizen, not a terrified victim. The abusive phone calls usually stop, the fake legal notices cease, and the bank will start sending officers who are authorized to negotiate a realistic settlement rather than just scream threats.
                            </p>
                            
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Legal Remedy Chart: Jurisdiction by Loan Amount</h3>
                                
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-blue-100 text-blue-900">
                                                <th className="p-4 border-b border-blue-200 font-bold rounded-tl-lg">Total Outstanding Amount</th>
                                                <th className="p-4 border-b border-blue-200 font-bold">Legal Jurisdiction</th>
                                                <th className="p-4 border-b border-blue-200 font-bold rounded-tr-lg">Borrower Leverage for Settlement</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-700">
                                            <tr className="hover:bg-white transition-colors">
                                                <td className="p-4 border-b border-gray-200">Below Rs. 20 Lakhs</td>
                                                <td className="p-4 border-b border-gray-200">Civil Court / Lok Adalat</td>
                                                <td className="p-4 border-b border-gray-200 font-bold text-green-600">Extremely High (Bank wants to avoid slow civil courts)</td>
                                            </tr>
                                            <tr className="hover:bg-white transition-colors bg-gray-50">
                                                <td className="p-4 border-b border-gray-200">Rs. 20 Lakhs and Above</td>
                                                <td className="p-4 border-b border-gray-200">Debt Recovery Tribunal (DRT)</td>
                                                <td className="p-4 border-b border-gray-200 font-bold text-yellow-600">Moderate (Bank has fast track legal options)</td>
                                            </tr>
                                            <tr className="hover:bg-white transition-colors">
                                                <td className="p-4 border-b border-gray-200">Above Rs. 1 Crore (Corporate)</td>
                                                <td className="p-4 border-b border-gray-200">NCLT (IBC 2016) / DRT</td>
                                                <td className="p-4 border-b border-gray-200 font-bold text-red-600">Low (Creditors can initiate insolvency)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <h2 id="real-consequences" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Real Consequences of Defaults Below 20 Lakhs</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If the DRT cannot touch you, what are the actual consequences of a 5 Lakh or 10 Lakh loan default? The most immediate and guaranteed consequence is the destruction of your CIBIL score. The bank will report your account as a Non Performing Asset (NPA) to all credit bureaus. Your score will plummet, making it virtually impossible to secure another loan, credit card, or mortgage from any mainstream financial institution in the near future.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Secondly, you will face persistent collection efforts. While they cannot file a DRT case, banks have extensive call centers and field agency networks. They will call you constantly and visit your registered address to demand payment. You may also receive genuine notices to attend Lok Adalat sessions. A Lok Adalat is not a punitive court; it is an arbitration forum designed to help parties reach a mutual compromise. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Ultimately, the most common resolution for retail loans under 20 Lakhs is a negotiated debt settlement. If you are struggling financially and want to know <Link href="/can-i-settle-my-debts-without-using-a-third-party-company" className="text-blue-600 hover:underline">can I settle my debts without using a third party company</Link>, the answer is yes, provided you have the emotional resilience to negotiate directly with aggressive bank officers and the legal knowledge to ensure you get a valid No Dues Certificate. Many borrowers choose to hire professional legal advisors simply to shield themselves from the stress of negotiation and ensure the paperwork is watertight.
                            </p>

                            <h2 id="case-studies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Client Case Studies: Exposing Recovery Bluffs</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Understanding the law is one thing; seeing it applied in real life provides true confidence. Here are real scenarios where borrowers successfully used the 20 Lakh jurisdiction rule to protect themselves.
                            </p>
                            
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

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Frequently Asked Questions</h2>
                            <div className="space-y-6 mb-12">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-4 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Conclusion: Do Not Let Fear Dictate Your Response</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The banking system relies heavily on the ignorance of the average consumer. When a recovery agent screams that they are filing a DRT case for your 6 Lakh personal loan, they are banking on the fact that you do not know the laws governing pecuniary jurisdiction. They want you to panic, borrow from friends and family, and pay them just to avoid a tribunal hearing that legally cannot even exist. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Armed with the knowledge that the Debt Recovery Tribunal strictly requires a minimum default of Rs. 20 Lakhs, you can now face these collection tactics without paralyzing fear. You can definitively call out fake legal notices and demand respectful communication. If you cannot afford to pay the loan in full due to genuine financial hardship, use this legal leverage to negotiate a mutually agreeable settlement plan. The law provides boundaries for banks as much as it does for borrowers. Ensure you stay within your rights, and never let illegal threats force you into desperate financial decisions.
                            </p>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Stop Fake Legal Harassment Today</h3>
                                <p className="text-blue-800 mb-6">Are you receiving fake DRT notices for small loans? Our legal experts can verify bank documents, stop illegal recovery threats, and negotiate a fair settlement on your behalf.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Legal Advice Now
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The content provided here is for informational purposes only and is not intended as legal advice. While the DRT jurisdiction is fixed at Rs. 20 Lakhs for banks under the RDDBFI Act, individual circumstances may vary, and banks can still pursue civil litigation. Always consult with a qualified lawyer regarding your specific financial situation and recovery notices.
                            </div>
                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20">
                        <div className="space-y-6">
                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Notice Verification</h4>
                                <p className="text-sm text-gray-600 mb-6">Did you receive a suspicious legal notice? We can verify its authenticity.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Verify Legal Notice
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>Spot Fake DRT Threats</p>
                                    <p>Stop Agent Harassment</p>
                                    <p>Negotiate Settlements</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Articles</h4>
                                <nav className="space-y-3">
                                    <Link href="/what-is-the-success-rate-of-debt-settlement-programs" className="block text-sm text-blue-600 hover:underline">Settlement Success</Link>
                                    <Link href="/is-loan-settlement-a-good-option-for-borrowers" className="block text-sm text-blue-600 hover:underline">Is Settlement Right?</Link>
                                    <Link href="/can-i-settle-my-debts-without-using-a-third-party-company" className="block text-sm text-blue-600 hover:underline">Settle Debt Yourself</Link>
                                    <Link href="/loan-settlement" className="block text-sm text-blue-600 hover:underline">Complete Relief Guide</Link>
                                </nav>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}
