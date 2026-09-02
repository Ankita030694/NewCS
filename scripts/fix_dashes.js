const fs = require('fs');
const path = require('path');

const clientPath = path.join(__dirname, '../src/app/settle-multiple-credit-cards/SettleMultipleCreditCardsClient.tsx');
let content = fs.readFileSync(clientPath, 'utf8');

// Find all dashes
const dashes = content.match(/[—–]/g);
console.log('Found dashes:', dashes);

// Replace dashes with standard hyphens or commas
content = content.replace(/[—–]/g, '-');
fs.writeFileSync(clientPath, content, 'utf8');
console.log('Fixed dashes in SettleMultipleCreditCardsClient.tsx');

// Also check page.tsx
const pagePath = path.join(__dirname, '../src/app/settle-multiple-credit-cards/page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');
pageContent = pageContent.replace(/[—–]/g, '-');
fs.writeFileSync(pagePath, pageContent, 'utf8');
console.log('Fixed dashes in page.tsx');
