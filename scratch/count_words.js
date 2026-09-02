const fs = require('fs');
const path = require('path');

const clientFilePath = path.join(__dirname, '../src/app/kreditbee-recovery-agent-harassment/KreditbeeRecoveryAgentHarassmentClient.tsx');
const clientContent = fs.readFileSync(clientFilePath, 'utf8');

// Check for em-dashes
const emDashCount = (clientContent.match(/—/g) || []).length;
console.log(`Em-dash count in Client: ${emDashCount}`);

const pageFilePath = path.join(__dirname, '../src/app/kreditbee-recovery-agent-harassment/page.tsx');
const pageContent = fs.readFileSync(pageFilePath, 'utf8');
const pageEmDashCount = (pageContent.match(/—/g) || []).length;
console.log(`Em-dash count in Page: ${pageEmDashCount}`);

// Let's strip JSX tags and imports to count visible editorial words accurately
// Standard editorial word counting function
function countEditorialWords(text) {
  // Remove imports and boilerplate at top
  let body = text;
  const startIdx = body.indexOf('return (');
  if (startIdx !== -1) {
    body = body.substring(startIdx);
  }
  
  // Extract text from FAQs array as well if rendered dynamically
  let faqText = "";
  const faqMatch = text.match(/const faqs = (\[[\s\S]*?\]);/);
  if (faqMatch) {
    try {
      // Evaluate or parse FAQs
      const faqs = eval(faqMatch[1]);
      faqs.forEach(f => {
        faqText += " " + f.q + " " + f.a;
      });
    } catch(e) {}
  }
  
  // Remove JSX tags
  let cleaned = body
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{[^}]+\}/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&rarr;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');

  cleaned += " " + faqText;
  
  // Clean whitespace and count words
  const words = cleaned
    .replace(/[^\w\s\u00C0-\u017F\-\/₹%]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 0 && !/^[\d\.\,\:\;\(\)\[\]\{\}\/\\-]+$/.test(w) || /^₹\d+/.test(w) || /^\d+%/.test(w));
    
  return { total: words.length, words: words.slice(0, 50) };
}

// More precise text extractor from JSX & FAQ
function getExactText(fileContent) {
  // Let's extract raw text chunks
  // 1. FAQs
  let allText = [];
  const faqMatch = fileContent.match(/const faqs = (\[[\s\S]*?\]);/);
  if (faqMatch) {
    const faqs = eval(faqMatch[1]);
    faqs.forEach(f => {
      allText.push(f.q);
      allText.push(f.a);
    });
  }

  // 2. Sections in JSX
  const mainPart = fileContent.substring(fileContent.indexOf('return ('));
  // Strip tags but keep text inside
  const textWithoutTags = mainPart
    .replace(/<[^>]*>/g, ' ')
    .replace(/\{['"`]([^'"`]+)['"`]\}/g, '$1')
    .replace(/\{faqs\.map[\s\S]*?\}\)/g, '') // remove faq loop since we added it from array
    .replace(/\{navLinks\.map[\s\S]*?\}\)/g, '')
    .replace(/\{[^}]*\}/g, ' ')
    .replace(/&amp;/g, 'and')
    .replace(/&rarr;/g, ' ')
    .replace(/&nbsp;/g, ' ');

  allText.push(textWithoutTags);
  const fullString = allText.join(' ');
  const words = fullString
    .trim()
    .split(/\s+/)
    .filter(w => w.length > 0 && !/^[\d\.\,\:\;\(\)\[\]\{\}\/\\-]+$/.test(w) || /^₹\d+/.test(w) || /^\d+%/.test(w));

  return words;
}

const words = getExactText(clientContent);
console.log(`\n========================================`);
console.log(`TOTAL EDITORIAL WORD COUNT: ${words.length}`);
console.log(`TARGET RANGE: 1,800 - 2,200 WORDS`);
console.log(`STATUS: ${words.length >= 1800 && words.length <= 2200 ? 'PERFECT! IN RANGE!' : (words.length < 1800 ? 'UNDER BUDGET - NEED MORE CONTENT' : 'OVER BUDGET - NEED TRIMMING')}`);
console.log(`========================================\n`);
