const fs = require('fs');
const path = require('path');

const pageFile = path.join(__dirname, '../src/app/credit-card-default-after-5-years/page.tsx');
const clientFile = path.join(__dirname, '../src/app/credit-card-default-after-5-years/CreditCardDefaultAfter5YearsClient.tsx');

const pageContent = fs.readFileSync(pageFile, 'utf8');
const clientContent = fs.readFileSync(clientFile, 'utf8');

// Check em-dash
console.log('--- EM-DASH CHECK ---');
console.log('page.tsx contains em-dash (—):', pageContent.includes('—'));
console.log('Client.tsx contains em-dash (—):', clientContent.includes('—'));

// Check 10 FAQs match verbatim
const pageSchemaMatch = pageContent.match(/const unifiedSchema =\s*(\{[\s\S]*?\n\s*\});/);
let cleanSchemaStr = pageSchemaMatch[1].trim();
if (cleanSchemaStr.endsWith(';')) {
  cleanSchemaStr = cleanSchemaStr.slice(0, -1);
}
const pageSchema = eval('(' + cleanSchemaStr + ')');
const pageFaqs = pageSchema['@graph'].find(e => e['@type'] === 'FAQPage').mainEntity;

// Extract client faqs
const clientFaqsMatch = clientContent.match(/const faqs = \[([\s\S]*?)\];/);
const clientFaqs = eval('[' + clientFaqsMatch[1] + ']');

console.log('\n--- FAQ VERIFICATION ---');
console.log('page.tsx FAQ count:', pageFaqs.length);
console.log('Client.tsx FAQ count:', clientFaqs.length);

let faqsMatch = true;
for (let i = 0; i < pageFaqs.length; i++) {
  if (pageFaqs[i].name !== clientFaqs[i].q || pageFaqs[i].acceptedAnswer.text !== clientFaqs[i].a) {
    console.error(`Mismatch at FAQ ${i + 1}:`);
    console.error('Page:', pageFaqs[i]);
    console.error('Client:', clientFaqs[i]);
    faqsMatch = false;
  }
}
console.log('All 10 FAQs Match 100% Verbatim:', faqsMatch);

// Word counting function
function countWords(str) {
  if (!str) return 0;
  const cleaned = str
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&rarr;/g, '->')
    .replace(/&ndash;/g, '-')
    .replace(/\{`[^`]+`\}/g, ' ')
    .replace(/\{[^}]+\}/g, ' ')
    .replace(/[^\w\s₹%–-]/g, ' ')
    .trim();
  const words = cleaned.split(/\s+/).filter(w => w.length > 0 && !['className', 'true', 'false', 'null', 'undefined', 'return', 'export', 'default', 'function'].includes(w));
  return words.length;
}

// Section extraction from Client.tsx
const sections = [
  { name: 'Hero Section', start: '1. HERO SECTION', end: '2. STATS STRIP' },
  { name: 'Executive Summary', start: 'id="quick-crux"', end: 'SECTION 1:' },
  { name: 'Section 1: Debt Economics & NPA Dynamics', start: 'id="debt-economics-aged-npa"', end: 'SECTION 2:' },
  { name: 'Section 2: Settlement Math & Breakdown', start: 'id="settlement-math-breakdown"', end: 'SECTION 3:' },
  { name: 'Section 3: Comparison Matrix Table', start: 'id="resolution-comparison-matrix"', end: 'SECTION 4:' },
  { name: 'Section 4: Technical CIBIL Algorithm', start: 'id="cibil-algorithm-impact"', end: 'SECTION 5:' },
  { name: 'Section 5: Visual Infographic Asset Card', start: 'id="infographic-overview"', end: 'SECTION 6:' },
  { name: 'Section 6: Step-by-Step SOP (6 Stages)', start: 'id="step-by-step-ots-sop"', end: 'SECTION 7:' },
  { name: 'Section 7: Statutory Notice Defense', start: 'id="statutory-legal-defense"', end: 'SECTION 8:' },
  { name: 'Section 8: 3-Tier Grievance Matrix', start: 'id="three-tier-grievance-matrix"', end: 'SECTION 9:' },
  { name: 'Section 9: Chronological Timeline Table', start: 'id="chronological-procedural-timeline"', end: 'SECTION 10:' },
  { name: 'Section 10: Specialized Real-World Scenarios', start: 'id="real-world-debt-scenarios"', end: 'SECTION 11:' },
  { name: 'Section 12: 10 Synchronized FAQs', custom: clientFaqs.map(f => f.q + ' ' + f.a).join(' ') + ' Frequently Asked Questions Frequently Asked Questions on 5-Year Credit Card Defaults & Limitation Law Authoritative legal and financial answers to key inquiries regarding aged credit card defaults, statutory limitation periods, recovery agent conduct, and compromise settlements.' },
  { name: 'Section 13: Citations & Outbound Grid', start: 'id="regulatory-sources"', end: 'MIDDLE COLUMN' },
  { name: 'Sidebar Components', start: 'RIGHT COLUMN: STICKY SIDEBAR', end: '</aside>' },
];

console.log('\n--- SECTION-BY-SECTION WORD COUNT BREAKDOWN ---');
let totalWords = 0;
sections.forEach(sec => {
  let count = 0;
  if (sec.custom) {
    count = countWords(sec.custom);
  } else {
    const sIdx = clientContent.indexOf(sec.start);
    const eIdx = sec.end === 'MIDDLE COLUMN' ? clientContent.indexOf('</div>\n\n          {/* ================= RIGHT COLUMN', sIdx) : clientContent.indexOf(sec.end, sIdx);
    if (sIdx !== -1 && eIdx !== -1) {
      const chunk = clientContent.substring(sIdx, eIdx);
      count = countWords(chunk);
    } else {
      console.error(`Could not slice section ${sec.name} (sIdx: ${sIdx}, eIdx: ${eIdx})`);
    }
  }
  totalWords += count;
  console.log(`- ${sec.name.padEnd(45)}: ${count} words`);
});

console.log('-----------------------------------------------');
console.log(`TOTAL EDITORIAL WORD COUNT: ${totalWords} WORDS`);
console.log(`TARGET SPECIFICATION: STRICTLY 1,800 – 2,200 WORDS`);
console.log(`PASSED: ${totalWords >= 1800 && totalWords <= 2200}`);
