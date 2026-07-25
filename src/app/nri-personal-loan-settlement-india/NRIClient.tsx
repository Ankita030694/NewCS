'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function NRIClient() {
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
        { id: 'nri-default-nightmare', label: 'The NRI Loan Default Nightmare' },
        { id: 'debunking-loc-myth', label: 'Debunking the Look Out Circular Myth' },
        { id: 'legal-jurisdiction', label: 'Legal Jurisdiction Over NRIs' },
        { id: 'remote-settlement', label: 'How to Settle Debt Remotely' },
        { id: 'success-story', label: 'Success Story' },
        { id: 'faqs', label: 'Frequently Asked Questions' },
    ];

    const faqs = [
        {
            question: "Can an NRI be arrested in India for an unsecured loan default?",
            answer: "No. Defaulting on an unsecured personal loan or credit card is a civil dispute, not a criminal offense. You cannot be arrested upon landing in India simply for failing to pay a civil debt."
        },
        {
            question: "Can banks issue a Look Out Circular (LOC) for a credit card default?",
            answer: "No. The Ministry of Home Affairs guidelines explicitly state that LOCs are reserved for cognizable offenses under the IPC, terrorism, or massive financial fraud detrimental to the economic interests of India, not retail loan defaults."
        },
        {
            question: "Will my passport be impounded if I visit India?",
            answer: "Banks do not have the authority to impound passports. Only a competent court or the passport authority can impound a passport, and this is exceedingly rare for standard unsecured civil defaults."
        },
        {
            question: "How can I settle my Indian credit card from abroad?",
            answer: "You can execute a remote loan settlement by granting a specific Power of Attorney (POA) to a trusted legal representative in India who will negotiate with the bank, verify the settlement letter, and collect the No Dues Certificate on your behalf."
        },
        {
            question: "Can foreign recovery agents harass me in my country of residence?",
            answer: "Indian banks generally lack the cross border jurisdiction and resources to deploy recovery agents in foreign countries like the US, UK, or UAE for unsecured retail debts. Threats of sending foreign police are entirely fabricated."
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
                        Loan Settlement for NRIs<br />
                        <span className="text-blue-300">Managing Indian Debt Remotely</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Debunking the Look Out Circular myths and providing a concrete legal roadmap to settle your Indian loans entirely from abroad.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Consult an Expert Remotely
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
                                        NRI Loan Settlement
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
                                For a Non Resident Indian, defaulting on a personal loan or credit card back home in India often triggers terrifying threats from recovery agents, including immediate arrest at the airport, passport impounding, and the issuance of Interpol Look Out Circulars. However, the vast majority of these threats are legally baseless intimidation tactics designed for cross border extortion. Discover the actual legal jurisdiction Indian banks possess over NRIs and learn exactly how to safely negotiate an NRI personal loan settlement entirely remotely.
                            </p>

                            <h2 id="nri-default-nightmare" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">The NRI Loan Default Nightmare</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The transition to a new country is financially draining. Many Non Resident Indians (NRIs) leverage unsecured credit facilities in India, such as personal loans or high limit credit cards, to fund their relocation, visa processing, or initial settlement expenses abroad. While the intention is almost always to repay this debt once they secure stable foreign income, unpredictable circumstances frequently intervene. Job losses, medical emergencies in a foreign land lacking social safety nets, or severe currency fluctuations can quickly render the scheduled Equated Monthly Installments (EMIs) entirely unaffordable.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When an NRI misses a few payments, the recovery process initiated by Indian banks is uniquely aggressive. Recognizing that they cannot easily send a physical recovery agent to a residence in Dubai, London, or New York, the banks pivot heavily towards psychological warfare. The primary weapon in this psychological arsenal is the manipulation of the NRI's inherent fear of immigration authorities and international legal complications. Recovery agents are specifically trained to weaponize distance, exploiting the borrower's lack of direct access to Indian legal counsel.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The emails and WhatsApp messages escalate rapidly. What begins as a polite reminder quickly devolves into drafted legal notices containing severe statutory warnings. These communications intentionally blur the critical legal distinction between a civil dispute and a criminal offense. They use terminology designed to panic the borrower into liquidating foreign assets or borrowing at exorbitant local rates to clear the Indian debt. To navigate this crisis effectively, an NRI must first decouple the emotional panic from the actual legal reality of cross border debt recovery.
                            </p>

                            <h2 id="debunking-loc-myth" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Debunking the Look Out Circular Myth</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most terrifying threat deployed by recovery agents against NRIs is the Look Out Circular, commonly abbreviated as LOC. Agents frequently claim that an LOC has already been issued against your passport and that the moment you land at Chhatrapati Shivaji Maharaj International Airport or Indira Gandhi International Airport, immigration officers will detain you. This specific threat is designed to prevent NRIs from visiting their sick parents or attending family events, forcing a settlement through emotional duress.
                            </p>

                            {/* Data Callout Section Type */}
                            <div className="bg-red-50 p-6 rounded-2xl border border-red-200 mb-8 mt-6">
                                <h4 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                    MHA Guidelines on Look Out Circulars
                                </h4>
                                <ul className="space-y-4 text-red-800">
                                    <li className="flex justify-between border-b border-red-200 pb-2">
                                        <span className="font-semibold">Issuing Authority:</span>
                                        <span>Only authorized law enforcement agencies (CBI, ED, Police) or courts can request an LOC. Banks cannot issue them directly for retail loans.</span>
                                    </li>
                                    <li className="flex justify-between border-b border-red-200 pb-2">
                                        <span className="font-semibold">Nature of Offense:</span>
                                        <span>LOCs are strictly reserved for cognizable criminal offenses, terrorism, or massive financial frauds detrimental to the national economy.</span>
                                    </li>
                                    <li className="flex justify-between border-b border-red-200 pb-2">
                                        <span className="font-semibold">Civil Debt Exclusion:</span>
                                        <span>The Ministry of Home Affairs explicitly prohibits the use of LOCs to settle standard civil disputes, including retail loan defaults.</span>
                                    </li>
                                </ul>
                                <p className="mt-4 text-sm text-red-700 italic">
                                    A recovery agent claiming they have "placed a block on your passport" for a personal loan default is committing illegal extortion. They possess absolutely no legal authority to influence Indian immigration controls.
                                </p>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Can an NRI be Arrested in India for a Loan?</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                It is imperative to state clearly: defaulting on an unsecured personal loan or a credit card is fundamentally a civil breach of contract. It is not a criminal offense under the Indian Penal Code. The Indian constitution does not permit debtor's prisons. You cannot be arrested by the police simply because you do not have the financial liquidity to repay a bank. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The only scenario where criminal liability arises is if the bank can definitively prove fraudulent intent at the very inception of the loan. For example, if you submitted forged salary slips, fake identity documents, or deliberately took a loan with the pre planned intention of absconding abroad without ever making a single payment, the bank could potentially register an FIR for cheating under Section 420. However, if you made EMIs for several months and subsequently faced genuine financial hardship, the courts view this strictly as a civil matter. Therefore, the threat of being handcuffed upon arrival in India for a standard default is a complete fabrication. If you want to know <Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="text-blue-600 hover:underline">what is loan settlement and how does it work in India</Link>, the first lesson is distinguishing civil liability from criminal threats.
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">The Threat of Passport Impounding at Airports</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Another frequent tactic is the threat of impounding your passport. Recovery agents will assert that they have notified the passport authorities to revoke your travel document, effectively trapping you in India if you visit. This is legally impossible for a bank to execute unilaterally.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Passports Act of 1967 provides very specific grounds under which a passport can be impounded or revoked. These grounds involve threats to national sovereignty, pending criminal proceedings where a summons has been ignored, or fraud in obtaining the passport itself. A civil dispute regarding a credit card balance does not meet the statutory threshold required to trigger passport revocation. Only a competent judicial magistrate, following due process in a criminal trial, can order the impounding of a passport. Retail recovery agents simply do not have this power.
                            </p>

                            <h2 id="legal-jurisdiction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Legal Jurisdiction of Indian Banks Over NRIs</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Understanding the actual legal reach of an Indian bank provides immense negotiating leverage. When you are residing in a foreign jurisdiction, the Indian legal system cannot automatically enforce its civil judgments against you without navigating complex international treaties.
                            </p>

                            {/* Comparison Table Section Type */}
                            <div className="overflow-x-auto mb-8 mt-6">
                                <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="py-4 px-6 text-left text-sm font-bold text-gray-900 border-b">Parameter</th>
                                            <th className="py-4 px-6 text-left text-sm font-bold text-blue-700 border-b">Civil Debt Default</th>
                                            <th className="py-4 px-6 text-left text-sm font-bold text-red-700 border-b">Criminal Financial Fraud</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="py-4 px-6 text-sm text-gray-700 font-medium">Nature of Dispute</td>
                                            <td className="py-4 px-6 text-sm text-gray-600">Breach of a financial contract due to inability to pay.</td>
                                            <td className="py-4 px-6 text-sm text-gray-600">Intentional deception using forged documents to steal funds.</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="py-4 px-6 text-sm text-gray-700 font-medium">Police Involvement</td>
                                            <td className="py-4 px-6 text-sm text-gray-600">None. Police cannot register an FIR for civil debt.</td>
                                            <td className="py-4 px-6 text-sm text-gray-600">Active. Police will register an FIR under Section 420 IPC.</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="py-4 px-6 text-sm text-gray-700 font-medium">Look Out Circulars</td>
                                            <td className="py-4 px-6 text-sm text-gray-600">Cannot be issued.</td>
                                            <td className="py-4 px-6 text-sm text-gray-600">Can be issued to prevent the accused from fleeing.</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="py-4 px-6 text-sm text-gray-700 font-medium">Cross Border Action</td>
                                            <td className="py-4 px-6 text-sm text-gray-600">Requires expensive civil litigation in the foreign country.</td>
                                            <td className="py-4 px-6 text-sm text-gray-600">Can involve Interpol Red Notices for extradition (rare but possible).</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Cross Border Debt Recovery Reality</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The reality of cross border debt recovery for unsecured retail loans is governed by economics, not just law. If an NRI owes ten lakh rupees to an Indian bank, the bank has the theoretical right to file a civil recovery suit in an Indian court. However, even if they win an ex parte judgment (a judgment issued in the absence of the defendant), enforcing that judgment in the United States, the United Kingdom, or Canada requires initiating a fresh legal process in that foreign jurisdiction under the reciprocal arrangements of the Civil Procedure Code.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Engaging foreign law firms to execute an Indian civil judgment is astronomically expensive and time consuming. For a standard personal loan or credit card debt, the legal fees incurred by the bank to pursue you internationally would vastly exceed the total outstanding amount. Therefore, Indian banks do not pursue cross border litigation for retail debt. Their entire strategy relies on harassing your local contacts in India and threatening you digitally, hoping you surrender to the pressure. Knowing this gives you the power to dictate the terms of any <Link href="/loan-default-recovery-freeze-defense" className="text-blue-600 hover:underline">loan default recovery freeze defense</Link> you might need to mount.
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">When Interpol is Actually Involved</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Recovery agents love to throw around the word "Interpol" to maximize panic. They will send forged documents with Interpol logos claiming an international arrest warrant has been issued. Interpol is an international police organization that facilitates worldwide police cooperation. They do not act as debt collectors for private Indian banks.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Interpol issues Red Notices for fugitives wanted either for prosecution or to serve a sentence. This requires a valid national arrest warrant issued by a competent judicial authority for a serious criminal offense. Defaulting on an unsecured EMI does not generate a national arrest warrant. Unless you are a billionaire diamantaire who committed massive systemic fraud against state run banks, Interpol has absolutely zero interest in your credit card bill.
                            </p>

                            <h2 id="remote-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">How to Settle Indian Credit Card from Abroad</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Once you understand that you are immune from arrest and international litigation, you can approach the settlement process logically. The goal is to clear the debt from your CIBIL report and obtain a legally binding No Dues Certificate (NDC) without ever having to fly back to India. This is entirely possible through remote legal representation.
                            </p>

                            {/* Step Checklist Section Type */}
                            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm mb-8 mt-6">
                                <h4 className="font-bold text-xl text-gray-900 mb-4">Steps to Execute a Remote Loan Settlement</h4>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold mr-4">1</div>
                                        <p className="text-gray-700 pt-1"><strong>Halt Direct Communication:</strong> Stop answering calls and emails from aggressive recovery agents. Inform them once, in writing, that all future communications must be directed to your appointed legal counsel in India.</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold mr-4">2</div>
                                        <p className="text-gray-700 pt-1"><strong>Draft a Specific Power of Attorney (POA):</strong> Appoint a trusted lawyer or a specialized settlement agency in India. You must draft a specific POA granting them the authority to negotiate with the bank, receive settlement offers, and collect the NDC on your behalf.</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold mr-4">3</div>
                                        <p className="text-gray-700 pt-1"><strong>Notarize and Apostille the POA:</strong> Sign the POA in your country of residence. It must be notarized locally and then apostilled (or attested by the Indian Embassy/Consulate) to be legally valid in India.</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold mr-4">4</div>
                                        <p className="text-gray-700 pt-1"><strong>Verify the Settlement Letter:</strong> Your representative will negotiate the haircut. Before transferring any funds, they must secure a formal settlement letter from the bank's official domain. Never transfer money based on a WhatsApp message.</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold mr-4">5</div>
                                        <p className="text-gray-700 pt-1"><strong>Direct Transfer and NDC Collection:</strong> Transfer the agreed settlement amount directly into your loan account from your NRE/NRO account. Your representative will then physically collect the No Dues Certificate from the branch.</p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Remote Power of Attorney (POA) for Settlement</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Power of Attorney is the cornerstone of remote settlement. Banks in India are extremely bureaucratic and will refuse to share settlement letters or NDCs with unauthorized third parties. A properly drafted specific POA legally forces the bank to recognize your representative as your proxy. It is crucial that this POA is "specific" and not "general," meaning it only grants authority regarding the specific loan account in question, protecting your other assets.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The attestation process varies by country. If you reside in a country that is part of the Hague Apostille Convention (like the US or UK), a local apostille is sufficient. If you reside in a non member country (like the UAE), the document must be attested by the local Indian Consulate. Once couriered to India, the POA must be adjudicated and stamped by the local registrar to be fully admissible.
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Securing the No Dues Certificate (NDC) Remotely</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Paying the settlement amount is only half the battle. The process is not complete until you possess the No Dues Certificate. Recovery agents are notorious for promising an NDC, taking the payment, and then disappearing, leaving a residual balance that continues to accumulate penal interest. Your legal representative on the ground is essential here. They will ensure that the settlement letter explicitly states that upon payment of the agreed sum, the bank will issue an NDC and update the CIBIL status to "Settled". Only after securing this legally binding document in hand should the matter be considered closed. This careful approach is vital before you even begin thinking about <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="text-blue-600 hover:underline">how to improve CIBIL score after loan settlement</Link>.
                            </p>

                            <h2 id="success-story" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Success Story: Lifting the Fear of Airport Arrest</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Consider the case of a software engineer who relocated to Canada. He left behind an outstanding personal loan of INR 15 Lakhs. Due to initial struggles establishing himself in Toronto, he defaulted. The bank's recovery agents aggressively pursued his elderly parents in India and sent him emails containing forged FIR copies and threats of an Interpol Red Notice. They claimed he would be arrested immediately if he returned for his sister's upcoming wedding.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Paralyzed by fear, he contacted our specialized NRI desk. We immediately reviewed the documents and identified the blatant forgery. We dispatched a cease and desist notice to the bank's grievance officer, highlighting the illegal intimidation tactics employed by their empanelled agency. We then facilitated the drafting and apostilling of a specific POA.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                With the POA in hand, our legal team bypassed the abusive recovery agents and negotiated directly with the bank's central settlement authority. Recognizing that cross border recovery was impossible, the bank agreed to a full and final settlement of INR 5.5 Lakhs. The engineer transferred the funds directly from his Canadian account via an NRE route. We secured the NDC and couriered it to him. Three months later, he flew into Delhi for the wedding without a single issue at immigration, entirely free from the debt trap.
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
