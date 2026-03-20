const fs = require('fs');
const path = require('path');

const files = [
    'src/app/which-professional-services-assist-in-negotiating-loan-settlement-terms/ProfessionalServicesClient.tsx',
    'src/app/what-are-the-interest-savings-by-settling-loans-early-through-digital-services/InterestSavingsClient.tsx',
    'src/app/are-there-specialized-programs-for-settling-student-loan-defaults-in-india/StudentLoanSettlementClient.tsx',
    'src/app/available-loan-settlement-plans-for-salaried-individuals-via-fintech-apps/SalariedFintechSettlementClient.tsx'
];

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        const wordCount = content.split(/\s+/).length;
        const hasEmDash = content.includes('—');
        
        console.log(`File: ${file}`);
        console.log(`Word count: ~${wordCount}`);
        console.log(`Contains em-dash: ${hasEmDash}`);
        if (hasEmDash) {
            console.log(`Error: File contains em-dash (—).`);
        }
        if (wordCount < 5000) {
            console.log(`Warning: Word count is less than 5000.`);
        }
        console.log('---');
    } else {
        console.log(`File not found: ${file}`);
    }
});
