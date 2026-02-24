'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function RBLHomeVisitClient() {
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
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
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
                <h3 className="font-bold text-gray-900 mb-6 text-lg border-b pb-3">Guide Chapters</h3>
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
                  Enduring intense pressure regarding outstanding loan obligations is inherently difficult. This severe burden multiplies exponentially when third party collection agents frequently initiate arbitrary visits to your personal residence. Borrowers facing an RBL Bank harassment home visit frequently believe they possess zero recourse simply due to a financial default. This fundamental misconception leaves countless individuals vulnerable to abusive intimidation tactics, severe public embarrassment, and lasting emotional trauma. Providing you with accurate legal knowledge is our paramount objective.
                </p>
                <p>
                  The Reserve Bank of India strictly regulates every banking entity in the country. The regulatory framework absolutely incorporates rigid restrictions on debt collection practices. While financial institutions definitively maintain the right to seek recovery of overdue balances, this right is never unconditional. Private sector banks and their third party agencies must conduct operations within strictly defined boundaries respecting borrower privacy, personal dignity, and legal safety protocols. Attempting to bypass these norms converts legitimate loan recovery into punishable criminal offenses.
                </p>
                <p>
                  Despite comprehensive formal policies requiring dignified recovery approaches, numerous documented instances indicate collection agents frequently disregard these essential protections. By capitalizing on a stark lack of regulatory understanding among the general public, agencies aggressively breach residential boundaries to coerce sudden settlements. Learning how to identify unauthorized agent behavior completely transforms your position from a terrified victim into an empowered citizen ready to dismantle every illegal attempt made against your household.
                </p>
              </div>

              <h2 id="rbi-fines-rbl-bank" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Past Infractions: RBI Penalties on RBL Bank</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The concept of an RBL Bank harassment home visit is not a speculative occurrence. Historical regulatory actions underscore how seriously the Reserve Bank of India addresses complaints regarding abusive collections. In March of 2023, the RBI imposed a significant monetary penalty on RBL Bank resulting specifically from its notable failure to rigorously supervise outsourced loan recovery agents.
                </p>
                <p>
                  Following thorough investigations into numerous consumer complaints, the regulatory authority discovered critical deficiencies in regulatory compliance. The RBI definitively concluded that the bank fundamentally failed to ensure its assigned recovery networks abstained from employing intimidation techniques or widespread harassment during their interactions with defaulting borrowers. This official censure unequivocally proves that borrower grievances regarding an RBL Bank harassment home visit are entirely valid and actionable under Indian banking law.
                </p>
                <p>
                  This precedent highlights an incredibly powerful advantage for any borrower. When you officially invoke RBI directives while filing a formal grievance concerning abusive practices, banking executives generally react with immense urgency. Financial institutions genuinely fear compounded regulatory fines and subsequent damage to their operational licenses. Threatening and documenting a formal complaint regarding a non compliant RBL Bank harassment home visit instantly pressures the lender to recall their outsourced agents and normalize the negotiation environment.
                </p>
              </div>

              <h2 id="consent-and-timing" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Strict Adherence to Consent and Doorstep Timing</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Regulating accessibility and physical contact represents the foremost protection against an RBL Bank harassment home visit. The official Fair Practices Code absolutely mandates that a recovery agent cannot suddenly appear at your doorstep without prior consent and explicit notification. Lenders must secure advance permission from the borrower regarding the precise location and timing of any intended collection meeting.
                </p>
                <p>
                  More importantly, the RBI rigidly restricts the actual hours during which an agency can legitimately contact you. An agent is strictly permitted to either place phone calls or conduct physical visits only between the hours of 7:00 AM and 7:00 PM. Additionally, certain state specific guidelines and consumer right interpretations often narrow this window further, widely accepting 8:00 AM to 7:00 PM as the absolute operational standard.
                </p>
                <p>
                  If an outsourced representative executes an RBL Bank harassment home visit at an unorthodox time, such as early morning before standard waking hours or late into the evening, they instantly violate essential banking norms. Documenting this specific time violation establishes an immaculate foundation for immediate legal escalation. You have complete authorization to refuse all communication initiated outside this strictly regulated twelve hour daily window.
                </p>
              </div>

              <h2 id="professional-conduct-mandates" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Absolute Mandates on Professional Conduct</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Collection operations require the maintenance of utmost decorum. The Reserve Bank of India mandates that all recovery personnel must treat borrowers with distinct respect and courtesy. They are systematically prohibited from leveraging abusive commentary, physical intimidation, psychological harassment, or any action designed to humiliate the individual. The use of muscle power or violent threats during an RBL Bank harassment home visit immediately invalidates the legality of the agent presence.
                </p>
                <p>
                  Verification protocols must always precede any substantial financial discussion. When confronted with an RBL Bank harassment home visit, you must firmly demand immediate verification. Agents are legally bound to carry a valid authorization letter issued explicitly by the lender alongside a valid identity card provided by their agency. If an individual fails to seamlessly produce these mandatory documents, you hold the definitive right to classify them as unauthorized trespassers. 
                </p>
                <p>
                  Maintaining complete situational control during these doorstep encounters involves interacting with the agent without inadvertently granting them entry into your primary residence. Stand securely behind a protected screen or gated boundary. Calmly inform them that while you recognize their intention to collect banking dues, you completely forbid their entry onto your property. Never raise your voice; simple, cold repetition regarding legal verification normally forces an aggressive agent into a defensive posture.
                </p>
              </div>

              <h2 id="protecting-your-privacy" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Protecting Your Utmost Privacy from Aggressive Disclosure</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Borrowers possess an inherent right to financial privacy. A prominent method employed during an RBL Bank harassment home visit involves deliberately loud conversations intended to alert nearby neighbors or apartment security guards regarding the existing defaulted balance. This tactic is maliciously designed to fracture your social reputation and embarrass you into securing rapid funding.
                </p>
                <p>
                  The regulatory guidelines categorically specify that all personal information and debt related details must remain completely confidential. Recovery agents are severely barred from discussing your outstanding liabilities with third parties. Therefore, if an agent initiates a confrontation within a common residential area or actively shouts information meant for your neighbors to consume, the agent is actively committing a sanctionable privacy breach.
                </p>
                <p>
                  Immediately counteract this behavior by clearly stating that you are fully aware of their illegal privacy violation and that you intend to heavily feature this infraction within your formal complaint. Reiterate that disclosing financial arrangements to unapproved third parties dissolves their operational authority. Unrelenting pressure applied correctly through legal boundaries rapidly disarms collection agencies relying on unwarranted public humiliation.
                </p>
              </div>

              <h2 id="preventing-workplace-visits" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Preventing Workplace Embarrassment and Career Sabotage</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  While facing an RBL Bank harassment home visit creates immense household distress, encountering identical tactics within a professional workplace threatens one career stability completely. Collection agencies purposefully target commercial locations believing that the sheer fear of job termination will provoke a panicked reaction and an immediate financial transaction.
                </p>
                <p>
                  Although agents are theoretically permitted to contact a borrower at their workplace if the borrower remains entirely unresponsive at their residence, the agents must rigidly adhere to professional etiquette. They absolutely cannot shout, create minor disturbances, or disclose your financial issues to your employer or administrative colleagues.
                </p>
                <p>
                  To secure your professional environment preemptively, consider providing a clear written instruction to the lending institution explicitly denying permission for workplace visits based on existing communication channels. If a severe RBL Bank harassment home visit occurs at your business location, document the entire disruption meticulously. Initiating a targeted compensation suit against the lender for professional defamation serves as an extremely effective, highly aggressive legal countermeasure.
                </p>
              </div>

              <h2 id="lodging-grievances" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Systematic Strategies for Lodging Harassment Grievances</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Whenever an uninvited individual persistently continues an RBL Bank harassment home visit despite your verbal warnings, an escalated systematic resolution process is necessary. Resolving these issues requires utilizing established banking redressal structures prior to pursuing external regulatory interventions. Initially, the borrower must formulate an intensely detailed complaint directed toward the official Grievance Redressal Officer appointed by the bank.
                </p>
                <p>
                  Your documentation must concisely state the unauthorized actions exactly. Outline the specific date, the unexpected timing, the agent name or identification details if known, and the explicit nature of the harassment involved. Emphasize that you demand the immediate cessation of all unsolicited physical visits while simultaneously requesting a structured debt settlement format. 
                </p>
                <p>
                  If the financial institution provides an unsatisfactory reply or completely ignores your communication within a mandatory thirty day window, the situation elevates instantly to the Reserve Bank of India Ombudsman. The Ombudsman holds the authoritative capacity to profoundly sanction the lending institution, mandate immense corrective actions, and award legitimate damages to a borrower suffering through a severely stressful RBL Bank harassment home visit.
                </p>
              </div>

              <h2 id="police-intervention-fir" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Deploying Police Intervention and Registration of FIR</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Regulatory complaints remain highly appropriate for procedural breaches, yet active criminal behavior demands an immediate response from law enforcement. The Indian Penal Code supplies robust provisions meant to protect citizens from aggressive trespassers and menacing individuals attempting an unlawful RBL Bank harassment home visit.
                </p>
                <p>
                  Should an agent use physical intimidation, attempt forced residential entry, block your movement entirely, or unleash aggressive profanity, their behavior technically graduates from mere regulatory violations to criminal acts. Section 503 and Section 506 relating to Criminal Intimidation alongside Section 441 relating to Criminal Trespass apply exactly in these high risk scenarios.
                </p>
                <p>
                  Do not hesitate to connect with regional emergency police services immediately while the agent is still localized near your property. Alternatively, proceed to your neighborhood police station directly afterwards to officially file a First Information Report. Informing the offending bank headquarters that their contracted agents are currently subjects of active police investigations almost universally triggers a total suspension of their local collection operation.
                </p>
              </div>

              <h2 id="evidence-preservation" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Necessity of Complete Evidence Preservation</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Pursuing legal pathways absolutely requires undeniable evidence. Complaints regarding an RBL Bank harassment home visit routinely face rejection simply because borrowers fail to capture necessary proof during intensely stressful moments. You must consciously prepare a defensive documentation strategy before an agent ever arrives.
                </p>
                <p>
                  Mobile video recordings are profoundly valuable. Start capturing the encounter the immediate moment an agent approaches your door. Visually capture their refusal to yield valid identification and actively record any instances of elevated voice usage. In situations lacking video, utilize detailed written logging mapping out exact visit timings and any threatening dialogue exchanged. Request security footage compiled from your community management office if building parameters cover your specific doorway. Solidly collected evidence transforms your legal position from a simple complaint into an indubitable case.
                </p>
              </div>

              <h2 id="credsettle-intervention" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Achieving Dominance Through CredSettle Professional Defense</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Fighting enormous financial bureaucracies single-handedly drains enormous emotional energy. Retaining specialized professional defense remains the definitive solution for neutralizing a destructive RBL Bank harassment home visit quickly and seamlessly. The specialized debt relief experts and legal advocacy teams associated with CredSettle are meticulously trained to entirely dismantle abusive collection ecosystems.
                </p>
                <p>
                  Upon securing our extensive consultation services, an overwhelming immediate shift occurs. We deploy an unyielding array of formal legal notices explicitly addressed to your lenders establishing an absolute cessation regarding all third party physical visits. By compelling the financial entities to redirect all interactions directly toward our hardened legal representatives, your residential perimeter becomes instantly secure. Our comprehensive representation completely manages the burdensome confrontation layers while simultaneously engineering an optimal, deeply discounted loan settlement architecture perfectly aligned with your immediate financial reality.
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
                        <h4 className="font-bold text-gray-900">{review.name}</h4>
                        <p className="text-xs text-gray-500">{review.location} • {review.date}</p>
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
                <h4 className="font-bold text-gray-900 mb-6 text-lg border-b pb-3">Essential Resources</h4>
                <ul className="space-y-5">
                  <li>
                    <Link href="/how-to-handle-recovery-agent-harrasement" className="group flex items-start">
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
                    <Link href="/bajaj-finance-recovery-agent-harrasement-home-visit" className="group flex items-start">
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
