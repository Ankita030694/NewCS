import re
from datetime import datetime

# 1. Update Footer
footer_path = "src/components/Footer.tsx"
with open(footer_path, "r") as f:
    footer_content = f.read()

query_link = '\n                  <li><a href="/icici-credit-card-settlement" className="hover:text-white transition-colors">ICICI Credit Card Settlement</a></li>'
if "/icici-credit-card-settlement" not in footer_content:
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
            print("Footer updated.")

# 2. Update Sitemap
sitemap_path = "public/sitemap.xml"
try:
    with open(sitemap_path, "r") as f:
        sitemap_content = f.read()
except FileNotFoundError:
    sitemap_content = ""

if "/icici-credit-card-settlement" not in sitemap_content and sitemap_content:
    today = datetime.now().strftime("%Y-%m-%d")
    url_node = f"""
  <url>
    <loc>https://www.credsettle.com/icici-credit-card-settlement</loc>
    <lastmod>{today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>"""
    sitemap_content = sitemap_content.replace('</urlset>', url_node)
    with open(sitemap_path, "w") as f:
        f.write(sitemap_content)
    print("Sitemap updated.")

