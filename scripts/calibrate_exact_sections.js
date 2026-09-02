const fs = require('fs');

function countWords(str) {
  if (!str) return 0;
  return str.trim().split(/\s+/).filter(w => w.length > 0).length;
}

const hero = {
  name: "Hero Section",
  target: "50-60",
  text: `Credit Card Settlement Calculator: Estimate Waiver & Settlement Amount in India. Calculate your credit card settlement payout, unbundle compounding 42% APR finance charges from core principal spends, and estimate realistic 45% to 65% debt waivers under Reserve Bank of India prudential compromise settlement guidelines.`
};

const execSummary = {
  name: "Executive Summary (#F4F8FE Box)",
  target: "130-150",
  text: `Credit card debt settlement operates through a bilateral compromise between cardholders and lending banks under RBI prudential settlement norms.
Unbundled finance charges, late fees, and compounding 42% to 48% APR are routinely waived at 100% during settlement negotiations.
Core principal swipe balances generally receive structured compromise discounts ranging between 40% and 65% depending on delinquency vintage.
Accounts entering 90-day Non-Performing Asset (NPA) status force lenders to create 100% capital provisioning reserves against Tier-1 capital.
Credit cards represent purely unsecured exposures lacking collateral, completely exempting cardholders from SARFAESI property attachment actions.
Settlements can be executed via a single discounted lump-sum remittance or divided across two to three structured monthly tranches.
Official bank settlement sanction letters must be verified on corporate letterhead to ensure explicit zero-residual liability covenants.
Credit bureaus report negotiated settlements as Settled, which can later be upgraded to Closed under Section 21 of CICRA 2005.`
};

const sec1 = {
  name: "Section 1: Debt Economics & NPA Dynamics",
  target: "170-190",
  text: `Delinquent credit card debt in India is governed by distinct banking economics that directly shape settlement negotiations. When an unsecured credit card account reaches 90 days of continuous non-payment, the Reserve Bank of India mandates its immediate classification as a Non-Performing Asset (NPA). Under Master Direction guidelines on asset classification and provisioning, scheduled commercial banks and NBFCs must allocate 100% capital provisions against unsecured NPAs. This regulatory requirement locks away vital Tier-1 regulatory capital, degrading net profitability and capital adequacy ratios.
Because credit card lines are entirely unsecured instruments devoid of physical collateral, lenders cannot invoke the SARFAESI Act to attach immovable property. Initiating civil summary suits under Order 37 of the CPC offers an unfavorable cost-to-recovery ratio for retail balances. Financial institutions are commercially incentivized to accept a discounted One-Time Settlement (OTS), writing off uncollectible finance charges to recover immediate liquid cash and release frozen capital provisions.`
};

const sec2 = {
  name: "Section 2: Financial Breakdown & Settlement Math",
  target: "170-190",
  text: `The gross statement balance displayed on a delinquent credit card statement is heavily distorted by compounding monthly finance charges and penal interest. Card issuers in India levy annual percentage rates ranging from 42% to 48% APR, exceeding 3.5% to 4.0% monthly. Banks continuously add late payment penalties, over-limit surcharges, and 18% GST applied to every billed fee. Over a 180-day delinquency lifecycle, these additions frequently constitute 40% to 55% of the claimed balance.
During forensic settlement calculations, this inflated balance is unbundled back to core principal swipe spends. Settlement committees recognize that penal interest and late fees represent accrued accounting income rather than disbursed capital. Banks readily execute a 100% write-off on all penal interest and GST surcharges, while granting a 30% to 50% haircut on core principal dues, yielding an overall 50% to 75% gross waiver.`
};

const sec3 = {
  name: "Section 3: 4-Sided Bordered Comparison Matrix",
  target: "120-140",
  text: `When confronting delinquent credit card debt, cardholders must evaluate resolution mechanisms against commercial and legal parameters. While loan restructuring extends tenures, it preserves 100% principal and continues interest accruals. Conversely, a negotiated One-Time Settlement delivers an immediate financial haircut, extinguishing legal exposure and freeing cash flow.
One-Time Settlement: 50% to 75% Total Waiver, Immediate closure via lump-sum/tranches, Complete legal liability discharge, Reported as Settled.
Loan Restructuring: 0% Principal Waiver, EMI burden continues for 36-60 months, Standard loan contract maintained, Reported as Restructured.
Lok Adalat Settlement: 40% to 60% Waiver, Fixed consent award payout, Judicial decree finality, Reported as Settled via Lok Adalat.
Civil Litigation: 0% (Plus legal court costs), Prolonged defense expenses, Adversarial court proceedings, Suit Filed flag.
Inaction & Default: Compounding 42% APR inflation, Total financial drain, High notice risk, Score collapse below 550.`
};

const sec4 = {
  name: "Section 4: Technical CIBIL Algorithm & Scoring Math",
  target: "150-170",
  text: `Credit scores generated by TransUnion CIBIL, Experian, CRIF High Mark, and Equifax are calculated using multi-variable algorithms that assign fixed weights to borrowing behavior. Payment history constitutes the largest component at 35%, reflecting historical Days Past Due markers. Credit utilization ratio represents 30%, evaluating revolving balances against sanctioned limits. The remaining 35% is distributed across credit history vintage (15%), credit mix between secured and unsecured debt (10%), and hard inquiry frequency (10%).
When a credit card is resolved through a compromised One-Time Settlement, the lender reports the status as Settled, triggering an immediate credit score decline of 75 to 150 points. However, a Settled status does not permanently destroy borrowing capacity. By maintaining zero missed payments across existing credit lines and introducing a secured credit card, cardholders systematically rebuild their score above 750 within 18 to 24 months. Under Section 21 of CICRA 2005, cardholders retain the statutory right to repay the waived balance later to update records to Closed.`
};

const sec5 = {
  name: "Section 5: Visual Infographic Asset Card",
  target: "35-45",
  text: `Visual Framework: Credit Card Settlement Architecture. Figure 1.0: End-to-end institutional workflow from forensic principal audit to bureau NDC release. High-resolution roadmap illustrating six sequential settlement milestones and regulatory compliance safeguards under Reserve Bank of India compromise frameworks.`
};

const sec6 = {
  name: "Section 6: Step-by-Step SOP (6 Stages)",
  target: "250-280",
  text: `Successfully executing a credit card settlement requires strict procedural discipline to ensure complete legal immunity and optimal financial waivers. The following six-stage Standard Operating Procedure governs professional debt resolution:
Stage 1: Forensic Statement Audit. Our resolution panel isolates historical transaction ledgers, separating core swipe principal from inflated 42% APR, overdue late fees, and GST levies to establish the true baseline debt.
Stage 2: Hardship Dossier Compilation. We assemble verified documentary evidence establishing bona fide financial distress, including job termination letters, salary cuts, and medical records to prove inability to service revolving debt.
Stage 3: Mandate Revocation & Shield. Card auto-debit NACH mandates are formally revoked with issuing banks under RBI directives, pre-empting Section 25 PSSA bounce liabilities and halting unlawful third-party recovery agent harassment.
Stage 4: Credit Committee Negotiations. Our legal panel presents formal OTS representations directly to bank Stressed Asset Committees, leveraging 100% NPA capital provisioning dynamics to negotiate 45% to 65% principal haircuts.
Stage 5: Sanction Letter Vetting. We verify the bank sanction letter for corporate authenticity, card numbering, structured payment schedules, and explicit covenants granting full legal liability discharge with zero future claims.
Stage 6: Remittance & NDC Release. The negotiated settlement amount is deposited directly into the bank designated pool account, followed by receipt of an unconditional No Dues Certificate and updated bureau reporting.`
};

const sec7 = {
  name: "Section 7: Statutory Notice Defense & Legal Rights",
  target: "180-200",
  text: `Borrowers facing delinquent credit card balances are protected by established Indian statutory frameworks and Supreme Court jurisprudence. Bank recovery notices must be met with structured analytical legal defense rather than panic:
Section 25 PSSA Defense: NACH electronic mandate bounces do not constitute automatic criminal culpability. Serving a formal reply within 15 days demonstrating bona fide distress and lack of fraudulent intent successfully halts prosecution.
Section 138 NI Act Protection: Security cheques collected during onboarding cannot be converted into criminal instruments for unverified debt. Proving that the cheque was a blank security deposit vitiates Section 138 claims.
Section 21 Arbitration Defense: Under Supreme Court precedents in Perkins Eastman and TRF Ltd., unilateral appointments of sole arbitrators by banks are legally void ab initio and can be challenged before High Courts.
DRT & RBI Fair Practices Code: Debts below 20 Lakhs cannot be tried in Debt Recovery Tribunals. Recovery agents are strictly prohibited from contacting cardholders before 8 AM or after 7 PM, harassing family members, or making workplace visits.`
};

const sec8 = {
  name: "Section 8: 3-Tier Escalation Matrix",
  target: "100-120",
  text: `If lending institutions violate regulatory guidelines, charge unconscionable fees, or deploy abusive collection tactics, borrowers have access to a structured statutory escalation mechanism:
Level 1: Bank Grievance Redressal Officer (GRO). Submit formal written complaints regarding unbundled charges or harassment. Banks must acknowledge within 48 hours and provide resolution within 7 to 10 working days.
Level 2: Principal Nodal Officer (PNO). Escalate unresolved disputes to the bank apex regulatory compliance desk. The PNO has executive authority to review settlement proposals and restrain agency outreach within 14 to 21 days.
Level 3: RBI Integrated Ombudsman (cms.rbi.org.in). If grievances remain unresolved past 30 days, lodge a digital complaint on cms.rbi.org.in for legally binding adjudication and compensation under RBI regulations.`
};

const sec9 = {
  name: "Section 9: Chronological Timeline Table",
  target: "90-100",
  text: `Understanding the delinquency timeline enables borrowers to time settlement proposals when institutional commercial leverage is at its peak:
Day 1 to 30: SMA-0 Stage, Grace period and automated reminders, Forensic statement audit and mandate review.
Day 31 to 60: SMA-1 Stage, Internal tele-calling and late fee addition, Revoke NACH mandates and compile hardship proof.
Day 61 to 90: SMA-2 Stage, Pre-NPA demand notices issued, Submit formal hardship representation to bank.
Day 91 to 180: Sub-Standard NPA, 100% bank capital provisioning applied, Prime OTS window opens (45% to 55% waiver).
Day 181 to 365+: Doubtful NPA, ARC debt assignment evaluation, Deep compromise window (55% to 75% waiver + NDC).`
};

const sec10 = {
  name: "Section 10: Specialized Real-World Scenarios",
  target: "140-160",
  text: `Different financial crisis scenarios require customized settlement roadmaps:
Multi-Card Cross-Lender Consolidation: Cardholders juggling multiple cards across different banks benefit from coordinated bilateral representations, preventing cross-lender panic while securing consolidated principal write-offs and unified repayment schedules across institutions.
Executive Layoffs & Career Disruption: Corporate severance records and proof of sudden income loss serve as compelling documentary evidence before Stressed Asset Committees to justify deep 60% compromise settlements.
Sole Proprietorship Cashflow Crisis: Business owners using personal credit cards for working capital can submit audited profit-and-loss accounts showing liquidity depletion to negotiate single lump-sum waivers.
ARC Portfolio Debt Assignments: When banks sell written-off debt to Asset Reconstruction Companies at deep discounts, ARCs are commercially positioned to accept 65% to 75% principal haircuts for immediate liquidity.`
};

// 10 Synchronized FAQs (Exact ~35 words each)
const sec12 = {
  name: "Section 12: 10 Synchronized FAQs",
  target: "340-370",
  text: `How does a credit card settlement calculator estimate the payout?
The calculator isolates core swipe principal from 42% APR finance charges, waives 100% of penal fees, and models a 40% to 65% principal haircut based on account aging and documented hardship.

What discount percentage can I negotiate on credit card settlement in India?
Cardholders typically negotiate 50% to 75% gross balance waivers. Against core principal spends, banks generally approve 40% to 60% compromise payouts depending on delinquency vintage and insolvency proof.

How are penal interest and finance charges treated during settlement?
Banks treat uncollected 42% APR finance interest and late fees as accounting additions. Under RBI compromise settlement norms, banks grant a complete 100% write-off on all penal charges.

Can I get a settlement discount on original principal card spends?
Yes. Once an account reaches 90 to 180 days in NPA status, banks provision 100% capital reserves, allowing credit committees to approve 25% to 50% principal haircuts for distressed borrowers.

Is a lump-sum settlement cheaper than monthly installment plans?
Yes. Single lump-sum settlements yield higher waivers of 55% to 70% because banks receive immediate cash. Structured installment settlements across two to four tranches yield waivers of 45% to 55%.

Will credit card debt settlement damage my CIBIL credit score?
The lender reports the account as Settled, causing an initial 75 to 150 point reduction. Disciplined credit habits and secured cards rebuild credit scores above 750 within 18 to 24 months.

What documents are required to prove financial hardship for card settlement?
Borrowers must provide termination letters, salary reduction slips, audited business financial statements, medical discharge summaries, and bank statements demonstrating severe cash flow depletion and genuine inability to pay.

Can a bank file criminal charges or arrest me for credit card default?
No. Unsecured credit card default is strictly a civil matter. The Supreme Court has ruled that inability to pay debt due to financial distress is not a crime; arrest cannot occur.

How can I verify that my settlement sanction letter is genuine?
Verify that the letter is issued on official bank letterhead with an authorized signatory stamp, lists exact card numbers, defines payment amounts, and explicitly confirms full liability discharge.

Can I convert a Settled credit card status to Closed in CIBIL?
Yes. Under Section 21 of CICRA 2005, you can repay the previously waived differential balance later, obtain an official No Dues Certificate, and update your bureau record to Closed.`
};

const sec13 = {
  name: "Section 13: Citations & Outbound Authority Grid",
  target: "110-130",
  text: `All credit card settlement procedures and calculation models comply with Indian statutes, including the RBI Master Direction on Credit Card Operations (2022), Section 25 of the PSSA 2007, Section 138 of the NI Act 1881, Section 21 of the CICRA 2005, and the RBI Integrated Ombudsman Scheme 2021.
Official Outbound Verification Desks: Reserve Bank of India, RBI Ombudsman Portal, TransUnion CIBIL, India Code Legislative Portal, National Legal Services Authority, National Cyber Crime Portal. Related CredSettle Guides: Credit Card Settlement Discount, Minimum Due Trap Explained, Credit Card NPA Timeline, Settlement Process Guide, Convert Settled to Closed, Settle Multiple Credit Cards, Stop Recovery Harassment, Credit Card Jail Myth Analysis, Credit Card Legal Notice Defense, Improve CIBIL After Settlement.`
};

const sidebar = {
  name: "Sidebar Components",
  target: "70-80",
  text: `Ashish Jhangra, Legal & Debt Resolution Professional. Specialist in Indian banking dispute resolution, RBI compromise settlement frameworks, and civil defense against unlawful debt recovery practices. Verified Legal Author, CredSettle Panel. Facing Aggressive Recovery Harassment? Speak to our senior debt resolution advocates immediately to halt unlawful recovery agent intimidation and negotiate direct bank waivers. Call +91-8800226635. CredSettle Trust Standards: 100% RBI Fair Practices Compliant, CICRA 2005 Credit Bureau Standard, ISO 27001 Data Confidentiality, Verified Legal Defense Panel.`
};

const allSections = [
  hero,
  execSummary,
  sec1,
  sec2,
  sec3,
  sec4,
  sec5,
  sec6,
  sec7,
  sec8,
  sec9,
  sec10,
  sec12,
  sec13,
  sidebar
];

let totalWords = 0;
console.log("=== FINAL CALIBRATED EDITORIAL WORD COUNT BREAKDOWN ===");
allSections.forEach(s => {
  const count = countWords(s.text);
  totalWords += count;
  console.log(`${s.name.padEnd(45)}: ${count} words (Target: ${s.target})`);
});
console.log("======================================================");
console.log(`TOTAL EDITORIAL WORD COUNT: ${totalWords} words`);
console.log(`STRICT TARGET RANGE: 1,800 – 2,200 words`);
console.log(`STATUS: ${totalWords >= 1800 && totalWords <= 2200 ? "PERFECT PASS ✅" : "CALIBRATION NEEDED ❌"}`);
