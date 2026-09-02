const fs = require('fs');
const path = require('path');

const clientPath = path.join(__dirname, '../src/app/settle-multiple-credit-cards/SettleMultipleCreditCardsClient.tsx');
const pagePath = path.join(__dirname, '../src/app/settle-multiple-credit-cards/page.tsx');

const clientContent = fs.readFileSync(clientPath, 'utf8');
const pageContent = fs.readFileSync(pagePath, 'utf8');

// Check em-dashes / en-dashes
const checkDashes = (name, text) => {
  const matches = text.match(/[—–]/g);
  if (matches) {
    console.log('[' + name + '] FAIL: Found ' + matches.length + ' em/en-dashes!');
  } else {
    console.log('[' + name + '] PASS: 0 em/en-dashes found.');
  }
};

checkDashes('page.tsx', pageContent);
checkDashes('SettleMultipleCreditCardsClient.tsx', clientContent);

const stripHtml = (html) => {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{[^}]+\}/g, ' ')
    .replace(/className="[^"]*"/g, ' ')
    .replace(/style=\{[^}]+\}/g, ' ')
    .replace(/href="[^"]*"/g, ' ')
    .replace(/src="[^"]*"/g, ' ')
    .replace(/alt="[^"]*"/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&rarr;/g, '->')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .split(/\s+/)
    .filter(w => w.trim().length > 0 && !w.match(/^[{}[\](),;=><"'/`]+$/));
};

// Extract sections accurately by splitting by id=
const rawSections = [
  { name: 'Hero Section', start: '<section', end: '</section>' },
  { name: 'Executive Summary Box', start: 'id="quick-crux"', end: '<section id="debt-economics-npa"' },
  { name: 'Section 1: Debt Economics & NPA Dynamics', start: 'id="debt-economics-npa"', end: '<section id="financial-breakdown-math"' },
  { name: 'Section 2: Financial Breakdown & Settlement Math', start: 'id="financial-breakdown-math"', end: '<section id="resolution-comparison-matrix"' },
  { name: 'Section 3: Comparison Matrix', start: 'id="resolution-comparison-matrix"', end: '<section id="cibil-algorithm-restoration"' },
  { name: 'Section 4: CIBIL Scoring & Rebuilding', start: 'id="cibil-algorithm-restoration"', end: '<section id="infographic-overview"' },
  { name: 'Section 5: Infographic Asset Card', start: 'id="infographic-overview"', end: '<section id="step-by-step-sop"' },
  { name: 'Section 6: Step-by-Step SOP (6 Stages)', start: 'id="step-by-step-sop"', end: '<section id="statutory-notice-defense"' },
  { name: 'Section 7: Statutory Notice Defense & Rights', start: 'id="statutory-notice-defense"', end: '<section id="three-tier-escalation"' },
  { name: 'Section 8: 3-Tier Grievance & Escalation Matrix', start: 'id="three-tier-escalation"', end: '<section id="chronological-milestones"' },
  { name: 'Section 9: Delinquency Milestones Timeline', start: 'id="chronological-milestones"', end: '<section id="specialized-card-scenarios"' },
  { name: 'Section 10: Specialized Real-World Scenarios', start: 'id="specialized-card-scenarios"', end: '<div id="company-profile"' },
  { name: 'Section 13: Citations & Outbound Authority Grid', start: 'id="regulatory-sources"', end: '</section>' },
  { name: 'Right Sidebar', start: '<aside className="space-y-5 sticky top-6">', end: '</aside>' }
];

let totalWords = 0;
console.log('\n--- ACCURATE PER-SECTION WORD COUNT BREAKDOWN ---');

rawSections.forEach(s => {
  const startIdx = clientContent.indexOf(s.start);
  if (startIdx !== -1) {
    const afterStart = clientContent.substring(startIdx);
    const endIdx = afterStart.indexOf(s.end);
    let chunk = endIdx !== -1 ? afterStart.substring(0, endIdx) : afterStart;
    if (s.name === 'Hero Section') {
      chunk = clientContent.substring(clientContent.indexOf('<section'), clientContent.indexOf('</section>') + 10);
    }
    const words = stripHtml(chunk);
    console.log(s.name.padEnd(48) + ': ' + words.length + ' words');
    totalWords += words.length;
  } else {
    console.log(s.name.padEnd(48) + ': NOT FOUND');
  }
});

// Calculate FAQ words directly from faqs array
const faqMatch = clientContent.match(/const faqs = (\[[\s\S]*?\]);/);
let faqWords = 0;
if (faqMatch) {
  try {
    const faqs = eval(faqMatch[1]);
    faqs.forEach(f => {
      faqWords += f.q.split(/\s+/).filter(Boolean).length;
      faqWords += f.a.split(/\s+/).filter(Boolean).length;
    });
    // Add heading words (Frequently Asked Questions + intro)
    faqWords += 16;
  } catch (e) {}
}
console.log('Section 12: 10 Synchronized FAQs'.padEnd(48) + ': ' + faqWords + ' words');
totalWords += faqWords;

console.log('------------------------------------------------');
console.log('TOTAL EDITORIAL WORD COUNT: ' + totalWords + ' WORDS');
console.log('Target range: 1,800 - 2,200 words (Strict Requirement)');
if (totalWords >= 1800 && totalWords <= 2200) {
  console.log('PERFECT PASS: Output lands strictly within 1,800 - 2,200 words range!');
} else {
  console.log('NEEDS ADJUSTMENT: Word count is ' + totalWords + ' words.');
}
