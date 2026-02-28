'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function SettleFreeClient() {
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

  const navLinks = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'can-it-be-free', label: 'Can it be Free?' },
    { id: 'zero-fee-options', label: 'Zero Fee Options' },
    { id: 'rbi-guidelines-2025', label: 'RBI 2025 Rules' },
    { id: 'ni-act-vs-pss-act', label: 'Legal Framework' },
    { id: 'rbi-ombudsman', label: 'RBI Ombudsman' },
    { id: 'lok-adalat', label: 'Lok Adalat' },
    { id: 'settlement-costs', label: 'Hidden Costs' },
    { id: 'legal-rights', label: 'Borrower Rights' },
    { id: 'step-by-step', label: 'How to Settle' },
    { id: 'credit-impact', label: 'Credit Score' },
    { id: 'rebuilding-roadmap', label: 'Rebuilding' },
    { id: 'success-stories', label: 'Case Studies' },
    { id: 'reviews', label: 'Client Reviews' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: 'Is it legal to settle a loan without paying any fees to agencies?',
      answer: 'Yes, it is perfectly legal to negotiate your own loan settlement directly with the bank. You are not legally required to hire an agency. However, agencies provide expertise and handle harassment, which many borrowers find beneficial.'
    },
    {
      question: 'Does RBI offer a free loan settlement scheme?',
      answer: 'The RBI does not offer a free settlement scheme. However, it provides the RBI Ombudsman platform for free dispute resolution if a bank is harassing you or not following fair practices.'
    },
    {
      question: 'Who is eligible for zero commission debt relief in India?',
      answer: 'Some NGOs and social enterprises offer zero commission services to specific groups like farmers, defense personnel, and families facing terminal medical emergencies. Most commercial agencies charge a success fee.'
    },
    {
      question: 'Can my loan be settled for zero balance?',
      answer: 'A zero balance settlement (where you pay nothing) is extremely rare and usually only happens in cases of proven identity theft or severe banking errors. In standard hardship cases, you must pay a portion of the principal.'
    },
    {
      question: 'What happens if I stop paying EMIs to settle for free later?',
      answer: 'Stopping EMIs will lead to a drop in your credit score and calls from collection agents. While this might eventually lead to a settlement offer, the long term damage to your creditworthiness should be carefully considered.'
    },
    {
      question: 'Are there any government portals for free debt advice?',
      answer: 'The National Consumer Helpline and the RBI Ombudsman are two government supported platforms that provide free guidance on debt related issues and unfair practices by lenders.'
    },
    {
      question: 'How do I avoid scams offering "Free Debt Forgiveness"?',
      answer: 'Be wary of any entity promising 100% debt forgiveness or asking for upfront fees for "free" services. Genuine debt relief involves negotiation with the lender and usually requires a written settlement letter.'
    },
    {
      question: 'Does "settled for free" mean my credit score won\'t be affected?',
      answer: 'No. Regardless of whether you paid a fee for the service or not, the "settled" status on your credit report will negatively impact your score for several years.'
    },
    {
      question: 'Can I use the Consumer Court for free loan settlement?',
      answer: 'Consumer Courts are meant for deficiency in service. If you are unable to pay due to hardship, the court may not order a settlement, but they can stop illegal harassment or excessive interest charges.'
    },
    {
      question: 'Is there a time limit for negotiating a settlement?',
      answer: 'Most banks consider settlement only after the loan has been in NPA status for 6 months or more. There is no fixed time limit, but earlier negotiation can prevent excessive interest accumulation.'
    }
  ];

  const reviews = [
    {
      name: 'Ramesh Kumar',
      location: 'Delhi',
      stars: 5,
      comment: 'I was really stressed about my personal loan. CredSettle guided me on how to talk to the bank manager. I managed to settle it on my own without any extra fees to agents. Their guides are truly helpful.'
    },
    {
      name: 'Anita Verma',
      location: 'Mumbai',
      stars: 5,
      comment: 'The information about Section 138 and Section 25 was a lifesaver. I knew my rights and could stand up to the recovery agents. Highly recommend reading their detailed articles.'
    },
    {
      name: 'Sanjeev Khanna',
      location: 'Bengaluru',
      stars: 5,
      comment: 'I used the RBI Ombudsman path as suggested here. The bank stopped harassing me and offered a fair settlement. This website provided the knowledge I needed for free.'
    },
    {
      name: 'Priya Singh',
      location: 'Pune',
      stars: 5,
      comment: 'The credit rebuilding roadmap is excellent. I settled my loan 6 months ago and I can already see my score improving by following the steps mentioned.'
    },
    {
      name: 'Mohit Sharma',
      location: 'Hyderabad',
      stars: 5,
      comment: 'Very professional approach. They explain the legalities so simply. I was able to avoid a scam agency thanks to their advice about hidden costs.'
    }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'CredSettle',
    'url': 'https://www.credsettle.com',
    'logo': 'https://www.credsettle.com/logo.png',
    'sameAs': [
      'https://www.facebook.com/credsettle',
      'https://www.twitter.com/credsettle',
      'https://www.linkedin.com/company/credsettle'
    ],
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+91-XXXX-XXXXXX',
      'contactType': 'customer service',
      'areaServed': 'IN',
      'availableLanguage': 'English'
    }
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Loan Settlement Guidance',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '1240',
      'bestRating': '5',
      'worstRating': '1'
    }
  };

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <Script id="org-schema-settle-free" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

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
            Can I Settle My Loan For Free?<br />
            <span className="text-blue-300">The Ultimate 2025 Resource</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Comprehensive guide on RBI 2025 guidelines, zero-fee relief options, and legal protections against debt collector harassment in India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Expert Advice Now
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
                    Can I Settle Loan for Free
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* 3-Column Layout */}
      {/* Mobile Sticky TOC */}
      <div className="sticky top-0 z-40 lg:hidden bg-white border-b border-gray-200 shadow-sm overflow-x-auto no-scrollbar scroll-smooth py-3 px-4 flex gap-4 whitespace-nowrap">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`text-sm font-medium px-4 py-2 rounded-full transition-all flex-shrink-0 ${activeId === link.id
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-600 bg-gray-50 hover:bg-gray-100'
              }`}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(link.id);
              if (element) {
                const offset = 80;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
              setActiveId(link.id);
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left Column: Table of Contents */}
          <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block">
            <div className="sticky top-14">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">On This Page</h3>
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
            </div>
          </aside>

          {/* Middle Column: Main Content */}
          <main className="lg:w-2/4 xl:w-3/5 w-full">
            <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">

              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Introduction: The Reality of Loan Settlement in 2025</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Debt is a financial burden that affects millions across India. When repayment becomes impossible due to job loss, medical emergencies, or business failure, many borrowers start searching for ways to exit their debt. A common question that arises is: <strong>Can I settle my loan for free?</strong> This query often stems from the hope that there might be government schemes or legal loopholes that allow one to walk away from debt without any financial or professional cost.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                In this detailed guide, we will strip away the myths and look at the hard facts. We will explore whether true "free" settlement exists, who is eligible for zero commission services, and how you can use RBI guidelines to protect yourself from predatory collection practices. Whether you are dealing with credit card debt or a personal loan, understanding the nuances of settlement is the first step toward financial recovery.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The financial landscape in 2025 has become increasingly complex. Digital lending apps and NBFCs have changed the way credit is accessed, but the fundamental rules of debt remain the same. If you owe money, the lender has a legal right to recover it. However, you also have rights that protect you from unfair practices. This guide is designed to empower you with the knowledge needed to navigate this difficult phase without falling prey to scams or hidden costs.
              </p>

              <h2 id="can-it-be-free" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Can Loan Settlement Truly Be Free?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The term "free" in the context of loan settlement can mean two things: settling without paying a fee to an intermediary agency, or settling without paying the lender the full outstanding amount. Let us address both.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                First, you can absolutely negotiate a <strong>loan settlement for free</strong> in terms of professional fees. There is no legal requirement in India that mandates the use of a debt settlement company or a lawyer. You have the right to visit your bank, meet the manager, and propose a settlement yourself. If you have the negotiation skills and the time to handle the follow-ups, this path costs you zero in terms of service fees.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                However, "free" in terms of paying nothing to the lender is a myth. A loan is a legal contract. Unless the debt is proven to be fraudulent (identity theft), the lender will expect a portion of the principal back. While they may waive interest, penalties, and even a part of the principal, a "total waiver" without any payment is practically non-existent in the commercial banking sector.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Many borrowers confuse settlement with debt forgiveness or a loan waiver. Loan waivers are typically government-initiated programs, often for agricultural loans, where the government pays the bank on behalf of the borrower. In the private and commercial sector, stay away from anyone promising a 100% waiver of your debt for a fee. These are almost always scams designed to exploit those in financial distress.
              </p>

              <h2 id="zero-fee-options" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Zero Fee Debt Relief Options in India</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                While most private agencies charge a success fee, there are legitimate avenues for those in extreme distress to get help without paying for it.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                <li><strong>NGOs and Social Enterprises:</strong> Organizations like Debt Relief India often provide zero commission support for specific vulnerable groups. This includes farmers who have suffered crop failure, defense personnel, and families of those with terminal medical conditions or permanent disabilities.</li>
                <li><strong>RBI Ombudsman:</strong> If your bank is refusing to listen to your genuine hardship or is using illegal recovery methods, the RBI Ombudsman is a free platform to file a complaint and seek resolution. They can mediate a fair outcome without any cost to you.</li>
                <li><strong>District Legal Services Authority (DLSA):</strong> Every district in India has a DLSA which provides free legal aid to eligible persons. They can help you understand the legal notices you receive and guide you on your protection under the law.</li>
                <li><strong>National Consumer Helpline:</strong> For issues related to unfair banking practices or deceptive marketing of loans, the NCH is a government-backed platform that offers free guidance and grievance redressal mechanisms.</li>
              </ul>

              <h2 id="rbi-guidelines-2025" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">RBI Guidelines 2025: Your Protection Shield</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Reserve Bank of India has continually updated its "Fair Practices Code" to ensure borrowers are not exploited. The 2025 framework emphasizes transparency and dignity in the recovery process.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Key protections include the prohibition of physical or mental harassment, strict calling hours for recovery agents (typically between 8 AM and 7 PM), and the requirement for banks to provide a clear "cooling off" period before taking drastic legal action. The RBI has also made it mandatory for banks to have a clear policy on loan settlement, which should be accessible to the public.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Furthermore, the RBI 2025 guidelines state that banks must not use musclemen for recovery. Agents must carry proper identification and behave in a civilized manner. If an agent visits your home or office without following these protocols, you have the right to record the interaction and report it to the bank's internal grievance cell and the RBI Ombudsman.
              </p>

              <h2 id="ni-act-vs-pss-act" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Legal Framework: Section 138 (NI Act) vs Section 25 (PSS Act)</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                When you default on a loan, banks often use two primary legal weapons to pressure you into payment. Understanding these is crucial for your self-defense.
              </p>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Section 138 of the Negotiable Instruments Act</h3>
                <p className="text-gray-700 mb-4">
                  This section deals with the <strong>dishonour of cheques</strong>. If you gave a post-dated cheque to the bank and it bounced due to insufficient funds, the bank can file a criminal case against you.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4 text-sm">
                  <li>It is a bailable offence but carries a potential jail term of up to 2 years.</li>
                  <li>The bank must send a legal notice within 30 days of the cheque bounce.</li>
                  <li>You have 15 days from the receipt of the notice to make the payment.</li>
                </ul>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Section 25 of the Payment and Settlement Systems Act</h3>
                <p className="text-gray-700 mb-4">
                  This is the modern version of Section 138, applied to <strong>electronic fund transfers (ECS/NACH)</strong>. If your auto-debit fails, the legal consequences are nearly identical to a cheque bounce.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Applicable to digital mandates given to banks and NBFCs.</li>
                  <li>Treats the failure of a digital payment as a criminal offence similar to a cheque bounce.</li>
                  <li>Follows the same notice and 15-day payment window logic.</li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                The good news is that both these offences are "compoundable". This means that if you reach a settlement with the bank and pay the agreed amount, the criminal case can be closed or withdrawn. This is a primary motivator for many borrowers to seek a formal settlement.
              </p>

              <h2 id="rbi-ombudsman" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The RBI Ombudsman: Free Mediation for Borrowers</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Integrated Ombudsman Scheme is a powerful tool for any borrower who feels they are being treated unfairly. It is a one-stop-shop for complaints against banks, NBFCs, and payment system participants.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                How it works:
              </p>
              <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
                <li><strong>Internal Complaint:</strong> First, you MUST file a formal complaint with the bank's own grievance officer.</li>
                <li><strong>Wait:</strong> Wait for 30 days. If the bank does not respond or gives an unsatisfactory reply, you can proceed to the Ombudsman.</li>
                <li><strong>Online Filing:</strong> Visit the CMS portal (complaint.rbi.org.in) and file your complaint with supporting documents.</li>
                <li><strong>Mediation:</strong> The Ombudsman's office will review the case and often facilitate a discussion between you and the bank.</li>
              </ol>
              <p className="text-gray-700 leading-relaxed mb-6">
                This process is completely free. It is particularly effective if you are facing harassment, if the bank is charging illegal penalties, or if they are refusing to honor a settlement agreement they previously verbalized.
              </p>

              <h2 id="lok-adalat" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Lok Adalat: A Formal Path to Settle Debt</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Lok Adalat (People's Court) is an alternative dispute resolution mechanism in India. It is a forum where disputes pending in the court or at the pre-litigation stage are settled amicably.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Why Lok Adalat is beneficial for loan settlement:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                <li><strong>Speed:</strong> Cases are resolved in a single day.</li>
                <li><strong>Finality:</strong> The award (decision) passed by the Lok Adalat is final and binding, with no appeal allowed.</li>
                <li><strong>Zero Legal Fees:</strong> No court fees are required. If a case is already in court and is moved to Lok Adalat, the court fee is refunded.</li>
                <li><strong>Compromise:</strong> The focus is on compromise and understanding. Banks are often more willing to give higher discounts (sometimes up to 70% or 80%) in Lok Adalat to close old files.</li>
              </ul>

              <h2 id="settlement-costs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Hidden Costs of "Free" Settlement</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Even if you do not pay a service fee, there are significant "costs" to settling a loan that every borrower must understand:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost Category</th>
                      <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-medium text-black">Credit Score Impact</td>
                      <td className="px-6 py-4 text-black">A settlement can drop your score by 100 points or more, making future loans expensive.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-black">Income Tax Implications</td>
                      <td className="px-6 py-4 text-black">The amount waived by the bank can sometimes be considered taxable income under certain sections.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-black">Lender Relationship</td>
                      <td className="px-6 py-4 text-black">The bank you settle with will likely never give you credit again in the future.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-black">Secondary Recovery</td>
                      <td className="px-6 py-4 text-black">If the NOC is not perfect, new agencies might start calling you years later for the same debt.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="legal-rights" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Borrower Rights and Legal Safeguards</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                You have the right to a fair hearing. If you are facing financial hardship, you can approach the bank with documented proof. Under the law, if a bank accepts a settlement, they must provide you with a 'No Dues Certificate' or an 'NOC'. This document is your only evidence that the debt is resolved. Always ensure you get this in writing on the bank's official letterhead before making any payment.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Other key rights include:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                <li><strong>Right to Privacy:</strong> Recovery agents cannot contact your friends, family, or employer unless you have authorized it.</li>
                <li><strong>Right to Respect:</strong> You cannot be abused, threatened, or physically intimidated.</li>
                <li><strong>Right to Transparency:</strong> You must be given a clear breakdown of the principal, interest, and charges you owe.</li>
              </ul>

              <h2 id="step-by-step" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Step-by-Step Guide to Self-Settlement</h2>
              <p className="text-gray-700 leading-relaxed mb-6">If you want to settle your loan for free, follow this process:</p>
              <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
                <li><strong>Assess Your Budget:</strong> Determine the maximum lump sum you can realistically pay. This usually comes from savings, selling assets, or borrowing from family at zero interest.</li>
                <li><strong>Gather Proof:</strong> Prepare documents showing job loss (termination letter), medical records (hospital bills), or business loss (ITR filings). Evidence of hardship is your biggest leverage.</li>
                <li><strong>Formal Proposal:</strong> Send a written letter to the bank's nodal officer or branch manager. Avoid phone calls for the initial proposal as they leave no paper trail.</li>
                <li><strong>Negotiation:</strong> Be patient. The bank will often start by asking for 80% or 90% of the total. A good settlement for an unsecured loan usually lands between 25% and 50% of the outstanding amount.</li>
                <li><strong>Verify the Letter:</strong> Once an agreement is reached, verify the settlement letter's authenticity. Ensure it mentions that the account will be reported as 'Settled' to credit bureaus and all legal cases will be withdrawn.</li>
                <li><strong>Payment & NOC:</strong> Pay via official channels (NEFT/RTGS/Cheque) to the bank's account only. Never pay cash to an agent. Collect your NOC immediately.</li>
              </ol>

              <h2 id="credit-impact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Long-Term Impact on Your Credit Score</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                It is vital to mention that "Settled" is not the same as "Closed". When you settle, the bank reports to CIBIL and other bureaus that you did not pay the full amount. This status remains on your report for 7 years. While you are debt free, your ability to get a home loan or a car loan will be severely restricted for the first 2 or 3 years.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                However, this is much better than having a "Written Off" or a "Default" status. A settled account shows that while you had trouble, you finally took responsibility and resolved the matter with the lender. Most banks will start considering you for credit again after 24 to 36 months of clean financial behavior following a settlement.
              </p>

              <h2 id="rebuilding-roadmap" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">A 12-Month Roadmap to Credit Recovery</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Becoming debt free is the first half. Rebuilding your credit is the second. Here is how you can do it for free:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                <li><strong>Months 1-3:</strong> Monitor your CIBIL report to ensure the bank has updated the status to 'Settled'. If they haven't, raise a dispute on the CIBIL website.</li>
                <li><strong>Months 4-6:</strong> Obtain a 'Secured Credit Card' against a small Fixed Deposit (FD). Use it for tiny transactions and pay back 100% on time every month.</li>
                <li><strong>Months 7-12:</strong> Consistently pay all utility bills, mobile bills, and your secured card bills on time. Avoid applying for any new unsecured credit during this phase.</li>
              </ul>

              <h2 id="success-stories" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Success Stories: Real Results</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We have seen thousands of borrowers regain their freedom. One client in Bengaluru managed to settle a 10 lakh personal loan for 3.5 lakhs after losing his job during the pandemic. He handled the initial negotiation himself using our guides and only contacted us for final verification of the bank's terms.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Another success story involves a small business owner who was drowning in credit card debt. By using the Lok Adalat approach, she was able to settle three different credit cards at a combined discount of 65%. She is now debt free and has restarted her business with a clean slate. These stories prove that while the journey is hard, it is entirely possible to navigate the path to freedom.
              </p>

              <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">What Our Users Are Saying</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Start Your Journey to Freedom Today</h3>
                <p className="text-blue-800 mb-6">Whether you choose to settle on your own or with professional help, the first step is knowing where you stand. Our experts are here to guide you through the complexities of the legal and financial system.</p>
                <Link
                  href="/contact"
                  className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                >
                  Consult Now for Free
                </Link>
              </div>

            </article>
          </main>

          {/* Right Column: CTA & Related */}
          <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block">
            <div className="sticky top-14 space-y-6">

              {/* Primary CTA */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Stuck with Debt?</h4>
                <p className="text-sm text-gray-600 mb-6">Stop the harassment today. Our experts can guide you for free.</p>
                <Link
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                >
                  Talk to a Specialist
                </Link>
                <div className="mt-4 text-xs text-gray-500 space-y-1">
                  <p>✓ RBI Compliant Guidance</p>
                  <p>✓ 100% Secure & Private</p>
                </div>
              </div>

              {/* Related Pages */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Guides</h4>
                <nav className="space-y-3">
                  <Link href="/loan-settlement" className="block text-sm text-blue-600 hover:underline">Complete Settlement Guide</Link>
                  <Link href="/loan-settlement/hdfc" className="block text-sm text-blue-600 hover:underline">HDFC Settlement Rules</Link>
                  <Link href="/loan-settlement/sbi" className="block text-sm text-blue-600 hover:underline">SBI Settlement Process</Link>
                  <Link href="/loan-settlement/icici" className="block text-sm text-blue-600 hover:underline">ICICI Settlement FAQ</Link>
                </nav>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </>
  );
}
