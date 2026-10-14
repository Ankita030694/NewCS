'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import { ChevronDown, Scale, ExternalLink, ShieldCheck, CheckCircle2, AlertTriangle, FileText, HelpCircle, TrendingUp, Award, BookOpen, Building2, DollarSign, Check, Lock, Phone, Calendar, AlertCircle, CreditCard, Briefcase, Bookmark, ArrowRight, ShieldAlert, XCircle } from 'lucide-react';
export default function VerifyLoanSettlementLetterClient() {
    const [activeId, setActiveId] = useState<string>('quick-crux');
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        }, {
            rootMargin: '-100px 0px -40% 0px',
            threshold: 0.05
        });
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
        { id: 'quick-crux', label: 'Executive Brief: Key Takeaways' },
        { id: 'settlement-letter-anatomy', label: '1. Legal Anatomy of an OTS Letter' },
        { id: 'red-flags-comparison', label: '2. Authentic vs Fake Comparison Table' },
        { id: 'scoring-math-analytics', label: '3. Financial Math & Tax Waiver Rules' },
        { id: 'infographic-overview', label: 'Visual Defense Blueprint' },
        { id: 'verification-sop', label: '4. 6-Stage Verification SOP Checklist' },
        { id: 'letter-template', label: '5. Legal Verification Rebuttal Draft' },
        { id: 'escalation-matrix', label: '6. 3-Tier Escalation Matrix' },
        { id: 'milestone-timeline', label: '7. Resolution & Bureau Timeline' },
        { id: 'special-scenarios', label: '8. Cards, ARCs & Digital Loan Apps' },
        { id: 'company-profile', label: 'About CredSettle' },
        { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
        { id: 'official-sources', label: 'Regulatory Sources & Authorities' }
    ];
    const faqs = [
        {
            q: 'How do I verify if a loan settlement letter is genuine and legally valid?',
            a: "To check if a loan closure letter is genuine and by law binding. Conduct a multi-point audit: (1) Confirm the letter is on the bank or NBFC's valid firm letterhead bearing its firm Identification Number (CIN) and registered office address. (2) check the authorized signatory's name. Employee code. Branch/zonal stamp. (3) Cross-check that the closure payment account is an valid centralized calls or loan account in the lender's name (never a calls firm's own account or third-party UPI) : (4) Call the bank's valid retail assets/nodal operations desk or visit the home branch to confirm the internal OTS reference number in the Core Banking System (CBS). And (5) Ensure the letter contains an unambiguous. Unconditional full and final discharge clause under Section 63 of the Indian Contract Act. 1872."
        },
        {
            q: 'What critical clauses must be included in an authentic bank settlement letter?',
            a: "An authentic One-Time closure (OTS) sanction letter must contain: (1) Accurate clients full legal name. PAN. Exact Loan Account Number. (2) Total current ledger unpaid versus agreed One-Time closure consideration. (3) Explicit payment schedule with fixed tranche due dates. (4) Formal waiver breakdown specifying write-off of balance main sum. Contractual rates. fine charges. (5) Full and final debt satisfaction clause extinguishing all civil/penal legal steps (including withdrawal of Section 138 NI Act or Section 25 PSS Act complaints). And (6) A mandatory bank commitment to issue an unconditional No Dues letter (NDC) and update credit desk status (CIBIL. Experian. Equifax. CRIF) within 30 to 45 days."
        },
        {
            q: 'Can a recovery agent issue a valid loan settlement letter on WhatsApp or email?',
            a: "No. Third-party claims agents. Calls firms. Field telecallers have zero legal authority under Reserve Bank of India (RBI) rules to independently sanction loan closures or issue deal letters. Any closure proposal sent via unofficial email domains (e.g. Gmail, Yahoo. firm domains) or over WhatsApp chats without an authorized bank CBS-generated sanction letter is by law void and unenforceable. Paying money based on an agent's informal assurance almost always results in your payment being credited as a regular part-payment against penal rates. Leaving your main sum default active."
        },
        {
            q: 'What should I do if a settlement letter contains a conditional or revocable clause?',
            a: "If a closure letter contains ambiguous clauses\u2014such as 'subject to handling approval after payment'. 'handling reserves the right to recover remaining balance at a future date'. 'conditional upon third-party claims costs'\u2014do not make any payment. Demand that the bank's main sum Nodal head issue a revised. Irrevocable OTS sanction letter confirming that payment of the agreed amount constitutes complete and absolute satisfaction of the entire loan risk without any residual recourse."
        },
        {
            q: "How can I cross-verify a settlement letter directly with the bank's core banking system (CBS)?",
            a: "You can cross-check your closure letter by: (1) Visiting the loan sanctioning branch or Asset claims handling Branch (ARMB) in person and requesting the Credit Operations head to check the OTS Proposal Reference ID in the CBS. (2) Sending a formal registered email to the bank's centralized Customer Grievance / main sum Nodal head attaching the scanned letter. Or (3) Verifying that the generated payment deposit challan or virtual payment account explicitly maps to the bank's core system ledger under the closure head."
        },
        {
            q: 'What are the tax implications (TDS under Section 194R or Section 28(iv)) of a loan settlement waiver?',
            a: "For individual retail clients taking own loans. Credit cards. Consumer loans for own consumption. Loan main sum and rates waivers granted by banks under deal closures do not constitute taxable firm perks and are not subject to TDS under Section 194R or Section 28(iv) of the Income Tax Act. 1961. yet. For trade. MSME. Firm firm loans. Debt waivers may be treated as remission of risk or firm income under Section 41(1) or Section 28(iv). It is vital to check that the closure letter specifies the retail nature of the waiver to prevent erroneous tax notices."
        },
        {
            q: 'Is a digital or electronic settlement letter valid without a physical bank stamp?',
            a: "Yes. An electronically generated closure letter is by law valid under Sections 63 and 65B of the Indian Evidence Act. 1872 and the Information Technology Act. 2000. Provided it is generated from the bank's authorized firm email domain (e.g. @hdfcbank.com. @icicibank.com. @sbi.co.in) or downloaded straight from the lender's authenticated net banking portal. yet. For maximum legal safety. It is recommended to obtain a digitally signed PDF with a verifiable cryptographic letter (DSC) or a physically signed copy from the branch manager."
        },
        {
            q: 'What happens if I miss a payment deadline specified in the settlement letter?',
            a: "If you breach a closure payment milestone date without obtaining a prior written extension from the competent sanctioning authority. The bank's automated systems fast revoke the OTS pacts. In such cases. All granted concessions and waivers are cancelled. The entire original loan balance plus accrued penal rates is reinstated. Any amounts previously remitted are absorbed as regular rates arrears without closing the account. Always secure a formal OTS Addendum before the deadline if you anticipate a delay."
        },
        {
            q: 'How do I ensure that my settlement letter protects me against pending Section 138 cheque bounce or SARFAESI cases?',
            a: "Ensure the closure letter explicitly incorporates a 'Litigation Withdrawal and Restraint Covenant'. This clause must state that upon realization of the final closure tranche. The bank will unconditionally withdraw all pending penal complaints under Section 138 of the Negotiable Instruments Act. Section 25 of the Payment and closure Systems Act. Civil claims suits before the Civil Court or Debts claims court (DRT). File an appropriate memo of full satisfaction within 15 to 30 days."
        },
        {
            q: 'What is the statutory recourse if the bank accepts settlement money but later disowns the letter?',
            a: "If a bank disowns a closure letter after accepting your payment. You have multi-tiered legal legal remedies: (1) Issue a formal Legal Notice through a debt relief experts invoking the Doctrine of Promissory Estoppel and Section 63 of the Indian Contract Act. (2) File an urgent complaint with the RBI Integrated RBI officer portal (cms.rbi.org.in) alleging unfair banking practices and demanding issuance of the No Dues letter. And (3) Approach the State/District Consumer Disputes Redressal Commission for deficiency in service and unfair trade practice. Claiming damages and mandatory credit desk rectification."
        }
    ];
    return (<main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Swatch Color) */}
      <section className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center" style={{ backgroundColor: '#2452ae' }}>
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none"/>
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <p className="text-blue-100 font-semibold text-sm sm:text-base md:text-lg uppercase tracking-wider mb-2"> thorough Legal Checklist. </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            How to Verify a Bank&apos;s Loan Settlement Letter
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal md:font-medium text-white/95 leading-relaxed"> Before you pay a single rupee. Ensure your closure letter is by law binding. Use our checklist to spot fake or conditional closure letters. </p>

          {/* Single Rounded Full CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2">
              <span>Have Our Lawyers Verify Your Settlement Letter.</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. CRISP COUNTER STRIP COMPONENT */}
      <StatsStrip />

      {/* 3. WIDESCREEN 3-COLUMN LAYOUT */}
      <div className="w-full max-w-[1720px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* ================= LEFT COLUMN: STICKY TOC ================= */}
          <aside className="sticky top-6 hidden lg:block">
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 overflow-hidden">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
                <BookOpen className="w-4 h-4 text-[#1886ff]"/>
                <span className="text-xs font-black uppercase tracking-wider text-slate-800">
                  Table of Contents.
                </span>
              </div>
              <nav className="space-y-1 max-h-[calc(100vh-140px)] overflow-y-auto pr-1 text-xs">
                {navLinks.map((link) => {
            const isActive = activeId === link.id;
            return (<a key={link.id} href={`#${link.id}`} className={`block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug ${isActive
                    ? 'bg-blue-50 text-[#1886ff] font-bold border-l-3 border-[#1886ff] pl-2'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'}`}>
                      {link.label}
                    </a>);
        })}
              </nav>

              <div className="mt-4 pt-3 border-t border-slate-100 bg-blue-50/50 -mx-4 -mb-4 p-3 rounded-b-2xl">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0"/>
                  <span>Verified Legal Blueprint.</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight"> Updated per RBI Master Direction on deal closures &amp. CICRA Guidelines 2026. </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Brief / Key Takeaways Box (with #1886ff Theme Color) */}
            <div id="quick-crux" className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800">
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]"/>
                <span>EXECUTIVE BRIEF: VERIFYING A BANK&apos;S LOAN SETTLEMENT LETTER.</span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3"> <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5"/> <div> <strong className="text-slate-900 font-bold">Never Pay on Agent Drafts or WhatsApp Messages:</strong> Third-party calls firms have zero legal authority to sanction debt waivers. Under RBI rules. A closure is only valid if generated through the lender&apos. s Core Banking System (CBS) on valid firm letterhead with an authorized head&apos. s employee code. </div> </li>

                <li className="flex items-start gap-3"> <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5"/> <div> <strong className="text-slate-900 font-bold">Enforceable Discharge Under Section 63 Contract Act:</strong> The letter must contain an unequivocal &quot. Full and Final Satisfaction&quot. covenant. Without this clause. Banks can treat your payment as a regular partial claims against accrued fine charges and continue legal action for the balance. </div> </li>

                <li className="flex items-start gap-3"> <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5"/> <div> <strong className="text-slate-900 font-bold">Mandatory Litigation Withdrawal Clause:</strong> If the lender has initiated legal notices. Section 138 NI Act (cheque bounce) complaints. Section 25 PSS Act steps. The OTS letter must explicitly mandate withdrawal of all cases within 15 to 30 days of full payment. </div> </li>

                <li className="flex items-start gap-3"> <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5"/> <div> <strong className="text-slate-900 font-bold">Strict Direct Bank wire transfer Only:</strong> All closure funds must be transferred straight into the bank&apos. s centralized calls account or loan ledger via RTGS/NEFT/DD. Never pay funds to claims agents. Own UPI IDs. third-party calls firm accounts. </div> </li>

                <li className="flex items-start gap-3"> <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5"/> <div> <strong className="text-slate-900 font-bold">legal 30-Day NDC &amp. CIBIL Reporting Mandate:</strong> An authentic closure letter binds the institution to issue an unconditional No Dues letter (NDC) and update all four credit bureaus (CIBIL. Experian. Equifax. CRIF) to &quot. Settled&quot. Status within 30 to 45 days. </div> </li>
              </ul>
            </div>

            {/* SECTION 1: LEGAL ANATOMY */}
            <section id="settlement-letter-anatomy" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4"/>
                <span>Statutory &amp; Banking Fundamentals.</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                1. Legal Anatomy of an Authentic Bank OTS Letter
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> In Indian banking law. A One-Time closure (OTS) sanction letter is not a casual correspondence. It is a formal novation of contract governed by. <strong>Section 63 of the Indian Contract Act. 1872.</strong>. Under this statute. A creditor may dispense with or pay. Wholly or in part. The performance of the promise made to them. Accept instead of it any satisfaction which they think fit. </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> yet. For an OTS sanction letter to be by law binding and capable of extinguishing the underlying debt. It must satisfy rigorous legal criteria under the. <strong>Reserve Bank of India (Prudential Framework for relief of Stressed Assets) Master Directions.</strong> and the <strong>Information Technology Act. 2000.</strong>. When a clients receives a closure proposal. It must contain 6 foundational structural elements: </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="flex items-center gap-2 text-blue-700 font-bold mb-1.5 text-sm">
                    <Building2 className="w-4 h-4"/>
                    <span>Corporate Identity &amp; CBS Sanction Code.</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Must appear on the bank&apos. S registered firm letterhead containing its firm Identification Number (CIN). Registered office address. A unique Core Banking System (CBS) OTS proposal reference number. </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold mb-1.5 text-sm">
                    <ShieldCheck className="w-4 h-4"/>
                    <span>Authorized Competent Authority Sanction.</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Must be executed by a designated head possessing delegated lending/claims authority (Chief Manager. Assistant General Manager. Zonal Credit board) with their full name. Designation. valid employee code. </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="flex items-center gap-2 text-purple-700 font-bold mb-1.5 text-sm">
                    <FileText className="w-4 h-4"/>
                    <span>Explicit Waiver &amp; Sacrifice Breakdown.</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Must detail the total unpaid ledger balance. The exact agreed closure consideration. The exact write-off amounts categorized across main sum. Unapplied rates. fine charges. legal fees. </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="flex items-center gap-2 text-amber-700 font-bold mb-1.5 text-sm">
                    <Calendar className="w-4 h-4"/>
                    <span>Time-Bound Tranche Schedule &amp; Mode.</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Must clearly define the payment milestones. Precise maturity cut-off dates. Authorized banking channels (RTGS. NEFT. Demand Draft. centralized virtual payment accounts). </p>
                </div>
              </div>
            </section>

            {/* SECTION 2: COMPARISON TABLE */}
            <section id="red-flags-comparison" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4"/>
                <span>Document Verification Matrix.</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                2. Authentic OTS Letter vs Fake Drafts Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Thousands of Indian clients fall victim every month to fraudulent claims agents who issue fabricated &quot. closure letters&quot. On Photoshop or unofficial letterheads to extract money before month-end targets. Examine this 4-sided comparison matrix before paying any funds: </p>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="rounded-2xl border border-slate-300 bg-white overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Verification Parameter.</th>
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Authentic Bank OTS Letter.</th>
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Fake / Agency Draft.</th>
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Conditional / Revocable Letter.</th>
                        <th className="p-3.5 md:p-4 font-bold">Informal Email / WhatsApp Draft.</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-black text-slate-900 bg-slate-50/50"> Issuing Source &amp. Domain. </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-emerald-700 bg-emerald-50/20"> valid Bank Letterhead + checked firm email (@bank.com). </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-rose-700 bg-rose-50/20"> calls firm letterhead or Gmail / Yahoo / Outlook ID. </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 text-amber-800 bg-amber-50/20"> Bank letterhead. issued by unlawful frontline executive. </td>
                        <td className="p-3.5 md:p-4 text-rose-700 bg-rose-50/20"> Plain WhatsApp text. Screenshot. unformatted email body. </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-black text-slate-900 bg-slate-50/50"> Signatory Authority. </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-emerald-700 bg-emerald-50/20"> Authorized head / AGM / Scale-IV Manager with Employee ID. </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 text-rose-700 bg-rose-50/20"> claims telecaller, &quot. Legal Manager&quot. without Employee Code. </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 text-amber-800 bg-amber-50/20"> Assistant Manager without delegated OTS sanction board approval. </td>
                        <td className="p-3.5 md:p-4 text-rose-700 bg-rose-50/20"> Zero checked signatory. informal agent phone number only. </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-black text-slate-900 bg-slate-50/50"> Payment Destination. </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-emerald-700 bg-emerald-50/20"> valid Loan Account or Bank Central Pool Account (RTGS/NEFT). </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 text-rose-700 bg-rose-50/20"> firm account. Third-party current account. own UPI. </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 text-amber-800 bg-amber-50/20"> Direct loan account. payment credited as partial EMI. </td>
                        <td className="p-3.5 md:p-4 text-rose-700 bg-rose-50/20"> Dynamic UPI QR code sent over WhatsApp or SMS gateway. </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-black text-slate-900 bg-slate-50/50"> Discharge Clause. </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-emerald-700 bg-emerald-50/20"> Unconditional full &amp. final discharge. Section 138/DRT withdrawal. </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 text-rose-700 bg-rose-50/20"> No legal discharge. silent on remaining balance and legal cases. </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 text-amber-800 bg-amber-50/20"> Ambiguous &quot. Subject to higher board review&quot. clause. </td>
                        <td className="p-3.5 md:p-4 text-rose-700 bg-rose-50/20"> Zero legal discharge. by law treated as voluntary part payment. </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-black text-slate-900 bg-slate-50/50"> CIBIL / desk Impact. </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-emerald-700 bg-emerald-50/20"> Mandatory update to &quot. Settled&quot. / ₹0 balance within 30 days. </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 text-rose-700 bg-rose-50/20"> Zero desk update. account continues accumulating overdue DPD. </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 text-amber-800 bg-amber-50/20"> Disputed desk status. balance continues to reflect as overdue. </td>
                        <td className="p-3.5 md:p-4 text-rose-700 bg-rose-50/20"> Reported as &quot. Overdue&quot. / &quot. Written Off&quot. with active claims. </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-xs md:text-sm text-slate-600 italic"> <strong>key Rule:</strong> If your closure letter does not guarantee an unconditional No Dues letter and full withdrawal of pending penal/civil cases. Do not transfer a single rupee. </p>
            </section>

            {/* SECTION 3: TECHNICAL SCORING MATH & TAX WAIVERS */}
            <section id="scoring-math-analytics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4"/>
                <span>Financial &amp; Tax Accounting.</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                3. Settlement Math, Accounting &amp; Section 194R Tax
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> grasp the technical mathematics behind your bank&apos. s closure calculation is essential to ensure that you are not paying inflated penal rates or triggering unforeseen tax debts under Indian income tax law. </p>

              {/* Formula Breakdown Card */}
              <div className="rounded-2xl border-2 border-blue-200 bg-white p-5 md:p-6 shadow-xs space-y-4">
                <h3 className="text-sm md:text-base font-black text-slate-900 flex items-center gap-2"> <FileText className="w-4 h-4 text-[#1886ff]"/> Bank OTS Ledger Decomposition Formula </h3>
                <div className="space-y-3 text-xs md:text-sm text-slate-700">
                  <div className="p-3 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs leading-relaxed">
                    Total Outstanding Ledger (TOL) = Principal Outstanding (P) + Unapplied Contractual Interest (UCI) + Penal Interest &amp. Late Charges (PI) + Legal &amp; Recovery Expenses (LE).
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                      <span className="font-bold text-blue-900 block mb-1">Target Settlement Range:</span>
                      <span className="text-slate-700 text-xs">Typically 30% to 55% of Principal Outstanding (P) for unsecured loans defaulted beyond 180+ DPD.</span>
                    </div>
                    <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                      <span className="font-bold text-emerald-900 block mb-1">Mandatory 100% Waiver:</span>
                      <span className="text-slate-700 text-xs">All accrued Penal Interest (PI) and Legal Expenses (LE) must be fully waived under RBI OTS circulars.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tax Implications Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2"> <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Retail Loans: Zero TDS Under Section 194R </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Under CBDT Circular No. 12/2022. Waivers granted on own loans. Consumer loans. credit cards for own use are. <strong>fully exempt from Section 194R TDS.</strong>. The bank cannot deduct 10% TDS or withhold your No Dues letter on tax grounds. </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2"> <span className="w-2 h-2 rounded-full bg-amber-500"></span> trade &amp. MSME Loans: Section 41(1) / 28(iv) </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> For firm clients and proprietorship firms where rates was previously claimed as a firm tax deduction. The waived rates component may be treated as remission of risk under Section 41(1). Ensure your closure letter categorizes the waiver accurately. </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs md:text-sm text-blue-950 leading-relaxed">
                <strong>CIBIL Bureau Algorithmic Weightage (35% Payment History):</strong> When an OTS is executed, the bureau status shifts from &quot;Active Default / NPA&quot; to &quot;Settled&quot;. While this stops active DPD compounding, the unpaid waiver is recorded as a loss. In our subsequent section, we outline the exact timeline to convert this record to &quot;Closed&quot. By paying the differential waiver when financially stable.
              </div>
            </section>

            {/* HIGH-IMPACT INFOGRAPHIC BANNER EMBEDDED (Between Sections 3 and 4) */}
            <div id="infographic-overview" className="scroll-target bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg my-10 text-slate-800">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3.5 px-5 flex items-center justify-between border-b-2 border-blue-500">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-white text-xs shadow-xs">
                    <Scale className="w-4 h-4"/>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-200 block">
                      Legal Defense &amp; Action Blueprint.
                    </span>
                    <h3 className="text-sm md:text-base font-black text-white leading-tight"> How to check a Bank Loan closure note: Checklist &amp. SOP </h3>
                  </div>
                </div>
                <a href="/images/infographics/verify-loan-settlement-letter.jpg" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-200 hover:text-white font-bold flex items-center gap-1 transition-colors">
                  <span className="hidden sm:inline">Open Full Size</span>
                  <ExternalLink className="w-3.5 h-3.5"/>
                </a>
              </div>

              {/* Compact Landscape Infographic Image */}
              <div className="p-3 md:p-4 bg-slate-50">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-white">
                  <img src="/images/infographics/verify-loan-settlement-letter.jpg" alt="How to Verify a Bank Loan Settlement Letter Checklist Infographic" className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300" loading="lazy" width={1376} height={768} />
                </div>
              </div>

              {/* Quick Crux Footer Strip */}
              <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600"/>
                  <span><strong>Key Takeaway:</strong> Cross-verify CIN, CBS code, authorized signatory employee ID, and direct bank remittance before paying.</span>
                </div>
                <Link href="/contact" className="text-[#1886ff] font-bold hover:underline">
                  Have Our Lawyers Verify Your Letter &rarr;
                </Link>
              </div>
            </div>

            {/* SECTION 4: 6-STAGE VERIFICATION SOP */}
            <section id="verification-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4"/>
                <span>Standard Operating Procedure.</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                4. 6-Stage SOP to Verify a Bank Settlement Letter
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Follow this sequential 6-stage verification protocol before initiating any RTGS. NEFT. Demand Draft wire transfer to your lender: </p>

              <div className="space-y-4">
                {/* Stage 1 */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900"> Stage 1: check firm Letterhead. CIN &amp. Registered Address </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed"> Scrutinize the header and footer of the papers. Ensure it displays the exact firm name of the lending entity (e.g.,. <em>HDFC Bank Limited.</em>, <em>Bajaj Finance Limited.</em>, <em>SBI Cards and Payment Services Ltd.</em>). Its 21-digit firm Identification Number (CIN). registered head office address. Compare these against Ministry of firm Affairs (MCA) records. </p>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900"> Stage 2: Cross-check Authorized Signatory &amp. Employee Code </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed"> Every authentic bank OTS letter must bear the real or cryptographic digital signature (DSC) of a designated bank head along with their valid Employee ID / Staff Number and Branch / Cluster stamp. If the letter is signed by a third-party firm executive. It is invalid under RBI Master Directions on claims Agents. </p>
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900"> Stage 3: Validate Loan Account Details &amp. CBS Proposal Reference ID </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed"> Match your exact 16-digit Loan Account Number. Customer ID (CIF). PAN card number. Confirm that the letter quotes a unique. <strong>CBS OTS Sanction Proposal Number.</strong>. Call the bank&apos. s centralized retail asset phone banking or visit the base branch to confirm that this proposal ID is approved in the live system. </p>
                  </div>
                </div>

                {/* Stage 4 */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900"> Stage 4: Scrutinize Full &amp. Final Satisfaction &amp. Litigation Covenants </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed"> check that the letter explicitly declares that upon realization of the agreed closure sum. The entire loan risk shall stand. <strong>100% extinguished in full and final satisfaction.</strong>. It must mandate the withdrawal of all pending penal complaints under Section 138 NI Act. Section 25 PSS Act. Civil claims steps. </p>
                  </div>
                </div>

                {/* Stage 5 */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900"> Stage 5: Audit Payment Modes (Strictly Direct Bank wire transfer Only) </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed"> Confirm that payment instructions require wire transfer straight into your loan account number or the bank&apos. s centralized nodal calls account (with checked IFSC). <strong>Never pay via cash to field agents or transfer money to third-party firm UPI handles.</strong> </p>
                  </div>
                </div>

                {/* Stage 6 */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    6
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900"> Stage 6: Enforce 30-Day Mandatory NDC &amp. CIBIL desk Commitment </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed"> The closure letter must clearly state that within. <strong>30 calendar days.</strong> of receiving the final payment tranche. The bank shall issue an unconditional real/online No Dues letter (NDC) and transmit the updated &quot. Settled&quot. Status feed with ₹0 balance to CIBIL. Experian. Equifax. CRIF. </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 5: LEGAL NOTICE MONOSPACE TERMINAL DRAFT */}
            <section id="letter-template" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4"/>
                <span>Ready-to-Use Legal Draft.</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                5. Legal Notice Draft for Letter Verification
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> If a calls executive provides an ambiguous or unofficial closure draft. Do not pay. Send this formal legal requisition to the bank&apos. s main sum Nodal head and Retail Asset Operations division to compel issuance of a checked CBS-backed OTS letter: </p>

              {/* Monospace Code / Legal Notice Draft Container */}
              <div className="rounded-2xl border border-slate-700 bg-slate-900 text-slate-100 p-5 md:p-6 shadow-sm overflow-x-auto text-xs font-mono leading-relaxed">
                <div className="text-blue-400 font-bold mb-3 pb-2 border-b border-slate-800 flex items-center justify-between">
                  <span>FORMAL REQUISITION FOR AUTHENTICATED CBS OTS SANCTION LETTER.</span>
                  <span className="text-[10px] text-slate-400 uppercase">Registered Post / Official Email Format.</span>
                </div>
                <pre className="whitespace-pre-wrap text-slate-200">
        {`To,
The Principal Nodal Officer / Head of Retail Asset Operations,
[Name of Scheduled Commercial Bank / NBFC],
[Registered Zonal / Corporate Office Address],
Email: [nodalofficer@bankname.com / retailcollections@bankname.com]

Subject: Formal Requisition for Authenticated Core Banking System (CBS) One-Time Settlement (OTS) Sanction Letter & Statutory Undertaking under Section 63 of the Indian Contract Act, 1872 for Loan Account No: [Insert Loan A/C No.]

Respected Sir/Madam,

I, [Borrower Full Legal Name], residing at [Borrower Full Address], holding PAN: [Insert PAN] and Aadhaar: [Insert Aadhaar], am the borrower for the captioned Loan Facility [Account No: XXXXXXXX] sanctioned by your esteemed institution.

1. That an informal compromise proposal has been communicated to me by your recovery representatives offering to settle the outstanding dues for a total negotiated sum of ₹[Agreed Settlement Amount] against the current ledger balance.
2. That in terms of Reserve Bank of India Master Directions on Compromise Settlements (RBI/2023-24/40) and Sections 63 & 65B of the Indian Evidence Act, 1872, an informal communication or agency draft does not constitute an enforceable legal novation.
3. That prior to remitting the agreed settlement consideration into your institution's designated collection account, I hereby call upon your competent sanctioning authority to issue a formal, irrevocable One-Time Settlement (OTS) Sanction Letter containing:
   a) Official corporate letterhead bearing the Bank's Corporate Identification Number (CIN) and live CBS Proposal Reference Number.
   b) Clear authorization signed by a Scale-IV / Authorized Bank Officer displaying their Name, Designation, and Employee Code.
   c) Explicit waiver breakdown confirming 100% write-off of balance principal, unapplied interest, and accumulated penal charges upon receipt of ₹[Agreed Settlement Amount].
   d) An unequivocal Litigation Withdrawal Covenant committing to unconditionally withdraw all pending criminal complaints under Section 138 NI Act / Section 25 PSS Act and civil recovery suits within 30 days of payment.
   e) A binding undertaking to issue an unconditional No Dues Certificate (NDC) and report the account status as "SETTLED" with ₹0 current balance to TransUnion CIBIL, Experian, Equifax, and CRIF High Mark within 30 calendar days pursuant to Section 21 of CICRA 2005.

4. Please be advised that no funds will be remitted to any intermediary or third-party channel in the absence of this authenticated CBS sanction letter.

Kindly transmit the official OTS Sanction Letter within 7 business days.

Yours sincerely,

___________________________
[Signature]
[Borrower Name]
[Contact Mobile Number]
[Registered Email Address]
Date: [DD/MM/YYYY]
Place: [City, State]`}
                </pre>
              </div>
            </section>

            {/* SECTION 6: 3-TIER ESCALATION MATRIX */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4"/>
                <span>Grievance Redressal Architecture.</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                6. 3-Tier Banking &amp; RBI Ombudsman Escalation Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> If a bank branch delays validating your closure letter. Issues conditional approvals. Refuses to honor a previously issued OTS sanction after receiving your payment. Follow this bank escalation hierarchy: </p>

              {/* Escalation Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-xs font-black text-[#1886ff] uppercase tracking-wider mb-1">
                    Tier 1 (Days 1–7).
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5"> Branch &amp. Asset claims Desk </h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> Submit written verification requisition to the Branch Manager and Asset claims handling Branch (ARMB). Log a formal grievance on the bank&apos. s online portal to generate an internal CRM ticket number. </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-xs font-black text-blue-600 uppercase tracking-wider mb-1">
                    Tier 2 (Days 8–21).
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5"> main sum Nodal head (PNO) </h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> Escalate to the bank&apos. s apex grievance authority (PNO / Chief Grievance head). The PNO possesses administrative authority to override branch delays. Validate CBS records. issue authentic sanction letters. </p>
                </div>

                <div className="p-4 rounded-xl bg-white border-2 border-emerald-300 bg-emerald-50/20 shadow-2xs">
                  <div className="text-xs font-black text-emerald-700 uppercase tracking-wider mb-1">
                    Tier 3 (Day 22+).
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5"> RBI Integrated RBI officer </h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> File a legal complaint at. <strong>cms.rbi.org.in</strong> under the RBI Integrated RBI officer Scheme. 2021. The RBI officer enforces letter terms. Mandates NDC delivery. awards delay compensation. </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: RESOLUTION & MILESTONE TIMELINE */}
            <section id="milestone-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4"/>
                <span>Turnaround &amp; Bureau Milestones.</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                7. Chronological Settlement Verification &amp; Bureau Update Timeline
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> A complete closure cycle. from first papers audit to final credit desk status rectification. follows a structured legal timeline: </p>

              {/* 4-Sided Bordered Timeline Table */}
              <div className="rounded-2xl border border-slate-300 bg-white overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                        <th className="p-3.5 border-r border-blue-500/50 font-bold">Timeline Milestone.</th>
                        <th className="p-3.5 border-r border-blue-500/50 font-bold">Legal &amp; Banking Action.</th>
                        <th className="p-3.5 border-r border-blue-500/50 font-bold">Institutional Responsibility.</th>
                        <th className="p-3.5 font-bold">Borrower Safeguards.</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900"> Day 1. 3 </td>
                        <td className="p-3.5 border-r border-slate-200"> Draft review. CBS Proposal ID validation. authorized signatory verification. </td>
                        <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900"> Bank Credit Operations / CredSettle Legal Team. </td>
                        <td className="p-3.5"> Zero wire transfer until letterhead. CIN. employee code are 100% checked. </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900"> Day 4. 10 </td>
                        <td className="p-3.5 border-r border-slate-200"> payment of closure consideration straight into loan account via RTGS/NEFT. </td>
                        <td className="p-3.5 border-r border-slate-200 font-semibold text-blue-700"> clients &amp. paying Bank. </td>
                        <td className="p-3.5"> Preserve UTR timestamped receipt. Account statement debit. deposit counterfoil. </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900"> Day 11. 30 </td>
                        <td className="p-3.5 border-r border-slate-200"> Issuance of unconditional real/digital No Dues letter (NDC). case withdrawal. </td>
                        <td className="p-3.5 border-r border-slate-200 font-semibold text-emerald-700"> Lender Legal &amp. Loan Operations Desk. </td>
                        <td className="p-3.5"> Confirm formal memo of withdrawal filed in Court / DRT under Section 138 NI Act. </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900"> Day 31. 45 </td>
                        <td className="p-3.5 border-r border-slate-200"> Monthly data tape upload to CIBIL. Experian. Equifax. CRIF reflecting &quot. Settled&quot. / ₹0 balance. </td>
                        <td className="p-3.5 border-r border-slate-200 font-semibold text-emerald-700"> Bank Credit desk Reporting Division. </td>
                        <td className="p-3.5"> Download fresh CIBIL CIR report. file desk dispute if status not updated. </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 8: SPECIAL REAL-WORLD SCENARIOS */}
            <section id="special-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4"/>
                <span>Complex Institutional Scenarios.</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                8. Scenarios: Credit Cards, ARCs &amp; Fintech Apps
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-1.5"> <CreditCard className="w-4 h-4 text-[#1886ff]"/> Credit Card closures </h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> Card issuers (HDFC. SBI Card. ICICI. Axis. RBL) often use outsourced firms. Ensure the closure letter is issued straight by the bank&apos. s Card Operations Division and confirms the permanent destruction and cancellation of card plastic and all add-on cards. </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-1.5"> <Building2 className="w-4 h-4 text-[#1886ff]"/> Debt Assigned to ARCs </h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> If your loan was assigned to an Asset Reconstruction Company (ARCIL. Phoenix. CFM. Edelweiss ARC) under SARFAESI Section 5. check the. <strong>Assignment Deed / Novation pacts.</strong>. The closure letter must be executed by the ARC as the legal assignee. </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-1.5"> <Briefcase className="w-4 h-4 text-[#1886ff]"/> Digital Fintech NBFC Apps </h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> For app loans (KreditBee. MoneyView. CASHe. PaySense. Ring). Closure letters must be generated by the. <strong>underlying RBI-registered NBFC lender.</strong> (e.g. Krazybee Services. Whizdm Finance). Never the white-label app front-end or firm calls portals. </p>
                </div>
              </div>
            </section>

            {/* COMPANY SECTION (Placed inside middle column before FAQ) */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* INTERACTIVE COLLAPSIBLE FAQ ACCORDION */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4 pt-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4"/>
                <span>Clarifications &amp; Expert Answers.</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                Frequently Asked Questions on Verifying a Loan Settlement Letter
              </h2>
              <p className="text-xs md:text-sm text-slate-600"> Click on any question below to view detailed legal and banking answers checked by our debt relief experts: </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (<div key={idx} className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-2xs transition-colors">
                      <button type="button" onClick={() => toggleFaq(idx)} className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:bg-slate-50 transition-colors" aria-expanded={isOpen}>
                        <span className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-blue-50 text-[#1886ff] flex items-center justify-center text-xs font-extrabold flex-shrink-0">
                            Q
                          </span>
                          {faq.q}
                        </span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180 text-[#1886ff]' : ''}`}/>
                      </button>
                      {isOpen && (<div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 border-t border-slate-100 bg-slate-50/50 leading-relaxed">
                          {faq.a}
                        </div>)}
                    </div>);
        })}
              </div>
            </section>

            {/* REGULATORY SOURCES & OFFICIAL LINKS STRIP */}
            <section id="official-sources" className="scroll-target space-y-3 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-600">
                <BookOpen className="w-4 h-4 text-[#1886ff]"/>
                <span>Statutory Authority &amp; Official Citations.</span>
              </div>
              <p className="text-xs text-slate-600"> All legal procedures. Timelines. rights described on this page are grounded in valid Indian legal frameworks: </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
                <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] flex items-center justify-between transition-colors shadow-2xs">
                  <span className="font-semibold truncate">1. RBI Master Directions (Compromise Settlements).</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-slate-400"/>
                </a>
                <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] flex items-center justify-between transition-colors shadow-2xs">
                  <span className="font-semibold truncate">2. Indian Contract Act 1872 §63 (India Code).</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-slate-400"/>
                </a>
                <a href="https://www.cibil.com/dispute-resolution" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] flex items-center justify-between transition-colors shadow-2xs">
                  <span className="font-semibold truncate">3. CIBIL Dispute Resolution Portal.</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-slate-400"/>
                </a>
                <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] flex items-center justify-between transition-colors shadow-2xs">
                  <span className="font-semibold truncate">4. RBI Integrated Ombudsman (CMS).</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-slate-400"/>
                </a>
                <a href="https://financialservices.gov.in" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] flex items-center justify-between transition-colors shadow-2xs">
                  <span className="font-semibold truncate">5. Ministry of Finance (DFS).</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-slate-400"/>
                </a>
              </div>
            </section>

            {/* 10 RELATED INTERNAL TOPIC BADGES */}
            <div className="pt-6 border-t border-slate-200 space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-800"> Explore Related Credit &amp. closure Resources: </h3>
              <div className="flex flex-wrap gap-2">
                <Link href="/get-noc-after-loan-settlement" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs">
                  Get NOC After Loan Settlement
                </Link>
                <Link href="/convert-settled-status-to-closed" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs">
                  Convert Settled Status to Closed
                </Link>
                <Link href="/remove-settled-status-from-cibil" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs">
                  Remove Settled Status from CIBIL
                </Link>
                <Link href="/dispute-wrong-settled-status-cibil" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs">
                  Dispute Wrong Settled Status in CIBIL
                </Link>
                <Link href="/settlement-of-loan-letter" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs">
                  Settlement of Loan Letter Format
                </Link>
                <Link href="/credit-card-settlement-hdfc" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs">
                  HDFC Credit Card Settlement
                </Link>
                <Link href="/is-loan-settlement-illegal-in-india-truth" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs">
                  Is Loan Settlement Illegal in India?
                </Link>
                <Link href="/rbi-rules-for-recovery-agents" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs">
                  RBI Recovery Agent Rules 2026
                </Link>
                <Link href="/services/personal-loan-settlement" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs">
                  Personal Loan Settlement Services
                </Link>
                <Link href="/legal-help-for-non-closure-of-settled-loan" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs">
                  Legal Help for Non-Closure of Settled Loan
                </Link>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: STICKY AUTHOR & CTA CARDS ================= */}
          <aside className="sticky top-6 space-y-6">
            
            {/* Card 1: Author Bio Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <div className="flex items-center gap-3">
                <Link href="/author/ashish-jhangra" className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-extrabold text-sm hover:bg-blue-200 transition-colors flex-shrink-0" title="View Ashish Jhangra Profile">
                  AJ
                </Link>
                <div>
                  <Link href="/author/ashish-jhangra" className="text-sm font-bold text-slate-900 hover:text-[#1886ff] transition-colors block">
                    Ashish Jhangra
                  </Link>
                  <p className="text-[11px] font-semibold text-[#1886ff]"> Legal &amp. Debt relief experts. </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed"> Specialized in banking compliance. Debt relief strategies. Loan dispute talks. CIBIL rectification with extensive experience resolving complex NPA defaults across Indian banks. </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <Link href="/author/ashish-jhangra" className="text-[#1886ff] hover:underline font-semibold flex items-center gap-1">
                  <span>View Author Profile.</span>
                  <ArrowRight className="w-3 h-3"/>
                </Link>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3"/> CredSettle Panel.
                </span>
              </div>
            </div>

            {/* Card 2: Emergency Advocate CTA Card */}
            <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-6 shadow-md text-white space-y-4">
              <div className="inline-flex items-center gap-1.5 py-1 px-3 rounded-lg bg-white/15 text-blue-100 text-[11px] font-bold tracking-wide">
                <Lock className="w-3.5 h-3.5"/>
                <span>100% CONFIDENTIAL.</span>
              </div>
              <div>
                <p className="text-xl font-bold text-white leading-tight"> Received a Loan closure Letter? </p>
                <p className="text-blue-100 text-sm mt-2 leading-relaxed font-normal"> Don&apos. t risk paying into fake accounts or revocable proposals. Our legal experts check your letterhead. CBS codes. discharge clauses before you pay. </p>
              </div>
              <Link href="/contact" className="block w-full text-center bg-white text-blue-900 font-bold py-3.5 px-4 rounded-xl hover:bg-slate-100 transition-all shadow-md text-sm transform hover:-translate-y-0.5">
                Have Our Lawyers Verify Your Settlement Letter
              </Link>
              <div className="text-center pt-1">
                <a href="tel:+918800226635" className="text-xs sm:text-sm text-blue-100 hover:text-white font-semibold flex items-center justify-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-white"/>
                  <span>Call: +91-8800226635.</span>
                </a>
              </div>
            </div>

            {/* Card 3: Trust Signals Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-5 space-y-3 text-xs shadow-xs">
              <p className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5"> <ShieldCheck className="w-3.5 h-3.5 text-emerald-600"/> CredSettle Trust Commitments. </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"/> <span><strong>Zero Upfront Risk:</strong> Success-linked closure fees.</span> </li>
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"/> <span><strong>Direct Bank wire transfer:</strong> Zero middleman fund holding.</span> </li>
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"/> <span><strong>RBI &amp. CICRA Compliance:</strong> 100% lawful dispute handling.</span> </li>
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"/> <span><strong>Pan-India Representation:</strong> Dedicated debt relief specialists.</span> </li>
              </ul>
            </div>

          </aside>

        </div>
      </div>
    </main>);
}
