'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

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
        { id: 'cruelty-of-collection', label: 'Debt Collection During Illness' },
        { id: 'compassionate-grounds', label: 'Understanding Compassionate Grounds' },
        { id: 'request-moratorium', label: 'Requesting a Medical Moratorium' },
        { id: 'negotiate-settlement', label: 'Negotiating a Deep Settlement' },
        { id: 'success-story', label: 'Success Story' },
        { id: 'faqs', label: 'Frequently Asked Questions' },
    ];

    const faqs = [
        {
            question: "Can I stop paying my EMI if I have a severe medical emergency?",
            answer: "You cannot simply stop paying without consequences. However, you can formally request a temporary moratorium or restructured payment plan from the Grievance Redressal Officer based on compassionate grounds."
        },
        {
            question: "What documents do banks require to prove a medical emergency?",
            answer: "Banks require verified hospital admission records, discharge summaries, detailed medical bills, and a doctor's certificate explicitly stating the patient's inability to work or the severe financial drain caused by the treatment."
        },
        {
            question: "Will the bank waive my loan entirely if I have cancer or a critical illness?",
            answer: "Complete loan waivers are exceedingly rare. However, banks are highly likely to offer a deep settlement haircut (waiving all interest, penalties, and a portion of the principal) if faced with verified critical illness documentation."
        },
        {
            question: "Do recovery agents have the right to visit me in the hospital?",
            answer: "Absolutely not. RBI guidelines strictly prohibit recovery agents from engaging in any behavior that causes public humiliation or harassment, including visiting hospitals or contacting relatives regarding the debt."
        },
        {
            question: "Who should I contact at the bank regarding a medical hardship application?",
            answer: "Do not deal with third party recovery agents. Submit your hardship letter and medical evidence directly to the Principal Nodal Officer or the Grievance Redressal Officer (GRO) of the bank."
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
                        Loan Settlement During<br />
                        <span className="text-blue-300">Medical Emergencies</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Learn how to formally request a bank moratorium or a deep settlement on compassionate grounds using your medical records.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Request Legal Assistance
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
                                        Medical Emergency Settlement
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
                                When a severe illness or the hospitalization of a family member drains your savings, defaulting on a loan is often unavoidable. Unfortunately, borrowers in the midst of a medical crisis are frequently subjected to the same ruthless recovery tactics as willful defaulters. However, you have the right to demand humane treatment. Discover how to leverage banking regulations to formally request a moratorium, halt recovery harassment, and negotiate a deep loan settlement on compassionate grounds using your medical records.
                            </p>

                            <h2 id="cruelty-of-collection" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">The Cruelty of Debt Collection During Illness</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Indian healthcare system operates largely on an out of pocket expenditure model. A sudden diagnosis of cancer, a major cardiovascular event requiring immediate surgery, or a severe accident can instantly wipe out years of accumulated family savings. In these desperate situations, individuals are often forced to redirect funds originally earmarked for Equated Monthly Installments (EMIs) toward life saving medical interventions. Consequently, personal loans and credit card bills fall into default.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                What follows is a profoundly traumatic experience. The banking system is largely automated, meaning an algorithm does not differentiate between a borrower who lost their job, a willful defaulter who absconded with funds, and a father sitting in an Intensive Care Unit waiting room. The moment the EMI mandate bounces, the account is flagged, and the contact details are outsourced to third party recovery agencies. These agencies operate on aggressive commission structures and are notoriously insensitive to personal tragedies.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Borrowers facing medical emergencies report horrific instances of recovery harassment. Agents may incessantly call the borrower while they are undergoing chemotherapy, they may verbally abuse family members who are already paralyzed by anxiety, and in some egregious cases, they have even attempted to visit hospitals to demand payment. This relentless psychological pressure severely hampers the recovery process of the patient and creates an environment of intolerable distress. Understanding your rights and knowing how to legally intercept this automated cruelty is paramount.
                            </p>

                            <h2 id="compassionate-grounds" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Understanding Compassionate Grounds in Indian Banking</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To combat this mechanical ruthlessness, borrowers must understand the concept of "Compassionate Grounds" within the framework of Indian banking regulations. While banks are commercial entities driven by profit, they are also heavily regulated by the Reserve Bank of India (RBI). The RBI places a strong emphasis on fair banking practices and customer protection, specifically mandating that banks must adopt sympathetic and humane approaches when dealing with borrowers facing genuine, severe hardships.
                            </p>

                            {/* Data Callout Section Type */}
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200 mb-8 mt-6">
                                <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    BCSBI Code of Bank's Commitment
                                </h4>
                                <ul className="space-y-4 text-blue-800">
                                    <li className="flex justify-between border-b border-blue-200 pb-2">
                                        <span className="font-semibold">Sympathetic Consideration:</span>
                                        <span>The Banking Codes and Standards Board of India (BCSBI) stipulates that banks must consider cases of genuine financial difficulty, including medical emergencies, with sympathy and positive intent.</span>
                                    </li>
                                    <li className="flex justify-between border-b border-blue-200 pb-2">
                                        <span className="font-semibold">Prohibition of Harassment:</span>
                                        <span>Agents are strictly forbidden from resorting to intimidation, verbal abuse, or contacting borrowers at inappropriate locations (such as hospitals or during periods of mourning).</span>
                                    </li>
                                    <li className="flex justify-between border-b border-blue-200 pb-2">
                                        <span className="font-semibold">Restructuring Mandate:</span>
                                        <span>Banks possess the internal authority to restructure loans, grant moratoriums, or offer deep settlements if documentary evidence proves a borrower's inability to pay due to health reasons.</span>
                                    </li>
                                </ul>
                                <p className="mt-4 text-sm text-blue-700 italic">
                                    If a recovery agent ignores your medical situation and continues to harass you, they are violating RBI guidelines. You have the right to escalate the matter immediately to the Banking Ombudsman.
                                </p>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">What Constitutes a Valid Medical Emergency?</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Banks will not grant concessions based on a verbal claim of a minor ailment. To successfully invoke compassionate grounds, the medical emergency must be severe, verifiable, and financially debilitating. Valid emergencies typically include a diagnosis of a critical illness (such as cancer, kidney failure, or severe cardiac conditions), major surgical interventions requiring prolonged hospitalization, or catastrophic accidents resulting in long term disability or loss of income. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Furthermore, the emergency does not strictly need to apply to the borrower alone. If the borrower is the primary financial provider for a spouse, child, or dependent parent who is undergoing severe medical treatment, the resultant financial drain is equally valid grounds for seeking a settlement or restructuring.
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">RBI Guidelines on Humane Recovery Practices</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The RBI's Fair Practices Code dictates the boundaries of acceptable recovery behavior. Agents cannot call at ungodly hours, they cannot discuss your debt with neighbors or colleagues, and most importantly, they must respect a borrower's explicit request for privacy during a medical crisis. When a borrower formally informs the bank of a severe hospitalization, the bank's internal compliance protocols should ideally halt outbound recovery calls temporarily. The failure of banks to implement this pause is a systemic flaw, which is why borrowers must take proactive, documented steps to enforce their rights and establish a strong <Link href="/loan-default-recovery-freeze-defense" className="text-blue-600 hover:underline">loan default recovery freeze defense</Link>.
                            </p>

                            <h2 id="request-moratorium" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">How to Formally Request a Medical Moratorium</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A moratorium is a temporary holiday from making EMI payments. During a medical crisis, securing a three to six month moratorium provides critical breathing room. However, you cannot simply stop paying and assume the bank will understand. You must formally petition the bank's hierarchy, bypassing the lower level recovery agents who have no authority to grant concessions.
                            </p>

                            {/* Step Checklist Section Type */}
                            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm mb-8 mt-6">
                                <h4 className="font-bold text-xl text-gray-900 mb-4">Steps to Apply for a Medical Hardship Concession</h4>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold mr-4">1</div>
                                        <p className="text-gray-700 pt-1"><strong>Draft a Formal Hardship Letter:</strong> Write a clear, concise letter addressed to the Principal Nodal Officer or the Grievance Redressal Officer. Explain the exact nature of the illness, the impact on your income, and clearly state whether you are requesting a temporary moratorium or a full settlement.</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold mr-4">2</div>
                                        <p className="text-gray-700 pt-1"><strong>Compile Verified Medical Evidence:</strong> Gather official hospital admission records, discharge summaries on hospital letterhead, diagnostic reports confirming the critical illness, and a comprehensive summary of medical bills paid out of pocket.</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold mr-4">3</div>
                                        <p className="text-gray-700 pt-1"><strong>Obtain a Doctor's Certificate:</strong> Ask the treating physician to provide a signed certificate explicitly stating that the patient is unable to work or requires prolonged, expensive medical care. This is a critical piece of evidence.</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold mr-4">4</div>
                                        <p className="text-gray-700 pt-1"><strong>Submit via Registered Channels:</strong> Do not hand these documents to a collection agent. Send the complete dossier via Registered Post with Acknowledgment Due, and simultaneously email scanned copies to the official grievance email IDs listed on the bank's website.</p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Drafting the Hardship Letter</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The hardship letter is your formal legal notification to the bank. It should not be emotional or pleading; rather, it should be factual and legally robust. State your loan account number, outline the exact date the medical emergency commenced, detail the projected timeline of the treatment, and explain exactly why the EMI is currently unsustainable. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Crucially, include a specific paragraph invoking the RBI guidelines on fair practices. State clearly that due to the severe medical condition, any outbound recovery calls to your phone or visits to your residence are causing severe medical distress and will be treated as illegal harassment. This puts the bank on legal notice. If they continue to harass you after receiving this letter, you have grounds for a very strong complaint to the banking ombudsman.
                            </p>

                            <h2 id="negotiate-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Negotiating a Deep Settlement on Medical Grounds</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If the medical crisis has resulted in a permanent loss of income or a catastrophic financial drain, a temporary moratorium will merely delay the inevitable. In such cases, you must pivot from requesting a pause to negotiating a full and final settlement. The objective is to close the loan account entirely for a fraction of the outstanding balance.
                            </p>

                            {/* Comparison Table Section Type */}
                            <div className="overflow-x-auto mb-8 mt-6">
                                <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="py-4 px-6 text-left text-sm font-bold text-gray-900 border-b">Parameter</th>
                                            <th className="py-4 px-6 text-left text-sm font-bold text-gray-700 border-b">Standard Default Settlement</th>
                                            <th className="py-4 px-6 text-left text-sm font-bold text-blue-700 border-b">Medical Emergency Settlement</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="py-4 px-6 text-sm text-gray-700 font-medium">Negotiation Leverage</td>
                                            <td className="py-4 px-6 text-sm text-gray-600">Based purely on aging of the debt and willingness to pay.</td>
                                            <td className="py-4 px-6 text-sm text-gray-600">Based on verifiable inability to pay due to health crisis.</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="py-4 px-6 text-sm text-gray-700 font-medium">Expected Haircut</td>
                                            <td className="py-4 px-6 text-sm text-gray-600">Typically 30 to 50 percent waiver on the total outstanding.</td>
                                            <td className="py-4 px-6 text-sm text-gray-600">Can reach 70 to 80 percent waiver, often settling for just the principal amount.</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="py-4 px-6 text-sm text-gray-700 font-medium">Approval Authority</td>
                                            <td className="py-4 px-6 text-sm text-gray-600">Standard branch managers or regional collection heads.</td>
                                            <td className="py-4 px-6 text-sm text-gray-600">Requires escalation to central risk committees or the Principal Nodal Officer.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Leveraging the Grievance Redressal Officer (GRO)</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The average recovery agent on the phone has zero authority to approve a deep settlement based on medical records. Their system only allows them to offer standard discounts based on how many months the account has been in default. To secure a compassionate grounds settlement, you must elevate the negotiation far above the call center floor.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                You must address your settlement proposal directly to the Grievance Redressal Officer or the Principal Nodal Officer. These senior bank officials have the mandate to review exceptional cases and the authority to override standard recovery protocols. When presenting the settlement offer, be realistic. State clearly that due to the ongoing medical expenses, you can only arrange a specific, small lump sum amount (often borrowed from relatives) to close the account permanently.
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Why Banks Accept Larger Haircuts for Medical Defaults</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                From a purely analytical perspective, banks understand that a borrower facing a catastrophic medical emergency represents a dead end for recovery. If a borrower has zero income and massive hospital bills, no amount of aggressive calling or legal threats will magically generate money. Furthermore, pursuing legal action against a critically ill patient is a public relations disaster and invites severe censure from the regulatory bodies.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Therefore, the bank's internal risk committee prefers to cut their losses, accept a minimal settlement to close the Non Performing Asset (NPA) file, and move on. While a deep settlement will undoubtedly impact your credit score negatively, prioritizing your health and survival is the only logical choice. Once the crisis has passed and the debt is settled, you can begin the long process of learning <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="text-blue-600 hover:underline">how to improve CIBIL score after loan settlement</Link>. Understanding <Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="text-blue-600 hover:underline">what is loan settlement and how does it work in India</Link> in the context of a medical crisis can literally save lives by eliminating extreme financial stress.
                            </p>

                            <h2 id="success-story" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Success Story: Halting Harassment During Cancer Treatment</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Consider the case of a school teacher in Bangalore who was diagnosed with advanced stage breast cancer. She had an outstanding personal loan of INR 8 Lakhs. Forced to take unpaid leave for chemotherapy, she immediately defaulted on her EMIs. Within weeks, recovery agents began calling her excessively, threatening to seize her household assets, which caused her severe panic attacks and worsened her physical condition.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Desperate, her husband contacted our legal team. We immediately intervened, drafting a stern legal notice addressed to the bank's Principal Nodal Officer. The notice included comprehensive medical documentation from the oncologist, verifying the severity of the illness and the complete loss of income. We invoked the RBI guidelines on humane treatment and explicitly warned the bank that any further calls would be treated as criminal harassment.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The impact was immediate. The bank's central compliance team flagged the account, and all recovery calls stopped within 24 hours. Given the terminal nature of the illness and the clear inability to pay, the bank's risk committee reviewed the file. After a month of negotiation, they agreed to close the INR 8 Lakh loan for a one time settlement of just INR 1.5 Lakhs, which the family managed to arrange from relatives. The No Dues Certificate was issued, completely removing the crushing burden of debt from a family fighting for survival.
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
