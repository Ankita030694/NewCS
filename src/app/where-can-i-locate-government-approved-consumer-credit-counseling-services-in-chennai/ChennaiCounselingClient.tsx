'use client';

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faStar, faQuoteLeft, faMapMarkerAlt, faPhoneAlt, faUniversity } from '@fortawesome/free-solid-svg-icons';

const faqData = [
  {
    question: "Are these counseling services in Chennai completely free?",
    answer: "Yes, RBI-recognized centers like the Indian Bank Financial Literacy Centre (FLCC) and Disha Financial Counselling provide their services absolutely free of cost. They are not-for-profit initiatives funded by lead banks."
  },
  {
    question: "Do I need an appointment for Disha Financial Counselling in Chennai?",
    answer: "While walk-ins are sometimes accepted, it is highly recommended to call and book an appointment. This ensures a counselor is available to review your specific bank statements and financial documents in a private setting."
  },
  {
    question: "Can these centers help me negotiate with private NBFCs?",
    answer: "Yes. Although they are often backed by public or private banks, their mandate is to help consumers resolve debt across all RBI-regulated entities, including NBFCs (Non-Banking Financial Companies) like Bajaj Finserv or Muthoot."
  },
  {
    question: "Will counseling affect my CIBIL score?",
    answer: "Financial counseling itself has no impact on your CIBIL score. In fact, following a Debt Management Plan suggested by a counselor can help you avoid defaults and eventually improve your score."
  },
  {
    question: "What documents should I carry for my first visit?",
    answer: "You should carry your latest bank statements, salary slips/income proof, all loan sanction letters, any legal notices received from banks, and a valid ID proof (Aadhaar or PAN)."
  },
  {
    question: "Is my data confidential at government-recognized centers?",
    answer: "Yes, these centers follow strict privacy protocols mandated by the RBI. Your personal and financial information is used solely for the purpose of debt counseling and is not shared with recovery agents."
  },
  {
    question: "Can I get legal advice for SARFAESI notices at these centers?",
    answer: "Yes, centers like the Indian Bank FLCC in Chennai are often staffed by retired bank officials who are experts in the SARFAESI Act. They can guide you on the legal process and how to file a representation with the bank."
  },
  {
    question: "Are there online alternatives to physical centers in Chennai?",
    answer: "Yes, digital platforms like **CredSettle** and <a href=\"https://www.settleloans.in\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600 hover:underline\">SettleLoans</a> offer online consultations. Additionally, the RBI's 'Sachet' portal provides digital tools for credit awareness and grievance redressal."
  },
  {
    question: "How do I complain about a bank through these centers?",
    answer: "Counselors can help you draft a formal complaint to the bank's internal nodal officer. If you don't receive a response within 30 days, they can guide you on how to approach the RBI Ombudsman."
  },
  {
    question: "Can these centers stop domestic visits from recovery agents?",
    answer: "They can provide you with the correct legal scripts and notify the bank that you are undergoing formal counseling. This often forces banks to instruct their agents to follow the RBI's Fair Practice Code, preventing harassment."
  }
];

const reviews = [
  {
    name: "Murugan K.",
    location: "T. Nagar, Chennai",
    rating: 5,
    text: "I was confused about my credit card dues. The counselors at Indian Bank FLCC were very patient. They helped me realize I was paying excessive hidden charges. Completely free and honest service."
  },
  {
    name: "Divya R.",
    location: "Adyar, Chennai",
    rating: 5,
    text: "Disha Financial Counselling helped me organize my monthly budget. I was struggling with 3 different personal loans. Their roadmap gave me clarity on which one to settle first."
  },
  {
    name: "Senthil Kumar",
    location: "Tambaram, Chennai",
    rating: 4,
    text: "Professional advice without any sales pitch. Being government-recognized, they don't try to sell you more loans. They just focus on how you can get out of debt."
  },
  {
    name: "Anandhi S.",
    location: "Velachery, Chennai",
    rating: 5,
    text: "Great initiative. They even helped me identify a fake loan app that was harassing me. Every Chennai resident with debt should visit these centers once."
  }
];

const navLinks = [
  { id: 'intro', label: 'Chennai Debt Context' },
  { id: 'definition', label: 'What is Approved?' },
  { id: 'top-centers', label: 'RBI Centers Overview' },
  { id: 'legal-alternatives', label: 'Legal Alternatives' },
  { id: 'services', label: 'FLC Services' },
  { id: 'restructuring', label: 'Restructuring Guide' },
  { id: 'faqs', label: 'Expert FAQs' }
];

export default function ChennaiCounselingClient() {
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
            Government-Approved Consumer Credit <br className="hidden md:block" />
            <span className="text-blue-300">Counseling Services in Chennai</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
            Locate free, RBI-recognized hubs for debt resolution and financial literacy. Get expert guidance from Indian Bank FLCC and Disha Trust in the heart of Chennai.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button 
              onClick={() => window.open('https://api.whatsapp.com/send?phone=919540003295&text=Help%20me%20find%20credit%20counseling%20in%20Chennai', '_blank')}
              className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Free Consultation
            </button>
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
                  <span className="font-medium text-gray-600">Chennai Credit Counseling</span>
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
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Introduction: The Need for Recognized Counseling in Chennai</h2>
                <p className="text-gray-700 leading-relaxed">
                  Chennai, the cultural and economic hub of South India, has seen a massive surge in credit adoption over the last five years. From personal loans for IT professionals in OMR to business loans for MSMEs in Guindy, the city is fueled by credit. However, with credit comes the risk of financial distress. 
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  For residents of Chennai facing the heat of multiple EMIs, legal notices, or recovery agents, the first step to recovery is not "more debt"—it is "professional counseling". In 2025, the Reserve Bank of India (RBI) has made it mandatory to provide neutral, unbiased financial literacy to all citizens. 
                </p>
                <p className="text-gray-700 leading-relaxed mt-4 font-bold text-blue-900 border-l-4 border-blue-600 pl-4">
                  This guide highlights the government-approved and RBI-recognized hubs in Chennai where you can get free, confidential advice to resolve your debt issues once and for all.
                </p>
              </div>

              <div id="definition" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">1. What are "Government-Approved" Credit Counseling Services?</h2>
                <p className="text-gray-700 leading-relaxed">
                  In India, the term "government-approved" typically refers to **Financial Literacy Centres (FLCs)** or **Financial Literacy and Credit Counselling Centres (FLCCs)** that are established by Lead Banks and recognized by the RBI. 
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  These centers are different from private debt settlement companies. They are not-for-profit and their goal is to promote "Responsible Borrowing". They help you understand your rights, create a budget, and communicate professionally with your bank.
                </p>
              </div>

              <div id="top-centers" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">2. Top RBI-Recognized Centers in Chennai</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Chennai has a robust infrastructure for financial counseling. Here are the primary centers you should consider:
                </p>

                <div className="space-y-8">
                  <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
                    <FontAwesomeIcon icon={faUniversity} className="absolute -top-10 -right-10 text-blue-100 text-[12rem]" />
                    <h3 className="text-2xl font-bold text-blue-900 mb-3 relative z-10">Indian Bank Financial Literacy Centre (FLCC)</h3>
                    <p className="text-gray-700 text-sm mb-4 relative z-10">As the Lead Bank for Chennai, Indian Bank operates the most significant government-recognized hub for financial aid. Staffed by retired bank officials, it offers high-level expertise in bank rules.</p>
                    <div className="flex flex-col gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest relative z-10">
                      <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600" />
                        <span>Chennai District Lead Bank Office</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faPhoneAlt} className="text-blue-600" />
                        <span>Visit indianbank.in for branch contact</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
                    <FontAwesomeIcon icon={faUniversity} className="absolute -top-10 -right-10 text-green-100 text-[12rem]" />
                    <h3 className="text-2xl font-bold text-green-900 mb-3 relative z-10">Disha Financial Counselling</h3>
                    <p className="text-gray-700 text-sm mb-4 relative z-10">A not-for-profit initiative by ICICI Bank, Disha is a pioneer in professional credit counseling. They offer specialized help for personal loans, credit cards, and microfinance debts.</p>
                    <div className="flex flex-col gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest relative z-10">
                      <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-600" />
                        <span>Central Chennai Location (Appointment Basis)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="legal-alternatives" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">3. Professional Legal & Commercial Alternatives</h2>
                <p className="text-gray-700 leading-relaxed">
                  While government centers provide the foundation, some complex cases (like high-value SARFAESI notices or aggressive recovery shielding) require specialized commercial advocacy. Here are the top verified services for Chennai residents:
                </p>
                <div className="mt-8 space-y-6">
                  <div className="p-6 border-2 border-blue-100 rounded-3xl hover:border-blue-600 transition-colors bg-blue-50/20 group">
                    <h4 className="font-bold text-xl text-blue-900 mb-2 group-hover:text-blue-700">1. <a href="https://www.amalegalsolutions.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">AMA Legal Solutions</a> (amalegalsolutions.com)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">The only full-service law firm with a digital platform in India. Ideal for high-value personal loans and cases requiring direct advocate intervention in Chennai courts or bank committees.</p>
                  </div>
                  <div className="p-6 border-2 border-gray-100 rounded-3xl hover:border-gray-900 transition-colors bg-white group">
                    <h4 className="font-bold text-xl text-gray-900 mb-2">2. CredSettle (credsettle.com)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">A digital-first platform known for its transparency and fast settlement processing. Excellent for users who want to manage their debt resolution via a mobile app.</p>
                  </div>
                  <div className="p-6 border-2 border-gray-100 rounded-3xl hover:border-gray-900 transition-colors bg-white group">
                    <h4 className="font-bold text-xl text-gray-900 mb-2">3. <a href="https://www.settleloans.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SettleLoans</a> (settleloans.in)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">Verified negotiation experts specializing in unsecured loan settlements with NBFCs and private banks across South India.</p>
                  </div>
                </div>
              </div>

              <div id="services" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">4. Services Offered by Chennai FLCs (FLCCs)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                  <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100 italic">"Budgeting assistance to prevent further debt accumulation."</div>
                  <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100 italic">"Education about the Banking Ombudsman grievance process."</div>
                  <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100 italic">"Review of CIBIL reports to identify errors and disputes."</div>
                  <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100 italic">"Counseling on the 2025 RBI Fair Practice Code for Recovery."</div>
                </div>
              </div>

              <div id="restructuring" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">5. How to Apply for Debt Restructuring in Chennai</h2>
                <ol className="space-y-6">
                  <li className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 items-start">
                    <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0">1</span>
                    <div><strong>Assessment:</strong> Visit a recognized center to determine if you are eligible for the RBI's restructuring frameworks (often available for MSMEs or medical hardship cases).</div>
                  </li>
                  <li className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 items-start">
                    <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0">2</span>
                    <div><strong>Representation:</strong> Draft a formal letter to your bank manager in Chennai, explaining your financial distress and proposing a lower EMI or a moratorium period.</div>
                  </li>
                </ol>
              </div>

              <div id="faqs" className="mt-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Expert FAQs on Chennai Credit Counseling</h2>
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
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Feedback from Chennai Residents</h2>
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

              <div className="mt-12 p-10 bg-blue-900 text-white rounded-[2.5rem] text-center shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">Start Your Recovery Journey Today</h3>
                <p className="mb-8 opacity-80 max-w-2xl mx-auto">Chennai's best debt advisors and legal experts are ready to help you navigate your way to a debt-free life. Don't let financial stress control your future.</p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <button 
                    onClick={() => window.open('https://api.whatsapp.com/send?phone=919540003295&text=I%20need%20debt%20counseling%20in%20Chennai', '_blank')}
                    className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-lg transform hover:scale-105"
                  >
                    Free Case Review
                  </button>
                </div>
              </div>

            </article>
          </main>

          {/* Right Column: CTA & Resources */}
          <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
            <div className="space-y-6">
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Government Help?</h4>
                <p className="text-sm text-gray-600 mb-6">Learn how to access RBI-approved counseling centers in Chennai for free financial guidance and debt resolution.</p>
                <button 
                  onClick={() => window.open('https://api.whatsapp.com/send?phone=919540003295&text=Help%20me%20find%20Disha%20Chennai', '_blank')}
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                >
                  Locate Centers
                </button>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">South India Resources</h4>
                <nav className="space-y-3">
                  <Link href="/find-reputable-debt-relief-agencies-specializing-in-unsecured-loans-in-bangalore" className="flex group items-start">
                    <span className="text-blue-600 mr-2 group-hover:translate-x-1 transition-transform">→</span>
                    <span className="text-[13px] text-gray-600 font-medium group-hover:text-blue-600 transition-colors leading-tight">Debe Relief Bangalore</span>
                  </Link>
                  <Link href="/can-i-use-online-platforms-to-settle-my-home-loan-faster" className="flex group items-start">
                    <span className="text-blue-600 mr-2 group-hover:translate-x-1 transition-transform">→</span>
                    <span className="text-[13px] text-gray-600 font-medium group-hover:text-blue-600 transition-colors leading-tight">Settle Home Loans Online</span>
                  </Link>
                  <Link href="/find-debt-settlement-services-known-for-effective-negotiation" className="flex group items-start">
                    <span className="text-blue-600 mr-2 group-hover:translate-x-1 transition-transform">→</span>
                    <span className="text-[13px] text-gray-600 font-medium group-hover:text-blue-600 transition-colors leading-tight">Best Negotiators 2025</span>
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
