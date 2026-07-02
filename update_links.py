import re
from datetime import datetime

# 1. Update Footer.tsx
footer_path = 'credsettle/src/components/Footer.tsx'
with open(footer_path, 'r') as f:
    footer_content = f.read()

new_footer_link = '              <a href="/loan-settlement-for-senior-citizens-pension-holders-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Settlement for Senior Citizens...</a>\n'

# Find the end of the queries section
if new_footer_link not in footer_content:
    footer_content = footer_content.replace('            </div>\n          </div>\n\n        </div>\n      </div>', new_footer_link + '            </div>\n          </div>\n\n        </div>\n      </div>')
    with open(footer_path, 'w') as f:
        f.write(footer_content)
    print("Updated Footer.tsx")

# 2. Update sitemap.xml/route.ts
sitemap_path = 'credsettle/src/app/sitemap.xml/route.ts'
with open(sitemap_path, 'r') as f:
    sitemap_content = f.read()

today = datetime.now().strftime('%Y-%m-%d')
new_sitemap_url = f'''  <url>
    <loc>https://credsettle.com/loan-settlement-for-senior-citizens-pension-holders-india</loc>
    <lastmod>{today}</lastmod>
    <priority>0.80</priority>
  </url>
'''

if 'loan-settlement-for-senior-citizens-pension-holders-india' not in sitemap_content:
    sitemap_content = sitemap_content.replace('</urlset>', new_sitemap_url + '</urlset>')
    with open(sitemap_path, 'w') as f:
        f.write(sitemap_content)
    print("Updated sitemap.xml route.ts")

