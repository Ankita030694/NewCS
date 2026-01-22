'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function TamilNaduLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('');
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

  useEffect(() => {
    if (isMobile && activeId && mobileNavRef.current) {
      const activeLink = mobileNavRef.current.querySelector(`[href="#${activeId}"]`);
      if (activeLink) {
        activeLink.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [activeId, isMobile]);

  const navLinks = [
    { id: 'tamil-nadu-debt-landscape', label: 'TN Debt Landscape' },
    { id: 'kandhu-vatti-act', label: 'Kandhu Vatti Act' },
    { id: 'settlement-process-chennai', label: 'Settlement Process' },
    { id: 'lok-adalat-tamil-nadu', label: 'Lok Adalat System' },
    { id: 'police-complaint-tn', label: 'Police Protection' },
    { id: 'drt-chennai-coimbatore', label: 'DRT Courts Info' },
    { id: 'districts-covered-tn', label: 'Districts We Serve' },
    { id: 'settlement-scams-tn', label: 'Avoid Scams' },
    { id: 'why-choose-credsettle', label: 'Why CredSettle?' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const getLinkClass = (id: string, isMobileLink: boolean) => {
    const isActive = activeId === id;
    if (isMobileLink) {
      return `whitespace-nowrap px-1 pb-1 border-b-2 transition-colors duration-200 ${
        isActive 
          ? 'border-blue-600 text-blue-600 font-semibold' 
          : 'border-transparent text-gray-600 hover:text-blue-600'
      }`;
    } else {
      return `block transition-all duration-200 pl-3 border-l-2 ${
        isActive
          ? 'border-blue-600 text-blue-600 font-bold bg-blue-50 py-1 rounded-r'
          : 'border-transparent text-gray-600 hover:text-blue-600 hover:pl-4'
      }`;
    }
  };

  const faqList = [
    {
      question: "Is loan settlement legal in Tamil Nadu?",
      answer: "Yes, loan settlement is a fully legal financial process in Tamil Nadu. It is governed by the Indian Contract Act and RBI guidelines. Banks in Chennai, Coimbatore, and across the state are authorized to negotiate One Time Settlements (OTS) to close Non-Performing Assets (NPAs)."
    },
    {
      question: "What is the 'Kandhu Vatti' Act?",
      answer: "The Tamil Nadu Prohibition of Charging Exorbitant Interest Act (commonly known as the Kandhu Vatti Act) is a powerful state law. It strictly prohibits lenders from charging interest rates that exceed government norms and criminalizes harassment. Violators can face imprisonment, offering strong protection to borrowers."
    },
    {
      question: "Can I settle my personal loan in Chennai?",
      answer: "Absolutely. Whether you live in T. Nagar, Anna Nagar, or OMR, you can settle unsecured personal loans. If you have faced genuine financial hardship like layoffs in the IT sector or medical emergencies, banks are willing to negotiate to recover a portion of the debt."
    },
    {
      question: "How does the Lok Adalat in Tamil Nadu help?",
      answer: "The Tamil Nadu State Legal Services Authority (TNSLSA) organizes Lok Adalats which are fast-track courts. Settlements reached here are final, binding, and act as a civil court decree. It is the safest way to settle as the bank cannot reopen the case later."
    },
    {
      question: "Will the Tamil Nadu Police help if I am harassed?",
      answer: "Yes. The Tamil Nadu Police are very active against usury and harassment. You can file complaints via the TN Police Citizen Portal or at local stations. The police often intervene to stop illegal recovery tactics that violate RBI norms."
    },
    {
      question: "Does settlement affect my CIBIL score?",
      answer: "Yes, the loan status will change to 'Settled', which temporarily lowers your score. However, this is better than a 'Write Off' or continuing 'Default'. After settlement, you can rebuild your score within 12-24 months using secured credit cards."
    },
    {
      question: "Can I settle credit card dues in Coimbatore?",
      answer: "Yes, credit card debt is the most common type of settlement in industrial hubs like Coimbatore and Tirupur. We help negotiate with banks to waive off high-interest charges and settle the principal amount."
    },
    {
      question: "What are the Debt Recovery Tribunals (DRT) in TN?",
      answer: "For larger loans (usually above ₹20 Lakhs), banks approach the DRT. Tamil Nadu has DRT benches in Chennai, Madurai, and Coimbatore. We provide legal representation in these tribunals to defend your rights and push for settlement."
    },
    {
      question: "Do I need to visit the bank branch personally?",
      answer: "No. Once you hire CredSettle, we handle the communication. We negotiate with the bank's central processing units in Chennai or Mumbai, so you don't have to face local branch managers or recovery agents."
    },
    {
      question: "How long does the settlement process take?",
      answer: "In Tamil Nadu, the process typically takes 45 to 90 days. It depends on the bank's internal approval speed and the complexity of your case. We work to expedite the 'Settlement Letter' issuance."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative text-white pt-32 pb-24 px-4 md:px-8"
        style={{
          background: 'linear-gradient(168deg, #007AFF 0%, #0C2756 100%)',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-6xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Tamil Nadu Loan Settlement Services<br />
            <span className="text-blue-200">Legal Debt Relief in Chennai, Coimbatore & Beyond</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Stop harassment using the Kandhu Vatti Act. Settle personal loans and credit cards legally through Lok Adalat. Save up to 50% and restart your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Check Eligibility Free
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
                <Link href="/" className="inline-flex items-center hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link href="/loan-settlement" className="ml-1 font-medium text-gray-700 hover:text-blue-600 md:ml-2 transition-colors">
                    Loan Settlement
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 font-medium text-gray-500 md:ml-2">
                    Tamil Nadu
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 py-12">
        {/* Mobile Sticky Nav */}
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
          {/* Left Column: Table of Contents (Desktop) */}
          <div className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Table of Contents</h3>
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

          {/* Middle Column: Main Content */}
          <div className="lg:w-3/5 w-full">
            <article className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              
              <h2 id="tamil-nadu-debt-landscape" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Navigating Debt Relief in Tamil Nadu: A Comprehensive Guide</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Tamil Nadu is one of India's economic engines, home to a diverse population of professionals in Chennai's IT corridors, entrepreneurs in the textile hubs of Tirupur, and industrialists in Coimbatore. However, this economic vibrancy is fueled by credit. From personal loans for weddings to credit cards for daily expenses, debt is a reality for millions. But when financial shocks occur, like the recent volatility in the tech sector or post-pandemic business slowdowns, this debt can quickly become a suffocating burden.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you are struggling to repay your loans in Tamil Nadu, you must know that you are not alone, and you are not without options. <strong>Loan Settlement</strong> is a strategic, legal solution available to you. It is not about running away from your responsibilities; it is about acknowledging your inability to pay the full amount and negotiating a realistic closure with your bank.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Major banks operating in the state, including Indian Bank, Indian Overseas Bank (IOB), HDFC, and ICICI, have clear policies for One Time Settlement (OTS). They prefer recovering a part of the principal rather than letting the account turn into a permanent Non-Performing Asset (NPA). At CredSettle, we leverage our deep understanding of the Tamil Nadu banking circle and local laws to help you exit the debt trap with dignity.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-10">
                <h4 className="font-bold text-blue-900 mb-2">Crucial Local Protection</h4>
                <p className="text-blue-800 m-0">
                  Tamil Nadu has historically strong laws against usury. The "Kandhu Vatti Act" is a unique legal shield that protects borrowers in the state from harassment and exorbitant interest demands, even from unregulated agents.
                </p>
              </div>

              <h2 id="kandhu-vatti-act" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Kandhu Vatti Act: Your Legal Shield</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                One of the most powerful tools available to borrowers in this state is the <strong>Tamil Nadu Prohibition of Charging Exorbitant Interest Act, 2003</strong>, locally known as the Kandhu Vatti Act. This legislation was enacted to curb the menace of predatory lending and harassment.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>How does this protect you?</strong>
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-6 text-gray-700">
                <li><strong>Criminalizing Harassment:</strong> The Act makes it a criminal offence for any person to molest or harass a debtor for the recovery of a loan. If a recovery agent threatens you physically or verbally abuses you, they are liable for imprisonment of up to 3 years.</li>
                <li><strong>Cap on Interest:</strong> It prohibits charging interest rates that exceed the norms fixed by the government. While this primarily targets private moneylenders, it sets a strong legal precedent that "predatory interest" is illegal in Tamil Nadu.</li>
                <li><strong>Police Empowerment:</strong> Unlike in many other states, the Tamil Nadu Police are specifically empowered under this Act to register FIRs against harassers immediately. This makes the police in Chennai and other districts highly responsive to borrower complaints.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                At CredSettle, we ensure that the banks and their agencies are fully aware that we understand these laws. This knowledge alone often stops harassment in its tracks.
              </p>

              <h2 id="settlement-process-chennai" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Loan Settlement Process in Tamil Nadu</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We have streamlined the settlement process to be efficient and legally secure for our clients across Tamil Nadu. Here is how we navigate the journey from distress to freedom:
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">1</div>
                  <div className="ml-5">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Case Assessment & Legal Shielding</h4>
                    <p className="text-gray-700">We begin by analyzing your loan documents. Once engaged, we take over communications. In a city like Chennai where recovery agents can be persistent, we direct all calls to our legal team, citing your representation.</p>
                  </div>
                </div>
                <div className="flex bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">2</div>
                  <div className="ml-5">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Handling the NPA Stage</h4>
                    <p className="text-gray-700">Settlement usually becomes an option after the loan is classified as an NPA (90 days overdue). We guide you through this period, helping you handle legal notices under the SARFAESI Act or arbitration notices.</p>
                  </div>
                </div>
                <div className="flex bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">3</div>
                  <div className="ml-5">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Strategic Negotiation</h4>
                    <p className="text-gray-700">We negotiate directly with the Regional Collection Managers of banks in Chennai, Coimbatore, or Madurai. Our goal is to waive off all penal charges and interest, often reducing the principal amount significantly.</p>
                  </div>
                </div>
                <div className="flex bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">4</div>
                  <div className="ml-5">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Official Settlement Letter</h4>
                    <p className="text-gray-700">We never ask you to pay without written proof. We ensure the bank issues an official Settlement Letter on their letterhead, clearly stating the reduced amount and the closure terms.</p>
                  </div>
                </div>
                <div className="flex bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">5</div>
                  <div className="ml-5">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Closure & Peace of Mind</h4>
                    <p className="text-gray-700">After you make the payment directly to the bank, we ensure you receive the No Dues Certificate. Your liability ends forever.</p>
                  </div>
                </div>
              </div>

              <h2 id="lok-adalat-tamil-nadu" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Leveraging the Tamil Nadu Lok Adalat</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The <strong>Lok Adalat</strong> (People's Court) is a preferred mechanism in Tamil Nadu for resolving banking disputes. Organized by the Tamil Nadu State Legal Services Authority (TNSLSA), it offers a golden opportunity for borrowers.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Why is Lok Adalat the best route?</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                 <li><strong>Finality:</strong> An award passed by the Lok Adalat is deemed to be a decree of a civil court. It is final and binding. No appeal lies against it. This means the bank cannot come back years later to claim the waived amount.</li>
                 <li><strong>Cost-Free:</strong> There is no court fee. It is a free service provided by the state to reduce the burden on regular courts.</li>
                 <li><strong>Speedy Resolution:</strong> Cases are often settled in a single hearing. In Tamil Nadu, National Lok Adalats are held quarterly in all district courts, including the Madras High Court campus.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our legal team can represent you in the Lok Adalat, ensuring that the settlement terms are recorded correctly before the judge, giving you ironclad legal protection.
              </p>

              <h2 id="police-complaint-tn" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Police Protection Against Harassment</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Tamil Nadu Police is one of the most modernized forces in India, and they take citizen harassment seriously. If recovery agents are abusing you, you have recourse.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">How to File a Complaint</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                 <li><strong>TN Police Citizen Portal:</strong> You can file a complaint online at <a href="https://eservices.tnpolice.gov.in" target="_blank" rel="nofollow" className="text-blue-600 hover:underline">eservices.tnpolice.gov.in</a>. This generates a CSR (Community Service Register) receipt immediately, forcing the local station to investigate.</li>
                 <li><strong>Cyber Crime Wing:</strong> For harassment via WhatsApp, email, or instant loan apps, you can report to the Cyber Crime division. Tamil Nadu has specialized cyber cells in all major cities like Chennai, Coimbatore, and Madurai.</li>
                 <li><strong>Dial 100/112:</strong> In cases of immediate threat where agents are at your doorstep creating a nuisance, dialing the emergency number brings immediate police response.</li>
              </ul>

              <h2 id="drt-chennai-coimbatore" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Debt Recovery Tribunals (DRT) in Tamil Nadu</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                For loans exceeding ₹20 Lakhs, banks utilize the Debt Recovery Tribunals. Tamil Nadu has a robust DRT infrastructure.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <h4 className="font-bold text-blue-900">DRT-1, DRT-2 & DRT-3 Chennai</h4>
                    <p className="text-sm text-gray-600 mt-1">Located in Chennai, these tribunals handle cases from the metropolitan area and northern districts like Kancheepuram and Tiruvallur.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <h4 className="font-bold text-blue-900">DRT Coimbatore</h4>
                    <p className="text-sm text-gray-600 mt-1">Serves the western industrial belt including Coimbatore, Tirupur, Erode, Salem, and Namakkal.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <h4 className="font-bold text-blue-900">DRT Madurai</h4>
                    <p className="text-sm text-gray-600 mt-1">Handles cases from the southern districts like Madurai, Tirunelveli, Thoothukudi, and Kanyakumari.</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Receiving a summons from the DRT is a serious legal matter. Do not ignore it. However, the DRT also encourages settlements. With CredSettle's representation, we can often convert a DRT hearing into a settlement negotiation, resolving the matter legally.
              </p>

              <h2 id="districts-covered-tn" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Serving Every District in Tamil Nadu</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Debt problems are not limited to the capital. We provide expert legal and financial settlement services across the entire state.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 text-sm">
                {['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirunelveli', 'Tirupur', 'Erode', 'Vellore', 'Thoothukudi', 'Dindigul', 'Thanjavur', 'Cuddalore', 'Kanyakumari', 'Karur', 'Namakkal'].map((city) => (
                  <div key={city} className="bg-white p-2 pl-3 rounded border border-gray-200 flex items-center text-gray-700 shadow-sm">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span> {city}
                  </div>
                ))}
              </div>

              <h2 id="settlement-scams-tn" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Beware of Settlement Scams in TN</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                As the demand for debt relief rises, fraudsters have become active. In Chennai, several cases of "fake settlement agents" have been reported. Protect yourself:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-6 text-gray-700">
                 <li><strong>The "Court Notice" Hoax:</strong> Scammers send fake legal notices via WhatsApp with the Madras High Court seal, demanding immediate payment to a UPI ID. Real courts never demand payments via WhatsApp.</li>
                 <li><strong>Personal Account Transfers:</strong> Never transfer settlement money to a personal bank account. All payments must go directly to your loan account number with the bank.</li>
                 <li><strong>"CIBIL Repair" Fees:</strong> Fraudsters claim they can "delete" your bad history for a fee. This is impossible. Only the bank can update your record after a legitimate settlement.</li>
              </ul>

              <h2 id="why-choose-credsettle" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Why Trust CredSettle?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Navigating the Tamil Nadu legal and banking landscape requires local expertise. CredSettle offers you the professional edge you need.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                 <li><strong>Local Legal Knowledge:</strong> We understand the nuances of the Kandhu Vatti Act and the specific procedures of the TNSLSA Lok Adalats.</li>
                 <li><strong>Bank Relationships:</strong> We have established channels with the settlement departments of major banks in Chennai and Mumbai.</li>
                 <li><strong>Data-Driven Results:</strong> We use data from thousands of cases to predict the best possible settlement percentage for your specific bank and loan type.</li>
                 <li><strong>Empathetic Support:</strong> We treat you with respect. We know that debt is a financial problem, not a character flaw.</li>
              </ul>

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqList.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-blue-600 rounded-2xl p-8 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-blue-700 opacity-20 transform -skew-x-12"></div>
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">Reclaim Your Financial Freedom in Tamil Nadu</h3>
                    <p className="mb-8 opacity-90 max-w-2xl mx-auto">Don't let debt control your life. Get expert legal help to settle your loans and stop harassment today.</p>
                    <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-700 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all shadow-lg transform hover:-translate-y-1"
                    >
                    Start Your Free Consultation
                    </Link>
                    <p className="mt-4 text-sm opacity-70">100% Confidential • Expert Legal Team • Serving All TN Districts</p>
                </div>
              </div>

            </article>
          </div>

          {/* Right Column: Sidebar (Desktop) */}
          <div className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-2">Tamil Nadu Support</h4>
                <p className="text-sm text-gray-600 mb-6">Specialized legal aid for Chennai & TN residents.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Check Eligibility
                </Link>
                <div className="mt-4 text-xs text-gray-500 space-y-1">
                  <p>✓ Chennai & Coimbatore</p>
                  <p>✓ Lok Adalat Experts</p>
                  <p>✓ Kandhu Vatti Defense</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Regions</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/loan-settlement/karnataka" className="text-gray-600 hover:text-blue-600 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-400 group-hover:bg-blue-600 rounded-full mr-2 transition-colors"></span>
                      Karnataka Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/maharashtra" className="text-gray-600 hover:text-blue-600 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-400 group-hover:bg-blue-600 rounded-full mr-2 transition-colors"></span>
                      Maharashtra Guide
                    </Link>
                  </li>
                   <li>
                    <Link href="/loan-settlement/delhi" className="text-gray-600 hover:text-blue-600 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-400 group-hover:bg-blue-600 rounded-full mr-2 transition-colors"></span>
                      Delhi Guide
                    </Link>
                  </li>
                </ul>
              </div>

               <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Services</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/services/credit-card-settlement" className="text-gray-600 hover:text-blue-600 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-400 group-hover:bg-blue-600 rounded-full mr-2 transition-colors"></span>
                      Credit Card Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/personal-loan-settlement" className="text-gray-600 hover:text-blue-600 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-400 group-hover:bg-blue-600 rounded-full mr-2 transition-colors"></span>
                      Personal Loans
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}