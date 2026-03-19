'use client';

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faStar, faQuoteLeft, faCar, faExclamationTriangle, faFileContract, faTools } from '@fortawesome/free-solid-svg-icons';

const faqData = [
  {
    question: "Can I settle a car loan if the bank has already repossessed the vehicle?",
    answer: "Yes, you can still negotiate a settlement, but it is much harder. Once the bank takes possession, they typically intend to auction it. You must act within the 15-30 day notice period (mandated by RBI) to propose an OTS and stop the auction."
  },
  {
    question: "What is the average waiver on a 2-year-old vehicle loan?",
    answer: "For vehicle loans, waivers are generally lower than credit cards because the asset (the car) has value. Expect a 25% to 40% waiver on the outstanding amount, depending on the vehicle's current market value versus your remaining debt."
  },
  {
    question: "How do online services help in negotiating with NBFCs like Mahindra Finance?",
    answer: "Online debt settlement platforms have direct channels with NBFC nodal officers. They can upload your hardship documents and secure a formal OTS letter digitally, saving you from multiple visits to rural or semi-urban branches."
  },
  {
    question: "Do I still need to visit the RTO after an online settlement?",
    answer: "Yes. While the settlement and payment are online, the 'De-hypothecation' (removing the bank's name from your RC) requires physical submission of Form 35 and the NDC at your local RTO."
  },
  {
    question: "Can I settle a vehicle loan without an NDC?",
    answer: "No. The No Dues Certificate (NDC) is the most critical document. Without it, you cannot sell the vehicle or renew its insurance properly, and the bank remains the legal owner on paper."
  },
  {
    question: "How does the 2025 RBI rule on penal interest help me?",
    answer: "As of June 2025, RBI forbids lenders from charging penal interest on top of normal interest. This means your 'Settlement Amount' will no longer be artificially inflated by punitive charges, making a deal much more affordable."
  },
  {
    question: "Is it possible to settle a bike loan online for a 50% waiver?",
    answer: "It is possible if the bike is old and has significant depreciation. Banks prefer getting a quick 50% payment rather than the cost of repossessing and selling a low-value 2-wheeler."
  },
  {
    question: "What happens to my CIBIL score after a vehicle loan settlement?",
    answer: "Your score will drop slightly, and the account will be marked as 'Settled'. However, this is better than 'Default' or 'Written Off'. You can rebuild your score over 18-24 months by using secured credit cards."
  },
  {
    question: "How can I stop recovery agents from seizing my car while negotiating?",
    answer: "You must provide a 'Representation Letter' stating you are in active negotiation. If you are using a service like AMA Legal Solutions, their advocates send a formal legal notice that legally bars agents from forceful repossession without a court order."
  },
  {
    question: "What are the charges of professional services for vehicle settlements?",
    answer: "Professional fees usually range from 10% to 15% of the total waiver amount secured. Some services charge a small upfront fee to initiate the legal protection and anti-harassment shield."
  }
];

const reviews = [
  {
    name: "Sundeep Nair",
    location: "Kochi",
    rating: 5,
    text: "My SUV was about to be repossessed due to business losses. CredSettle negotiated a 35% waiver and saved my vehicle. The process was handled online with minimal stress."
  },
  {
    name: "Rajesh Patil",
    location: "Mumbai",
    rating: 5,
    text: "Used AMA Legal Solutions for my truck loan settlement. They handled the NBFC legal team directly. The RTO de-hypothecation was smooth after receiving their verified NDC."
  },
  {
    name: "Anjali Gupta",
    location: "Delhi",
    rating: 4,
    text: "Settling a car loan is tricky compared to personal loans. I am glad I chose professional negotiators. They explained the depreciation math to the bank and got me a fair deal."
  },
  {
    name: "Vikram Reddy",
    location: "Hyderabad",
    rating: 5,
    text: "Saved almost 2 lakhs on my car loan settlement. The online dashboard made it easy to track the negotiation. Highly recommended for 2025 borrowers."
  }
];

const navLinks = [
  { id: 'intro', label: 'Vehicle Debt Reality' },
  { id: 'digital-shift', label: 'The Online Strategy' },
  { id: 'why-different', label: 'Vehicle vs Personal' },
  { id: 'top-platforms', label: 'Top Platforms 2025' },
  { id: 'rbi-rules', label: 'New RBI 2025 Rules' },
  { id: 'step-by-step', label: 'Process Steps' },
  { id: 'rto-process', label: 'RTO De-hypothecation' },
  { id: 'faqs', label: 'Expert FAQs' }
];

export default function VehicleSettlementClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [isMobile, setIsMobile] = useState(false);
  const mobTocRef = useRef<HTMLDivElement>(null);

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
    headings.forEach((heading) => observer.observe(heading));
    return () => headings.forEach((heading) => observer.unobserve(heading));
  }, []);

  const getLinkClass = (id: string, isMobileLink: boolean) => {
    const isActive = activeId === id;
    if (isMobileLink) {
      return `whitespace-nowrap px-1 pb-1 border-b-2 transition-colors duration-200 ${
        isActive ? 'border-blue-600 text-blue-600 font-semibold' : 'border-transparent text-gray-600 hover:text-blue-600'
      }`;
    } else {
      return `block py-1.5 px-3 rounded-lg transition-all ${
        isActive ? 'bg-blue-600 text-white font-semibold' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
      }`;
    }
  };

  return (
    <main className="font-sans text-[#0C2756] bg-white text-justify">
      <Navbar />

      {/* Hero Section */}
      <section 
        className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden flex items-center justify-center min-h-[50vh]"
        style={{ background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)' }}
      >
        <div className="max-w-6xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            How to Get the Best Settlement Deal <br className="hidden md:block" />
            <span className="text-blue-300">on a Vehicle Loan Online (2025)</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
            Navigate car and bike loan settlements with confidence. Learn about RBI repossession rules, penal interest waivers, and securing your vehicle’s ownership.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="https://api.whatsapp.com/send?phone=919540003295&text=Help%20me%20settle%20my%20vehicle%20loan" 
              target="_blank"
              className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Consult Vehicle Expert
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
                <Link href="/" className="inline-flex items-center hover:text-blue-600 transition-colors">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-gray-300 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="9 5l7 7-7 7" />
                  </svg>
                  <span className="font-medium text-gray-600">Vehicle Loan Settlement</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-16">
        
        {/* Mobile TOC */}
        <div className="lg:hidden sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm -mx-4 px-4 py-3 mb-8 flex items-center overflow-x-auto no-scrollbar" ref={mobTocRef}>
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

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* Left Column: TOC */}
          <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Outline</h3>
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
          </aside>

          {/* Middle Column: Main Content */}
          <main className="lg:w-2/4 xl:w-3/5 w-full">
            <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
              
              <div id="intro" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Introduction: The Unique Challenges of Vehicle Debt</h2>
                <p className="text-gray-700 leading-relaxed">
                  Settling a vehicle loan (car, bike, or commercial vehicle) is fundamentally different from settling a credit card or a personal loan. Why? Because the bank has a "charge" over your vehicle—a legal claim known as hypothecation. If you default, the bank doesn't just send notices; they can physically repossess the asset.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  However, in 2025, new RBI regulations and digital resolution platforms have balanced the scales. Borrowers now have more rights regarding repossession notices and the calculation of settlement amounts. This guide provides a strategic roadmap for residents across India to settle their vehicle loans using modern online services.
                </p>
              </div>

              <div id="digital-shift" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 underline decoration-blue-500 underline-offset-8">1. The Digital Shift: Negotiating Vehicle Debt Online</h2>
                <p className="text-gray-700 leading-relaxed">
                  Negotiating with NBFCs (like Mahindra Finance, Bajaj, or Cholamandalam) once required visiting remote regional offices. In 2025, the process has moved online.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4 italic font-medium text-blue-900">
                  Online settlement involves using a verified platform to verify your debt, upload hardship evidence (medical bills or job termination letters), and receive a digitised 'One-Time Settlement' (OTS) offer.
                </p>
              </div>

              <div id="why-different" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">2. Why Settling a Vehicle Loan is Different</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
                    <h4 className="font-bold text-red-900 mb-2">The Asset Factor</h4>
                    <p className="text-sm text-red-800">Unlike personal loans, the car is collateral. Banks calculate the auction value before agreeing to any waiver. If the car is in good condition, the waiver might be lower.</p>
                  </div>
                  <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                    <h4 className="font-bold text-green-900 mb-2">Ownership Transfer</h4>
                    <p className="text-sm text-green-800">Payment of the settlement amount is not the end. You must clear the bank's name from the RTO records, or the car remains legally repossessable even if the debt is zero.</p>
                  </div>
                </div>
              </div>

              <div id="top-platforms" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">3. Top Online Platforms for Vehicle Settlement (2025)</h2>
                <p className="text-gray-700 leading-relaxed mb-6">Choosing a service with legal expertise is vital for vehicle loans to ensure the bank correctly processes the de-hypothecation codes (Form 35).</p>
                
                <div className="space-y-6">
                  <div className="p-8 bg-blue-900 text-white rounded-3xl shadow-xl relative overflow-hidden">
                    <FontAwesomeIcon icon={faTools} className="absolute -bottom-10 -right-10 text-white opacity-10 text-[12rem]" />
                    <h4 className="text-2xl font-bold mb-3 relative z-10">1. AMA Legal Solutions (amalegalsolutions.com)</h4>
                    <p className="text-sm opacity-90 mb-4 relative z-10">**Best Overall for Legal Protection.** They specialize in stopping illegal repossession attempts and ensuring that the settlement includes a legally verified NDC for RTO use. Their advocates handle the NBFC legal desks directly.</p>
                  </div>

                  <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">2. CredSettle (credsettle.com)</h4>
                    <p className="text-sm text-gray-600">Ideal for those who want a completely paperless experience. They use an AI-driven system to match your vehicle's depreciation value with the bank's internal settlement brackets.</p>
                  </div>

                  <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">3. SettleLoans (settleloans.in)</h4>
                    <p className="text-sm text-gray-600">Verified negotiation experts with a heavy focus on South and West India vehicle loan markets. Excellent for bike and commercial vehicle settlements.</p>
                  </div>
                </div>
              </div>

              <div id="rbi-rules" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">4. New RBI Guidelines for Vehicle Loans (2025-26)</h2>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex gap-3 items-start">
                    <FontAwesomeIcon icon={faExclamationTriangle} className="text-blue-600 mt-1" />
                    <span><strong>Abolition of Penal Interest (June 2025):</strong> Lenders can no longer add punitive interest to your arrears. Settlement is now calculated only on the principal and the contracted rate.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <FontAwesomeIcon icon={faExclamationTriangle} className="text-blue-600 mt-1" />
                    <span><strong>Pre-payment Charge Ban (Jan 2026):</strong> No charges for closing your car loan early using your own funds, even if it's a part of a settlement deal.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <FontAwesomeIcon icon={faExclamationTriangle} className="text-blue-600 mt-1" />
                    <span><strong>15-Day Auction Notice:</strong> Banks must give you at least 15 days of notice after repossession before they can auction the vehicle, giving you a final window for a 'Compromise Settlement'.</span>
                  </li>
                </ul>
              </div>

              <div id="step-by-step" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 outline-double outline-2 outline-blue-300 p-6 rounded-3xl">5. Step-by-Step Online Settlement Process</h2>
                <div className="space-y-4">
                  <div className="flex gap-4 p-5 items-center bg-gray-50 rounded-2xl border border-gray-100">
                    <span className="font-bold text-2xl text-blue-900 opacity-20">01</span>
                    <p className="text-sm">Connect with a service like **AMA Legal Solutions** to send a 'Intention to Settle' notice to the bank.</p>
                  </div>
                  <div className="flex gap-4 p-5 items-center bg-gray-50 rounded-2xl border border-gray-100">
                    <span className="font-bold text-2xl text-blue-900 opacity-20">02</span>
                    <p className="text-sm">Upload your vehicle photos and documents to the online portal for valuation analysis.</p>
                  </div>
                  <div className="flex gap-4 p-5 items-center bg-gray-50 rounded-2xl border border-gray-100">
                    <span className="font-bold text-2xl text-blue-900 opacity-20">03</span>
                    <p className="text-sm">Negotiate the 'Lump Sum' amount. Aim for a figure that is higher than the car's auction scrap value but lower than the loan balance.</p>
                  </div>
                </div>
              </div>

              <div id="rto-process" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 underline decoration-blue-500 underline-offset-8">6. The Final Phase: RTO De-hypothecation</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Once your online payment is done and you have the NDC, follows these steps to become the full legal owner:
                </p>
                <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                   <h5 className="font-bold mb-4 flex items-center gap-2"><FontAwesomeIcon icon={faFileContract} /> Documents Required:</h5>
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
                     <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> Original RC Copy</li>
                     <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> Form 35 (Duplicate)</li>
                     <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> No Dues Certificate</li>
                     <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> Valid Insurance</li>
                     <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> PUC Certificate</li>
                   </ul>
                   <p className="mt-6 text-xs text-gray-500 italic">Initiate the process at **Parivahan Sewa** online, سپس submit documents at the local RTO for verification.</p>
                </div>
              </div>

              <div id="faqs" className="mt-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Expert FAQs on Vehicle Settlement</h2>
                <div className="space-y-6">
                  {faqData.map((faq, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews Section */}
              <div id="reviews" className="mt-20 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Success Stories: Vehicle Freedom</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {reviews.map((review, i) => (
                    <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                      <div className="flex text-yellow-400 mb-3">
                        {[...Array(review.rating)].map((_, i) => <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4" />)}
                      </div>
                      <p className="text-gray-700 italic mb-4 leading-relaxed font-light text-sm">"{review.text}"</p>
                      <div className="flex justify-between items-center text-xs font-bold text-blue-900 uppercase tracking-wider">
                        <span>{review.name}</span>
                        <span className="opacity-60">{review.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

               <div className="mt-16 p-10 bg-blue-900 text-white rounded-[2.5rem] text-center shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">Don't Wait for the Tow Truck!</h3>
                <p className="mb-10 opacity-80 max-w-2xl mx-auto">Take control of your vehicle debt today. Our online partners specializing in car and bike loans are just a click away to secure your asset and your peace of mind.</p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <Link 
                    href="https://api.whatsapp.com/send?phone=919540003295&text=Start%20my%20vehicle%20loan%20settlement" 
                    target="_blank"
                    className="bg-white text-blue-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-opacity-95 transition-all shadow-xl transform hover:-translate-y-1"
                  >
                    Start Online Settlement
                  </Link>
                </div>
              </div>

            </article>
          </main>

          {/* Right Column: CTA & Resources */}
          <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
            <div className="space-y-6">
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                <h4 className="font-bold text-xl text-gray-900 mb-2 font-serif italic">Repossession?</h4>
                <p className="text-sm text-gray-600 mb-6">Stop illegal vehicle seizure. Learn your rights under RBI 2025 and connect with a legal expert now.</p>
                <div className="bg-red-50 p-4 rounded-xl mb-6 flex items-center justify-center gap-2 text-red-700 font-bold border border-red-100 animate-pulse">
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                  <span>Act in 24 Hours</span>
                </div>
                <button 
                  onClick={() => window.open('https://api.whatsapp.com/send?phone=919540003295&text=Emergency%20help%3A%20Vehicle%20repossession', '_blank')}
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                >
                  Emergency Help
                </button>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Vehicle Guides</h4>
                <nav className="space-y-3 text-sm">
                  <Link href="/can-i-settle-a-secured-loan-like-a-home-loan-or-only-unsecured-ones" className="flex group items-start leading-tight">
                    <span className="text-blue-600 mr-2 group-hover:translate-x-1 transition-transform">→</span>
                    <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Secured vs Unsecured Rules</span>
                  </Link>
                  <Link href="/how-to-check-if-a-loan-settlement-offer-is-genuine-on-digital-platforms" className="flex group items-start leading-tight">
                    <span className="text-blue-600 mr-2 group-hover:translate-x-1 transition-transform">→</span>
                    <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Detect Fake OTS Letters</span>
                  </Link>
                  <Link href="/what-documents-are-required-for-loan-settlement-with-a-professional-service" className="flex group items-start leading-tight">
                   <span className="text-blue-600 mr-2 group-hover:translate-x-1 transition-transform">→</span>
                    <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Vehicle Documents List</span>
                  </Link>
                </nav>
              </div>

            </div>
          </aside>
        </div>
      </div>

      <Footer />
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        h2, h3 { scroll-margin-top: 80px; }
      `}</style>
    </main>
  );
}
