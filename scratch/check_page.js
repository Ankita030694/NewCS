const fs = require('fs');
const path = require('path');

const pagePath = '/Users/apple/Desktop/ama/credsettle/NewCS/src/app/rbi-july-2026-recovery-guidelines/page.tsx';
const clientPath = '/Users/apple/Desktop/ama/credsettle/NewCS/src/app/rbi-july-2026-recovery-guidelines/RbiGuidelinesClient.tsx';

let hasErrors = false;

function check(condition, message) {
  if (!condition) {
    console.error(`❌ Error: ${message}`);
    hasErrors = true;
  } else {
    console.log(`✅ Passed: ${message}`);
  }
}

if (!fs.existsSync(pagePath) || !fs.existsSync(clientPath)) {
  console.error("Files do not exist yet.");
  process.exit(1);
}

const pageContent = fs.readFileSync(pagePath, 'utf8');
const clientContent = fs.readFileSync(clientPath, 'utf8');
const combinedContent = pageContent + " " + clientContent;

// 1. Word count (approximate)
// Removing tags to count words in text
const textOnly = combinedContent.replace(/<[^>]*>?/gm, ' ');
const words = textOnly.split(/\s+/).filter(w => w.length > 0);
check(words.length >= 3000, `Word count is ${words.length}, needs to be >= 3000`);

// 2. Schemas
check(pageContent.includes('@type\': \'Article\'') || pageContent.includes('"@type": "Article"'), "Article schema found");
check(pageContent.includes('@type\': \'BreadcrumbList\'') || pageContent.includes('"@type": "BreadcrumbList"'), "Breadcrumb schema found");
check(clientContent.includes('@type\': \'FAQPage\'') || clientContent.includes('"@type": "FAQPage"'), "FAQ schema found");

// Reviews inside Organization or LegalService schema
const hasReviews = (pageContent.match(/@type['"]?:\s*['"]Review['"]/g) || []).length;
check(hasReviews >= 5, `Found ${hasReviews} reviews, needs to be >= 5`);

// 3. FAQs
const faqs = (clientContent.match(/question:\s*['"`]/g) || []).length;
check(faqs >= 10, `Found ${faqs} FAQs, needs to be >= 10`);

// 4. No em dashes
const emDashMatch = combinedContent.match(/—/g);
check(!emDashMatch, `Found em dashes. Needs to be removed.`);

if (hasErrors) {
  process.exit(1);
} else {
  console.log("All checks passed!");
}
