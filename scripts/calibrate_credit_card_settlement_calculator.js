const fs = require('fs');
const path = require('path');

const clientFilePath = path.join(__dirname, '../src/app/credit-card-settlement-calculator/CreditCardSettlementCalculatorClient.tsx');
const content = fs.readFileSync(clientFilePath, 'utf8');

// Check em-dashes
const emDashCount = (content.match(/—/g) || []).length;
console.log('Em-dash count:', emDashCount);

// Extract text from client component
// Remove imports, code logic, JSX tags, and calculate rendered word count
function extractText(src) {
  // Extract all text inside JSX elements, FAQ arrays, strings, etc.
  // A robust way is to strip script / JSX syntax
  let text = src;
  
  // Remove import statements
  text = text.replace(/import\s+[\s\S]*?from\s+['"][^'"]+['"];?/g, '');
  // Remove code blocks, useState, useEffect, functions
  text = text.replace(/const\s+\[[\s\S]*?\]\s*=\s*useState[\s\S]*?;/g, '');
  text = text.replace(/useEffect\([\s\S]*?\n\s*\);/g, '');
  
  // Extract string literals from faqs array
  const faqMatches = [];
  const faqRegex = /q:\s*'([^']+)',\s*a:\s*'([^']+)'/g;
  let match;
  while ((match = faqRegex.exec(src)) !== null) {
    faqMatches.push(match[1] + ' ' + match[2]);
  }

  // Also remove the faqs array definition from text to avoid double counting
  text = text.replace(/const\s+faqs\s*=\s*\[[\s\S]*?\];/g, '');
  text = text.replace(/const\s+navLinks\s*=\s*\[[\s\S]*?\];/g, '');

  // Strip JSX tags
  text = text.replace(/<[^>]+>/g, ' ');
  // Replace HTML entities
  text = text.replace(/&amp;/g, '&')
             .replace(/&#8377;/g, '₹')
             .replace(/&quot;/g, '"')
             .replace(/&lt;/g, '<')
             .replace(/&gt;/g, '>');

  // Clean JS syntax artifacts
  text = text.replace(/\{`[^`]*`\}/g, ' ');
  text = text.replace(/\{[^}]+\}/g, ' ');
  text = text.replace(/export\s+default\s+function[\s\S]*?return\s*\(/g, ' ');
  text = text.replace(/\b(className|style|id|key|href|target|rel|type|sizes|priority|fill|onClick|min|max|step|value|onChange)\b/g, ' ');
  text = text.replace(/['"=;:{}()\[\],]/g, ' ');

  // Append FAQ text
  text += ' ' + faqMatches.join(' ');

  // Split words
  const words = text.trim().split(/\s+/).filter(w => w.length > 0 && !/^[\d+%-]+$/.test(w) && !/^(bg|text|border|p|py|px|m|my|mx|flex|grid|gap|rounded|col|sm|md|lg|xl|w|h|justify|items|sticky|top|z)-/i.test(w));
  
  return words;
}

const words = extractText(content);
console.log('Total extracted editorial words count:', words.length);

