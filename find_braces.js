const fs = require('fs');
let content = fs.readFileSync('src/app/sitemap.xml/route.ts', 'utf8');
content = content.replace(/(["'`])(?:(?=(\\?))\2.)*?\1/g, (m) => m.replace(/[^\n]/g, ' '));
content = content.replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' '));
content = content.replace(/\/\/.*$/gm, ' ');
let lines = content.split('\n');
let depth = 0;
for (let i = 0; i < lines.length; i++) {
  for (let j = 0; j < lines[i].length; j++) {
    if (lines[i][j] === '{') {
      depth++;
      if (i > 2980) console.log(`Line ${i+1}: { -> depth ${depth}`);
    }
    else if (lines[i][j] === '}') {
      depth--;
      if (i > 2980) console.log(`Line ${i+1}: } -> depth ${depth}`);
    }
  }
}
