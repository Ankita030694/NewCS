'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HeroFincorpLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [isMobile, setIsMobile] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  // Check if mobile for specific behaviors
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer for Active Section
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
        rootMargin: '-100px 0px -35% 0px', // Adjust trigger point
        threshold: 0.1
      }
    );

    const headings = document.querySelectorAll('h2[id], h3[id]');
    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  // Scroll active item into view on mobile
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
    { id: 'introduction', label: 'Introduction' },
    { id: 'loan-landscape', label: 'Hero Fincorp Landscape' },
    { id: 'simplycash-settlement', label: 'SimplyCash (App Loans)' },
    { id: 'unnati-settlement', label: 'Unnati (Business Loans)' },
    { id: 'two-wheeler', label: 'Two-Wheeler Settlement' },
    { id: 'arbitration-reality', label: 'The Delhi Arbitration Trap' },
    { id: 'sec-138-notice', label: 'Section 138 Defense' },
    { id: 'process', label: 'Step-by-Step Approach' },
    { id: 'documents', label: 'Required Documents' },
    { id: 'mistakes', label: 'Mistakes to Avoid' },
    { id: 'success-stories', label: 'Success Stories' },
    { id: 'faqs', label: 'FAQs' },
  ];

  /* 
    Helper class for links 
  */
  const getLinkClass = (id: string, isMobileLink: boolean) => {
    const isActive = activeId === id;
    if (isMobileLink) {
      return `whitespace-nowrap px-1 pb-1 border-b-2 transition-colors duration-200 ${
        isActive 
          ? 'border-blue-600 text-blue-600 font-semibold' 
          : 'border-transparent text-gray-600 hover:text-blue-600'
      }`;
    } else {
      // Desktop vertical style
      return `block transition-all duration-200 pl-3 border-l-2 ${
        isActive
          ? 'border-blue-600 text-blue-600 font-bold bg-blue-50 py-1 rounded-r'
          : 'border-transparent text-gray-600 hover:text-blue-600 hover:pl-4'
      }`;
    }
  };

  const faqList = [
    {
      question: "Can I settle my SimplyCash instant personal loan?",
      answer: "Yes, SimplyCash loans are unsecured personal loans. If you are unable to pay due to job loss or medical emergencies, Hero Fincorp is often willing to settle these for a reduced lump sum to clear their NPA books."
    },
    {
      question: "My bike was seized by Hero Fincorp agents. Can I still settle?",
      answer: "It is difficult but not impossible. If the bike has not yet been auctioned, we can negotiate a 'release and close' settlement. You pay the agreed amount, and they return the bike with an NOC. Speed is critical here."
    },
    {
      question: "I received an arbitration notice from a Delhi arbitrator. I live in Mumbai. Do I have to go?",
      answer: "Hero Fincorp's loan agreements typically designate New Delhi as the seat of arbitration. You do not always need to travel. We can represent you legally and respond to the arbitrator via post/email, requesting a settlement pause."
    },
    {
      question: "What is the email ID for Hero Fincorp settlement?",
      answer: "The official email is customer.care@herofincorp.com. However, sending a settlement proposal directly often gets a standard rejection. It is better to have a legal firm send a formal representation to their legal department."
    },
    {
      question: "Does Hero Fincorp offer a moratorium or restructuring?",
      answer: "Restructuring is available (tenure extension) but rare for small ticket loans like Unnati. Settlement (OTS) is usually the preferred route for them to close bad debts."
    },
    {
      question: "How much can I save on a Hero Fincorp settlement?",
      answer: "For unsecured loans (SimplyCash/Personal), waivers can go up to 50-60% of the total outstanding (Principal + Interest). For secured loans (Bikes), the discount is lower (20-30%) because they have the asset backup."
    },
    {
      question: "Will settling affect my credit score?",
      answer: "Yes, the account will be marked as 'Settled'. This drops your score. However, it is better than a 'Write-off' or a live 'Overdue' status which damages your score every single month."
    },
    {
      question: "How do I verify the settlement letter?",
      answer: "Ensure the letter comes from an official domain (@herofincorp.com), mentions the written-off amount, the exact settlement figure, and clearly states 'Full and Final Settlement' with no future dues."
    },
    {
      question: "Can they file a police case for non-payment?",
      answer: "Loan default is civil, not criminal. However, if a cheque bounces, they can file a case under Section 138 of the NI Act. This is a criminal offense but bail is usually granted, and the matter is settled by paying the due amount."
    },
    {
      question: "Why should I use CredSettle?",
      answer: "We know the specific arbitration venues tailored by Hero Fincorp in Delhi and their specific recovery agencies. We use this knowledge to stop legal escalation and get you a fair deal."
    }
  ];

  return (
    <>
      {/* Breadcrumb Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
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
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link href="/loan-settlement" className="ml-1 font-medium text-gray-700 hover:text-blue-600 md:ml-2">
                    NBFC Settlement
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 font-medium text-gray-500 md:ml-2">
                    Hero Fincorp
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content Layout - 3 Column */}
      <div className="max-w-[1440px] mx-auto px-4 py-12">
        
        {/* Mobile: Sticky Horizontal Scroll Table of Contents */}
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
          
          {/* Left Column: Table of Contents */}
          <div className="lg:w-1/6 hidden lg:block">
            
            {/* Desktop: Sticky Vertical Sidebar */}
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
          <div className="lg:w-2/3 w-full">
            <article className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Navigating Debt Challenges with Hero Fincorp: A Complete Guide</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Hero Fincorp has emerged as a powerhouse in the Indian Non-Banking Financial Company (NBFC) sector, bridging the credit gap for millions who might not fit traditional banking criteria. From financing millions of two-wheelers to providing instant digital credit via apps like SimplyCash and empowering small businesses through Unnati, their reach is vast. However, the accessibility of these loans often comes with easier entry but harder repayment terms, especially when life takes an unexpected turn.
                </p>
                <p className="mb-4">
                  A sudden job loss, a medical crisis in the family, or a business downturn can quickly turn manageable EMIs into a mountain of debt. Once you default, the machinery of collection kicks in. For Hero Fincorp customers, this often means navigating a complex web of aggressive recovery agents, legal notices from Delhi-based arbitrators, and the looming threat of Section 138 criminal cases. This creates immense psychological pressure, pushing many borrowers into making hasty financial decisions that worsen their long-term stability.
                </p>
                <p>
                  This comprehensive guide is designed to empower you with knowledge. It is not about evading debt, but about managing it legally and dignifiedly through **Loan Settlement**. We will break down specific strategies for different Hero Fincorp products, unmask the legal threats you face, and provide a clear, step-by-step roadmap to exiting this debt trap once and for all.
                </p>
              </div>

              <h2 id="loan-landscape" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Hero Fincorp Loan Landscape</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Unlike traditional banks that have a uniform approach, Hero Fincorp segments its borrowers heavily. Understanding where you fit is the first step in crafting a settlement strategy. Your leverage in negotiation depends entirely on the product you hold.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                   <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900">Retail & Vehicle Loans</h4>
                      <p className="text-sm text-gray-600">Secured loans (Two-wheelers, Used Cars). Here, the lender has leverage because they can seize the asset.</p>
                   </div>
                   <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900">Digital Lending (Fintech)</h4>
                      <p className="text-sm text-gray-600">Unsecured personal loans (SimplyCash). High interest, low ticket size. Lender has low leverage but uses high harassment.</p>
                   </div>
                   <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900">SME & Business Loans</h4>
                      <p className="text-sm text-gray-600">Unnati loans. Can be secured or unsecured. Settlement depends on proving business failure.</p>
                   </div>
                   <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900">Corporate & LAP</h4>
                      <p className="text-sm text-gray-600">Loan Against Property. Very hard to settle without selling the property, but restructuring is possible.</p>
                   </div>
                </div>
              </div>

              <h2 id="simplycash-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">SimplyCash: Settling Instant Personal Loans</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  <strong>SimplyCash</strong> is Hero Fincorp's instant personal loan app. These loans are disbursed quickly, often with minimal documentation, but carry high interest rates (up to 25-30% annualized).
                </p>
                <h4 className="font-bold text-gray-800 text-lg mb-2">Why Settlement is Highly Probable</h4>
                <p className="mb-4">
                   Since SimplyCash loans are <strong>unsecured</strong>, Hero Fincorp has no asset to sell to recover their money. Their only tools are:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                   <li><strong>Credit Score Damage:</strong> Reporting the default to CIBIL.</li>
                   <li><strong>Harassment:</strong> Calling contacts, referencing family members (often violating privacy norms).</li>
                   <li><strong>Legal Threats:</strong> Notices for arbitration.</li>
                </ul>
                <p className="mb-4">
                   <strong>Your Strategy:</strong> When the harassment becomes unbearable, many borrowers pay small amounts just to stop the calls. <strong> This is a mistake.</strong> These small payments get swallowed by interest and penalties. Instead:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                   <li><strong>Stop Token Payments:</strong> If you cannot pay the full EMI, conserve your cash.</li>
                   <li><strong>Wait for NPA:</strong> After 90 days of non-payment, the loan is classified as a Non-Performing Asset. This moves it from the "Collections" bucket to the "Recovery/Legal" bucket.</li>
                   <li><strong>Negotiate Hard:</strong> For SimplyCash loans, waivers of 50% or more on the principal plus interest are common because the cost of legal recovery often exceeds the loan amount itself.</li>
                </ul>
              </div>

              <h2 id="unnati-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Unnati Loans: Strategies for Small Business Owners</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                 <p className="mb-4">
                    <strong>Hero Unnati</strong> loans are designed for MSMEs and self-employed individuals. If your business has shut down or suffered severe losses, you have a strong case for One Time Settlement (OTS).
                 </p>
                 <div className="bg-green-50 p-6 rounded-xl border border-green-100 mb-6">
                    <h5 className="font-bold text-green-900 mb-2">The "Business Loss" Defense</h5>
                    <p className="text-green-800 text-sm mb-2">
                       Unlike personal reasons which can be subjective, business loss is documentable. To settle a Unnati loan, you must produce:
                    </p>
                    <ul className="list-disc pl-6 text-green-800 text-sm">
                       <li>GST Returns showing a dip in turnover.</li>
                       <li>Bank statements showing stopped cash flow.</li>
                       <li>Proof of business closure (surrender of license, shop vacating proof).</li>
                    </ul>
                    <p className="text-green-800 text-sm mt-2">
                       Armed with these documents, we can prove to Hero Fincorp administrators that legal action will yield zero results because the business entity is defunct. This compels them to accept a settlement offer to salvage whatever principal they can.
                    </p>
                 </div>
              </div>

              <h2 id="two-wheeler" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Two-Wheeler Settlement: The Race Against Repossession</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  For many Indian families, a two-wheeler is not a luxury; it's a livelihood tool. Losing it means losing the ability to travel to work, worsening the financial crisis.
                </p>
                <h4 className="font-bold text-gray-800 text-lg mb-2">The Hypothecation Reality</h4>
                <p className="mb-4">
                   Your bike's Registration Certificate (RC) has a "Hypothecation" stamp in favor of Hero Fincorp. This gives them ownership rights until the loan is closed.
                </p>
                <h4 className="font-bold text-gray-800 text-lg mb-2">The Danger of "Voluntary Surrender"</h4>
                <p className="mb-4">
                   Recovery agents often say, <em>"Hand over the bike, and your loan will be closed."</em> <strong>This is often a lie.</strong> Here is what actually happens:
                </p>
                <ol className="list-decimal pl-6 space-y-2 mb-4">
                   <li>You surrender the bike.</li>
                   <li>Hero Fincorp auctions it. Since it's a distress sale, it might fetch only ₹15,000 against a loan outstanding of ₹40,000.</li>
                   <li>They then send you a legal notice for the remaining ₹25,000 (the shortfall).</li>
                   <li>You have lost the bike and you still have debt.</li>
                </ol>
                <h4 className="font-bold text-gray-800 text-lg mb-2">How to Settle Correctly</h4>
                <p>
                   The goal is a <strong>"Possession-Retained Settlement"</strong>. We negotiate with the regional manager. We argue that the auction process is costly and time-consuming for them. We offer a lump sum (often close to the principal outstanding) to close the loan <em>without</em> surrendering the bike. Once paid, you get the NOC, and you remove the hypothecation at the RTO.
                </p>
              </div>

              <h2 id="arbitration-reality" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The "Delhi Arbitration" Trap Explained</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  If you read the fine print of your Hero Fincorp loan agreement, you will likely find a clause stating that "All disputes shall be referred to a Sole Arbitrator with the seat of arbitration at New Delhi."
                </p>
                <p className="mb-4">
                   This is a strategic move. By setting the venue in Delhi, they make it logistically impossible for a borrower in Chennai or Kolkata to attend hearings.
                </p>
                <div className="space-y-4 mb-6">
                   <div className="border-l-4 border-blue-500 pl-4 py-2 bg-gray-50">
                      <h5 className="font-bold text-gray-900">Stage 1: The Notice</h5>
                      <p className="text-sm text-gray-600">You receive a registered post from an arbitrator (usually an advocate appointed by Hero) setting a hearing date.</p>
                   </div>
                   <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-gray-50">
                      <h5 className="font-bold text-gray-900">Stage 2: Non-Appearance</h5>
                      <p className="text-sm text-gray-600">You ignore it because you can't travel to Delhi. The arbitrator records your absence.</p>
                   </div>
                   <div className="border-l-4 border-red-500 pl-4 py-2 bg-gray-50">
                      <h5 className="font-bold text-gray-900">Stage 3: Ex-Parte Award</h5>
                      <p className="text-sm text-gray-600">The arbitrator passes an order claiming you owe the full amount + 18% interest + legal costs. This award is enforceable as a court decree.</p>
                   </div>
                </div>
                <p className="mb-4">
                   <strong>Defense Strategy:</strong> You effectively have a right to object to the venue if it causes undue hardship. At CredSettle, we file a specific legal response to the arbitrator citing relevant court judgments that protect borrowers from such "inconvenient venue" tactics. We request the proceedings be held virtually or paused for settlement talks. This legal pushback is often enough to bring Hero Fincorp to the negotiating table.
                </p>
              </div>

              <h2 id="sec-138-notice" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Section 138: The Check Bounce Threat</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                   Section 138 of the Negotiable Instruments Act is the most powerful weapon in a lender's arsenal. It makes cheque bounce (or NACH auto-debit failure) a <strong>criminal offense</strong>.
                </p>
                <p className="mb-4">
                   <strong>The Timeline:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                   <li><strong>Bounce:</strong> Your cheque/ECS returns unpaid.</li>
                   <li><strong>Legal Notice:</strong> Hero Fincorp sends a lawyer's notice giving you 15 days to pay.</li>
                   <li><strong>Case Filing:</strong> If you don't pay, they file a criminal complaint in a magistrate's court.</li>
                   <li><strong>Summons:</strong> The court issues a summons asking you to appear.</li>
                   <li><strong>Bailable Warrant:</strong> If you ignore the summons, the court issues a warrant for your arrest.</li>
                </ul>
                <p>
                   <strong>Can I settle after a case is filed?</strong>
                   <br />
                   <strong>YES.</strong> Section 138 is a "compoundable" offense. This means the complainant (Hero Fincorp) can withdraw the case at any stage if the money is paid. In fact, judges <em>encourage</em> settlement to reduce their backlog.
                </p>
                <p>
                   <strong>The Strategy:</strong> When we negotiate the One Time Settlement (OTS), we insert a mandatory clause that Hero Fincorp <strong>must withdraw the Section 138 case</strong> and provide a copy of the withdrawal order upon receiving the settlement amount. Never pay a settlement without this assurance in writing.
                </p>
              </div>

              <h2 id="process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Step-by-Step Settlement Process</h2>
              <div className="space-y-8 mb-10">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Detailed Case Assessment</h4>
                    <p className="text-gray-600 mt-2">We start by analyzing your loan statement. We separate the "Principal" from the "Interest" and "Penalties" (Bouncing charges, overdue interest). Our goal is to pay only a portion of the Principal.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Legal Shielding</h4>
                    <p className="text-gray-600 mt-2">We issue a formal representation to Hero Fincorp's legal team. This notifies them that you have engaged legal counsel, which typically reduces the frequency of abusive collection calls.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Hardship Validation</h4>
                    <p className="text-gray-600 mt-2">We collate your proofs (medical reports, termination letters, bank statements). We construct a narrative that proves to the settlement officer that <em>"This is all the money the borrower has. Take it or lose everything."</em></p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">4</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">The Negotiation Rounds</h4>
                    <p className="text-gray-600 mt-2">Settlement is rarely agreed to in the first call. It involves 3-4 rounds of offers and counter-offers. We handle this friction for you, ensuring you don't succumb to pressure.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">5</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Verification & Payment</h4>
                    <p className="text-gray-600 mt-2">Once Hero Fincorp issues the settlement letter on their official letterhead, we verify every clause. Only then do you make the payment directly to their account.</p>
                  </div>
                </div>
              </div>

              <h2 id="documents" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Essential Documents Checklist</h2>
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-10">
                <p className="mb-6 text-gray-600">To process your settlement efficiently, keep these documents ready:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-700">PAN Card & Aadhar Card</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-700">Loan Account Number (Mandatory)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-700">Latest Loan Statement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-700">SimplyCash App Screenshot (if applicable)</span>
                  </div>
                   <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-700">Copy of Arbitration Notice (if received)</span>
                  </div>
                   <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-700">Medical Reports / Job Termination Letter</span>
                  </div>
                </div>
              </div>

              <h2 id="mistakes" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Common Mistakes to Avoid</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                 <div className="bg-red-50 p-6 rounded-xl border-t-4 border-red-500">
                    <h5 className="font-bold text-red-900 mb-2">1. Paying without a Letter</h5>
                    <p className="text-sm text-red-800">Never pay an agent based on a WhatsApp promise or oral assurance. Without an official email/letter, that money will just be adjusted against "interest" and your loan will remain active.</p>
                 </div>
                 <div className="bg-red-50 p-6 rounded-xl border-t-4 border-red-500">
                    <h5 className="font-bold text-red-900 mb-2">2. Ignoring Court Summons</h5>
                    <p className="text-sm text-red-800">Ignoring a Section 138 summons leads to a non-bailable warrant. You must respect the court process while negotiation is ongoing.</p>
                 </div>
                 <div className="bg-red-50 p-6 rounded-xl border-t-4 border-red-500">
                    <h5 className="font-bold text-red-900 mb-2">3. Fresh Loans to Pay Old</h5>
                    <p className="text-sm text-red-800">Taking a new SimplyCash loan to pay a bike EMI is a debt trap. Only borrow to invest or build assets, never to service debt.</p>
                 </div>
                 <div className="bg-red-50 p-6 rounded-xl border-t-4 border-red-500">
                    <h5 className="font-bold text-red-900 mb-2">4. Panicking at "Police" Threats</h5>
                    <p className="text-sm text-red-800">Recovery agents often impersonate police. Remember: Police do not get involved in civil loan disputes.</p>
                 </div>
              </div>

              <h2 id="success-stories" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Recent Settlement Success Stories</h2>
              <div className="space-y-6 mb-10">
                 <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                    <div className="flex justify-between items-start mb-4">
                       <div>
                          <h5 className="font-bold text-gray-900">SimplyCash Loan Settled</h5>
                          <p className="text-xs text-gray-500">Client: Rajesh K. (Software Engineer, Bangalore)</p>
                       </div>
                       <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">Saved 55%</span>
                    </div>
                    <p className="text-sm text-gray-700 italic">"I lost my job in the tech layoffs. I had a 2L loan. They harassed my parents. CredSettle stopped the calls and settled it for just ₹90,000."</p>
                 </div>

                 <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                    <div className="flex justify-between items-start mb-4">
                       <div>
                          <h5 className="font-bold text-gray-900">Bike Repossession Stopped</h5>
                          <p className="text-xs text-gray-500">Client: Amit S. (Delivery Partner, Delhi)</p>
                       </div>
                       <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">Bike Saved</span>
                    </div>
                    <p className="text-sm text-gray-700 italic">"Agents were outside my home to take my Splendor. I need it for Zomato delivery. CredSettle team spoke to them immediately. We paid a settlement and I kept my bike."</p>
                 </div>
              </div>

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqList.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-4 rounded-lg">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>

            </article>
          </div>

          {/* Right Column: CTA & Related (Sticky) */}
          <div className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              
              {/* Main CTA Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center transform hover:-translate-y-1 transition-transform duration-300">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Arbitration Notice?</h4>
                <p className="text-sm text-gray-600 mb-6">Don't ignore the Delhi arbitrator. We can respond for you.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Get Legal Help
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>✓ Save Your Bike</p>
                  <p className="mt-1">✓ Settle SimplyCash</p>
                </div>
              </div>

              {/* Related Pages Info */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Guides</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/loan-settlement/bajaj-finserv" className="text-gray-600 hover:text-blue-600 flex items-center transition-colors">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      Bajaj Finserv
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/personal-loan-settlement" className="text-gray-600 hover:text-blue-600 flex items-center transition-colors">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Personal Loan Settle
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/cheque-bounce-lawyer" className="text-gray-600 hover:text-blue-600 flex items-center transition-colors">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Cheque Bounce Help
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/hdfc" className="text-gray-600 hover:text-blue-600 flex items-center transition-colors">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      HDFC Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/axis-bank" className="text-gray-600 hover:text-blue-600 flex items-center transition-colors">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      Axis Bank Settlement
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
