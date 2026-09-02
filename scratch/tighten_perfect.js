const fs = require('fs');
const path = require('path');

const clientFilePath = path.join(__dirname, '../src/app/kreditbee-recovery-agent-harassment/KreditbeeRecoveryAgentHarassmentClient.tsx');
let clientContent = fs.readFileSync(clientFilePath, 'utf8');

// Tighten Section 1 slightly
const oldSec1 = `<p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                KreditBee operates as a prominent digital lending platform whose credit facilities are originated primarily through Krazybee Services Private Limited, an RBI-registered Systemically Important Non-Banking Financial Company (NBFC-ND-SI), along with regulated co-lending partner institutions. When a salaried borrower defaults on scheduled monthly installments due to unforeseen economic hardships such as job loss, business downturns, or medical emergencies, the account moves systematically across regulatory delinquency categories: SMA-0 for 1 to 30 days past due, SMA-1 for 31 to 60 days, and SMA-2 for 61 to 90 days.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Upon reaching 91 days of continuous default, the loan is formally classified as a Non-Performing Asset (NPA). Under prudential norms established by the Reserve Bank of India, NBFCs are mandated to maintain substantial Tier-1 capital provisioning against delinquent unsecured credit portfolios. This capital provisioning requirement creates a direct commercial rationale for the NBFC credit committee to negotiate and sanction structured One-Time Settlements (OTS) rather than funding unproductive third-party collection agencies. Because digital micro-loans are entirely unsecured, lenders possess no registered asset charges or mortgage liens, making the SARFAESI Act inapplicable and precluding any lawful property or vehicle attachment without a decree from a competent Civil Court.
              </p>`;

const newSec1 = `<p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                KreditBee originates digital credit primarily through Krazybee Services Private Limited, an RBI-registered Systemically Important Non-Banking Financial Company (NBFC-ND-SI), alongside co-lending banks. When unforeseen hardships cause missed EMIs, accounts progress across Special Mention Account stages: SMA-0 (1 to 30 days), SMA-1 (31 to 60 days), and SMA-2 (61 to 90 days).
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Past 90 days, the debt becomes a Non-Performing Asset (NPA). Central banking prudential norms mandate Tier-1 capital provisioning against unsecured NPAs, creating strong commercial incentives for Krazybee to accept structured One-Time Settlements (OTS). Because digital personal loans are unsecured, lenders hold no mortgage rights under the SARFAESI Act, barring asset attachment without a civil court decree.
              </p>`;

clientContent = clientContent.replace(oldSec1, newSec1);

fs.writeFileSync(clientFilePath, clientContent, 'utf8');
console.log("Tightening applied.");
