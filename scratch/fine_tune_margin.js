const fs = require('fs');
const path = require('path');

const clientFilePath = path.join(__dirname, '../src/app/kreditbee-recovery-agent-harassment/KreditbeeRecoveryAgentHarassmentClient.tsx');
let clientContent = fs.readFileSync(clientFilePath, 'utf8');

// Replace Executive summary with tighter bullets (~140 words total)
const oldExec = `<ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Regulated NBFC Structure:</strong> KreditBee loans operate under Krazybee Services Private Limited, an RBI-registered NBFC bound by central banking directions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Relative Calling:</strong> Scraping contacts or harassing family members violates RBI Digital Lending Guidelines and the IT Act.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Permissible Hours:</strong> Collection calls and doorstep visits are restricted to 8:00 AM through 7:00 PM on business days.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>No Criminal Arrests:</strong> Loan default is a civil contractual dispute; recovery agents cannot threaten police action.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Section 25 NACH Defense:</strong> Auto-debit bounce notices require formal legal replies within 30 days establishing financial hardship.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Asset Shield:</strong> Unsecured digital credit facilities carry no asset charge, making property seizure legally impermissible.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Direct OTS Window:</strong> Non-Performing Assets past 90 days qualify for commercial settlements at 40% to 55% of claims.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>3-Tier Escalation:</strong> Harassment is reported progressively to Krazybee GRO, the Principal Nodal Officer, and the RBI Ombudsman.</span>
                </li>
              </ul>`;

const newExec = `<ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Regulated NBFC Governance:</strong> KreditBee loans operate under Krazybee Services Private Limited, bound by RBI master directions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>No Third-Party Calling:</strong> Calling family or scraping contacts violates RBI Digital Lending Guidelines and the IT Act.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Permissible Calling Hours:</strong> Recovery calls and home visits are legally restricted to 8:00 AM through 7:00 PM.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Civil Dispute Immunity:</strong> Unsecured loan default is a civil matter; agents cannot threaten police arrests or warrants.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Section 25 NACH Defense:</strong> Auto-debit bounce notices require timely 30-day legal replies establishing hardship.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Asset Seizure Immunity:</strong> Unsecured digital credit carries no mortgage, barring property attachment under SARFAESI.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Direct OTS Settlements:</strong> Accounts reaching NPA status qualify for compromise settlements at 40% to 55% of claims.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>3-Tier Escalation:</strong> Harassment is escalated to Krazybee GRO, the Principal Nodal Officer, and the RBI Ombudsman.</span>
                </li>
              </ul>`;

clientContent = clientContent.replace(oldExec, newExec);
fs.writeFileSync(clientFilePath, clientContent, 'utf8');

console.log("Fine-tuning completed.");
