'use client';

import { useEffect, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldHalved,
  faScaleBalanced,
  faHandshakeSimple,
  faFileLines,
  faBullhorn,
  faUserShield,
  faPhoneVolume,
  faEnvelopeOpenText,
  faBuildingColumns,
  faGavel,
  faHeadset,
  faListCheck,
  faTriangleExclamation,
  faCircleCheck,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TableOfContents from '@/components/TableOfContents';
import FAQWithSchema from '@/components/FAQWithSchema';
import Script from 'next/script';

export default function AntiHarassmentClient() {
  const [isFirefox, setIsFirefox] = useState(false);
  const [headings, setHeadings] = useState<Array<{ id: string; text: string; level: number }>>([]);

  useEffect(() => {
    // Detect Firefox browser
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));

    // Extract headings from the content
    const extractHeadings = () => {
      const headingElements = document.querySelectorAll('h2[id]');
      const extracted: Array<{ id: string; text: string; level: number }> = [];
      headingElements.forEach((el) => {
        const id = el.getAttribute('id');
        const text = el.textContent || '';
        if (id) {
          extracted.push({ id, text, level: 2 });
        }
      });
      setHeadings(extracted);
    };

    // Wait for content to be rendered
    setTimeout(extractHeadings, 100);
  }, []);

  const faqs = [
    {
      question: 'What is loan recovery agent harassment and is it legal?',
      answer: 'Loan recovery agent harassment refers to illegal and abusive practices used by recovery agents to collect debts, including threatening calls, abusive language, workplace visits, contacting family members, and using intimidation tactics. While debt recovery is legal, harassment tactics violate RBI guidelines and Indian laws. Recovery agents must follow strict RBI Fair Practices Code, which prohibits abusive language, threats, unauthorized visits, and privacy violations. CredSettle provides immediate legal protection against such harassment.'
    },
    {
      question: 'How can I stop loan recovery agent harassment immediately?',
      answer: 'You can stop loan recovery agent harassment immediately by engaging CredSettle\'s anti-harassment services. Our legal team sends cease-and-desist notices to lenders and recovery agencies within hours, files RBI complaints for violations, forwards all calls to our legal helpline, and ensures complete legal protection. Harassment typically stops within 24-48 hours of our intervention. We provide 24/7 protection and immediate legal action against any harassment tactics.'
    },
    {
      question: 'What are my legal rights against loan recovery agent harassment?',
      answer: 'You have extensive legal rights against loan recovery agent harassment under RBI guidelines and Indian laws. These include: right to privacy (agents cannot contact family/friends), right to dignity (no abusive language or threats), right to fair treatment (no unauthorized visits or intimidation), right to proper documentation (all communications must be documented), and right to file complaints (RBI, Banking Ombudsman, police). CredSettle ensures all your rights are protected and enforced.'
    },
    {
      question: 'Can recovery agents visit my home or workplace?',
      answer: 'Recovery agents can only visit your registered address during reasonable hours (9 AM to 6 PM) with prior notice, and only to discuss your loan. They cannot visit your workplace without permission, use threatening behavior, enter your home forcefully, or harass family members. Any unauthorized visits, workplace harassment, or threatening behavior violates RBI guidelines and can result in legal action. CredSettle provides immediate protection against such violations.'
    },
    {
      question: 'How do I file a complaint against loan recovery agent harassment?',
      answer: 'You can file complaints against loan recovery agent harassment through multiple channels: RBI Banking Ombudsman for banking violations, RBI Consumer Education and Protection Department for regulatory violations, local police for criminal harassment, Cyber Crime Cell for digital harassment, and National Consumer Helpline. CredSettle handles all complaint filing on your behalf, ensuring proper documentation and follow-up for maximum protection.'
    }
  ];

  const bodyTextStyle: CSSProperties = {
    color: 'rgba(12, 39, 86, 0.80)',
    fontFamily: 'Poppins',
    lineHeight: '26px'
  };

  const cardTextStyle: CSSProperties = {
    color: 'rgba(12, 39, 86, 0.75)',
    fontFamily: 'Poppins',
    lineHeight: '24px'
  };

  type GuideSection = {
    id: string;
    title: string;
    paragraphs?: ReactNode[];
    bullets?: string[];
    bulletTitle?: string;
    cards?: Array<{ icon: IconDefinition; title: string; description: ReactNode }>;
    lists?: Array<{ title: string; icon: IconDefinition; items: string[] }>;
    callouts?: Array<{ title: string; description: ReactNode; icon: IconDefinition }>;
    steps?: Array<{ label: string; title: string; description: ReactNode }>;
  };

  const introductionParagraphs: ReactNode[] = [
    <>
      <strong>Loan recovery agent harassment</strong> has become a serious problem for millions of borrowers in India, with recovery agents using illegal tactics including threatening calls, abusive language, unauthorized visits, and privacy violations. Understanding your <strong>legal rights against harassment</strong> and accessing professional <strong>anti-harassment services</strong> is essential for protecting yourself and your family. This comprehensive guide covers everything you need to know about <strong>stopping loan recovery agent harassment</strong>, <strong>RBI guidelines</strong>, <strong>anti-harassment protection</strong>, and how CredSettle provides immediate legal protection.
    </>,
    <>
      Under <strong>RBI guidelines</strong> and Indian laws, recovery agents must follow strict <strong>Fair Practices Code</strong> that prohibits harassment, threats, and illegal collection tactics. <strong>Loan recovery agent harassment</strong> violates these guidelines and can result in severe penalties for lenders and recovery agencies. This guide covers <strong>anti-harassment services</strong>, <strong>legal protection against harassment</strong>, <strong>RBI complaint filing</strong>, and proven strategies to stop harassment immediately.
    </>
  ];

  const harassmentForms: string[] = [
    'Threatening calls at odd hours with abusive language and intimidation tactics.',
    'Unauthorized visits to your home or workplace without permission or proper notice.',
    'Contacting your family members, friends, or colleagues about your debt.',
    'Using intimidation, false claims, or public shaming to pressure repayment.',
    'Sharing your personal information publicly or violating your privacy in any way.'
  ];

  const legalRightsCards = [
    {
      icon: faUserShield,
      title: 'Right to Privacy',
      description: (
        <>
          Recovery agents cannot contact your family members, friends, colleagues, or neighbors about your debt. They can only contact you directly, and only at reasonable hours. Any contact with third parties violates your privacy rights and <strong>RBI guidelines</strong>. Professional anti-harassment services help enforce this right.
        </>
      )
    },
    {
      icon: faScaleBalanced,
      title: 'Right to Dignity',
      description: (
        <>
          Recovery agents must treat you with respect and dignity. They cannot use abusive language, threats, intimidation, or any form of harassment. All communications must remain professional. Violations of your right to dignity can result in severe penalties for lenders and recovery agencies.
        </>
      )
    },
    {
      icon: faHandshakeSimple,
      title: 'Right to Fair Treatment',
      description: (
        <>
          <strong>RBI Fair Practices Code</strong> requires recovery agents to contact you only during reasonable hours (9 AM to 6 PM), provide proper identification, avoid unauthorized visits, and never use threatening behavior. Any violation of these rights can be reported to regulators, police, or consumer authorities.
        </>
      )
    },
    {
      icon: faFileLines,
      title: 'Right to Proper Documentation',
      description: (
        <>
          You have the right to proper documentation for every interaction. Recovery agents must maintain accurate records and provide written communication when requested. This documentation protects you and creates evidence for complaints, legal action, and RBI investigations.
        </>
      )
    },
    {
      icon: faBullhorn,
      title: 'Right to File Complaints',
      description: (
        <>
          You can file complaints against <strong>loan recovery agent harassment</strong> with RBI Banking Ombudsman, RBI Consumer Education Department, local police, Cyber Crime Cell, and National Consumer Helpline. CredSettle handles complaint drafting, submission, and follow-up on your behalf.
        </>
      )
    }
  ];

  const rbiLists = [
    {
      title: 'What Recovery Agents CAN Do',
      icon: faCircleCheck,
      items: [
        'Contact you during reasonable hours (9 AM to 6 PM) to discuss repayment options professionally.',
        'Visit your registered address with prior notice, proper identification, and documented authorization.',
        'Provide accurate information about your loan status, repayment calculations, and settlement options.',
        'Maintain respectful communication while following RBI-approved processes and documentation.'
      ]
    },
    {
      title: 'What Recovery Agents CANNOT Do',
      icon: faTriangleExclamation,
      items: [
        'Use abusive language, repeated calls, or harassment to coerce repayment.',
        'Visit your workplace or residence without permission, prior notice, or proper authorization.',
        'Contact your family members, friends, or colleagues to disclose or discuss your debt.',
        'Make false claims, intimidate you with threats of arrest, or violate your privacy in any way.'
      ]
    }
  ];

  const rbiCallouts = [
    {
      title: 'RBI Fair Practices Code',
      icon: faListCheck,
      description: (
        <>
          The <strong>RBI Fair Practices Code</strong> mandates respectful treatment, transparent communication, proper identification, and strict privacy standards. Lenders must ensure compliance, monitor recovery agents, and respond promptly to borrower complaints.
        </>
      )
    },
    {
      title: 'Consequences of Violations',
      icon: faGavel,
      description: (
        <>
          Violating <strong>RBI guidelines</strong> can lead to penalties, license suspension, criminal complaints, and civil litigation. Documenting harassment strengthens your case, and CredSettle ensures every violation is escalated to regulators and law enforcement.
        </>
      )
    }
  ];

  const antiHarassmentServicesCards = [
    {
      icon: faPhoneVolume,
      title: 'Call Forwarding Services',
      description: (
        <>
          Divert all recovery calls directly to CredSettle’s legal helpline. Our team handles every conversation, ends abusive calls, and documents violations while you regain peace of mind.
        </>
      )
    },
    {
      icon: faEnvelopeOpenText,
      title: 'Cease-and-Desist Notices',
      description: (
        <>
          We issue formal legal notices to lenders and recovery agencies demanding an immediate halt to harassment, citing specific <strong>RBI guideline</strong> breaches and legal consequences for non-compliance.
        </>
      )
    },
    {
      icon: faBuildingColumns,
      title: 'RBI Complaint Filing',
      description: (
        <>
          CredSettle prepares and files detailed complaints with RBI Banking Ombudsman and Consumer Education Department, ensuring every harassment incident is recorded and penalized.
        </>
      )
    },
    {
      icon: faGavel,
      title: 'Police Complaint Support',
      description: (
        <>
          For severe threats or intimidation, our legal team files police and cyber-crime complaints, ensuring immediate action against offending recovery agents and complete protection for you.
        </>
      )
    },
    {
      icon: faHeadset,
      title: '24/7 Legal Protection',
      description: (
        <>
          Receive round-the-clock legal support, rapid escalation, and continuous monitoring. We remain on call to intervene the moment harassment resumes.
        </>
      )
    }
  ];

  const stepsToStopHarassment = [
    {
      label: 'Step 1',
      title: 'Engage Anti-Harassment Services',
      description: (
        <>
          Activate professional protection immediately. CredSettle sends legal notices, files RBI complaints, sets up call forwarding, and establishes a legal shield within hours.
        </>
      )
    },
    {
      label: 'Step 2',
      title: 'Document Every Incident',
      description: (
        <>
          Record calls (with consent), save messages, note visit details, and gather witness statements. Comprehensive documentation strengthens complaints and legal action.
        </>
      )
    },
    {
      label: 'Step 3',
      title: 'File Regulatory Complaints',
      description: (
        <>
          Submit formal complaints to RBI, police, and consumer authorities. CredSettle drafts, files, and follows up on each submission to ensure swift enforcement.
        </>
      )
    },
    {
      label: 'Step 4',
      title: 'Implement Call Forwarding',
      description: (
        <>
          Route every recovery call to our legal helpline. We document harassment attempts, respond professionally, and prevent agents from contacting you directly.
        </>
      )
    },
    {
      label: 'Step 5',
      title: 'Monitor and Escalate',
      description: (
        <>
          Continue monitoring. If harassment persists, we escalate through additional RBI complaints, police action, and litigation to secure a complete, permanent ceasefire.
        </>
      )
    }
  ];

  const harassmentTactics = [
    {
      icon: faPhoneVolume,
      title: 'Threatening Calls',
      description: (
        <>
          Recovery agents may call repeatedly at odd hours using abusive language. CredSettle routes calls to our helpline, documents threats, and files immediate complaints for every violation.
        </>
      )
    },
    {
      icon: faLocationDot,
      title: 'Unauthorized Visits',
      description: (
        <>
          Agents may arrive unannounced at your home or workplace. We issue cease-and-desist notices, alert local authorities, and ensure any unlawful visits trigger police action.
        </>
      )
    },
    {
      icon: faUserShield,
      title: 'Contacting Family Members',
      description: (
        <>
          Sharing debt details with family or colleagues is illegal. We prohibit third-party contact, file privacy complaints, and secure written acknowledgements from lenders.
        </>
      )
    },
    {
      icon: faBullhorn,
      title: 'Intimidation and False Claims',
      description: (
        <>
          Agents often threaten arrest or public exposure. CredSettle counters every false claim with legal notices, regulatory complaints, and, when needed, defamation action.
        </>
      )
    },
    {
      icon: faEnvelopeOpenText,
      title: 'Digital Harassment',
      description: (
        <>
          Threatening texts, social media harassment, and data privacy violations are prosecutable offences. We coordinate cyber-crime complaints and ensure digital evidence is preserved.
        </>
      )
    }
  ];

  const complaintOptions = [
    {
      icon: faBuildingColumns,
      title: 'RBI Banking Ombudsman',
      description: (
        <>
          File complaints for harassment, privacy violations, and unfair recovery practices. RBI investigations can impose penalties, compensation, and strict directives on lenders.
        </>
      )
    },
    {
      icon: faBuildingColumns,
      title: 'RBI Consumer Education Department',
      description: (
        <>
          Report systemic or repeated violations. CredSettle supplies detailed evidence packages to trigger regulator audits, fines, and binding corrective orders.
        </>
      )
    },
    {
      icon: faGavel,
      title: 'Police & Cyber Crime Complaints',
      description: (
        <>
          For threats, intimidation, or digital abuse, our legal team files FIRs and cyber-crime reports, ensuring immediate police intervention and legal protection.
        </>
      )
    },
    {
      icon: faBullhorn,
      title: 'National Consumer Helpline',
      description: (
        <>
          Access government-backed mediation and complaint escalation. We coordinate submissions to secure swift relief and regulatory follow-up.
        </>
      )
    },
    {
      icon: faFileLines,
      title: 'Documented Legal Notices',
      description: (
        <>
          Every complaint is backed by detailed legal notices and evidence logs, creating a strong paper trail that compels lenders to stop harassment permanently.
        </>
      )
    }
  ];

  const benefitsCards = [
    {
      icon: faShieldHalved,
      title: 'Immediate Protection',
      description: (
        <>
          Cease harassment within 24–48 hours through rapid legal intervention, formal notices, and regulator-backed enforcement.
        </>
      )
    },
    {
      icon: faScaleBalanced,
      title: 'Expert Legal Strategy',
      description: (
        <>
          Leverage specialists in <strong>RBI guidelines</strong>, complaint drafting, and litigation strategy to safeguard every legal right you hold.
        </>
      )
    },
    {
      icon: faHeadset,
      title: 'Complete Coverage',
      description: (
        <>
          Protect against calls, visits, digital harassment, and privacy violations with a single integrated legal response team.
        </>
      )
    },
    {
      icon: faCircleCheck,
      title: 'Verified Closure',
      description: (
        <>
          Ensure every harassment incident is documented, escalated, and resolved with written acknowledgements from lenders and agencies.
        </>
      )
    },
    {
      icon: faGavel,
      title: 'Peace of Mind',
      description: (
        <>
          Rely on 24/7 legal monitoring, fast escalations, and long-term compliance checks that keep you protected even after harassment stops.
        </>
      )
    }
  ];

  const conclusionParagraphs: ReactNode[] = [
    <>
      <strong>Loan recovery agent harassment</strong> is illegal and violates your rights under <strong>RBI guidelines</strong> and Indian laws. Understanding your <strong>legal rights against harassment</strong> and accessing professional <strong>anti-harassment services</strong> is essential for protecting yourself and your family.
    </>,
    <>
      CredSettle provides comprehensive <strong>anti-harassment services</strong> that stop harassment immediately, protect your rights, and ensure complete legal protection. Our services include call forwarding, cease-and-desist notices, RBI complaint filing, police complaint filing, and 24/7 legal protection.
    </>,
    <>
      Remember, you do not have to face <strong>harassment</strong> alone. Professional <strong>anti-harassment services</strong> provide immediate protection and ongoing support, ensuring harassment stops completely and permanently. By working with CredSettle, you can stop harassment, protect your rights, and achieve peace of mind.
    </>,
    <>
      If you are facing <strong>loan recovery agent harassment</strong>, reach out to CredSettle immediately. Our expert legal team will assess your situation, provide immediate protection, and ensure harassment stops within 24–48 hours. Do not suffer in silence—get the protection you deserve today.
    </>
  ];

  const guideSections: GuideSection[] = [
    {
      id: 'understanding-harassment',
      title: 'Understanding Loan Recovery Agent Harassment: What You Need to Know',
      paragraphs: [
        <>
          <strong>Loan recovery agent harassment</strong> refers to illegal and abusive practices used by recovery agents to collect debts. These practices violate <strong>RBI guidelines</strong> and Indian laws, including the use of threatening language, abusive calls, unauthorized visits, workplace harassment, contacting family members, and intimidation tactics. Understanding what constitutes harassment is the first step in protecting yourself.
        </>,
        <>
          The <strong>Reserve Bank of India (RBI)</strong> has established comprehensive guidelines for debt recovery, including the <strong>Fair Practices Code</strong> that strictly prohibits harassment. These guidelines ensure debt recovery remains legal and ethical, protecting borrowers’ rights and dignity. <strong>Anti-harassment services</strong> help enforce these guidelines and deliver immediate protection.
        </>
      ],
      bullets: harassmentForms,
      bulletTitle: 'Common Harassment Behaviours to Watch For'
    },
    {
      id: 'legal-rights-against-harassment',
      title: 'Your Legal Rights Against Loan Recovery Agent Harassment',
      paragraphs: [
        <>
          You have extensive <strong>legal rights against harassment</strong> under <strong>RBI guidelines</strong> and Indian laws. Understanding and asserting these rights is crucial for staying protected and holding violators accountable.
        </>
      ],
      cards: legalRightsCards
    },
    {
      id: 'rbi-guidelines-debt-recovery',
      title: 'RBI Guidelines on Debt Recovery: What Recovery Agents Can and Cannot Do',
      paragraphs: [
        <>
          The <strong>Reserve Bank of India</strong> enforces strict guidelines that govern every interaction between recovery agents and borrowers. These guardrails prevent harassment, safeguard dignity, and ensure transparent communication.
        </>
      ],
      lists: rbiLists,
      callouts: rbiCallouts
    },
    {
      id: 'anti-harassment-services',
      title: 'Anti-Harassment Services: How to Stop Harassment Immediately',
      paragraphs: [
        <>
          Professional <strong>anti-harassment services</strong> provide immediate protection against <strong>loan recovery agent harassment</strong>. CredSettle deploys a multi-layered response that eliminates harassment while building a strong legal position.
        </>
      ],
      cards: antiHarassmentServicesCards
    },
    {
      id: 'stop-harassment-immediately',
      title: 'How to Stop Loan Recovery Agent Harassment Immediately',
      paragraphs: [
        <>
          If you are facing <strong>loan recovery agent harassment</strong>, follow a structured response to restore control quickly and permanently.
        </>
      ],
      steps: stepsToStopHarassment
    },
    {
      id: 'common-harassment-tactics',
      title: 'Common Harassment Tactics and How to Stop Them',
      paragraphs: [
        <>
          Recognizing common harassment tactics empowers you to respond faster and document evidence that regulators and law enforcement can act upon.
        </>
      ],
      cards: harassmentTactics
    },
    {
      id: 'filing-complaints',
      title: 'Filing Complaints Against Loan Recovery Agent Harassment',
      paragraphs: [
        <>
          Filing effective complaints is crucial for stopping harassment and compelling lenders to comply with <strong>RBI mandates</strong>. CredSettle manages every step, from drafting to follow-up.
        </>
      ],
      cards: complaintOptions
    },
    {
      id: 'benefits-anti-harassment',
      title: 'Benefits of Anti-Harassment Services: Why Choose Professional Protection',
      paragraphs: [
        <>
          Choosing professional protection unlocks strategic, legal, and emotional benefits that ad-hoc responses can not match.
        </>
      ],
      cards: benefitsCards
    },
    {
      id: 'conclusion',
      title: 'Conclusion: Your Path to Freedom from Loan Recovery Agent Harassment',
      paragraphs: conclusionParagraphs
    }
  ];

  return (
    <>
      {/* FAQ Schema Markup */}
      <Script
        id="faq-schema-anti-harassment"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
              }
            }))
          })
        }}
      />

      <div className="relative min-h-screen bg-white mt-6">
        {/* Background Circle Effect - Chrome/Safari */}
        {!isFirefox && (
          <div
            className="absolute top-0 left-0"
            style={{
              width: '757px',
              height: '757px',
              borderRadius: '757px',
              background: '#007AFF',
              filter: 'blur(400px)',
              WebkitFilter: 'blur(400px)',
              transform: 'translate(-50%, -50%)',
              zIndex: 0,
              opacity: 0.6,
              willChange: 'filter',
              backfaceVisibility: 'hidden'
            }}
          />
        )}

        {/* Firefox-specific blur effect */}
        {isFirefox && (
          <div
            className="absolute top-0 left-0"
            style={{
              width: '757px',
              height: '757px',
              borderRadius: '757px',
              background: 'radial-gradient(circle, rgba(0, 122, 255, 0.4) 0%, rgba(0, 122, 255, 0.2) 30%, rgba(0, 122, 255, 0.1) 60%, transparent 100%)',
              transform: 'translate(-50%, -50%)',
              zIndex: 0,
              opacity: 0.9
            }}
          />
        )}

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="relative z-10" style={{ paddingTop: '100px', paddingLeft: '16.2px', paddingRight: '16.2px' }}>
          <div className="w-full max-w-7xl mx-auto px-4">
            {/* Hero Section: Heading Left, Image Right */}
            <section className="w-full py-6 mb-8">
              <div className="flex items-center justify-between gap-8">
                {/* Left: Heading */}
                <div className="flex-1" style={{ maxWidth: '640px' }}>
                  <h1
                    style={{
                      color: '#0C2756',
                      fontFamily: 'Poppins',
                      fontSize: '45px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: '65px',
                      marginBottom: '20px'
                    }}
                  >
                    Stop Loan Recovery Agent Harassment: Complete Guide to Anti-Harassment Protection in India
                  </h1>
                  <p
                    style={{
                      color: 'rgba(12, 39, 86, 0.70)',
                      fontFamily: 'Poppins',
                      fontSize: '18px',
                      lineHeight: '28px'
                    }}
                  >
                    Expert legal protection against loan recovery agent harassment. Learn about your rights, RBI guidelines, anti-harassment services, and proven strategies to stop harassment immediately.
                  </p>
                </div>

                {/* Right: Anti-Harassment Image */}
                <div className="flex-1 flex items-center justify-center -mt-30 ml-30" style={{ minWidth: '0', position: 'relative' }}>
                  {/* Blurred edge layer: only show left/right edges using mask */}
                  <img
                    src="/anti_hero.png"
                    alt=""
                    aria-hidden
                    style={{
                      position: 'absolute',
                      width: '100%',
                      maxWidth: '520px',
                      height: 'auto',

                      transformOrigin: 'center',
                      filter: 'blur(6px)',
                      opacity: 0.9,
                      WebkitMaskImage:
                        'linear-gradient(to right, black 0%, black 10%, transparent 35%, transparent 65%, black 90%, black 100%)',
                      maskImage:
                        'linear-gradient(to right, black 0%, black 10%, transparent 35%, transparent 65%, black 90%, black 100%)'
                    }}
                  />
                  {/* Main image */}
                  <img
                    src="/anti_hero.png"
                    alt="Anti-Harassment Protection"
                    style={{
                      width: '100%',
                      maxWidth: '520px',
                      height: 'auto',

                      transformOrigin: 'center'
                    }}
                  />
                </div>
              </div>
            </section>

            {/* Table of Contents */}
            {headings.length > 0 && (
              <div className="mb-8">
                <TableOfContents headings={headings} />
              </div>
            )}

            {/* Main Content Section */}
            <section className="w-full py-6">
              <div className="w-full max-w-7xl mx-auto px-4">
                <div
                  className="bg-gradient-to-br from-blue-50/40 via-white to-blue-100/20 rounded-3xl p-6 md:p-8 lg:p-12"
                  style={{
                    boxShadow: '0 12px 48px rgba(0, 122, 255, 0.08)',
                    border: '1px solid rgba(0, 122, 255, 0.12)'
                  }}
                >
                  <div className="space-y-6 md:space-y-8">
                    <div>
                      <h2
                        className="text-2xl md:text-3xl lg:text-[32px] font-semibold leading-tight"
                        style={{ color: '#0C2756', fontFamily: 'Poppins', lineHeight: '42px' }}
                      >
                        Stop Loan Recovery Agent Harassment: Complete Legal Protection Guide
                      </h2>
                      <div className="mt-4 space-y-4">
                        {introductionParagraphs.map((paragraph, index) => (
                          <p key={index} className="text-sm md:text-base" style={bodyTextStyle}>
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-blue-100/70 bg-white/80 p-5 md:p-6 lg:p-7 shadow-[0px_10px_30px_rgba(0,122,255,0.08)]">
                      <div className="flex items-start gap-4">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-600">
                          <FontAwesomeIcon icon={faShieldHalved} className="h-5 w-5" />
                        </span>
                        <div>
                          <h3
                            className="text-lg md:text-xl font-semibold"
                            style={{ color: '#0C2756', fontFamily: 'Poppins', lineHeight: '28px' }}
                          >
                            Immediate Legal Shield from CredSettle
                          </h3>
                          <p className="mt-3 text-sm md:text-base" style={cardTextStyle}>
                            Engage CredSettle to stop harassment within 24–48 hours using RBI-compliant notices, regulator complaints, and 24/7 legal monitoring that keeps recovery agents away from you.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 md:mt-12 space-y-12 md:space-y-14">
                    {guideSections.map((section, index) => (
                      <article
                        key={section.id}
                        className="rounded-3xl border border-blue-100/60 bg-white/75 p-5 md:p-7 lg:p-8 shadow-[0px_12px_35px_rgba(0,122,255,0.05)] backdrop-blur-sm"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-base font-semibold text-blue-600">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <div className="flex-1">
                            <h2
                              id={section.id}
                              className="text-xl md:text-2xl font-semibold leading-tight"
                              style={{ color: '#0C2756', fontFamily: 'Poppins', lineHeight: '32px' }}
                            >
                              {section.title}
                            </h2>

                            {section.paragraphs && section.paragraphs.length > 0 && (
                              <div className="mt-4 space-y-4">
                                {section.paragraphs.map((paragraph, paragraphIndex) => (
                                  <p key={paragraphIndex} className="text-sm md:text-base" style={bodyTextStyle}>
                                    {paragraph}
                                  </p>
                                ))}
                              </div>
                            )}

                            {section.bullets && section.bullets.length > 0 && (
                              <div className="mt-6">
                                <div className="rounded-2xl border border-blue-100/70 bg-blue-50/40 p-5 md:p-6">
                                  <h3
                                    className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-4"
                                    style={{ fontFamily: 'Poppins', letterSpacing: '0.08em' }}
                                  >
                                    {section.bulletTitle ?? 'Key Points'}
                                  </h3>
                                  <ul className="space-y-3">
                                    {section.bullets.map((bullet, bulletIndex) => (
                                      <li key={bulletIndex} className="flex items-start gap-3">
                                        <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/15 text-blue-600">
                                          <FontAwesomeIcon icon={faTriangleExclamation} className="h-4 w-4" />
                                        </span>
                                        <span className="flex-1 text-sm md:text-base" style={bodyTextStyle}>
                                          {bullet}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            )}

                            {section.cards && section.cards.length > 0 && (
                              <div className="mt-6 grid gap-4 md:grid-cols-2 md:gap-6">
                                {section.cards.map((card) => (
                                  <div
                                    key={card.title}
                                    className="h-full rounded-2xl border border-blue-100/70 bg-white p-5 md:p-6 shadow-[0px_8px_25px_rgba(0,122,255,0.05)] transition-shadow duration-200 hover:shadow-[0px_12px_30px_rgba(0,122,255,0.12)]"
                                  >
                                    <div className="flex items-start gap-4">
                                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/12 text-blue-600">
                                        <FontAwesomeIcon icon={card.icon} className="h-5 w-5" />
                                      </span>
                                      <div>
                                        <h3
                                          className="text-base md:text-lg font-semibold"
                                          style={{ color: '#0C2756', fontFamily: 'Poppins', lineHeight: '26px' }}
                                        >
                                          {card.title}
                                        </h3>
                                        <p className="mt-2 text-sm md:text-base" style={cardTextStyle}>
                                          {card.description}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {section.lists && section.lists.length > 0 && (
                              <div className="mt-6 grid gap-4 md:grid-cols-2">
                                {section.lists.map((list) => (
                                  <div
                                    key={list.title}
                                    className="rounded-2xl border border-blue-100/70 bg-white p-5 md:p-6 shadow-[0px_8px_25px_rgba(0,122,255,0.05)]"
                                  >
                                    <div className="mb-4 flex items-start gap-3">
                                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/12 text-blue-600">
                                        <FontAwesomeIcon icon={list.icon} className="h-5 w-5" />
                                      </span>
                                      <h3
                                        className="text-base font-semibold"
                                        style={{ color: '#0C2756', fontFamily: 'Poppins', lineHeight: '24px' }}
                                      >
                                        {list.title}
                                      </h3>
                                    </div>
                                    <ul className="space-y-3">
                                      {list.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start gap-3">
                                          <span className="mt-[7px] h-2 w-2 rounded-full bg-blue-500/80" />
                                          <span className="flex-1 text-sm md:text-base" style={cardTextStyle}>
                                            {item}
                                          </span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            )}

                            {section.callouts && section.callouts.length > 0 && (
                              <div className="mt-6 grid gap-4 md:grid-cols-2">
                                {section.callouts.map((callout) => (
                                  <div
                                    key={callout.title}
                                    className="rounded-2xl border border-blue-100/80 bg-gradient-to-br from-blue-500/10 via-white to-blue-100/10 p-5 md:p-6"
                                  >
                                    <div className="flex items-start gap-3">
                                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                                        <FontAwesomeIcon icon={callout.icon} className="h-5 w-5" />
                                      </span>
                                      <div>
                                        <h3
                                          className="text-base font-semibold"
                                          style={{ color: '#0C2756', fontFamily: 'Poppins', lineHeight: '24px' }}
                                        >
                                          {callout.title}
                                        </h3>
                                        <p className="mt-2 text-sm md:text-base" style={cardTextStyle}>
                                          {callout.description}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {section.steps && section.steps.length > 0 && (
                              <div className="mt-6 space-y-4">
                                {section.steps.map((step) => (
                                  <div
                                    key={step.title}
                                    className="flex flex-col gap-3 rounded-2xl border border-blue-100/70 bg-white p-5 md:p-6 shadow-[0px_8px_25px_rgba(0,122,255,0.05)] md:flex-row md:items-start"
                                  >
                                    <div className="flex h-10 w-20 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold uppercase text-white">
                                      {step.label}
                                    </div>
                                    <div className="flex-1">
                                      <h3
                                        className="text-base md:text-lg font-semibold"
                                        style={{ color: '#0C2756', fontFamily: 'Poppins', lineHeight: '26px' }}
                                      >
                                        {step.title}
                                      </h3>
                                      <p className="mt-2 text-sm md:text-base" style={cardTextStyle}>
                                        {step.description}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="w-full py-12">
              <div className="w-full max-w-7xl mx-auto px-4">
                <div className="flex flex-col items-center gap-8 md:gap-14">
                  <FAQWithSchema
                    faqs={faqs}
                    title="Anti-Harassment"
                  />
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-12">
              <div className="w-full max-w-7xl mx-auto px-4">
                <div className="flex flex-col items-center gap-8 md:gap-14">
                  <div
                    className="flex justify-center items-center w-full rounded-xl px-3 py-8 md:py-[63px]"
                    style={{
                      background: 'linear-gradient(180deg, rgba(191, 238, 255, 0.50) 27.61%, #007AFF 100%)',
                      boxShadow: '0 5px 16px 0 rgba(0, 0, 0, 0.15)'
                    }}
                  >
                    <div className="flex flex-col items-center gap-[35px] w-full max-w-[644px]">
                      {/* Text Content */}
                      <div className="flex flex-col items-center gap-[28px] w-full">
                        <h2
                          className="text-center text-[21px] md:text-[28px] leading-[21px] md:leading-[28px] font-normal w-full"
                          style={{ color: '#0C2756' }}
                        >
                          Ready to Stop Loan Recovery Agent Harassment?
                        </h2>
                        <p
                          className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full"
                          style={{ color: 'rgba(12, 39, 86, 0.70)' }}
                        >
                          Get professional anti-harassment protection from CredSettle's expert legal team. Stop harassment immediately with call forwarding, cease-and-desist notices, and RBI complaint filing—protect your rights today.
                        </p>
                      </div>

                      {/* CTA Button */}
                      <button
                        className="px-[28px] py-[14px] rounded-xl bg-white transition-opacity duration-200 hover:opacity-90 cursor-pointer"
                        style={{
                          boxShadow: '0 -3px 7px 0 rgba(9, 9, 9, 0.30) inset, 0 3px 7px 0 rgba(9, 9, 9, 0.30) inset'
                        }}
                        onClick={() => window.location.href = '/contact'}
                      >
                        <span className="text-[13px] md:text-[14px] leading-[13px] md:leading-[14px] font-normal" style={{ color: '#0C2756' }}>
                          Get Your Free Consultation
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div style={{ marginTop: '100px' }}>
          <Footer />
        </div>
      </div>
    </>
  );
}

