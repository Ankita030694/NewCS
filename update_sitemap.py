import re

file_path = '/Users/amalegalsolutions/Desktop/AMAWORK/credsettlefigma/credsettle/src/app/sitemap.xml/route.ts'
with open(file_path, 'r') as f:
    content = f.read()

new_block = """
  urls.push({
    loc: `${baseUrl}/recovery-agent-came-to-my-office`,
    priority: 0.8,
    changefreq: 'weekly',
    lastmod: today
  });
"""

# Try to insert it before the closing brace of addHardcodedUrls or just append to the urls array
content = re.sub(r'(}\s*// ============================================================================)', new_block + r'\n\1', content)

with open(file_path, 'w') as f:
    f.write(content)
