'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AuthorBioBox from '@/components/AuthorBioBox';

export default function NriLoanDefaultClient() {
  const [activeId, setActiveId] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

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
    headings.forEach((h) => observer.observe(h));
    return () => headings.forEach((h) => observer.unobserve(h));
  }, []);

  const navLinks = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'understanding-default', label: 'Understanding Default' },
    { id: 'property-seizure', label: 'Property Seizure Myths' },
    { id: 'power-of-attorney', label: 'Power of Attorney (PoA)' },
    { id: 'cross-border-fema', label: 'FEMA & Remittances' },
    { id: 'stopping-harassment', label: 'Stopping Harassment' },
    { id: 'remote-legal-representation', label: 'CredSettle Representation' },
    { id: 'faqs', label: 'Comprehensive FAQs' },
  ];

  const faqs = [
    {
      question: 'Can a bank in India seize my ancestral property for an unsecured personal loan default?',
      answer: 'No. For an clean own loan. Banks cannot automatically seize ancestral home. They must first file a civil suit and obtain a court decree. which is a lengthy process.'
    },
    {
      question: 'Will my Indian passport be confiscated if I default on a loan in India?',
      answer: 'Defaulting on a civil loan does not lead to fast passport confiscation. Passport impounding usually occurs only in cases involving penal fraud or when you are declared an economic offender.'
    },
    {
      question: 'Can I settle my Indian loan from the USA without traveling back?',
      answer: 'Yes. You can execute a exact Power of lawyer (PoA) authorizing a trusted representative or legal counsel in India to settle and settle the loan on your behalf without you having to travel.'
    },
    {
      question: 'How do I legally stop recovery agents from harassing my parents in India?',
      answer: 'You can send a formal cease and desist notice through a legal counsel citing RBI guidelines. Third-party threats is strictly prohibited. banks can be penalized for violating these norms.'
    },
    {
      question: 'How does a Power of Attorney (PoA) work for NRIs settling debt?',
      answer: 'A PoA must be drafted. Signed in front of a notary in your resident country. then apostilled or attested by the Indian Embassy. It is then sent to India for adjudication and registration.'
    },
    {
      question: 'What happens if my NRO/NRE account is frozen by the bank?',
      answer: 'Banks may exercise the right of set-off to recover dues from accounts held in the same bank. It is advisable to maintain operating accounts in a separate bank to prevent illegal debiting.'
    },
    {
      question: 'Does FEMA restrict how I can remit money for loan settlement?',
      answer: 'Under FEMA guidelines. You can freely remit funds into your NRO account from abroad to settle domestic debts. The closure payment must be made in Indian Rupees.'
    },
    {
      question: 'Will a loan settlement in India affect my credit score abroad?',
      answer: 'No. Credit reporting systems are localized. An Indian loan default or closure affects your CIBIL score in India but does not impact your FICO score in the US or credit files in other countries.'
    }
  ];

  const reviews = [
    {
      name: "Rajesh Menon",
      location: "Dubai, UAE",
      rating: 5,
      text: "I was terrified that my parents in Kerala would face threats because of my own loan default. CredSettle helped me execute a PoA from Dubai. Settle with the bank. settled the matter fully without me having to fly back. Their grasp of cross border closure is unmatched.",
      date: "January 2026"
    },
    {
      name: "Priya Sharma",
      location: "New Jersey, USA",
      rating: 5,
      text: "When I lost my job in the US. Paying my Indian own loan became impossible. The bank started sending notices to my ancestral home in Delhi. CredSettle stepped in. Stopped the third party contact. arranged a one time closure that saved me lakhs of rupees.",
      date: "March 2026"
    },
    {
      name: "Amit Patel",
      location: "Toronto, Canada",
      rating: 5,
      text: "I was extremely worried about my NRE accounts getting frozen. The legal experts at CredSettle guided me on FEMA rules and executed a flawless closure strategy using an apostilled PoA. Highly recommended for any NRI facing money distress.",
      date: "May 2026"
    }
  ];

  const getLinkClass = (id: string, isMobileLink: boolean) => {
    const isActive = activeId === id;
    if (isMobileLink) {
      return `whitespace-nowrap px-1 pb-1 border-b-2 transition-colors duration-200 ${
        isActive ? 'border-blue-600 text-blue-600 font-semibold' : 'border-transparent text-gray-600 hover:text-blue-600'
      }`;
    } else {
      return `block transition-all duration-200 pl-3 border-l-2 ${
        isActive ? 'border-blue-600 text-blue-600 font-bold bg-blue-50 py-1 rounded-r' : 'border-transparent text-gray-600 hover:text-blue-600 hover:pl-4'
      }`;
    }
  };

  return (
    <>
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center"> <Link href="/" className="inline-flex items-center hover:text-blue-600">Home</Link> </li>
              <li> <div className="flex items-center"> <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/> </svg> <span className="ml-1 font-medium text-gray-500 md:ml-2">NRI Loan Default closure</span> </div> </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 py-12">
        <div className="lg:hidden sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm -mx-4 px-4 py-3 mb-8 flex items-center overflow-x-auto no-scrollbar" ref={mobileNavRef}>
          <nav className="flex gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                className={getLinkClass(link.id, true)}
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

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <p className="font-bold text-black mb-4 text-lg border-b pb-2">Table of Contents</p>
                <nav className="space-y-2 text-sm">
                  {navLinks.map((link) => (
                    <a 
                      key={link.id}
                      href={`#${link.id}`} 
                      className={getLinkClass(link.id, false)}
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
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <article className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              
              <section id="introduction" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-black mb-6">Navigating the Crisis: The NRI Guide</h2>
                <div className="text-black leading-relaxed text-2xl mb-10 space-y-10 font-light italic opacity-90 border-l-4 border-blue-600 pl-8">
                  <p> Under the Foreign Exchange handling Act (FEMA) and Indian civil law. Defaulting on an clean own loan in India while residing abroad does not automatically lead to the seizure of your ancestral home or passport confiscation. Yet. Banks often employ harsh legal notices and harass family members in India. Making a structured. Remote closure strategy utilizing a formalized Power of lawyer (PoA) essential. </p>
                  <p> This thorough guide is designed exclusively for Non Resident Indians (NRIs) facing the daunting challenge of managing clean debt in India from thousands of miles away. The geographical distance often creates a paralyzing sense of helplessness. Banks exploit this distance. Weaponizing the fear of legal repercussions against your elderly parents or local relatives in India to force fast payments. </p>
                  <p> At CredSettle. We have represented hundreds of NRIs from the United States. United Kingdom. UAE. Canada. We understand the exact legal. Logistical. emotional hurdles you face. This 3000 word legal protocol will dismantle the fear mongering tactics of agents. You will learn exactly what a bank can and cannot do under Indian law. How FEMA regulates your closure funds. the precise legal steps to execute a cross border relief without ever needing to board a flight to India. <time dateTime="2026-07-02" className="block mt-4 text-sm text-gray-500 not-italic">Published on: July 2. 2026</time> </p>
                </div>
              </section>

              <section id="understanding-default" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-black mb-6">Understanding NRI Loan Default in India</h2>
                <p className="text-xl mb-8 text-black"> When an NRI defaults on a own loan or credit card in India. The primary classification of the debt determines the legal course of action available to the lender. It is vital to differentiate between secured and clean debt. The vast majority of own loans and credit cards are clean. This means there is no pledge pledged against the borrowed amount. </p>
                <p className="text-xl mb-8 text-black"> Under the <a href="https://www.rbi.org.in/" target="_blank" rel="nofollow noopener noreferrer" className="text-blue-600 underline">Reserve Bank of India (RBI)</a> rules. A loan is classified as a Non Performing Asset (NPA) if the EMI is overdue for more than 90 days. Once the account slips into NPA status. The bank initiates standard claims procedures. For a resident Indian. This involves phone calls. Field visits. eventually, legal notices. For an NRI. The process is fundamentally identical. the execution becomes complicated for the bank due to jurisdiction. To understand the exact results of skipping payments. You can review <Link href="/what-are-the-consequences-of-not-paying-emi" className="text-blue-600 underline">what are the results of not paying EMI</Link>. </p>
                <p className="text-xl mb-8 text-black"> Because the bank cannot easily serve legal summons or conduct field visits at your foreign residence. They pivot their strategy. They target what is accessible: your local emergency contacts. Your parents residing in India. any local address associated with your account. This is not a legal claims process. it is a mental pressure tactic designed to coerce a closure out of court. </p>
                <p className="text-xl mb-12 text-black"> It is crucial to understand that defaulting on an clean loan is a civil breach of contract under Indian law. Not a crime. The fear of being detained at visa upon arrival in India for a simple own loan default is fully unfounded. Look Out Circulars (LOCs) and passport impounding under the Passports Act. 1967 are strictly reserved for economic offenders facing grave penal investigations (such as willful firm fraud or forgery under Section 316 and Section 318 of the Bharatiya Nyaya Sanhita. 2023. which replaced IPC Sections 406 and 420). If your default arose from genuine overseas employment loss. Currency devaluation. Unforeseen health crises. You are involved solely in a civil contract dispute. </p>
              </section>

              <section id="property-seizure" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-black mb-6">Will the Bank Seize Your Property in India?</h2>
                <p className="text-xl mb-12 text-black"> The most common threat deployed by agents against NRIs is the attachment or seizure of ancestral home. They will call your parents and claim that the house will be auctioned next week if the dues are not cleared. This is a blatant misrepresentation of the law. Let us break down the legal reality through a Myth vs Fact comparison. </p>
                  
                  <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden my-12 shadow-sm">
                    <h3 className="bg-blue-900 text-white p-6 text-2xl font-bold m-0 uppercase text-center">Myth vs Fact: home Seizure</h3>
                    <div className="divide-y divide-gray-200">
                      <div className="p-8 hover:bg-gray-50 transition-colors">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="flex-1">
                            <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-bold uppercase tracking-wider mb-3">Myth</span>
                            <p className="text-lg font-medium text-black">Banks can simply take over your ancestral home if you default on a own loan.</p>
                          </div>
                          <div className="flex-1">
                            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold uppercase tracking-wider mb-3">Fact</span>
                            <p className="text-lg text-black">For clean loans. Banks have no direct right over any home. They must file a civil suit in a competent court. Undergo a lengthy trial. Obtain a favorable decree. then file an execution petition to attach assets. This process takes years.</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-8 hover:bg-gray-50 transition-colors">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="flex-1">
                            <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-bold uppercase tracking-wider mb-3">Myth</span>
                            <p className="text-lg font-medium text-black">Your parents are by law liable to pay your debt if you are abroad.</p>
                          </div>
                          <div className="flex-1">
                            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold uppercase tracking-wider mb-3">Fact</span>
                            <p className="text-lg text-black">Unless your parents signed as formal co clients or guarantors on the loan pacts. They have zero legal risk for your debts. threaten family members is unlawful.</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-8 hover:bg-gray-50 transition-colors">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="flex-1">
                            <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-bold uppercase tracking-wider mb-3">Myth</span>
                            <p className="text-lg font-medium text-black">The bank can seize home owned by your parents to recover your debt.</p>
                          </div>
                          <div className="flex-1">
                            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold uppercase tracking-wider mb-3">Fact</span>
                            <p className="text-lg text-black">The bank can only petition to attach assets that are by law registered in your name alone. Home owned by your parents. Spouse. siblings cannot be touched.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 id="secured-vs-unsecured" className="text-2xl font-bold text-black mt-10 mb-4">Secured vs. clean Loan Implications</h3>
                  <p className="text-xl mb-8 text-black"> If the loan is secured (e.g. A home loan or loan against home). The scenario is fully different. Under the SARFAESI Act. 2002. The bank has the legal power to take takeover of the pledged pledge and auction it without court action after a 60 day notice period. If you have defaulted on a home loan. The home in question is indeed at risk. you must settle a closure or restructuring plan fast. Yet. For credit cards and own loans. The SARFAESI Act does not apply. The bank's threats regarding home attachment for an clean loan are by law hollow bluffs meant to incite panic. </p>
                  <p className="text-xl mb-12 text-black"> Another common tactic is threatening to freeze bank accounts. While banks do possess the "Right of Set Off," allowing them to deduct dues from other accounts you hold within the same institution. They cannot randomly freeze your accounts in other banks without a court or legal order. If you are concerned about your salary or operating accounts. We recommend reviewing our guide on what to do if your <Link href="/salary-account-frozen-by-bank" className="text-blue-600 underline">salary account frozen by bank</Link>. </p>
              </section>

              <section id="power-of-attorney" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-black mb-6">The Role of Power of Attorney (PoA)</h2>
                <p className="text-xl mb-8 text-black"> The biggest logistical hurdle for an NRI looking to settle a debt is the requirement of real presence. Banks in India are notoriously bureaucratic. They often insist that the clients must visit the branch in person to sign the closure pacts and collect the No Dues letter (NDC). This is fully impractical and financially unviable if you reside in California or London. </p>
                <p className="text-xl mb-12 text-black"> The legal solution to this geographical barrier is a Special Power of lawyer (PoA). A PoA is a legal instrument where you (the main sum) authorize another person (the Agent or lawyer) to act on your behalf for exact. Narrowly defined matters. In the context of debt closure. You authorize your legal representative or a trusted family member to settle terms. Sign the closure deed. execute the closure of the loan. </p>

                  <h3 id="drafting-poa" className="text-2xl font-bold text-black mt-10 mb-4">Drafting and Apostilling the PoA from Abroad</h3>
                  <p className="text-xl mb-12 text-black"> A simple letter of authorization will be rejected by the bank. The PoA must be drafted with precise legal language and executed following international protocols. If you are residing in a country that is a signatory to the Hague Apostille Convention (like the USA. UK. Australia). The process involves apostillation. If you reside in a non signatory country (like the UAE). It requires consular attestation. </p>

                  <div className="bg-blue-50 p-10 rounded-3xl border-2 border-blue-100 my-10 relative">
                    <h3 className="font-bold text-blue-900 mb-6 text-2xl uppercase tracking-wider text-center">Step Checklist: Executing a Cross Border PoA</h3>
                    <ul className="space-y-6 text-lg">
                      <li className="flex items-start"> <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">1</div> <div> <strong className="block text-black">Drafting the papers:</strong> <p className="text-black mt-1">Engage an Indian legal expert (like CredSettle) to draft a Special PoA. The draft must specifically mention the bank name. Loan account number. explicitly grant the power to settle and sign closure pacts.</p> </div> </li>
                      <li className="flex items-start"> <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">2</div> <div> <strong className="block text-black">Notarization Abroad:</strong> <p className="text-black mt-1">Print the draft on plain paper. Visit a local Public Notary in your country of residence and sign the papers in their presence. Ensure they affix their seal and registration number.</p> </div> </li>
                      <li className="flex items-start"> <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">3</div> <div> <strong className="block text-black">Apostille or Attestation:</strong> <p className="text-black mt-1">Send the notarized papers to the relevant state or federal authority in your country for an Apostille. If your country is not part of the Hague Convention. You must get it attested by the local Indian Embassy or Consulate.</p> </div> </li>
                      <li className="flex items-start"> <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">4</div> <div> <strong className="block text-black">Dispatch to India:</strong> <p className="text-black mt-1">Courier the real original papers to your representative or legal counsel in India.</p> </div> </li>
                      <li className="flex items-start"> <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">5</div> <div> <strong className="block text-black">Adjudication and Stamping:</strong> <p className="text-black mt-1">Within three months of receiving the papers in India. Your representative must present it to the local Sub Registrar of Assurances for adjudication and payment of the requisite Indian stamp duty. Only then does it become by law binding for the bank.</p> </div> </li>
                    </ul>
                  </div>
                  <p className="text-xl mb-8 text-black"> Banks are by law bound to accept a properly adjudicated Special PoA. Once accepted. Your legal representative takes over all talks. Shielding you from direct interaction with the claims ecosystem. </p>
              </section>

              <section id="cross-border-fema" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-black mb-6">Cross-Border Settlement Options and FEMA</h2>
                  <p className="text-xl mb-8 text-black"> settle a closure is a strategic process. Banks rarely offer their best terms initially. For clean loans. If the account has been in default for over 180 to 360 days. Banks are often willing to settle for a fraction of the unpaid amount. Sometimes waiving up to 60% to 70% of the accumulated main sum. Rates. fines. The goal of the bank is to recover whatever they can from an NPA rather than writing off a total loss. </p>
                  <p className="text-xl mb-8 text-black"> yet. Remitting funds from abroad to settle an Indian debt brings the <a href="https://en.wikipedia.org/wiki/Foreign_Exchange_Management_Act" target="_blank" rel="nofollow noopener noreferrer" className="text-blue-600 underline">Foreign Exchange handling Act (FEMA). 1999</a> into play. FEMA regulates all cross border money transactions to prevent money laundering and ensure proper currency tracking. It is crucial to handle the payment correctly to avoid RBI scrutiny. </p>
                  <p className="text-xl mb-8 text-black"> You cannot simply wire USD or GBP straight to the bank's loan account if it is not configured to accept foreign inward wire transfers. The by law compliant method is to transfer funds from your foreign bank account into your own Non Resident Ordinary (NRO) account in India. NRO accounts are designed specifically for managing domestic transactions and debts in Indian Rupees. Once the funds hit your NRO account. You can issue a cheque. Demand draft. RTGS transfer straight to the loan account as stipulated in the formal closure note issued by the bank. </p>
                  <p className="text-xl mb-12 text-black"> Never transfer closure funds to a third party agent's own account or pay in cash. The payment must always originate from your recognized banking channels and go straight into the lender's valid loan account. Upon successful payment. You must ensure that your representative collects the No Dues letter (NDC) and verifies the status update with the credit bureaus. Many clients worry about the long term impact of a settled status. you can read more about whether <Link href="/will-banks-blacklist-you-after-loan-settlement" className="text-blue-600 underline">banks will blacklist you after loan closure</Link>. </p>
              </section>

              <section id="stopping-harassment" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-black mb-6">Mitigating Harassment of Family Members</h2>
                  <p className="text-xl mb-8 text-black"> The most distressing aspect of an NRI loan default is the threats faced by elderly parents or relatives living in India. agents operate on commission. When they cannot reach you abroad. They resort to threaten tactics at your last known Indian address. They may shout. Use abusive language. threaten neighbors to create social stigma. </p>
                  <p className="text-xl mb-12 text-black"> This behavior is fully unlawful. The Reserve Bank of India (RBI) has issued strict guidelines under its Fair Practices Code. Mandating that agents must treat debtors with respect and dignity. They are strictly prohibited from contacting third parties. Visiting residences at odd hours. using coercive language. </p>

                  <h3 id="legal-steps" className="text-2xl font-bold text-black mt-10 mb-4">Legal Steps to Stop Third-Party Contact</h3>
                  
                  <div className="my-10">
                    <h3 className="font-bold text-black mb-6 text-2xl uppercase tracking-wider text-center bg-gray-100 py-4 rounded-t-2xl">The Legal Process Map: Halting threats</h3>
                    <div className="bg-white border-2 border-t-0 border-gray-100 rounded-b-2xl p-8 shadow-sm">
                      <div className="relative border-l-4 border-blue-600 pl-8 space-y-12 py-4">
                        <div className="relative">
                          <span className="absolute -left-11 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md">1</span>
                          <h3 className="text-xl font-bold text-black mb-2">Issue a Formal Legal Notice (BNS 2023)</h3>
                          <p className="text-black">An authorized legal counsel dispatches a formal cease-and-desist notice to the bank's main sum Nodal head and claims head. The notice cites the RBI Fair Practices Code and legal penal threaten under Sections 351 & 352 of the Bharatiya Nyaya Sanhita (BNS) 2023 (replacing IPC 503/506) and Section 308 BNS (extortion).</p>
                        </div>
                        <div className="relative">
                          <span className="absolute -left-11 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md">2</span>
                          <h3 className="text-xl font-bold text-black mb-2">File an RBI RBI officer Complaint (July 2026 Directives)</h3>
                          <p className="text-black">If calls persist. An escalation is lodged on the RBI Banking RBI officer (CMS Portal). Under the July 2026 Master Guidelines. Contacting family members or calling outside 8:00 AM. 7:00 PM constitutes a severe RBI violation. Exposing the bank to bank fines of up to ₹20 Lakhs per proven offense.</p>
                        </div>
                        <div className="relative">
                          <span className="absolute -left-11 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md">3</span>
                          <h3 className="text-xl font-bold text-black mb-2">Local Police action</h3>
                          <p className="text-black">In extreme cases. A police complaint (NC or FIR) is filed at the local police station where the parents reside. Citing threats and disturbance of peace. A copy of this complaint is sent to the bank. which usually halts all field visits fast.</p>
                        </div>
                        <div className="relative">
                          <span className="absolute -left-11 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md">4</span>
                          <h3 className="text-xl font-bold text-black mb-2">Channelize contact</h3>
                          <p className="text-black">The legal counsel formally assumes the role of the authorized representative. The bank is by law mandated to direct all future correspondence and talks exclusively to the counsel. Fully shielding the family.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xl mb-12 text-black"> By establishing a robust legal wall. You protect your family from the mental toll of the claims process. Allowing the talks to proceed professionally and dispassionately. The key is to act proactively and engage legal counsel before the threats escalates. </p>
              </section>

              <section id="remote-legal-representation" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-black mb-6">Remote Legal Representation with CredSettle</h2>
                <p className="text-xl mb-12 text-black"> CredSettle provides a turnkey. End to end legal relief service specifically architected for Non Resident Indians. We understand that your primary goal is peace of mind for your family and a clean legal slate in your home country. </p>

                  <h3 className="font-bold text-black mb-6 text-2xl uppercase tracking-wider text-center bg-gray-100 py-4 rounded-t-2xl">The CredSettle Advantage</h3>
                  <div className="bg-white border-2 border-t-0 border-gray-100 rounded-b-2xl p-8 shadow-sm">
                    <ul className="space-y-6 text-lg">
                      <li className="flex items-start"> <svg className="w-8 h-8 mr-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> <span className="text-black"><strong>Zero Travel Required:</strong> We handle the entire process remotely. From drafting the PoA to settle with bank managers. You never have to book a flight to India.</span> </li>
                      <li className="flex items-start"> <svg className="w-8 h-8 mr-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> <span className="text-black"><strong>harsh threats Shield:</strong> Our legal team acts fast to issue notices to claims firms. Protecting your parents and relatives from abusive visits and calls.</span> </li>
                      <li className="flex items-start"> <svg className="w-8 h-8 mr-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> <span className="text-black"><strong>Expert talks:</strong> With years of experience interacting with Indian banks. We know the exact thresholds for closure approvals. We consistently secure maximum waivers on main sum and rates.</span> </li>
                      <li className="flex items-start"> <svg className="w-8 h-8 mr-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> <span className="text-black"><strong>FEMA Compliant Execution:</strong> We guide you on the exact protocols for remitting funds to ensure compliance with RBI and FEMA rules. Preventing any future legal complications.</span> </li>
                    </ul>
                  </div>
                <p className="text-xl my-12 text-black"> Do not let the geographical distance paralyze you. The law provides clear mechanisms for resolving debt disputes remotely. By engaging experts legal counsel. You shift the balance of power back in your favor. Making sure that your money distress does not deal the peace and dignity of your family back home. </p>
              </section>

              <section id="faqs" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-black mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h3 className="font-bold text-black mb-3">{faq.question}</h3>
                      <p className="text-black text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-black mb-6">Client Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {reviews.map((review, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                      <div className="flex items-center mb-4 text-yellow-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                      <p className="text-black text-sm mb-6 italic">"{review.text}"</p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold mr-3">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-black text-sm">{review.name}</p>
                          <p className="text-xs text-gray-500">{review.location} • {review.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <AuthorBioBox />

              <div className="mt-16 p-8 bg-black text-white rounded-3xl text-center">
                <h2 className="text-3xl font-bold mb-6">Take Control from Abroad</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Protect your family and settle your Indian debt with full legal compliance without leaving your resident country. Consult CredSettle today.</p>
                <Link 
                  href="/contact"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-500 transition-colors"
                >
                  Consult an Expert
                </Link>
              </div>

            </article>
          </div>

          <aside className="lg:w-1/4 w-full">
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-blue-100 flex flex-col items-center text-center">
              <div className="w-28 h-28 mx-auto bg-gray-200 rounded-full overflow-hidden mb-5 border-4 border-[#007AFF] shadow-md relative">
                <Image 
                  src="/ashishjhangra.png" 
                  alt="Ashish Jhangra - Legal & Debt Resolution Professional" 
                  fill 
                  className="object-cover object-top" 
                />
              </div>
              <p className="text-2xl font-bold text-black mb-1">Ashish Jhangra</p>
              <p className="text-[#007AFF] font-bold uppercase tracking-wider text-xs mb-3">Legal &amp. Debt relief experts</p>
              <p className="text-gray-700 text-xs leading-relaxed mb-5"> Specialist in cross-border loan talks. RBI clients safety frameworks. remote closure execution for Non-Resident Indians. Ashish advises clients on complex NPA disputes with Indian banks. </p>
              <div className="w-full space-y-2">
                <Link href="/contact" className="block w-full py-2.5 bg-[#007AFF] hover:bg-blue-700 text-white font-bold rounded-xl transition-colors text-sm shadow-sm">
                  Consult With Us
                </Link>
                <Link href="/author/ashish-jhangra" className="block w-full py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold rounded-xl transition-colors border border-gray-200 text-xs">
                  View Author Profile &rarr;
                </Link>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </>
  );
}
