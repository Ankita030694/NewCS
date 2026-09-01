const fs = require('fs');

const execSummary = `When enterprise revenue evaporates due to macroeconomic volatility, supply chain disruptions, or severe customer default, servicing unsecured commercial credit lines becomes mathematically unviable. Indian statutory frameworks offer structured compromise mechanisms to resolve commercial debt lawfully without forcing corporate insolvency. Because unsecured business loans carry zero physical mortgage or hypothecated tangible collateral, institutional lenders cannot invoke summary property attachment under the SARFAESI Act 2002.

Once continuous delinquency crosses the 90-day threshold, Reserve Bank of India regulations mandate steep Tier-1 capital provisioning against the bank balance sheet, creating strong economic motivation for credit committees to sanction One Time Settlements (OTS). In bona fide commercial distress cases, enterprises routinely negotiate substantial waivers of 40% to 60% on core principal balances alongside complete 100% waivers of accumulated overdue interest, penal levies, and processing charges.

A critical pillar of commercial compromise is ensuring director personal guarantees are explicitly discharged under Section 133 of the Indian Contract Act 1872. When lenders issue statutory notices under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act, timely formal legal replies establish legitimate commercial dispute rather than criminal fraud. All settlement remittances must be routed directly into bank-controlled loan accounts to secure an unconditional No Dues Certificate and initiate commercial credit rehabilitation.`;

const sec1 = `1. Debt Economics & Commercial NPA Classification Dynamics
Unsecured business loans, working capital overdrafts, and commercial credit lines represent high-risk unsecured exposures for Indian commercial banks and NBFCs. When an enterprise encounters acute liquidity stress, raw material price escalation, or sudden debtor default, operating cash flows turn negative and repayment pipelines collapse. Under the Reserve Bank of India Prudential Framework for Resolution of Stressed Assets, commercial credit accounts are systematically monitored across Special Mention Account buckets: SMA-0 (1-30 days overdue), SMA-1 (31-60 days overdue), and SMA-2 (61-90 days overdue).

On the 91st day of continuous delinquency, banking systems automatically reclassify the credit facility as a Non-Performing Asset (NPA). This regulatory trigger imposes mandatory capital provisioning of 15% to 100% against the bank core Tier-1 capital, directly impacting institutional profitability. Because unsecured business facilities lack underlying tangible mortgages, lenders are legally barred from initiating summary property seizures under the SARFAESI Act 2002.

Recognizing that prolonged civil litigation or Debt Recovery Tribunal proceedings take years to yield partial recovery, institutional credit committees prioritize commercial One Time Settlements. By accepting a discounted cash payout, the lender writes off stressed exposure, frees allocated regulatory capital, and restores balance sheet health more effectively than pursuing indefinite legal execution.`;

const sec2 = `2. Principal vs Penal Interest Breakdown & OTS Financial Math
Commercial loan defaults trigger rapid debt accumulation through compound interest, late fees, and penal interest rates reaching 24% to 36% annually. Within 18 months, bank demands often double the original principal sum. However, under the RBI Fair Practices Code, lenders cannot capitalize penal interest into core principal. A forensic audit removes unapplied levies to establish the true settlement baseline.
Representative 180-Day NPA Commercial Settlement (₹50 Lakh Facility)
Bank Demand (Pre-OTS): Core Principal ₹50,00,000, Overdue Interest ₹12,50,000, Penal Charges ₹6,00,000. Total Claim: ₹68,50,000.
Negotiated Compromise Settlement: Penal Charges 100% Waived (-₹6,00,000), Overdue Interest 100% Waived (-₹12,50,000), Principal Haircut 50% (-₹25,00,000). Final Agreed Payout: ₹25,00,000 (63.5% Savings).
Presenting documented enterprise insolvency proves to bank credit committees that a prompt ₹25 Lakh lump sum yields higher recovery value than holding bad debt.`;

const sec6 = `6. Step-by-Step SOP: 6 Stages of Business Loan Compromise
Following this structured 6-stage Standard Operating Procedure ensures commercial liabilities are resolved lawfully while shielding company leadership.

Stage 1: Forensic Loan & Personal Guarantee Audit
The resolution process begins with a rigorous legal examination of original sanction letters, hypothecation deeds, and loan account statements. Legal counsel identifies unauthorized penal charges, compounded late fees, and improper interest capitalization that violate RBI guidelines. Simultaneously, attorneys audit personal guarantee covenants to verify whether promoter liability is limited or open-ended.

Stage 2: Financial Hardship Dossier Compilation
To satisfy bank credit risk criteria, the enterprise compiles comprehensive financial evidence demonstrating genuine commercial insolvency. This dossier includes audited balance sheets, declining GST return filings, bank account statements reflecting cash deficits, cancelled client purchase orders, and documentation of unrecoverable receivables.

Stage 3: Statutory Legal Notice Defense
When lending institutions initiate legal pressure by issuing statutory notices under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act, formal legal replies must be served within statutory limitation deadlines. Strategic responses establish legitimate commercial dispute and refute false allegations of fraudulent intent.

Stage 4: Credit Committee Bilateral Representation
Formal OTS compromise representations are submitted directly to the Stressed Assets Resolution Branch or Zonal Credit Committee. Financial presentations demonstrate that accepting a 40% to 60% principal compromise yields higher net present value than pursuing protracted recovery suits through civil courts or DRTs.

Stage 5: Settlement Sanction Letter Vetting
Once the bank agrees in principle, legal counsel conducts a line-by-line review of the formal OTS sanction letter. It is vital to ensure that the document contains unconditional waiver covenants, clear payment tranches, and explicit clauses releasing all personal and corporate guarantors under Section 133 of the Indian Contract Act.

Stage 6: Direct Remittance & No Dues Certificate
The final settlement amount is remitted directly into the bank loan account through verified RTGS transfers. Upon clearance, the lender issues an unconditional No Dues Certificate, returns undated security cheques, and updates credit bureaus to reflect the settled status.`;

const sec7 = `7. Statutory Notice Defense & Legal Rights of Borrowers
During loan default, lenders utilize various legal instruments. Understanding statutory defenses empowers business owners to protect their commercial rights.

Section 25 Payment & Settlement Systems Act
When electronic NACH auto-debit mandates bounce due to insufficient funds, lenders often issue Section 25 demand notices. The legal defense establishes that the mandate dishonour arose solely from temporary business illiquidity without criminal intent, demonstrating that the borrower maintains active intent to settle legitimate obligations through commercial dialogue.

Section 138 Negotiable Instruments Act
Banks frequently deposit undated security cheques collected during initial loan disbursement and initiate Section 138 criminal complaints upon dishonour. The statutory defense establishes that security cheques held as collateral do not represent an existing legally enforceable liquidated debt at the time of deposit under established Supreme Court precedents.

Section 21 Arbitration Act & Perkins Ruling
Many institutional loan agreements incorporate unilateral arbitration clauses. Under landmark Supreme Court rulings in Perkins Eastman and TRF Limited, unilateral arbitrator appointments by lenders are legally invalid under Section 12(5) of the Arbitration and Conciliation Act, halting biased ex-parte proceedings.

DRT Jurisdiction & Fair Practices Code
Debt Recovery Tribunal claims under Section 19 of the RDBFI Act apply exclusively to aggregate debts exceeding ₹20 Lakhs. Across all recovery interactions, the RBI Fair Practices Code protects borrowers from third-party recovery harassment, intrusive workplace visits, and unauthorized disclosure of debt details to third parties.`;

const sec8 = `8. 3-Tier Institutional Grievance & Escalation Matrix
When recovery branches stall compromise negotiations or engage in harassment, borrowers can utilize the Reserve Bank of India statutory grievance framework.

Tier 1: Bank Internal Grievance Redressal Officer (GRO)
The first stage involves submitting a formal written complaint to the bank Principal Grievance Redressal Officer regarding unfair fee capitalization, recovery harassment, or unresponsive branch management. Lenders are mandated to investigate and respond within 7 to 10 working days.

Tier 2: Bank Principal Nodal Officer (PNO)
If the branch GRO fails to provide adequate resolution, the complaint is escalated to the Principal Nodal Officer stationed at the zonal or corporate headquarters. The PNO possesses executive discretion to bridge communication gaps between branch recovery teams and the central credit committee within 14 to 21 days.

Tier 3: RBI Integrated Ombudsman Scheme
When internal bank mechanisms fail to resolve legitimate grievances within 30 days, borrowers can file a statutory complaint through the RBI Integrated Ombudsman portal (cms.rbi.org.in) citing violations of the Fair Practices Code or unjustified delays in issuing settlement documentation.`;

const sec10 = `10. Specialized Real-World Commercial Scenarios & Case Commentary
Understanding how specific business scenarios interact with banking law enables tailored resolution strategies.

Multi-Lender Fintech & NBFC Stacking
Enterprises that have availed multiple unsecured digital loans from digital lenders and NBFCs face simultaneous cross-defaults. Resolving multiple stacked loans requires synchronized bilateral negotiations, prioritizing lenders with imminent 90-day provisioning deadlines to secure optimal principal haircuts across all accounts.

Corporate Layoffs & Revenue Contraction
In Private Limited entities facing major client loss or business closure, the doctrine of corporate limited liability shields directors from enterprise obligations. However, where directors have executed personal guarantees, settlement agreements must include comprehensive indemnity covenants to extinguish individual promoter liabilities completely.

Sole Proprietorship Unlimited Liability
Because sole proprietorships lack independent corporate personality, the proprietor personal assets remain vulnerable to civil attachment decrees. Securing a timely One Time Settlement eliminates commercial liabilities before lenders obtain money decrees against personal residential properties.

ARC Debt Assignments
When commercial banks transfer distressed loan portfolios to Asset Reconstruction Companies under SARFAESI Section 5 at deep discounts, ARCs operate with significant commercial flexibility. Stressed enterprises can leverage this dynamic to negotiate aggressive settlements yielding 50% to 70% total debt waivers for immediate lump-sum closure.`;

function countWords(str) {
  return str.split(/\s+/).filter(w => w.length > 0 && !/^[^a-zA-Z0-9]+$/.test(w)).length;
}

console.log('Exec Summary words:', countWords(execSummary));
console.log('Sec 1 words:', countWords(sec1));
console.log('Sec 2 words:', countWords(sec2));
console.log('Sec 6 words:', countWords(sec6));
console.log('Sec 7 words:', countWords(sec7));
console.log('Sec 8 words:', countWords(sec8));
console.log('Sec 10 words:', countWords(sec10));
