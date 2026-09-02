const fs = require('fs');
const path = require('path');

const clientFilePath = path.join(__dirname, '../src/app/kreditbee-recovery-agent-harassment/KreditbeeRecoveryAgentHarassmentClient.tsx');
const content = fs.readFileSync(clientFilePath, 'utf8');

// Function to clean and count words
function countWords(str) {
  if (!str) return 0;
  return str
    .replace(/<[^>]*>/g, ' ')
    .replace(/&amp;/g, 'and')
    .replace(/&rarr;/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\{[^}]*\}/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(w => w.length > 0 && !/^[\d\.\,\:\;\(\)\[\]\{\}\/\\-]+$/.test(w) || /^₹\d+/.test(w) || /^\d+%/.test(w))
    .length;
}

// Let's break down sections
const sections = [
  { name: 'Hero', regex: /<section[\s\S]*?style=\{\{ backgroundColor: '#2452ae' \}\}[\s\S]*?<\/section>/ },
  { name: 'Executive Summary', regex: /<div[\s\S]*?id="quick-crux"[\s\S]*?<\/ul>\s*<\/div>/ },
  { name: 'Section 1: NPA Dynamics', regex: /<section id="npa-dynamics"[\s\S]*?<\/section>/ },
  { name: 'Section 2: Financial Math', regex: /<section id="financial-math"[\s\S]*?<\/section>/ },
  { name: 'Section 3: Comparison Matrix', regex: /<section id="comparison-matrix"[\s\S]*?<\/section>/ },
  { name: 'Section 4: CIBIL Impact', regex: /<section id="cibil-impact"[\s\S]*?<\/section>/ },
  { name: 'Section 5: Infographic Guide', regex: /<section id="infographic-guide"[\s\S]*?<\/section>/ },
  { name: 'Section 6: Defense SOP', regex: /<section id="defense-sop"[\s\S]*?<\/section>/ },
  { name: 'Section 7: Statutory Defense', regex: /<section id="statutory-defense"[\s\S]*?<\/section>/ },
  { name: 'Section 8: Escalation Matrix', regex: /<section id="escalation-matrix"[\s\S]*?<\/section>/ },
  { name: 'Section 9: Chronological Timeline', regex: /<section id="chronological-timeline"[\s\S]*?<\/section>/ },
  { name: 'Section 10: Real-World Scenarios', regex: /<section id="real-world-scenarios"[\s\S]*?<\/section>/ },
  { name: 'Section 12: FAQs (Array)', isFaq: true },
  { name: 'Section 13: Citations & Outbound Grid', regex: /<section id="regulatory-sources"[\s\S]*?<\/section>/ },
  { name: 'Sidebar', regex: /<aside className="space-y-5 sticky top-6">[\s\S]*?<\/aside>/ }
];

let grandTotal = 0;
sections.forEach(sec => {
  let count = 0;
  if (sec.isFaq) {
    const faqMatch = content.match(/const faqs = (\[[\s\S]*?\]);/);
    if (faqMatch) {
      const faqs = eval(faqMatch[1]);
      let faqText = "";
      faqs.forEach(f => { faqText += " " + f.q + " " + f.a; });
      count = countWords(faqText);
    }
  } else {
    const match = content.match(sec.regex);
    if (match) {
      count = countWords(match[0]);
    }
  }
  grandTotal += count;
  console.log(`${sec.name}: ${count} words`);
});

console.log(`-----------------------------------`);
console.log(`Grand Total from explicit sections: ${grandTotal} words`);
