'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function RBLHomeVisitClient() {
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'RBL Bank Harassment Protection Service',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.8',
      'reviewCount': '13245',
      'bestRating': '5',
      'worstRating': '1'
    }
  };

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

  const getLinkClass = (id: string, isMobileLink: boolean) => {
    const isActive = activeId === id;
    if (isMobileLink) {
      return `whitespace-nowrap px-1 pb-1 border-b-2 transition-colors duration-200 ${isActive
        ? 'border-blue-600 text-blue-600 font-semibold'
        : 'border-transparent text-gray-600 hover:text-blue-600'
        }`;
    } else {
      return `block transition-all duration-200 pl-3 border-l-2 ${isActive
        ? 'border-blue-600 text-blue-600 font-bold bg-blue-50 py-1 rounded-r'
        : 'border-transparent text-gray-600 hover:text-blue-600 hover:pl-4'
        }`;
    }
  };

  const navLinks = [
    { id: 'introduction', label: 'RBL Bank Collection Process' },
    { id: 'rbi-fines-rbl-bank', label: 'RBI Penalties on RBL Bank' },
    { id: 'consent-and-timing', label: 'Consent and Doorstep Timing' },
    { id: 'professional-conduct-mandates', label: 'Mandates on Professional Conduct' },
    { id: 'protecting-your-privacy', label: 'Protecting Your Utmost Privacy' },
    { id: 'preventing-workplace-visits', label: 'Preventing Workplace Embarrassment' },
    { id: 'lodging-grievances', label: 'Lodging Harassment Grievances' },
    { id: 'police-intervention-fir', label: 'Police Intervention and FIR' },
    { id: 'evidence-preservation', label: 'Complete Evidence Preservation' },
    { id: 'credsettle-intervention', label: 'CredSettle Professional Defense' },
    { id: 'client-reviews-section', label: 'Client Reviews and Outcomes' },
    { id: 'faqs', label: 'Questions and Solutions' },
  ];

  const faqs = [
    {
      question: 'Can an RBL Bank recovery agent visit my home without notice?',
      answer: 'No. According to RBI guidelines, RBL Bank must provide a prior written notice before a recovery agent visits a borrower premises.'
    },
    {
      question: 'What are the permissible hours for an RBL Bank recovery agent visit?',
      answer: 'Recovery agents can only visit or call between 8:00 AM and 7:00 PM. Any visit before or after these hours is strictly prohibited and considered harassment.'
    },
    {
      question: 'Should I allow an RBL Bank recovery agent inside my house?',
      answer: 'You are not legally obligated to allow a recovery agent inside your home. You can interact with them at the doorstep or in a public area. They have no legal right of forced entry.'
    },
    {
      question: 'What documents must an RBL Bank agent carry?',
      answer: 'An agent must produce a valid Identity Card issued by the bank or agency, a copy of the bank Authorization Letter, and a specific Visit Letter mentioning your loan details.'
    },
    {
      question: 'Can RBL Bank agents discuss my debt with neighbors?',
      answer: 'Absolutely not. Discussing a debt with third parties like neighbors, relatives, or employers is a severe violation of privacy rights and RBI guidelines against public shaming.'
    },
    {
      question: 'What to do if an RBL Bank recovery agent uses abusive language?',
      answer: 'Record the interaction immediately as evidence. File a formal complaint with the bank Nodal Officer and if not resolved, escalate to the RBI Ombudsman online.'
    },
    {
      question: 'Can I file an FIR for RBL Bank recovery agent harassment home visit?',
      answer: 'Yes, if the agent engages in criminal intimidation, trespass, or harassment, you can file an FIR at your local police station citing relevant IPC sections.'
    },
    {
      question: 'How does CredSettle stop RBL bank visits?',
      answer: 'CredSettle acts as your legal representative, sending official notices to RBL Bank to stop unauthorized third party visits and negotiating a formal settlement plan on your behalf.'
    },
    {
      question: 'Can RBL Bank recovery agents visit my office?',
      answer: 'Selectively yes, but they must respect your professional environment and privacy. They cannot create a scene or disclose your debt to your colleagues or employer. The RBI has strictly penalized RBL Bank in the past for violating these exact norms.'
    },
    {
      question: 'Is defaulting on an RBL Bank loan a criminal offense?',
      answer: 'No. A loan default is treated as a civil dispute in India. You cannot be arrested simply because you cannot pay your EMI, and agents cannot threaten you with jail.'
    }
  ];

  const reviews = [
    {
      name: 'Aditya Singh',
      location: 'Delhi',
      rating: 5,
      text: 'CredSettle provided immediate legal support when RBL agents were visiting my house. Their understanding of RBI home visit rules stopped the harassment instantly.',
      date: 'April 2024'
    },
    {
      name: 'Pooja Desai',
      location: 'Mumbai',
      rating: 5,
      text: 'RBL collection agents used to show up at 8 PM and shout. CredSettle legal team stopped it within 48 hours. I feel safe at home again.',
      date: 'May 2024'
    },
    {
      name: 'Rahul Mehta',
      location: 'Bangalore',
      rating: 4,
      text: 'The guidance on RBI rules helped me face the RBL bank agents with confidence. CredSettle then negotiated my settlement perfectly.',
      date: 'February 2024'
    },
    {
      name: 'Sunita Verma',
      location: 'Pune',
      rating: 5,
      text: 'I was terribly stressed out about a massive credit card default and the frequent home visits by RBL debt collectors. The moment I hired CredSettle, the home visits permanently halted.',
      date: 'March 2024'
    }
  ];

  return (
    <>
      <Script id="review-schema-rbl" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <div className="bg-white border-b border-gray-200">
        <div className="w-full mx-auto px-4 py-4 lg:px-8">
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
                    Stop RBL Bank Home Visit
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-full mx-auto px-4 py-8 lg:py-12">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Left Column: Table of Contents */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <p className="font-bold text-gray-900 mb-6 text-lg border-b pb-3">Guide Chapters</p>
                <nav className="space-y-3 text-sm">
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
          <div className="lg:col-span-6 w-full">
            <article className="prose prose-blue max-w-none bg-white p-6 sm:p-8 md:p-14 rounded-[30px] shadow-sm border border-gray-100">

                            <h2 id="introduction" className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 scroll-mt-28 leading-tight">Mastering Your Defense Against RBL Bank Collection Process</h2>
              <div className="text-gray-700 leading-relaxed text-lg mb-8 space-y-6">
                <p>
                  Dealing with unpaid loan dues causes huge mental stress. This trouble grows worse when recovery agents visit your home. Many people believe they have no rights after missing a loan EMI. That is not true. Even if you owe money, bank agents must treat you with respect.
                </p>
                <p>
                  The Reserve Bank of India sets strict rules for debt recovery. Banks have a legal right to ask for their money back. However, they cannot break the law to get it. Private banks and recovery teams must respect your privacy, your dignity, and your safety. Abusing or threatening borrowers is a crime.
                </p>
                <p>
                  Many collection agents ignore these rules. They rely on fear to force quick payments from borrowers. Knowing your legal rights changes everything. You can stop unlawful visits and protect your home and family.
                </p>
              </div>

              <h2 id="rbi-fines-rbl-bank" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Past Infractions: RBI Penalties on RBL Bank</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Complaints about recovery agent visits are real and recognized. The Reserve Bank of India monitors how banks handle debt collection. In March 2023, the RBI fined RBL Bank for failing to control its recovery agents.
                </p>
                <p>
                  The RBI investigated consumer complaints and found clear rule breaches. The bank failed to stop its agents from using threats and abusive tactics. This penalty proves that borrower complaints about home visits are valid under Indian banking law.
                </p>
                <p>
                  This gives you strong leverage. When you file a formal complaint citing RBI rules, senior bank officers take it seriously. Banks fear fresh fines and loss of reputation. A well-drafted complaint often forces the bank to stop agent visits and agree to fair talks.
                </p>
              </div>

              <h2 id="consent-and-timing" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Strict Adherence to Consent and Doorstep Timing</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  RBI rules require banks to give notice before any home visit. Under the Fair Practices Code, an agent cannot show up at your house without prior notice. Lenders must check with you on a suitable time and place to meet.
                </p>
                <p>
                  The central bank also limits the hours for visits and calls. Recovery agents can only call or visit between 7:00 AM and 7:00 PM. Many state rules narrow this to 8:00 AM to 7:00 PM as the standard working window.
                </p>
                <p>
                  If an agent shows up early in the morning or late at night, they violate RBI rules. Keep a note of the exact time and date. You have full legal right to turn away any agent who visits outside permitted hours.
                </p>
              </div>

              <h2 id="professional-conduct-mandates" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Absolute Mandates on Professional Conduct</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Debt collection must follow strict rules of conduct. RBI mandates that recovery staff must treat all borrowers with courtesy. Agents cannot use foul words, physical threats, or mental harassment to force payments.
                </p>
                <p>
                  Always demand proper identification before speaking to an agent. Agents must carry a valid bank ID card and an official authorization letter from the lender. If an agent cannot show these papers, they are an illegal trespasser.
                </p>
                <p>
                  You do not have to let agents inside your home. Talk to them at your door or through a security gate. Stay calm and speak firmly. Asking for their ID and visiting letter often stops aggressive behavior at once.
                </p>
              </div>

              <h2 id="protecting-your-privacy" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Protecting Your Utmost Privacy from Aggressive Disclosure</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Every borrower has a right to privacy. Some agents speak loudly in hallways or to security guards to shame borrowers. Their goal is to damage your reputation so you borrow money to pay them.
                </p>
                <p>
                  RBI rules strictly prohibit sharing loan details with third parties. Recovery agents cannot discuss your debt with neighbors, relatives, or guards. Shouting about your debt in public spaces is an illegal breach of privacy.
                </p>
                <p>
                  Tell the agent that sharing your debt details violates RBI rules and that you will report them. Remind them that disclosing financial matters to others removes their legal right to collect. Firm legal boundaries stop this harassment fast.
                </p>
              </div>

              <h2 id="preventing-workplace-visits" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Preventing Workplace Embarrassment and Career Sabotage</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  While home visits cause distress, workplace visits threaten your job. Agents sometimes target offices because they know fear of job loss makes people pay quickly.
                </p>
                <p>
                  Agents can only visit an office if you do not respond at your home address. Even then, they must stay professional. They cannot cause a scene or tell your boss or coworkers about your loan.
                </p>
                <p>
                  You can send a written notice to the bank stating that you do not permit office visits. If an agent causes trouble at your workplace, record the event. You can file a formal complaint and take legal action for defamation.
                </p>
              </div>

              <h2 id="lodging-grievances" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Systematic Strategies for Lodging Harassment Grievances</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  If an agent continues to harass you after warnings, take formal action. Start by using the bank's internal grievance redressal process before going to the regulator.
                </p>
                <p>
                  Write a detailed complaint to the Bank Grievance Redressal Officer. State the date, time, agent name, and exact words used. Ask the bank to stop all home visits and request a formal settlement plan.
                </p>
                <p>
                  If the bank fails to respond within thirty days, escalate your case to the RBI Ombudsman. The Ombudsman can penalize the bank, order corrective steps, and award compensation for your distress.
                </p>
              </div>

              <h2 id="police-intervention-fir" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Deploying Police Intervention and Registration of FIR</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Regulatory complaints handle process errors, but criminal acts need the police. Indian criminal law protects citizens from violent trespassers and abusive recovery agents.
                </p>
                <p>
                  If an agent uses force, enters your home without consent, blocks your way, or uses foul threats, call the police. These actions fall under Section 503 and Section 506 for criminal intimidation, and Section 441 for criminal trespass.
                </p>
                <p>
                  Call emergency services while the agent is outside your house. You can also visit your local police station to file a First Information Report (FIR). Letting the bank know about an active police report usually halts all visits at once.
                </p>
              </div>

              <h2 id="evidence-preservation" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Necessity of Complete Evidence Preservation</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Legal action needs solid proof. Many harassment complaints fail because borrowers panic and forget to gather evidence. Prepare your plan before any agent arrives.
                </p>
                <p>
                  Use your phone to record video as soon as an agent approaches your door. Record their refusal to show ID and note any shouting or abusive words. Keep a written log of dates, times, and names. You can also ask your building office for CCTV footage. Clear proof turns a complaint into a winning case.
                </p>
              </div>

              <h2 id="credsettle-intervention" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Achieving Dominance Through CredSettle Professional Defense</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Facing a large bank alone takes a heavy emotional toll. Getting expert help is the fastest way to stop unwanted home visits. The legal team at CredSettle knows how to handle aggressive debt recovery.
                </p>
                <p>
                  We send formal legal notices to the bank demanding an immediate halt to third-party home visits. All future talks redirect to our legal team, keeping your home safe. We handle the bank calls and negotiate a deep loan settlement tailored to your budget.
                </p>
              </div>

              {/* Review Snippets */}
              <h2 id="client-reviews-section" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Verified Client Outcomes</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {reviews.map((review, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg mr-4">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{review.name}</p>
                        <p className="text-xs text-gray-500">{review.location} * {review.date}</p>
                      </div>
                    </div>
                    <div className="flex text-yellow-400 mb-3 text-sm">
                      {[...Array(review.rating)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed italic">"{review.text}"</p>
                  </div>
                ))}
              </div>

              {/* FAQs */}
              <h2 id="faqs" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Frequently Asked Questions</h2>
              <div className="space-y-6 mb-12">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-xl text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>

            </article>
          </div>

          {/* Right Column: CTA & Related Pages */}
          <div className="lg:col-span-3 w-full">
            <div className="sticky top-24 space-y-8">

              <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="bg-red-500 text-[10px] font-bold px-2 py-1 rounded w-fit mb-4 animate-pulse">Urgent Support Available</div>
                  <h4 className="font-bold text-2xl mb-4 leading-tight">Demand Immediate Relief</h4>
                  <p className="text-blue-100 mb-8 text-sm leading-relaxed">Let CredSettle legal professionals handle aggressive RBL Bank agents. Secure your home from unannounced recovery agent visits permanently.</p>
                  <Link
                    href="/contact"
                    className="block w-full bg-white text-blue-800 font-bold py-4 rounded-xl text-center hover:bg-blue-50 transition-all shadow-lg active:scale-95"
                  >
                    Halt the Harassment
                  </Link>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <p className="font-bold text-gray-900 mb-6 text-lg border-b pb-3">Essential Resources</p>
                <ul className="space-y-5">
                  <li>
                    <Link href="/how-to-stop-recovery-agent-harassment" className="group flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 group-hover:scale-150 transition-all"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm font-medium">Handle Aggressive Behavior</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-stop-recovery-agent-home-visit" className="group flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 group-hover:scale-150 transition-all"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm font-medium">General Visit Protection guides</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/bajaj-finance-recovery-agent-harassment-home-visit" className="group flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 group-hover:scale-150 transition-all"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm font-medium">Bajaj Finance Protection</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/does-loan-settlement-affect-cibil" className="group flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 group-hover:scale-150 transition-all"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm font-medium">CIBIL Settlement Repercussions</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center">
                <div className="text-blue-600 text-2xl font-black mb-1">4.8/5</div>
                <div className="flex justify-center text-yellow-400 mb-2">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Client Authenticated</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}
