const fs = require('fs');
const path = require('path');

const clientFilePath = path.join(__dirname, '../src/app/kreditbee-recovery-agent-harassment/KreditbeeRecoveryAgentHarassmentClient.tsx');
let content = fs.readFileSync(clientFilePath, 'utf8');

if (!content.includes('FileSpreadsheet,')) {
  content = content.replace('FileCheck,', 'FileCheck,\n  FileSpreadsheet,');
  fs.writeFileSync(clientFilePath, content, 'utf8');
  console.log("Added FileSpreadsheet to imports.");
} else {
  console.log("FileSpreadsheet already imported.");
}
