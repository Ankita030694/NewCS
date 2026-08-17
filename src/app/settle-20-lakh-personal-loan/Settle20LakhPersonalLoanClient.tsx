'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

export default function Settle20LakhPersonalLoanClient() {
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
        { id: 'quick-answer', label: 'Quick Answer' },
        { id: 'can-you-settle', label: 'Can You Settle ₹20 Lakhs?' },
        { id: 'settlement-timeline', label: 'Settlement Timeline' },
        { id: 'impact-on-cibil', label: 'CIBIL Impact' },
        { id: 'legal-actions', label: 'Bank Legal Actions' },
        { id: 'eligibility-criteria', label: 'Eligibility' },
        { id: 'negotiation-strategy', label: 'Negotiation Strategy' },
        { id: 'how-to-start', label: 'How to Start' },
        { id: 'references', label: 'Sources & References' }
    ];

    const currentUrl = "https://www.credsettle.com/settle-20-lakh-personal-loan";

    return (
        <>
            {/* Hero Section */}
            <section
                className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden"
                style={{
                    backgroundColor: '#2D66D9',
                    minHeight: '40vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-0"></div>
                <div className="max-w-6xl mx-auto text-center z-10 relative">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight drop-shadow-lg">
                        Settle Your ₹20 Lakh Personal Loan <br />
                        <span className="text-blue-200">Process & Negotiation</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-medium text-gray-100">
                        Have an outstanding personal loan of ₹20 Lakhs? High-value loan defaults require strategic legal defense. Learn how to negotiate a massive waiver today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                        >
                            Get Legal Defense for High-Value Loans
                        </Link>
                    </div>
                </div>
            </section>

            {/* Breadcrumbs */}
            <div className="bg-white border-b border-gray-100">
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
                                        Settle 20 Lakh Personal Loan
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Company Stats Strip */}
            <div className="bg-gradient-to-r from-blue-50 to-gray-50 py-6 border-b border-gray-100">
                <div className="max-w-[1440px] mx-auto px-4">
                    <div className="flex flex-wrap justify-around items-center text-center gap-4">
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-black text-blue-800">10+ Years</span>
                            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Legal Experience</span>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-gray-300"></div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-black text-blue-800">15,000+</span>
                            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Cases Handled</span>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-gray-300"></div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-black text-blue-800">₹500Cr+</span>
                            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Debt Settled</span>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-gray-300"></div>
                        <div className="flex flex-col items-center justify-center pl-2">
                            <div className="flex items-center gap-2 mb-1">
                                <svg viewBox="0 0 24 24" className="w-10 h-10">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                </svg>
                                <span className="text-[38px] font-medium text-[#0A3F6D] tracking-tight leading-none pt-1">4.7/5</span>
                            </div>
                            <div className="flex flex-col items-center mt-1">
                                <span className="text-[17px] text-gray-600 font-normal leading-tight">3,000+</span>
                                <span className="text-[17px] text-gray-600 font-normal leading-tight">Reviews</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Sticky TOC */}
            <div
                ref={mobTocRef}
                className="sticky top-0 z-40 lg:hidden bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm overflow-x-auto no-scrollbar scroll-smooth py-3 px-4 flex gap-4 whitespace-nowrap"
            >
                {navLinks.map((link) => (
                    <a
                        key={link.id}
                        id={`mob-toc-${link.id}`}
                        href={`#${link.id}`}
                        className={`text-sm font-bold px-4 py-2 rounded-xl transition-all flex-shrink-0 ${activeId === link.id
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
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

            {/* Three-Column Body Structure */}
            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    
                    {/* Left Sidebar: Sticky Table of Contents */}
                    <aside className="lg:w-1/4 hidden lg:block sticky top-14 h-fit">
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">In This Guide</h3>
                            <nav className="space-y-1 text-sm">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        className={`block py-2 px-3 rounded-xl transition-all ${activeId === link.id
                                            ? 'bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-600'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600 border-l-4 border-transparent'
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

                    {/* Middle Column: Main Article Content */}
                    <main className="lg:w-2/4 w-full">
                        <article className="prose max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                            
                            <h2 id="quick-answer" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Quick Answer</h2>
                            <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600 mb-8 shadow-sm">
                                <p className="font-semibold text-blue-900 m-0 leading-relaxed">
                                    Yes, you can settle a ₹20 Lakh personal loan in India. When you face severe financial hardship (job loss, medical emergency, business failure), banks are often willing to accept a <Link href="/personal-loan-settlement" className="text-blue-700 hover:underline">one-time settlement (OTS)</Link> that is significantly lower than the principal outstanding. A ₹20 Lakh loan could potentially be settled for anywhere between ₹8 Lakhs to ₹12 Lakhs, depending on the days past due (DPD), the borrower's proving of hardship, and strategic legal negotiation to stop <Link href="/how-to-stop-recovery-agent-harassment" className="text-blue-700 hover:underline">recovery harassment</Link>.
                                </p>
                            </div>

                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Defaulting on a high-value unsecured personal loan of ₹20 Lakhs can be an incredibly stressful experience. The constant calls from recovery agents, the fear of <Link href="/best-lawyer-for-notice-for-loan-default" className="text-blue-600 font-medium hover:underline">legal notices</Link>, and the anxiety about your financial future can be overwhelming. However, a ₹20 Lakh personal loan is considered an unsecured debt, which means the bank has no collateral to seize. This provides you with significant leverage if you approach the situation methodically and legally.
                            </p>

                            <figure className="my-8 rounded-2xl overflow-hidden shadow-md border border-gray-100">
                                <Image 
                                    src="/images/loan_settlement_steps.jpg" 
                                    alt="Infographic showing the step-by-step process of settling a high-value 20 Lakh personal loan in India" 
                                    width={800} 
                                    height={450} 
                                    className="w-full h-auto object-cover"
                                />
                                <figcaption className="text-center text-sm text-gray-500 mt-3 pb-3 px-4">
                                    The 4-Step Process for Settling High-Value Unsecured Loans in India.
                                </figcaption>
                            </figure>

                            <h2 id="can-you-settle" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24">Can You Settle a ₹20 Lakh Personal Loan?</h2>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Absolutely. The concept of a loan settlement exists specifically for scenarios where the borrower genuinely lacks the financial capacity to repay the full amount. Banks would rather recover a portion of the loan amount than write off the entire sum as a complete loss. When a ₹20 lakh loan becomes a <Link href="/what-is-npa" className="text-blue-600 font-medium hover:underline">Non-Performing Asset (NPA)</Link>, it hurts the bank's profitability and requires them to provision capital against it.
                            </p>
                            
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                <strong>Important considerations for high-value loans:</strong>
                            </p>
                            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
                                <li><strong>Higher scrutiny:</strong> Since the amount is large (₹20 Lakhs), the bank will scrutinize your financial hardship claims much more closely than they would for a ₹2 Lakh loan.</li>
                                <li><strong>Senior escalation:</strong> Settlement negotiations for high-value loans are typically handled by senior branch managers, regional heads, or nodal officers, not regular collection agents.</li>
                                <li><strong>Legal notices are common:</strong> You should expect to receive formal legal notices (like arbitration notices or Section 138 notices if you submitted security cheques) simply because of the loan's size.</li>
                            </ul>

                            <h2 id="settlement-timeline" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24">The Timeline of Consequences and Settlement</h2>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Settling a loan is not an overnight process. It requires strategic patience. Here is a breakdown of what happens when you default on a ₹20 lakh loan and when settlement becomes possible.
                            </p>

                            {/* AI-Crawlable Data Table */}
                            <div className="overflow-x-auto mb-8 rounded-2xl shadow-sm border border-gray-200">
                                <table className="w-full text-left border-collapse bg-white">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th scope="col" className="p-4 border-b font-bold text-gray-900 w-1/4">Time from Default</th>
                                            <th scope="col" className="p-4 border-b font-bold text-gray-900 w-1/4">Account Status</th>
                                            <th scope="col" className="p-4 border-b font-bold text-gray-900 w-1/2">Bank Action & Settlement Prospect</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700 text-sm">
                                        <tr className="hover:bg-gray-50">
                                            <td className="p-4 border-b font-semibold">1 - 30 Days</td>
                                            <td className="p-4 border-b text-orange-600 font-medium">SMA-0 (Special Mention Account)</td>
                                            <td className="p-4 border-b">Reminder calls and SMS. Bank insists on full EMI payment with late fees. Settlement is rarely offered here.</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="p-4 border-b font-semibold">31 - 90 Days</td>
                                            <td className="p-4 border-b text-orange-600 font-medium">SMA-1 & SMA-2</td>
                                            <td className="p-4 border-b">Aggressive recovery agent calls. Notice of default may be sent. Still difficult to get a favorable settlement offer.</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="p-4 border-b font-semibold">90+ Days</td>
                                            <td className="p-4 border-b text-red-600 font-bold">NPA (Non-Performing Asset)</td>
                                            <td className="p-4 border-b">The turning point. The loan is marked as a loss. Formal legal notices sent. The bank is now open to discussing One Time Settlement (OTS).</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="p-4 border-b font-semibold">180+ Days</td>
                                            <td className="p-4 border-b text-red-700 font-bold">Doubtful / Loss Asset</td>
                                            <td className="p-4 border-b">Maximum negotiation leverage. Banks are highly motivated to recover whatever possible and close the account.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 id="impact-on-cibil" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24">Impact on CIBIL and Financial Future</h2>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                A critical aspect of a one-time settlement is its impact on your credit history. When you settle a ₹20 Lakh loan for a lower amount (e.g., ₹10 Lakhs), the bank takes a loss of ₹10 Lakhs. 
                            </p>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                <strong>Status Update:</strong> The bank will report this to CIBIL and other credit bureaus, updating your loan account status to <strong>"Settled"</strong> or "Post Write-off Settled", rather than "Closed".
                            </p>
                            <p className="text-gray-700 mb-8 leading-relaxed">
                                <strong>The consequence:</strong> A "Settled" status negatively impacts your credit score. Your CIBIL score will drop, and you will find it extremely difficult to obtain new unsecured loans (like personal loans or credit cards) for the next 2 to 4 years. However, this is often a necessary trade-off to escape a massive debt trap that you cannot realistically repay.
                            </p>

                            <h2 id="legal-actions" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24">Can the Bank Take Legal Action for ₹20 Lakhs?</h2>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Because ₹20 Lakhs is a substantial amount, banks will deploy their legal teams to put pressure on you. However, you must understand your rights. A personal loan is an unsecured loan.
                            </p>
                            <div className="space-y-4 mb-8">
                                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-2">No Arrest Warrants for Default</h4>
                                    <p className="text-gray-700 text-sm m-0">Inability to pay a loan is a civil breach of contract, not a criminal offense. The police cannot arrest you for defaulting on a loan, nor can they file an FIR for cheating (unless you submitted fraudulent documents to obtain the loan).</p>
                                </div>
                                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-2">Arbitration Notices</h4>
                                    <p className="text-gray-700 text-sm m-0">You may receive an arbitration notice from a lawyer appointed by the bank. This is a private dispute resolution mechanism, not a court order. You have the right to challenge it legally.</p>
                                </div>
                                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-2">Cheque Bounce (Section 138)</h4>
                                    <p className="text-gray-700 text-sm m-0">If you provided post-dated cheques as security that bounced, the bank can file a case under Section 138 of the Negotiable Instruments Act. This is a criminal offense, but it is bailable, and courts usually encourage out-of-court settlements.</p>
                                </div>
                            </div>

                            <h2 id="eligibility-criteria" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24">Eligibility for a Massive Waiver</h2>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Banks do not hand out settlement waivers just because you ask for one. You must prove that you are facing genuine financial hardship and absolutely cannot pay the full ₹20 Lakhs. To secure a good settlement, you need to provide evidence of:
                            </p>
                            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
                                <li><strong>Loss of Employment:</strong> Termination letters, resignation emails, or proof of a shuttered business.</li>
                                <li><strong>Medical Emergencies:</strong> Extensive hospital bills or diagnosis reports draining your savings.</li>
                                <li><strong>Zero Assets:</strong> Bank statements showing depleted accounts and lack of liquid assets to liquidate.</li>
                                <li><strong>Over-leveraged:</strong> Proof of <Link href="/settle-multiple-personal-loans" className="text-blue-600 font-medium hover:underline">multiple other loans</Link> and EMIs that exceed your monthly income.</li>
                            </ul>

                            <h2 id="negotiation-strategy" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24">Negotiation Strategy for a ₹20 Lakh Loan</h2>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Negotiating a high-value loan requires extreme caution. A mistake here could cost you lakhs of rupees. Here are the golden rules for negotiation:
                            </p>
                            
                            <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-600 mb-8">
                                <h4 className="font-bold text-green-900 mb-3 text-lg">The Golden Rules of Settlement</h4>
                                <ul className="space-y-3 text-green-800 text-sm">
                                    <li><strong>Start Low:</strong> Never accept the first offer. If they offer ₹15 Lakhs, counter with ₹5 Lakhs. Meet in the middle.</li>
                                    <li><strong>Demand Written Proof:</strong> Never pay a single rupee based on a verbal promise or WhatsApp message from a recovery agent. Always demand a formal settlement letter on official bank letterhead.</li>
                                    <li><strong>Ensure the "Full and Final" Clause:</strong> The settlement letter must explicitly state that the agreed amount is in "Full and Final Settlement" of the loan account, and no further dues remain.</li>
                                    <li><strong>Obtain the NDC:</strong> After making the payment, ensure you receive the No Dues Certificate (NDC) or No Objection Certificate (NOC) from the bank within 15-30 days.</li>
                                </ul>
                            </div>

                            <h2 id="how-to-start" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24">How to Start the Settlement Process</h2>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Dealing with a ₹20 Lakh default requires professional legal shielding. Recovery agents will try to harass your family, visit your workplace, and mentally break you into paying. You do not have to fight this alone. By hiring legal experts specializing in debt resolution, you can completely halt the harassment while they negotiate the settlement on your behalf, legally and formally.
                            </p>
                            <p className="text-gray-700 mb-12 leading-relaxed">
                                With the right legal defense, a seemingly impossible ₹20 Lakh debt burden can be systematically dismantled and settled within your financial capacity, allowing you to reclaim your peace of mind and rebuild your life.
                            </p>

                            {/* Share this Guide */}
                            <div className="border-t border-gray-200 pt-8 mt-12">
                                <h4 className="font-bold text-gray-900 mb-4">Share this Guide</h4>
                                <div className="flex gap-4">
                                    <a 
                                        href={`https://api.whatsapp.com/send?text=Check out this guide on settling a 20 Lakh personal loan: ${currentUrl}`} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                    </a>
                                    <a 
                                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=Settle Your 20 Lakh Personal Loan`} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-[#0077b5] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                    </a>
                                    <a 
                                        href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=Settle Your 20 Lakh Personal Loan Process`} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                                    </a>
                                </div>
                            </div>

                            {/* Sources & References */}
                            <div className="border-t border-gray-200 pt-8 mt-12" id="references">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Sources & References</h3>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li>
                                        <a href="https://rbi.org.in/Scripts/NotificationUser.aspx?Id=12373" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                            RBI Guidelines on Fair Practices Code for Lenders (Harassment Rules)
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.cibil.com/faq/credit-score-and-loan-basics" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                            CIBIL FAQ on "Settled" vs "Closed" Account Status
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://legislative.gov.in/sites/default/files/A1881-26.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                            The Negotiable Instruments Act, 1881 (Section 138 details)
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </article>
                    </main>

                    {/* Right Sidebar: Sticky Cards */}
                    <aside className="lg:w-1/4 hidden lg:block sticky top-14 h-fit space-y-6">
                        
                        {/* Author Card */}
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Written By</p>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-xl">
                                    A
                                </div>
                                <div>
                                    <Link href="/authors/ashish" className="font-bold text-gray-900 hover:text-blue-600 block">
                                        Ashish
                                    </Link>
                                    <p className="text-xs text-gray-500 m-0">Legal & Financial Expert</p>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-gray-100">
                                <a 
                                    href="https://linkedin.com/in/ashish" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-medium"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                    Connect on LinkedIn
                                </a>
                            </div>
                        </div>

                        {/* CTA Card */}
                        <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-3xl shadow-md text-white">
                            <h4 className="font-bold text-xl mb-3">Stop Recovery Agents</h4>
                            <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                                Constant calls and threats? Our legal experts can stop harassment immediately and negotiate your high-value loan settlement.
                            </p>
                            <Link href="/contact" className="block w-full text-center bg-white text-blue-900 font-bold py-3 px-4 rounded-xl hover:bg-gray-100 transition-colors">
                                Consult Expert Now
                            </Link>
                        </div>

                        {/* Related Articles Card */}
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                            <h4 className="font-bold text-gray-900 mb-3 pb-2 border-b">Related Guides</h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/personal-loan-settlement" className="group block">
                                        <p className="text-[13px] font-medium text-gray-600 group-hover:text-blue-600 transition-colors m-0 leading-snug">
                                            The Complete Guide to Personal Loan Settlements
                                        </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/best-lawyer-for-notice-for-loan-default" className="group block">
                                        <p className="text-[13px] font-medium text-gray-600 group-hover:text-blue-600 transition-colors m-0 leading-snug">
                                            How to Reply to a Bank Legal Notice for Loan Default
                                        </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/how-to-stop-recovery-agent-harassment" className="group block">
                                        <p className="text-[13px] font-medium text-gray-600 group-hover:text-blue-600 transition-colors m-0 leading-snug">
                                            Legal Steps to Stop Recovery Agent Harassment
                                        </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/settle-multiple-personal-loans" className="group block">
                                        <p className="text-[13px] font-medium text-gray-600 group-hover:text-blue-600 transition-colors m-0 leading-snug">
                                            Strategies for Settling Multiple Personal Loans at Once
                                        </p>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </aside>
                </div>
            </div>
        </>
    );
}
