'use client';

import { useEffect, useState } from 'react';
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
    },
    {
      question: 'What is call forwarding service and how does it stop harassment?',
      answer: 'Call forwarding service diverts all recovery calls directly to CredSettle\'s legal helpline, preventing you from receiving harassing calls. When recovery agents call your number, the call is automatically forwarded to our legal team, who handle all communications professionally and legally. This ensures you never receive threatening or abusive calls, while our team negotiates with lenders on your behalf. This service provides immediate relief from constant harassment calls.'
    },
    {
      question: 'What is a cease and desist notice and how does it work?',
      answer: 'A cease and desist notice is a formal legal document sent to lenders and recovery agencies demanding they immediately stop all harassment and illegal recovery practices. This notice cites specific violations of RBI guidelines and Indian laws, warns of legal consequences for continued harassment, and establishes a legal record of the harassment. CredSettle\'s legal team sends these notices immediately upon engagement, typically stopping harassment within 24-48 hours.'
    },
    {
      question: 'How long does it take for anti-harassment services to stop harassment?',
      answer: 'CredSettle\'s anti-harassment services typically stop harassment within 24-48 hours of engagement. Immediate actions include sending cease-and-desist notices, filing RBI complaints, setting up call forwarding, and establishing legal protection. In most cases, harassment stops completely within 48 hours. For persistent harassment, our escalation procedures (RBI complaints, police complaints) typically achieve complete cessation within 7-14 days. We provide ongoing protection until harassment stops permanently.'
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
                  style={{
                    color: '#0C2756',
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    lineHeight: '28px',
                    opacity: 0.9
                  }}
                >
                  {/* Introduction */}
                  <div className="mb-8">
                    <p className="mb-4">
                      <strong>Loan recovery agent harassment</strong> has become a serious problem for millions of borrowers in India, with recovery agents using illegal tactics including threatening calls, abusive language, unauthorized visits, and privacy violations. Understanding your <strong>legal rights against harassment</strong> and accessing professional <strong>anti-harassment services</strong> is essential for protecting yourself and your family. This comprehensive guide covers everything you need to know about <strong>stopping loan recovery agent harassment</strong>, <strong>RBI guidelines</strong>, <strong>anti-harassment protection</strong>, and how CredSettle provides immediate legal protection.
                    </p>
                    <p className="mb-4">
                      Under <strong>RBI guidelines</strong> and Indian laws, recovery agents must follow strict <strong>Fair Practices Code</strong> that prohibits harassment, threats, and illegal collection tactics. <strong>Loan recovery agent harassment</strong> violates these guidelines and can result in severe penalties for lenders and recovery agencies. This guide covers <strong>anti-harassment services</strong>, <strong>legal protection against harassment</strong>, <strong>RBI complaint filing</strong>, and proven strategies to stop harassment immediately.
                    </p>
                  </div>

                  {/* Understanding Loan Recovery Agent Harassment */}
                  <h2 id="understanding-harassment" className="text-3xl font-bold mb-4 mt-8" style={{ color: '#0C2756' }}>
                    Understanding Loan Recovery Agent Harassment: What You Need to Know
                  </h2>
                  <p className="mb-4">
                    <strong>Loan recovery agent harassment</strong> refers to illegal and abusive practices used by recovery agents to collect debts. These practices violate <strong>RBI guidelines</strong> and Indian laws, including the use of threatening language, abusive calls, unauthorized visits, workplace harassment, contacting family members, and intimidation tactics. Understanding what constitutes <strong>harassment</strong> is the first step in protecting yourself.
                  </p>
                  <p className="mb-4">
                    The <strong>Reserve Bank of India (RBI)</strong> has established comprehensive guidelines for debt recovery, including the <strong>Fair Practices Code</strong> that strictly prohibits <strong>recovery agent harassment</strong>. These guidelines ensure that debt recovery is conducted legally and ethically, protecting borrowers' rights and dignity. <strong>Anti-harassment services</strong> help enforce these guidelines and provide immediate protection against violations.
                  </p>
                  <p className="mb-4">
                    Common forms of <strong>loan recovery agent harassment</strong> include: threatening calls at odd hours, abusive language and threats, unauthorized visits to home or workplace, contacting family members or friends, using intimidation tactics, sharing personal information publicly, and making false claims. All of these practices violate <strong>RBI guidelines</strong> and are illegal. Professional <strong>anti-harassment services</strong> can help you stop these practices immediately.
                  </p>

                  {/* Your Legal Rights Against Harassment */}
                  <h2 id="legal-rights-against-harassment" className="text-3xl font-bold mb-4 mt-8" style={{ color: '#0C2756' }}>
                    Your Legal Rights Against Loan Recovery Agent Harassment
                  </h2>
                  <p className="mb-4">
                    You have extensive <strong>legal rights against harassment</strong> under <strong>RBI guidelines</strong> and Indian laws. Understanding these rights is crucial for protecting yourself:
                  </p>
                  <p className="mb-4">
                    <strong>Right to Privacy</strong> - Recovery agents cannot contact your family members, friends, colleagues, or neighbors about your debt. They can only contact you directly, and only at reasonable hours. Any contact with third parties violates your <strong>privacy rights</strong> and <strong>RBI guidelines</strong>. <strong>Anti-harassment services</strong> help enforce this right.
                  </p>
                  <p className="mb-4">
                    <strong>Right to Dignity</strong> - Recovery agents must treat you with respect and dignity. They cannot use abusive language, threats, intimidation, or any form of harassment. All communications must be professional and respectful. Violations of your <strong>right to dignity</strong> can result in severe penalties for lenders.
                  </p>
                  <p className="mb-4">
                    <strong>Right to Fair Treatment</strong> - Recovery agents must follow <strong>RBI Fair Practices Code</strong>, which includes: contacting you only during reasonable hours (9 AM to 6 PM), providing proper identification, not making unauthorized visits, not using threatening behavior, and maintaining professional conduct. Any violation of these rights can be reported to <strong>RBI</strong> or other authorities.
                  </p>
                  <p className="mb-4">
                    <strong>Right to Proper Documentation</strong> - All communications from recovery agents must be properly documented. You have the right to request written documentation of all interactions, and recovery agents must maintain proper records. This helps protect you and provides evidence if you need to file complaints.
                  </p>
                  <p className="mb-4">
                    <strong>Right to File Complaints</strong> - You have the right to file complaints against <strong>recovery agent harassment</strong> with multiple authorities, including RBI Banking Ombudsman, RBI Consumer Education Department, local police, Cyber Crime Cell, and National Consumer Helpline. <strong>Anti-harassment services</strong> help you file effective complaints that result in action.
                  </p>

                  {/* RBI Guidelines on Debt Recovery */}
                  <h2 id="rbi-guidelines-debt-recovery" className="text-3xl font-bold mb-4 mt-8" style={{ color: '#0C2756' }}>
                    RBI Guidelines on Debt Recovery: What Recovery Agents Can and Cannot Do
                  </h2>
                  <p className="mb-4">
                    The <strong>Reserve Bank of India</strong> has established comprehensive <strong>RBI guidelines</strong> for debt recovery that strictly regulate what recovery agents can and cannot do:
                  </p>
                  <p className="mb-4">
                    <strong>What Recovery Agents CAN Do</strong> - Recovery agents can: contact you during reasonable hours (9 AM to 6 PM), visit your registered address with prior notice, discuss your loan and repayment options professionally, provide information about your debt and settlement options, and maintain professional communication. All of these must be done respectfully and legally.
                  </p>
                  <p className="mb-4">
                    <strong>What Recovery Agents CANNOT Do</strong> - Recovery agents cannot: use abusive language or threats, make calls at odd hours or repeatedly, visit your workplace without permission, contact family members or friends, use intimidation tactics, share your personal information publicly, make false claims or threats, or violate your privacy in any way. All of these violate <strong>RBI guidelines</strong> and are illegal.
                  </p>
                  <p className="mb-4">
                    <strong>RBI Fair Practices Code</strong> - The <strong>Fair Practices Code</strong> requires lenders and recovery agents to: treat borrowers with respect and dignity, maintain professional conduct at all times, provide proper identification, respect privacy rights, follow proper procedures, and maintain proper documentation. Violations of this code can result in severe penalties, including license cancellation and criminal action.
                  </p>
                  <p className="mb-4">
                    <strong>Consequences of Violations</strong> - Lenders and recovery agencies that violate <strong>RBI guidelines</strong> face severe consequences, including: penalties and fines from RBI, license cancellation or suspension, criminal complaints for harassment, legal action from borrowers, and damage to reputation. These consequences make it clear that <strong>harassment</strong> is not acceptable and will be punished.
                  </p>

                  {/* Anti-Harassment Services */}
                  <h2 id="anti-harassment-services" className="text-3xl font-bold mb-4 mt-8" style={{ color: '#0C2756' }}>
                    Anti-Harassment Services: How to Stop Harassment Immediately
                  </h2>
                  <p className="mb-4">
                    Professional <strong>anti-harassment services</strong> provide immediate protection against <strong>loan recovery agent harassment</strong>. These services include:
                  </p>
                  <p className="mb-4">
                    <strong>Call Forwarding Services</strong> - <strong>Call forwarding</strong> diverts all recovery calls directly to CredSettle's legal helpline, preventing you from receiving harassing calls. When recovery agents call your number, the call is automatically forwarded to our legal team, who handle all communications professionally and legally. This provides immediate relief from constant <strong>harassment calls</strong> and ensures all communications are handled properly.
                  </p>
                  <p className="mb-4">
                    <strong>Cease and Desist Notices</strong> - A <strong>cease and desist notice</strong> is a formal legal document sent to lenders and recovery agencies demanding they immediately stop all harassment and illegal recovery practices. This notice cites specific violations of <strong>RBI guidelines</strong> and Indian laws, warns of legal consequences for continued harassment, and establishes a legal record. CredSettle's legal team sends these notices immediately upon engagement.
                  </p>
                  <p className="mb-4">
                    <strong>RBI Complaint Filing</strong> - <strong>RBI complaint filing</strong> involves submitting formal complaints to RBI Banking Ombudsman and Consumer Education Department documenting <strong>harassment violations</strong>. These complaints result in RBI investigation, penalties for lenders, and immediate cessation of harassment. CredSettle handles all <strong>complaint filing</strong> on your behalf, ensuring proper documentation and follow-up.
                  </p>
                  <p className="mb-4">
                    <strong>Police Complaint Filing</strong> - For severe <strong>harassment</strong> involving threats, intimidation, or criminal behavior, <strong>police complaints</strong> can be filed. CredSettle helps you file effective police complaints that result in action against recovery agents and protection for you and your family. This provides additional legal protection beyond <strong>RBI guidelines</strong>.
                  </p>
                  <p className="mb-4">
                    <strong>24/7 Legal Protection</strong> - CredSettle provides <strong>24/7 legal protection</strong> against harassment, ensuring you have immediate support whenever harassment occurs. Our legal team is available around the clock to handle emergencies, send immediate legal notices, and provide protection. This ensures you never face harassment alone.
                  </p>

                  {/* How to Stop Harassment Immediately */}
                  <h2 id="stop-harassment-immediately" className="text-3xl font-bold mb-4 mt-8" style={{ color: '#0C2756' }}>
                    How to Stop Loan Recovery Agent Harassment Immediately
                  </h2>
                  <p className="mb-4">
                    If you're facing <strong>loan recovery agent harassment</strong>, here's how to stop it immediately:
                  </p>
                  <p className="mb-4">
                    <strong>Step 1: Engage Anti-Harassment Services</strong> - The first step in stopping <strong>harassment</strong> is engaging professional <strong>anti-harassment services</strong> like CredSettle. Our legal team immediately sends cease-and-desist notices, files RBI complaints, sets up call forwarding, and establishes legal protection. This typically stops <strong>harassment</strong> within 24-48 hours.
                  </p>
                  <p className="mb-4">
                    <strong>Step 2: Document All Harassment</strong> - Document all instances of <strong>harassment</strong>, including: recording threatening calls (with consent), saving text messages and emails, noting dates and times of visits, documenting abusive language used, and collecting witness statements. This documentation provides evidence for complaints and legal action. CredSettle helps you organize this documentation effectively.
                  </p>
                  <p className="mb-4">
                    <strong>Step 3: File Complaints</strong> - File complaints with appropriate authorities, including RBI Banking Ombudsman for banking violations, RBI Consumer Education Department for regulatory violations, local police for criminal harassment, and Cyber Crime Cell for digital harassment. CredSettle handles all <strong>complaint filing</strong> on your behalf, ensuring proper documentation and follow-up.
                  </p>
                  <p className="mb-4">
                    <strong>Step 4: Set Up Call Forwarding</strong> - Set up <strong>call forwarding</strong> to divert all recovery calls to CredSettle's legal helpline. This prevents you from receiving harassing calls and ensures all communications are handled professionally. Our legal team handles all communications with recovery agents, protecting you from further harassment.
                  </p>
                  <p className="mb-4">
                    <strong>Step 5: Monitor and Escalate</strong> - Monitor the situation and escalate if harassment continues. CredSettle provides ongoing monitoring and escalates through RBI complaints, police complaints, and legal action if necessary. We ensure harassment stops completely and permanently.
                  </p>

                  {/* Common Harassment Tactics and How to Stop Them */}
                  <h2 id="common-harassment-tactics" className="text-3xl font-bold mb-4 mt-8" style={{ color: '#0C2756' }}>
                    Common Harassment Tactics and How to Stop Them
                  </h2>
                  <p className="mb-4">
                    Understanding common <strong>harassment tactics</strong> helps you recognize and stop them:
                  </p>
                  <p className="mb-4">
                    <strong>Threatening Calls</strong> - Recovery agents often make threatening calls at odd hours, using abusive language and threats. To stop this, set up <strong>call forwarding</strong> to divert all calls to CredSettle's legal helpline. Our team handles all communications professionally, and we file RBI complaints for any threatening behavior.
                  </p>
                  <p className="mb-4">
                    <strong>Unauthorized Visits</strong> - Recovery agents may visit your home or workplace without permission or proper notice. To stop this, CredSettle sends cease-and-desist notices prohibiting unauthorized visits. We file police complaints for any unauthorized visits, and our legal protection ensures agents cannot visit without proper authorization.
                  </p>
                  <p className="mb-4">
                    <strong>Contacting Family Members</strong> - Recovery agents may contact family members, friends, or colleagues about your debt. This violates your <strong>privacy rights</strong> and <strong>RBI guidelines</strong>. CredSettle sends legal notices prohibiting contact with third parties, files RBI complaints for privacy violations, and ensures complete protection for you and your family.
                  </p>
                  <p className="mb-4">
                    <strong>Intimidation Tactics</strong> - Recovery agents may use intimidation tactics including threats, false claims, and public shaming. All of these violate <strong>RBI guidelines</strong> and are illegal. CredSettle provides immediate legal protection against intimidation, files complaints for threats, and ensures you're protected from all forms of intimidation.
                  </p>
                  <p className="mb-4">
                    <strong>Digital Harassment</strong> - Recovery agents may use digital harassment including threatening messages, social media harassment, and data privacy violations. CredSettle helps you file cyber crime complaints, protects your digital privacy, and ensures complete protection against digital harassment.
                  </p>

                  {/* Filing Complaints Against Harassment */}
                  <h2 id="filing-complaints" className="text-3xl font-bold mb-4 mt-8" style={{ color: '#0C2756' }}>
                    Filing Complaints Against Loan Recovery Agent Harassment
                  </h2>
                  <p className="mb-4">
                    Filing effective complaints against <strong>recovery agent harassment</strong> is crucial for stopping harassment and holding violators accountable:
                  </p>
                  <p className="mb-4">
                    <strong>RBI Banking Ombudsman Complaint</strong> - The <strong>RBI Banking Ombudsman</strong> handles complaints against banks and their recovery agents for violations of <strong>RBI guidelines</strong>. This includes harassment, privacy violations, and unfair practices. CredSettle helps you file effective <strong>RBI complaints</strong> that result in investigation and penalties for violators.
                  </p>
                  <p className="mb-4">
                    <strong>RBI Consumer Education Department Complaint</strong> - The <strong>RBI Consumer Education Department</strong> handles complaints about regulatory violations and unfair practices. CredSettle files complaints documenting all <strong>harassment violations</strong>, ensuring proper investigation and action against violators.
                  </p>
                  <p className="mb-4">
                    <strong>Police Complaint</strong> - For severe <strong>harassment</strong> involving threats, intimidation, or criminal behavior, <strong>police complaints</strong> can be filed. CredSettle helps you file effective police complaints with proper documentation, ensuring action against recovery agents and protection for you and your family.
                  </p>
                  <p className="mb-4">
                    <strong>Cyber Crime Complaint</strong> - For digital harassment including threatening messages, social media harassment, and data privacy violations, <strong>cyber crime complaints</strong> can be filed. CredSettle helps you file cyber crime complaints and protects your digital privacy.
                  </p>
                  <p className="mb-4">
                    <strong>National Consumer Helpline</strong> - The <strong>National Consumer Helpline</strong> provides assistance for consumer complaints including harassment. CredSettle helps you access this helpline and file effective complaints that result in action.
                  </p>

                  {/* Benefits of Anti-Harassment Services */}
                  <h2 id="benefits-anti-harassment" className="text-3xl font-bold mb-4 mt-8" style={{ color: '#0C2756' }}>
                    Benefits of Anti-Harassment Services: Why Choose Professional Protection
                  </h2>
                  <p className="mb-4">
                    Professional <strong>anti-harassment services</strong> provide numerous benefits for borrowers facing <strong>loan recovery agent harassment</strong>:
                  </p>
                  <p className="mb-4">
                    <strong>Immediate Protection</strong> - <strong>Anti-harassment services</strong> provide immediate protection against harassment, typically stopping harassment within 24-48 hours. This includes sending cease-and-desist notices, filing RBI complaints, setting up call forwarding, and establishing legal protection. You get immediate relief from constant harassment.
                  </p>
                  <p className="mb-4">
                    <strong>Legal Expertise</strong> - Professional <strong>anti-harassment services</strong> have legal expertise in <strong>RBI guidelines</strong>, Indian laws, and complaint filing procedures. This ensures effective protection and proper handling of all harassment cases. CredSettle's legal team has extensive experience in stopping harassment and protecting borrowers.
                  </p>
                  <p className="mb-4">
                    <strong>Complete Protection</strong> - <strong>Anti-harassment services</strong> provide complete protection against all forms of harassment, including calls, visits, digital harassment, and privacy violations. This comprehensive protection ensures you're protected from all harassment tactics.
                  </p>
                  <p className="mb-4">
                    <strong>Peace of Mind</strong> - Knowing that professional <strong>anti-harassment services</strong> are handling all communications and providing protection gives you peace of mind. You can focus on your life without constant worry about harassment calls or visits.
                  </p>
                  <p className="mb-4">
                    <strong>Ongoing Support</strong> - Professional <strong>anti-harassment services</strong> provide ongoing support and monitoring, ensuring harassment doesn't resume. CredSettle provides 24/7 protection and immediate response to any harassment incidents.
                  </p>

                  {/* Conclusion */}
                  <h2 id="conclusion" className="text-3xl font-bold mb-4 mt-8" style={{ color: '#0C2756' }}>
                    Conclusion: Your Path to Freedom from Loan Recovery Agent Harassment
                  </h2>
                  <p className="mb-4">
                    <strong>Loan recovery agent harassment</strong> is illegal and violates your rights under <strong>RBI guidelines</strong> and Indian laws. Understanding your <strong>legal rights against harassment</strong> and accessing professional <strong>anti-harassment services</strong> is essential for protecting yourself and your family.
                  </p>
                  <p className="mb-4">
                    CredSettle provides comprehensive <strong>anti-harassment services</strong> that stop harassment immediately, protect your rights, and ensure complete legal protection. Our services include call forwarding, cease-and-desist notices, RBI complaint filing, police complaint filing, and 24/7 legal protection.
                  </p>
                  <p className="mb-4">
                    Remember, you don't have to face <strong>harassment</strong> alone. Professional <strong>anti-harassment services</strong> provide immediate protection and ongoing support, ensuring harassment stops completely and permanently. By working with CredSettle, you can stop harassment, protect your rights, and achieve peace of mind.
                  </p>
                  <p className="mb-4">
                    If you're facing <strong>loan recovery agent harassment</strong>, reach out to CredSettle immediately. Our expert legal team will assess your situation, provide immediate protection, and ensure harassment stops within 24-48 hours. Don't suffer in silence—get the protection you deserve today.
                  </p>
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

