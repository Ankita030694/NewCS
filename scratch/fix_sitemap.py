import sys

with open('src/app/sitemap.xml/route.ts', 'r') as f:
    lines = f.readlines()

new_lines = [
    '  urls.push({\n',
    '    loc: `${baseUrl}/how-to-get-800-credit-score-in-india`,\n',
    '    priority: 0.95,\n',
    '    changefreq: \'weekly\',\n',
    '    lastmod: today\n',
    '  });\n',
    '\n',
    '  urls.push({\n',
    '    loc: `${baseUrl}/best-time-for-loan-settlement`,\n',
    '    priority: 0.95,\n',
    '    changefreq: \'weekly\',\n',
    '    lastmod: today\n',
    '  });\n',
    '\n',
    '  // Main Loan Settlement Page\n',
    '  urls.push({\n',
    '    loc: `${baseUrl}/loan-settlement`,\n',
    '    priority: 0.95, // Very high priority\n',
    '    changefreq: \'weekly\',\n',
    '    lastmod: today\n',
    '  });\n',
    '\n',
    '  // HDFC Loan Settlement Page\n',
    '  urls.push({\n',
    '    loc: `${baseUrl}/loan-settlement/hdfc`,\n',
    '    priority: 0.9,\n',
    '    changefreq: \'weekly\',\n',
    '    lastmod: today\n',
    '  });\n',
    '\n',
    '  // SBI Loan Settlement Page\n',
    '  urls.push({\n',
    '    loc: `${baseUrl}/loan-settlement/sbi`,\n',
    '    priority: 0.9,\n',
    '    changefreq: \'weekly\',\n',
    '    lastmod: today\n',
    '  });\n',
    '\n'
]

# Insert after line 812 (index 812)
lines.insert(812, "".join(new_lines))

with open('src/app/sitemap.xml/route.ts', 'w') as f:
    f.writelines(lines)
