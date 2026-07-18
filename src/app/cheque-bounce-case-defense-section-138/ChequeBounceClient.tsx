'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ChequeBounceClient() {
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
        { id: 'reality-of-notices', label: 'The Reality of Section 138 Notices' },
        { id: 'legal-process-map', label: 'Step-by-Step Legal Process Map' },
        { id: 'responding-statutory', label: 'Responding to the 15-Day Notice' },
        { id: 'securing-bail', label: 'Securing Bail on the First Hearing' },
        { id: 'challenging-debt', label: 'Challenging the Enforceable Debt' },
        { id: 'red-flags', label: 'Top Red Flags: Fake or Forged Notices' },
        { id: 'misuse-blank-cheques', label: 'Misuse of Blank Security Cheques' },
        { id: 'when-to-hire-lawyer', label: 'When to Hire a Specialized Lawyer' },
        { id: 'success-story', label: 'Success Story: Defeating an Unjust Case' },
        { id: 'faqs', label: 'Frequently Asked Questions' },
    ];

    const faqs = [
        {
            question: 'Can I go to jail for a bounced cheque on a personal loan?',
            answer: 'Under Section 138 of the Negotiable Instruments Act, a cheque bounce is a criminal offense punishable by up to two years in jail. However, if the cheque was given as an undated security cheque and presented without notice, you have a strong legal defense to avoid jail time and seek compounding (settlement).'
        },
        {
            question: 'What should I do if I receive a 15 day statutory legal notice from the bank?',
            answer: 'You must send a formal, legally drafted reply within the 15 day window. Failing to reply implies you admit the debt. Your lawyer will draft a response challenging the validity of the notice and demanding the return of your security cheque.'
        },
        {
            question: 'Can the bank deposit my blank security cheque for the entire outstanding loan amount?',
            answer: 'Banks often try to do this, but courts have ruled that a blank cheque filled in later by the bank does not automatically constitute a legally enforceable debt for the entire amount, especially if the borrower was not informed before presentation.'
        },
        {
            question: 'How can I verify if a Lok Adalat summons via WhatsApp is fake?',
            answer: 'Fake recovery agencies often send forged legal notices via WhatsApp. Real Lok Adalat summons are issued formally by the State Legal Services Authority, usually via registered post, and bear an official seal and case number verifiable on the eCourts portal.'
        },
        {
            question: 'Is it possible to settle the loan even after a Section 138 case has been filed?',
            answer: 'Yes, Section 138 cases are compoundable offenses. This means you can negotiate a One Time Settlement (OTS) with the bank at any stage of the trial. Once the settlement is paid, the bank will withdraw the criminal complaint.'
        }
    ];

    const reviews = [
        {
            name: 'Vikram Singh',
            location: 'Delhi',
            stars: 5,
            comment: 'I was terrified when I received a summons for a bounced security cheque. The legal team at CredSettle stepped in, secured my bail on the first hearing, and eventually forced the bank to settle the loan out of court for a fraction of the demand.'
        },
        {
            name: 'Amit Das',
            location: 'Kolkata',
            stars: 5,
            comment: 'The bank tried to use a blank cheque I signed 3 years ago to extort money. Thanks to the expert lawyers here, we challenged the legally enforceable debt claim and the case was dismissed. Best DRT lawyers.'
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
                        Defending a Cheque Bounce Case (Section 138):<br />
                        <span className="text-blue-300">How to Beat Unjust Loan Recovery</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Discover the precise legal roadmap to defend against Section 138 notices stemming from misused security cheques in personal loan defaults.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Consult a Defence Expert Today
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
                                        Defend Cheque Bounce Case
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
                            
                            <p className="text-gray-700 leading-relaxed mb-6 font-semibold">
                                Every year, Indian courts receive over 33 lakh cheque bounce cases under Section 138 of the Negotiable Instruments Act, making it the most common legal threat faced by loan defaulters. However, when banks misuse blank, undated security cheques taken during the initial loan application, the courts have consistently ruled that these do not constitute a legally enforceable debt if presented maliciously. Understanding the intricacies of this law is your strongest shield.
                            </p>

                            <h2 id="reality-of-notices" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">The Reality of Section 138 Notices for Loan Defaults</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Receiving a legal notice under Section 138 of the Negotiable Instruments Act is a terrifying experience for most borrowers. The language used in these notices is intentionally drafted to instill maximum fear, often highlighting the possibility of a two year prison sentence and a fine extending to twice the amount of the dishonored cheque. For a typical salaried employee or small business owner dealing with a financial crisis, this threat often leads to extreme anxiety and desperate, irrational financial decisions, such as taking high interest loans from unregulated digital lenders to temporarily satisfy the bank.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                However, the reality of a Section 138 case is vastly different from the immediate threat projected by collection agencies. It is critical to separate the psychological warfare tactics of recovery agents from the actual legal proceedings in a court of law. While Section 138 is indeed a criminal provision, the Indian judicial system recognizes that a vast majority of these cases stem from genuine financial distress or disputes over the exact amount owed, rather than outright criminal fraud. The Supreme Court has repeatedly emphasized that the primary objective of this provision is compensatory rather than strictly punitive.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most crucial element to understand is that not every bounced cheque automatically results in a conviction. The complainant (in this case, the bank or the Non Banking Financial Company) bears the burden of proving that the cheque was issued in discharge of a legally enforceable debt or liability. If the borrower can demonstrate, through competent legal representation, that the cheque was merely a security instrument handed over blank at the time of loan disbursement and was subsequently filled in arbitrarily by the bank without prior accounting or notice, the entire foundation of the Section 138 case can collapse.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Furthermore, the process is highly technical. A single procedural error by the bank, such as failing to send the statutory notice within the mandated 30 days of receiving the cheque return memo, or filing the complaint beyond the limitation period, is grounds for outright dismissal of the case. Therefore, panic is not the solution. A calm, methodical, and legally informed response is the only way to successfully navigate this challenge.
                            </p>

                            {/* Section Type: Legal Process Map */}
                            <h2 id="legal-process-map" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Step-by-Step Legal Process Map for Defending a Cheque Bounce</h2>
                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-200 mb-8 overflow-hidden">
                                <h3 className="text-xl font-bold text-blue-900 mb-6 text-center">The Chronology of a Section 138 Defence</h3>
                                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-300 before:to-transparent">
                                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-500 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">1</div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-blue-200 bg-white shadow">
                                            <h4 className="font-bold text-gray-900 mb-1">Cheque Dishonor & Return Memo</h4>
                                            <p className="text-sm text-gray-600">The bank presents the cheque, it bounces due to insufficient funds, and the drawee bank issues a return memo citing the specific reason.</p>
                                        </div>
                                    </div>
                                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-500 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">2</div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-blue-200 bg-white shadow">
                                            <h4 className="font-bold text-gray-900 mb-1">Issuance of Statutory Notice</h4>
                                            <p className="text-sm text-gray-600">Within 30 days of receiving the memo, the bank must send a legal notice demanding payment of the cheque amount within 15 days.</p>
                                        </div>
                                    </div>
                                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-500 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">3</div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-blue-200 bg-white shadow">
                                            <h4 className="font-bold text-gray-900 mb-1">Drafting the Legal Reply</h4>
                                            <p className="text-sm text-gray-600">The borrower must send a robust reply denying liability and outlining defenses like misuse of a blank security cheque.</p>
                                        </div>
                                    </div>
                                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-500 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">4</div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-blue-200 bg-white shadow">
                                            <h4 className="font-bold text-gray-900 mb-1">Filing of the Complaint & Summons</h4>
                                            <p className="text-sm text-gray-600">If payment is not made, the bank files a criminal complaint within 30 days. The magistrate then issues a summons for appearance.</p>
                                        </div>
                                    </div>
                                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-500 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">5</div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-blue-200 bg-white shadow">
                                            <h4 className="font-bold text-gray-900 mb-1">Appearance and Bail</h4>
                                            <p className="text-sm text-gray-600">The accused appears in court, applies for bail (a routine procedure in bailable offenses), and pleads not guilty to trigger the trial phase.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This procedural map clearly illustrates that you have multiple opportunities to intervene and defend yourself before any severe judicial action is taken. The worst thing a borrower can do is ignore the notices and fail to appear in court, which forces the magistrate to issue Non Bailable Warrants (NBW) to secure their presence. By proactively engaging in the legal process, you maintain control over your defense.
                            </p>

                            <h3 id="responding-statutory" className="text-2xl font-bold text-gray-800 mt-8 mb-4">Responding to the 15-Day Statutory Notice</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The first, and arguably most critical, defense mechanism is the reply to the statutory demand notice. The law states that once you receive the notice, you have exactly 15 days to pay the demanded amount. If you fail to pay, the cause of action arises for the bank to file the criminal complaint. A common mistake borrowers make is either ignoring this notice completely or trying to negotiate informally over the phone with recovery agents. Both approaches are legally disastrous.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you do not reply to the notice in writing, the court may later draw an adverse inference, assuming that by remaining silent, you implicitly accepted the liability stated in the notice. A robust, legally drafted reply serves multiple purposes. It officially places your defense on record before the trial even begins. The reply must explicitly state that the cheque was given as a blank security instrument at the time of loan inception and was never intended to discharge the inflated, artificially calculated debt amount the bank is currently claiming. It should highlight any discrepancies in the account statement and demand a thorough reconciliation.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Furthermore, the reply should formally demand the return of all unused security cheques held by the bank. If you can prove that you had previously sent emails or letters instructing the bank not to present the security cheques because you intended to opt for a <Link href="/loan-settlement" className="text-blue-600 hover:underline">loan settlement</Link>, this documentation becomes a powerful weapon in court to prove malicious intent by the financial institution.
                            </p>

                            <h3 id="securing-bail" className="text-2xl font-bold text-gray-800 mt-8 mb-4">Securing Bail on the First Hearing</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Once the complaint is filed and the magistrate is satisfied that a prima facie case exists, a summons is issued directing the accused to appear in court on a specific date. This is the stage where fear peaks, as borrowers dread the prospect of being arrested in the courtroom. It is vital to understand that an offense under Section 138 is bailable in nature. This means that bail is a matter of right, not discretion, provided you appear in court on the designated date and comply with the procedural requirements.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When you receive the summons, you must engage an advocate immediately. On the date of the hearing, your lawyer will move a bail application under Section 436 of the Code of Criminal Procedure. The court will typically grant bail upon the submission of a bail bond and, usually, a surety (a guarantor who ensures your future appearance in court). The process is straightforward, but it requires precise documentation and adherence to court decorum. Trying to handle this without specialized legal counsel is highly risky.
                            </p>

                            <h3 id="challenging-debt" className="text-2xl font-bold text-gray-800 mt-8 mb-4">Challenging the "Legally Enforceable Debt"</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The cornerstone of a successful defense lies in dismantling the presumption that the cheque was issued for a "legally enforceable debt." Section 139 of the Act creates a statutory presumption in favor of the holder of the cheque (the bank). However, this is a rebuttable presumption. The standard of proof required by the accused to rebut this presumption is not "beyond reasonable doubt," but rather a "preponderance of probabilities."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This means you only need to create a probable, believable doubt in the mind of the judge regarding the existence of the debt exactly as claimed. For instance, if the bank claims the outstanding balance is INR 5,00,000, and they present a cheque for exactly INR 5,00,000, but your account statements show you had recently made a partial payment of INR 50,000 that was not accounted for, the cheque amount exceeds the legally enforceable debt on the date of presentation. The Supreme Court has ruled that a cheque cannot be presented for an amount greater than the actual liability. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Cross examining the bank official during the trial is crucial. A skilled lawyer will interrogate the official on how the cheque amount was calculated, when the cheque was filled out (and by whom), and whether the borrower was notified before the presentation of the security cheque. If the bank admits that the cheque was filled out by their staff without the borrower's explicit consent for that specific amount, the case often leans heavily in favor of the defense.
                            </p>

                            {/* Section Type: Red Flags List */}
                            <h2 id="red-flags" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Top Red Flags: When a Notice is Fake or Forged</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In their desperation to collect funds, unauthorized recovery agencies often resort to sending fabricated legal documents. It is imperative to distinguish between a genuine court summons or lawyer's notice and a forged intimidation tactic designed solely to create panic. Knowing these red flags will save you immense stress and prevent you from falling victim to extortion.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-red-50 p-6 rounded-2xl border border-red-100 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-red-500 text-white p-2 rounded-full">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                        </div>
                                        <h4 className="font-bold text-gray-900">Delivery via WhatsApp Only</h4>
                                    </div>
                                    <p className="text-gray-700 text-sm flex-grow">Genuine statutory notices under Section 138 must be sent via Registered Post with Acknowledgment Due (RPAD) or Speed Post to ensure proof of delivery. A PDF document sent exclusively over WhatsApp by an unknown number is almost certainly a pressure tactic by a recovery agent, not a valid legal step.</p>
                                </div>
                                
                                <div className="bg-red-50 p-6 rounded-2xl border border-red-100 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-red-500 text-white p-2 rounded-full">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                        </div>
                                        <h4 className="font-bold text-gray-900">Missing Court Details</h4>
                                    </div>
                                    <p className="text-gray-700 text-sm flex-grow">A genuine court summons will always contain the precise name of the court, the presiding judge's designation, the Case Number (CNR Number), and the exact date and time for appearance. Forged summons often lack these specific details or invent fake court names like "High Court Recovery Tribunal."</p>
                                </div>

                                <div className="bg-red-50 p-6 rounded-2xl border border-red-100 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-red-500 text-white p-2 rounded-full">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                        </div>
                                        <h4 className="font-bold text-gray-900">Threats of Immediate Arrest</h4>
                                    </div>
                                    <p className="text-gray-700 text-sm flex-grow">Legal notices are formal documents demanding payment. They do not contain aggressive threats like "Police will arrive at your home tomorrow to arrest you" or "Your property will be auctioned within 24 hours." Such dramatic language is the hallmark of a fake notice designed to exploit a borrower's ignorance of the law.</p>
                                </div>

                                <div className="bg-red-50 p-6 rounded-2xl border border-red-100 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-red-500 text-white p-2 rounded-full">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                        </div>
                                        <h4 className="font-bold text-gray-900">Fake FIR Copies</h4>
                                    </div>
                                    <p className="text-gray-700 text-sm flex-grow">A cheque bounce is a bailable, non cognizable offense. The police generally do not register an FIR for a simple Section 138 matter; the complaint is filed directly before a magistrate. If you receive a PDF claiming to be an FIR for loan default, it is highly likely a forgery intended for extortion. Understand <Link href="/how-to-handle-recovery-agent-harrasment" className="text-blue-600 hover:underline">how to handle recovery agent harrasment</Link> when confronted with such fake documents.</p>
                                </div>
                            </div>

                            <h2 id="misuse-blank-cheques" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Bank's Misuse of Blank Security Cheques</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The foundation of modern retail lending in India heavily relies on the collection of Undated Security Cheques (UDCs) at the time of loan disbursement. Borrowers are routinely asked to sign a series of blank cheques and hand them over along with the loan agreement. The implicit understanding is that these cheques will only be utilized in the event of a severe default, and even then, only after proper notice and accounting.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                However, the misuse of these security instruments has become rampant. When an account turns into a Non Performing Asset (understanding <Link href="/what-is-npa" className="text-blue-600 hover:underline">what is npa</Link> is crucial here), banks often arbitrarily fill in the total outstanding amount, including inflated penal interest and arbitrary charges, and present the cheque for clearing. When it inevitably bounces, they initiate Section 138 proceedings to exert extreme pressure on the borrower.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The legal defense against this practice is robust. The courts have distinguished between a cheque issued to discharge a specific, quantified existing debt and a cheque given merely as security for a future, fluctuating liability. If the borrower can prove that the cheque was a security instrument and that the bank arbitrarily filled the amount without mutual reconciliation of the account statement, the Section 138 case loses its legal validity. Proving this requires analyzing the handwriting on the cheque, examining the loan agreement clauses regarding security cheques, and producing correspondence where the borrower requested the return of these cheques or offered a settlement.
                            </p>

                            <h2 id="when-to-hire-lawyer" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">When to Hire a Specialized Section 138 Lawyer</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The biggest mistake a borrower can make is attempting a DIY approach to a criminal statute. Many assume they can simply show up in court, explain their financial hardship to the judge, and ask for mercy. While the courts are sympathetic to genuine distress, a magistrate is bound by procedural law. If you fail to file the necessary applications on time or fail to properly cross examine the bank's witnesses, the judge has no choice but to rule based on the unrefuted evidence presented by the bank.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                You must consult the <Link href="/best-lawyer-for-personal-loans" className="text-blue-600 hover:underline">best lawyer for personal loans</Link> and cheque bounce defense the moment you receive the 15 day statutory notice. The reply drafted by your lawyer sets the tone for the entire subsequent trial. Furthermore, if you are located in a different city than where the bank has filed the case, a specialized lawyer can file applications seeking exemption from personal appearance for every hearing, saving you immense travel costs and disruption to your employment. A skilled advocate shifts the dynamic from the borrower being a terrified victim to being a formidable litigant holding the bank accountable for procedural lapses.
                            </p>

                            {/* Section Type: Success Story */}
                            <h2 id="success-story" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Success Story: Defeating an Unjust Cheque Bounce Case</h2>
                            <div className="bg-green-50 p-8 rounded-3xl border border-green-200 mb-8">
                                <h3 className="text-2xl font-bold text-green-900 mb-4">Case Study: The Misused Security Cheque</h3>
                                <p className="text-gray-700 leading-relaxed mb-4"><strong>The Scenario:</strong> A small business owner in Mumbai had taken an unsecured business loan of INR 15,00,000. Due to severe market downturns, he defaulted after repaying INR 8,00,000 in EMIs. The bank, instead of offering restructuring, took a blank security cheque he had signed three years prior, filled the amount as INR 18,00,000 (claiming exorbitant penal interest), and presented it. When it bounced, they filed a criminal case under Section 138.</p>
                                <p className="text-gray-700 leading-relaxed mb-4"><strong>The Legal Strategy:</strong> The borrower retained specialized defense counsel immediately upon receiving the summons. The legal team secured bail smoothly on the first hearing. During the trial, the lawyer aggressively cross examined the bank manager. The defense demonstrated that the ink used for the signature was vastly different in age and chemical composition from the ink used to fill the payee name and amount. Furthermore, they produced email evidence showing the borrower had previously requested a statement of account, which the bank ignored.</p>
                                <p className="text-gray-700 leading-relaxed"><strong>The Outcome:</strong> The Magistrate concluded that the cheque was a blank security instrument filled unilaterally by the bank for an unverified, inflated amount, failing the test of a "legally enforceable debt." The borrower was completely acquitted of the criminal charges. Facing a loss of leverage, the bank subsequently agreed to close the entire loan account through a negotiated One Time Settlement for just INR 3,50,000, saving the client massive financial ruin and providing complete peace of mind.</p>
                            </div>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Frequently Asked Questions on Section 138 Defaults</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Don't Face the Court Alone</h3>
                                <p className="text-blue-800 mb-6">A Section 138 notice is a serious legal maneuver by the bank, but it is not an automatic conviction. Our specialized defense lawyers have a proven track record of securing bail, dismantling fabricated claims of legally enforceable debt, and forcing banks to settle on fair terms. Protect your liberty and your finances.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Schedule a Legal Consultation Now
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The information provided on this page constitutes general legal awareness and does not replace formal legal advice. Section 138 cases are complex criminal proceedings. Always consult with a qualified advocate licensed to practice in your jurisdiction to discuss the specific details of your case before appearing in court.
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
                                    <Link href="/bank-recovery-defence" className="block text-[#3b82f6] hover:underline text-lg">Bank Recovery Defence</Link>
                                    <Link href="/drt-specialization" className="block text-[#3b82f6] hover:underline text-lg">DRT Specialization</Link>
                                    <Link href="/settlement-strategies" className="block text-[#3b82f6] hover:underline text-lg">Settlement Strategies</Link>
                                    <Link href="/msme-loan-defence" className="block text-[#3b82f6] hover:underline text-lg">MSME Loan Defence</Link>
                                </nav>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
            
            {/* Reviews Section at the bottom */}
            <section className="max-w-[1440px] mx-auto px-4 py-12 border-t border-gray-100">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Client Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
            </section>
        </>
    );
}
