import sys

file_path = '/Users/apple/Desktop/ama/credsettle/NewCS/src/app/sitemap.xml/route.ts'
with open(file_path, 'r') as f:
    lines = f.readlines()

target = '`${baseUrl}/what-questions-should-i-ask-a-debt-settlement-consultant`,'
new_blocks = """
  urls.push({
    loc: `${baseUrl}/customer-testimonials-for-debt-settlement-service-providers`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/debt-settlement-options-for-freelancers-and-self-employed-individuals`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });
"""

found = False
new_lines = []
for i in range(len(lines)):
    new_lines.append(lines[i])
    if target in lines[i] and not found:
        # skip until the end of the push block (next '  });')
        for j in range(i + 1, len(lines)):
            if '  });' in lines[j]:
                # find where to insert after this block
                insert_pos = j + 1
                # Check if next lines are just whitespace
                while insert_pos < len(lines) and lines[insert_pos].strip() == '':
                    insert_pos += 1
                # Insert here
                # We will append the rest of the file after new_blocks
                # But wait, I need to make sure I don't duplicate if they are already there (they aren't now because I deleted them)
                break
        
        # Actually a simpler way: just replace a known range
        pass

# Let's just do a string replace on the whole content if it's not too big
with open(file_path, 'r') as f:
    content = f.read()

# Restore the mess I made
import re
content = re.sub(r'baseUrl\}/what-questions-should-i-ask-a-debt-settlement-consultant`,\s*priority: 0\.95,\s*changefreq: \'weekly\',\s*lastmod: today\s*\}\);\s*\n\s*\n\s*priority:', 
                 r"baseUrl\}/what-questions-should-i-ask-a-debt-settlement-consultant`,\n    priority: 0.95,\n    changefreq: 'weekly',\n    lastmod: today\n  });\n\n  urls.push({\n    loc: `${baseUrl}/customer-testimonials-for-debt-settlement-service-providers`,\n    priority: 0.95,\n    changefreq: 'weekly',\n    lastmod: today\n  });\n\n  urls.push({\n    loc: `${baseUrl}/debt-settlement-options-for-freelancers-and-self-employed-individuals`,\n    priority: 0.95,\n    changefreq: 'weekly',\n    lastmod: today\n  });\n\n  urls.push({\n    loc: `${baseUrl}/which-banks-offer-debt-consolidation-loans-in-india`,\n    priority:", content)

with open(file_path, 'w') as f:
    f.write(content)

print("Sitemap fixed")
