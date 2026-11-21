'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import {
  ChevronDown,
  Scale,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileText,
  HelpCircle,
  BookOpen,
  Building2,
  Check,
  Lock,
  Phone,
  Briefcase,
  Bookmark,
  ArrowRight,
  Gavel,
  Landmark,
  Calendar,
  ShoppingBag,
  ShieldAlert
} from 'lucide-react';

export default function CoBrandedCardDefaultClient() {
  const [activeId, setActiveId] = useState<string>('quick-crux');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
        rootMargin: '-100px 0px -40% 0px',
        threshold: 0.05
      }
    );

    const headings = document.querySelectorAll('section[id], div[id].scroll-target');
    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const navLinks = [
    { id: 'quick-crux', label: 'Executive Brief & Legal Crux' },
    { id: 'legal-framework', label: '1. RBI Rules on Co-Branded Partners' },
    { id: 'why-apps-cannot-block', label: '2. Why Apps Cannot Block Accounts' },
    { id: 'dpdp-data-rules', label: '3. DPDP Act & Data Restrictions' },
    { id: 'real-consequences', label: '4. What Happens on Card Default' },
    { id: 'threats-vs-reality', label: '5. Fake Threats vs Real Action' },
    { id: 'step-by-step-sop', label: '6. Responding to App Block Threats' },
    { id: 'borrower-rights', label: '7. Borrower & Consumer Rights' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Default to Settlement Timeline' },
    { id: 'specialized-scenarios', label: '10. Wallets, Pay Later & Rewards' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can Amazon or Flipkart block my shopping account if I default on a co-branded credit card?',
      a: 'No. Amazon and Flipkart cannot block your e-commerce shopping account solely because you defaulted on an Amazon Pay ICICI or Flipkart Axis credit card. The issuing bank and the shopping app are separate legal entities.'
    },
    {
      q: 'What does the RBI say about co-branding partner access to card data?',
      a: 'Under the RBI Master Direction on Credit Card and Debit Card Issuance and Conduct (updated March 2024), a co-branding partner cannot access or store card transaction data. It can only display encrypted data from the bank directly to the cardholder.'
    },
    {
      q: 'Can a bank share my co-branded card default status with the partner app?',
      a: 'No. Under RBI secrecy norms and the Digital Personal Data Protection Act, 2023, banks cannot share your default status with an e-commerce partner to punish or block your retail account without explicit lawful grounds.'
    },
    {
      q: 'Is it legal for recovery agents to threaten to ban my Amazon or Flipkart account?',
      a: 'No. Making false or misleading threats violates RBI Circular RBI/2022-23/108 on recovery agents. The card-issuing bank is vicariously liable for such threats, and you can file a complaint with the Bank GRO and RBI Ombudsman.'
    },
    {
      q: 'What happens to my Amazon Pay balance or Flipkart gift cards if I default?',
      a: 'Your prepaid wallet balance or gift cards held with the e-commerce platform are separate from your credit card loan. However, unredeemed credit card reward points or cashback linked to the card account may be frozen or forfeited by the bank under card terms.'
    },
    {
      q: 'Who is legally responsible for co-branded credit card disputes and billing errors?',
      a: 'The regulated card-issuer (bank or NBFC) bears full legal responsibility. Under RBI rules, the co-branding partner can only act as an initial touchpoint for grievances, while the bank remains accountable for resolution.'
    },
    {
      q: 'Can I still shop on Amazon or Flipkart using UPI or cash on delivery after card default?',
      a: 'Yes. Even after the issuing bank blocks your co-branded credit card for non-payment, you can continue shopping on the partner app using UPI, debit cards, net banking, or cash on delivery.'
    },
    {
      q: 'What happens if I also default on Amazon Pay Later or Flipkart Pay Later?',
      a: 'Pay Later products are separate credit lines issued by partner NBFCs or banks. Defaulting on Pay Later can lead to suspension of the Pay Later credit option inside the app, though normal prepaid shopping usually remains accessible.'
    },
    {
      q: 'How do I report a recovery agent threatening to block my shopping apps?',
      a: 'Save call recordings, WhatsApp screenshots, and agent details. File a written complaint with the card-issuing bank Grievance Redressal Officer citing RBI Circular RBI/2022-23/108. If unresolved in 30 days, escalate to cms.rbi.org.in.'
    },
    {
      q: 'Can I settle a defaulted co-branded credit card through a One-Time Settlement?',
      a: 'Yes. You can negotiate a formal One-Time Settlement (OTS) directly with the issuing bank (such as ICICI Bank, Axis Bank, or SBI Card). CredSettle helps you stop harassment and secure an official settlement letter and No Dues Certificate.'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Background) */}
      <section
        className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-semibold mb-3">
            <Landmark className="w-3.5 h-3.5" />
            <span>RBI Co-Branded Card Rules &amp; DPDP Data Protection</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Can Amazon or Flipkart Block Accounts for Card Default?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            No, e-commerce apps cannot ban your shopping account because of a co-branded credit card default. Learn how RBI guidelines and Indian data privacy laws protect you from false recovery threats.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Stop Agent Threats &amp; Settle Debt</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP COMPONENT */}
      <StatsStrip />

      {/* 3. WIDESCREEN 3-COLUMN LAYOUT */}
      <div className="w-full max-w-[1720px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* ================= LEFT COLUMN: STICKY TOC ================= */}
          <aside className="sticky top-6 hidden lg:block">
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 overflow-hidden">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span className="text-xs font-black uppercase tracking-wider text-slate-800">
                  Table of Contents
                </span>
              </div>
              <nav className="space-y-1 max-h-[calc(100vh-140px)] overflow-y-auto pr-1 text-xs">
                {navLinks.map((link) => {
                  const isActive = activeId === link.id;
                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      className={`block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug ${
                        isActive
                          ? 'bg-blue-50 text-[#1886ff] font-bold border-l-3 border-[#1886ff] pl-2'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-4 pt-3 border-t border-slate-100 bg-blue-50/50 -mx-4 -mb-4 p-3 rounded-b-2xl">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Statutory Borrower Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Credit Card Master Directions (2022/2024) and the DPDP Act, 2023.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* EXECUTIVE SUMMARY BOX (#F4F8FE Box) */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: CO-BRANDED CARD DEFAULT &amp; PARTNER APP LAW</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Shopping App Ban:</strong> E-commerce platforms like Amazon or Flipkart cannot block your retail account for unpaid co-branded credit card bills.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Strict RBI Role Limit:</strong> Under RBI Master Directions, the co-branding partner is only a marketing partner. Post-issuance, it cannot manage card operations or controls.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Data Isolation Mandate:</strong> Under the March 2024 RBI amendment, partner apps cannot read or store your card transaction data. They can only show encrypted feeds to you.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Fake Threats Are Illegal:</strong> Recovery agents threatening to freeze your shopping app or Prime account violate RBI Circular RBI/2022-23/108 on fair collection practices.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Bank Holds Sole Liability:</strong> Only the regulated bank (ICICI, Axis, SBI, or HDFC) can block the card, report to CIBIL, or negotiate a One-Time Settlement.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Legal Framework: RBI Rules on Co-Branded Card Partners */}
            <section id="legal-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Reserve Bank of India Master Directions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Legal Framework: RBI Rules on Co-Branded Card Partners
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many Indian shoppers use co-branded credit cards such as the Amazon Pay ICICI Card, Flipkart Axis Bank Card, or Swiggy HDFC Card. When financial hardship causes a missed payment, borrowers often worry about losing access to their daily shopping apps.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India (RBI) governs all credit cards through the <strong>Master Direction on Credit Card and Debit Card Issuance and Conduct, 2022</strong>. The RBI also updated these rules in <strong>March 2024</strong> to tighten rules on co-branding partners.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under these directions, a non-financial company like Amazon or Flipkart is only a <strong>Co-Branding Partner (CBP)</strong>. It is not the lender. Only a licensed bank or RBI-approved NBFC can issue credit, manage your loan ledger, or decide on defaults.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Once the card is issued, the RBI strictly bars the co-branding partner from handling any card operations, credit controls, or recovery actions. Its role after issuance is limited to marketing rewards and acting as an initial touchpoint for customer grievances.
              </p>
            </section>

            {/* SECTION 2: Why Amazon or Flipkart Cannot Block Shopping Accounts */}
            <section id="why-apps-cannot-block" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShoppingBag className="w-4 h-4 text-[#1886ff]" />
                <span>Separate Legal Entities &amp; Contract Boundaries</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Why Amazon or Flipkart Cannot Block Shopping Accounts
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Your shopping account and your co-branded credit card operate under two completely separate legal contracts. When you create an Amazon or Flipkart account, you agree to their marketplace Terms of Use.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you apply for a co-branded credit card, you sign a separate Most Important Terms and Conditions (MITC) contract with the bank. The e-commerce company is not a party to your credit facility or debt obligation.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Because of this legal separation, an e-commerce platform has no right to suspend your retail profile just because you owe money to ICICI Bank, Axis Bank, or SBI Card. You can still log in, browse, and pay via UPI, debit card, or cash on delivery.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Of course, a shopping app can suspend an account if you break its own platform rules. For example, return policy abuse, fake reviews, or suspicious logins can trigger an account lock. However, an unpaid credit card bill is not a valid ground.
              </p>
            </section>

            {/* SECTION 3: DPDP Act 2023 & RBI Data Sharing Restrictions */}
            <section id="dpdp-data-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Lock className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Privacy &amp; Data Isolation Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. DPDP Act 2023 &amp; RBI Data Sharing Restrictions
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even if a bank wanted to tell an e-commerce partner to block your app, Indian law stops it from doing so. Two strong legal frameworks protect your financial privacy.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, the <strong>March 2024 RBI Amendment</strong> states that co-branding partners cannot access or store card transaction data. If an app shows your card bill inside its dashboard, it must pull that data in encrypted form directly from the bank, visible only to you.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, under the <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong>, banks act as Data Fiduciaries. A bank cannot share your personal default status with a third-party retail company without specific, informed consent or a lawful mandate.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks are legally required to report defaults only to licensed Credit Information Companies (CICs) like CIBIL, Experian, Equifax, and CRIF High Mark. Sharing your default records with an online store for retaliation violates banker secrecy norms.
              </p>
            </section>

            {/* SECTION 4: What Actually Happens on Co-Branded Card Default */}
            <section id="real-consequences" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Actual Banking &amp; Credit Consequences</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. What Actually Happens on Co-Branded Card Default
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                While your shopping app remains safe, defaulting on a co-branded credit card still carries serious financial consequences from the issuing bank. Knowing the real risks helps you plan a proper legal exit.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <ShieldAlert className="w-4 h-4" />
                    <span>Card Suspension &amp; Cancellation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The issuing bank will freeze your co-branded credit card after 30 to 60 days of non-payment. You will no longer be able to use that card for checkout or EMI purchases.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <FileText className="w-4 h-4" />
                    <span>CIBIL &amp; Credit Bureau Reporting</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The bank reports missed payments every 15 days to credit bureaus. After 90 days overdue, the account is marked as a Non-Performing Asset (NPA), sharply lowering your credit score.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>Right of Lien on Same Bank Accounts</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you hold a savings account with the same issuing bank, the bank may exercise a lien under Section 171 of the Indian Contract Act and set off overdue amounts after notice.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Legal Notices &amp; Civil Recovery</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The bank can issue demand notices, initiate arbitration, or file a civil recovery suit. If an auto-debit NACH mandate bounces, Section 25 of the Payment and Settlement Systems Act may apply.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 5: Fake Recovery Threats vs Real Legal Consequences */}
            <section id="threats-vs-reality" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Separating Scare Tactics From Indian Law</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Fake Recovery Threats vs Real Legal Consequences
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Third-party collection agents often invent scare tactics to force immediate payment. They know borrowers rely on shopping apps daily, so they threaten digital bans. Compare these common threats with actual Indian law below.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Recovery Threat vs Legal Reality Matrix</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">RBI Compliant Audit</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Common Agent Threat</th>
                        <th className="p-3">Is It Legally Possible?</th>
                        <th className="p-3">Actual RBI / Legal Position</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">
                          &ldquo;We will block your Amazon or Flipkart shopping account.&rdquo;
                        </td>
                        <td className="p-3 font-bold text-rose-600">No (False Threat)</td>
                        <td className="p-3">
                          Separate legal entities; RBI bars co-branding partners from controlling card defaults.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">
                          &ldquo;We will cancel your Prime or Plus membership and blacklist your address.&rdquo;
                        </td>
                        <td className="p-3 font-bold text-rose-600">No (False Threat)</td>
                        <td className="p-3">
                          Retail subscriptions and delivery addresses cannot be banned for bank card dues.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">
                          &ldquo;Police will arrest you tonight for credit card default.&rdquo;
                        </td>
                        <td className="p-3 font-bold text-rose-600">No (False Threat)</td>
                        <td className="p-3">
                          Credit card default is a civil dispute, not a criminal offense, unless fraud is proven.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">
                          &ldquo;Your co-branded credit card will be permanently blocked.&rdquo;
                        </td>
                        <td className="p-3 font-bold text-emerald-700">Yes (Permitted)</td>
                        <td className="p-3">
                          The issuing bank can suspend card usage and report overdue status to CIBIL.
                        </td>
                      </tr>
                      <tr className="bg-blue-50/40">
                        <td className="p-3 font-medium text-slate-900">
                          &ldquo;We will block other credit cards you hold with our bank.&rdquo;
                        </td>
                        <td className="p-3 font-bold text-amber-700">Yes (Same Bank)</td>
                        <td className="p-3">
                          Under UCIC rules, the same issuing bank can restrict other credit cards it issued to you.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP: Responding to App Block Threats */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Responding to App Block Threats
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a recovery agent threatens to block your Amazon, Flipkart, or other partner app account, stay calm and follow these five steps to protect yourself.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Step 1: Record Calls and Save Message Screenshots
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Save every WhatsApp message, SMS, email, and call recording where the agent threatens an app ban. Note the date, time, phone number, and agency name.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Step 2: Ask for Agent ID and Bank Authorization
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under RBI rules, every agent must provide their identity card and bank authorization letter. Refuse to engage with anonymous callers or unverified WhatsApp accounts.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Step 3: Remove Auto-Debit and Saved Card Details
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Switch your shopping app payment method to UPI or cash on delivery. Keep your shopping account active while avoiding failed auto-debit charges on the blocked card.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Step 4: File a Written Complaint With the Issuing Bank
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Email the bank Grievance Redressal Officer (GRO) attaching your proof. Cite RBI Circular RBI/2022-23/108 against false threats and demand an end to harassment.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Step 5: Negotiate a Formal One-Time Settlement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once harassment stops, resolve the underlying debt. Negotiate a written One-Time Settlement (OTS) with the bank or through CredSettle and obtain a No Dues Certificate.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Borrower Rights & Consumer Protection Remedies */}
            <section id="borrower-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Protections &amp; Legal Remedies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Borrower Rights &amp; Consumer Protection Remedies
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Defaulting on a credit card does not strip away your legal rights as a citizen and consumer. Several Indian laws protect you from coercion and unlawful data sharing.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>RBI Recovery Guidelines (RBI/2022-23/108)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Agents can only contact you between 8:00 AM and 7:00 PM. Intimidation, false threats, and contacting relatives or employers are strictly banned.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Bank Vicarious Liability</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The RBI holds the card-issuing bank directly responsible for the conduct of its outsourced recovery agencies. A bank cannot blame a third-party agency to escape liability.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Consumer Protection Act, 2019</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a co-branded card dispute involves missing rewards, wrong billing, or harassment, you can file a complaint for deficiency in service before the Consumer Commission.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Bharatiya Nyaya Sanhita (BNS), 2023</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If recovery agents use abusive language, blackmail, or criminal intimidation, you can file a police complaint under applicable BNS provisions for harassment and intimidation.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Remember that the RBI Ombudsman handles complaints against the regulated card-issuing bank, not against Amazon or Flipkart directly. Follow this three-tier path if the bank ignores your harassment complaint.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Timeline</th>
                      <th className="p-3">Action &amp; Relief Available</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Logs recovery threat evidence and instructs collection agency to stand down.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">Up to 30 Days Total</td>
                      <td className="p-3">Reviews agency compliance, audits billing disputes, and initiates OTS desk contact.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">RBI Integrated Ombudsman (cms.rbi.org.in)</td>
                      <td className="p-3 font-mono">After 30 Days Unresolved</td>
                      <td className="p-3">Orders the bank to stop unlawful recovery, fix records, and pay compensation.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Default to Settlement Timeline on Co-Branded Cards */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Delinquency &amp; Resolution Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Default to Settlement Timeline on Co-Branded Cards
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding how banks handle overdue co-branded cards helps you time your settlement request and avoid unnecessary panic.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Overdue Stage</th>
                      <th className="p-3">Bank Action</th>
                      <th className="p-3">Partner App Status</th>
                      <th className="p-3">Recommended Borrower Step</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3">SMS reminders and late fee charged on overdue sum.</td>
                      <td className="p-3 text-emerald-700 font-semibold">Fully Active</td>
                      <td className="p-3">Pay minimum due or request hardship restructuring early.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3">Card temporarily frozen; bank collection team calls.</td>
                      <td className="p-3 text-emerald-700 font-semibold">Shopping Active</td>
                      <td className="p-3">Record any unlawful threats; switch app payments to UPI.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 90 (NPA)</td>
                      <td className="p-3">Account marked NPA; reward points may be frozen.</td>
                      <td className="p-3 text-emerald-700 font-semibold">Shopping Active</td>
                      <td className="p-3">Submit formal hardship letter to bank recovery desk.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 120 to 180+</td>
                      <td className="p-3">Bank becomes open to One-Time Settlement (OTS).</td>
                      <td className="p-3 text-emerald-700 font-semibold">Shopping Active</td>
                      <td className="p-3">Negotiate OTS waiver, verify sanction letter, and collect NOC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Special Cases: Wallets, Pay Later & Reward Points */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Related Ecosystem Products</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Cases: Wallets, Pay Later &amp; Reward Points
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many users mix up credit cards with wallets or Buy Now Pay Later (BNPL) accounts inside the same app. Here is how each product behaves during a default.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-[#1886ff]" />
                    Prepaid Wallets &amp; Gift Cards
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Money already loaded into a prepaid wallet or gift card belongs to you. The bank cannot seize your e-commerce gift card balance to pay off a co-branded credit card bill.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Pay Later (BNPL) Credit Lines
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you default on Amazon Pay Later or Flipkart Pay Later, that specific credit option inside the app will be suspended. However, your regular prepaid shopping stays open.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Co-Branded Cashback &amp; Reward Points
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under most card agreements, banks can freeze or forfeit unredeemed card reward points once an account becomes overdue. Points already transferred to your wallet are usually unaffected.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Merchant Refunds on Blocked Cards
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you return an item bought earlier on a now-blocked co-branded card, the refund goes back to the card account. It adjusts against your outstanding card balance.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Direct Answers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Co-Branded Card Default
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear answers to common questions about co-branded credit card defaults, partner app accounts, RBI data privacy rules, and legal debt settlement.
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="border border-slate-200/80 rounded-2xl bg-white overflow-hidden shadow-2xs transition-all duration-200"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                            isOpen ? 'rotate-180 text-[#1886ff]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          <p className="pt-3">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: Citations & Outbound Authority Grid */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Statutory References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>RBI Master Direction (2022 &amp; March 2024 Amendment):</strong> Credit Card and Debit Card Issuance and Conduct Directions, Co-Branding Arrangements &amp; Data Access Restrictions.
                </li>
                <li>
                  <strong>RBI Recovery Agent Circular:</strong> RBI/2022-23/108, Outsourcing of Financial Services - Responsibilities of Regulated Entities Employing Recovery Agents.
                </li>
                <li>
                  <strong>Digital Personal Data Protection Act, 2023:</strong> Section 6 (Consent) and Section 8 (Obligations of Data Fiduciary).
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Grievance Redressal against Regulated Entities for Deficiency in Service.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 2(11) (Deficiency of Service) and Consumer Redressal Remedies.
                </li>
              </ul>

              {/* Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Helpline</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement Services
                  </Link>
                  <Link href="/credit-card-settlement-process" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement Process
                  </Link>
                  <Link href="/stop-credit-card-recovery-calls" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Credit Card Recovery Calls
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Agent Rules
                  </Link>
                  <Link href="/credit-card-reward-points-forfeiture-overdue-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Reward Points Forfeiture Rules
                  </Link>
                  <Link href="/credit-card-npa-timeline" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card NPA Timeline
                  </Link>
                  <Link href="/credit-card-legal-notice-format" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Legal Notice Guide
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC After Settlement
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/credit-card-minimum-due-trap" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Minimum Due Trap
                  </Link>
                </div>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="space-y-5 sticky top-6">
            
            {/* Card 1: Author Bio Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <div className="flex items-center gap-3">
                <Link
                  href="/author/ashish-jhangra"
                  className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-extrabold text-sm hover:bg-blue-200 transition-colors flex-shrink-0"
                  title="View Ashish Jhangra Profile"
                >
                  AJ
                </Link>
                <div>
                  <Link
                    href="/author/ashish-jhangra"
                    className="text-sm font-bold text-slate-900 hover:text-[#1886ff] transition-colors block"
                  >
                    Ashish Jhangra
                  </Link>
                  <p className="text-[11px] font-semibold text-[#1886ff]">
                    Legal &amp; Debt Resolution Professional
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialist in banking compliance, credit card default defense, RBI statutory guidelines, and loan settlement resolutions with extensive experience protecting borrowers from unlawful recovery tactics.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <Link
                  href="/author/ashish-jhangra"
                  className="text-[#1886ff] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>View Author Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> CredSettle Panel
                </span>
              </div>
            </div>

            {/* Card 2: Emergency CTA Card (#2452ae background) */}
            <div
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  ANTI-HARASSMENT &amp; OTS SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Agents Threatening to Block Your Apps?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team stops unlawful recovery threats under RBI Circular RBI/2022-23/108 and negotiates affordable One-Time Settlements on your co-branded credit cards.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free Legal Consultation
              </Link>
              <div className="pt-2 flex flex-col items-center justify-center gap-1 text-[11px] text-blue-200">
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-blue-200" />
                  <a href="tel:+918800226635" className="hover:underline font-bold text-white">
                    Call: +91-8800226635
                  </a>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-blue-300">
                  <Lock className="w-3 h-3" />
                  <span>RBI Compliant • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Assurance</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Stop Fake Threats:</strong> Immediate action against illegal app-ban intimidation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Structured OTS Negotiation:</strong> Reduce inflated interest and late fees legally.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Verified NOC Closure:</strong> Authentic bank settlement letters and clean closure.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Ombudsman Escalation:</strong> End-to-end representation for RBI violations.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/stop-credit-card-recovery-calls"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Stop Credit Card Recovery Calls
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI anti-harassment remedies &rarr;</span>
                </Link>

                <Link
                  href="/credit-card-reward-points-forfeiture-overdue-rules"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Reward Points Forfeiture Rules
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Overdue card points &amp; cashback &rarr;</span>
                </Link>

                <Link
                  href="/services/credit-card-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Debt Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Official OTS &amp; NOC support &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
