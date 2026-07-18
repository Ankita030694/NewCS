import re
from datetime import datetime

# 1. Update Footer
footer_path = "src/components/Footer.tsx"
with open(footer_path, "r") as f:
    footer_content = f.read()

# Add to the "Queries" section
query_link = '\n                  <li><a href="/rbi-guidelines-for-recovery-agents-2026" className="hover:text-white transition-colors">RBI Guidelines for Recovery Agents 2026</a></li>'
if "/rbi-guidelines-for-recovery-agents-2026" not in footer_content:
    queries_idx = footer_content.find('Queries</h4>')
    if queries_idx != -1:
        ul_start = footer_content.find('<ul', queries_idx)
        ul_end = footer_content.find('</ul>', ul_start)
        
        last_li_end = footer_content.rfind('</li>', ul_start, ul_end)
        if last_li_end != -1:
            insertion_point = last_li_end + 5
            footer_content = footer_content[:insertion_point] + query_link + footer_content[insertion_point:]
            with open(footer_path, "w") as f:
                f.write(footer_content)
            print("Added to Footer")

# 2. Update Sitemap route.ts
sitemap_path = "src/app/sitemap.xml/route.ts"
try:
    with open(sitemap_path, "r") as f:
        sitemap_content = f.read()
except FileNotFoundError:
    sitemap_content = ""

if "/rbi-guidelines-for-recovery-agents-2026" not in sitemap_content and sitemap_content:
    today = datetime.now().strftime("%Y-%m-%d")
    url_node = f"""  urls.push({{
    loc: `${{baseUrl}}/rbi-guidelines-for-recovery-agents-2026`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  }});

"""
    # Insert before the SECTION 2 comment or just at the end of SECTION 1
    insert_pos = sitemap_content.find('  // ========================================================================')
    # find the second occurrence of it, which should be section 2
    second_idx = sitemap_content.find('  // ========================================================================', insert_pos + 1)
    if second_idx != -1:
        sitemap_content = sitemap_content[:second_idx] + url_node + sitemap_content[second_idx:]
        with open(sitemap_path, "w") as f:
            f.write(sitemap_content)
        print("Added to Sitemap")
    else:
        # just append to urls before returning
        pass
