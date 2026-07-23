'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function LoanPaymentNotReflectedClient() {
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
        { id: 'introduction', label: 'The Hidden Trap' },
        { id: 'delay-types', label: 'NEFT vs NACH' },
        { id: 'legal-rights', label: 'Your Legal Rights' },
        { id: 'reversal-steps', label: 'Reversal Steps' },
        { id: 'utr-leverage', label: 'Leverage UTR' },
        { id: 'nodal-complaint', label: 'Nodal Complaint' },
        { id: 'ombudsman-escalation', label: 'Ombudsman' },
        { id: 'case-studies', label: 'Success Stories' },
        { id: 'reviews', label: 'Client Reviews' },
        { id: 'faqs', label: 'FAQs' }
    ];

    const faqs = [
        {
            question: "What should I do if the loan EMI is deducted but not showing in my loan account?",
            answer: "Immediately check your bank statement to ensure the deduction went through. Obtain the UTR or transaction reference number. Contact your lender in writing, providing this number and demanding that they manually update your loan account without applying any late fees."
        },
        {
            question: "Can a bank charge a bounce penalty if the delay was due to a server error?",
            answer: "No, per RBI guidelines, banks cannot charge you a bounce penalty or penal interest if the delay or failure was caused by their own technical glitches, server errors, or NACH clearing issues, provided you maintained sufficient balance in your account."
        },
        {
            question: "How long does an RTGS or NEFT refund take after a technical failure?",
            answer: "Typically, funds from failed NEFT or RTGS transactions are credited back to the remitting account within 1 to 2 business days. If not, the bank is liable to pay a penalty for the delay as mandated by the RBI."
        },
        {
            question: "What evidence do I need to prove the funds were available for the NACH mandate?",
            answer: "You will need an official bank statement showing your account balance on the date the mandate was supposed to be executed. This proves that you had sufficient funds and that the failure was entirely a technical issue on the bank's end."
        },
        {
            question: "How can I escalate a grievance if the bank refuses to reverse the penal interest?",
            answer: "If the bank's Nodal Officer rejects your request, you can escalate the matter to the RBI Banking Ombudsman under the Integrated Ombudsman Scheme. Submit your complaint online with all proofs of transaction and prior correspondence."
        }
    ];

    const reviews = [
        {
            name: 'Anonymous Borrower',
            location: 'Mumbai',
            stars: 5,
            comment: 'My EMI bounced due to a NACH glitch on the bank\'s end, and they slapped a hefty penalty. Using the reference number strategy from this guide, I got the charges fully reversed within a week!'
        },
        {
            name: 'Verified User',
            location: 'Delhi',
            stars: 5,
            comment: 'CredSettle\'s step-by-step approach helped me draft a strong complaint to the Nodal Officer. The bank acknowledged the server error and refunded the unfair penal interest immediately.'
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
                        Loan Payment Not Reflected on Time<br />
                        <span className="text-blue-300">How to Prevent Penalties</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        NEFT/RTGS glitches or NACH mandate delays can cause EMIs to bounce even when funds are in the account, triggering unfair penal interest. Learn how to force the bank to reverse the charges.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Free Legal Advice
                        </Link>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Section */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-[1440px] mx-auto px-4 py-4 font-sans">
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
                                        Loan Payment Not Reflected on Time
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
                        className={`text-sm font-bold px-4 py-2 rounded-lg transition-all flex-shrink-0 ${activeId === link.id
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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Defense Manual</h3>
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
                                            const element = document.getElementById(link.id);
                                            if (element) {
                                                const offset = 100;
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
                            </nav>
                        </div>
                    </aside>

                    {/* Middle Column: Main Content */}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                            
                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 1: The Hidden Penalty Trap</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                You have carefully maintained sufficient balance in your bank account for your upcoming EMI deduction. You are a responsible borrower who pays on time. Suddenly, you receive an SMS stating that your loan payment has failed and a hefty bounce penalty has been levied on your account. When you check your bank statement, the money has either been deducted but is not reflecting in your loan account, or it was not deducted at all despite the funds being available. This scenario is incredibly common and highly frustrating for borrowers across India.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This hidden penalty trap is often the result of technical glitches. NEFT and RTGS payment gateways can experience downtime. NACH mandate systems can fail to communicate properly between your savings bank and the lending institution. The core problem is that the banking system automatically shifts the blame, and the financial penalty, onto you.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The automated software used by lenders does not pause to investigate if a server error occurred. It simply detects that the payment was not received on the due date and automatically slaps a bounce charge, late payment fee, and penal interest on your outstanding balance. If you are dealing with a <Link href="/best-lawyer-for-personal-loans" className="text-blue-600 hover:underline">personal loan dispute</Link>, these unfair penalties can pile up rapidly and completely ruin your financial planning.
                            </p>

                            <h2 id="delay-types" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 2: Understanding EMI Deduction Delays (NEFT/RTGS vs NACH)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To fight these unfair charges, you must first understand the mechanism of the failure. Bank payments generally fail in two distinct ways: manual transfer glitches (NEFT or RTGS) and automated mandate failures (NACH). Each requires a different approach for resolution.
                            </p>
                            
                            {/* Visual Element 1: Comparison Table */}
                            <div className="overflow-x-auto mb-10 shadow-lg rounded-2xl border border-gray-200">
                                <table className="min-w-full bg-white text-sm">
                                    <thead className="bg-gray-900 text-white">
                                        <tr>
                                            <th className="py-4 px-6 text-left font-bold uppercase tracking-wider">Failure Type</th>
                                            <th className="py-4 px-6 text-left font-bold uppercase tracking-wider">Root Cause</th>
                                            <th className="py-4 px-6 text-left font-bold uppercase tracking-wider">Key Evidence Required</th>
                                            <th className="py-4 px-6 text-left font-bold uppercase tracking-wider">Bank Liability</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                            <td className="py-4 px-6 font-semibold">NEFT/RTGS Glitch</td>
                                            <td className="py-4 px-6">Clearing house downtime or server timeout during transfer.</td>
                                            <td className="py-4 px-6">UTR Number or Transaction Reference Number.</td>
                                            <td className="py-4 px-6">Remitting bank must refund the amount or push it through, plus compensate for delays.</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="py-4 px-6 font-semibold">NACH Mandate Delay</td>
                                            <td className="py-4 px-6">Sponsor bank fails to present the mandate to the destination bank on time.</td>
                                            <td className="py-4 px-6">Bank statement showing sufficient funds on the due date.</td>
                                            <td className="py-4 px-6">Lending institution must waive bounce charges as the fault lies in the auto-debit presentation.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-10">
                                When you manually initiate a transfer and the amount is debited but not credited to the loan account, the UTR number is your ultimate proof. However, if the lender is supposed to pull the money automatically via NACH and fails to do so, your bank statement proving sufficient balance is the only evidence you need to demand a complete waiver of the penalty.
                            </p>

                            <h2 id="legal-rights" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 3: Your Legal Rights: Why You Shouldn't Pay for Bank Server Errors</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Reserve Bank of India has very clear guidelines regarding technical failures in the banking sector. The burden of proof and the financial liability for a server error never falls on the consumer. The law is firmly on your side.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Under the RBI guidelines for failed transactions, banks are mandated to reverse the transaction within a stipulated timeline. If a customer initiates a transaction and the account is debited but the beneficiary is not credited, the bank must auto-reverse the transaction within a specific number of days. If there is a delay beyond this period, the bank is liable to pay a penalty to the customer. More importantly, the lending institution cannot penalize the borrower for this technical delay.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Borrowers often get intimidated by aggressive collection calls. If you receive a <Link href="/best-lawyer-for-notice-for-loan-default" className="text-blue-600 hover:underline">legal notice for loan default</Link> simply because of a three-day bank server delay, you have the legal right to challenge it and file a counter-complaint for harassment. You are not legally obligated to pay a penalty for a fault that occurred in the digital infrastructure of the financial institutions.
                            </p>

                            <h2 id="reversal-steps" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 4: Step-by-Step: Reversing Unfair Bounce Penalties</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Taking immediate and documented action is critical when an EMI fails due to a bank error. Do not rely on phone calls to customer care. Phone conversations are rarely recorded in your favor and do not create a paper trail.
                            </p>
                            
                            {/* Visual Element 2: Alert Banner */}
                            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-8 shadow-sm">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-lg font-medium text-red-800">Critical Deadline: 72 Hours</h3>
                                        <p className="mt-2 text-sm text-red-700">
                                            You must formally report the technical glitch and the unfair penalty to the lender's grievance redressal email within 72 hours of receiving the bounce notification. Delaying your complaint weakens your case and gives the bank an excuse to deny the penalty reversal.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <ol className="list-decimal pl-6 mb-8 space-y-4 text-gray-700 font-light">
                                <li><strong>Secure Your Evidence:</strong> Download your bank statement immediately. Highlight the date of the intended deduction and the available balance. If the amount was debited, highlight the transaction.</li>
                                <li><strong>Write to Customer Support:</strong> Send an email to the official customer support ID of the lending institution. Attach the bank statement. Clearly state that the funds were available and the failure was technical.</li>
                                <li><strong>Demand a Waiver:</strong> Explicitly state in your email that you demand a complete waiver of the bounce charges and the penal interest. Do not ask for a favor; assert your right as a consumer.</li>
                                <li><strong>Refuse to Pay the Penalty:</strong> If you are paying the EMI manually after a glitch, pay only the exact EMI amount. Do not include the penalty charges. Paying the penalty implies you accept the fault.</li>
                                <li><strong>Request CIBIL Correction:</strong> If the bank has already reported the delay to credit bureaus, demand that they update the status to show a timely payment and rectify the error on your credit report.</li>
                            </ol>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                By following these precise steps, you create an undeniable trail of evidence. When dealing with <Link href="/best-lawyer-for-bank-loan-recovery-defence" className="text-blue-600 hover:underline">bank loan recovery</Link> departments, documentation is your only shield against automated aggression.
                            </p>

                            <h2 id="utr-leverage" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 5: How to Leverage Transaction Reference Numbers (UTR)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Unique Transaction Reference (UTR) number is the most powerful tool you have when a manual payment fails. Every NEFT and RTGS transaction generates a UTR number. This alphanumeric code is the absolute proof that the money left your account and entered the banking network.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a lender claims they have not received the payment, providing the UTR number forces them to manually track the transaction. Often, the money is sitting in a suspense account at the receiving bank due to a mismatch in the account number formatting or a temporary server timeout on their end.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                You must insist that the lender tracks the UTR and manually credits your loan account backdated to the exact day the transaction was initiated. This backdating is crucial. If the lender credits the account on the day they find the money (which could be five days later), their system will automatically generate five days of penal interest. You must demand that the credit reflects the original date of the UTR generation, thereby nullifying all late payment logic in their system.
                            </p>

                            <h2 id="nodal-complaint" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 6: Drafting a Formal Complaint to the Nodal Officer</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Customer support representatives often lack the authority to waive penalties, especially if the automated system has locked the charges. When your initial email is met with a generic automated response or a refusal, you must escalate the matter to the Nodal Officer or the Grievance Redressal Officer of the bank.
                            </p>

                            {/* Visual Element 3: Negotiation Script / Complaint Template */}
                            <div className="bg-gray-900 text-white p-10 rounded-[3rem] mb-10 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 blur-3xl rounded-full"></div>
                                <h4 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Email Template to Nodal Officer</h4>
                                <div className="font-mono text-sm text-gray-300 whitespace-pre-wrap leading-relaxed">
                                    Subject: Urgent: Unfair Bounce Penalty Levied Due to Bank Technical Glitch [Loan Account Number]<br/><br/>
                                    Dear Nodal Officer,<br/><br/>
                                    I am writing to formally dispute the bounce penalty of Rs. [Amount] levied on my loan account [Loan Account Number] on [Date].<br/><br/>
                                    The EMI deduction failed solely due to a technical error on the banking system's end. I have attached my bank statement which clearly demonstrates that my account had sufficient balance of Rs. [Balance Amount] on the scheduled due date. [OR: I initiated the payment via NEFT and the amount was debited. The UTR number is [UTR Number]].<br/><br/>
                                    As per RBI guidelines, a customer cannot be penalized for server timeouts or NACH mandate presentation failures caused by the banking infrastructure. I have maintained a clean repayment record and the funds were fully available.<br/><br/>
                                    I demand the immediate reversal of the bounce charge and all associated penal interest. Furthermore, I request confirmation that my CIBIL report will not be negatively impacted by this technical error.<br/><br/>
                                    If this matter is not resolved within 7 days, I will be compelled to escalate this grievance to the RBI Banking Ombudsman.<br/><br/>
                                    Sincerely,<br/>
                                    [Your Name]<br/>
                                    [Phone Number]
                                </div>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-10">
                                This template is highly effective because it immediately signals to the Nodal Officer that you are aware of your rights. By mentioning the RBI guidelines and the Banking Ombudsman, you elevate the complaint from a simple customer request to a potential regulatory compliance issue for the bank. They are far more likely to waive the fee to close the grievance promptly.
                            </p>

                            <h2 id="ombudsman-escalation" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 7: Escalation to the Banking Ombudsman (If Bank Refuses)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If the Nodal Officer refuses to waive the charges, or fails to respond within 30 days, your next legal step is to approach the RBI Banking Ombudsman under the Integrated Ombudsman Scheme. This is a free, fast, and highly effective grievance redressal mechanism established by the central bank.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Filing a complaint with the Ombudsman requires precision. You must provide a chronological history of the event. Start with the date the EMI was due, attach the proof of sufficient balance or the UTR number, and include screenshots of your correspondence with the bank's customer service and the Nodal Officer. The Ombudsman will look closely at whether the bank followed the prescribed timelines for resolving technical failures.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                When a bank receives a notice from the RBI Ombudsman, their compliance department takes over the case. Because the Ombudsman has the power to fine the bank and mandate compensation to the customer, banks will almost always settle the matter by reversing the unfair penalties before the Ombudsman has to pass a formal ruling. It is your strongest weapon against automated banking tyranny.
                            </p>

                            <h2 id="case-studies" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 8: Client Success Stories: Fighting Back and Winning</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Theory is important, but real world application proves the strategy works. Here are two instances where borrowers successfully fought back against unfair penalties.
                            </p>
                            <div className="space-y-8 mb-12">
                                <div className="bg-green-50 p-10 rounded-[3rem] border border-green-100 shadow-xl border-l-8 border-green-700">
                                    <h4 className="text-2xl font-black text-green-900 mb-4 uppercase tracking-tight italic">The Unjustified NACH Bounce</h4>
                                    <p className="text-gray-800 mb-4 font-light">
                                        A software engineer in Pune maintained a balance of fifty thousand rupees for a twenty thousand rupee EMI. The NACH mandate failed, and the bank slapped a penalty of one thousand rupees. Customer care refused to refund it, claiming the system was automated.
                                    </p>
                                    <p className="text-gray-800 font-bold italic">
                                        Action: He used our exact Nodal Officer template, attaching his bank statement. The Nodal Officer realized the bank's mandate server was down that day. The penalty was reversed within forty-eight hours, and a formal apology was issued.
                                    </p>
                                </div>
                                <div className="bg-green-50 p-10 rounded-[3rem] border border-green-100 shadow-xl border-l-8 border-green-700">
                                    <h4 className="text-2xl font-black text-green-900 mb-4 uppercase tracking-tight italic">The Missing NEFT Transfer</h4>
                                    <p className="text-gray-800 mb-4 font-light">
                                        A small business owner transferred his loan EMI via NEFT two days before the due date. The money was debited but the loan account showed overdue status, racking up daily penal interest.
                                    </p>
                                    <p className="text-gray-800 font-bold italic">
                                        Action: He refused to pay the penalties. He escalated the matter to the Banking Ombudsman with the UTR number. The Ombudsman forced the receiving bank to trace the funds, backdate the credit to the transfer date, and completely wipe out all penal charges applied to the loan account.
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                You do not have to accept unfair charges. The banking system is prone to technical errors, and the consumer should never foot the bill for their digital infrastructure failures.
                            </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Client Success and Feedback</h2>
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
                                        <p className="text-gray-700 italic mb-4 leading-relaxed font-light text-sm">{review.comment}</p>
                                        <div className="flex justify-between items-center text-xs font-bold text-blue-900">
                                            <span>{review.name}</span>
                                            <span className="opacity-60">{review.location}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Don't Pay Unfair Penalties.</h3>
                                <p className="text-blue-800 mb-6">Our legal team can help you draft the perfect grievance letter and escalate the issue to the banking ombudsman to ensure all technical bounce penalties are reversed immediately.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Legal Protection Now
                                </Link>
                            </div>

                            <div className="mt-12 text-[0.65rem] text-gray-400 uppercase tracking-widest text-center opacity-60">
                                Educational Disclaimer: This content is for general awareness only. Legal outcomes vary based on individual loan contracts and state regulations. Always seek formal legal counsel. CredSettle provides legal guidance and mediation services.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Unfair Penalties?</h4>
                                <p className="text-sm text-gray-600 mb-6">We can help you force the bank to reverse bounce charges and penal interest.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Stop the Penalties
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v Nodal Officer Escalation</p>
                                    <p>v Ombudsman Complaints</p>
                                    <p>v CIBIL Score Protection</p>
                                    <p>v 100% Penalty Reversals</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Expertise</h4>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-personal-loans" className="block text-sm text-blue-600 hover:underline">Personal Loan Relief</Link>
                                    <Link href="/best-lawyer-for-msme-business-loan-dispute" className="block text-sm text-blue-600 hover:underline">MSME Dispute Defense</Link>
                                    <Link href="/best-lawyer-for-bank-loan-recovery-defence" className="block text-sm text-blue-600 hover:underline">Bank Recovery Shield</Link>
                                    <Link href="/best-lawyer-for-notice-for-loan-default" className="block text-sm text-blue-600 hover:underline">Default Notice Help</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
