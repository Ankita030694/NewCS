import re
from datetime import datetime

# 1. Update Footer
footer_path = "src/components/Footer.tsx"
with open(footer_path, "r") as f:
    footer_content = f.read()

# Add to the "Queries" section
query_link = '\n                  <li><a href="/personal-loan-settlement" className="hover:text-white transition-colors">Personal Loan Settlement</a></li>'
if "/personal-loan-settlement" not in footer_content:
    # Find the end of the Queries section list
    # The Queries section looks like:
    # <h4 className="text-[#0C2756] font-bold mb-4 md:mb-6 text-sm md:text-base">Queries</h4>
    # <ul className="text-[rgba(12,39,86,0.70)] text-xs md:text-sm space-y-2 md:space-y-3 font-normal">
    # ...
    # </ul>
    # We can just inject it after the last <li> in that list or simply find the first </ul> after Queries
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

# 2. Update Sitemap
sitemap_path = "public/sitemap.xml"
try:
    with open(sitemap_path, "r") as f:
        sitemap_content = f.read()
except FileNotFoundError:
    sitemap_content = ""

if "/personal-loan-settlement" not in sitemap_content and sitemap_content:
    today = datetime.now().strftime("%Y-%m-%d")
    url_node = f"""
  <url>
    <loc>https://www.credsettle.com/personal-loan-settlement</loc>
    <lastmod>{today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>"""
    sitemap_content = sitemap_content.replace('</urlset>', url_node)
    with open(sitemap_path, "w") as f:
        f.write(sitemap_content)

print("Updated footer and sitemap")
