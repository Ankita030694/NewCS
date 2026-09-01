const fs = require('fs');

// 10 concise, high-density FAQs (total ~290 words)
const faqs = [
  {
    q: "Can bank recovery agents forcefully seize my car on the road?",
    a: "No. In ICICI Bank v. Prakash Kaur (2007), the Supreme Court ruled that banks cannot deploy musclemen to seize vehicles without due legal process. Forceful road intercepts constitute criminal trespass and extortion."
  },
  {
    q: "What statutory notices must a bank serve before repossession?",
    a: "Under the RBI Fair Practices Code, lenders must issue a formal demand notice giving 15 to 30 days to clear arrears, followed by a pre-repossession intimation, and a pre-sale valuation notice."
  },
  {
    q: "Can I file a police complaint if recovery agents illegally tow my car?",
    a: "Yes. You can register an FIR under Sections 303 (Theft), 308 (Extortion), 329 (Trespass), and 351 (Intimidation) of BNS / Sections 379, 383, 441, and 506 IPC against the agents and the bank."
  },
  {
    q: "What is an inventory sheet and why is it mandatory during seizure?",
    a: "An inventory sheet is a compulsory document itemizing all personal belongings inside the vehicle, odometer reading, fuel level, and physical condition. Refusal to provide a signed inventory violates RBI recovery directives."
  },
  {
    q: "Does the bank have the legal right to sell my car immediately?",
    a: "No. The lender must serve a formal pre-sale notice granting 15 to 30 days to redeem the vehicle, accompanied by a certified surveyor valuation report before scheduling an auction."
  },
  {
    q: "What happens if car auction proceeds do not cover the loan balance?",
    a: "Any shortfall becomes an unsecured residual debt. The bank cannot seize other assets without court orders and must pursue civil recovery or negotiate an amicable compromise settlement."
  },
  {
    q: "How can I obtain an urgent court injunction to stop vehicle repossession?",
    a: "You can file a petition under Section 9 of the Arbitration Act or Order 39 CPC before the District Commercial Court seeking an interim status-quo injunction restraining the lender from taking physical possession."
  },
  {
    q: "Can I negotiate a One-Time Settlement (OTS) for a defaulted auto loan?",
    a: "Yes. Borrowers with genuine hardship can negotiate an OTS with the bank credit committee, securing 40% to 55% waivers on accumulated penal interest and charges, followed by a clean No Dues Certificate."
  },
  {
    q: "How does auto loan default and vehicle repossession affect my CIBIL score?",
    a: "Repossession causes an immediate 80 to 140 point score drop. However, settling the account through an OTS halts ongoing negative reporting, enabling score recovery above 750 within 12 to 24 months."
  },
  {
    q: "What should I do if recovery agents show up demanding car keys?",
    a: "Demand official bank identification, agent DRS registration, and written authorization. Refuse handover without statutory notice, record the encounter, contact emergency police (112), and notify CredSettle for legal intervention."
  }
];

let faqWords = 0;
faqs.forEach((f, idx) => {
  const qw = (f.q.match(/[\w-]+/g) || []).length;
  const aw = (f.a.match(/[\w-]+/g) || []).length;
  faqWords += (qw + aw);
  console.log(`FAQ ${idx+1}: Q=${qw}, A=${aw} (Sum=${qw+aw})`);
});
console.log("Total FAQ Words:", faqWords);
