const fs = require('fs');
const path = require('path');

const clientPath = path.join(__dirname, '../src/app/settle-multiple-credit-cards/SettleMultipleCreditCardsClient.tsx');
const clientContent = fs.readFileSync(clientPath, 'utf8');

// Check em-dashes
const emDashMatch = clientContent.match(/[—–]/g);
if (emDashMatch) {
  console.log('WARNING: Found', emDashMatch.length, 'em-dashes / en-dashes!');
} else {
  console.log('SUCCESS: Zero em-dashes / en-dashes found.');
}

// Extract all textual content from JSX and strings
// Strip imports, interfaces, variable declarations, tags, etc.
let text = clientContent;

// Remove import statements
text = text.replace(/import\s+[\s\S]*?from\s+['"][^'"]+['"];?/g, '');

// Extract strings from faqs array
const faqMatch = clientContent.match(/const faqs = (\[[\s\S]*?\]);/);
let faqWords = 0;
if (faqMatch) {
  try {
    const faqs = eval(faqMatch[1]);
    faqs.forEach(f => {
      faqWords += f.q.split(/\s+/).filter(Boolean).length;
      faqWords += f.a.split(/\s+/).filter(Boolean).length;
    });
  } catch (e) {
    console.log('Error parsing faqs:', e);
  }
}

// Extract visible JSX text
// Remove JSX tags
let jsxOnly = clientContent.substring(clientContent.indexOf('return ('));
// remove attributes and tags
let visibleText = jsxOnly
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
  .replace(/&gt;/g, '>');

// Split into words
const allWords = visibleText.split(/\s+/).filter(w => w.trim().length > 0 && !w.match(/^[{}[\](),;=><"'/`]+$/));

console.log('Total visible words counted in JSX:', allWords.length);
console.log('FAQ words included in FAQ array:', faqWords);
