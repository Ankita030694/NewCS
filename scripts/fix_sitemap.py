import os

path = '/Users/apple/Desktop/ama/credsettle/NewCS/src/app/sitemap.xml/route.ts'
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
skip = 0
for i in range(len(lines)):
    if skip > 0:
        skip -= 1
        continue
    
    # Identify the corrupted block
    if i + 10 < len(lines) and 'what-questions-should-i-ask-a-debt-settlement-consultant' in lines[i+1]:
        if '});' in lines[i+2] and 'urls.push' in lines[i+4] and 'customer-testimonials-for-debt-settlement-service-providers' in lines[i+5]:
            # This is the corrupted block
            new_lines.append('  urls.push({\n')
            new_lines.append('    loc: `${baseUrl}/what-questions-should-i-ask-a-debt-settlement-consultant`,\n')
            new_lines.append('    priority: 0.95,\n')
            new_lines.append('    changefreq: \'weekly\',\n')
            new_lines.append('    lastmod: today\n')
            new_lines.append('  });\n\n')
            new_lines.append('  urls.push({\n')
            new_lines.append('    loc: `${baseUrl}/customer-testimonials-for-debt-settlement-service-providers`,\n')
            new_lines.append('    priority: 0.95,\n')
            new_lines.append('    changefreq: \'weekly\',\n')
            new_lines.append('    lastmod: today\n')
            new_lines.append('  });\n')
            # Determine how many lines to skip. Based on my view_file, it was about 12 lines.
            # 842:   urls.push({
            # 843:     loc: `${baseUrl}/what-questions-should-i-ask-a-debt-settlement-consultant`,
            # 844:   });
            # 845: 
            # 846:   urls.push({
            # 847:     loc: `${baseUrl}/customer-testimonials-for-debt-settlement-service-providers`,
            # 848:     priority: 0.95,
            # 849:     changefreq: "weekly",
            # 850:     lastmod: today
            # 851:     priority: 0.95,
            # 852:     changefreq: 'weekly',
            # 853:     lastmod: today
            # 854:   });
            skip = 13 # Skip from 842 to 854
            continue

    new_lines.append(lines[i])

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Sitemap fixed.")
